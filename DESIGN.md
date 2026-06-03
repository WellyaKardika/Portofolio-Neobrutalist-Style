# DESIGN SYSTEM — Neobrutalism Portfolio
**Stack:** Next.js · Tailwind CSS · GSAP · Framer Motion  
**Profile:** Web / Frontend Developer  
**Theme:** Colorful Neobrutalism + Dark Mode Variant  
**Version:** 2.0

---

## Table of Contents

1. [Visual Philosophy](#1-visual-philosophy)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Animation System](#4-animation-system)
5. [Component Specifications](#5-component-specifications)
6. [Page Sections](#6-page-sections)
7. [Layout & Spacing](#7-layout--spacing)
8. [Depth & Elevation](#8-depth--elevation)
9. [Dark Mode](#9-dark-mode)
10. [Responsive Behavior](#10-responsive-behavior)
11. [Accessibility](#11-accessibility)
12. [Implementation Guide](#12-implementation-guide)
13. [Do's & Don'ts](#13-dos--donts)

---

## 1. Visual Philosophy

Neobrutalism for a Frontend Developer portfolio is unapologetically bold — it mirrors the raw precision of code itself. Every border, shadow, and color choice communicates confidence and craft. This design system extends classic neobrutalism into a **colorful, high-energy identity** with a dark mode variant that feels equally intentional, never like an afterthought.

### Core Principles

| Principle | Description |
|-----------|-------------|
| **Raw Honesty** | No gradients, no blur, no decorative masks — structure IS the decoration |
| **Tactile Depth** | Hard-offset shadows make every element feel pressable and physical |
| **Color with Purpose** | Saturated accents are used as semantic signals, not decoration |
| **Typography as Architecture** | Type creates the visual skeleton — weight and scale define hierarchy |
| **Motion with Meaning** | Animations reveal, not distract — every motion communicates something |

### Aesthetic Direction

- **Light Mode:** White canvas with heavy black borders, bold color fills, and graphic negative space
- **Dark Mode:** Near-black canvas (`#0A0A0A`) with white borders at reduced weight, same accent palette with adjusted luminosity
- **Energy Level:** High contrast, loud but legible — feels like a terminal with personality
- **Texture:** Subtle noise grain overlay (`3% opacity`) on hero and full-width sections adds tactile depth without breaking the flat aesthetic

---

## 2. Color System

### 2.1 Semantic Tokens

All colors are defined as CSS custom properties and mapped to Tailwind config for full utility access.

```css
/* globals.css */
:root {
  /* Base */
  --color-bg:          #FFFFFF;
  --color-bg-subtle:   #F5F5F5;
  --color-surface:     #FFFFFF;
  --color-border:      #000000;
  --color-text:        #000000;
  --color-text-muted:  #555555;

  /* Accent Palette — Colorful */
  --color-blue:        #4D7EFF;
  --color-blue-dark:   #2E5CDB;
  --color-green:       #22C55E;
  --color-green-dark:  #16A34A;
  --color-orange:      #F97316;
  --color-orange-dark: #EA6A08;
  --color-violet:      #A855F7;
  --color-violet-dark: #9333EA;
  --color-yellow:      #FACC15;   /* NEW: hero highlight, skill tags */
  --color-red:         #EF4444;   /* NEW: attention, error, hover accents */

  /* Shadow */
  --shadow-offset:     4px;
  --shadow-color:      #000000;
  --shadow-sm:         2px 2px 0px 0px #000000;
  --shadow-md:         4px 4px 0px 0px #000000;
  --shadow-lg:         6px 6px 0px 0px #000000;
  --shadow-xl:         8px 8px 0px 0px #000000;
}

.dark {
  --color-bg:          #0A0A0A;
  --color-bg-subtle:   #141414;
  --color-surface:     #1A1A1A;
  --color-border:      #FFFFFF;
  --color-text:        #FFFFFF;
  --color-text-muted:  #A0A0A0;

  /* Accents stay the same, slightly brighter in dark */
  --color-blue:        #6B93FF;
  --color-green:       #4ADE80;
  --color-orange:      #FB923C;
  --color-violet:      #C084FC;
  --color-yellow:      #FDE047;
  --color-red:         #F87171;

  --shadow-color:      #FFFFFF;
  --shadow-sm:         2px 2px 0px 0px #FFFFFF;
  --shadow-md:         4px 4px 0px 0px #FFFFFF;
  --shadow-lg:         6px 6px 0px 0px #FFFFFF;
  --shadow-xl:         8px 8px 0px 0px #FFFFFF;
}
```

### 2.2 Color Roles

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--color-bg` | `#FFFFFF` | `#0A0A0A` | Page background |
| `--color-surface` | `#FFFFFF` | `#1A1A1A` | Cards, panels |
| `--color-border` | `#000000` | `#FFFFFF` | All borders |
| `--color-text` | `#000000` | `#FFFFFF` | Primary text |
| `--color-text-muted` | `#555555` | `#A0A0A0` | Secondary text, captions |
| `--color-blue` | `#4D7EFF` | `#6B93FF` | Primary CTA, links, highlights |
| `--color-green` | `#22C55E` | `#4ADE80` | Skills, success, tech tags |
| `--color-orange` | `#F97316` | `#FB923C` | Experience timeline, warnings |
| `--color-violet` | `#A855F7` | `#C084FC` | Projects, secondary accent |
| `--color-yellow` | `#FACC15` | `#FDE047` | Hero highlight, featured badge |
| `--color-red` | `#EF4444` | `#F87171` | Hover accents, attention |

### 2.3 Section Color Mapping

Each portfolio section has a designated accent to create visual rhythm across the page:

| Section | Light BG | Accent | Dark BG |
|---------|----------|--------|---------|
| **Hero** | `#FFFFFF` | `#FACC15` (yellow highlight) | `#0A0A0A` |
| **About** | `#F5F5F5` | `#4D7EFF` (blue) | `#141414` |
| **Skills** | `#4D7EFF` | `#FFFFFF` text | `#1A1A2E` |
| **Projects** | `#FFFFFF` | `#A855F7` (violet) | `#0A0A0A` |
| **Experience** | `#FACC15` | `#000000` | `#1A1400` |
| **Testimonials** | `#F5F5F5` | `#22C55E` (green) | `#141414` |

---

## 3. Typography

### 3.1 Font Stack

```css
/* Primary — Headlines & display */
font-family: 'Space Grotesk', 'DM Sans', sans-serif;

/* Monospace — Code snippets, tech labels, terminal accents */
font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
```

**Google Fonts import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
```

> **Why Space Grotesk over DM Sans?** Space Grotesk has a slightly geometric, technical character that fits frontend developer identity better. It still reads clearly at all sizes. DM Sans remains a valid fallback.

### 3.2 Type Scale

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| **Display XL** | 80px / 5rem | 800 | 0.95 | -0.03em | Hero name, one-word impact |
| **Display** | 56px / 3.5rem | 700 | 1.05 | -0.02em | Hero headline (desktop) |
| **H1** | 48px / 3rem | 700 | 1.1 | -0.01em | Page titles |
| **H2** | 36px / 2.25rem | 700 | 1.15 | 0 | Section headings |
| **H3** | 24px / 1.5rem | 700 | 1.25 | 0 | Card titles, subsections |
| **H4** | 18px / 1.125rem | 600 | 1.35 | 0 | Component labels |
| **Body LG** | 18px / 1.125rem | 400 | 1.65 | 0 | About section paragraphs |
| **Body** | 16px / 1rem | 400 | 1.6 | 0 | Default paragraph text |
| **Body SM** | 14px / 0.875rem | 400 | 1.55 | 0 | Captions, metadata |
| **Mono** | 13px / 0.8125rem | 500 | 1.5 | 0.02em | Code labels, tech tags |
| **Label** | 11px / 0.6875rem | 700 | 1 | 0.12em | Uppercase tags, categories |

### 3.3 Responsive Type Scaling

```js
// tailwind.config.js — fluid typography
fontSize: {
  'display': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '800' }],
  'h1':      ['clamp(2rem, 4vw, 3rem)',   { lineHeight: '1.1',  letterSpacing: '-0.01em', fontWeight: '700' }],
  'h2':      ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.15', fontWeight: '700' }],
}
```

### 3.4 Special Typography Patterns

**Inline Code Label** — used in Skills section and hero sub-labels:
```css
.code-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  background: var(--color-yellow);
  color: #000000;
  padding: 2px 8px;
  border: 1.5px solid var(--color-border);
  border-radius: 3px;
}
```

**Strikethrough Accent** — crossed-out word replaced with bold accent:
```html
<span class="line-through opacity-40">boring</span>
<span class="text-[--color-blue] font-bold"> memorable</span>
```

---

## 4. Animation System

### 4.1 Core Philosophy

> Every animation must **earn its place** — it reveals, confirms, or guides. Never decorate.

| Principle | Rule |
|-----------|------|
| **Clip Reveal is Primary** | All major text enters via clip-path mask reveal (GSAP) |
| **Scroll Triggers on Everything** | Nothing animates until it's in viewport |
| **Stagger = Rhythm** | Multiple elements stagger at 80-120ms intervals |
| **Physics Feel** | Use `ease: "power3.out"` or `ease: "expo.out"` for snap-in |
| **Reduced Motion** | All animations wrap in `prefers-reduced-motion` check |

### 4.2 Clip Text Reveal — Primary Animation

This is the **signature animation** of the portfolio. All hero text, section titles, and project titles use this pattern.

**How it works:** Each line/word/letter is wrapped in an overflow-hidden container. The text starts clipped (translated down, opacity 0 via clip-path) and animates into full visibility.

#### Implementation

```tsx
// components/animations/ClipReveal.tsx
'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)

type ClipRevealProps = {
  children: React.ReactNode
  mode?: 'lines' | 'words' | 'chars'
  delay?: number
  stagger?: number
  trigger?: 'scroll' | 'immediate'
  className?: string
}

export function ClipReveal({
  children,
  mode = 'lines',
  delay = 0,
  stagger = 0.08,
  trigger = 'scroll',
  className,
}: ClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const split = new SplitText(el, {
      type: mode,
      linesClass: 'clip-line',
    })

    // Wrap each unit in overflow-hidden container
    const targets = split[mode]
    targets.forEach((t) => {
      const wrapper = document.createElement('span')
      wrapper.style.display = 'block'
      wrapper.style.overflow = 'hidden'
      t.parentNode?.insertBefore(wrapper, t)
      wrapper.appendChild(t)
    })

    const fromVars = {
      yPercent: 110,
      opacity: 0,
      rotationX: -15,
    }

    const toVars = {
      yPercent: 0,
      opacity: 1,
      rotationX: 0,
      duration: 0.85,
      ease: 'power3.out',
      stagger,
      delay,
    }

    if (trigger === 'scroll') {
      gsap.fromTo(targets, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    } else {
      gsap.fromTo(targets, fromVars, toVars)
    }

    return () => {
      split.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [mode, delay, stagger, trigger])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
```

**Usage:**
```tsx
// Line by line — section headings
<ClipReveal mode="lines" stagger={0.1}>
  <h2>Selected Projects</h2>
</ClipReveal>

// Word by word — hero headline
<ClipReveal mode="words" stagger={0.07} trigger="immediate">
  <h1>I build things for the web</h1>
</ClipReveal>

// Letter by letter — short impact words only
<ClipReveal mode="chars" stagger={0.04">
  <span>Frontend</span>
</ClipReveal>
```

### 4.3 Animation Variants

#### Slide Up Reveal (Cards, Project Items)
```ts
// Framer Motion — use for card grids
const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // expo out
    },
  }),
}
```

#### Border Draw (Section Dividers)
```ts
// GSAP — border animates from 0 width to full
gsap.fromTo('.section-border', 
  { scaleX: 0, transformOrigin: 'left center' },
  { scaleX: 1, duration: 0.8, ease: 'power2.inOut',
    scrollTrigger: { trigger: '.section-border', start: 'top 90%' }
  }
)
```

#### Shadow Pulse (Hover on Cards)
```css
/* CSS — no JS needed for hover states */
.neo-card {
  transition: box-shadow 120ms ease, transform 120ms ease;
}
.neo-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translate(-2px, -2px);
}
.neo-card:active {
  box-shadow: var(--shadow-sm);
  transform: translate(2px, 2px);
}
```

#### Number Counter (Experience / Skills)
```ts
// GSAP — animate numbers from 0 to final value
gsap.to('.counter', {
  textContent: targetNumber,
  duration: 1.5,
  ease: 'power2.out',
  snap: { textContent: 1 },
  scrollTrigger: { trigger: '.counter', start: 'top 80%' },
})
```

#### Magnetic Button Effect (CTA Buttons)
```tsx
// Framer Motion — cursor attraction on hover
function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current!.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.25)
    y.set((e.clientY - cy) * 0.25)
  }

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="neo-btn-primary"
    >
      {children}
    </motion.button>
  )
}
```

#### Page Transition (Route Changes)
```tsx
// Framer Motion layout animations
const pageVariants = {
  initial: { clipPath: 'inset(0 100% 0 0)' },
  animate: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
  exit:    { clipPath: 'inset(0 0 0 100%)', transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
}
```

### 4.4 Timing Reference

| Animation | Duration | Easing | Stagger |
|-----------|----------|--------|---------|
| Clip text (lines) | 850ms | `power3.out` | 100ms |
| Clip text (words) | 700ms | `power3.out` | 70ms |
| Clip text (chars) | 500ms | `expo.out` | 40ms |
| Card slide up | 600ms | `[0.22,1,0.36,1]` | 100ms |
| Border draw | 800ms | `power2.inOut` | — |
| Number counter | 1500ms | `power2.out` | — |
| Hover shadow | 120ms | `ease` | — |
| Active/press | 80ms | `ease` | — |
| Page transition | 600ms | `[0.76,0,0.24,1]` | — |

### 4.5 Reduced Motion

```tsx
// hooks/useReducedMotion.ts
import { useEffect, useState } from 'react'

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    mq.addEventListener('change', (e) => setReduced(e.matches))
  }, [])
  return reduced
}

