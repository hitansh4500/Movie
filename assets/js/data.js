/**
 * CoCoFlix - Content Database & Data Layer
 * Real catalog extracted from CoCoFlix APK (dxk.pages.dev)
 * 9,000+ Titles: Bollywood, Hollywood, South Hindi Dubbed, Web Series & Live Channels
 */

const COCO_DATA = {
  config: {
    appName: "CoCoFlix Web",
    tagline: "Unlimited Movies, Series & Live Cricket Streaming",
    version: "1.0.0 Web Edition",
    telegramUrl: "https://t.me/cocoflixapp",
    officialWeb: "https://cocoflix.net"
  },

  categories: [
    { id: "all", name: "All Titles", icon: "fa-film" },
    { id: "bollywood", name: "Bollywood", icon: "fa-ticket" },
    { id: "hollywood", name: "Hollywood", icon: "fa-clapperboard" },
    { id: "dubbed", name: "Hindi Dubbed", icon: "fa-language" },
    { id: "south", name: "South Hindi", icon: "fa-fire" },
    { id: "series", name: "Web Series", icon: "fa-tv" },
    { id: "live", name: "Live TV & Sports", icon: "fa-satellite-dish" }
  ],

  genres: [
    "All Genres", "Action", "Comedy", "Drama", "Thriller", "Horror", 
    "Romance", "Crime", "Adventure", "Sci-Fi", "Animation", "Sports", "Mystery"
  ],

  featured: [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    }
  ],

  liveChannels: [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    }
  ],

  movies: [
  {
    "id": "b_22236",
    "so": 22236,
    "title": "Judaa (Punjabi) (HD-TC)",
    "hindiTitle": "Judaa (Punjabi) (HD-TC)",
    "year": 2026,
    "quality": "CAM",
    "genres": [
      "Drama"
    ],
    "genre": "Drama",
    "poster": "https://m.media-amazon.com/images/M/MV5BYjcxYjRmNzAtM2NhMy00MTAyLWJlMTUtZGVjNjBiNmVkZjU3XkEyXkFqcGc@._V1_.jpg",
    "stream_url": "https://awsindstream.com/play/ftt44276076?d=pikachu.app$https://yplay.site/getm3u8/4MCD2V3K",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Punjabi"
  },
  {
    "id": "b_22235",
    "so": 22235,
    "title": "7 Dogs (Hindi)",
    "hindiTitle": "7 Dogs (Hindi)",
    "year": 2026,
    "quality": "CAM",
    "genres": [
      "Action",
      "Comedy"
    ],
    "genre": "Action,Comedy",
    "poster": "https://image.tmdb.org/t/p/original/66n5bB6iYTWsWMz0mh3Qv7qmzIJ.jpg",
    "stream_url": "https://awsindstream.com/play/ftt35512499?d=pikachu.app$https://yplay.site/getm3u8/67OPR8MF",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22221",
    "so": 22221,
    "title": "Dial 1975 (Hindi)",
    "hindiTitle": "Dial 1975 (Hindi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Thriller",
      "Drama"
    ],
    "genre": "Thriller,Drama",
    "poster": "https://image.tmdb.org/t/p/original/68M7izYXT9gGV5LOXfZ9OHyz0VO.jpg",
    "stream_url": "https://awsindstream.com/play/tt43595281?tr=5&d=pikachu.app$https://yplay.site/getm3u8/FHON4QS2",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22217",
    "so": 22217,
    "title": "The Great Grand Superhero (Hindi)",
    "hindiTitle": "The Great Grand Superhero (Hindi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Comedy",
      "Family",
      "Drama"
    ],
    "genre": "Comedy,Family,Drama",
    "poster": "https://image.tmdb.org/t/p/original/6CYmHknTN2UGGhqQUZh4tqQ6fEr.jpg",
    "stream_url": "https://awsindstream.com/play/tt40769151?tr=5&d=pikachu.app$https://yplay.site/getm3u8/0G2XHPVD",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22215",
    "so": 22215,
    "title": "Darna Zaroori Hai (Hindi)",
    "hindiTitle": "Darna Zaroori Hai (Hindi)",
    "year": 2006,
    "quality": "HD",
    "genres": [
      "Thriller",
      "Horror"
    ],
    "genre": "Thriller,Horror",
    "poster": "https://image.tmdb.org/t/p/original/g5cEhoRiJXedCGAKMQZEPiT2cp5.jpg",
    "stream_url": "https://awsindstream.com/play/tt0476649?tr=5&d=pikachu.app ",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22214",
    "so": 22214,
    "title": "Sikandar Ka Muqaddar (Hindi)",
    "hindiTitle": "Sikandar Ka Muqaddar (Hindi)",
    "year": 2024,
    "quality": "HD",
    "genres": [
      "Thriller",
      "Crime",
      "Mystery"
    ],
    "genre": "Thriller,Crime,Mystery",
    "poster": "https://image.tmdb.org/t/p/original/eWUh4rgxtgypgnOa6uGMnUt01ux.jpg",
    "stream_url": "https://awsindstream.com/play/tt31522415?tr=5&d=pikachu.app$https://yplay.site/getm3u8/7A0XVU2S",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22213",
    "so": 22213,
    "title": "Kudiyan Shehar Diyan (Punjabi)",
    "hindiTitle": "Kudiyan Shehar Diyan (Punjabi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama"
    ],
    "genre": "Drama",
    "poster": "https://image.tmdb.org/t/p/original/V8x1fGYI2hu7ofUrmKJAzRiwvi.jpg",
    "stream_url": "https://awsindstream.com/play/tt44122585?tr=5&d=pikachu.app$https://yplay.site/getm3u8/IX5WVT7P",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Punjabi"
  },
  {
    "id": "b_22199",
    "so": 22199,
    "title": "Welcome to the Jungle (Hindi)",
    "hindiTitle": "Welcome to the Jungle (Hindi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Action",
      "Comedy",
      "Adventure"
    ],
    "genre": "Action,Comedy,Adventure",
    "poster": "https://image.tmdb.org/t/p/original/1JlfUuvvX5xLP2LIDah4JhWUtTx.jpg",
    "stream_url": "https://awsindstream.com/play/stt39137681?d=pikachu.app&noseasons=6&noepisodes=35$https://yplay.site/getm3u8/MH14ABXP",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22197",
    "so": 22197,
    "title": "Shera (Punjabi)",
    "hindiTitle": "Shera (Punjabi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Action",
      "Drama"
    ],
    "genre": "Action,Drama",
    "poster": "https://image.tmdb.org/t/p/original/7qgjO10RA9Jd7ffXbYeqQAwf1WF.jpg",
    "stream_url": "https://awsindstream.com/play/tt41794494?tr=5&d=pikachu.app$https://yplay.site/getm3u8/EIWHZOVU",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Punjabi"
  },
  {
    "id": "b_22194",
    "so": 22194,
    "title": "Darna Mana Hai (Hindi)",
    "hindiTitle": "Darna Mana Hai (Hindi)",
    "year": 2003,
    "quality": "HD",
    "genres": [
      "Horror"
    ],
    "genre": "Horror",
    "poster": "https://image.tmdb.org/t/p/original/aoI022wesHyrQJJKu4mH0bcXuCD.jpg",
    "stream_url": "https://awsindstream.com/play/tt0349333?tr=5&d=pikachu.app",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22193",
    "so": 22193,
    "title": "Horror Story (Hindi)",
    "hindiTitle": "Horror Story (Hindi)",
    "year": 2013,
    "quality": "HD",
    "genres": [
      "Horror"
    ],
    "genre": "Horror",
    "poster": "https://image.tmdb.org/t/p/original/79qQhOqEJUuRdfGw5NQnylGnRNE.jpg",
    "stream_url": "https://awsindstream.com/play/tt3177332?tr=5&d=pikachu.app ",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22171",
    "so": 22171,
    "title": "Mumbai Meri Jaan (Hindi)",
    "hindiTitle": "Mumbai Meri Jaan (Hindi)",
    "year": 2008,
    "quality": "HD",
    "genres": [
      "Drama"
    ],
    "genre": "Drama",
    "poster": "https://image.tmdb.org/t/p/original/pzxh642LtRJLpCksGjCdUk9aiIk.jpg",
    "stream_url": "https://awsindstream.com/play/tt1266583?tr=5&d=pikachu.app$https://yplay.site/getm3u8/JC81NRX0",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22169",
    "so": 22169,
    "title": "Break Ke Baad (Hindi)",
    "hindiTitle": "Break Ke Baad (Hindi)",
    "year": 2010,
    "quality": "HD",
    "genres": [
      "Drama",
      "Comedy",
      "Romance"
    ],
    "genre": "Drama,Comedy,Romance",
    "poster": "https://image.tmdb.org/t/p/original/uFrpvaP98ZBu0c6PxzmTqFZd4K8.jpg",
    "stream_url": "https://awsindstream.com/play/tt1578261?tr=5&d=pikachu.app$https://yplay.site/getm3u8/KE2XMQCU",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22168",
    "so": 22168,
    "title": "3 Deewarein (Hindi)",
    "hindiTitle": "3 Deewarein (Hindi)",
    "year": 2003,
    "quality": "HD",
    "genres": [
      "Crime",
      "Drama"
    ],
    "genre": "Crime,Drama",
    "poster": "https://image.tmdb.org/t/p/original/2dvUYYXBiXsP3KKmSDap2BrknEg.jpg",
    "stream_url": "https://awsindstream.com/play/tt0338490?tr=5&d=pikachu.app$https://yplay.site/getm3u8/IYH0S9CM",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22167",
    "so": 22167,
    "title": "Tees Maar Khan (Hindi)",
    "hindiTitle": "Tees Maar Khan (Hindi)",
    "year": 2022,
    "quality": "HD",
    "genres": [
      "Action",
      "Thriller"
    ],
    "genre": "Action,Thriller",
    "poster": "https://image.tmdb.org/t/p/original/tTAB1D6A7w1eyao6mCf2TEn9GyK.jpg",
    "stream_url": "https://awsindstream.com/play/tt1572311?tr=5&d=pikachu.app$https://yplay.site/getm3u8/XM3C69W1",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22155",
    "so": 22155,
    "title": "Batwara 1947 (HD-TC)",
    "hindiTitle": "Batwara 1947 (HD-TC)",
    "year": 2026,
    "quality": "CAM",
    "genres": [
      "Action",
      "Drama",
      "War"
    ],
    "genre": "Action,Drama,War",
    "poster": "https://image.tmdb.org/t/p/original/u4qctwtUwTEnA1gqQhM84MUygXp.jpg",
    "stream_url": "https://awsindstream.com/play/ftt29330744?d=pikachu.app$https://yplay.site/getm3u8/4650FJKE$https://yplay.site/watch/4650FJKE?sinku",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Original"
  },
  {
    "id": "b_22153",
    "so": 22153,
    "title": "Awarapan 2 (HD-TC)",
    "hindiTitle": "Awarapan 2 (HD-TC)",
    "year": 2026,
    "quality": "CAM",
    "genres": [
      "Action",
      "Drama",
      "Romance"
    ],
    "genre": "Action,Drama,Romance",
    "poster": "https://image.tmdb.org/t/p/original/lD3J6zTbWkVtPYuSUuuBwpuKMCO.jpg",
    "stream_url": "https://awsindstream.com/play/ftt36300841?d=pikachu.app$https://yplay.site/getm3u8/YJCZAM9O",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Original"
  },
  {
    "id": "b_22142",
    "so": 22142,
    "title": "Jumper (Hindi)",
    "hindiTitle": "Jumper (Hindi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama"
    ],
    "genre": "Drama",
    "poster": "https://m.media-amazon.com/images/M/MV5BNTU5YTdiMGUtYzJkMy00ODFlLTkwY2EtNzhlNzU1ZWRlN2Q5XkEyXkFqcGc@._V1_.jpg",
    "stream_url": "https://awsindstream.com/play/stt39137681?d=pikachu.app&noseasons=6&noepisodes=32$https://yplay.site/getm3u8/FR529GBU",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22141",
    "so": 22141,
    "title": "Aakhri Sawal (Hindi)",
    "hindiTitle": "Aakhri Sawal (Hindi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama",
      "Thriller"
    ],
    "genre": "Drama,Thriller",
    "poster": "https://image.tmdb.org/t/p/original/9CXBZH6sRJpFTMSaY3wj1jx98F4.jpg",
    "stream_url": "https://awsindstream.com/play/stt39137681?d=pikachu.app&noseasons=6&noepisodes=31$https://yplay.site/getm3u8/YBWO10IQ",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22139",
    "so": 22139,
    "title": "Oye Bhole Oye 2 (Punjabi)",
    "hindiTitle": "Oye Bhole Oye 2 (Punjabi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Comedy",
      "Drama",
      "Action"
    ],
    "genre": "Comedy,Drama,Action",
    "poster": "https://image.tmdb.org/t/p/original/8SaPCG63K1A3K2qGBgxb5BMsJDH.jpg",
    "stream_url": "https://awsindstream.com/play/tt42111190?tr=9&d=pikachu.app$https://yplay.site/getm3u8/BRP7TNZI",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Punjabi"
  },
  {
    "id": "b_22135",
    "so": 22135,
    "title": "Bharat Bhhagya Viddhaata (Hindi)",
    "hindiTitle": "Bharat Bhhagya Viddhaata (Hindi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama",
      "Thriller"
    ],
    "genre": "Drama,Thriller",
    "poster": "https://image.tmdb.org/t/p/original/tf5lLrrikOswHKHpzW0UiHycJEx.jpg",
    "stream_url": "https://awsindstream.com/play/stt39137681?d=pikachu.app&noseasons=6&noepisodes=30$https://yplay.site/getm3u8/7BUOH26I",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22134",
    "so": 22134,
    "title": "Cocktail 2 (Hindi)",
    "hindiTitle": "Cocktail 2 (Hindi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Romance",
      "Comedy"
    ],
    "genre": "Romance,Comedy",
    "poster": "https://image.tmdb.org/t/p/original/oIQmtByV1LtEQSwM4EpdLTyoSlM.jpg",
    "stream_url": "https://awsindstream.com/play/stt39137681?d=pikachu.app&noseasons=6&noepisodes=29$https://yplay.site/getm3u8/QDPRUXC5$https://yplay.site/watch/QDPRUXC5?sinku",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22133",
    "so": 22133,
    "title": "G.D.N (Multi)",
    "hindiTitle": "G.D.N (Multi)",
    "year": 2026,
    "quality": "CAM",
    "genres": [
      "Drama"
    ],
    "genre": "Drama",
    "poster": "https://image.tmdb.org/t/p/original/f4CJS8MgxHalhCNQQCoHNN7wD0b.jpg",
    "stream_url": "https://awsindstream.com/play/ftt35712605?d=pikachu.app$https://yplay.site/getm3u8/G0R45EAX",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Original"
  },
  {
    "id": "b_22131",
    "so": 22131,
    "title": "Gulaal (Hindi)",
    "hindiTitle": "Gulaal (Hindi)",
    "year": 2009,
    "quality": "HD",
    "genres": [
      "Crime",
      "Drama"
    ],
    "genre": "Crime,Drama",
    "poster": "https://image.tmdb.org/t/p/original/qqaFufeLEXKu3trjspBH57usnny.jpg",
    "stream_url": "https://awsindstream.com/play/tt1261047?tr=5&d=pikachu.app$https://yplay.site/getm3u8/1F0Y6BMV",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22107",
    "so": 22107,
    "title": "Tum Mile (Hindi)",
    "hindiTitle": "Tum Mile (Hindi)",
    "year": 2009,
    "quality": "HD",
    "genres": [
      "Drama"
    ],
    "genre": "Drama",
    "poster": "https://image.tmdb.org/t/p/original/lUp1hFwGpXy7pUYVLfgY1rgCH1J.jpg",
    "stream_url": "https://awsindstream.com/play/tt1522329?tr=5&d=pikachu.app$https://yplay.site/getm3u8/6XDCJVZF",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22104",
    "so": 22104,
    "title": "Mimi (Hindi)",
    "hindiTitle": "Mimi (Hindi)",
    "year": 2021,
    "quality": "HD",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "genre": "Comedy,Drama",
    "poster": "https://image.tmdb.org/t/p/original/AtCUHSf5sG31FL0vugxplft5FXW.jpg",
    "stream_url": "https://awsindstream.com/play/tt10895576?tr=5&d=pikachu.app$https://yplay.site/getm3u8/6NO9VWB5 ",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22103",
    "so": 22103,
    "title": "Yaar Jigree Kasooti Degree (Punjabi)",
    "hindiTitle": "Yaar Jigree Kasooti Degree (Punjabi)",
    "year": 2026,
    "quality": "CAM",
    "genres": [
      "Drama"
    ],
    "genre": "Drama",
    "poster": "https://image.tmdb.org/t/p/original/hkadGHWqcOPCkQy82eU8J2zMlvI.jpg",
    "stream_url": "https://awsindstream.com/play/ftt42346527?d=pikachu.app$https://yplay.site/getm3u8/OWK4H8FR",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Punjabi"
  },
  {
    "id": "b_22102",
    "so": 22102,
    "title": "The Great Punjab Robbery (Punjabi)",
    "hindiTitle": "The Great Punjab Robbery (Punjabi)",
    "year": 2026,
    "quality": "CAM",
    "genres": [
      "Thriller",
      "Crime",
      "Action"
    ],
    "genre": "Thriller,Crime,Action",
    "poster": "https://image.tmdb.org/t/p/original/a68I3uiB8HkpTIugUeUhpCLnStL.jpg",
    "stream_url": "https://awsindstream.com/play/ftt39150248?d=pikachu.app$https://yplay.site/getm3u8/I7KMNDCV",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Punjabi"
  },
  {
    "id": "b_22095",
    "so": 22095,
    "title": "Anaarkali of Aarah (Hindi)",
    "hindiTitle": "Anaarkali of Aarah (Hindi)",
    "year": 2017,
    "quality": "HD",
    "genres": [
      "Drama"
    ],
    "genre": "Drama",
    "poster": "https://image.tmdb.org/t/p/original/nRK1wUXVtiSHNPDRuLPgsQJcteT.jpg",
    "stream_url": "https://awsindstream.com/play/tt6058394?tr=5&d=pikachu.app$https://yplay.site/getm3u8/RE97PDAS",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22091",
    "so": 22091,
    "title": "Navras Katha Collage (Hindi)",
    "hindiTitle": "Navras Katha Collage (Hindi)",
    "year": 2024,
    "quality": "HD",
    "genres": [
      "Drama"
    ],
    "genre": "Drama",
    "poster": "https://image.tmdb.org/t/p/original/xufqFe1roAAWBc01hmKL3tGVJDQ.jpg",
    "stream_url": "https://awsindstream.com/play/tt26249782?tr=5&d=pikachu.app$https://yplay.site/getm3u8/4A2D7GLC",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22090",
    "so": 22090,
    "title": "Dama Dum Mast Kalandar (Punjabi)",
    "hindiTitle": "Dama Dum Mast Kalandar (Punjabi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama"
    ],
    "genre": "Drama",
    "poster": "https://image.tmdb.org/t/p/original/f3QLgWdla4VV4Me1bwhYTgvEHTO.jpg",
    "stream_url": "https://awsindstream.com/play/tt34424694?tr=9&d=pikachu.app$https://yplay.site/getm3u8/43P7QEMT",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Punjabi"
  },
  {
    "id": "b_22088",
    "so": 22088,
    "title": "Hanuman Ansh (Hindi) (HD-TC)",
    "hindiTitle": "Hanuman Ansh (Hindi) (HD-TC)",
    "year": 2026,
    "quality": "CAM",
    "genres": [
      "Family"
    ],
    "genre": "Family",
    "poster": "https://image.tmdb.org/t/p/original/iefsiPPBo80SlKuwbxBOmYbCcxm.jpg",
    "stream_url": "https://awsindstream.com/play/ftt39390582?d=pikachu.app$https://yplay.site/getm3u8/ZCDSI7VA",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22085",
    "so": 22085,
    "title": "DC : The Bloody Valentine (Hindi) (HD-TC)",
    "hindiTitle": "DC : The Bloody Valentine (Hindi) (HD-TC)",
    "year": 2026,
    "quality": "CAM",
    "genres": [
      "Romance",
      "Action",
      "Drama"
    ],
    "genre": "Romance,Action,Drama",
    "poster": "https://image.tmdb.org/t/p/original/nmQ799Pa5EKczJvQPzlvhtW0CBW.jpg",
    "stream_url": "https://awsindstream.com/play/ftt37501035?d=pikachu.app$https://yplay.site/getm3u8/C2RZHN94",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22079",
    "so": 22079,
    "title": "Ohh My Dog (Hindi) (HD-TC)",
    "hindiTitle": "Ohh My Dog (Hindi) (HD-TC)",
    "year": 2026,
    "quality": "CAM",
    "genres": [
      "Drama",
      "Family"
    ],
    "genre": "Drama,Family",
    "poster": "https://image.tmdb.org/t/p/original/zzHV3rmS07lrFkcHXFx2J9JhZwJ.jpg",
    "stream_url": "https://awsindstream.com/play/ftt36626888?d=pikachu.app$https://yplay.site/getm3u8/5GY0ERBC",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22076",
    "so": 22076,
    "title": "Main Vaapas Aaunga (Punjabi)",
    "hindiTitle": "Main Vaapas Aaunga (Punjabi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Romance",
      "Drama"
    ],
    "genre": "Romance,Drama",
    "poster": "https://image.tmdb.org/t/p/original/6i5PhBWoDGWmVRmvlUk2L4N23jz.jpg",
    "stream_url": "https://awsindstream.com/play/stt39137681?d=pikachu.app&noseasons=6&noepisodes=25$https://yplay.site/getm3u8/XDNPU3J9",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Punjabi"
  },
  {
    "id": "b_22066",
    "so": 22066,
    "title": "Sam Bahadur (Hindi)",
    "hindiTitle": "Sam Bahadur (Hindi)",
    "year": 2023,
    "quality": "HD",
    "genres": [
      "Drama",
      "History",
      "War"
    ],
    "genre": "Drama,History,War",
    "poster": "https://image.tmdb.org/t/p/original/nFYf3g3CObjx9ri3PMWkK1lWFhr.jpg",
    "stream_url": "https://yplay.site/getm3u8/7194IWOL$https://awsindstream.com/play/tt10786774?tr=5&d=pikachu.app",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22060",
    "so": 22060,
    "title": "Love per Square Foot (Hindi)",
    "hindiTitle": "Love per Square Foot (Hindi)",
    "year": 2018,
    "quality": "HD",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "genre": "Comedy,Romance",
    "poster": "https://image.tmdb.org/t/p/original/edKCIS7i4qruQ8B8sbou8scvPLe.jpg",
    "stream_url": "https://yplay.site/getm3u8/G41LC82F$https://awsindstream.com/play/tt7853242?tr=5&d=pikachu.app",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22055",
    "so": 22055,
    "title": "Dil Deewana Ho Gaya (Hindi)",
    "hindiTitle": "Dil Deewana Ho Gaya (Hindi)",
    "year": 2026,
    "quality": "CAM",
    "genres": [
      "Drama"
    ],
    "genre": "Drama",
    "poster": "https://m.media-amazon.com/images/M/MV5BMzBjMDA5ODItNTNjMS00OTEyLTljYTctMDVkMjMzMzI2NTA4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "stream_url": "https://awsindstream.com/play/ftt43656991?d=pikachu.app$https://yplay.site/getm3u8/J3D5H2AW",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "b_22052",
    "so": 22052,
    "title": "Kankan Dey Ohle (Punjabi)",
    "hindiTitle": "Kankan Dey Ohle (Punjabi)",
    "year": 2026,
    "quality": "CAM",
    "genres": [
      "Drama"
    ],
    "genre": "Drama",
    "poster": "https://m.media-amazon.com/images/M/MV5BODQwZDBjMWUtZTc5Ny00NjgwLWIzZGQtMTdlNDQ5MmQxZGRlXkEyXkFqcGc@._V1_.jpg",
    "stream_url": "https://awsindstream.com/play/ftt33834346?d=pikachu.app$https://yplay.site/getm3u8/1RWJQ8XE",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Punjabi"
  },
  {
    "id": "b_22047",
    "so": 22047,
    "title": "No One Killed Jessica (Hindi)",
    "hindiTitle": "No One Killed Jessica (Hindi)",
    "year": 2011,
    "quality": "HD",
    "genres": [
      "Crime",
      "Drama"
    ],
    "genre": "Crime,Drama",
    "poster": "https://image.tmdb.org/t/p/original/oIFJXzzfG2sRxCn1T03WVN0gl9v.jpg",
    "stream_url": "https://awsindstream.com/play/tt1734110?tr=5&d=pikachu.app$https://yplay.site/getm3u8/NBVG0CF7",
    "download_url": "",
    "category": "bollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "h_22237",
    "so": 22237,
    "title": "Evil Dead Burn : ORG (Dual)",
    "hindiTitle": "Evil Dead Burn : ORG (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Horror",
      "Thriller"
    ],
    "genre": "Horror,Thriller",
    "poster": "https://image.tmdb.org/t/p/original/7JFVcU1uzv9zCfyMzLrsU04t8BU.jpg",
    "stream_url": "https://awsindstream.com/play/stt39137681?d=pikachu.app&noseasons=6&noepisodes=24$https://yplay.site/getm3u8/2DWJKPNQ",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22234",
    "so": 22234,
    "title": "Eye for an Eye (Dual)",
    "hindiTitle": "Eye for an Eye (Dual)",
    "year": 2025,
    "quality": "HD",
    "genres": [
      "Horror"
    ],
    "genre": "Horror",
    "poster": "https://image.tmdb.org/t/p/original/lpepbfVziHJLhVoxTEKs8ok00iu.jpg",
    "stream_url": "https://awsindstream.com/play/tt28088571?d=pikachu.app$https://yplay.site/getm3u8/BFVXNEU0",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22233",
    "so": 22233,
    "title": "Freefall: A Reckoning for Boeing (Dual)",
    "hindiTitle": "Freefall: A Reckoning for Boeing (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Documentary"
    ],
    "genre": "Documentary",
    "poster": "https://image.tmdb.org/t/p/original/oadqt3V5c8j5ZIbYkdfQLcWzI4C.jpg",
    "stream_url": "https://awsindstream.com/play/tt32889884?d=pikachu.app$https://yplay.site/getm3u8/7ARV3XF0",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22232",
    "so": 22232,
    "title": "Bury the Devil (Dual)",
    "hindiTitle": "Bury the Devil (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Horror",
      "Thriller"
    ],
    "genre": "Horror,Thriller",
    "poster": "https://image.tmdb.org/t/p/original/oTwwCsmWvHxj2olhCB2VEGcDUXD.jpg",
    "stream_url": "https://awsindstream.com/play/tt29719182?d=pikachu.app$https://yplay.site/getm3u8/PK5NELZA",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22223",
    "so": 22223,
    "title": "Rush (Dual)",
    "hindiTitle": "Rush (Dual)",
    "year": 2013,
    "quality": "HD",
    "genres": [
      "Drama",
      "Action"
    ],
    "genre": "Drama,Action",
    "poster": "https://image.tmdb.org/t/p/original/95BDrWmcfJDEa2WCfjmLgi67jhi.jpg",
    "stream_url": "https://awsindstream.com/play/tt1979320?d=pikachu.app$https://yplay.site/getm3u8/VC2L8YSB",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22222",
    "so": 22222,
    "title": "Ghost in the Shell (Dual)",
    "hindiTitle": "Ghost in the Shell (Dual)",
    "year": 2017,
    "quality": "HD",
    "genres": [
      "Sci-Fi",
      "Drama",
      "Action"
    ],
    "genre": "Sci-Fi,Drama,Action",
    "poster": "https://image.tmdb.org/t/p/original/zCtL3UBgCoZzd7XTVGhvl6XY75E.jpg",
    "stream_url": "https://awsindstream.com/play/tt1219827?d=pikachu.app$https://yplay.site/getm3u8/FH7BXGCV",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22220",
    "so": 22220,
    "title": "Somebody (Hindi)",
    "hindiTitle": "Somebody (Hindi)",
    "year": 2025,
    "quality": "HD",
    "genres": [
      "Mystery",
      "Thriller",
      "Drama"
    ],
    "genre": "Mystery,Thriller,Drama",
    "poster": "https://image.tmdb.org/t/p/original/9pNlDKn3TX67u8hHEZH4zkXPkTL.jpg",
    "stream_url": "https://awsindstream.com/play/tt35899314?tr=5&d=pikachu.app$https://yplay.site/getm3u8/4CQWD0YT",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "h_22219",
    "so": 22219,
    "title": "Facing El Chapo (Dual)",
    "hindiTitle": "Facing El Chapo (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Crime",
      "Action",
      "Thriller"
    ],
    "genre": "Crime,Action,Thriller",
    "poster": "https://image.tmdb.org/t/p/original/alpf5v4UqSFawPmG9RX03Or4BDk.jpg",
    "stream_url": "https://awsindstream.com/play/tt39390497?d=pikachu.app$https://yplay.site/getm3u8/8UAEBYT0",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22216",
    "so": 22216,
    "title": "Liza, Liza, Skies Are Grey (Dual)",
    "hindiTitle": "Liza, Liza, Skies Are Grey (Dual)",
    "year": 2016,
    "quality": "HD",
    "genres": [
      "Drama",
      "Romance"
    ],
    "genre": "Drama,Romance",
    "poster": "https://image.tmdb.org/t/p/original/ucp8mX2vqBChaoKPTeNLrt4qPYr.jpg",
    "stream_url": "https://awsindstream.com/play/tt3766340?d=pikachu.app$https://yplay.site/getm3u8/Z02Y9NWV",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22211",
    "so": 22211,
    "title": "Backrooms (Dual)",
    "hindiTitle": "Backrooms (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Horror",
      "Mystery",
      "Sci-Fi"
    ],
    "genre": "Horror,Mystery,Sci-Fi",
    "poster": "https://image.tmdb.org/t/p/original/rhGx6E3qRNMgj3i5su2oukNHwIQ.jpg",
    "stream_url": "https://awsindstream.com/play/tt26657236?d=pikachu.app$https://yplay.site/getm3u8/BIY7T8MC",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22204",
    "so": 22204,
    "title": "Insidious: Out of the Further (Dual) (HD-TC)",
    "hindiTitle": "Insidious: Out of the Further (Dual) (HD-TC)",
    "year": 2026,
    "quality": "CAM",
    "genres": [
      "Horror",
      "Thriller"
    ],
    "genre": "Horror,Thriller",
    "poster": "https://image.tmdb.org/t/p/original/4tTrW9dXCByS5wt2pXVWb58zNjz.jpg",
    "stream_url": "https://awsindstream.com/play/ftt32393988?d=pikachu.app$https://yplay.site/getm3u8/SVB8Z210$https://yplay.site/getm3u8/A7FY9JU2",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22190",
    "so": 22190,
    "title": "Mutiny (Eng)",
    "hindiTitle": "Mutiny (Eng)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Action",
      "Thriller"
    ],
    "genre": "Action,Thriller",
    "poster": "https://image.tmdb.org/t/p/original/pVMxkaViouALWwc1EdZBaiZJTxJ.jpg",
    "stream_url": "https://awsindstream.com/play/tt32338669?tr=1&d=pikachu.app$https://yplay.site/getm3u8/6H8BFJV9 ",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Original"
  },
  {
    "id": "h_22185",
    "so": 22185,
    "title": "Stolen Girl (Dual)",
    "hindiTitle": "Stolen Girl (Dual)",
    "year": 2025,
    "quality": "HD",
    "genres": [
      "Thriller",
      "Action",
      "Adventure"
    ],
    "genre": "Thriller,Action,Adventure",
    "poster": "https://image.tmdb.org/t/p/original/fZlNXEHZsBp7unqw009MeBbMv87.jpg",
    "stream_url": "https://awsindstream.com/play/tt4682810?d=pikachu.app$https://yplay.site/getm3u8/EM64NTB9",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22175",
    "so": 22175,
    "title": "Sidelined 2: Intercepted (Dual)",
    "hindiTitle": "Sidelined 2: Intercepted (Dual)",
    "year": 2025,
    "quality": "HD",
    "genres": [
      "Romance",
      "Comedy"
    ],
    "genre": "Romance,Comedy",
    "poster": "https://image.tmdb.org/t/p/original/sEIP1pTVXa8BJaYSuVeVG3wFN10.jpg",
    "stream_url": "https://awsindstream.com/play/tt35672930?d=pikachu.app$https://yplay.site/getm3u8/21AHNQCR",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22166",
    "so": 22166,
    "title": "The Dark Knight Rises (Dual)",
    "hindiTitle": "The Dark Knight Rises (Dual)",
    "year": 2012,
    "quality": "HD",
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "genre": "Action,Crime,Drama",
    "poster": "https://image.tmdb.org/t/p/original/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg",
    "stream_url": "https://awsindstream.com/play/tt1345836?d=pikachu.app$https://yplay.site/getm3u8/7HGNO328",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22165",
    "so": 22165,
    "title": "The Dark Knight (Dual)",
    "hindiTitle": "The Dark Knight (Dual)",
    "year": 2008,
    "quality": "HD",
    "genres": [
      "Action",
      "Crime",
      "Thriller"
    ],
    "genre": "Action,Crime,Thriller",
    "poster": "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "stream_url": "https://awsindstream.com/play/tt0468569?d=pikachu.app$https://yplay.site/getm3u8/715DXESF",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22164",
    "so": 22164,
    "title": "Batman Begins (Dual)",
    "hindiTitle": "Batman Begins (Dual)",
    "year": 2005,
    "quality": "HD",
    "genres": [
      "Drama",
      "Crime",
      "Action"
    ],
    "genre": "Drama,Crime,Action",
    "poster": "https://image.tmdb.org/t/p/original/sPX89Td70IDDjVr85jdSBb4rWGr.jpg",
    "stream_url": "https://awsindstream.com/play/tt0372784?d=pikachu.app$https://yplay.site/getm3u8/4NXM61GT",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22163",
    "so": 22163,
    "title": "The Death of Robin Hood (Dual)",
    "hindiTitle": "The Death of Robin Hood (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Adventure",
      "Drama",
      "Thriller"
    ],
    "genre": "Adventure,Drama,Thriller",
    "poster": "https://image.tmdb.org/t/p/original/13MmRwmG5NmaMfU8qNrtgGXisiD.jpg",
    "stream_url": "https://awsindstream.com/play/tt32273171?d=pikachu.app$https://yplay.site/getm3u8/0WDGSZ31",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22160",
    "so": 22160,
    "title": "Snake Woman (Hindi)",
    "hindiTitle": "Snake Woman (Hindi)",
    "year": 2025,
    "quality": "HD",
    "genres": [
      "Fantasy",
      "Action",
      "Horror"
    ],
    "genre": "Fantasy,Action,Horror",
    "poster": "https://image.tmdb.org/t/p/original/eTeVgBuyecQH5A7VLxpVjGNqxBJ.jpg",
    "stream_url": "https://awsindstream.com/play/tt36968106?tr=5&d=pikachu.app$https://yplay.site/getm3u8/RI2STEMQ",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "h_22159",
    "so": 22159,
    "title": "Green Snake: The Origin (Hindi)",
    "hindiTitle": "Green Snake: The Origin (Hindi)",
    "year": 2025,
    "quality": "HD",
    "genres": [
      "Drama",
      "Fantasy",
      "Romance"
    ],
    "genre": "Drama,Fantasy,Romance",
    "poster": "https://image.tmdb.org/t/p/original/2WoKKvmRrEcTlrhZiRnwD2rGq0I.jpg",
    "stream_url": "https://awsindstream.com/play/tt35963756?tr=5&d=pikachu.app$https://yplay.site/getm3u8/VP1B6ZJX",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "h_22158",
    "so": 22158,
    "title": "My Best Friend, His Girlfriend and Me (Dual)",
    "hindiTitle": "My Best Friend, His Girlfriend and Me (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Comedy"
    ],
    "genre": "Comedy",
    "poster": "https://image.tmdb.org/t/p/original/aWLshM7DZECutuQVpMfhDiPZUQC.jpg",
    "stream_url": "https://awsindstream.com/play/tt38662472?d=pikachu.app$https://yplay.site/getm3u8/1XH7F5JU",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22157",
    "so": 22157,
    "title": "Don't Say Good Luck (Dual)",
    "hindiTitle": "Don't Say Good Luck (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Comedy",
      "Music",
      "Drama"
    ],
    "genre": "Comedy,Music,Drama",
    "poster": "https://image.tmdb.org/t/p/original/dgTKahWonzVLeN8Lm22WR2S7D0A.jpg",
    "stream_url": "https://awsindstream.com/play/tt36590417?d=pikachu.app$https://yplay.site/getm3u8/BEZ6OG7L",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22156",
    "so": 22156,
    "title": "To The Max (Dual)",
    "hindiTitle": "To The Max (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama"
    ],
    "genre": "Drama",
    "poster": "https://image.tmdb.org/t/p/original/xJc57uJHzsdr224J7jpZMqWNB98.jpg",
    "stream_url": "https://awsindstream.com/play/tt36454145?d=pikachu.app$https://yplay.site/getm3u8/7T91KML6",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22154",
    "so": 22154,
    "title": "The End of Oak Street (Dual) v2",
    "hindiTitle": "The End of Oak Street (Dual) v2",
    "year": 2026,
    "quality": "CAM",
    "genres": [
      "Sci-Fi",
      "Mystery",
      "Thriller"
    ],
    "genre": "Sci-Fi,Mystery,Thriller",
    "poster": "https://image.tmdb.org/t/p/original/fYXqpgPmHMphSF2W30GbTeJVIa5.jpg",
    "stream_url": "https://awsindstream.com/play/ftt27165187?d=pikachu.app$https://yplay.site/getm3u8/0TLGAUIM$https://yplay.site/getm3u8/HKGO4TXW",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22152",
    "so": 22152,
    "title": "Spider-Man: Brand New Day (Multi) (HD-TC) V5",
    "hindiTitle": "Spider-Man: Brand New Day (Multi) (HD-TC) V5",
    "year": 2026,
    "quality": "CAM",
    "genres": [
      "Sci-Fi",
      "Action",
      "Adventure"
    ],
    "genre": "Sci-Fi,Action,Adventure",
    "poster": "https://image.tmdb.org/t/p/original/kjNlN0gFNHRLUAfOs3AeNynUFKQ.jpg",
    "stream_url": "https://awsindstream.com/play/ftt22084616?d=pikachu.app$https://yplay.site/getm3u8/ZMQSN3IV",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Original"
  },
  {
    "id": "h_22149",
    "so": 22149,
    "title": "Stand Your Ground (Dual)",
    "hindiTitle": "Stand Your Ground (Dual)",
    "year": 2025,
    "quality": "HD",
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "genre": "Action,Thriller,Crime",
    "poster": "https://image.tmdb.org/t/p/original/u4GW1qTNjooEFSXDBVDMmYb52qC.jpg",
    "stream_url": "https://awsindstream.com/play/tt30826955?d=pikachu.app$https://yplay.site/getm3u8/N1S8IO7L",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22148",
    "so": 22148,
    "title": "Close to Me (Hindi)",
    "hindiTitle": "Close to Me (Hindi)",
    "year": 2025,
    "quality": "HD",
    "genres": [
      "Romance",
      "Thriller"
    ],
    "genre": "Romance,Thriller",
    "poster": "https://image.tmdb.org/t/p/original/zRsQgmJRCCHXAm1Ls5Q72ziVYBh.jpg",
    "stream_url": "https://awsindstream.com/play/tt32478708?tr=5&d=pikachu.app$https://yplay.site/getm3u8/2BQL5G6U",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "h_22138",
    "so": 22138,
    "title": "In the Grey (Dual)",
    "hindiTitle": "In the Grey (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Action",
      "Thriller"
    ],
    "genre": "Action,Thriller",
    "poster": "https://image.tmdb.org/t/p/original/dQgIcW6Th08kMRf2HBoYWoFE6OD.jpg",
    "stream_url": "https://awsindstream.com/play/tt27681354?d=pikachu.app$https://yplay.site/getm3u8/YKPUGD52",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22132",
    "so": 22132,
    "title": "Thor: Love and Thunder (Dual)",
    "hindiTitle": "Thor: Love and Thunder (Dual)",
    "year": 2022,
    "quality": "HD",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "genre": "Action,Adventure,Fantasy",
    "poster": "https://image.tmdb.org/t/p/original/xvWasZH6cTgA5mr7V56R7OxEu6J.jpg",
    "stream_url": "https://awsindstream.com/play/ftt10648342?d=pikachu.app",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22130",
    "so": 22130,
    "title": "Underworld: Rise of the Lycans (Dual)",
    "hindiTitle": "Underworld: Rise of the Lycans (Dual)",
    "year": 2009,
    "quality": "HD",
    "genres": [
      "Fantasy",
      "Action",
      "Thriller"
    ],
    "genre": "Fantasy,Action,Thriller",
    "poster": "https://image.tmdb.org/t/p/original/yW9gF7rGn8EoV8B8rxOx1xjxVZf.jpg",
    "stream_url": "https://awsindstream.com/play/tt0834001?d=pikachu.app$https://yplay.site/getm3u8/X726QVED",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22129",
    "so": 22129,
    "title": "Gail Daughtry and the Celebrity Sex Pass (Eng)",
    "hindiTitle": "Gail Daughtry and the Celebrity Sex Pass (Eng)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Comedy"
    ],
    "genre": "Comedy",
    "poster": "https://image.tmdb.org/t/p/original/98T4bnMjJs71WOVZoeY8edZhfgZ.jpg",
    "stream_url": "https://awsindstream.com/play/tt36834010?tr=1&d=pikachu.app$https://yplay.site/getm3u8/MHFCB8VT",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Original"
  },
  {
    "id": "h_22128",
    "so": 22128,
    "title": "The Furious (Eng)",
    "hindiTitle": "The Furious (Eng)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Action",
      "Crime",
      "Thriller"
    ],
    "genre": "Action,Crime,Thriller",
    "poster": "https://image.tmdb.org/t/p/original/lwmXob14Bslv1YcVT1VYt3zBfs9.jpg",
    "stream_url": "https://awsindstream.com/play/stt39137681?d=pikachu.app&noseasons=6&noepisodes=28$https://yplay.site/getm3u8/9X0FJN7D",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Original"
  },
  {
    "id": "h_22127",
    "so": 22127,
    "title": "Gold (Dual)",
    "hindiTitle": "Gold (Dual)",
    "year": 2022,
    "quality": "HD",
    "genres": [
      "Action",
      "Adventure",
      "Thriller"
    ],
    "genre": "Action,Adventure,Thriller",
    "poster": "https://image.tmdb.org/t/p/original/c0r75XaNHA4QMlDcitEscQW2Fn6.jpg",
    "stream_url": "https://awsindstream.com/play/tt6020800?d=pikachu.app",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22126",
    "so": 22126,
    "title": "THE RIBBON HERO (Dual)",
    "hindiTitle": "THE RIBBON HERO (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Animation",
      "Fantasy",
      "Drama"
    ],
    "genre": "Animation,Fantasy,Drama",
    "poster": "https://image.tmdb.org/t/p/original/nUCkV0iODxbULZQ5vRN1sDjPrpk.jpg",
    "stream_url": "https://awsindstream.com/play/tt42186253?d=pikachu.app$https://yplay.site/getm3u8/N5MAD4WI",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22125",
    "so": 22125,
    "title": "Our Hero, Balthazar (Dual)",
    "hindiTitle": "Our Hero, Balthazar (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "genre": "Drama,Comedy",
    "poster": "https://image.tmdb.org/t/p/original/mxVTarvl5OLoU9YWIYygby6R0KI.jpg",
    "stream_url": "https://awsindstream.com/play/tt36589928?d=pikachu.app$https://yplay.site/getm3u8/AY3V5N7R",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22124",
    "so": 22124,
    "title": "Vampires of the Velvet Lounge (Dual)",
    "hindiTitle": "Vampires of the Velvet Lounge (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Comedy",
      "Horror"
    ],
    "genre": "Comedy,Horror",
    "poster": "https://image.tmdb.org/t/p/original/4uJcIW0PL4vNZvk0z6kwWdOqLv6.jpg",
    "stream_url": "https://awsindstream.com/play/tt29762861?d=pikachu.app$https://yplay.site/getm3u8/FN27JH3M",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22123",
    "so": 22123,
    "title": "Night Nurse (Eng)",
    "hindiTitle": "Night Nurse (Eng)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama",
      "Thriller"
    ],
    "genre": "Drama,Thriller",
    "poster": "https://image.tmdb.org/t/p/original/ijZE5bT0FK638p4FtLozd9SFFKQ.jpg",
    "stream_url": "https://awsindstream.com/play/tt38906892?tr=1&d=pikachu.app$https://yplay.site/getm3u8/KT3Q5V9Y",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Original"
  },
  {
    "id": "h_22122",
    "so": 22122,
    "title": "Jackass: Best and Last (Eng)",
    "hindiTitle": "Jackass: Best and Last (Eng)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Action",
      "Comedy",
      "Documentary"
    ],
    "genre": "Action,Comedy,Documentary",
    "poster": "https://image.tmdb.org/t/p/original/tfgccePxnswMqhmtxafliLlcCVR.jpg",
    "stream_url": "https://awsindstream.com/play/tt39316472?tr=1&d=pikachu.app$https://yplay.site/getm3u8/8J0C5OWG",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Original"
  },
  {
    "id": "h_22121",
    "so": 22121,
    "title": "Minions & Monsters (Dual)",
    "hindiTitle": "Minions & Monsters (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Adventure",
      "Animation",
      "Comedy"
    ],
    "genre": "Adventure,Animation,Comedy",
    "poster": "https://image.tmdb.org/t/p/original/nz7i42yhLIJ4ve9JKgM6NthoLHO.jpg",
    "stream_url": "https://awsindstream.com/play/stt39137681?d=pikachu.app&noseasons=6&noepisodes=27$https://yplay.site/getm3u8/ASO7DC1E",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "h_22120",
    "so": 22120,
    "title": "Wrangler (Hindi)",
    "hindiTitle": "Wrangler (Hindi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Thriller"
    ],
    "genre": "Thriller",
    "poster": "https://image.tmdb.org/t/p/original/k580gLw5GJLBBfFSp2DrMfrziwF.jpg",
    "stream_url": "https://awsindstream.com/play/tt38448241?tr=5&d=pikachu.app$https://yplay.site/getm3u8/XGYI1Z59",
    "download_url": "",
    "category": "hollywood",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "o_22240",
    "so": 22240,
    "title": "K.G.F: Chapter 2 (Hindi)",
    "hindiTitle": "K.G.F: Chapter 2 (Hindi)",
    "year": 2022,
    "quality": "HD",
    "genres": [
      "Action",
      "Thriller",
      "Adventure",
      "South"
    ],
    "genre": "Action,Thriller,Adventure,South",
    "poster": "https://image.tmdb.org/t/p/original/khNVygolU0TxLIDWff5tQlAhZ23.jpg",
    "stream_url": "https://awsindstream.com/play/tt10698680?tr=5&d=pikachu.app$https://yplay.site/getm3u8/OJB68UHF",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "o_22239",
    "so": 22239,
    "title": "K.G.F: Chapter 1 (Hindi)",
    "hindiTitle": "K.G.F: Chapter 1 (Hindi)",
    "year": 2018,
    "quality": "HD",
    "genres": [
      "Action",
      "Thriller",
      "Adventure",
      "South"
    ],
    "genre": "Action,Thriller,Adventure,South",
    "poster": "https://image.tmdb.org/t/p/original/ltHlJwvxKv7d0ooCiKSAvfwV9tX.jpg",
    "stream_url": "https://awsindstream.com/play/tt7838252?tr=5&d=pikachu.app$https://yplay.site/getm3u8/9FLQ3TEJ ",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "o_22238",
    "so": 22238,
    "title": "I, Nobody (Dual)",
    "hindiTitle": "I, Nobody (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Crime",
      "Thriller",
      "Drama",
      "South"
    ],
    "genre": "Crime,Thriller,Drama,South",
    "poster": "https://image.tmdb.org/t/p/original/qFJl3w9KpVXpfZ3rpmv7p0UYZkP.jpg",
    "stream_url": "https://awsindstream.com/play/tt26445387?tr=5&d=pikachu.app$https://yplay.site/getm3u8/VIQMFR9Z ",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22212",
    "so": 22212,
    "title": "Jana Nayagan : ORG (Hindi)",
    "hindiTitle": "Jana Nayagan : ORG (Hindi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Action",
      "Drama",
      "Sci-Fi",
      "South"
    ],
    "genre": "Action,Drama,Sci-Fi,South",
    "poster": "https://image.tmdb.org/t/p/original/jt8pfSIdi47YpFMMWVRr8w5u2S0.jpg",
    "stream_url": "https://awsindstream.com/play/stt39137681?d=pikachu.app&noseasons=6&noepisodes=36$https://yplay.site/getm3u8/YXT7Q3P6",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "o_22210",
    "so": 22210,
    "title": "Lenin : ORG (Dual)",
    "hindiTitle": "Lenin : ORG (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Action",
      "Drama",
      "Romance",
      "South"
    ],
    "genre": "Action,Drama,Romance,South",
    "poster": "https://image.tmdb.org/t/p/original/rAHQviBq8Fxi20hNtHPGLnr4L0f.jpg",
    "stream_url": "https://awsindstream.com/play/tt5256640?tr=5&d=pikachu.app$https://yplay.site/getm3u8/PO23ERCN",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22209",
    "so": 22209,
    "title": "Chennai Love Story (Dual)",
    "hindiTitle": "Chennai Love Story (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Romance",
      "Drama",
      "South"
    ],
    "genre": "Romance,Drama,South",
    "poster": "https://image.tmdb.org/t/p/original/hACM25xigqIYeRgylB0epf34hmk.jpg",
    "stream_url": "https://yplay.site/getm3u8/2MCOWPTD$https://awsindstream.com/play/tt37161651?tr=5&d=pikachu.app",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22208",
    "so": 22208,
    "title": "Pyaar Prema Kalyanam (Dual)",
    "hindiTitle": "Pyaar Prema Kalyanam (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Romance",
      "Comedy",
      "South"
    ],
    "genre": "Romance,Comedy,South",
    "poster": "https://image.tmdb.org/t/p/original/AjaNAeMXOrK9n0YqGqX0Lz5qxYu.jpg",
    "stream_url": "https://yplay.site/getm3u8/Q04YO3SV$https://awsindstream.com/play/tt39260895?tr=5&d=pikachu.app",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22207",
    "so": 22207,
    "title": "Jora Kaiya Thattunga (Hindi)",
    "hindiTitle": "Jora Kaiya Thattunga (Hindi)",
    "year": 2025,
    "quality": "HD",
    "genres": [
      "Thriller",
      "Family",
      "Drama",
      "South"
    ],
    "genre": "Thriller,Family,Drama,South",
    "poster": "https://image.tmdb.org/t/p/original/kom0PpAofXsyGzsuL76XApU8Dtr.jpg",
    "stream_url": "https://awsindstream.com/play/tt32474216?tr=5&d=pikachu.app$https://yplay.site/getm3u8/QM7WCL6I ",
    "download_url": "\u30e7\u3052\u30e5\u304b",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "o_22195",
    "so": 22195,
    "title": "Srinivasa Mangapuram (Dual)",
    "hindiTitle": "Srinivasa Mangapuram (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Romance",
      "Drama",
      "Action",
      "South"
    ],
    "genre": "Romance,Drama,Action,South",
    "poster": "https://image.tmdb.org/t/p/original/cN6igPJlKFuk5rTrAipQU4qUkWW.jpg",
    "stream_url": "https://awsindstream.com/play/tt37537340?tr=5&d=pikachu.app$https://yplay.site/getm3u8/6K5PXL7M ",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22184",
    "so": 22184,
    "title": "Heartin (Dual)",
    "hindiTitle": "Heartin (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Comedy",
      "Romance",
      "Drama",
      "South"
    ],
    "genre": "Comedy,Romance,Drama,South",
    "poster": "https://image.tmdb.org/t/p/original/7xvMocNLZov64aOU1X3BRWawjD7.jpg",
    "stream_url": "https://awsindstream.com/play/tt35741123?tr=5&d=pikachu.app$https://yplay.site/getm3u8/M5T9VLF4",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22183",
    "so": 22183,
    "title": "Dheeram (Dual)",
    "hindiTitle": "Dheeram (Dual)",
    "year": 2025,
    "quality": "HD",
    "genres": [
      "Crime",
      "Mystery",
      "Thriller",
      "South"
    ],
    "genre": "Crime,Mystery,Thriller,South",
    "poster": "https://image.tmdb.org/t/p/original/df5IaJtB0dmUkDfOCbr0xkPTXDc.jpg",
    "stream_url": "https://awsindstream.com/play/tt33399641?tr=5&d=pikachu.app$https://yplay.site/getm3u8/YF6DBMQN",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22182",
    "so": 22182,
    "title": "The Birthday Boy (Dual)",
    "hindiTitle": "The Birthday Boy (Dual)",
    "year": 2024,
    "quality": "HD",
    "genres": [
      "Drama",
      "South"
    ],
    "genre": "Drama,South",
    "poster": "https://image.tmdb.org/t/p/original/jDN3gBR8h5BKDCCHP57CvwBONKH.jpg",
    "stream_url": "https://awsindstream.com/play/tt32566980?tr=5&d=pikachu.app$https://yplay.site/getm3u8/XLC3AYQH",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22176",
    "so": 22176,
    "title": "Ranapati Shivray Swari Agra (Dual)",
    "hindiTitle": "Ranapati Shivray Swari Agra (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama",
      "History",
      "South"
    ],
    "genre": "Drama,History,South",
    "poster": "https://image.tmdb.org/t/p/original/2268tC1Udy7FkZ0Zm2bANUBXBRt.jpg",
    "stream_url": "https://awsindstream.com/play/tt39196717?tr=5&d=pikachu.app$https://yplay.site/getm3u8/8A5BSNML",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22173",
    "so": 22173,
    "title": "Honeymoon Express (Dual)",
    "hindiTitle": "Honeymoon Express (Dual)",
    "year": 2024,
    "quality": "HD",
    "genres": [
      "Drama",
      "Romance",
      "South"
    ],
    "genre": "Drama,Romance,South",
    "poster": "https://image.tmdb.org/t/p/original/uCt5k3coJbOF02hwXVT9gV59a2W.jpg",
    "stream_url": "https://awsindstream.com/play/tt30779704?tr=5&d=pikachu.app$https://yplay.site/getm3u8/UXVW2J61",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22172",
    "so": 22172,
    "title": "Bagha Jatin (Dual)",
    "hindiTitle": "Bagha Jatin (Dual)",
    "year": 2023,
    "quality": "HD",
    "genres": [
      "History",
      "South"
    ],
    "genre": "History,South",
    "poster": "https://image.tmdb.org/t/p/original/oqTh7TYdAnZTHLfgyHPPUSXwXMw.jpg",
    "stream_url": "https://awsindstream.com/play/tt28185525?tr=5&d=pikachu.app$https://yplay.site/getm3u8/DG48FJ12",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22162",
    "so": 22162,
    "title": "Sahasam (Dual)",
    "hindiTitle": "Sahasam (Dual)",
    "year": 2025,
    "quality": "HD",
    "genres": [
      "Action",
      "Comedy",
      "South"
    ],
    "genre": "Action,Comedy,South",
    "poster": "https://image.tmdb.org/t/p/original/nW2F8OAO3cTBsbvPhhd1YC0OAcw.jpg",
    "stream_url": "https://yplay.site/getm3u8/8OTKWHBQ$https://awsindstream.com/play/tt35613198?tr=5&d=pikachu.app",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22161",
    "so": 22161,
    "title": "Euphoria  (Dual)",
    "hindiTitle": "Euphoria  (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama",
      "South"
    ],
    "genre": "Drama,South",
    "poster": "https://image.tmdb.org/t/p/original/8URM569W1ETAeGd33CPkrc6KF1O.jpg",
    "stream_url": "https://yplay.site/getm3u8/TDO50MX3$https://awsindstream.com/play/tt33737583?tr=5&d=pikachu.app",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22150",
    "so": 22150,
    "title": "Pongala (Dual)",
    "hindiTitle": "Pongala (Dual)",
    "year": 2025,
    "quality": "HD",
    "genres": [
      "Action",
      "Drama",
      "South"
    ],
    "genre": "Action,Drama,South",
    "poster": "https://image.tmdb.org/t/p/original/kIQLFOdvrdrjHI31DazP06tp9zp.jpg",
    "stream_url": "https://yplay.site/getm3u8/KZHP1XN4$https://awsindstream.com/play/tt33014579?tr=5&d=pikachu.app",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22146",
    "so": 22146,
    "title": "Maa Inti Bangaram (Dual)",
    "hindiTitle": "Maa Inti Bangaram (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Action",
      "Thriller",
      "Drama",
      "South"
    ],
    "genre": "Action,Thriller,Drama,South",
    "poster": "https://image.tmdb.org/t/p/original/iSRIxnizjINdc7Dy68HQRkcPSR2.jpg",
    "stream_url": "https://yplay.site/getm3u8/KG18IW0M$https://awsindstream.com/play/tt32237111?tr=5&d=pikachu.app",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22145",
    "so": 22145,
    "title": "Aroopi (Dual)",
    "hindiTitle": "Aroopi (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Horror",
      "Thriller",
      "South"
    ],
    "genre": "Horror,Thriller,South",
    "poster": "https://image.tmdb.org/t/p/original/yLDuHm2QgsNHuENoBvOlDKRwMyF.jpg",
    "stream_url": "https://yplay.site/getm3u8/NVCKAWSG$https://awsindstream.com/play/tt43612978?tr=5&d=pikachu.app",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22144",
    "so": 22144,
    "title": "Moda Kavida Vaatavarana (Dual)",
    "hindiTitle": "Moda Kavida Vaatavarana (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama",
      "Sci-Fi",
      "Romance",
      "South"
    ],
    "genre": "Drama,Sci-Fi,Romance,South",
    "poster": "https://image.tmdb.org/t/p/original/cy9aH0CfTTFLM4tGXgciHz6yoQx.jpg",
    "stream_url": "https://yplay.site/getm3u8/946WKHQA$https://awsindstream.com/play/tt38748101?tr=5&d=pikachu.app",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22143",
    "so": 22143,
    "title": "Achyuta Avataaram (Hindi)",
    "hindiTitle": "Achyuta Avataaram (Hindi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama",
      "Thriller",
      "South"
    ],
    "genre": "Drama,Thriller,South",
    "poster": "https://image.tmdb.org/t/p/original/pH5QDBV55imyvC31MMdxTtHUT6t.jpg",
    "stream_url": "https://yplay.site/getm3u8/VEW3JRUZ$https://awsindstream.com/play/tt39910244?tr=5&d=pikachu.app",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Hindi"
  },
  {
    "id": "o_22137",
    "so": 22137,
    "title": "Kattalan (Dual)",
    "hindiTitle": "Kattalan (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Action",
      "Thriller",
      "South"
    ],
    "genre": "Action,Thriller,South",
    "poster": "https://image.tmdb.org/t/p/original/53FATyQirV8BuBcrsQMGPvGKgCu.jpg",
    "stream_url": "https://awsindstream.com/play/stt39137681?d=pikachu.app&noseasons=6&noepisodes=34$https://yplay.site/getm3u8/0M7DCZXE",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22136",
    "so": 22136,
    "title": "Balan - The Boy (Dual)",
    "hindiTitle": "Balan - The Boy (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama",
      "South"
    ],
    "genre": "Drama,South",
    "poster": "https://image.tmdb.org/t/p/original/c6mFtfkOWplAUm3rniSBi7h1wsv.jpg",
    "stream_url": "https://awsindstream.com/play/stt39137681?d=pikachu.app&noseasons=6&noepisodes=33$https://yplay.site/getm3u8/BMYK91TW",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22119",
    "so": 22119,
    "title": "Oru Durooha Saahacharyathil (Dual)",
    "hindiTitle": "Oru Durooha Saahacharyathil (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Comedy",
      "Thriller",
      "South"
    ],
    "genre": "Comedy,Thriller,South",
    "poster": "https://image.tmdb.org/t/p/original/dCsQAElqfdiC0V2HK3n830QGqjT.jpg",
    "stream_url": "https://awsindstream.com/play/tt34442799?tr=5&d=pikachu.app$https://yplay.site/getm3u8/VUYHN41S",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22094",
    "so": 22094,
    "title": "Godari Gattupaina (Dual)",
    "hindiTitle": "Godari Gattupaina (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama",
      "South"
    ],
    "genre": "Drama,South",
    "poster": "https://image.tmdb.org/t/p/original/jVENga0uWeOM3vc7KtLhieBwNRy.jpg",
    "stream_url": "https://yplay.site/getm3u8/F38CTKBP$https://awsindstream.com/play/tt34545743?tr=5&d=pikachu.app",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22092",
    "so": 22092,
    "title": "M.R.P (Neekentha Naakentha) (Dual)",
    "hindiTitle": "M.R.P (Neekentha Naakentha) (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Comedy",
      "Thriller",
      "South"
    ],
    "genre": "Comedy,Thriller,South",
    "poster": "https://image.tmdb.org/t/p/original/yNf3kFRSO7ojLDJUA5iOtHYPLQF.jpg",
    "stream_url": "https://awsindstream.com/play/tt41993585?tr=5&d=pikachu.app$https://yplay.site/getm3u8/FMDHVARJ",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22089",
    "so": 22089,
    "title": "Idhayam Murali (Dual)",
    "hindiTitle": "Idhayam Murali (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Romance",
      "Comedy",
      "Drama",
      "South"
    ],
    "genre": "Romance,Comedy,Drama,South",
    "poster": "https://image.tmdb.org/t/p/original/xeb6080yZcKijIoXc1YxOU5A2Gb.jpg",
    "stream_url": "https://awsindstream.com/play/tt35723557?tr=5&d=pikachu.app$https://yplay.site/getm3u8/Z9C0FQDO",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22071",
    "so": 22071,
    "title": "The Devil (Dual)",
    "hindiTitle": "The Devil (Dual)",
    "year": 2025,
    "quality": "HD",
    "genres": [
      "Action",
      "Drama",
      "Comedy",
      "South"
    ],
    "genre": "Action,Drama,Comedy,South",
    "poster": "https://image.tmdb.org/t/p/original/gsUXN4dgmelSEa7VRqcpIhngGCu.jpg",
    "stream_url": "https://awsindstream.com/play/tt32135732?tr=5&d=pikachu.app$https://yplay.site/getm3u8/IF4SGAJ1 ",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "o_22070",
    "so": 22070,
    "title": "45 (Dual)",
    "hindiTitle": "45 (Dual)",
    "year": 2025,
    "quality": "HD",
    "genres": [
      "Action",
      "South"
    ],
    "genre": "Action,South",
    "poster": "https://image.tmdb.org/t/p/original/luDTygZ6uAwaknc2isXZcz8YMvE.jpg",
    "stream_url": "https://awsindstream.com/play/tt27263807?tr=5&d=pikachu.app$https://yplay.site/getm3u8/1U8CVYAZ",
    "download_url": "",
    "category": "south",
    "type": "movie",
    "rating": "7.8",
    "audio": "Dual Audio"
  }
],

  series: [
  {
    "id": "s_7892",
    "so": 7892,
    "title": "My Bias My Boss (Dual)",
    "hindiTitle": "My Bias My Boss (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "genre": "Comedy,Drama",
    "poster": "https://image.tmdb.org/t/p/original/A4Y4xlDHS4xi2WI9265vRyIYLoo.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "6.4",
    "audio": "Dual Audio"
  },
  {
    "id": "s_7891",
    "so": 7891,
    "title": "Lanterns (Dual)",
    "hindiTitle": "Lanterns (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama",
      "Mystery",
      "Sci-Fi",
      "Fantasy"
    ],
    "genre": "Drama,Mystery,Sci-Fi,Fantasy",
    "poster": "https://image.tmdb.org/t/p/original/rb94rKVIzLyfWufIN7WqLvadBDH.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "7.4",
    "audio": "Dual Audio"
  },
  {
    "id": "s_7890",
    "so": 7890,
    "title": "Spooky in Love (Dual)",
    "hindiTitle": "Spooky in Love (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Comedy",
      "Sci-Fi",
      "Fantasy",
      "Drama"
    ],
    "genre": "Comedy,Sci-Fi,Fantasy,Drama",
    "poster": "https://image.tmdb.org/t/p/original/acVOH8Pr5LEZ7WKZCbzwNuHVr9x.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "6.8",
    "audio": "Dual Audio"
  },
  {
    "id": "s_7889",
    "so": 7889,
    "title": "Clean Up Company (Hindi)",
    "hindiTitle": "Clean Up Company (Hindi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Comedy",
      "Crime",
      "Drama"
    ],
    "genre": "Comedy,Crime,Drama",
    "poster": "https://image.tmdb.org/t/p/original/t5HvXT9HYB5R9niBG4y0AMypTfC.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "5.8",
    "audio": "Hindi"
  },
  {
    "id": "s_7888",
    "so": 7888,
    "title": "I Will Find You (Dual)",
    "hindiTitle": "I Will Find You (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama",
      "Mystery",
      "Crime"
    ],
    "genre": "Drama,Mystery,Crime",
    "poster": "https://image.tmdb.org/t/p/original/pb9oYHHNzauiCQZT03MpDAg46GI.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "7.2",
    "audio": "Dual Audio"
  },
  {
    "id": "s_7887",
    "so": 7887,
    "title": "Silo",
    "hindiTitle": "Silo",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Sci-Fi",
      "Fantasy",
      "Drama"
    ],
    "genre": "Sci-Fi,Fantasy,Drama",
    "poster": "https://image.tmdb.org/t/p/original/zBx1X06G1OlndbXTCZI13FECNz2.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "8.2",
    "audio": "Original"
  },
  {
    "id": "s_7886",
    "so": 7886,
    "title": "The Traitors (Hindi)",
    "hindiTitle": "The Traitors (Hindi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama"
    ],
    "genre": "Drama",
    "poster": "https://image.tmdb.org/t/p/original/FUMbI4cIzqTSLx6aNV6gdcegAB.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "5.2",
    "audio": "Hindi"
  },
  {
    "id": "s_7885",
    "so": 7885,
    "title": "Mad Concrete Dreams (Hindi)",
    "hindiTitle": "Mad Concrete Dreams (Hindi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama"
    ],
    "genre": "Drama",
    "poster": "https://m.media-amazon.com/images/M/MV5BNzdmNjQwYWItNTc3My00NTBiLTgwZWEtYjQ5ZjIzZTI3Nzc3XkEyXkFqcGc@._V1_.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "6.2",
    "audio": "Hindi"
  },
  {
    "id": "s_7884",
    "so": 7884,
    "title": "Outer Banks (Dual)",
    "hindiTitle": "Outer Banks (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "genre": "Action,Crime,Drama",
    "poster": "https://image.tmdb.org/t/p/original/jtRutQ2wrqz18mKUYHy1zvgc6ro.jpg",
    "stream_url": "https://awsindstream.com/play/tt27012110?tr=5&d=pikachu.app&?sinku",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "7.6",
    "audio": "Dual Audio"
  },
  {
    "id": "s_7882",
    "so": 7882,
    "title": "Reacher (Dual)",
    "hindiTitle": "Reacher (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Action",
      "Adventure",
      "Crime",
      "Drama"
    ],
    "genre": "Action,Adventure,Crime,Drama",
    "poster": "https://image.tmdb.org/t/p/original/bQnnKBe3VsvXKMoNCaYmRzs1Dup.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "7.8",
    "audio": "Dual Audio"
  },
  {
    "id": "s_7877",
    "so": 7877,
    "title": "Thukra Ke Mera Pyaar (Hindi)",
    "hindiTitle": "Thukra Ke Mera Pyaar (Hindi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama"
    ],
    "genre": "Drama",
    "poster": "https://image.tmdb.org/t/p/original/pcShyioNKqqvgnCSAdni0hQpESu.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "6.5",
    "audio": "Hindi"
  },
  {
    "id": "s_7872",
    "so": 7872,
    "title": "Lucky (Eng)",
    "hindiTitle": "Lucky (Eng)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama",
      "Crime"
    ],
    "genre": "Drama,Crime",
    "poster": "https://image.tmdb.org/t/p/original/xsrkiXg8EuNNtbPtbmvCxg95gK7.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "5.2",
    "audio": "Original"
  },
  {
    "id": "s_7857",
    "so": 7857,
    "title": "The Apartment Job (Dual)",
    "hindiTitle": "The Apartment Job (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama",
      "Comedy",
      "Crime"
    ],
    "genre": "Drama,Comedy,Crime",
    "poster": "https://image.tmdb.org/t/p/original/qFxbrHvNq5tn9SCBq3aKPgaGfyO.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "5.3",
    "audio": "Dual Audio"
  },
  {
    "id": "s_7856",
    "so": 7856,
    "title": "The Great Indian Kapil Show",
    "hindiTitle": "The Great Indian Kapil Show",
    "year": 2025,
    "quality": "HD",
    "genres": [
      "Talk",
      "Comedy"
    ],
    "genre": "Talk,Comedy",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/535/1338743.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "6.8",
    "audio": "Original"
  },
  {
    "id": "s_7848",
    "so": 7848,
    "title": "Ted Lasso",
    "hindiTitle": "Ted Lasso",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "genre": "Comedy,Drama",
    "poster": "https://image.tmdb.org/t/p/original/5fhZdwP1DVJ0FyVH6vrFdHwpXIn.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "7.2",
    "audio": "Original"
  },
  {
    "id": "s_7847",
    "so": 7847,
    "title": "X-Men '97",
    "hindiTitle": "X-Men '97",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Animation",
      "Action",
      "Adventure",
      "Sci-Fi",
      "Fantasy"
    ],
    "genre": "Animation,Action,Adventure,Sci-Fi,Fantasy",
    "poster": "https://image.tmdb.org/t/p/original/cVlBAB0nFEQxwuyn1mTfrGjqXuw.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "7.6",
    "audio": "Original"
  },
  {
    "id": "s_7845",
    "so": 7845,
    "title": "India's Got Latent (Hindi)",
    "hindiTitle": "India's Got Latent (Hindi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Reality",
      "Comedy"
    ],
    "genre": "Reality,Comedy",
    "poster": "https://image.tmdb.org/t/p/original/vMmKcAXrfuKts0uiDkwgx63fNEA.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "6.2",
    "audio": "Hindi"
  },
  {
    "id": "s_7841",
    "so": 7841,
    "title": "Aditya: Case Files (Hindi)",
    "hindiTitle": "Aditya: Case Files (Hindi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama"
    ],
    "genre": "Drama",
    "poster": "https://ottreleases.com/wp-content/uploads/2026/08/Aditya-Case-Files.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "5.8",
    "audio": "Hindi"
  },
  {
    "id": "s_7840",
    "so": 7840,
    "title": "House of the Dragon (Dual)",
    "hindiTitle": "House of the Dragon (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Sci-Fi",
      "Fantasy",
      "Drama",
      "Action",
      "Adventure"
    ],
    "genre": "Sci-Fi,Fantasy,Drama,Action,Adventure",
    "poster": "https://image.tmdb.org/t/p/original/oxmdHR5Ka28HAJuMmS2hk5K6QQY.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "7.4",
    "audio": "Dual Audio"
  },
  {
    "id": "s_7839",
    "so": 7839,
    "title": "Our Sticky Love (Dual)",
    "hindiTitle": "Our Sticky Love (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "genre": "Drama,Comedy",
    "poster": "https://image.tmdb.org/t/p/original/tSZ4aFpTGc8Oj52SuzPUUZ7WKL0.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "6.5",
    "audio": "Dual Audio"
  },
  {
    "id": "s_7831",
    "so": 7831,
    "title": "Campus Beats (Hindi)",
    "hindiTitle": "Campus Beats (Hindi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama"
    ],
    "genre": "Drama",
    "poster": "https://image.tmdb.org/t/p/original/ajUqZOd8CRL5k5lOkQDxAI0HSBT.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "5.0",
    "audio": "Hindi"
  },
  {
    "id": "s_7830",
    "so": 7830,
    "title": "The Chargesheet: Innocent or Guilty? (Hindi)",
    "hindiTitle": "The Chargesheet: Innocent or Guilty? (Hindi)",
    "year": 2020,
    "quality": "HD",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "genre": "Drama,Mystery",
    "poster": "https://image.tmdb.org/t/p/original/zliiaIph6WQkA8JZPRkqTyv8JWo.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "6.5",
    "audio": "Hindi"
  },
  {
    "id": "s_7828",
    "so": 7828,
    "title": "From (Dual)",
    "hindiTitle": "From (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Mystery",
      "Drama",
      "Sci-Fi",
      "Fantasy"
    ],
    "genre": "Mystery,Drama,Sci-Fi,Fantasy",
    "poster": "https://image.tmdb.org/t/p/original/pRtJagIxpfODzzb0T0NAvZSzErC.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "8.2",
    "audio": "Dual Audio"
  },
  {
    "id": "s_7825",
    "so": 7825,
    "title": "The Legend of Karna (Multi)",
    "hindiTitle": "The Legend of Karna (Multi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Animation",
      "Action",
      "Adventure",
      "Drama"
    ],
    "genre": "Animation,Action,Adventure,Drama",
    "poster": "https://image.tmdb.org/t/p/original/jzVP9rqT2YH2nTx3l3csmmU9B1q.jpg",
    "stream_url": "https://awsindstream.com/play/tt4328798?tr=5&d=pikachu.app&?sinku",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "6.8",
    "audio": "Original"
  },
  {
    "id": "s_7823",
    "so": 7823,
    "title": "Operation Safed Sagar (Hindi)",
    "hindiTitle": "Operation Safed Sagar (Hindi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama"
    ],
    "genre": "Drama",
    "poster": "https://image.tmdb.org/t/p/original/f56PHAGbUFPmHMRippWWNpRgSao.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "6.8",
    "audio": "Hindi"
  },
  {
    "id": "s_7821",
    "so": 7821,
    "title": "Sterling Point (Dual)",
    "hindiTitle": "Sterling Point (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Mystery",
      "Drama"
    ],
    "genre": "Mystery,Drama",
    "poster": "https://image.tmdb.org/t/p/original/cThLWEGs6BEqY0QZMbU4FAeWwPT.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "6.2",
    "audio": "Dual Audio"
  },
  {
    "id": "s_7814",
    "so": 7814,
    "title": "Avrodh the Siege Within  (Hindi)",
    "hindiTitle": "Avrodh the Siege Within  (Hindi)",
    "year": 2021,
    "quality": "HD",
    "genres": [
      "Action"
    ],
    "genre": "Action",
    "poster": "https://image.tmdb.org/t/p/original/t4fMUfvXYdkUBNNvHoU1tbOkicl.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "7.2",
    "audio": "Hindi"
  },
  {
    "id": "s_7812",
    "so": 7812,
    "title": "Muthassi (Hindi)",
    "hindiTitle": "Muthassi (Hindi)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Mystery"
    ],
    "genre": "Mystery",
    "poster": "https://image.tmdb.org/t/p/original/upghryFPaiUMjlzgmnHpwtnYJx3.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "6.5",
    "audio": "Hindi"
  },
  {
    "id": "s_7810",
    "so": 7810,
    "title": "The Boys (Dual)",
    "hindiTitle": "The Boys (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Sci-Fi",
      "Fantasy",
      "Action",
      "Adventure"
    ],
    "genre": "Sci-Fi,Fantasy,Action,Adventure",
    "poster": "https://image.tmdb.org/t/p/original/in1R2dDc421JxsoRWaIIAqVI2KE.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "8.4",
    "audio": "Dual Audio"
  },
  {
    "id": "s_7807",
    "so": 7807,
    "title": "Between Father and Son (Dual)",
    "hindiTitle": "Between Father and Son (Dual)",
    "year": 2026,
    "quality": "HD",
    "genres": [
      "Drama"
    ],
    "genre": "Drama",
    "poster": "https://image.tmdb.org/t/p/original/uOh3yStvGlWiaktHs4VFtZdquK8.jpg",
    "stream_url": "",
    "download_url": "",
    "category": "series",
    "type": "series",
    "rating": "7.2",
    "audio": "Dual Audio"
  }
]
};

