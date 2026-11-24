/**
 * CoCoFlix - Application Controller & User Interface Engine
 * Connected to live backend catalog (9,000+ titles from CoCoFlix APK)
 */

class CoCoFlixApp {
  constructor() {
    this.activeCategory = 'all';
    this.activeGenre = 'All Genres';
    this.searchQuery = '';
    this.currentHeroIndex = 0;
    this.heroInterval = null;
    
    // Pagination & Progressive Loading
    this.pageSize = 40;
    this.displayedCount = 40;
    this.isLoadingMore = false;

    // Watchlist & Playback history from localStorage
    this.watchlist = this.loadWatchlist();
    this.history = this.loadHistory();
    
    // Video player state
    this.activeMedia = null;
    this.currentSeasonNum = 1;
    this.currentEpisodeNum = 1;
    this.currentServer = 'server1';
    this.activeServers = { server1: '', server2: '' };
    this.hls = null;
    this.playbackWatchdog = null;

    this.init();
  }

  init() {
    this.setupHeaderScroll();
    this.initHeroCarousel();
    this.renderCategoryPills();
    this.renderMediaGrid();
    this.renderLiveChannels();
    this.setupSearch();
    this.setupEventListeners();
    this.setupInfiniteScroll();
    this.updateWatchlistBadge();

    // Trigger full background catalog load from data/*.json
    if (typeof loadFullCatalog === 'function') {
      loadFullCatalog(null, (total) => {
        this.renderCategoryPills();
        this.renderMediaGrid();
        this.updateHeroContent(this.currentHeroIndex);
        this.showToast(`Loaded ${total.toLocaleString()} live titles from CoCoFlix!`, 'success');
      });
    }

    // Auto-sync with app periodically every 20 minutes in the background
    setInterval(() => {
      this.syncWithApp(true);
    }, 1200000);
  }

  // --- Auto-Sync Catalog with CoCoFlix App Backend ---
  async syncWithApp(isBackground = false) {
    const btn = document.getElementById('btn-sync-catalog');
    if (btn) btn.classList.add('syncing');

    if (!isBackground) {
      this.showToast('Syncing with CoCoFlix App for new releases...', 'info');
    }

    try {
      // 1. Try server-side live sync API
      try {
        const resp = await fetch('/api/sync', { signal: AbortSignal.timeout(10000) });
        if (resp.ok) {
          const syncData = await resp.json();
          console.log('[CoCoFlix] Server-side sync complete:', syncData);
        }
      } catch (e) {
        // Fallback if running under basic http.server
      }

      // 2. Reload database in memory
      if (typeof loadFullCatalog === 'function') {
        await new Promise(resolve => loadFullCatalog(null, resolve));
      }

      this.renderCategoryPills();
      this.renderMediaGrid();
      this.updateHeroContent(this.currentHeroIndex);

      const total = COCO_DATA.totalLoaded || (COCO_DATA.movies.length + COCO_DATA.series.length);
      if (!isBackground) {
        this.showToast(`Catalog up to date! ${total.toLocaleString()} titles available.`, 'success');
      }
    } catch (err) {
      console.warn('Sync notice:', err);
    } finally {
      if (btn) btn.classList.remove('syncing');
    }
  }