// In ClipReveal: if reducedMotion, skip GSAP, just show content
```

---

## 5. Component Specifications

### 5.1 Navigation Bar

```
Height:          72px (desktop), 60px (mobile)
Background:      var(--color-bg)
Border Bottom:   2px solid var(--color-border)
Padding:         0 40px (desktop), 0 20px (mobile)
Max Width:       1440px (centered)
Position:        sticky top-0, z-50
Backdrop:        blur(0) — no blur, neobrutalism stays sharp

Logo:            Space Grotesk, 20px, weight 700
                 Formatted as: [YourName] with yellow highlight block behind first letter

Nav Links:       Space Grotesk, 15px, weight 500
                 Hover: underline 2px solid var(--color-blue), underline-offset 4px
                 Active: background var(--color-blue), padding 6px 12px, border-radius 4px

Theme Toggle:    36×36px icon button, border 2px solid, shadow var(--shadow-sm)
                 Hover: shadow var(--shadow-md), translate(-1px, -1px)

Mobile:          Hamburger → full-screen overlay menu
                 Menu: full viewport, bg var(--color-bg), links stacked 48px apart
                 Links animate in via ClipReveal (chars), stagger 0.05s
```

### 5.2 Buttons

#### Primary (CTA)
```
Background:      var(--color-blue)
Text:            #000000, 15px, weight 600
Padding:         10px 24px
Border:          2px solid var(--color-border)
Border Radius:   4px
Shadow:          var(--shadow-md)   [4px 4px 0 0 var(--color-border)]
Hover:           translate(-2px, -2px), shadow → var(--shadow-lg)
Active:          translate(2px, 2px), shadow → var(--shadow-sm)
Transition:      120ms ease
```

#### Secondary (Ghost)
```
Background:      transparent
Text:            var(--color-text), 15px, weight 600
Padding:         10px 24px
Border:          2px solid var(--color-border)
Border Radius:   4px
Shadow:          var(--shadow-md)
Hover:           bg var(--color-bg-subtle), translate(-2px, -2px)
Active:          translate(2px, 2px), shadow → var(--shadow-sm)
```

#### Icon Button
```
Size:            44×44px (min touch target)
Background:      var(--color-surface)
Border:          2px solid var(--color-border)
Border Radius:   4px
Shadow:          var(--shadow-sm)
Hover:           shadow var(--shadow-md), translate(-1px, -1px)
```

#### Contact Link Button (Social / Email)
```
Background:      var(--color-yellow) or accent color
Text:            #000000, 14px, weight 700
Padding:         8px 20px
Border:          2px solid var(--color-border)
Border Radius:   4px
Shadow:          var(--shadow-md)
Icon:            16px, left of text, 6px gap
Hover:           translate(-2px, -2px), shadow → var(--shadow-lg)

