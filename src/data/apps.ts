export interface AppFAQ {
  question: string;
  answer: string;
}

export interface AppReview {
  author: string;
  rating: number;
  title: string;
  body: string;
  date: string;
}

export interface AppRating {
  average: number;
  count: number;
}

export type AppType = "ios" | "web";

export interface App {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  categoryColor: string;
  description: string;
  features: string[];
  // Distribution
  appType?: AppType; // defaults to "ios" when omitted
  appStoreUrl: string; // for web apps this is the product website URL
  appStoreId?: string; // iOS App Store ID — optional for web apps
  iconContain?: boolean; // when true, render icon with object-contain + padded background (for non-square logos)
  icon: string;
  gradient: string;
  platforms: string[];
  price: string;
  ageRating: string;
  size: string;
  // SEO fields
  metaTitle: string;
  metaDescription: string;
  seoDescription: string;
  keywords: string[];
  faqs: AppFAQ[];
  // Reviews & ratings
  rating: AppRating;
  reviews: AppReview[];
  // Optional case-study fields (used on /portfolio)
  caseStudy?: AppCaseStudy;
}

export interface AppCaseStudy {
  client?: string; // "In-house" if our own product
  year: string;
  role: string; // e.g. "Design, Engineering, Launch"
  problem: string;
  solution: string;
  outcome: string;
  techStack: string[];
  liveUrl?: string;
}

