# Agent Path — Mindloop Content & Asset Map

Quick reference for changing text, images, videos, and button behavior without searching the codebase.
`@/` = `src/` (alias configured in `vite.config.ts` + `tsconfig.app.json`).

## File Map (page order)

| Section | Component file |
|---|---|
| Navbar | `src/components/Navbar.tsx` |
| Hero | `src/components/Hero.tsx` |
| Search ("Search has changed") | `src/components/SearchSection.tsx` |
| Mission (scroll text reveal) | `src/components/MissionSection.tsx` |
| Solution | `src/components/SolutionSection.tsx` |
| CTA ("Start Your Journey") | `src/components/CtaSection.tsx` |
| Footer | `src/components/Footer.tsx` |
| Page composition | `src/App.tsx` |
| Theme tokens / fonts / `.liquid-glass` | `src/index.css` |
| Scroll animation helper (`fadeUp`) | `src/lib/animations.ts` |
| Social SVG icons | `src/components/icons.tsx` |
| shadcn primitives | `src/components/ui/button.tsx`, `src/components/ui/input.tsx` |

---

## Text Content

### Navbar — `src/components/Navbar.tsx`
| What | Where | Current value |
|---|---|---|
| Logo wordmark | line ~27 (`<span className="text-base font-bold">`) | `Mindloop` |
| Nav links | lines 5–10 (`links` array) | Home, How It Works, Philosophy, Use Cases |

### Hero — `src/components/Hero.tsx`
| What | Where | Current value |
|---|---|---|
| Subscriber count | line ~40 | `7,000+ people already subscribed` |
| Heading | lines 45–48 (`<motion.h1>`) | `Get *Inspired* with Us` ("Inspired" = serif italic span) |
| Subtitle | line ~50 (`<motion.p>`) | `Join our feed for meaningful updates...` |
| Input placeholder | line ~60 | `Enter your email` |
| Button label | line ~68 | `SUBSCRIBE` |

### Search — `src/components/SearchSection.tsx`
| What | Where | Current value |
|---|---|---|
| Heading | lines 33–39 | `Search has *changed.* Have you?` ("changed." = serif italic span) |
| Subtitle | lines 40–46 | `AI platforms now answer questions directly...` |
| Platform cards | lines 7–27 (`platforms` array) | name + description for ChatGPT, Perplexity, Google AI |
| Bottom tagline | line ~65 | `If you don't answer the questions, someone else will.` |

### Mission — `src/components/MissionSection.tsx`
| What | Where | Current value |
|---|---|---|
| Paragraph 1 | line 8–9 (`paragraph1` const) | `We're building a space where curiosity meets clarity — ...` |
| Highlighted words (white) | line 10 (`highlights` Set) | `curiosity`, `meets`, `clarity` |
| Paragraph 2 | line 11–12 (`paragraph2` const) | `A platform where content, community, and insight flow together — ...` |

### Solution — `src/components/SolutionSection.tsx`
| What | Where | Current value |
|---|---|---|
| Label | line ~39 | `SOLUTION` |
| Heading | lines 44–47 | `The platform for *meaningful* content` ("meaningful" = serif italic span) |
| Feature cards | lines 7–28 (`features` array) | Curated Feed, Writer Tools, Community, Distribution + descriptions |

### CTA — `src/components/CtaSection.tsx`
| What | Where | Current value |
|---|---|---|
| Heading | line ~56 | `Start Your Journey` (whole heading serif italic) |
| Subtitle | line ~59 | `Join a growing community of readers and writers...` |
| Button labels | lines 61, 67 | `Subscribe Now`, `Start Writing` |

### Footer — `src/components/Footer.tsx`
| What | Where | Current value |
|---|---|---|
| Copyright | line ~5 | `© 2026 Mindloop. All rights reserved.` |
| Footer links | line 1 (`footerLinks` array) | Privacy, Terms, Contact |

---

## Images (local assets in `src/assets/`)

| File | Used in | Imported at |
|---|---|---|
| `avatar-1.png` `avatar-2.png` `avatar-3.png` | Hero avatar stack | `Hero.tsx` lines 5–7, array line 12 |
| `icon-chatgpt.png` | Search card 1 | `SearchSection.tsx` line 3 |
| `icon-perplexity.png` | Search card 2 | `SearchSection.tsx` line 4 |
| `icon-google.png` | Search card 3 | `SearchSection.tsx` line 5 |

To replace: overwrite the PNG in `src/assets/` (keep filename) — no code change needed.
Note: current images are generated monochrome placeholders.

## Videos (remote URLs, defined as constants)

| Constant | File / line | Used for |
|---|---|---|
| `HERO_VIDEO` | `Hero.tsx` line 9–10 | Full-screen hero background (MP4) |
| `MISSION_VIDEO` | `MissionSection.tsx` line 5–6 | 800×800 centered square video (MP4) |
| `SOLUTION_VIDEO` | `SolutionSection.tsx` line 4–5 | Rounded 3:1 banner video (MP4) |
| `HLS_URL` | `CtaSection.tsx` line 7–8 | CTA background stream (Mux HLS `.m3u8`, via hls.js; Safari falls back to native) |

To swap a video: change the constant value at the top of its file. All are `autoPlay loop muted playsInline`.

---

## Buttons & Their Actions

| Button | File / line | Current action | How to change |
|---|---|---|---|
| Navbar logo | `Navbar.tsx` line 26 | `href="#home"` (scrolls to hero) | Edit `href` |
| Nav links (4×) | `Navbar.tsx` lines 5–10 | Anchor scroll to `#home`, `#how-it-works`, `#philosophy`, `#use-cases` (section `id`s match) | Edit `href` in `links` array |
| Social icons (3×) | `Navbar.tsx` lines 12–16 | `href="#"` (**placeholder, no real URL**) | Put real URLs in `socials` array `href` |
| Hero `SUBSCRIBE` | `Hero.tsx` lines 55, 64–70 | Submits the email form — **currently `e.preventDefault()`, no backend** | Replace `onSubmit` in `<motion.form>` (line 55) with your subscribe logic / API call |
| CTA `Subscribe Now` | `CtaSection.tsx` lines 60–62 | **No action** (visual only) | Add `onClick` or wrap in `<a>` |
| CTA `Start Writing` | `CtaSection.tsx` lines 63–68 | **No action** (visual only, `.liquid-glass` style) | Add `onClick` or wrap in `<a>` |
| Footer links (3×) | `Footer.tsx` line 13 | `href="#"` (**placeholder**) | Add real `href`s (e.g. `/privacy`) |

---

## Styling Quick Pointers

- Colors: HSL channel triplets in `:root` (`src/index.css` lines 14–37) — pure black/white monochrome, `--hero-subtitle` is the near-white text tone.
- Serif italic accents: `<span className="font-serif font-normal italic">` (Instrument Serif).
- Glass effect: add class `liquid-glass` to any element (`src/index.css` lines 80–106).
- Entrance animation: spread `{...fadeUp(delaySeconds)}` onto any `motion.*` element (`src/lib/animations.ts`).
- Mission word reveal tuning: `offset: ["start 0.85", "end 0.45"]` in `MissionSection.tsx` line ~75 controls when words fade in during scroll.