Variants per platform:
  Email:         bg var(--color-orange)
  GitHub:        bg #24292e (dark) / #F5F5F5 (light), text inverted on dark
  LinkedIn:      bg #0077B5, text #FFFFFF, border black
  Twitter/X:     bg #000000, text #FFFFFF, border #000000
```

### 5.3 Cards

#### Project Card
```
Background:      var(--color-surface)
Border:          2px solid var(--color-border)
Border Radius:   4px (outer), 2px (image corners)
Shadow:          var(--shadow-md)
Padding:         0 (image flush top), 20px (content area)
Width:           Full column (responsive grid)

Image Area:      aspect-ratio 16/9, overflow hidden
                 Image scales 1.05 on card hover (transition 400ms ease)
                 NO border-radius on image — flush to card edges

Content Area:    padding 20px 20px 24px
  - Tech tags:   mono labels (code-label style), row gap 6px
  - Title:       H3, 22px, weight 700
  - Description: Body, 14px, muted color
  - Footer:      flex space-between, links aligned right

Hover:           translate(-4px, -4px), shadow var(--shadow-lg)
Accent line:     4px top border in project's accent color (violet default)
Featured badge:  top-right corner, yellow bg, "FEATURED", 10px mono uppercase
```

#### Skill Tag / Badge
```
Background:      var(--color-green) or color-coded by category
Text:            #000000, 12px, mono, weight 500, uppercase, letter-spacing 0.08em
Padding:         4px 10px
Border:          1.5px solid var(--color-border)
Border Radius:   3px
Shadow:          2px 2px 0 0 var(--color-border)

