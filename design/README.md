# Handoff: Jakub Cieślik — personal portfolio (one long page)

## Overview
A single-page personal portfolio for a full-stack developer (Ruby on Rails + React), aimed at hiring managers and freelance clients. Dark, minimalist, with three memorable moments: a name-assembly intro overlay, a pinned scroll-driven "Architect / Build / Ship" sequence, and a full-bleed light band with an infinite tech marquee. Copy tone is dry and precise. Content is real (from the owner's CV).

## About the design files
`design/Portfolio.dc.html` is a **design reference prototype**, not production code. It is authored in a streaming component format (`<x-dc>` + `support.js` runtime) and is meant to be *read*, not shipped. The task is to **recreate this design in a real codebase** — recommended: **Next.js (App Router) + TypeScript + Tailwind**, which matches the owner's stack. Every value below is exact; match it.

To view the prototype locally:
```bash
cd design && python3 -m http.server 8000   # then open http://localhost:8000/Portfolio.dc.html
```

## Fidelity
**High fidelity.** Final colors, type, spacing, motion and copy. Recreate pixel-close. The only placeholders are the GitHub and LinkedIn URLs (`https://github.com`, `https://linkedin.com`) and project 03's link (`#`) — ask the owner for the real ones.

## Design tokens

Colors (from the owner's résumé palette):
| Token | Hex | Use |
| --- | --- | --- |
| bg | `#1D1D1D` | page ground, hero, contact |
| bg-alt | `#171717` | Selected work band |
| bg-grad | `linear-gradient(180deg,#1D1D1D,#191919)` | Experience band |
| bg-stack | `radial-gradient(120% 60% at 50% 40%, #232323, #1D1D1D 70%)` | pinned sequence |
| band-light | `#EAE9FF` | full-bleed stats band |
| surface | `#1E1E1E` | experience cards |
| surface-ring | `#333333` (hover `#444444`) | 1px card ring |
| text | `#EAE9FF` | headings, primary text |
| text-body | `#A9A9B4` | lead paragraph, tags |
| text-muted | `#7A7A7A` | labels, body on cards |
| text-dim | `#444444` | footer, light-band labels |
| accent | `#43B1FF` | rules, marks, hover tint, focus |
| accent-hover | `#8CCFFF` | link hover |
| accent-deep | `#1B6FA8` | alternate accent option |
| hairline | `rgba(234,233,255,.12)` | row/section rules |

Type: **Inter** (400/500), `-webkit-font-smoothing: antialiased`. Headings never exceed weight 500 — hierarchy is size and space.
- h1 `clamp(46px, 9.5vw, 132px)` / line-height .92 / letter-spacing −.045em
- Section h2 `clamp(26px, 3.4vw, 44px)` / −.03em
- Project h3 `clamp(24px, 3.6vw, 40px)` / −.03em
- Card h4 20px; lead paragraph `clamp(16px,1.7vw,20px)` / 1.6
- Eyebrow labels 11px, uppercase, letter-spacing .3em, color `#7A7A7A`
- Nav links 12px, uppercase, letter-spacing .14em

Radius: 8px buttons, 10px project rows, 12px cards, 999px tags.
Layout: content column `max-width: 1180px`, side padding `clamp(20px, 5vw, 64px)`. Full-bleed backgrounds are absolutely positioned children with `inset: 0 calc(50% - 50vw); z-index: -1` inside a `position: relative` section (parent `<main>` has `z-index: 1`).

## Screens / sections (top to bottom)

### 0. Intro overlay
Fixed full-viewport `#1D1D1D`, centered. Name `clamp(34px,6vw,76px)` rises from a clipped mask (`introWord`, .9s `cubic-bezier(.16,1,.3,1)`), a 1px accent-to-transparent rule sweeps `scaleX(0→1)` (`introSweep`, 1.5s, delay .35s), then "FULL-STACK DEVELOPER" fades up. The whole overlay animates out with `introOut` (2.4s, `cubic-bezier(.7,0,.2,1)`, delay .15s) — opacity + `translateY(-24px)` + `visibility: hidden` from 62%→100%. `pointer-events: none`. Should run **once per session** in production (store a flag in `sessionStorage`) and be skipped entirely under `prefers-reduced-motion`.

### 1. Fixed chrome
- **Scroll progress**: 2px full-height bar at `left: 0`, gradient accent→`rgba(67,177,255,.15)`, `transform-origin: top`, driven by `animation-timeline: scroll(root)` (`progress` keyframe `scaleY(0→1)`).
- **Ambient glow**: fixed 62vw circle top-right, radial `rgba(67,177,255,.20)`, `blur(30px)`, drifting 18s alternate.
- **Nav**: fixed, `backdrop-filter: blur(14px)`, padding `18px clamp(20px,5vw,64px)`. Left: 7px accent dot with `0 0 12px` glow + "JC". Right: WORK / EXPERIENCE / CONTACT, muted, hover → full text color with a 1px accent bottom border. **The nav inverts by section** (see State).

### 2. Hero
Min 100vh, flex column, centered, gap 34px, padding `140px 0 90px`. Eyebrow with a 26px accent tick: "Kraków, Poland — available for work". H1 "Jakub" / "Cieślik" (second line `#7A7A7A`). Two-column grid (`auto-fit, minmax(260px,1fr)`, gap 34px): lead paragraph + a 3-row key/value list (Currently → Shelfio, Focus → Rails · React · Infra, Since → 2025) with hairline separators. Two buttons: outlined accent "See selected work ↓" (hover: `rgba(67,177,255,.14)` fill, `translateY(-2px)`, `0 8px 26px rgba(67,177,255,.2)`) and a neutral-outline mailto.

### 3. Pinned stack sequence
`height: 320vh`, `view-timeline-name: --stack`; inner `position: sticky; top: 0; height: 100vh`. Three overlapping words in one grid cell (`grid-area: 1/1`) at `clamp(40px,9vw,120px)`, each with a trailing accent period, animated by `stackWord` over `animation-timeline: --stack` with ranges `cover 18–42%`, `40–64%`, `62–92%`. `stackWord`: 0% opacity 0 / `translateY(64px) scale(.92)` / `blur(10px)` → 22% settled → 82% hold → 100% opacity .18 / `translateY(-26px)` / `blur(2px)`. A 1px accent rule below grows `scaleX` across `cover 18–92%`. Three supporting paragraphs animate on staggered sub-ranges.
*Fallback:* browsers without scroll-driven animations must show all words legible (feature-query `@supports (animation-timeline: view())`, otherwise static/IntersectionObserver).

### 4. Selected work (`#work`)
Ground `#171717` (bleed inset `-40px`). Header row: h2 + gradient hairline + "03". Three rows, each an `<a>` with `grid-template-columns: 68px minmax(0,1fr) auto`, gap `clamp(16px,3vw,44px)`, padding `34px 18px 34px 6px`, top hairline, radius 10px. Contents: index (12px, .2em, muted), title + accent uppercase role, 15px/1.65 blurb (max 620px), pill tags (11px, 1px hairline border, radius 999). Right: 42px circle with ↗. Hover: row gets `linear-gradient(90deg, rgba(67,177,255,.10), transparent 70%)` and `padding-left: 18px`; circle `translate(4px,-4px)` + accent border + `rgba(67,177,255,.14)` fill. Transition .35s.

Row content (exact):
1. **01 — Shelfio — storefront core** · Full-stack · → https://www.shelfio.com/pl · tags Ruby on Rails, Postgresql, Sidekiq, Redis
2. **02 — Autonomous gym platform** · Full-stack · Shelfio · tags Next.js, Typescript, Microservices, IoT / MQTT, Docker
3. **03 — SiteBell — product UI** · Front-end · tags React, TailwindCSS, Next.js, GitLab CI

### 5. Light band
Full-bleed `#EAE9FF`, text `#1D1D1D`, padding `74px 0 62px`, `margin-top: 90px`. Three stats (`clamp(34px,5vw,60px)` number + 12px .18em uppercase label in `#444444`): 2 / Products in production, 2 / Sides of the stack, 24/7 / Uptime the systems run at. Enters with `bandLift` (`translateY(40px)`+fade) on `view()` range `entry 4% → cover 26%`.
Below: full-viewport-width marquee, `animation: marquee 34s linear infinite` (`translateX(0 → -50%)`), items 20–34px separated by 6px accent dots, edges masked with `linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)`. **Implementation note:** duplicate the item list twice in the DOM for a seamless −50% loop; pause on `prefers-reduced-motion`. Items: Ruby on Rails, React, Next.js, Typescript, Postgresql, Docker, AWS, Sidekiq, Redis, MQTT, CI/CD, Linux.

### 6. Experience (`#experience`)
Gradient ground. Two cards (`auto-fit, minmax(300px,1fr)`, gap 20px, padding 28px, radius 12px, `#1E1E1E`, ring `0 0 0 1px #333`): company + dates right-aligned, accent uppercase job title, 14px/1.7 body. Hover: `translateY(-4px)`, ring `#444` + `0 14px 34px rgba(0,0,0,.5)`.
- **Shelfio** — Full-stack software developer — 10.2025 — present
- **SiteBell** — Front-end developer · internship — 08.2025 — 10.2025

Then three skill groups (Languages / Technologies / Infrastructure & tools) as 13px chips on `rgba(234,233,255,.045)`, radius 6, hover `rgba(67,177,255,.16)`. Then three education entries as left-bordered blocks (border turns accent on hover): UKEN Kraków (2023—present, Economics, part-time), TEB (2022—2023, Computer graphics & Wordpress development), ZSZ Huty im. T. Sendzimira (2018—2022, IT technician).

### 7. Contact (`#contact`)
Eyebrow "CONTACT". H2 `clamp(30px,5.2vw,68px)`: "Open to full-time roles and freelance builds" followed by a blinking accent caret (`.5ch × .9em` block, `blink` 1.15s `steps(1)` infinite). Large mailto `clamp(20px,3.4vw,38px)` with a hairline underline that turns accent on hover. Row of links: phone, GitHub ↗, LinkedIn ↗. Footer rule with "Jakub Cieślik — Kraków, PL" and "English B2 · Polish native".

## Interactions & behavior
- All reveals use `animation-timeline: view()` with `animation-range: entry X% cover Y%` and the `rise` keyframe (`translateY(46px)` + fade, .8–.9s, `cubic-bezier(.16,1,.3,1)`). In a React app, either keep the CSS scroll-driven animations (Chrome/Edge 115+) or reimplement with IntersectionObserver + a `data-inview` attribute; do both for Safari/Firefox coverage.
- Anchor navigation uses `html { scroll-behavior: smooth }`.
- Hover transitions: .25–.35s; nav color transitions .5s.
- Focus: give every interactive element `:focus-visible { outline: 2px solid #43B1FF; outline-offset: 2px }`.
- `::selection { background: rgba(67,177,255,.28) }`.
- Honour `prefers-reduced-motion: reduce` — disable intro, marquee, glow drift, and the pinned sequence's transforms; keep content visible.

## State management
Only one piece of runtime state: **nav theme**. Every section carries `data-nav="dark" | "light"`. A throttled (rAF) scroll+resize listener finds the section whose bounding rect straddles `y = 56px` and sets the theme:
- dark → nav bg `rgba(29,29,29,.86)`, fg `#EAE9FF`, muted `#7A7A7A`
- light → nav bg `rgba(234,233,255,.88)`, fg `#1D1D1D`, muted `#444444`

Values are applied as CSS custom properties (`--nav-fg`, `--nav-muted`, `--nav-bg`) on the `<nav>`. An IntersectionObserver with `rootMargin: "-56px 0px -100% 0px"` is the cleaner React equivalent.

Two configurable props exist in the prototype: `showIntro` (boolean, default true) and `accent` (color, default `#43B1FF`, alternatives `#8CCFFF`, `#1B6FA8`) exposed as the `--accent` custom property on the page root.

## Assets
None. No images, no icon fonts — the arrows (`↗`, `↓`) are text glyphs and every other mark is CSS. Inter is loaded from Google Fonts by the bundled stylesheet; in production self-host it (`next/font/google`). If real project screenshots are added later, the design system prefers dark-background photography.

## Files
- `design/Portfolio.dc.html` — the full design (markup + inline styles + logic class at the bottom of the file)
- `design/support.js` — runtime needed only to view the prototype; do not port
- `design/_ds/nocturne-.../styles.css` — the Nocturne design-system token sheet the page was built against (`--color-*`, `--space-*`, `--radius-*`, `--shadow-*`); the page overrides its palette with the résumé colors listed above
- `design/_ds/nocturne-.../_ds_bundle.js` — design-system component bundle (unused by this page)

## Suggested build order
1. Scaffold Next.js + Tailwind; put the tokens above into `tailwind.config` / CSS variables.
2. Static markup for all sections with exact copy, then hover states.
3. Nav theme switching (IntersectionObserver).
4. Scroll-driven animations behind `@supports`, with the reduced-motion fallback.
5. Intro overlay last, gated on `sessionStorage`.