export const apps: App[] = [
  {
    id: "rubrica",
    name: "Rubrica",
    subtitle: "AI Rubric Feedback for Students",
    category: "Web",
    categoryColor: "bg-purple-500",
    description:
      "An AI-powered web platform that helps students close the gap between their draft and the marking rubric. Upload an assignment brief, rubric, and draft — Rubrica returns criterion-by-criterion coverage analysis with quoted evidence, voice-preserving rewrites, and CrossRef-backed citation verification. Built end-to-end as a production SaaS for students across Australia, the UK, and the US.",
    features: [
      "Criterion-by-criterion rubric coverage analysis",
      "Quoted source spans from the draft with revision guidance",
      "Voice-preserving paragraph rewrites tied to each criterion",
      "CrossRef-backed citation & hallucination detection",
      "Multi-format rubric ingestion (PDF, Word, text, images)",
      "Pay-per-check with automatic credit refunds on failed checks",
    ],
    appType: "web",
    appStoreUrl: "https://rubrica.app",
    iconContain: true,
    icon: "/icons/rubrica.png",
    gradient: "from-purple-500 to-indigo-600",
    platforms: ["Web"],
    price: "$0.49 / check",
    ageRating: "13+",
    size: "Web app",
    metaTitle:
      "Rubrica — AI Rubric Feedback SaaS | Kinexapps Case Study",
    metaDescription:
      "Rubrica is an AI rubric-checking SaaS built by Kinexapps. Students upload a brief, rubric, and draft — Rubrica returns criterion-level feedback, evidence, and citation verification. Case study + tech stack.",
    seoDescription:
      "Rubrica is a production AI web platform built end-to-end by Kinexapps for students at secondary, undergraduate, and postgraduate levels across Australia, the UK, and the US. The product solves a very specific problem — students rarely know how their draft actually maps to the rubric until it has already been marked. Rubrica closes that loop by analysing assignment briefs, rubrics, and drafts together and returning a criterion-by-criterion coverage report with quoted evidence pulled directly from the student's work.\n\nEvery rubric check returns a structured breakdown: which criteria are strong, which are partially covered, and which are missing entirely. For each gap, Rubrica suggests a voice-preserving rewrite of the relevant paragraph — keeping the student's own tone while strengthening the argument. Citations are verified against CrossRef so hallucinated references and broken DOIs are flagged before the work is submitted.\n\nThe SaaS runs on a pay-per-check credit model ($0.49 per check) with a $1.50 welcome credit, six free tools that require no signup, and automatic refunds when a check fails. The product is fully responsive, accepts rubrics in PDF, Word, plain text, and image formats, and supports unlimited free revisions on the same assignment.\n\nAs a case study for Kinexapps' software-house work, Rubrica covers the full delivery surface: product strategy, UI/UX, frontend, backend, AI pipeline, payments, citation verification, and ongoing operations. It is the clearest example of the kind of web product we build for clients who want a serious AI SaaS shipped end-to-end.",
    keywords: [
      "AI rubric checker",
      "rubric feedback for students",
      "assignment feedback AI",
      "essay rubric analysis",
      "academic writing AI tool",
      "citation verification SaaS",
      "Rubrica",
      "Kinexapps web SaaS",
      "AI SaaS development case study",
      "Next.js AI app development",
      "student writing feedback platform",
      "build an AI SaaS",
    ],
    faqs: [
      {
        question: "What is Rubrica?",
        answer:
          "Rubrica is an AI-powered web platform that gives students rubric-aware feedback on their assignment drafts. Upload the brief, the rubric, and the draft — Rubrica returns criterion-by-criterion coverage analysis, quoted evidence, voice-preserving rewrites, and citation verification.",
      },
      {
        question: "Who built Rubrica?",
        answer:
          "Rubrica was designed, built, and shipped end-to-end by Kinexapps — product strategy, UI/UX, web app, AI pipeline, citation verification, payments, and ongoing operations. It is a production case study of the kind of AI SaaS we can build for clients.",
      },
      {
        question: "What does Rubrica cost to use?",
        answer:
          "Rubrica runs on a pay-per-check credit model — $0.49 per rubric check, with a $1.50 welcome credit on signup. Six free tools require no signup, and failed checks are automatically refunded.",
      },
      {
        question: "Can Kinexapps build a SaaS like Rubrica for me?",
        answer:
          "Yes. Rubrica is the clearest example of the kind of AI-powered web SaaS we deliver end-to-end. If you're looking to ship an AI product — landing page, app, backend, AI pipeline, payments, and analytics — get in touch via the contact form for a free quote.",
      },
    ],
    rating: { average: 0, count: 0 },
    reviews: [],
    caseStudy: {
      client: "In-house Kinexapps product",
      year: "2026",
      role: "Product, Design, Engineering, AI, Launch",
      problem:
        "Students get rubric-graded but rarely see how their draft maps to each criterion before submitting. Generic AI writing tools don't read the rubric, don't quote evidence from the draft, and hallucinate citations.",
      solution:
        "An AI web app that ingests the brief, rubric, and draft together and returns a structured criterion-by-criterion coverage report with quoted evidence, voice-preserving paragraph rewrites, and CrossRef-verified citations. Pay-per-check pricing with automatic credit refunds on failed checks.",
      outcome:
        "Live SaaS serving students across Australia, the UK, and the US. Production AI pipeline, payment system, and citation verification shipped end-to-end. Demonstrates Kinexapps' ability to deliver a complete AI product, not just a UI shell.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "AI / LLM pipeline",
        "CrossRef API",
        "Stripe (credits)",
        "Vercel",
      ],
      liveUrl: "https://rubrica.app",
    },
  },
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
    metaTitle: "SnapFix - AI Home Repair App | Photo Diagnosis & DIY Fix",
    metaDescription:
      "Snap a photo of any home issue and get instant AI-powered repair instructions. SnapFix guides you step-by-step through plumbing, electrical, and appliance fixes. Free on the App Store.",
    seoDescription:
      "SnapFix is the smart AI home repair app that turns your iPhone camera into a professional diagnostic tool. Simply take a photo of any household problem — a leaking faucet, cracked drywall, faulty wiring, or broken appliance — and receive instant, step-by-step repair instructions powered by advanced artificial intelligence.\n\nUnlike generic DIY fix guides, SnapFix uses AI photo diagnosis to analyze the specific issue in your image and deliver a personalized repair plan tailored to your exact situation. Each guide includes a complete list of tools needed, estimated repair time, difficulty rating, and clear visual instructions that even first-time home repairers can follow with confidence.\n\nWhether you are dealing with plumbing repairs, electrical troubleshooting, furniture damage, or appliance malfunctions, SnapFix covers it all. The app eliminates the need for expensive service calls by empowering homeowners to handle common home maintenance tasks independently. From emergency fixes like a burst pipe to routine upkeep like recaulking a bathtub, SnapFix provides the expert guidance you need right on your phone.\n\nDesigned for homeowners, renters, and DIY enthusiasts who want a reliable home repair assistant available 24/7. No more searching through endless YouTube videos or forum threads — just point your camera at the problem, and get clear, actionable solutions in seconds.",
    keywords: [
      "AI home repair app",
      "home repair app",
      "DIY fix guide app",
      "AI photo repair diagnosis",
      "how to fix things at home app",
      "plumbing repair app iPhone",
      "home repair step by step instructions",
      "appliance repair assistant app",
      "home maintenance helper",
      "DIY home fix guide iOS",
      "SnapFix",
      "free home repair app",
    ],
    faqs: [
      {
        question: "Is there an app that tells you how to fix things at home?",
        answer:
          "Yes! SnapFix uses AI to diagnose home repair issues from a photo and provides step-by-step instructions for plumbing, electrical, drywall, appliance, and other common household repairs.",
      },
      {
        question: "Can AI diagnose home repair problems from a photo?",
        answer:
          "SnapFix's AI analyzes photos of household problems and identifies the issue, then generates a personalized repair guide with tools needed, materials list, estimated costs, and clear instructions.",
      },
      {
        question: "What is the best free home repair app for iPhone?",
        answer:
          "SnapFix is a free AI-powered home repair app for iPhone and iPad. It provides instant photo-based diagnosis and step-by-step repair guides for plumbing, electrical, appliance, and structural issues.",
      },
      {
        question:
          "How do I fix a leaking faucet without calling a plumber?",
        answer:
          "Take a photo of the leak with SnapFix and the AI will identify the type of faucet, diagnose the likely cause, and walk you through the repair step-by-step with a shopping list of parts you need.",
      },
    ],
    rating: { average: 4.7, count: 38 },
    reviews: [
      {
        author: "HomeOwnerMike",
        rating: 5,
        title: "Saved me hundreds on a plumber",
        body: "Took a photo of my leaking kitchen tap and SnapFix walked me through the whole fix. Bought the parts for $12 and did it myself in 30 minutes.",
        date: "2026-02-15",
      },
      {
        author: "DIYDana",
        rating: 5,
        title: "Like having a handyman in your pocket",
        body: "I use this every time something breaks around the house. The AI diagnosis is surprisingly accurate and the step-by-step guides are clear enough for a total beginner.",
        date: "2026-01-28",
      },
      {
        author: "RenterRaj",
        rating: 4,
        title: "Great for quick fixes",
        body: "Perfect for small repairs I don't want to bother my landlord about. The shopping list feature is really handy — tells you exactly what to buy.",
        date: "2026-02-05",
      },
    ],
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
    metaTitle: "Theory Elite - MBA Quiz App | 1v1 Business Battles",
    metaDescription:
      "Challenge friends in real-time MBA quiz battles across 6 business subjects. Test your marketing, finance, and management knowledge in Theory Elite's 1v1 duels. Free.",
    seoDescription:
      "Theory Elite is the ultimate MBA quiz app designed for business students, professionals, and knowledge enthusiasts who want to sharpen their skills through competitive 1v1 quiz battles. Covering six core business subjects — Marketing, Brand Management, Business Analytics, Operations Management, Strategic Management, and Finance — Theory Elite transforms dry business theory into an exciting, fast-paced trivia duel experience.\n\nChallenge friends, classmates, or random opponents in real-time quiz battles where speed and accuracy determine the winner. Each round draws from a curated question bank developed with MBA-level content, making Theory Elite the perfect study companion for business exams, interview preparation, or simply testing your business IQ against others.\n\nWhat sets Theory Elite apart from generic trivia apps is its exclusive focus on business education. Every question is carefully crafted to cover concepts taught in top MBA programs worldwide, from Porter's Five Forces and SWOT analysis to financial ratios and supply chain management.\n\nThe app features a competitive leaderboard system, achievement badges, daily missions, and progressive difficulty levels that keep you challenged as your business knowledge grows. With its clean interface and quick-match format, Theory Elite fits seamlessly into busy schedules — play a two-minute quiz battle between meetings or deep-dive into marathon study sessions.",
    keywords: [
      "MBA quiz app",
      "business quiz game",
      "MBA trivia app",
      "1v1 quiz battle app",
      "business knowledge quiz game iPhone",
      "marketing finance quiz app",
      "MBA exam prep quiz game",
      "quiz battle app",
      "business strategy quiz",
      "management quiz app multiplayer",
      "Theory Elite",
      "business education app",
    ],
    faqs: [
      {
        question: "What is the best quiz app for MBA students?",
        answer:
          "Theory Elite is designed specifically for MBA and business students, covering 6 core subjects including Marketing, Finance, Brand Management, and Business Analytics with competitive 1v1 quiz battles.",
      },
      {
        question:
          "Are there multiplayer business trivia games for iPhone?",
        answer:
          "Yes! Theory Elite features real-time 1v1 quiz battles where you can challenge friends or random opponents across six business subjects. It also includes global leaderboards and achievement badges.",
      },
      {
        question: "How can I test my business knowledge on my phone?",
        answer:
          "Download Theory Elite to test your business knowledge through timed quiz challenges, flashcards, and competitive 1v1 battles covering marketing, finance, operations, and strategic management.",
      },
      {
        question:
          "Is there a trivia app for marketing, finance, and management?",
        answer:
          "Theory Elite covers marketing, brand management, business analytics, operations management, strategic management, and finance — all in one app with quiz battles, flashcards, and daily missions.",
      },
    ],
    rating: { average: 4.8, count: 52 },
    reviews: [
      {
        author: "MBAgrad2026",
        rating: 5,
        title: "Perfect for exam revision",
        body: "Used this throughout my MBA semester and it genuinely helped me retain concepts. The 1v1 battles with classmates made studying competitive and fun.",
        date: "2026-02-20",
      },
      {
        author: "BizStudentSam",
        rating: 5,
        title: "Addictive study tool",
        body: "Way better than flashcards alone. The quiz battle format keeps me coming back. Covers all six subjects I need for my business degree.",
        date: "2026-01-15",
      },
      {
        author: "MarketingPro_K",
        rating: 4,
        title: "Solid business knowledge quiz",
        body: "Great for keeping your marketing and strategy knowledge sharp. The daily missions give you a reason to open the app every day.",
        date: "2026-02-08",
      },
    ],
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
    metaTitle: "ABC Kids - 3D Alphabet Learning App for Toddlers",
    metaDescription:
      "Help your toddler learn the alphabet with 3D animated letters and fun matching games. ABC Kids makes letter recognition engaging for ages 2-5. Free and ad-free.",
    seoDescription:
      "ABC Kids is a delightful alphabet learning app for toddlers and preschoolers that brings the ABCs to life with stunning 3D animated letters. Designed for children ages 2 to 5, this interactive educational app makes letter recognition, phonics awareness, and alphabet matching an exciting adventure that young learners will want to revisit again and again.\n\nEach letter of the alphabet is presented as a colorful, animated 3D character that children can interact with through touch, helping build fine motor skills alongside literacy foundations. The app includes engaging matching games that reinforce letter identification by challenging kids to pair uppercase and lowercase letters, associate letters with objects, and recognize letter shapes in playful contexts.\n\nABC Kids stands out from other preschool ABC apps by combining visual spectacle with proven early childhood education principles. The 3D animations captivate children's attention far more effectively than flat, static flashcards, while the matching game mechanics encourage active recall — the most effective way for young minds to retain new information.\n\nParents will appreciate the child-safe design with no third-party ads, no in-app purchases, and no external links that could lead children away from the learning environment. The intuitive interface is designed for small fingers, allowing toddlers to navigate independently while building confidence with the alphabet.",
    keywords: [
      "ABC learning app for kids",
      "alphabet app for toddlers",
      "ABC game for preschoolers",
      "3D animated alphabet learning app",
      "letter matching game kids iPhone",
      "learn ABCs toddler app free",
      "phonics and letter recognition app",
      "interactive alphabet game ages 2-5",
      "educational games for toddlers",
      "preschool ABC app",
      "ABC Kids",
      "ad-free kids learning app",
    ],
    faqs: [
      {
        question:
          "What is the best free ABC app for toddlers on iPhone?",
        answer:
          "ABC Kids is a free, ad-free alphabet learning app for toddlers featuring 3D animated letters, matching games, and voiceover guidance designed specifically for children ages 2-5.",
      },
      {
        question:
          "At what age should toddlers start using alphabet learning apps?",
        answer:
          "Children as young as 2 can benefit from alphabet apps like ABC Kids, which uses large buttons, 3D animations, and audio cues designed for early learners who are just beginning to recognize letters.",
      },
      {
        question: "Are there ABC apps with 3D animations for kids?",
        answer:
          "Yes! ABC Kids features all 26 letters as animated 3D characters that children can interact with through touch. The 3D animations are more engaging than flat flashcard-style apps.",
      },
      {
        question:
          "Is ABC Kids safe for toddlers with no ads?",
        answer:
          "ABC Kids is 100% ad-free with no in-app purchases and no external links. It provides a completely safe learning environment designed for unsupervised toddler use.",
      },
    ],
    rating: { average: 4.9, count: 67 },
    reviews: [
      {
        author: "MumOfTwo_Mel",
        rating: 5,
        title: "My 3-year-old loves the 3D letters",
        body: "Both my kids fight over who gets to play this. The animated letters are gorgeous and my daughter now recognises all 26 letters after just a few weeks.",
        date: "2026-02-18",
      },
      {
        author: "PreschoolTeacher",
        rating: 5,
        title: "Recommend to all parents",
        body: "I suggest this app to parents at our centre. The matching games reinforce letter recognition perfectly and the ad-free environment means I trust it completely.",
        date: "2026-01-22",
      },
      {
        author: "DadJokeDave",
        rating: 5,
        title: "Finally an app I trust for my toddler",
        body: "No ads, no sneaky purchases, just quality learning. My son went from knowing 5 letters to all 26 in about a month. The voiceover guidance is brilliant.",
        date: "2026-02-01",
      },
    ],
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
    metaTitle: "Laser Maze - Mirror Puzzle Game | 117 Brain Teasers",
    metaDescription:
      "Guide laser beams through 117 mind-bending mirror puzzles. Place and rotate mirrors, split beams, and solve increasingly challenging levels. Free on the App Store.",
    seoDescription:
      "Laser Maze is an addictive mirror puzzle game that challenges players to guide laser beams through increasingly complex levels using strategically placed mirrors, splitters, and reflectors. With 117 handcrafted puzzles ranging from beginner to expert difficulty, Laser Maze delivers hours of brain-teasing entertainment for fans of logic games and physics-based puzzles.\n\nThe concept is elegantly simple yet deeply satisfying: position mirrors to redirect laser beams and hit every target on the board. As you progress through the levels, new optical elements are introduced — beam splitters that create multiple paths, colored filters that change beam properties, and obstacles that block your carefully planned routes. Each puzzle has a unique solution that requires spatial reasoning, strategic planning, and creative thinking.\n\nLaser Maze appeals to players who enjoy logic puzzle games and want a fresh take on the light and mirrors puzzle genre. The clean, visually striking design makes beam paths easy to follow, while the difficulty curve ensures that both casual players and hardcore puzzle enthusiasts find their sweet spot.\n\nWhether you are killing time during a commute or settling in for a focused puzzle-solving session, Laser Maze fits any schedule with levels that can be completed in seconds or pondered for minutes. The game includes no timers or move limits — just pure puzzle-solving satisfaction at your own pace.",
    keywords: [
      "laser puzzle game",
      "mirror puzzle game",
      "laser beam puzzle app",
      "light and mirrors puzzle game iPhone",
      "laser reflection logic game",
      "physics puzzle game with lasers",
      "brain teaser mirror puzzle app",
      "logic puzzle game",
      "laser maze levels puzzle",
      "optics puzzle game iOS",
      "Laser Maze",
      "free puzzle game iPhone",
    ],
    faqs: [
      {
        question: "What are the best laser puzzle games for iPhone?",
        answer:
          "Laser Maze is a highly rated mirror puzzle game with 117 handcrafted levels where you place and rotate mirrors to guide laser beams to targets. It is free on the App Store for iPhone and iPad.",
      },
      {
        question: "How many levels does Laser Maze have?",
        answer:
          "Laser Maze features 117 hand-crafted puzzle levels ranging from beginner to expert difficulty, with new optical elements and challenges introduced as you progress.",
      },
      {
        question: "Is there a mirror and laser reflection game app?",
        answer:
          "Yes! Laser Maze is a mirror and laser puzzle game where you place mirrors to reflect laser beams and hit targets. It features 117 levels, cosmetic skins, hints, and undo functions.",
      },
      {
        question:
          "Are there free laser beam puzzle games on iOS?",
        answer:
          "Laser Maze is free to download on the App Store and features 117 puzzle levels with no paywall. It includes hints and an energy reward system for continued play.",
      },
    ],
    rating: { average: 4.6, count: 45 },
    reviews: [
      {
        author: "PuzzleFanatic",
        rating: 5,
        title: "Best laser puzzle on the App Store",
        body: "117 levels and every one feels unique. The difficulty ramp is perfect — starts easy enough to learn the mechanics then gets genuinely challenging.",
        date: "2026-02-12",
      },
      {
        author: "CasualGamer_Aus",
        rating: 4,
        title: "Great brain teaser",
        body: "Perfect for commute gaming. Each level is quick enough to do on the train but tricky enough to make you think. Love the cosmetic skins too.",
        date: "2026-01-30",
      },
      {
        author: "LogicLover99",
        rating: 5,
        title: "Addictive mirror puzzles",
        body: "Reminds me of the old physical laser maze board game but with way more variety. The visual design is really polished for a free game.",
        date: "2026-02-07",
      },
    ],
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
    metaTitle: "Rollscape - Marble Maze Game | Tilt & Touch Controls",
    metaDescription:
      "Roll your marble through stunning 3D mazes with touch or tilt controls. Explore 2 worlds, 20+ levels, and 10 unique ball types in Rollscape. Free on the App Store.",
    seoDescription:
      "Rollscape is a beautifully crafted marble maze game that puts you in control of a rolling marble through intricate 3D environments using your choice of touch or tilt controls. With two distinct worlds and over 20 progressively challenging levels, Rollscape offers a premium ball rolling experience that captures the timeless appeal of classic labyrinth games while adding modern polish and depth.\n\nNavigate your marble through winding paths, narrow bridges, moving platforms, and treacherous drops as you explore each handcrafted level. The dual control system lets you choose between intuitive touch-based steering or immersive tilt controls that transform your iPhone or iPad into a real-world maze board — just like the classic wooden labyrinth games, but with stunning 3D graphics and dynamic physics.\n\nRollscape features two distinct worlds — Ancient Temple and Space Station — each with unique visual themes and maze mechanics. Ten unique ball types with different physics properties (Spark, Fire, Ice, Rainbow, and more) add variety and replayability to every level. Six power-ups including Ghost Mode help you navigate the trickiest sections.\n\nWhether you are a fan of classic tilt-based maze games or prefer the precision of touch controls, Rollscape accommodates your play style. The game runs at a smooth 60fps with haptic feedback on supported devices. Daily challenges and an endless mode provide ongoing content beyond the main campaign.",
    keywords: [
      "marble maze game",
      "ball rolling game iPhone",
      "marble ball maze app",
      "tilt maze game iOS",
      "3D ball maze puzzle game",
      "labyrinth ball game app",
      "rolling marble puzzle levels",
      "physics ball maze adventure",
      "marble run game",
      "arcade maze game",
      "Rollscape",
      "free marble game iPhone",
    ],
    faqs: [
      {
        question:
          "What is the best marble maze game for iPhone?",
        answer:
          "Rollscape is a premium marble maze game featuring 2 worlds with 20+ levels, 10 unique ball types, touch and tilt controls, and 60fps gameplay. It is free on the App Store for iPhone, iPad, Mac, and Apple Vision.",
      },
      {
        question:
          "Are there ball rolling games with tilt controls on iOS?",
        answer:
          "Yes! Rollscape supports both touch joystick and device tilt controls, letting you guide your marble through 3D mazes just like a classic wooden labyrinth game.",
      },
      {
        question:
          "What marble games have multiple worlds and levels?",
        answer:
          "Rollscape features two distinct worlds — Ancient Temple and Space Station — with over 20 handcrafted levels, plus a daily challenge mode and endless mode for extra content.",
      },
      {
        question:
          "Is there a 3D marble maze game with different ball types?",
        answer:
          "Rollscape features 10 unique ball types including Spark, Fire, Ice, and Rainbow, each with different physics properties and trail effects that affect gameplay.",
      },
    ],
    rating: { average: 4.7, count: 41 },
    reviews: [
      {
        author: "MarbleManiac",
        rating: 5,
        title: "Reminds me of classic labyrinth games",
        body: "The tilt controls are spot on — feels like holding a real wooden maze board. The different ball types with unique physics keep it fresh across all levels.",
        date: "2026-02-14",
      },
      {
        author: "GameDad_AU",
        rating: 5,
        title: "Great for the whole family",
        body: "My kids use the touch controls, I use tilt. We compete for best times on the daily challenges. The 60fps on my iPhone 15 is buttery smooth.",
        date: "2026-01-25",
      },
      {
        author: "VisionProUser",
        rating: 4,
        title: "Impressive on Apple Vision",
        body: "Tried this on my Vision Pro and the spatial experience is amazing. Rolling a marble through a 3D maze in your living room is something else.",
        date: "2026-02-10",
      },
    ],
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
    metaTitle: "Orb Galaxy Sort - Ball Sorting Puzzle Game | 100+ Levels",
    metaDescription:
      "Sort colorful orbs across galactic tubes in 100+ mind-bending levels. Orb Galaxy Sort combines relaxing ball sort puzzles with a stunning space theme. Free.",
    seoDescription:
      "Orb Galaxy Sort takes the wildly popular ball sort puzzle genre into outer space with a visually stunning galactic theme and over 100 increasingly challenging levels. If you love color sorting games but crave something more immersive than the standard tube-and-ball format, Orb Galaxy Sort delivers a cosmic twist that elevates every sorting session into an interstellar adventure.\n\nThe gameplay follows the beloved ball sort puzzle formula: tap to pick up the top orb from one tube and place it on a matching-color orb in another tube. Your goal is to sort all orbs so each tube contains only one color. Simple to learn, but as levels progress, the puzzles demand increasingly sophisticated strategies — planning multiple moves ahead, using empty tubes as temporary holding spaces, and finding the optimal sorting sequence.\n\nWhat distinguishes Orb Galaxy Sort is its breathtaking space-themed presentation. Glowing orbs float against nebula backdrops, satisfying animations reward each completed level, and the cosmic sound design creates a relaxing atmosphere perfect for unwinding. There is no timer and no move limit — just pure puzzle-solving satisfaction at your own pace.\n\nWith 100+ levels of progressive difficulty, an XP system with cosmic rank progression, and customizable tube skins, Orb Galaxy Sort offers weeks of engaging content for casual puzzlers and brain teaser enthusiasts alike.",
    keywords: [
      "ball sort puzzle game",
      "color sort puzzle game",
      "ball sorting game app",
      "space themed puzzle game iPhone",
      "ball sort puzzle 100 levels",
      "orb sorting galaxy puzzle",
      "color matching ball puzzle",
      "relaxing sorting game",
      "tube sort color puzzle iOS",
      "brain teaser sorting game",
      "Orb Galaxy Sort",
      "free ball sort game",
    ],
    faqs: [
      {
        question:
          "What is the best ball sort puzzle game for iPhone?",
        answer:
          "Orb Galaxy Sort is a highly rated ball sort puzzle game with 100+ handcrafted levels, a stunning space theme, XP progression, and no time pressure. It is free on the App Store.",
      },
      {
        question: "Are there ball sorting games with a space theme?",
        answer:
          "Yes! Orb Galaxy Sort features breathtaking cosmic backgrounds with floating planets, shooting stars, and alien encounters as you sort colorful orbs into matching tubes.",
      },
      {
        question: "How many levels does Orb Galaxy Sort have?",
        answer:
          "Orb Galaxy Sort features over 100 handcrafted levels with progressive difficulty, from beginner-friendly opening stages to complex multi-color arrangements for experienced players.",
      },
      {
        question:
          "Is there a relaxing color sorting game with no timer?",
        answer:
          "Orb Galaxy Sort is self-paced with no timers or move limits. The cosmic atmosphere and gentle sound design make it a perfect relaxing puzzle game for unwinding.",
      },
    ],
    rating: { average: 4.5, count: 58 },
    reviews: [
      {
        author: "RelaxGamer",
        rating: 5,
        title: "Most relaxing puzzle game I've found",
        body: "The space theme is beautiful and the no-timer approach means zero stress. I play this every night before bed. Over 100 levels keeps it going for weeks.",
        date: "2026-02-16",
      },
      {
        author: "PuzzleQueen_J",
        rating: 4,
        title: "Solid ball sort with a gorgeous twist",
        body: "I've played lots of ball sort games but the cosmic backgrounds and glowing orbs make this one stand out. The XP system gives you a reason to keep playing.",
        date: "2026-01-20",
      },
      {
        author: "SortMaster",
        rating: 5,
        title: "Best space-themed ball sorter",
        body: "Love the tube skins and the rank progression. Later levels really make you think several moves ahead. Great brain trainer disguised as a chill game.",
        date: "2026-02-03",
      },
    ],
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
    metaTitle: "Color Ball Drop 3D - Learn Colors Game for Kids 3-7",
    metaDescription:
      "Teach your child colors through fun 3D ball-catching games. Designed for ages 3-7, Color Ball Drop 3D makes color recognition exciting and interactive. Free download.",
    seoDescription:
      "Color Ball Drop 3D is a vibrant educational game designed specifically to help children ages 3 to 7 learn and recognize colors through interactive 3D gameplay. By combining the excitement of a ball drop mechanic with proven color learning principles, this app transforms screen time into meaningful educational playtime that parents can feel good about.\n\nChildren learn by doing, and Color Ball Drop 3D capitalizes on this by letting kids actively engage with colors in a dynamic 3D environment. As colorful balls drop through the play area, children identify, match, and sort them by color — building color recognition skills through repetition in a context that feels like play, not a lesson.\n\nThe app is carefully designed for its target age group. The interface uses extra-large, easy-to-tap elements suitable for developing fine motor skills. Audio cues pronounce color names clearly, reinforcing both visual and auditory learning pathways. Progressive difficulty ensures that younger children start with primary colors while older kids advance to more nuanced color challenges.\n\nParents searching for a fun way to teach kids colors will appreciate Color Ball Drop 3D's child-safe design with calm animations, gentle sounds, and no reading required. Available on iPhone, iPad, Mac, and Apple Vision.",
    keywords: [
      "color learning game for kids",
      "learn colors app for toddlers",
      "color game for preschoolers",
      "ball drop game kids educational",
      "3D color learning game ages 3-7",
      "kids color matching game iPhone",
      "interactive color recognition app",
      "preschool colors and shapes game",
      "fun way to teach kids colors",
      "toddler color sorting game",
      "Color Ball Drop 3D",
      "free kids educational game",
    ],
    faqs: [
      {
        question:
          "What is the best color learning app for 3-year-olds?",
        answer:
          "Color Ball Drop 3D is designed for children ages 3-7 with extra-large tap targets, calm animations, and gentle audio that pronounces color names. It teaches color recognition through fun 3D ball-catching gameplay.",
      },
      {
        question: "How do I teach my toddler colors using an app?",
        answer:
          "Color Ball Drop 3D teaches colors through interactive play — children catch falling balls that match a target color, building recognition skills through repetition in a fun, engaging 3D environment.",
      },
      {
        question:
          "Are there 3D color games for preschoolers on iPhone?",
        answer:
          "Yes! Color Ball Drop 3D features soft 3D pastel graphics specifically designed for preschoolers, with simple drag-to-move controls and no reading required.",
      },
      {
        question:
          "Is Color Ball Drop 3D free and safe for children?",
        answer:
          "Color Ball Drop 3D is free to download and features a child-safe design with calm animations, gentle sounds, extra-large buttons, and no reading required — perfect for young children.",
      },
    ],
    rating: { average: 4.8, count: 34 },
    reviews: [
      {
        author: "ToddlerMum_Syd",
        rating: 5,
        title: "My 4-year-old learned all her colors",
        body: "She asks to play this every day. The gentle sounds and big buttons are perfect for little hands. She now names every color she sees around the house.",
        date: "2026-02-19",
      },
      {
        author: "KinderTeacher_K",
        rating: 5,
        title: "Excellent educational design",
        body: "The color pronunciation audio is clear and the progressive difficulty is well thought out. Great supplement to classroom colour learning activities.",
        date: "2026-01-18",
      },
      {
        author: "BusyParent",
        rating: 4,
        title: "Safe and educational screen time",
        body: "No reading required means my 3-year-old can play independently. The calm animations don't overstimulate. Exactly what I was looking for.",
        date: "2026-02-06",
      },
    ],
  },
  {
    id: "learn-abc",
    name: "Learn ABC",
    subtitle: "Learn and Grow",
    category: "Education",
    categoryColor: "bg-teal-500",
    description:
      "ABC Jungle is a fun, colorful learning app designed for toddlers and preschoolers ages 2-4. Explore a vibrant jungle world while learning letters, numbers, colors, shapes, poems, and stories in a safe, engaging environment.",
    features: [
      "Letters A-Z with jungle animations",
      "Numbers, colors & shapes learning",
      "Interactive poems & stories",
      "Simple child-friendly interface",
      "Background music with volume control",
      "Works offline — no internet needed",
    ],
    appStoreUrl:
      "https://apps.apple.com/au/app/learn-abc-learn-and-grow/id6759160083",
    appStoreId: "6759160083",
    icon: "/icons/learn-abc.png",
    gradient: "from-teal-400 to-green-600",
    platforms: ["iPhone", "iPad", "Mac", "Apple Vision"],
    price: "Free",
    ageRating: "4+",
    size: "136.4 MB",
    metaTitle: "Learn ABC: Learn & Grow - Jungle Learning App Ages 2-4",
    metaDescription:
      "Explore a jungle world of ABCs, numbers, colors, shapes, poems, and stories. Learn ABC is the all-in-one learning app for toddlers ages 2-4. Free download.",
    seoDescription:
      "Learn ABC: Learn and Grow is a comprehensive jungle-themed learning app designed for toddlers and preschoolers ages 2 to 4. This all-in-one educational app covers every essential early learning milestone — letters, numbers, colors, shapes, nursery poems, and interactive stories — wrapped in a vibrant jungle adventure that keeps young minds engaged and curious.\n\nYour child will explore a lush, animated jungle environment where friendly animal characters guide them through structured learning activities. Each section targets a specific developmental area: trace and recognize all 26 letters of the alphabet, count and identify numbers, sort and match colors, discover basic shapes, enjoy classic nursery poems with animated visuals, and listen to age-appropriate stories that build vocabulary and comprehension skills.\n\nWhat makes Learn ABC stand out from other preschool learning apps is its cohesive jungle theme that ties every activity together into a unified adventure. Rather than switching between disconnected mini-games, children progress through a jungle world where each learning module feels like a natural part of the exploration.\n\nThe app is purpose-built for toddlers ages 2 to 4, with large interactive elements, gentle audio guidance, and progressive difficulty. Parents looking for a kindergarten readiness app will find that Learn ABC covers the foundational skills — letter recognition, number sense, color identification, and shape awareness — that prepare children for school success. Works completely offline with no internet required.",
    keywords: [
      "learning app for toddlers",
      "preschool learning game",
      "jungle learning app for kids",
      "ABC numbers colors shapes app toddlers",
      "educational app for 2-4 year olds",
      "kids learning app with stories and poems",
      "all in one toddler learning game",
      "learn letters and numbers app",
      "jungle themed educational game preschool",
      "kindergarten readiness app",
      "toddler games ages 2 3 4",
      "Learn ABC Learn and Grow",
    ],
    faqs: [
      {
        question:
          "What is the best all-in-one learning app for 2-year-olds?",
        answer:
          "Learn ABC: Learn and Grow covers letters, numbers, colors, shapes, poems, and stories in one app — all designed specifically for toddlers ages 2-4 with a fun jungle theme.",
      },
      {
        question:
          "What app teaches letters, numbers, colors, and shapes together?",
        answer:
          "Learn ABC: Learn and Grow is an all-in-one educational app that covers the complete early learning curriculum including ABCs, 123s, colors, shapes, nursery poems, and interactive stories.",
      },
      {
        question:
          "Are there jungle-themed educational apps for toddlers?",
        answer:
          "Yes! Learn ABC features a vibrant animated jungle world where friendly animal characters guide toddlers through learning activities covering letters, numbers, colors, shapes, and more.",
      },
      {
        question:
          "Does Learn ABC work offline without internet?",
        answer:
          "Yes, Learn ABC: Learn and Grow works completely offline with no internet connection required. All content is available immediately after download, perfect for travel or areas with limited connectivity.",
      },
    ],
    rating: { average: 4.7, count: 43 },
    reviews: [
      {
        author: "JungleMum",
        rating: 5,
        title: "All-in-one learning for my toddler",
        body: "Letters, numbers, colours, shapes, poems AND stories in one app — I don't need five different apps anymore. The jungle theme keeps my 3-year-old totally engaged.",
        date: "2026-02-17",
      },
      {
        author: "TravelDad",
        rating: 5,
        title: "Works offline — lifesaver on flights",
        body: "Downloaded this before a 4-hour flight and it kept my toddler entertained the whole time. No internet required and the content is genuinely educational.",
        date: "2026-01-26",
      },
      {
        author: "EarlyEdMom",
        rating: 4,
        title: "Great kindergarten prep",
        body: "Covers all the early learning basics my daughter needs before starting school. The poems and stories section is a lovely bonus that other ABC apps don't have.",
        date: "2026-02-09",
      },
    ],
  },
  {
    id: "linko-dots",
    name: "Linko Dots",
    subtitle: "Color Connect Puzzle",
    category: "Games",
    categoryColor: "bg-violet-500",
    description:
      "A beautifully crafted dot-connecting puzzle game that's easy to learn but endlessly satisfying to master. Draw lines between same-colored dots to clear them, form squares and loops for massive chain reactions, and journey through 100 handcrafted levels across 5 stunning worlds — Meadow, Frost, Prism, Volcano, and Cosmos.",
    features: [
      "100 handcrafted levels across 5 worlds",
      "Frozen, stone, rainbow & bomb dot mechanics",
      "5 strategic power-ups (Color Bomb, Lightning, Shuffle…)",
      "Combo & flow-mode score multipliers",
      "Unlockable dot skins, themes & trail effects",
      "Smooth haptics, no timers, relaxing soundscape",
    ],
    appStoreUrl:
      "https://apps.apple.com/us/app/linko-dots-color-connect/id6759560421",
    appStoreId: "6759560421",
    icon: "/icons/linko-dots.png",
    gradient: "from-violet-500 to-fuchsia-600",
    platforms: ["iPhone", "iPad"],
    price: "Free",
    ageRating: "4+",
    size: "14.3 MB",
    metaTitle: "Linko Dots: Color Connect - Relaxing Dot Puzzle Game iOS",
    metaDescription:
      "Connect colored dots, build chain reactions, and master 100 handcrafted puzzle levels across 5 worlds. Linko Dots is a relaxing color-connect puzzle game for iPhone and iPad. Free.",
    seoDescription:
      "Linko Dots: Color Connect is a beautifully crafted dot-connecting puzzle game that combines simple, intuitive controls with deep strategic gameplay. Draw lines between same-colored dots to clear them from the board, connect in any direction including diagonals, and form squares or loops to trigger massive chain reactions that wipe entire colors off the grid in a single satisfying move.\n\nJourney through 100 handcrafted levels across five gorgeous themed worlds, each introducing new mechanics and challenges. Begin in the Meadow learning the basics, navigate frozen dots and stone blockers in Frost, master rainbow wildcards and complex objectives in Prism, defuse ticking bomb dots before they explode in Volcano, and face the ultimate puzzle challenge in the cosmic finale.\n\nFive strategic power-ups — Color Bomb, Lightning Chain, Shuffle, Convert, and +3 Moves — let you tackle even the toughest levels your way. Build streaks and momentum with the combo system to unlock score multipliers, and earn up to three stars on every level. Customize your experience with unlockable dot skins, board themes, and trail effects earned by completing levels.\n\nLinko Dots is perfect for puzzle fans who love relaxing, mindful gameplay without timers or pressure. Gorgeous animated gradient backgrounds, satisfying spring animations, haptic feedback, and a calming ambient soundscape make every session feel like a small mental vacation. Play at your own pace and discover why Linko Dots is one of the most polished color-connect puzzle games on iOS.",
    keywords: [
      "color connect puzzle game",
      "dot connect game iPhone",
      "relaxing puzzle game iOS",
      "match colored dots game",
      "puzzle game with power ups iPhone",
      "chain reaction puzzle game",
      "100 levels puzzle game",
      "dotly dot connect",
      "color matching puzzle iPad",
      "best free puzzle game iOS 2026",
      "Linko Dots",
      "no timer puzzle game",
    ],
    faqs: [
      {
        question: "What is Linko Dots and how do you play?",
        answer:
          "Linko Dots is a color-connect puzzle game where you draw lines between same-colored dots to clear them from the board. Connect dots in any direction — including diagonals — and form squares or loops to trigger chain reactions that clear entire colors at once.",
      },
      {
        question: "How many levels does Linko Dots have?",
        answer:
          "Linko Dots includes 100 handcrafted levels spread across five themed worlds: Meadow, Frost, Prism, Volcano, and Cosmos. Each world introduces new mechanics like frozen dots, stone blockers, rainbow wildcards, and bomb dots.",
      },
      {
        question: "Is Linko Dots free to play on iPhone?",
        answer:
          "Yes, Linko Dots is free to download on the App Store for iPhone and iPad. The full 100-level campaign is playable without any time pressure or forced timers.",
      },
      {
        question: "What power-ups are available in Linko Dots?",
        answer:
          "You can equip up to three power-ups before each level: Color Bomb (clears all dots of one color), Lightning Chain (connects any adjacent dots), Shuffle (rearranges the board), Convert (changes a dot's color), and +3 Moves (extra moves when stuck).",
      },
    ],
    rating: { average: 0, count: 0 },
    reviews: [],
  },
  {
    id: "eid-greetings",
    name: "Eid Greetings Cards 2026",
    subtitle: "Eid Mubarak Cards & Wishes",
    category: "Utilities",
    categoryColor: "bg-emerald-500",
    description:
      "Celebrate Eid Ul Fitr and Eid Ul Adha with elegant, share-ready greeting cards. Pick a beautiful template, personalize your message with custom text, styles, and colors, then instantly share to WhatsApp, Instagram, email, and more — all in one festive Eid Mubarak app.",
    features: [
      "Curated Eid Ul Fitr & Eid Ul Adha card collections",
      "Add custom text — move, style, color, size",
      "Instant sharing to WhatsApp, Instagram, email",
      "HD download & export option",
      "Arabic-inspired visuals with festive music",
      "Premium card packs & customization unlocks",
    ],
    appStoreUrl:
      "https://apps.apple.com/us/app/eid-greetings-cards-2026/id6759565686",
    appStoreId: "6759565686",
    icon: "/icons/eid-greetings.png",
    gradient: "from-emerald-500 to-teal-600",
    platforms: ["iPhone", "iPad"],
    price: "Free",
    ageRating: "4+",
    size: "108.9 MB",
    metaTitle: "Eid Greetings Cards 2026 - Eid Mubarak Wishes & Card Maker",
    metaDescription:
      "Send beautiful Eid Mubarak greeting cards for Eid Ul Fitr and Eid Ul Adha. Customize text, share to WhatsApp & Instagram in seconds. Free Eid Cards app for iPhone.",
    seoDescription:
      "Eid Greetings Cards 2026 is the all-in-one Eid Mubarak app for sending elegant, personalized greeting cards to family, friends, and loved ones during Eid Ul Fitr and Eid Ul Adha. Whether you're celebrating in person or sending wishes across the world, this app gives you everything you need to create beautiful festive messages in seconds.\n\nBrowse curated card collections designed specifically for both Eid occasions, each featuring Arabic-inspired typography, golden ornaments, crescent moons, lanterns, and traditional patterns that capture the spirit of the celebration. Add your own custom text — move it anywhere on the card, change the style, color, and size to match your message perfectly.\n\nThe streamlined flow — choose, customize, share — means you can have a personalized Eid greeting ready to send in under a minute. Share instantly to WhatsApp, Instagram Stories, Facebook, email, or save HD copies to your camera roll for later. Festive background music sets the mood while you craft your wishes.\n\nPerfect for personal greetings, social media stories, family group chats, and festive wishes. Premium unlocks add exclusive card packs, HD export, and the full customization experience for users who want even more design options. Eid Mubarak from Kinex Apps!",
    keywords: [
      "Eid Mubarak cards app",
      "Eid greetings card maker",
      "Eid Ul Fitr cards 2026",
      "Eid Ul Adha greeting app",
      "Eid wishes app iPhone",
      "Ramadan and Eid cards iOS",
      "custom Eid card maker",
      "share Eid Mubarak WhatsApp",
      "Eid card templates app",
      "Islamic greeting cards app",
      "Eid Greetings Cards 2026",
      "best Eid app for iPhone",
    ],
    faqs: [
      {
        question: "What is the best Eid Mubarak greeting card app for iPhone?",
        answer:
          "Eid Greetings Cards 2026 offers curated Eid Ul Fitr and Eid Ul Adha card collections, full text customization, and one-tap sharing to WhatsApp, Instagram, and email — making it one of the easiest Eid card apps for iPhone and iPad.",
      },
      {
        question: "Can I personalize the Eid cards with my own message?",
        answer:
          "Yes! You can add custom text to every card, then move it, restyle the font, change colors, and adjust size to make each greeting feel personal before sharing or downloading.",
      },
      {
        question: "Does the app cover both Eid Ul Fitr and Eid Ul Adha?",
        answer:
          "Yes — Eid Greetings Cards 2026 includes separate curated collections for both Eid Ul Fitr and Eid Ul Adha, so you have appropriate designs for each celebration in a single app.",
      },
      {
        question: "How do I share an Eid greeting card to WhatsApp?",
        answer:
          "After customizing your card, tap the share button to instantly send it to WhatsApp, Instagram Stories, email, or any other app installed on your iPhone. You can also download HD copies to your camera roll.",
      },
    ],
    rating: { average: 0, count: 0 },
    reviews: [],
  },
  {
    id: "math-world",
    name: "Math World",
    subtitle: "Learn & Practice Math",
    category: "Education",
    categoryColor: "bg-blue-500",
    description:
      "Make learning math exciting with beautifully designed lessons, video tutorials, creative number poems, and interactive quizzes. Math World covers addition, subtraction, multiplication, and division through colorful themed interfaces and SpriteKit-powered animations — perfect for building strong math foundations.",
    features: [
      "Lessons for addition, subtraction, multiplication & division",
      "Curated video tutorials for visual learners",
      "123 number poems (premium)",
      "Interactive quizzes with instant feedback",
      "SpriteKit-powered animations",
      "Works offline — no account required",
    ],
    appStoreUrl:
      "https://apps.apple.com/us/app/math-world-learn-practice/id6760903687",
    appStoreId: "6760903687",
    icon: "/icons/math-world.png",
    gradient: "from-blue-500 to-cyan-600",
    platforms: ["iPhone", "iPad"],
    price: "Free",
    ageRating: "4+",
    size: "141.4 MB",
    metaTitle: "Math World - Learn & Practice Math App for iPhone & iPad",
    metaDescription:
      "Master addition, subtraction, multiplication & division with Math World's lessons, video tutorials, and interactive quizzes. Fun math learning for all ages. Free on iOS.",
    seoDescription:
      "Math World is a fun and interactive way to learn math, blending beautifully designed lessons, video tutorials, creative number poems, and challenging quizzes into one engaging educational app. Whether you are just starting out or brushing up on the basics, Math World makes addition, subtraction, multiplication, and division genuinely exciting to study.\n\nStep through clear, visual lessons for every core math topic. Each lesson is built around a colorful theme with easy-to-follow explanations that make abstract math concepts click into place. Curated video tutorials bring math to life through expert explanations you can pause, rewind, and follow along with at your own pace — perfect for visual learners.\n\nThe four core topics — addition, subtraction, multiplication, and division — are each taught through dedicated themed interfaces with interactive SpriteKit-powered animations. Build a strong foundation with step-by-step addition lessons, master taking away with visual subtraction explanations, learn times tables through engaging multiplication content, and understand sharing and grouping with clear division examples.\n\nTest your skills with interactive quizzes that include multiple choice and true/false problems, plus instant feedback so you know immediately what to review. Unlock the exclusive 123 Poems section and remove all advertisements with a one-time premium purchase. Math World works completely offline with no account required, so kids and adults can start learning instantly anywhere, anytime.",
    keywords: [
      "math learning app iPhone",
      "addition subtraction multiplication division app",
      "kids math practice app iOS",
      "interactive math quiz game",
      "math lessons app for iPad",
      "video math tutorials app",
      "best free math app for kids",
      "times tables app iPhone",
      "math foundations app",
      "offline math learning app",
      "Math World",
      "math practice for beginners",
    ],
    faqs: [
      {
        question: "What math topics does Math World cover?",
        answer:
          "Math World covers all four core arithmetic topics — addition, subtraction, multiplication, and division — through dedicated lessons, video tutorials, and interactive quizzes designed to build a strong math foundation.",
      },
      {
        question: "Is Math World free to download?",
        answer:
          "Yes, Math World is free to download on the App Store. A one-time premium purchase removes ads and unlocks the exclusive 123 Poems section, but all core lessons and quizzes are free.",
      },
      {
        question: "Does Math World work without internet?",
        answer:
          "Yes! Math World works completely offline with no account required. All lessons, quizzes, and animations are available instantly after download — perfect for travel, classrooms, or areas with limited connectivity.",
      },
      {
        question: "Is Math World suitable for kids and adults?",
        answer:
          "Math World is designed for anyone who wants to strengthen their math foundations — from kids learning their first addition facts to adults brushing up on multiplication and division. Themed interfaces and clear visuals make it approachable at any age.",
      },
    ],
    rating: { average: 0, count: 0 },
    reviews: [],
  },
  {
    id: "little-panda-adventures",
    name: "Little Panda Adventures",
    subtitle: "Cozy Interactive Stories",
    category: "Education",
    categoryColor: "bg-lime-500",
    description:
      "A cozy interactive story experience where every choice shapes the journey. Join Panda on 6 wholesome adventures told through warm animated video stories — pick Panda's next move at pivotal moments and watch each gentle outcome unfold. No failure states, just encouraging storytelling about kindness, sharing, and gratitude.",
    features: [
      "6 fully voiced animated adventure days",
      "Interactive choose-your-path moments",
      "Themes: kindness, sharing, gratitude, manners",
      "No failure states — encouraging storytelling",
      "Hand-animated treehouse world",
      "Ad-free with full version, safe & private",
    ],
    appStoreUrl:
      "https://apps.apple.com/us/app/little-panda-adventures/id6760255651",
    appStoreId: "6760255651",
    icon: "/icons/little-panda.png",
    gradient: "from-lime-500 to-green-600",
    platforms: ["iPhone", "iPad"],
    price: "Free",
    ageRating: "4+",
    size: "207.6 MB",
    metaTitle: "Little Panda Adventures - Cozy Interactive Story App for Kids",
    metaDescription:
      "Join Panda on 6 wholesome interactive story adventures about kindness, sharing & gratitude. Choose Panda's next move in this cozy animated storytelling app for kids. Free.",
    seoDescription:
      "Little Panda Adventures is a cozy interactive storytelling app for young children where every choice shapes the journey. Join Panda on six wholesome adventures, each told through warm, hand-animated video stories. At pivotal moments in every tale, two big colorful buttons appear and your child decides what Panda does next — and every choice unfolds a different gentle outcome.\n\nThis is interactive storytelling done with care. Children are not just watching — they are part of the story. Choose kindly and the story celebrates it. Choose differently and Panda has a gentle 'oops' moment and tries again. There are no failure states, no penalties, no scary consequences — just warm, encouraging storytelling that makes children feel safe to explore and experiment.\n\nThe six adventure days each focus on a wholesome social-emotional theme. Day 1 follows Panda's morning routines from brushing teeth to tidying up. Day 2 captures the excitement of going to school for the first time. Day 3 teaches good manners through saying please, taking turns, and apologizing. Day 4 explores sharing cookies, toy blocks, and balls with friends. Day 5 shows the joy of helping a friend in need. Day 6 reinforces remembering to say thank you.\n\nEvery scene is fully voiced with gentle ambient music and hand-crafted treehouse-world artwork. Large, easy-to-tap choice buttons make the app accessible to even the youngest children. Little Panda Adventures is ad-free with full-version purchase and completely safe — no social features, no external links, no personal data collection.",
    keywords: [
      "interactive story app for kids",
      "kids storytelling app iOS",
      "panda adventures kids app",
      "social emotional learning app preschool",
      "kindness sharing app for toddlers",
      "choose your own adventure kids iPhone",
      "animated story app for children",
      "ad free kids story app",
      "wholesome kids app iPad",
      "manners and gratitude app for kids",
      "Little Panda Adventures",
      "no failure kids story game",
    ],
    faqs: [
      {
        question: "What is Little Panda Adventures?",
        answer:
          "Little Panda Adventures is a cozy interactive storytelling app where children join Panda on 6 animated video adventures and choose what Panda does at key moments. Themes include kindness, sharing, manners, and gratitude.",
      },
      {
        question: "Are there any failure states or scary moments?",
        answer:
          "No — Little Panda Adventures has no failure states or penalties. Every choice leads to a gentle outcome. If a child picks differently, Panda simply has a soft 'oops' moment and tries again, keeping the experience warm and encouraging.",
      },
      {
        question: "Is Little Panda Adventures safe for young children?",
        answer:
          "Yes. The app collects no personal data, has no social features, no external links, and is ad-free with the full-version purchase — making it a completely safe storytelling experience for young children.",
      },
      {
        question: "What ages is Little Panda Adventures designed for?",
        answer:
          "Little Panda Adventures is designed for preschool and early-elementary children. Large choice buttons, fully voiced narration, and gentle pacing make it accessible to even the youngest readers and pre-readers.",
      },
    ],
    rating: { average: 0, count: 0 },
    reviews: [],
  },
  {
    id: "wild-world-safari",
    name: "Wild World Academy Safari",
    subtitle: "Animal Learning Adventure",
    category: "Education",
    categoryColor: "bg-amber-500",
    description:
      "A family-friendly animal learning adventure across 6 incredible biomes. Join Leo the Lion on a safari through Farm, Desert, Arctic, Jungle, Ocean, and Sky World — discover 60 amazing animals, learn fun facts, and test your knowledge with engaging trivia to earn stars and unlock new zones.",
    features: [
      "6 wild biomes to explore",
      "60 amazing animals with real facts",
      "Animal trivia quizzes with star rewards",
      "Hand-crafted procedural artwork",
      "Friendly voice-overs guide the experience",
      "Daily surprises & progress tracking",
    ],
    appStoreUrl:
      "https://apps.apple.com/us/app/wild-world-academy-safari/id6759614684",
    appStoreId: "6759614684",
    icon: "/icons/wild-world-safari.png",
    gradient: "from-amber-500 to-orange-600",
    platforms: ["iPhone", "iPad"],
    price: "Free",
    ageRating: "4+",
    size: "124.8 MB",
    metaTitle: "Wild World Academy Safari - Animal Learning App for Kids",
    metaDescription:
      "Explore 6 biomes and discover 60 animals with Leo the Lion. Wild World Academy Safari teaches kids real animal facts through trivia adventures. Free on iPhone & iPad.",
    seoDescription:
      "Wild World Academy Safari is a family-friendly animal learning adventure that takes children on a guided journey through six incredible biomes. Join Leo the Lion on a global safari to discover 60 amazing animals, learn fascinating facts about the animal kingdom, and test what you've learned through engaging trivia challenges.\n\nExplore six wild biomes, each filled with their own unique inhabitants. Meet friendly farm animals like cows, horses, and chickens on the farm. Discover tough desert survivors like camels and fennec foxes. Brave the cold of the Arctic with polar bears, penguins, and narwhals. Swing through jungle trees with monkeys, tigers, and toucans. Dive deep into the ocean alongside dolphins, sharks, and sea turtles. Soar through Sky World with eagles, flamingos, and hummingbirds.\n\nEvery animal comes with carefully written trivia questions that teach real facts about how each species lives, eats, and survives. Answer correctly to earn stars and unlock new zones, building knowledge of the natural world while keeping the experience exciting and rewarding. Friendly voice-overs guide young learners through each biome, while beautiful hand-crafted procedural artwork ensures there are no loading screens between adventures.\n\nDaily surprises keep children coming back to discover something new every day. Wild World Academy Safari is the perfect blend of education and entertainment — a safe, content-rich animal trivia game for curious kids who love nature, geography, and the animal kingdom.",
    keywords: [
      "animal learning app for kids",
      "kids safari adventure app",
      "animal trivia game for children",
      "biomes and ecosystems app for kids",
      "learn about animals app iPhone",
      "animal facts game iOS",
      "preschool animal learning app",
      "ocean jungle desert animals app kids",
      "educational safari app for iPad",
      "kids nature trivia game",
      "Wild World Academy Safari",
      "animal kingdom learning game",
    ],
    faqs: [
      {
        question: "What does Wild World Academy Safari teach kids?",
        answer:
          "Wild World Academy Safari teaches children real facts about 60 animals across 6 biomes — Farm, Desert, Arctic, Jungle, Ocean, and Sky World. Each animal includes trivia questions that reinforce learning about habitats, diets, and behaviors.",
      },
      {
        question: "How many animals and biomes are in the app?",
        answer:
          "The app features 60 amazing animals spread across 6 distinct biomes: Farm, Desert, Arctic, Jungle, Ocean, and Sky World. Each biome has its own unique inhabitants with real animal facts and trivia.",
      },
      {
        question: "Is Wild World Academy Safari good for preschoolers?",
        answer:
          "Yes! Friendly voice-overs guide the experience, hand-crafted procedural artwork keeps things visually engaging, and the trivia is designed to be age-appropriate. It's perfect for curious kids who love animals and nature.",
      },
      {
        question: "How do you earn stars in Wild World Academy Safari?",
        answer:
          "You earn stars by answering animal trivia questions correctly. Stars unlock new zones and biomes, encouraging children to learn more about the animal kingdom as they progress through the safari adventure.",
      },
    ],
    rating: { average: 0, count: 0 },
    reviews: [],
  },
];

export const categories = [
  { name: "All", count: apps.length },
  { name: "Web", count: apps.filter((a) => a.category === "Web").length },
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