Category mapping:
  Languages:     var(--color-blue)
  Frameworks:    var(--color-violet)
  Tools:         var(--color-green)
  Concepts:      var(--color-orange)
  Learning:      var(--color-yellow) + dashed border
```

#### Testimonial Card
```
Background:      var(--color-surface)
Border:          2px solid var(--color-border)
Border Radius:   4px
Shadow:          var(--shadow-md)
Padding:         28px
Quote mark:      80px Space Grotesk 800 weight, var(--color-green), opacity 0.4, absolute top-left
Avatar:          48×48px, border 2px solid border-color, border-radius 50% — exception to rule, faces need circles
Name:            14px, weight 700
Role:            12px mono, muted
```

### 5.4 Section Headers

Standard pattern used across all sections:

```
Layout:          flex column, gap 12px

Eyebrow:         10px, mono, weight 700, letter-spacing 0.15em, uppercase
                 Color: section accent color
                 Prefix: "— 01 /" style numbering

Title:           H2 scale, ClipReveal(lines), stagger 0.1s
Divider:         2px solid border-color, full width, animates via border-draw GSAP

Optional sub:    Body LG, muted color, max-width 600px
```

---

## 6. Page Sections

### 6.1 Hero Section

```
Layout:          Full viewport height (min 100svh)
Background:      var(--color-bg)
Padding:         0 40px (centered container, max 1200px)
Overflow:        hidden (for clip animations)