// Helper: Get all content items combined
function getAllContent() {
  return [...COCO_DATA.movies, ...COCO_DATA.series];
}

// Helper: Get single item by id
function getContentById(id) {
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
}

// Background Full Catalog Async Loader (loads all 9,000+ titles)
COCO_DATA.isLoaded = false;
COCO_DATA.totalLoaded = 140;

async function loadFullCatalog(onProgress, onComplete) {
  try {
    const endpoints = [
      { name: 'bollywood', url: 'data/bollywood.json', cat: 'bollywood', type: 'movie' },
      { name: 'hollywood', url: 'data/hollywood.json', cat: 'hollywood', type: 'movie' },
      { name: 'south', url: 'data/south.json', cat: 'south', type: 'movie' },
      { name: 'series', url: 'data/series.json', cat: 'series', type: 'series' },
      { name: 'live', url: 'data/live.json', cat: 'live', type: 'live' }
    ];

    const results = await Promise.allSettled(
      endpoints.map(async ep => {
        const resp = await fetch(ep.url);
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const data = await resp.json();
        return { ...ep, data };
      })
    );

    let allMovies = [];
    let allSeries = [];
    let liveList = [];

    results.forEach(res => {
      if (res.status === 'fulfilled') {
        const { cat, type, data } = res.value;
        const normalized = data.map(item => {
          const gStr = item.genre || '';
          const gList = gStr ? gStr.split(',').map(s => s.trim()).filter(Boolean) : ['Movie'];
          return {
            id: item.id || `${cat}_${item.so}`,
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
          };
        });

        if (cat === 'series') {
          allSeries = normalized;
        } else if (cat === 'live') {
          liveList = normalized;
        } else {
          allMovies.push(...normalized);
        }
      }
    });

    if (allMovies.length > 0) {
      COCO_DATA.movies = allMovies;
    }
    if (allSeries.length > 0) {
      COCO_DATA.series = allSeries;
    }
    COCO_DATA.isLoaded = true;
    COCO_DATA.totalLoaded = COCO_DATA.movies.length + COCO_DATA.series.length;
    console.log(`[CoCoFlix] Successfully loaded ${COCO_DATA.totalLoaded} titles from live backend!`);
    
    if (onComplete) onComplete(COCO_DATA.totalLoaded);
  } catch (err) {
    console.warn('[CoCoFlix] Fetch error, using bundled offline data:', err);
    if (onComplete) onComplete(COCO_DATA.totalLoaded);
  }
}
