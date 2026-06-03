# Design System Inspired by Neobrutalism

## 1. Visual Theme & Atmosphere

The Neobrutalism design system embraces a bold, raw aesthetic that combines stark geometric forms with functional clarity. It draws inspiration from brutalist architecture—emphasizing honest materials, sharp edges, and uncompromising geometry—while applying these principles to digital interfaces. The design language is intentionally heavy-handed, using thick borders, solid black outlines, and deliberate shadows to create interfaces that feel tactile and grounded. Colors are vibrant and saturated against pure black and white, creating high-contrast compositions that demand attention. This system prioritizes readability and directness over subtlety, making it ideal for applications that value transparency, boldness, and architectural precision.

**Key Characteristics:**
- Strong black outlines and borders on all interactive elements
- Pure black and white with bold accent colors (blue, green, orange, violet)
- Geometric shadows offset by exactly `4px` in both directions
- No anti-aliasing; sharp, pixel-perfect edges
- Dense, purposeful spacing with intentional whitespace
- Typography-driven hierarchy with bold, confident typefaces
- Interactive elements feel tactile and clickable
- Accessibility-first contrast and sizing

## 2. Color Palette & Roles

### Primary
- **White** (`#FFFFFF`): Primary background for cards, inputs, and neutral surfaces
- **Black** (`#000000`): Primary text, borders, and structural elements

### Accent Colors
- **Blue** (`#4D7EFF`): Primary call-to-action buttons, links, and interactive highlights (oklch(0.6747 0.1725 259.61))
- **Green** (`#22C55E`): Success states and positive actions
- **Orange** (`#F97316`): Warning and attention-grabbing actions
- **Violet** (`#A855F7`): Secondary emphasis and alternative accent

### Interactive
- **Button Border** (`#000000`): Consistent `2px` solid black border on all buttons
- **Button Shadow** (`#000000` at `4px 4px`): Offset shadow creating depth and tactile sensation

### Neutral Scale
- **Off-Black** (`#1F1F1F`): Subtle text differentiation and hover states
- **Off-White** (`#E6E6E6`): Subtle background variations and borders

### Surface & Borders
- **Border Color** (`#000000`): Universal `2px` solid borders on inputs, buttons, and cards
- **Card Background** (`#FFFFFF`): Clean surface for contained content

## 3. Typography Rules

### Font Family
**Primary:** DM Sans (sans-serif)  
Fallback stack: `'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / H1 | DM Sans | 48px | 700 | 72px | 0px | Major page headings, hero titles |
| Heading / H3 | DM Sans | 30px | 700 | 36px | 0px | Section headings, card titles |
| Subheading / H2 | DM Sans | 18px | 700 | 18px | 0px | Subsection titles, form labels |
| Small Heading / H4 | DM Sans | 14px | 700 | 20px | 0px | Component titles, emphasis text |
| Body | DM Sans | 14px | 500 | 20px | 0px | Default paragraph and descriptive text |
| Button | DM Sans | 16px | 500 | 24px | 0px | Large buttons and prominent CTAs |
| Small Button | DM Sans | 14px | 500 | 20px | 0px | Secondary buttons and icon buttons |
| Link | DM Sans | 22px | 700 | 33px | 0px | Standalone links and link-style buttons |
| Caption | DM Sans | 12px | 400 | 18px | 0px | Helper text, footnotes, metadata |

### Principles
- All text is left-aligned by default for maximum readability
- Font weight is used deliberately: `500` for regular content, `700` for emphasis and hierarchy
- Line heights are generous (`1.4x` to `1.5x` multiplier) for comfortable reading
- No letter-spacing adjustments needed—DM Sans is optimized for clarity
- Use `48px` H1 sparingly for hero moments; default to `30px` H3 for section hierarchy
- Buttons always use `16px` / `500` weight for consistent actionability

## 4. Component Stylings

### Buttons

#### Primary Button (Large)
- **Background:** `#FFFFFF`
- **Text Color:** `#000000`
- **Font:** DM Sans, `16px`, weight `500`
- **Padding:** `8px 64px 8px 12px` (height `36px`)
- **Border:** `2px solid #000000`
- **Border Radius:** `5px`
- **Box Shadow:** `#000000 4px 4px 0px 0px`
- **Hover:** Darken background slightly, maintain border and shadow
- **Active:** Shadow reduces to `2px 2px 0px 0px`

#### Primary Button (Standard)
- **Background:** `#FFFFFF`
- **Text Color:** `#000000`
- **Font:** DM Sans, `14px`, weight `500`
- **Padding:** `8px 16px 8px 16px` (height `40px`)
- **Border:** `2px solid #000000`
- **Border Radius:** `5px`
- **Box Shadow:** `#000000 4px 4px 0px 0px`
- **Hover:** Background shifts to `#F0F0F0`
- **Active:** Shadow reduces to `1px 1px 0px 0px`