Structure (vertical stack, centered):
  ┌─────────────────────────────────────────┐
  │  [EYEBROW] → "Available for work ✦"    │  12px mono, green bg pill
  │                                         │
  │  [NAME DISPLAY] → "John Doe"           │  Display XL, ClipReveal(chars)
  │  [HEADLINE] → "Frontend Developer"     │  Display, ClipReveal(words)
  │                                         │
  │  [MARQUEE ROW] → tech stack scroll     │  infinite loop, 60s linear
  │                                         │
  │  [CTA ROW]                             │
  │    [View Work ↗]  [Download CV]        │  Primary + Secondary buttons
  │                                         │
  │  [SCROLL INDICATOR] ↓                  │  animated bounce arrow
  └─────────────────────────────────────────┘

Yellow highlight:
  The word "Frontend" or one key word in headline sits on
  a yellow rectangle (#FACC15) background block, offset by
  -2px top, creating a "highlighter" effect.
  This is a CSS background with clip: content-box.

Marquee Tech Strip:
  Height: 52px
  Background: var(--color-border) — solid black
  Text: var(--color-bg) — reversed
  Font: 13px mono, weight 500, uppercase, letter-spacing 0.1em
  Content: "React · Next.js · TypeScript · Tailwind · GSAP · Framer Motion ·" (looping)
  Animation: GSAP infinite translateX, 40s linear, pauseOnHover

Hero visual (right column on desktop):
  A code block snippet styled as a terminal window
  - Border: 2px solid border-color
  - Header bar: 32px, bg var(--color-border), traffic light dots
  - Content: syntax-highlighted code, JetBrains Mono 13px
  - Shadow: var(--shadow-xl)
  - Entrance: slide in from right (60px → 0), opacity 0→1, delay 0.4s
```

### 6.2 About Section

```
Layout:          Two columns (60/40) on desktop, stacked on mobile
Background:      var(--color-bg-subtle)
Padding:         120px 40px (desktop), 80px 20px (mobile)

Left Column:
  - Section header (eyebrow + H2)
  - 2-3 paragraphs, Body LG, max-width 520px
  - One highlighted stat row: "X years exp · Y projects · Z commits"
    each stat: number in Display style, label below in mono
  - CTA button: "Download Resume"

Right Column:
  - Profile image in neo-brutalist frame:
    Border: 3px solid var(--color-border)
    Shadow: var(--shadow-xl) [8px 8px 0 0 border-color]
    Border-radius: 0px (sharp)
    Accent rectangle: yellow block offset -12px -12px behind image (z-index -1)
  - Fun facts card below image:
    Border card, 3 facts with icon (SVG), mono text style

Animation:
  - Left text: ClipReveal(lines), scroll trigger
  - Right image: slide from right 40px, opacity 0→1, delay 0.2s
  - Stats: number counter on scroll
```

### 6.3 Skills / Tech Stack Section

```
Layout:          Full-width section
Background:      var(--color-blue) (light) / #0D1F5C (dark)
Padding:         100px 40px
Text on blue:    #000000 (light) / #FFFFFF (dark)

Structure:
  Section header (inverted colors — white eyebrow on blue)
  
  Tab navigation:
    Tabs: "Languages" | "Frameworks" | "Tools" | "Currently Learning"
    Style: pill tabs, active = white bg + black border + shadow-sm
    Inactive: transparent, white text (on blue bg)
  
  Skills Grid (below tabs):
    Column count: auto-fill, min 140px
    Each skill item:
      - Icon (SVG, 32px)
      - Skill name, 14px weight 600
      - Proficiency bar OR level badge
      Animation: staggered card slide-up via Framer Motion (0.05s stagger)
  
  Bottom strip (decorative):
    Black strip 52px, white mono text marquee of all skill names
```

### 6.4 Projects / Work Section

```
Layout:          Mixed grid — one featured + grid below
Background:      var(--color-bg)
Padding:         120px 40px

Featured Project (full-width card):
  Height: 480px (desktop), auto (mobile)
  Layout: 50/50 image + content
  Left: project screenshot, full height, object-cover
  Right: content with padding 48px
    - "FEATURED PROJECT" badge (yellow)
    - Title H2
    - Description Body LG
    - Tech stack tags row
    - Two buttons: "Live Demo ↗" (blue) + "GitHub ↗" (ghost)
  Border: 3px solid border-color
  Shadow: var(--shadow-xl)
  Accent top border: 4px solid var(--color-violet)

Projects Grid:
  Columns: 3 (desktop), 2 (tablet), 1 (mobile)
  Gap: 24px
  Each: Project Card (see 5.3)
  
Filter row above grid:
  Category filters: All | Frontend | Full Stack | Open Source
  Style: same as skill tabs (pill style)
  
"View All on GitHub" link at bottom:
  Full-width bordered row, center-aligned
  Arrow icon, 18px weight 700
  Hover: background slides in from left (CSS clip-path transition)
```

### 6.5 Experience / Timeline Section

```
Layout:          Single column, timeline format
Background:      var(--color-yellow) [#FACC15] (light) / #1A1400 (dark)
Padding:         120px 40px
Max Width:       800px centered

Timeline structure:
  Vertical line: 2px solid border-color, runs full height of section
  Left side of line: date range (mono, 13px, muted)
  Right side: experience card

Experience Card:
  Background: var(--color-surface)
  Border: 2px solid border-color
  Shadow: var(--shadow-md)
  Padding: 24px 28px
  Border-radius: 4px
  
  Connector dot: 12px circle, bg var(--color-orange), border 2px solid border-color
                 positioned on the timeline line
  
  Card content:
    - Role title: H3, weight 700
    - Company: 15px, weight 600, blue color
    - Date: 12px mono, muted
    - Description: Body, max 3 bullet points
    - Tech used: small tags row at bottom

Animation:
  Cards alternate left/right on desktop timeline (zigzag)
  Each card: slide in from respective side, opacity 0→1
  Timeline line: draws itself from top (scaleY 0→1, transformOrigin top)
  Dots: scale 0→1 with spring ease, delayed by card stagger
```

### 6.6 Testimonials Section

```
Layout:          3-column grid (desktop), 1-column (mobile)
Background:      var(--color-bg-subtle)
Padding:         120px 40px

Carousel (mobile):
  Single card visible, swipe gesture, dot indicators

Cards: See 5.3 Testimonial Card spec

Section header uses green accent for eyebrow
```

### 6.7 Contact / Footer Area

```
NOT a form — only button links to external contacts.

Layout:          Full-width CTA section above footer
Background:      var(--color-border) — solid black
Text:            var(--color-bg) — white/light

Content (centered):
  Eyebrow: "WANT TO WORK TOGETHER?" (mono, green)
  Headline: "Let's build something" (Display, ClipReveal)
            "remarkable." (Display, yellow highlight)
  
  Button Row (center-aligned, gap 16px):
    ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
    │ ✉ Email Me       │  │ GitHub ↗         │  │ LinkedIn ↗       │
    └──────────────────┘  └──────────────────┘  └──────────────────┘
    (See Contact Link Button specs in 5.2)

Footer strip below:
  Height: 52px
  Border Top: 2px solid var(--color-bg) (inverted)
  Content: copyright left, nav links right, all 12px mono
```

---

## 7. Layout & Spacing

### 7.1 Spacing Scale (Base 4px)

| Token | Value | Use |
|-------|-------|-----|
| `space-1` | 4px | Icon gaps, micro |
| `space-2` | 8px | Button padding, input internal |
| `space-3` | 12px | Tight component spacing |
| `space-4` | 16px | Standard gap, card padding |
| `space-5` | 20px | Nav padding, medium gaps |
| `space-6` | 24px | Card internal padding |
| `space-8` | 32px | Component-to-component |
| `space-10` | 40px | Section horizontal padding |
| `space-12` | 48px | Large gaps |
| `space-16` | 64px | Section sub-spacing |
| `space-24` | 96px | Tablet section padding |
| `space-30` | 120px | Desktop section padding |

### 7.2 Container System

```
Max width:      1280px (content), 1440px (full-width sections)
Horizontal pad: 40px (desktop), 24px (tablet), 20px (mobile)
Center:         margin: 0 auto

Section spacing: padding-block: 120px (desktop), 80px (tablet), 60px (mobile)
```

### 7.3 Grid Templates

```css
/* Projects grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* → 2 → 1 */
  gap: 24px;
}

/* Skills grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
}

/* About two-col */
.about-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 80px;
  align-items: center;
}
```

---

## 8. Depth & Elevation

| Level | Shadow | Transform on Hover | Use |
|-------|--------|--------------------|-----|
| **Flat** | none | — | Plain text, decorative dividers |
| **Ground** | `2px solid border` only | — | Input fields, neutral containers |
| **Raised** | `shadow-md` (4px 4px) | `translate(-2px,-2px)` | Cards, buttons |
| **Lifted** | `shadow-lg` (6px 6px) | `translate(-3px,-3px)` | Hover state of cards |
| **Floating** | `shadow-xl` (8px 8px) | — | Featured card, image frames |
| **Pressed** | `shadow-sm` (2px 2px) | `translate(2px, 2px)` | Active/click state |

**Shadow direction:** Always offset `+x, +y` (bottom-right) — consistent light source from upper-left.  
**Dark mode:** Same offsets, color switches from `#000000` to `#FFFFFF`.

