# Competitive SEO Strategy for Kinexapps

> Battle plan to outrank competitors and dominate app-related search queries.

---

## Implementation Status

| # | Item | Status |
|---|------|--------|
| 1 | GA4 tracking snippet | **Done** |
| 2 | `aggregateRating` + Reviews schema | **Done** |
| 3 | App screenshots on pages | Remaining |
| 4 | "Best Apps For" comparison articles (5) | **Done** |
| 5 | Category landing pages (`/games`, `/education`, `/utilities`) | **Done** |
| 6 | Apple Vision Pro landing page | Remaining |
| 7 | Blog / Updates section | **Done** |
| 8 | "Build in Public" developer devlog | Remaining |
| 9 | SnapFix how-to content cluster (3 articles) | **Done** |
| 10 | Founder E-E-A-T on About page | Remaining |
| 11 | `prefers-reduced-motion` media query | Remaining |
| 12 | Sticky download CTA on app pages | Remaining |
| 13 | `llms.txt` for AI search | **Done** |
| 14 | Enhanced 404 page | Remaining |
| 15 | Apple App Site Association (AASA) file | Remaining |
| — | Navbar: Blog link added | **Done** |
| — | Footer: Categories column added | **Done** |
| — | Sitemap: all new routes added | **Done** |
| — | Google Search Console verification | Remaining (manual) |
| — | Submit sitemap to GSC | Remaining (manual) |
| — | GA4 conversion events for App Store clicks | Remaining (manual) |
| — | Replace placeholder reviews with real App Store reviews | Remaining (manual) |
| — | Link building outreach | Remaining (manual, ongoing) |
| — | AI search optimization (quick answer paragraphs) | Remaining |
| — | Conversion optimization (CTA copy, App Store badge) | Remaining |
| — | Topical cluster expansion articles | Remaining |
| — | FAQ expansion (8–10 per app) | Remaining |

---

## What Was Implemented (Commit `0249ae6`)

### 1. GA4 Tracking (layout.tsx)
- Added `G-8D0M90MELY` via `next/script` with `strategy="afterInteractive"`
- Two script tags: gtag.js loader + config initializer

### 2. Review Schema + Star Ratings (apps.ts, apps/[id]/page.tsx)
- Added `AppReview` and `AppRating` interfaces to `apps.ts`
- Each of the 8 apps has `rating` (average + count) and 2–3 `reviews` (author, rating, title, body, date)
- `aggregateRating` added to `SoftwareApplication` JSON-LD on every app page
- Separate `Review` JSON-LD array per app
- "What Users Say" UI section with star icons and review cards in 3-col grid

### 3. Blog Articles (articles.ts, blog/page.tsx, blog/[slug]/page.tsx)
- 8 articles in `src/data/articles.ts`:
  - **Comparisons (5):**
    1. `best-free-laser-puzzle-games-iphone-2026` → Laser Maze
    2. `best-free-abc-apps-toddlers-ad-free-safe` → ABC Kids + Learn ABC
    3. `best-ball-sort-puzzle-games-100-levels` → Orb Galaxy Sort
    4. `ai-home-repair-apps-can-ai-fix-your-house` → SnapFix
    5. `best-mba-quiz-apps-business-students` → Theory Elite
  - **How-To Guides (3):**
    6. `how-to-fix-leaking-faucet-without-plumber` → SnapFix
    7. `how-to-patch-repair-drywall-damage` → SnapFix
    8. `common-home-repairs-diagnose-with-iphone` → SnapFix
- Each article has: comparison table (comparisons only), app spotlight, 3 content sections, 3 FAQs, CTA
- JSON-LD: `Article`, `BreadcrumbList`, `HowTo` (how-tos only), `FAQPage`
- Blog index at `/blog` with `Blog` JSON-LD, article cards grouped by type

### 4. Category Landing Pages (games/, education/, utilities/)
- `/games` — 4 games, `ItemList` + `BreadcrumbList` + `FAQPage` JSON-LD, 3 FAQs
- `/education` — 3 education apps, same schema setup, 3 FAQs
- `/utilities` — 1 utility app (SnapFix), same schema setup, 3 FAQs
- Each page has unique meta title, description, and keywords

### 5. llms.txt (public/llms.txt)
- Plain text summary: company info, all 8 apps with category/platforms/features/App Store URLs