#### Primary Button (Icon)
- **Background:** `#FFFFFF`
- **Text Color:** `#000000`
- **Font:** DM Sans, `14px`, weight `500`
- **Padding:** `0px 0px 0px 0px` (width & height `36px`)
- **Border:** `2px solid #000000`
- **Border Radius:** `5px`
- **Box Shadow:** `#000000 4px 4px 0px 0px`
- **Display:** Flex center for icon alignment
- **Hover:** Same as standard button

#### Accent Button (Blue)
- **Background:** `#4D7EFF`
- **Text Color:** `#000000`
- **Font:** DM Sans, `14px`, weight `500`
- **Padding:** `8px 16px 8px 16px` (height `40px`)
- **Border:** `2px solid #000000`
- **Border Radius:** `5px`
- **Box Shadow:** `#000000 4px 4px 0px 0px`
- **Hover:** Background darkens to `#3B5FFF`
- **Active:** Shadow reduces to `2px 2px 0px 0px`

#### Full-Width Button
- **Background:** `#4D7EFF`
- **Text Color:** `#000000`
- **Font:** DM Sans, `16px`, weight `700`
- **Padding:** `16px 16px 16px 16px` (height `56px`, width `324px`)
- **Border:** `0px` (no border for full-width emphasis)
- **Border Radius:** `0px`
- **Box Shadow:** `none`
- **Hover:** Darken background to `#3B5FFF`
- **Active:** Add `2px solid #000000` border

### Inputs & Forms

#### Text Input
- **Background:** `#FFFFFF`
- **Text Color:** `#000000`
- **Font:** DM Sans, `14px`, weight `500`
- **Padding:** `8px 12px 8px 12px` (height `40px`)
- **Border:** `2px solid #000000`
- **Border Radius:** `5px`
- **Box Shadow:** `none`
- **Placeholder Color:** `#808080`
- **Focus:** Box shadow becomes `#000000 0px 0px 0px 3px` (outer glow), border remains `2px solid #000000`
- **Disabled:** Background becomes `#E6E6E6`, text becomes `#999999`

#### Text Input - Filled State
- **Background:** `#FFFFFF`
- **Text Color:** `#000000`
- **Border:** `2px solid #000000`
- **Border Radius:** `5px`
- **Padding:** `8px 12px 8px 12px`
- **Font:** DM Sans, `14px`, weight `500`

#### Text Input - Error State
- **Background:** `#FEE2E2`
- **Text Color:** `#000000`
- **Border:** `2px solid #DC2626`
- **Border Radius:** `5px`

### Cards & Containers

#### Standard Card
- **Background:** `transparent` (no fill, structure only)
- **Text Color:** `#000000`
- **Font:** DM Sans, `16px`, weight `500`
- **Padding:** `0px 24px 0px 24px` (height varies, width `324px`)
- **Border:** `0px` (transparent container)
- **Border Radius:** `0px`
- **Box Shadow:** `none`
- **Use:** Content containers, layout dividers

#### Card with Border
- **Background:** `#FFFFFF`
- **Text Color:** `#000000`
- **Border:** `2px solid #000000`
- **Border Radius:** `5px`
- **Padding:** `20px 24px 20px 24px`
- **Box Shadow:** `#000000 4px 4px 0px 0px`
- **Hover:** Shadow shifts to `2px 2px 0px 0px`

#### Full-Width Section
- **Background:** `#4D7EFF`
- **Text Color:** `#000000`
- **Padding:** `40px 200px 40px 200px` (large horizontal padding for centered content)
- **Border:** `0px`
- **Border Radius:** `0px`
- **Box Shadow:** `none`

### Navigation

#### Top Navigation Bar
- **Background:** `#FFFFFF`
- **Text Color:** `#000000`
- **Font:** DM Sans, `16px`, weight `500`
- **Padding:** `0px 20px 0px 20px` (height `70px`)
- **Border:** `0px`
- **Border Radius:** `0px`
- **Box Shadow:** `none`
- **Display:** Flex, space-between for logo and nav items
- **Border Bottom:** `2px solid #000000` for separation

#### Navigation Link
- **Background:** `transparent`
- **Text Color:** `#000000`
- **Font:** DM Sans, `16px`, weight `500`
- **Padding:** `0px`
- **Border:** `0px`
- **Border Radius:** `0px`
- **Hover:** Text becomes underlined with `2px solid #000000`
- **Active:** Background becomes `#4D7EFF`, padding `8px 12px`, border-radius `5px`

### Links