---

## 9. Dark Mode

### 9.1 Implementation Strategy

```tsx
// Use next-themes for SSR-safe dark mode
// _app.tsx or layout.tsx
import { ThemeProvider } from 'next-themes'

<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>
```

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ...
}
```

### 9.2 Dark Mode Visual Rules

| Element | Light | Dark | Notes |
|---------|-------|------|-------|
| Page BG | `#FFFFFF` | `#0A0A0A` | Near-black, not pure |
| Surface/Cards | `#FFFFFF` | `#1A1A1A` | Slight elevation via lightness |
| Borders | `#000000` | `#FFFFFF` | Fully inverted |
| Shadows | `0 0 0 #000` | `0 0 0 #FFF` | Same offsets, inverted color |
| Text | `#000000` | `#FFFFFF` | High contrast |
| Muted text | `#555555` | `#A0A0A0` | Aa 4.5:1 min |
| Accents | Standard | +20% luminosity | Brighter on dark bg |
| Hero BG | `#FFFFFF` | `#0A0A0A` | Clean |
| Skills BG | `#4D7EFF` | `#0D1F5C` | Deep blue |
| Experience BG | `#FACC15` | `#1A1400` | Dark amber tint |
| Noise grain | 3% white | 3% white | Same overlay both modes |

### 9.3 Theme Toggle Animation

