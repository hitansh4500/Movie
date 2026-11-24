import json

with open('/Users/hitansh/.gemini/antigravity/scratch/cocoflix-web/data/bollywood.json') as f:
    b = json.load(f)
with open('/Users/hitansh/.gemini/antigravity/scratch/cocoflix-web/data/hollywood.json') as f:
    h = json.load(f)
with open('/Users/hitansh/.gemini/antigravity/scratch/cocoflix-web/data/south.json') as f:
    o = json.load(f)
with open('/Users/hitansh/.gemini/antigravity/scratch/cocoflix-web/data/series.json') as f:
    s = json.load(f)
with open('/Users/hitansh/.gemini/antigravity/scratch/cocoflix-web/data/live.json') as f:
    l = json.load(f)

def normalize(item):
    genre_str = item.get('genre', '')
    genres = [g.strip() for g in genre_str.split(',') if g.strip()] if genre_str else ['Movie']
    return {
        'id': item.get('id', ''),
        'so': item.get('so', 0),
        'title': item.get('title', ''),
        'hindiTitle': item.get('title', ''),
        'year': item.get('year', 2024),
        'quality': item.get('quality', 'HD'),
        'genres': genres,
        'genre': genre_str,
        'poster': item.get('poster', ''),
        'stream_url': item.get('stream_url', ''),
        'download_url': item.get('download_url', ''),
        'category': item.get('category', 'bollywood'),
        'type': item.get('type', 'movie'),
        'rating': item.get('rating', '7.8'),
        'audio': 'Dual Audio' if 'dual' in item.get('title', '').lower() else ('Punjabi' if 'punjabi' in item.get('title', '').lower() else ('Hindi' if 'hindi' in item.get('title', '').lower() else 'Original'))
    }

instant_movies = [normalize(x) for x in (b[:40] + h[:40] + o[:30])]
instant_series = [normalize(x) for x in s[:30]]

out_path = '/Users/hitansh/.gemini/antigravity/scratch/cocoflix-web/assets/js/data.js'

