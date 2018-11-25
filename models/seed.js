//descriptions from wikipedia on google search
let seedGames = [
  {
    name: "Grand Theft Auto V",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Grand_Theft_Auto_V.png/220px-Grand_Theft_Auto_V.png",
    rating: 6,
    description: "Grand Theft Auto V is an action-adventure video game developed by Rockstar North and published by Rockstar Games. It was released in September 2013 for PlayStation 3 and Xbox 360, in November 2014 for PlayStation 4 and Xbox One, and in April 2015 for Microsoft Windows.",
    price: 19.99
  },
  {
    name: "FIFA 18",
    image: "https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE3XFxcLzA5XFxcLzI1MTkxMzQ3XFxcL2ZpZmExOC0xMDI0eDU3Ni5qcGdcIixcIndpZHRoXCI6NzY3LFwiaGVpZ2h0XCI6NDMxLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lXFxcL25vLWltYWdlLnBuZz92PTVcIn0iLCJoYXNoIjoiZTM5NWExZWZmMWIzMmMyMTMzZmI4NDYyYTdjZmE1OGY0MzU4N2NhYyJ9/fifa18-1024x576.jpg",
    rating: 5,
    description: "FIFA 18 is a football simulation video game in the FIFA series of video games, developed and published by Electronic Arts and was released worldwide on 29 September 2017 for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, Xbox One and Nintendo Switch. It is the 25th instalment in the FIFA series",
    price: 14.99
  },
  {
    name: "Mario Kart 8",
    image: "https://i.ytimg.com/vi/a3o_ZKWi-OU/maxresdefault.jpg",
    rating: 5,
    description: "Mario Kart 8 is a kart racing video game and the eighth major installment in the Mario Kart series, developed and published by Nintendo for their Wii U home video game console. The game was announced at E3 2013 and released worldwide in May 2014.",
    price: 39.99
  },
  {
    name: "NBA 2K18",
    image: "https://steamcdn-a.akamaihd.net/steam/apps/577800/header.jpg?t=1534373224",
    rating: 5,
    description: "NBA 2K18 is a basketball simulation video game developed by Visual Concepts and published by 2K Sports. It is the 19th installment in the NBA 2K franchise, the successor to NBA 2K17, and the predecessor to NBA 2K19.",
    price: 24.99
  },
  {
    name: "Destiny 2 Expansions I & II",
    image: "https://images-na.ssl-images-amazon.com/images/I/815FHnvubOL._AC_SL1500_.jpg",
    rating: 4,
    description: "Destiny 2 is an online-only multiplayer first-person shooter video game developed by Bungie and published by Activision. It was released for PlayStation 4 and Xbox One on September 6, 2017, followed by a Microsoft Windows version the following month. It is the sequel to 2014's Destiny and its subsequent expansions.",
    price: 39.99
  },
  {
    name: "Call of Duty: WWII",
    image: "https://www.callofduty.com/content/dam/atvi/callofduty/wwii/home/Stronghold_Metadata_Image.jpg",
    rating: 6,
    description: "Call of Duty: WWII is a first-person shooter video game developed by Sledgehammer Games and published by Activision. It was released worldwide on November 3, 2017 for Microsoft Windows, PlayStation 4 and Xbox One.",
    price: 24.99
  },
  {
    name: "Super Mario Odyssey",
    image: "https://supermario.nintendo.com/assets/icons/share_icon.jpg",
    rating: 8,
    description: "Super Mario Odyssey is a platform game published by Nintendo for the Nintendo Switch on October 27, 2017.",
    price: 49.99
  },
  {
    name: "Madden NFL 18",
    image: "https://www.fluxfm.de/wp-content/uploads/2017/11/HEADER-Quelle-EA-Sports.jpg",
    rating: 8,
    description: "Madden NFL 18 is an American football sports video game based on the National Football League, developed and published by EA Sports for PlayStation 4 and Xbox One.",
    price: 14.99
  },
  {
    name: "The Legend of Zelda: Breath of the Wild",
    image: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TheLegendOfZeldaBreathOfTheWild_image1600w.jpg",
    rating: 8,
    description: "The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo. An entry in the longrunning The Legend of Zelda series, it was released for the Nintendo Switch and Wii U consoles on March 3, 2017.",
    price: 59.99
  },
  {
    name: "Minecraft",
    image: "https://compass-ssl.xbox.com/assets/0f/e2/0fe20042-0bb8-4781-82f4-7130f928b021.jpg?n=Minecraft-2017_Superhero-0_Keyart_767x431.jpg",
    rating: 8,
    description: "Minecraft is a 2011 sandbox video game created by Swedish game developer Markus Persson and later developed by Mojang. The game allows players to build with a variety of different blocks in a 3D procedurally generated world, requiring creativity from players.",
    price: 0.00
  },
  {
    name: "Splatoon 2",
    image: "https://blogue.bestbuy.ca/wp-content/uploads/sites/3/2017/07/Splatoon-2-header.jpg",
    rating: 9,
    description: "Splatoon 2 is a team-based third-person shooter video game developed and published by Nintendo for the Nintendo Switch. It is a sequel to Splatoon, and includes a story-driven single-player mode and an online multiplayer mode that features up to eight players in online four-versus-four matches.",
    price: 59.99
  },
  {
    name: "PlayerUnknown's Battlegrounds",
    image: "https://cdn.gamerant.com/wp-content/uploads/playerunknowns-battlegrounds-golden-chests-logo.jpg.optimal.jpg",
    rating: 6,
    description: "PlayerUnknown's Battlegrounds is an online multiplayer battle royale game developed and published by PUBG Corporation, a subsidiary of South Korean video game company Bluehole.",
    price: 14.99
  },
  {
    name: "Monster Hunter: World",
    image: "https://cdn.gamerant.com/wp-content/uploads/monster-hunter-world-video-guide-how-to-play-online.jpg.optimal.jpg",
    rating: 6,
    description: "Monster Hunter: World is an action role-playing game developed and published by Capcom. A part of the Monster Hunter series, it was released worldwide for PlayStation 4 and Xbox One in January 2018, with a Microsoft Windows version in August 2018.",
    price: 19.99
  },
  {
    name: "Overwatch",
    image: "https://blznav.akamaized.net/img/games/cards/card-overwatch-7eff92e1257149aa.jpg",
    rating: 9,
    description: "Overwatch is a team-based multiplayer first-person shooter video game developed and published by Blizzard Entertainment, which released on May 24, 2016 for PlayStation 4, Xbox One, and Windows.",
    price: 39.99
  },
  {
    name: "Dragon Ball FighterZ",
    image: "https://cdn.gamerant.com/wp-content/uploads/dragon-ball-fighterz-datamine-dlc-characters.jpg.optimal.jpg",
    rating: 9,
    description: "Dragon Ball FighterZ is a 2D fighting game developed by Arc System Works and published in Japan by Bandai Namco Entertainment and worldwide by NIS America, which released on January 26, 2018 for PlayStation 4, Xbox One, Windows, and Arcade consoles.",
    price: 19.99
  },
  {
    name: "Far Cry 5",
    image: "https://cdn-images-1.medium.com/max/2000/1*HnkN1utKWRLkQCd1i2Rp8A.jpeg",
    rating: 6,
    description: "Far Cry 5 is an action-adventure first-person shooter video game developed by Ubisoft Montreal and Ubisoft Toronto and published by Ubisoft for Microsoft Windows, PlayStation 4 and Xbox One. It is the standalone successor to the 2014 video game Far Cry 4, and the fifth main installment in the Far Cry series.",
    price: 24.99
  },
  {
    name: "Final Fantasy XV",
    image: "http://ucegamers.com.br/siteuceg/wp-content/uploads/2016/10/1.jpg",
    rating: 7,
    description: "Final Fantasy XV is an action role-playing game developed and published by Square Enix as part of the long-running Final Fantasy series. It was released for the PlayStation 4 and Xbox One in 2016, and for Microsoft Windows in 2018.",
    price: 14.99
  },
  {
    name: "Horizon Zero Dawn",
    image: "http://jmu-journalism.org.uk/wp-content/uploads/2017/02/Horizon-Zero-Dawn.jpg",
    rating: 9,
    description: "Horizon Zero Dawn is an action role-playing video game developed by Guerrilla Games and published by Sony Interactive Entertainment. It was released for the PlayStation 4 in early 2017. The plot follows Aloy, a hunter in a world overrun by machines, who sets out to uncover her past.",
    price: 39.99
  },
  {
    name: "Tom Clancy's Ghost Recon: Wildlands",
    image: "https://images.g2a.com/newlayout/600x351/1x1x0/5774fc00060d/5a54674fae653a08b04600f3",
    rating: 7,
    description: "Tom Clancy's Ghost Recon Wildlands is a tactical shooter video game developed by Ubisoft Paris and published by Ubisoft, it was released forPlayStation 4, Xbox One, Microsoft Windows.",
    price: 49.99
  },
  {
    name: "Fortnite",
    image: "https://0.allegroimg.com/s512/034dc9/839dccf14f5b8ea577c5f0956cc0",
    rating: 9,
    description: "Fortnite is an online video game first released in 2017 and developed by Epic Games. It is available as separate software packages having different game modes that otherwise share the same general gameplay and game engine.",
    price: 29.99,
  }
]

module.exports = seedGames;