```tsx
// Rotate + fade swap between sun/moon icons
<motion.div
  key={theme}
  initial={{ rotate: -90, opacity: 0 }}
  animate={{ rotate: 0, opacity: 1 }}
  exit={{ rotate: 90, opacity: 0 }}
  transition={{ duration: 0.25 }}
>
  {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
</motion.div>
```

---

## 10. Responsive Behavior

### 10.1 Breakpoints

```js
// tailwind.config.js
screens: {
  'sm':  '640px',
  'md':  '768px',
  'lg':  '1024px',
  'xl':  '1280px',
  '2xl': '1440px',
}
```

### 10.2 Section Behavior at Each Breakpoint

| Section | Mobile (<640) | Tablet (640-1024) | Desktop (>1024) |
|---------|--------------|-------------------|-----------------|
| **Nav** | Logo + hamburger, full-screen overlay | Logo + icon links | Full nav bar |
| **Hero** | Single col, stacked, smaller type | Single col, more padding | Two col (text + code block) |
| **About** | Stacked, image first | Stacked, more padding | Two col 60/40 |
| **Skills** | Tabs → dropdown, 2-col grid | Tabs, 3-col grid | Tabs, 5-6 col grid |
| **Projects** | 1 col, featured stacked | 2 col grid | Featured + 3 col grid |
| **Experience** | Single col, timeline left | Single col, wider cards | Zigzag timeline |
| **Testimonials** | Carousel, 1 visible | 2 col grid | 3 col grid |
| **Contact** | Buttons stack 100% width | 2×2 button grid | Row of 3 buttons |

### 10.3 Typography Responsive Scaling

```
Display XL:  80px → 52px → 36px
Display:     56px → 40px → 28px
H1:          48px → 36px → 26px
H2:          36px → 28px → 22px
H3:          24px → 20px → 18px
Body LG:     18px → 18px → 16px
```

---

## 11. Accessibility

### 11.1 Contrast Requirements

| Combination | Ratio | Pass |
|-------------|-------|------|
| Black text on white | 21:1 | ✅ AAA |
| Black text on `#4D7EFF` | 4.8:1 | ✅ AA |
| Black text on `#FACC15` | 13.4:1 | ✅ AAA |
| Black text on `#22C55E` | 5.1:1 | ✅ AA |
| White text on `#0A0A0A` | 19.5:1 | ✅ AAA |
| `#A0A0A0` on `#0A0A0A` | 4.6:1 | ✅ AA |

### 11.2 Checklist

- [ ] All ClipReveal animations respect `prefers-reduced-motion`
- [ ] Navigation keyboard-accessible (Tab, Enter, Escape for mobile menu)
- [ ] All buttons have visible focus ring: `outline: 3px solid var(--color-blue); outline-offset: 3px`
- [ ] Skip to main content link at top of DOM
- [ ] Heading hierarchy: h1 (name) → h2 (sections) → h3 (cards) — no skips
- [ ] All images have descriptive `alt` text
- [ ] Contact buttons have `aria-label` with platform name
- [ ] Color not the only indicator (skill categories use both color AND text label)
- [ ] Minimum touch target 44×44px for all interactive elements
- [ ] External links have `rel="noopener noreferrer"` and indicate they open in new tab