#### Link Button (Icon Style)
- **Background:** `#4D7EFF`
- **Text Color:** `#000000`
- **Font:** DM Sans, `22px`, weight `700`
- **Padding:** `0px 0px 0px 0px` (height `32px`, width `32px`)
- **Border:** `2px solid #000000`
- **Border Radius:** `5px`
- **Box Shadow:** `none`
- **Display:** Flex center for icon alignment
- **Hover:** Transform `scale(1.05)` with shadow `0px 2px 0px 0px #000000`

#### Text Link
- **Background:** `transparent`
- **Text Color:** `#000000`
- **Font:** DM Sans, `16px`, weight `500`
- **Text Decoration:** `none`
- **Hover:** Text becomes underlined, color remains `#000000`
- **Active:** Color becomes `#4D7EFF`

## 5. Layout Principles

### Spacing System

**Base Unit:** `4px`

**Scale:**
- `4px` – Micro spacing (icon gaps, tight component spacing)
- `8px` – Small spacing (button padding, input gaps)
- `12px` – Component internal padding (form fields)
- `16px` – Standard gap between components (card spacing)
- `20px` – Navigation and header padding
- `24px` – Section padding (cards, containers)
- `40px` – Large section gaps (between major content blocks)
- `52px` – Margin between sections
- `200px` – Hero section horizontal padding (centered content)

**Usage Context:**
- Use `4px` and `8px` for component internals (button padding, input spacing)
- Use `16px` and `24px` for component-to-component spacing
- Use `40px` and `52px` for section-level spacing
- Use `200px` for large horizontal padding in full-width sections

### Grid & Container

**Max Width:** `1440px` for full-width layouts (navigation bar width)

**Column Strategy:**
- Use CSS Grid with flexible columns for responsive layouts
- Default to centered single-column for mobile (`100% width, max-width 324px`)
- Expand to two or three columns on tablet and desktop
- Maintain symmetrical gutters of `16px` between columns

**Section Patterns:**
- Full-width sections use `100vw` with padding to contain content
- Card-based sections use `324px` width cards with `16px` gaps
- Navigation spans `1440px` full-width with consistent `20px` padding
- Hero sections use large horizontal padding (`200px`) for centered focus

### Whitespace Philosophy

Neobrutalism embraces generous whitespace as a structural element. Whitespace is deliberate and geometric—not merely the absence of content, but an active part of the composition. The system uses whitespace to create visual hierarchy, separate functional zones, and provide breathing room around bold typography and borders. No component should feel cramped; every element deserves space to exist independently.

### Border Radius Scale

- **Sharp Corners:** `0px` – Navigation, full-width sections, large containers
- **Subtle Rounding:** `5px` – Buttons, inputs, cards with borders, link icons
- **Maximum Rounding:** Avoid extreme border-radius; maintain geometric clarity

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Ground | No shadow, `2px solid #000000` border | Form inputs, neutral cards, text elements |
| Raised | `#000000 4px 4px 0px 0px` box-shadow | Buttons, interactive cards, primary CTAs |
| Pressed | `#000000 1px 1px 0px 0px` box-shadow or `2px 2px 0px 0px` | Active/clicked state, tactile feedback |
| Floating | `#000000 8px 8px 0px 0px` box-shadow | Modals, overlays, maximum emphasis |
| Nested | `#000000 2px 2px 0px 0px` box-shadow | Secondary buttons, contained elements |

**Shadow Philosophy:**

Shadows in Neobrutalism are not subtle gradients but bold, offset blocks of solid black. The `4px 4px` offset creates a directional light source from the upper-left, making interfaces feel tactile and three-dimensional. Shadows never blur; they are hard-edged and geometric, reinforcing the architectural nature of the design. On interaction (hover, click), shadows reduce in offset, creating the illusion that elements press down or lift up. This creates immediate visual feedback for every interaction.

Shadow progression: `4px 4px` (default) → `2px 2px` (hover) → `1px 1px` (active/pressed)

## 7. Do's and Don'ts

### Do

- **Use bold black borders** on every interactive element—they define affordance and clickability
- **Maintain consistent `4px` shadow offsets** across all raised components; never use blur or spread
- **Prioritize high contrast** between text and background; aim for WCAG AAA standards
- **Keep whitespace intentional and geometric**; use the spacing scale consistently
- **Stack shadows on click**—reduce `4px 4px` to `2px 2px` to `1px 1px` for tactile feedback
- **Use saturated accent colors** (`#4D7EFF`, `#22C55E`, `#F97316`, `#A855F7`) for emphasis
- **Keep type bold and readable**—use weight `700` for headings, `500` for body text
- **Apply border-radius `5px`** to all rounded components; never exceed `8px`
- **Align elements to the grid**—use `4px` baseline for pixel-perfect layouts
- **Test all states**—default, hover, active, disabled, focus—for every interactive element

### Don't