### 6. Navigation & Sitemap
- **Navbar:** Blog link added between Apps and About
- **Footer:** New "Categories" column (Games, Education, Utilities, Blog), grid expanded to 5 columns
- **Sitemap:** Added `/games`, `/education`, `/utilities`, `/blog`, and all 8 `/blog/[slug]` entries

---

## What Remains

### CRITICAL (Biggest Impact)

#### 3. App Screenshots on Every App Page
- Add 2–3 annotated screenshots per app
- Create `/public/screenshots/[app-name]-1.jpg` structure
- Add to `SoftwareApplication` schema as a `screenshot` array
- Display in a gallery/carousel on the app detail page

#### 6. Apple Vision Pro Landing Page
Rollscape, Orb Galaxy Sort, Color Ball Drop, and Learn ABC all support visionOS. **Nobody is targeting "free Apple Vision Pro games" yet** — this is uncontested keyword space.

Target keywords:
- "free Apple Vision Pro games"
- "visionOS puzzle games 2026"
- "Apple Vision apps for kids"

### HIGH PRIORITY — Content & Authority

#### 8. "Build in Public" Developer Devlog
Example posts:
- "How I Built a Physics Marble Maze in SceneKit" (Rollscape)
- "How I Implemented Multi-Photo AI Diagnosis in Swift" (SnapFix)
- "Creating an Ad-Free Kids App: Design Constraints That Make Better UX" (ABC Kids / Learn ABC)

These get naturally shared on Hacker News, Indie Hackers, Reddit r/iOSProgramming — all driving real backlinks.

#### 10. Founder E-E-A-T on About Page
- Founder's real name and photo
- Professional background (MBA — directly relevant to Theory Elite)
- Links to Apple Developer profile and LinkedIn
- Download count / user metrics
- `Person` JSON-LD with `jobTitle`, `affiliation`, `sameAs`

### MEDIUM PRIORITY — Technical & Conversion

#### 11. `prefers-reduced-motion` Media Query
Add to `globals.css`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

#### 12. Sticky Download CTA on App Pages
Add a sticky bar that appears after 30% scroll on mobile:
```html
<div class="sticky bottom-0 bg-white border-t p-4 flex justify-between items-center">
  <span>SnapFix — Free on App Store</span>
  <a href={appStoreUrl}>Download Free</a>
</div>
```

#### 14. Enhanced 404 Page
Add popular app links, category suggestions, and a "Browse our apps" section to recover lost visitors.

#### 15. Apple App Site Association (AASA) File
Create `/public/.well-known/apple-app-site-association` with entries for each of the 8 apps using their actual bundle identifiers.

### MANUAL TASKS (Not Code)

- Verify domain in Google Search Console
- Submit `sitemap.xml` to GSC
- Set up GA4 conversion events for App Store link clicks
- Replace placeholder reviews in `apps.ts` with real App Store reviews
- Link building outreach (Product Hunt, Common Sense Media, MacStories, etc.)
- Crunchbase profile, Wikidata entry, AlternativeTo listings

---

## LINK BUILDING — Free, High-ROI Tactics

