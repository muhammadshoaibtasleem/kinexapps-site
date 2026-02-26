export interface App {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  categoryColor: string;
  description: string;
  features: string[];
  appStoreUrl: string;
  appStoreId: string;
  icon: string;
  gradient: string;
  platforms: string[];
  price: string;
  ageRating: string;
  size: string;
}

export const apps: App[] = [
  {
    id: "snapfix",
    name: "SnapFix",
    subtitle: "AI Home Repair Help",
    category: "Utilities",
    categoryColor: "bg-orange-500",
    description:
      "Stop staring at that leak, stain, or broken fixture wondering what to do. SnapFix turns your iPhone into an AI-powered home repair assistant — just snap a photo and get step-by-step instructions in seconds. Diagnose plumbing issues, wall damage, appliance errors, electrical concerns, and more.",
    features: [
      "AI-powered photo diagnosis",
      "Step-by-step repair instructions",
      "Shopping lists with cost estimates",
      "Follow-up AI chat for questions",
      "Multi-photo analysis (up to 3 angles)",
      "Text-to-speech for hands-free use",
    ],
    appStoreUrl:
      "https://apps.apple.com/au/app/snapfix-ai-home-repair-help/id6758781226",
    appStoreId: "6758781226",
    icon: "/icons/snapfix.png",
    gradient: "from-orange-500 to-amber-500",
    platforms: ["iPhone", "iPad"],
    price: "Free",
    ageRating: "4+",
    size: "4 MB",
  },
  {
    id: "theory-elite",
    name: "Theory Elite",
    subtitle: "MBA & Business Quiz Battles",
    category: "Education",
    categoryColor: "bg-indigo-500",
    description:
      "Transform your coursework into an engaging quiz experience. Compete with classmates, track your progress, and ace your exams through gamified learning with real-time competitive battles across six business subjects including Marketing, Brand Management, and Business Analytics.",
    features: [
      "6 business subjects covered",
      "1v1 quiz battles with friends",
      "Timed challenges & flashcards",
      "Global leaderboards & rankings",
      "20+ achievement badges",
      "Daily missions & streak rewards",
    ],
    appStoreUrl:
      "https://apps.apple.com/au/app/theory-elite-mba-business/id6759365393",
    appStoreId: "6759365393",
    icon: "/icons/theory-elite.png",
    gradient: "from-indigo-500 to-purple-600",
    platforms: ["iPhone", "iPad"],
    price: "Free",
    ageRating: "13+",
    size: "37.6 MB",
  },
  {
    id: "abc-kids",
    name: "ABC Kids",
    subtitle: "Learn & Play",
    category: "Education",
    categoryColor: "bg-green-500",
    description:
      "Help your children learn the alphabet through interactive, colorful gameplay. Designed for toddlers and preschoolers with beautiful 3D animated letters, matching games, and encouraging voiceovers. A safe, ad-free learning environment for young minds.",
    features: [
      "All 26 letters A-Z with animations",
      "Exciting 3D animated letters",
      "Matching games with colorful objects",
      "Voiceover guidance throughout",
      "Kid-friendly interface with large buttons",
      "No advertisements — 100% safe",
    ],
    appStoreUrl:
      "https://apps.apple.com/au/app/abc-kids-learn-play/id6758154033",
    appStoreId: "6758154033",
    icon: "/icons/abc-kids.png",
    gradient: "from-green-400 to-emerald-600",
    platforms: ["iPhone", "iPad"],
    price: "Free",
    ageRating: "4+",
    size: "58.7 MB",
  },
  {
    id: "laser-maze",
    name: "Laser Maze",
    subtitle: "Mirror Puzzle",
    category: "Games",
    categoryColor: "bg-red-500",
    description:
      "Guide laser beams through challenging puzzles by placing and rotating mirrors! This brain-teasing puzzle game tests your logic and spatial reasoning as you reflect lasers off mirrors to hit every target and advance through increasingly complex levels.",
    features: [
      "117 hand-crafted puzzle levels",
      "Intuitive drag-and-rotate controls",
      "Beautiful, colorful visuals",
      "Hints and undo functions",
      "Cosmetic skins for lasers & mirrors",
      "Energy reward system",
    ],
    appStoreUrl:
      "https://apps.apple.com/au/app/laser-maze-mirror-puzzle/id6758780661",
    appStoreId: "6758780661",
    icon: "/icons/laser-maze.png",
    gradient: "from-red-500 to-rose-600",
    platforms: ["iPhone", "iPad"],
    price: "Free",
    ageRating: "4+",
    size: "19.2 MB",
  },
  {
    id: "rollscape",
    name: "Rollscape",
    subtitle: "Marble Maze Game",
    category: "Games",
    categoryColor: "bg-cyan-500",
    description:
      "Guide a marble through increasingly challenging labyrinths using touch controls or device tilt. Explore Ancient Temple and Space Station worlds with 10 unique ball types, each with different physics properties and trail effects like Spark, Fire, Ice, and Rainbow.",
    features: [
      "Touch joystick & tilt controls",
      "2 worlds with 20+ handcrafted levels",
      "10 unique balls with custom physics",
      "6 power-ups including Ghost Mode",
      "Daily challenge & endless mode",
      "60fps gameplay with haptic feedback",
    ],
    appStoreUrl:
      "https://apps.apple.com/au/app/rollscape-marble-maze-game/id6758915053",
    appStoreId: "6758915053",
    icon: "/icons/rollscape.png",
    gradient: "from-cyan-400 to-blue-600",
    platforms: ["iPhone", "iPad", "Mac", "Apple Vision"],
    price: "Free",
    ageRating: "4+",
    size: "32.5 MB",
  },
  {
    id: "orb-galaxy",
    name: "Orb Galaxy Sort",
    subtitle: "Space Ball Sorting Puzzle",
    category: "Games",
    categoryColor: "bg-violet-500",
    description:
      "Embark on an interstellar puzzle adventure! Sort colorful orbs into matching tubes across space-themed levels with breathtaking cosmic backgrounds featuring floating planets, shooting stars, and mesmerizing alien encounters. Simple mechanics meet strategic depth.",
    features: [
      "100+ handcrafted levels",
      "Breathtaking cosmic backgrounds",
      "XP system & cosmic rank progression",
      "Customizable tube skins",
      "Self-paced — no pressure timers",
      "Brain training & spatial reasoning",
    ],
    appStoreUrl:
      "https://apps.apple.com/au/app/orb-galaxy-sort/id6758506645",
    appStoreId: "6758506645",
    icon: "/icons/orb-galaxy.png",
    gradient: "from-violet-500 to-purple-700",
    platforms: ["iPhone", "iPad", "Mac", "Apple Vision"],
    price: "Free",
    ageRating: "4+",
    size: "118.6 MB",
  },
  {
    id: "color-ball-drop",
    name: "Color Ball Drop 3D",
    subtitle: "Color Learning Game",
    category: "Games",
    categoryColor: "bg-pink-500",
    description:
      "A delightful color-learning game designed for children ages 3-7. Players drag a bowl to catch falling balls matching the target color. Features extra-large buttons, calm animations, and gentle sound effects in a safe, kid-friendly environment.",
    features: [
      "Challenge & free play modes",
      "Extra-large tap targets for kids",
      "Simple drag-to-move controls",
      "Calm animations & gentle sounds",
      "3D graphics with soft pastel colors",
      "No reading required",
    ],
    appStoreUrl:
      "https://apps.apple.com/au/app/color-ball-drop-3d/id6758262767",
    appStoreId: "6758262767",
    icon: "/icons/color-ball-drop.png",
    gradient: "from-pink-400 to-rose-600",
    platforms: ["iPhone", "iPad", "Mac", "Apple Vision"],
    price: "Free",
    ageRating: "4+",
    size: "25.8 MB",
  },
];

export const categories = [
  { name: "All", count: apps.length },
  { name: "Games", count: apps.filter((a) => a.category === "Games").length },
  {
    name: "Education",
    count: apps.filter((a) => a.category === "Education").length,
  },
  {
    name: "Utilities",
    count: apps.filter((a) => a.category === "Utilities").length,
  },
];