---

## 12. Implementation Guide

### 12.1 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # ThemeProvider, fonts, metadata
│   ├── page.tsx            # Assembles all sections
│   └── globals.css         # CSS custom properties (all tokens)
├── components/
│   ├── animations/
│   │   ├── ClipReveal.tsx  # Primary text animation
│   │   ├── CardReveal.tsx  # Framer Motion card wrapper
│   │   └── CountUp.tsx     # Number counter GSAP
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Navbar.tsx
│   │   └── ThemeToggle.tsx
│   └── layout/
│       ├── SectionHeader.tsx
│       └── Container.tsx
├── lib/
│   └── gsap.ts             # GSAP plugin registration
└── data/
    ├── projects.ts
    ├── skills.ts
    ├── experience.ts
    └── testimonials.ts
```

### 12.2 Dependencies

```json
{
  "dependencies": {
    "next": "^14",
    "react": "^18",
    "framer-motion": "^11",
    "gsap": "^3.12",
    "next-themes": "^0.3",
    "lucide-react": "^0.400",
    "clsx": "^2",
    "tailwind-merge": "^2"
  },
  "devDependencies": {
    "tailwindcss": "^3.4",
    "@tailwindcss/typography": "^0.5"
  }
}
```

> **GSAP Note:** `SplitText` requires GSAP Club (paid) or GSAP Free with limitations. If using free tier, use a lightweight alternative:
> ```ts
> // Free alternative: manual split with spans
> function splitToLines(el: HTMLElement) {
>   const text = el.innerText
>   const words = text.split(' ')
>   el.innerHTML = words.map(w => `<span class="word-wrap"><span class="word">${w}</span></span>`).join(' ')
>   return el.querySelectorAll('.word')
> }
> ```

### 12.3 Tailwind Config Key Additions

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'neo-blue':   'var(--color-blue)',
        'neo-green':  'var(--color-green)',
        'neo-orange': 'var(--color-orange)',
        'neo-violet': 'var(--color-violet)',
        'neo-yellow': 'var(--color-yellow)',
        'neo-red':    'var(--color-red)',
        'border-neo': 'var(--color-border)',
        'surface':    'var(--color-surface)',
      },
      boxShadow: {
        'neo-sm': '2px 2px 0px 0px var(--color-border)',
        'neo-md': '4px 4px 0px 0px var(--color-border)',
        'neo-lg': '6px 6px 0px 0px var(--color-border)',
        'neo-xl': '8px 8px 0px 0px var(--color-border)',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'DM Sans', 'sans-serif'],
        'mono':    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
      },
    },
  },
}
```

---

## 13. Do's & Don'ts

### Do ✅

- **Use ClipReveal on ALL major headings** — it's the signature animation, consistency matters
- **Hard offset shadows only** — `4px 4px 0 0`, never blur, never spread
- **Pair shadow with transform on hover** — `translate(-2px,-2px)` + larger shadow feels tactile
- **Keep dark mode shadows white** — dark mode is NOT removing shadows, it's inverting them
- **Use monospace font for tech labels** — code identity is part of the brand
- **Yellow highlight accent on key words** — the "highlighter" effect should appear in Hero and Contact CTA
- **Animate borders into view** — scaleX from left is a powerful neobrutalist reveal
- **Use color per section** — each section has its accent; the page feels like a color journey
- **Register GSAP plugins once** — in `lib/gsap.ts`, not in every component
- **Test hover states at keyboard level** — `:focus-visible` should match `:hover` visual treatment

### Don't ❌

- **No gradients** — none. Not in buttons, not in backgrounds, not in text
- **No box-shadow blur or spread** — shadow must be `0px 0px` for blur/spread values
- **No border-radius above 5px** on standard components — frames must feel architectural
- **Don't animate on initial load without delay** — stagger nav items, then hero content, then below-fold
- **Don't stack Framer Motion + GSAP on the same element** — pick one per component
- **Don't use emojis as icons** — use Lucide React SVGs only
- **Don't skip the `prefers-reduced-motion` check** — always provide a fallback
- **Don't center-align paragraph text** — left-align only; center only for short CTAs
- **Don't use `opacity: 0` as final state** — always bring elements to full opacity; muted = `--color-text-muted`
- **Don't hardcode hex colors in components** — always use CSS variables / Tailwind tokens
- **Don't make the timeline symmetric** — the zigzag layout on desktop is intentional chaos in order
- **Don't forget touch targets** — all interactive elements minimum 44×44px; extend with padding if needed