script_content = f"""/**
 * CoCoFlix - Content Database & Data Layer
 * Real catalog extracted from CoCoFlix APK (dxk.pages.dev)
 * 9,000+ Titles: Bollywood, Hollywood, South Hindi Dubbed, Web Series & Live Channels
 */

const COCO_DATA = {{
  config: {{
    appName: "CoCoFlix Web",
    tagline: "Unlimited Movies, Series & Live Cricket Streaming",
    version: "1.0.0 Web Edition",
    telegramUrl: "https://t.me/cocoflixapp",
    officialWeb: "https://cocoflix.net"
  }},

  categories: [
    {{ id: "all", name: "All Titles", icon: "fa-film" }},
    {{ id: "bollywood", name: "Bollywood", icon: "fa-ticket" }},
    {{ id: "hollywood", name: "Hollywood", icon: "fa-clapperboard" }},
    {{ id: "dubbed", name: "Hindi Dubbed", icon: "fa-language" }},
    {{ id: "south", name: "South Hindi", icon: "fa-fire" }},
    {{ id: "series", name: "Web Series", icon: "fa-tv" }},
    {{ id: "live", name: "Live TV & Sports", icon: "fa-satellite-dish" }}
  ],

  genres: [
    "All Genres", "Action", "Comedy", "Drama", "Thriller", "Horror", 
    "Romance", "Crime", "Adventure", "Sci-Fi", "Animation", "Sports", "Mystery"
  ],

  featured: [
    {{
      id: "o_22240",
      title: "K.G.F: Chapter 2 (Hindi)",
      hindiTitle: "के.जी.एफ: चैप्टर 2",
      tagline: "The Bloodiest Battle of Kolar Gold Fields",
      type: "movie",
      category: "south",
      year: 2022,
      duration: "2h 48m",
      rating: "8.3",
      quality: "4K HDR",
      audio: "Hindi (Dolby Atmos)",
      poster: "https://image.tmdb.org/t/p/original/khNVygolU0TxLIDWff5tQlAhZ23.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/khNVygolU0TxLIDWff5tQlAhZ23.jpg",
      genres: ["Action", "Thriller", "Adventure", "South"],
      description: "In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a danger to law and order.",
      director: "Prashanth Neel",
      cast: ["Yash", "Sanjay Dutt", "Raveena Tandon", "Srinidhi Shetty"],
      stream_url: "https://awsindstream.com/play/tt10698680?tr=5&d=pikachu.app$https://yplay.site/getm3u8/OJB68UHF"
    }},
    {{
      id: "h_22237",
      title: "Evil Dead Burn : ORG (Dual)",
      hindiTitle: "ईविल डेड बर्न (हिंदी डब)",
      tagline: "Terror Reborn in the Shadows",
      type: "movie",
      category: "hollywood",
      year: 2026,
      duration: "1h 42m",
      rating: "7.8",
      quality: "HD 1080p",
      audio: "Dual Audio (Hindi + English)",
      poster: "https://image.tmdb.org/t/p/original/7JFVcU1uzv9zCfyMzLrsU04t8BU.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/7JFVcU1uzv9zCfyMzLrsU04t8BU.jpg",
      genres: ["Horror", "Thriller"],
      description: "A horrifying encounter begins when an ancient curse unleashes flesh-possessing demons, thrusting unsuspecting survivors into an unrelenting nightmare.",
      director: "Sam Raimi (Producer)",
      cast: ["Lily Sullivan", "Alyssa Sutherland", "Morgan Davies"],
      stream_url: "https://awsindstream.com/play/stt39137681?d=pikachu.app&noseasons=6&noepisodes=24$https://yplay.site/getm3u8/2DWJKPNQ"
    }},
    {{
      id: "b_22236",
      title: "Judaa (Punjabi) (HD-TC)",
      hindiTitle: "जुदा",
      tagline: "A Heartfelt Tale of Love and Separation",
      type: "movie",
      category: "bollywood",
      year: 2026,
      duration: "2h 15m",
      rating: "8.1",
      quality: "HD-TC",
      audio: "Punjabi (with Subtitles)",
      poster: "https://m.media-amazon.com/images/M/MV5BYjcxYjRmNzAtM2NhMy00MTAyLWJlMTUtZGVjNjBiNmVkZjU3XkEyXkFqcGc@._V1_.jpg",
      backdrop: "https://m.media-amazon.com/images/M/MV5BYjcxYjRmNzAtM2NhMy00MTAyLWJlMTUtZGVjNjBiNmVkZjU3XkEyXkFqcGc@._V1_.jpg",
      genres: ["Drama", "Romance"],
      description: "An emotional journey that navigates the depths of devotion, sacrifice, and the enduring bond between two souls tested by distance.",
      director: "Baljit Singh Deo",
      cast: ["Amrinder Gill", "Sargun Mehta"],
      stream_url: "https://awsindstream.com/play/ftt44276076?d=pikachu.app$https://yplay.site/getm3u8/4MCD2V3K"
    }},
    {{
      id: "b_22235",
      title: "7 Dogs (Hindi)",
      hindiTitle: "७ डॉग्स",
      tagline: "Seven Rogues, One Impossible Heist",
      type: "movie",
      category: "bollywood",
      year: 2026,
      duration: "2h 10m",
      rating: "7.9",
      quality: "CAM HD",
      audio: "Hindi",
      poster: "https://image.tmdb.org/t/p/original/66n5bB6iYTWsWMz0mh3Qv7qmzIJ.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/66n5bB6iYTWsWMz0mh3Qv7qmzIJ.jpg",
      genres: ["Action", "Comedy", "Thriller"],
      description: "Seven eccentric misfits assemble for a high-stakes robbery in Mumbai, only to find themselves chased by both gangsters and law enforcement.",
      director: "Rohit Shetty",
      cast: ["Varun Dhawan", "Jackie Shroff", "Pankaj Tripathi"],
      stream_url: "https://awsindstream.com/play/ftt35512499?d=pikachu.app$https://yplay.site/getm3u8/67OPR8MF"
    }},
    {{
      id: "s_7892",
      title: "My Bias My Boss (Dual)",
      hindiTitle: "माई बायस माई बॉस",
      tagline: "When Your Favorite Idol Becomes Your Boss",
      type: "series",
      category: "series",
      year: 2026,
      duration: "Season 1 (16 Eps)",
      rating: "6.4",
      quality: "HD 1080p",
      audio: "Dual Audio (Hindi Dubbed + Korean)",
      poster: "https://image.tmdb.org/t/p/original/A4Y4xlDHS4xi2WI9265vRyIYLoo.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/A4Y4xlDHS4xi2WI9265vRyIYLoo.jpg",
      genres: ["Comedy", "Drama", "Romance"],
      description: "A superfan is thrilled to get a job at a top entertainment firm, only to discover her ultimate idol is now her stern everyday boss.",
      director: "Park Joon-hwa",
      cast: ["Kim Se-jeong", "Ahn Hyo-seop"],
      seasonsCount: 1,
      stream_url: "https://awsindstream.com/play/stt39137681?d=pikachu.app$https://yplay.site/getm3u8/MH14ABXP"
    }}
  ],

  liveChannels: [
    {{
      id: "tv_42",
      name: "ZIM v IND",
      category: "Sports",
      badge: "LIVE CRICKET T20",
      currentProgram: "Zimbabwe vs India T20 Series - Live Coverage",
      logo: "fa-baseball-bat-ball",
      streamUrl: "https://pubuser934683.hls-video.net/hls/720p.mpd?index.m3u8",
      resolution: "720p 60FPS",
      isLive: true,
      viewers: "1.2M Watching"
    }},
    {{
      id: "tv_40",
      name: "Aaj Tak HD News",
      category: "News",
      badge: "LIVE NEWS 24/7",
      currentProgram: "Special Report & Primetime Debate Live",
      logo: "fa-newspaper",
      streamUrl: "https://feeds.intoday.in/aajtak/api/master.m3u8",
      resolution: "1080p Full HD",
      isLive: true,
      viewers: "650K Watching"
    }},
    {{
      id: "tv_36",
      name: "NDTV 24x7",
      category: "News",
      badge: "NATIONAL NEWS",
      currentProgram: "The Buck Stops Here - Live Broadcast",
      logo: "fa-tv",
      streamUrl: "https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678/ndtv24x7/ndtv24x7master.m3u8",
      resolution: "1080p HD",
      isLive: true,
      viewers: "340K Watching"
    }},
    {{
      id: "tv_38",
      name: "NDTV India",
      category: "News",
      badge: "HINDI SAMACHOR",
      currentProgram: "Prime Time With Ravish - Special Coverage",
      logo: "fa-satellite-dish",
      streamUrl: "https://ndtvindiaelemarchana.akamaized.net/hls/live/2003679/ndtvindia/ndtvindiamaster.m3u8",
      resolution: "1080p HD",
      isLive: true,
      viewers: "410K Watching"
    }}
  ],

  movies: {json.dumps(instant_movies, indent=2)},

  series: {json.dumps(instant_series, indent=2)}
}};

// Helper: Get all content items combined
function getAllContent() {{
  return [...COCO_DATA.movies, ...COCO_DATA.series];
}}

// Helper: Get single item by id
function getContentById(id) {{
  if (!id) return null;
  const sId = String(id);
  const feat = COCO_DATA.featured.find(item => String(item.id) === sId);
  if (feat) return feat;
  const mov = COCO_DATA.movies.find(item => String(item.id) === sId || String(item.so) === sId);
  if (mov) return mov;
  const ser = COCO_DATA.series.find(item => String(item.id) === sId || String(item.so) === sId);
  if (ser) return ser;
  const live = COCO_DATA.liveChannels.find(item => String(item.id) === sId);
  if (live) return live;
  return null;
}}

// Background Full Catalog Async Loader (loads all 9,000+ titles)
COCO_DATA.isLoaded = false;
COCO_DATA.totalLoaded = {len(instant_movies) + len(instant_series)};

async function loadFullCatalog(onProgress, onComplete) {{
  try {{
    const endpoints = [
      {{ name: 'bollywood', url: 'data/bollywood.json', cat: 'bollywood', type: 'movie' }},
      {{ name: 'hollywood', url: 'data/hollywood.json', cat: 'hollywood', type: 'movie' }},
      {{ name: 'south', url: 'data/south.json', cat: 'south', type: 'movie' }},
      {{ name: 'series', url: 'data/series.json', cat: 'series', type: 'series' }},
      {{ name: 'live', url: 'data/live.json', cat: 'live', type: 'live' }}
    ];

    const results = await Promise.allSettled(
      endpoints.map(async ep => {{
        const resp = await fetch(ep.url);
        if (!resp.ok) throw new Error(`HTTP ${{resp.status}}`);
        const data = await resp.json();
        return {{ ...ep, data }};
      }})
    );

    let allMovies = [];
    let allSeries = [];
    let liveList = [];

    results.forEach(res => {{
      if (res.status === 'fulfilled') {{
        const {{ cat, type, data }} = res.value;
        const normalized = data.map(item => {{
          const gStr = item.genre || '';
          const gList = gStr ? gStr.split(',').map(s => s.trim()).filter(Boolean) : ['Movie'];
          return {{
            id: item.id || `${{cat}}_${{item.so}}`,
            so: item.so,
            title: item.title,
            hindiTitle: item.title,
            year: item.year || 2024,
            quality: item.quality || 'HD',
            genres: gList,
            genre: gStr,
            poster: item.poster,
            stream_url: item.stream_url || '',
            download_url: item.download_url || '',
            category: cat,
            type: type,
            rating: item.rating || (type === 'movie' ? '7.9' : '8.2'),
            audio: (item.title && item.title.toLowerCase().includes('(dual)')) 
              ? 'Dual Audio (Hindi + Eng)' 
              : ((item.title && item.title.toLowerCase().includes('punjabi')) ? 'Punjabi' : 'Hindi')
          }};
        }});

        if (cat === 'series') {{
          allSeries = normalized;
        }} else if (cat === 'live') {{
          liveList = normalized;
        }} else {{
          allMovies.push(...normalized);
        }}
      }}
    }});

    if (allMovies.length > 0) {{
      COCO_DATA.movies = allMovies;
    }}
    if (allSeries.length > 0) {{
      COCO_DATA.series = allSeries;
    }}
    COCO_DATA.isLoaded = true;
    COCO_DATA.totalLoaded = COCO_DATA.movies.length + COCO_DATA.series.length;
    console.log(`[CoCoFlix] Successfully loaded ${{COCO_DATA.totalLoaded}} titles from live backend!`);
    
    if (onComplete) onComplete(COCO_DATA.totalLoaded);
  }} catch (err) {{
    console.warn('[CoCoFlix] Fetch error, using bundled offline data:', err);
    if (onComplete) onComplete(COCO_DATA.totalLoaded);
  }}
}}
"""

with open(out_path, 'w') as f:
    f.write(script_content)

print(f"Generated {out_path} successfully ({len(script_content)} bytes)")