  // --- LocalStorage Watchlist Management ---
  loadWatchlist() {
    try {
      const saved = localStorage.getItem('cocoflix_watchlist');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveWatchlist() {
    try {
      localStorage.setItem('cocoflix_watchlist', JSON.stringify(this.watchlist));
      this.updateWatchlistBadge();
    } catch (e) {
      console.error('Failed to save watchlist', e);
    }
  }

  isInWatchlist(id) {
    if (!id) return false;
    const sId = String(id);
    return this.watchlist.some(item => String(item.id) === sId);
  }

  toggleWatchlist(id) {
    const item = getContentById(id);
    if (!item) return;

    const sId = String(id);
    const index = this.watchlist.findIndex(w => String(w.id) === sId);
    if (index > -1) {
      this.watchlist.splice(index, 1);
      this.showToast(`Removed "${item.title}" from Watchlist`, 'info');
    } else {
      this.watchlist.push({
        id: item.id,
        title: item.title,
        type: item.type,
        year: item.year,
        rating: item.rating,
        poster: item.poster,
        category: item.category,
        addedAt: Date.now()
      });
      this.showToast(`Added "${item.title}" to Watchlist!`, 'success');
    }

    this.saveWatchlist();
    this.updateWatchlistUI();
  }

  updateWatchlistBadge() {
    const badge = document.getElementById('watchlist-count');
    if (badge) {
      badge.textContent = this.watchlist.length;
      badge.style.display = this.watchlist.length > 0 ? 'flex' : 'none';
    }
  }

  updateWatchlistUI() {
    document.querySelectorAll('.btn-card-fav').forEach(btn => {
      const id = btn.getAttribute('data-id');
      if (this.isInWatchlist(id)) {
        btn.classList.add('active');
        btn.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
      } else {
        btn.classList.remove('active');
        btn.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
      }
    });

    if (this.activeCategory === 'watchlist') {
      this.renderMediaGrid();
    }
  }

  // --- Playback History & Resume Memory ---
  loadHistory() {
    try {
      const saved = localStorage.getItem('cocoflix_history');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  }

  saveProgress(id, time) {
    try {
      this.history[id] = { time, updatedAt: Date.now() };
      localStorage.setItem('cocoflix_history', JSON.stringify(this.history));
    } catch (e) {}
  }

  getProgress(id) {
    return this.history[id] ? this.history[id].time : 0;
  }

  // --- Header Navigation Scroll ---
  setupHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --- Hero Carousel Controller ---
  initHeroCarousel() {
    const slidesContainer = document.getElementById('hero-slides');
    const dotsContainer = document.getElementById('hero-dots');
    if (!slidesContainer || !dotsContainer) return;

    slidesContainer.innerHTML = '';
    dotsContainer.innerHTML = '';

    COCO_DATA.featured.forEach((item, index) => {
      const slide = document.createElement('div');
      slide.className = `hero-slide ${index === 0 ? 'active' : ''}`;
      slide.style.backgroundImage = `url('${item.backdrop || item.poster}')`;
      slide.id = `hero-slide-${index}`;
      slidesContainer.appendChild(slide);

      const dot = document.createElement('div');
      dot.className = `hero-dot ${index === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => this.switchHeroSlide(index));
      dotsContainer.appendChild(dot);
    });

    this.updateHeroContent(0);
    this.startHeroTimer();
  }

  switchHeroSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    
    this.currentHeroIndex = index;
    this.updateHeroContent(index);
    this.restartHeroTimer();
  }

  updateHeroContent(index) {
    const item = COCO_DATA.featured[index];
    if (!item) return;

    const titleEl = document.getElementById('hero-title');
    const taglineEl = document.getElementById('hero-tagline');
    const descEl = document.getElementById('hero-desc');
    const qualityEl = document.getElementById('hero-quality');
    const ratingEl = document.getElementById('hero-rating');
    const genreEl = document.getElementById('hero-genre');
    const audioEl = document.getElementById('hero-audio');
    const durationEl = document.getElementById('hero-duration');
    const playBtn = document.getElementById('hero-play-btn');
    const favBtn = document.getElementById('hero-fav-btn');

    if (titleEl) titleEl.textContent = item.title;
    if (taglineEl) taglineEl.textContent = item.tagline || item.hindiTitle || '';
    if (descEl) descEl.textContent = item.description || `Watch ${item.title} online in HD quality on CoCoFlix.`;
    if (qualityEl) qualityEl.textContent = item.quality || '4K UHD';
    if (ratingEl) ratingEl.innerHTML = `<i class="fa-solid fa-star"></i> ${item.rating || '8.2'} IMDb`;
    if (genreEl) genreEl.textContent = item.genres ? item.genres.slice(0, 2).join(' • ') : '';
    if (audioEl) audioEl.textContent = item.audio || 'Hindi';
    if (durationEl) durationEl.textContent = item.duration || (item.seasonsCount ? `${item.seasonsCount} Seasons` : 'Movie');

    if (playBtn) {
      playBtn.onclick = () => this.openPlayer(item.id);
    }
    if (favBtn) {
      favBtn.onclick = () => this.toggleWatchlist(item.id);
      favBtn.innerHTML = this.isInWatchlist(item.id)
        ? '<i class="fa-solid fa-check"></i> In Watchlist'
        : '<i class="fa-solid fa-plus"></i> Add to List';
    }
  }

  startHeroTimer() {
    this.heroInterval = setInterval(() => {
      const nextIndex = (this.currentHeroIndex + 1) % COCO_DATA.featured.length;
      this.switchHeroSlide(nextIndex);
    }, 6500);
  }

  restartHeroTimer() {
    clearInterval(this.heroInterval);
    this.startHeroTimer();
  }

  // --- Category & Genre Filter Bar ---
  renderCategoryPills() {
    const container = document.getElementById('category-pills');
    if (!container) return;

    container.innerHTML = '';
    COCO_DATA.categories.forEach(cat => {
      const pill = document.createElement('button');
      pill.className = `cat-pill ${cat.id === this.activeCategory ? 'active' : ''}`;
      pill.innerHTML = `<i class="fa-solid ${cat.icon}"></i> ${cat.name}`;
      pill.addEventListener('click', () => {
        this.setCategory(cat.id);
      });
      container.appendChild(pill);
    });

    // Watchlist pill
    const favPill = document.createElement('button');
    favPill.className = `cat-pill ${this.activeCategory === 'watchlist' ? 'active' : ''}`;
    favPill.id = 'pill-watchlist';
    favPill.innerHTML = `<i class="fa-solid fa-bookmark"></i> My Watchlist`;
    favPill.addEventListener('click', () => {
      this.setCategory('watchlist');
    });
    container.appendChild(favPill);
  }

  setCategory(catId) {
    this.activeCategory = catId;
    this.displayedCount = this.pageSize; // Reset pagination

    document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
    
    const activePill = catId === 'watchlist' 
      ? document.getElementById('pill-watchlist')
      : Array.from(document.querySelectorAll('.cat-pill')).find(p => p.textContent.includes(COCO_DATA.categories.find(c => c.id === catId)?.name || ''));
    if (activePill) activePill.classList.add('active');

    // Also update navbar active state
    document.querySelectorAll('.nav-link-item').forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-cat') === catId);
    });

    // Toggle live section visibility
    const liveSection = document.getElementById('live-channels-section');
    if (liveSection) {
      liveSection.style.display = (catId === 'all' || catId === 'live') ? 'block' : 'none';
    }

    const moviesSection = document.getElementById('movies-section');
    if (moviesSection) {
      moviesSection.style.display = catId === 'live' ? 'none' : 'block';
    }

    this.renderMediaGrid();
  }

  // --- Content Filtering & Grid Rendering ---
  getFilteredItems() {
    let items = [];

    if (this.activeCategory === 'watchlist') {
      items = this.watchlist.map(w => getContentById(w.id)).filter(Boolean);
    } else {
      const all = getAllContent();
      
      if (this.activeCategory === 'all') {
        items = all;
      } else if (this.activeCategory === 'series') {
        items = all.filter(item => item.type === 'series' || item.category === 'series');
      } else if (this.activeCategory === 'dubbed') {
        items = all.filter(item => item.title && (
          item.title.toLowerCase().includes('(dual)') || 
          item.title.toLowerCase().includes('(hindi)') || 
          item.category === 'south'
        ));
      } else {
        items = all.filter(item => item.category === this.activeCategory);
      }
    }

    // Filter by Genre
    if (this.activeGenre && this.activeGenre !== 'All Genres') {
      const qG = this.activeGenre.toLowerCase();
      items = items.filter(item => 
        item.genres && item.genres.some(g => g.toLowerCase().includes(qG))
      );
    }

    // Filter by Search Query
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      items = items.filter(item => 
        (item.title && item.title.toLowerCase().includes(q)) ||
        (item.hindiTitle && item.hindiTitle.toLowerCase().includes(q)) ||
        (item.genre && item.genre.toLowerCase().includes(q))
      );
    }

    return items;
  }

  renderMediaGrid() {
    const grid = document.getElementById('media-grid');
    const titleEl = document.getElementById('catalog-title');
    const countEl = document.getElementById('catalog-count');
    if (!grid) return;

    const items = this.getFilteredItems();

    // Update section title & count
    if (titleEl) {
      if (this.activeCategory === 'watchlist') titleEl.textContent = 'My Watchlist';
      else if (this.activeCategory === 'all') titleEl.textContent = 'Trending Movies & Series';
      else titleEl.textContent = COCO_DATA.categories.find(c => c.id === this.activeCategory)?.name || 'Catalog';
    }
    if (countEl) countEl.textContent = `${items.length.toLocaleString()} Titles`;

    if (items.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 40px; margin-bottom: 16px; color: var(--text-sub);"></i>
          <h3 style="font-size: 20px; font-weight: 700; color: #fff; margin-bottom: 8px;">No Titles Found</h3>
          <p style="font-size: 14px;">Try searching for another movie, or changing your category filter.</p>
        </div>
      `;
      return;
    }

    // Slice for smooth pagination
    const visibleItems = items.slice(0, this.displayedCount);
    let cardsHTML = visibleItems.map(item => this.createMediaCardHTML(item)).join('');

    // Append Load More button if remaining
    if (this.displayedCount < items.length) {
      const remaining = items.length - this.displayedCount;
      cardsHTML += `
        <div class="load-more-container">
          <button id="btn-load-more" class="btn-load-more">
            <i class="fa-solid fa-layer-group"></i> Load More (${remaining.toLocaleString()} Remaining)
          </button>
        </div>
      `;
    }

    grid.innerHTML = cardsHTML;

    // Attach click events to cards
    grid.querySelectorAll('.media-card').forEach(card => {
      const id = card.getAttribute('data-id');
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-card-fav')) return;
        this.openDetailModal(id);
      });
    });

    // Attach bookmark events
    grid.querySelectorAll('.btn-card-fav').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        this.toggleWatchlist(id);
      });
    });

    // Attach Load More button click
    const loadMoreBtn = document.getElementById('btn-load-more');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        this.loadMore();
      });
    }
  }

  loadMore() {
    const items = this.getFilteredItems();
    if (this.displayedCount >= items.length) return;

    this.isLoadingMore = true;
    this.displayedCount += this.pageSize;
    this.renderMediaGrid();

    setTimeout(() => {
      this.isLoadingMore = false;
    }, 200);
  }

  setupInfiniteScroll() {
    window.addEventListener('scroll', () => {
      if (this.isLoadingMore) return;
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 800) {
        const items = this.getFilteredItems();
        if (this.displayedCount < items.length) {
          this.loadMore();
        }
      }
    });
  }

  createMediaCardHTML(item) {
    const isFav = this.isInWatchlist(item.id);
    const metaText = item.type === 'series' 
      ? `${item.seasonsCount || item.seasons || 1} Seasons`
      : (item.duration || 'Movie');

    const ratingBadge = item.rating ? `
      <span class="card-rating-badge"><i class="fa-solid fa-star"></i> ${item.rating}</span>
    ` : '';

    const posterSrc = item.poster || 'assets/images/placeholder_1.png';

    return `
      <div class="media-card" data-id="${item.id}">
        <div class="media-poster-wrap">
          <img src="${posterSrc}" alt="${item.title}" class="media-poster-img" loading="lazy" onerror="this.onerror=null; this.src='assets/images/placeholder_1.png'">
          <span class="card-quality-badge">${item.quality || 'HD'}</span>
          ${ratingBadge}
          
          <div class="card-hover-overlay">
            <div class="card-play-circle">
              <i class="fa-solid fa-play"></i>
            </div>
            <span style="font-size: 11px; text-align: center; color: var(--text-muted); font-weight: 600;">Click to Stream</span>
          </div>
        </div>

        <button class="btn-card-fav ${isFav ? 'active' : ''}" data-id="${item.id}" title="${isFav ? 'Remove from Watchlist' : 'Add to Watchlist'}">
          <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
        </button>

        <div class="card-info">
          <h4 class="card-title" title="${item.title}">${item.title}</h4>
          <div class="card-meta-row">
            <span class="card-year-tag">${item.year || 2024}</span>
            <span class="card-type-tag">${item.type === 'series' ? 'Series' : (item.genres ? item.genres[0] : 'Movie')}</span>
            <span style="font-size: 11px; color: var(--text-sub);">${metaText}</span>
          </div>
        </div>
      </div>
    `;
  }

  // --- Live TV & Sports Section ---
  renderLiveChannels() {
    const grid = document.getElementById('live-grid');
    if (!grid) return;

    grid.innerHTML = COCO_DATA.liveChannels.map(ch => `
      <div class="live-channel-card" data-id="${ch.id}">
        <div class="live-top-row">
          <span class="live-beacon">
            <span class="pulse-dot"></span> LIVE
          </span>
          <span style="font-size: 11px; font-weight: 700; color: #ff858d; text-transform: uppercase;">
            ${ch.badge}
          </span>
        </div>

        <div style="display: flex; gap: 14px; align-items: center;">
          <div class="live-channel-icon-wrap">
            <i class="fa-solid ${ch.logo}"></i>
          </div>
          <div class="live-channel-details">
            <h4 class="live-channel-name">${ch.name}</h4>
            <p class="live-program-title">${ch.currentProgram}</p>
          </div>
        </div>

        <div class="live-bottom-row">
          <span class="live-viewers"><i class="fa-solid fa-users"></i> ${ch.viewers}</span>
          <span style="background: rgba(255,255,255,0.08); padding: 2px 7px; border-radius: 4px; font-size: 10px; font-weight: 700;">
            ${ch.resolution}
          </span>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.live-channel-card').forEach(card => {
      const id = card.getAttribute('data-id');
      card.addEventListener('click', () => {
        this.openLiveStream(id);
      });
    });
  }

  // --- Real-Time Instant Search ---
  setupSearch() {
    const input = document.getElementById('search-input');
    const dropdown = document.getElementById('search-dropdown');
    const clearBtn = document.getElementById('search-clear');
    if (!input || !dropdown) return;

    input.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      this.searchQuery = query;
      this.displayedCount = this.pageSize; // Reset pagination

      if (clearBtn) clearBtn.style.display = query ? 'block' : 'none';

      if (query.length > 0) {
        const matches = getAllContent().filter(item => 
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          (item.genre && item.genre.toLowerCase().includes(query.toLowerCase()))
        ).slice(0, 8);

        if (matches.length > 0) {
          dropdown.innerHTML = matches.map(m => `
            <div class="search-result-item" data-id="${m.id}">
              <img src="${m.poster}" class="search-result-thumb" onerror="this.onerror=null; this.src='assets/images/placeholder_1.png'">
              <div class="search-result-info">
                <div class="search-result-title">${m.title}</div>
                <div class="search-result-meta">
                  <span>${m.year || 2024}</span> • 
                  <span style="color: var(--accent-gold);"><i class="fa-solid fa-star"></i> ${m.rating || '8.0'}</span> • 
                  <span style="text-transform: capitalize;">${m.type}</span>
                </div>
              </div>
            </div>
          `).join('');
          dropdown.classList.add('show');

          dropdown.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
              const id = item.getAttribute('data-id');
              dropdown.classList.remove('show');
              this.openDetailModal(id);
            });
          });
        } else {
          dropdown.innerHTML = `
            <div style="padding: 16px; text-align: center; color: var(--text-sub); font-size: 13px;">
              No matching titles found
            </div>
          `;
          dropdown.classList.add('show');
        }

        this.renderMediaGrid();
      } else {
        dropdown.classList.remove('show');
        this.renderMediaGrid();
      }
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        this.searchQuery = '';
        clearBtn.style.display = 'none';
        dropdown.classList.remove('show');
        this.renderMediaGrid();
      });
    }

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) {
        dropdown.classList.remove('show');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== input) {
        e.preventDefault();
        input.focus();
      }
    });
  }

  // --- Movie / Series Detail Modal ---
  openDetailModal(id) {
    const item = getContentById(id);
    if (!item) return;

    const modal = document.getElementById('detail-modal');
    if (!modal) return;

    const posterSrc = item.poster || 'assets/images/placeholder_1.png';
    const backdropSrc = item.backdrop || posterSrc;
    document.getElementById('modal-detail-backdrop').style.backgroundImage = `url('${backdropSrc}')`;
    document.getElementById('modal-detail-poster').src = posterSrc;
    document.getElementById('modal-detail-title').textContent = item.title;
    document.getElementById('modal-detail-hindi').textContent = item.hindiTitle || '';
    document.getElementById('modal-detail-desc').textContent = item.description || `Watch ${item.title} (${item.year || 2024}) online in high quality on CoCoFlix. Multiple fast streaming servers available.`;
    document.getElementById('modal-detail-rating').innerHTML = `<i class="fa-solid fa-star"></i> ${item.rating || '8.0'} IMDb`;
    document.getElementById('modal-detail-year').textContent = item.year || 2024;
    document.getElementById('modal-detail-quality').textContent = item.quality || 'HD';
    document.getElementById('modal-detail-duration').textContent = item.duration || (item.seasonsCount ? `${item.seasonsCount} Seasons` : 'Full Movie');
    document.getElementById('modal-detail-audio').textContent = item.audio || 'Hindi';
    
    // Genres badges
    const genreContainer = document.getElementById('modal-detail-genres');
    if (genreContainer && item.genres) {
      genreContainer.innerHTML = item.genres.map(g => `<span class="badge-tag genre">${g}</span>`).join(' ');
    }

    // Cast & Director
    const castContainer = document.getElementById('modal-detail-cast');
    if (castContainer) {
      castContainer.innerHTML = `
        <p><strong>Category:</strong> ${item.category ? item.category.toUpperCase() : 'CoCoFlix Originals'}</p>
        <p><strong>Audio:</strong> ${item.audio || 'Hindi'}</p>
      `;
    }

    // Play & Watchlist Action Buttons
    const playBtn = document.getElementById('modal-detail-play-btn');
    if (playBtn) {
      playBtn.onclick = () => {
        this.closeModal('detail-modal');
        this.openPlayer(item.id);
      };
    }

    const favBtn = document.getElementById('modal-detail-fav-btn');
    if (favBtn) {
      favBtn.onclick = () => {
        this.toggleWatchlist(item.id);
        favBtn.innerHTML = this.isInWatchlist(item.id)
          ? '<i class="fa-solid fa-check"></i> In Watchlist'
          : '<i class="fa-solid fa-plus"></i> Watchlist';
      };
      favBtn.innerHTML = this.isInWatchlist(item.id)
        ? '<i class="fa-solid fa-check"></i> In Watchlist'
        : '<i class="fa-solid fa-plus"></i> Watchlist';
    }

    const dlBtn = document.getElementById('modal-detail-download-btn');
    if (dlBtn) {
      dlBtn.onclick = () => {
        this.openDownloadModal(item.id);
      };
    }

    modal.classList.add('active');
  }

  // --- Streaming Video Player Modal ---
  openPlayer(id, seasonNum = 1, episodeNum = 1) {
    const item = getContentById(id);
    if (!item) return;

    this.activeMedia = item;
    this.currentSeasonNum = seasonNum;
    this.currentEpisodeNum = episodeNum;

    const modal = document.getElementById('player-modal');
    const titleEl = document.getElementById('player-title');
    const subTitleEl = document.getElementById('player-subtitle');
    const episodesSection = document.getElementById('player-episodes-section');

    if (!modal) return;

    // Parse stream servers
    const rawStream = item.stream_url || item.streamUrl || '';
    const parts = rawStream.split('$').map(s => s.trim()).filter(Boolean);
    this.activeServers = {
      server1: parts[0] || rawStream,
      server2: parts[1] || parts[0] || rawStream
    };

    if (titleEl) titleEl.textContent = item.title;
    if (subTitleEl) subTitleEl.textContent = `${item.year || 2024} • ${item.audio || 'Hindi'} • ${item.quality || '1080p'}`;
    if (episodesSection) episodesSection.style.display = 'none';

    // Update server buttons
    document.querySelectorAll('.server-btn[data-server]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-server') === this.currentServer);
    });

    // Play active server
    this.playCurrentServer();

    modal.classList.add('active');
  }

  playCurrentServer() {
    const video = document.getElementById('main-video-player');
    const iframe = document.getElementById('main-iframe-player');
    const externalLink = document.getElementById('player-external-link');
    const copyBtn = document.getElementById('player-copy-btn');
    if (!video || !this.activeMedia) return;

    const streamUrl = this.activeServers[this.currentServer] || this.activeServers.server1;
    if (externalLink) {
      externalLink.href = streamUrl || '#';
    }
    if (copyBtn) {
      copyBtn.onclick = () => this.copyStreamLink(streamUrl);
    }

    if (!streamUrl) {
      this.showToast('No direct stream link available for this server.', 'error');
      return;
    }

    const isM3u8 = streamUrl.includes('.m3u8') || streamUrl.includes('getm3u8');
    const isEmbed = streamUrl.includes('/play/') || streamUrl.includes('.html');

    if (isM3u8) {
      // Direct HLS / Video streaming in-page
      if (iframe) {
        iframe.style.display = 'none';
        iframe.src = 'about:blank';
      }
      video.style.display = 'block';

      if (window.Hls && Hls.isSupported()) {
        if (this.hls) this.hls.destroy();
        this.hls = new Hls({ enableWorker: true });
        this.hls.loadSource(streamUrl);
        this.hls.attachMedia(video);
        this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(e => console.log('Autoplay deferred:', e));
        });
        this.hls.on(Hls.Events.ERROR, (evt, data) => {
          if (data.fatal) {
            console.warn('[CoCoFlix] HLS error notice:', data.type);
          }
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = streamUrl;
        video.play().catch(e => console.log('Autoplay deferred:', e));
      } else {
        video.src = streamUrl;
      }
    } else if (isEmbed) {
      // In-page embedded cloud player
      if (this.hls) {
        this.hls.destroy();
        this.hls = null;
      }
      video.pause();
      video.style.display = 'none';
      if (iframe) {
        iframe.style.display = 'block';
        iframe.src = streamUrl;
      }
    } else {
      if (iframe) {
        iframe.style.display = 'none';
        iframe.src = 'about:blank';
      }
      video.style.display = 'block';
      video.src = streamUrl;
      video.play().catch(e => console.log('Direct play deferred:', e));
    }
  }

  openPwaGuide() {
    const modal = document.getElementById('pwa-guide-modal');
    if (modal) modal.classList.add('active');
  }

  copyStreamLink(url) {
    const streamUrl = url || (this.activeServers[this.currentServer] || this.activeServers.server1);
    if (!streamUrl) return;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(streamUrl).then(() => {
        this.showToast('Stream link copied! Open in VLC: Media -> Open Network Stream', 'success');
      }).catch(() => {
        prompt('Copy stream URL for VLC / IINA:', streamUrl);
      });
    } else {
      prompt('Copy stream URL for VLC / IINA:', streamUrl);
    }
  }

  // --- Live TV Stream Player ---
  openLiveStream(id) {
    const ch = COCO_DATA.liveChannels.find(c => c.id === id);
    if (!ch) return;

    const modal = document.getElementById('player-modal');
    const video = document.getElementById('main-video-player');
    const iframe = document.getElementById('main-iframe-player');
    const titleEl = document.getElementById('player-title');
    const subTitleEl = document.getElementById('player-subtitle');
    const episodesSection = document.getElementById('player-episodes-section');
    const externalLink = document.getElementById('player-external-link');

    if (!modal || !video) return;

    if (iframe) iframe.style.display = 'none';
    video.style.display = 'block';

    if (titleEl) titleEl.innerHTML = `<span class="live-beacon" style="margin-right: 8px;"><span class="pulse-dot"></span> LIVE</span> ${ch.name}`;
    if (subTitleEl) subTitleEl.textContent = `${ch.currentProgram} • ${ch.viewers}`;
    if (episodesSection) episodesSection.style.display = 'none';
    if (externalLink) externalLink.href = ch.streamUrl;

    if (window.Hls && Hls.isSupported()) {
      if (this.hls) this.hls.destroy();
      this.hls = new Hls();
      this.hls.loadSource(ch.streamUrl);
      this.hls.attachMedia(video);
      this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(e => {});
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = ch.streamUrl;
      video.play().catch(e => {});
    }

    modal.classList.add('active');
  }

  // --- Download Modal ---
  openDownloadModal(id) {
    const item = getContentById(id);
    if (!item) return;

    const modal = document.getElementById('download-modal');
    const grid = document.getElementById('download-options-grid');
    const titleEl = document.getElementById('download-modal-title');
    if (!modal || !grid) return;

    if (titleEl) titleEl.textContent = `Download: ${item.title}`;

    const downloads = [
      { quality: "1080p Full HD", size: "2.1 GB", format: "MP4" },
      { quality: "720p HD", size: "950 MB", format: "MP4" },
      { quality: "480p Mobile", size: "380 MB", format: "MP4" }
    ];

    grid.innerHTML = downloads.map(dl => `
      <div class="download-card-opt">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="dl-quality-name">${dl.quality}</span>
          <span style="font-size: 11px; background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 4px;">${dl.format}</span>
        </div>
        <div class="dl-size-tag"><i class="fa-solid fa-hard-drive"></i> Size: ${dl.size}</div>
        <button class="dl-btn" onclick="app.simulateDownload('${item.title}', '${dl.quality}')">
          <i class="fa-solid fa-download"></i> Download Fast
        </button>
      </div>
    `).join('');

    modal.classList.add('active');
  }

  simulateDownload(title, quality) {
    this.showToast(`Starting high-speed download for ${title} (${quality})...`, 'success');
  }

  // --- Close Modal Helper ---
  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      if (modalId === 'player-modal') {
        const video = document.getElementById('main-video-player');
        if (video) {
          video.pause();
          video.removeAttribute('src');
          video.load();
        }
        const iframe = document.getElementById('main-iframe-player');
        if (iframe) iframe.src = 'about:blank';
        if (this.hls) {
          this.hls.destroy();
          this.hls = null;
        }
      }
    }
  }

  // --- Toast Notification Display ---
  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast-item ${type}`;
    const icon = type === 'success' ? 'fa-circle-check' : (type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-info');
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  // --- Event Listeners Setup ---
  setupEventListeners() {
    // Genre dropdown change
    const genreSelect = document.getElementById('genre-select');
    if (genreSelect) {
      genreSelect.innerHTML = COCO_DATA.genres.map(g => `<option value="${g}">${g}</option>`).join('');
      genreSelect.addEventListener('change', (e) => {
        this.activeGenre = e.target.value;
        this.displayedCount = this.pageSize;
        this.renderMediaGrid();
      });
    }

    // Modal Close Buttons
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('.modal-overlay');
        if (modal) this.closeModal(modal.id);
      });
    });

    // Close on overlay backdrop click
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeModal(modal.id);
      });
    });

    // Server Switcher Buttons inside Player
    document.querySelectorAll('.server-btn[data-server]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.server-btn[data-server]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentServer = btn.getAttribute('data-server');
        this.playCurrentServer();
        this.showToast(`Switched to ${btn.textContent.trim()}`, 'info');
      });
    });

    // Navigation Category Links in Header
    document.querySelectorAll('.nav-link-item').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = link.getAttribute('data-cat');
        if (cat) this.setCategory(cat);
      });
    });

    // Mobile Bottom Navigation Links
    document.querySelectorAll('.mobile-nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = item.getAttribute('data-cat');
        document.querySelectorAll('.mobile-nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        if (cat) this.setCategory(cat);
      });
    });

    // PWA & Device Guide Modal Trigger
    const guideBtns = document.querySelectorAll('.open-pwa-guide-btn');
    guideBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openPwaGuide();
      });
    });

    // Telegram link handler
    document.querySelectorAll('.telegram-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        window.open(COCO_DATA.config.telegramUrl, '_blank');
      });
    });
  }
}

// Initialize application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new CoCoFlixApp();
});