- **Avoid soft shadows or blurs**—shadow clarity is fundamental to Neobrutalism
- **Don't use gradients** in backgrounds; stick to solid colors and opacity
- **Never remove borders** from interactive elements
- **Avoid overly thin text**—never use weight below `400` for body content
- **Don't center-align large blocks of text**; use left-align for readability
- **Never use colors with insufficient contrast** against their backgrounds
- **Avoid anti-aliasing on borders**; keep edges sharp and pixel-perfect
- **Don't mix subtle and bold effects**—commit fully to the bold aesthetic
- **Never use rounded corners beyond `5px`** for standard components
- **Avoid unnecessary visual hierarchy**—keep component styling consistent and predictable
- **Don't layer too many shadows**; one offset shadow per element is sufficient
- **Never reduce button padding** below `8px 12px`; maintain hittable target sizes

## 8. Responsive Behavior

### Breakpoints

| Breakpoint Name | Width | Key Changes |
|-----------------|-------|-------------|
| Mobile | `320px` - `639px` | Single column layout, `100%` width cards (max `324px` with padding), full-width buttons, navigation collapses to icon-only |
| Tablet | `640px` - `1023px` | Two-column grid with `16px` gaps, hero padding reduces to `40px`, cards maintain `324px` width or expand to fill available space with gutter |
| Desktop | `1024px` and above | Three-column grid, full layout with `200px` horizontal padding, navigation expands to full menu, cards scale to `324px` or larger containers |

### Touch Targets

- **Minimum button size:** `40px` (height) × `40px` (width) for reliable touch interaction
- **Icon buttons:** Maintain `36px` × `36px` minimum
- **Link tap targets:** Ensure at least `44px` height for touch-friendly links
- **Input fields:** `40px` height standard for comfortable mobile input
- **Spacing between touch targets:** Minimum `8px` gap to prevent accidental activation

### Collapsing Strategy

- **Navigation:** On mobile (`< 640px`), collapse horizontal menu into hamburger icon; show only logo and menu toggle
- **Cards:** Stack single-column on mobile; expand to two columns on tablet; three columns on desktop
- **Hero sections:** Reduce horizontal padding from `200px` (desktop) to `40px` (tablet) to `20px` (mobile)
- **Full-width sections:** Maintain `100vw` width but reduce internal padding proportionally (`40px` → `24px` → `12px`)
- **Typography:** Scale H1 from `48px` (desktop) to `36px` (tablet) to `28px` (mobile); maintain hierarchy proportions
- **Buttons:** Full-width buttons on mobile (`100% width`), standard width on tablet and up
- **Spacing gaps:** Reduce `52px` gaps to `40px` on tablet, `24px` on mobile; maintain geometric relationships

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA:** Blue (`#4D7EFF`)
- **Secondary CTA:** White (`#FFFFFF`) with black border
- **Success/Positive:** Green (`#22C55E`)
- **Warning/Attention:** Orange (`#F97316`)
- **Accent/Alternative:** Violet (`#A855F7`)
- **Text:** Black (`#000000`)
- **Background:** White (`#FFFFFF`)
- **Borders:** Black (`#000000`)
- **Shadows:** Black (`#000000`) at `4px 4px` offset

### Iteration Guide

1. **Every interactive element must have a `2px solid #000000` border** unless explicitly a full-width section or navigation bar (which use `0px` border)

2. **All shadow effects use hard-edged offsets:** Primary shadow is `#000000 4px 4px 0px 0px`; on hover reduce to `2px 2px`; on active/pressed reduce to `1px 1px`

3. **Spacing follows the `4px` base unit scale:** Use `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `40px`, `52px`, `200px`—never arbitrary values

4. **Typography defaults to DM Sans weight `500`** (body text) or `700` (headings); sizes follow the hierarchy table strictly; no custom font sizes

5. **Button internal padding is always `8px 12px` minimum;** padding increases with semantic importance (`8px 16px` standard, `16px 16px` full-width)

6. **Border-radius is either `0px` (sharp, structural) or `5px` (components);** never use values between or above `5px`

7. **Input fields always use `2px solid #000000` border,** `40px` height, `8px 12px` padding, and `5px` border-radius; focus state adds outer glow shadow

8. **Cards and containers maintain `20px–24px` padding** with consistent `2px solid #000000` borders when they require visual definition; transparent cards use `0px` border

9. **Navigation spans full width (`1440px`) with `20px` padding,** `70px` height, and `2px solid #000000` bottom border; links use `16px` DM Sans weight `500`

10. **All color references convert from oklch() notation:** `oklch(1 0 0)` = `#FFFFFF`, `oklch(0 0 0)` = `#000000`, `oklch(0.6747 0.1725 259.61)` = `#4D7EFF`; always output as hex for implementation