| Tactic | Effort | Expected Links |
|--------|--------|----------------|
| **Product Hunt** (launch each app separately) | 2h/app | 50–200 links per launch |
| **Common Sense Media** (kids' apps) | 1h submission | DA 90+ editorial link |
| **MacStories / Cult of Mac pitch** (SnapFix) | 2h | DA 80+ if accepted |
| **Indie Hackers / HN "Show HN"** | 1h | DA 70+ community link |
| **AlternativeTo** (add each app) | 30min/app | Long-tail traffic |
| **Clutch.co / GoodFirms** (Melbourne dev) | 1h | DA 60+ directory link |
| **Crunchbase profile** | 30min | DA 90+, heavily cited by AI |
| **HARO / Connectively** expert quotes | 30min/day | Editorial links from journalists |
| **Apps for Kids AU** (appsforkids.org.au) | 30min | Australian-specific, directly relevant |
| **StartupVIC / StartupAUS** | 1h | Melbourne tech directory |

**Timing tip:** Never pitch during WWDC week, Apple Event days, or December holidays. Tuesday–Thursday pitches get the highest response rates.

---

## AI SEARCH OPTIMIZATION (2026 Frontier)

### Quick Answer Paragraphs
Add a Wikipedia-style lead sentence at the top of each app page that LLMs extract and cite:

> "SnapFix is a free iOS app that uses AI photo analysis to diagnose home repair problems and generate step-by-step fix instructions. It is available on iPhone and iPad and was developed by Kinexapps, an Australian mobile app studio."

### Listicle Content for AI Citations
The "Best Apps For" comparison articles (implemented) serve double duty: they rank in Google AND get cited by AI models.

### Wikipedia-Adjacent Credibility
- **Crunchbase profile** (free, heavily cited by AI)
- **Wikidata entry** (fully permissible for published software)
- **BuiltWith / AppFollow** presence (data aggregators AI trusts)

---

## CONVERSION OPTIMIZATION

### Better CTA Copy
| App | Current CTA | Better CTA |
|-----|-------------|------------|
| SnapFix | "Download SnapFix on App Store" | "Fix It Now — Free Download" |
| ABC Kids | "Download ABC Kids on App Store" | "Start Learning — Free & Ad-Free" |
| Laser Maze | "Download Laser Maze on App Store" | "Play 117 Free Levels" |
| Theory Elite | "Download Theory Elite on App Store" | "Challenge Friends — Free" |

### Official App Store Badge
Replace custom download buttons with the official Apple "Download on the App Store" badge. Documented 8–15% conversion lift over custom buttons.

### Social Proof on App Pages
Social proof is partially implemented (star ratings + review quotes). Still remaining:
- "Downloaded by X+ users" badge
- "Rated Ages 4+ by Apple" badge
- Official App Store badge

---

## TOPICAL CLUSTER ARCHITECTURE

Build three content clusters for topical authority. Pillar pages are implemented; cluster articles remain.

### Games Cluster (pillar: `/games` — **implemented**)
- Remaining articles:
  - "How Mirror Reflection Puzzles Train Spatial Reasoning"
  - "Best Marble Maze Games vs Labyrinth: Which Is Better?"
  - "Ball Sort Puzzles: Why They're Addictive (Science Explained)"

### Education Cluster (pillar: `/education` — **implemented**)
- Remaining articles:
  - "How to Teach the Alphabet to a 2-Year-Old Using Apps"
  - "Ad-Free vs. Freemium Kids Apps: What Parents Need to Know"
  - "MBA Study Apps: Does Gamification Actually Work?"

### AI & Utilities Cluster (pillar: `/utilities` — **implemented**)
- Remaining articles:
  - "Can AI Really Diagnose Home Repair Problems? We Tested It"
  - "iPhone Camera as a Home Inspection Tool: What AI Can and Cannot See"

---

## KEYWORD GAPS TO FILL

### Partially Addressed by Blog Articles
- "how to fix a leaking faucet yourself" — covered by `how-to-fix-leaking-faucet-without-plumber`
- "AI photo analysis home damage" — covered by `ai-home-repair-apps-can-ai-fix-your-house`
- "app that identifies home problems" — covered by `common-home-repairs-diagnose-with-iphone`
- "ball sorting game 100 levels free" — covered by `best-ball-sort-puzzle-games-100-levels`
- "MBA exam prep quiz game" — covered by `best-mba-quiz-apps-business-students`
- "best free preschool apps no ads" — covered by `best-free-abc-apps-toddlers-ad-free-safe`

### Still Missing
- "kindergarten readiness app iPad"
- "offline learning app for toddlers"
- "relaxing puzzle games no timer"
- "iPhone tilt maze game"
- "Apple Vision Pro games free"
- "business trivia multiplayer iPhone"

### FAQ Expansion (Target "People Also Ask")
Currently 3 FAQs per blog article + 3 FAQs per category page. Consider expanding to 8–10 FAQs per app detail page.

---

## PRIORITY ORDER — Remaining Items

| # | Action | Time | Impact |
|---|--------|------|--------|
| 1 | App screenshots on pages | 3h total | 2–3x conversion lift |
| 2 | Apple Vision Pro page | 2h | Uncontested niche |
| 3 | Founder E-E-A-T on About | 1h | Trust signals |
| 4 | `prefers-reduced-motion` | 30min | Accessibility compliance |
| 5 | Sticky CTA on app pages | 1h | Mobile conversion boost |
| 6 | Enhanced 404 page | 1h | Visitor recovery |
| 7 | AASA file | 30min | Universal Links + Applebot trust |
| 8 | Quick answer paragraphs on app pages | 1h | AI search citations |
| 9 | Topical cluster expansion articles | 2h/article | Deeper topical authority |
| 10 | CTA copy + App Store badge | 1h | Conversion optimization |
| 11 | Product Hunt launches | 2h/app | 50–200 backlinks each |
| 12 | Link building outreach | Ongoing | Domain authority growth |

---

*Last updated: 1 March 2026*
