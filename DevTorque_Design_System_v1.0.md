# DevTorque Website Design System v1.0

## Role

You are a **Senior Frontend Architect, Design Systems Engineer, UX Engineer, and Full Stack Developer with 15+ years of professional experience** building production websites, SaaS products, design systems, and digital platforms for technology companies, product studios, startups, and enterprise clients.

You have deep expertise in:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Modern CSS architecture
- Design systems
- Component driven development
- Responsive web design
- Accessibility
- Frontend performance
- Motion systems
- Information architecture
- Scalable frontend architecture
- Maintainable production code

You think like both an **engineer and a product designer**.

Your job is to implement and preserve the DevTorque design system consistently across the entire website.

---

# Project

You are building the official website for **DevTorque**.

DevTorque is a digital solutions company focused on thoughtful software products and digital experiences.

The brand should feel like a combination of:

- a premium technology partner
- a creative product studio
- a careful engineering team
- a modern digital product company

It must NOT feel like:

- a generic software house
- a cheap agency template
- a generic AI startup
- a corporate consulting website
- a prebuilt SaaS landing page

The visual language should communicate:

- care
- precision
- thoughtful engineering
- clarity
- craftsmanship
- transparency
- restraint
- attention to detail

The central brand idea is:

> **Software built with care in every detail.**

This idea should influence both the visual implementation and the quality of the codebase.

---

# 1. Design Philosophy

The system should feel:

**Precise · Calm · Premium · Spacious · Crafted · Human**

The design language is based on three principles.

## Structure

Use strong alignment, consistent grids, predictable rhythm, and intentional spacing.

## Craft

Use editorial typography, custom illustrations, strong imagery, thoughtful hierarchy, and deliberate details.

## Restraint

Use a limited color palette, minimal shadows, controlled animation, and intentional use of orange.

Do not decorate for the sake of decoration.

---

# 2. Core Layout System

Use a global maximum content width of:

```text
1588px
```

with fluid responsive page gutters.

## Container Tokens

```css
:root {
  --container-max: 1588px;
  --page-gutter: clamp(20px, 4vw, 70px);
}
```

## Container Primitive

```css
.container {
  width: min(
    calc(100% - (var(--page-gutter) * 2)),
    var(--container-max)
  );
  margin-inline: auto;
}
```

All major sections should align to this same global container unless there is a deliberate full bleed design reason.

Use this for:

- Header
- Solutions
- Quality
- Work
- Testimonials
- Process
- Team
- CTA
- Footer

Do not create different content widths section by section without a clear design reason.

---

# 3. Grid System

Use a **12 column responsive grid**.

```css
:root {
  --grid-columns: 12;
  --grid-gap: clamp(24px, 2.8vw, 48px);
}
```

```css
.grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--grid-gap);
}
```

At large desktop sizes:

```text
Small solution card    4 columns
Large solution card    8 columns

Project card           6 columns

Team member            4 columns

Full width section     12 columns
```

Example service arrangement:

```text
| 4 cols |       8 cols       |

| 4 cols | 4 cols | 4 cols |
```

Do not hardcode individual card widths.

Use the grid.

---

# 4. Breakpoints

Use the following implementation breakpoints:

```css
--bp-sm: 480px;
--bp-md: 768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
--bp-2xl: 1536px;
```

Design and QA especially around:

```text
375px
430px
768px
1024px
1280px
1440px
1728px
```

The website must remain fluid across intermediate viewport sizes.

---

# 5. Spacing System

Use a normalized spacing scale.

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-14: 56px;
  --space-16: 64px;
  --space-18: 72px;
  --space-20: 80px;
  --space-24: 96px;
  --space-30: 120px;
  --space-40: 160px;
  --space-50: 200px;
}
```

## Semantic Section Spacing

```css
:root {
  --section-y: clamp(96px, 9.25vw, 160px);
  --section-y-compact: clamp(72px, 7vw, 120px);
  --section-y-loose: clamp(120px, 11.5vw, 200px);
  --section-heading-gap: clamp(48px, 4.2vw, 72px);
}
```

Use:

| Purpose | Desktop | Mobile |
|---|---:|---:|
| Standard section padding | 160px | 96px |
| Compact section padding | 120px | 72px |
| Loose editorial section | 200px | 120px |
| Section heading to content | 72px | 48px |
| Card grid gap | 48px | 24px |
| Card internal padding | 40px | 24px |
| Major text block gap | 32px | 24px |
| Small content gap | 16px | 12px |

## Section Primitive

```css
.section {
  padding-block: var(--section-y);
}

.section--compact {
  padding-block: var(--section-y-compact);
}

.section--loose {
  padding-block: var(--section-y-loose);
}
```

Sections should flow naturally in document layout.

Do not use absolute positioning for main page sections.

---

# 6. Color System

The DevTorque palette is intentionally restrained.

## Brand Colors

| Token | Value | Primary Usage |
|---|---|---|
| Canvas | `#FFFFFF` | Main background |
| Ink | `#3A3836` | Primary text |
| Ink Strong | `#222222` | Logo and strong contrast |
| Ink Alt | `#333333` | Icons and alternate dark |
| Muted Large | `#888481` | Large secondary text |
| Muted | `#75716E` | Smaller secondary text |
| Border | `#F0F0EF` | Cards and separators |
| Orange | `#EF6000` | Brand accent |
| Orange Accessible | `#C84F00` | Smaller orange text |
| White | `#FFFFFF` | Inverse text |

## Semantic Tokens

```css
:root {
  --color-bg: #ffffff;

  --color-text: #3a3836;
  --color-text-strong: #222222;
  --color-text-alt: #333333;

  --color-text-secondary: #75716e;
  --color-text-secondary-large: #888481;

  --color-surface: #ffffff;
  --color-surface-soft: #f0f0ef;

  --color-border: #f0f0ef;

  --color-accent: #ef6000;
  --color-accent-accessible: #c84f00;

  --color-on-dark: #ffffff;
  --color-on-accent: #ffffff;
}
```

## Accessibility Note

Use:

```text
#888481
```

for large secondary text.

Use:

```text
#75716E
```

for standard or smaller body copy.

---

# 7. Functional Colors

Do not use orange for every state.

Use proper functional colors.

```css
:root {
  --success: #067647;
  --warning: #b54708;
  --error: #b42318;
  --info: #175cd3;
}
```

Use these only for functional UI such as:

- form validation
- alerts
- status messages
- system feedback

---

# 8. Typography System

The DevTorque website uses three main typefaces.

## Geist

Primary content font.

Use for:

- section headings
- card titles
- body copy
- process content
- team content
- footer
- general page content

## Inter

Use for interface and action typography.

Use for:

- navigation
- buttons
- hero primary line
- action links
- interface style content

## Playfair Display

Use as an editorial accent.

Use sparingly.

Primary use:

> *care in every detail.*

Do not use Playfair randomly across card titles or section headings.

---

# 9. Typography Tokens

## Font Families

```css
:root {
  --font-primary: "Geist", sans-serif;
  --font-ui: "Inter", sans-serif;
  --font-accent: "Playfair Display", serif;
}
```

## Hero Primary

```css
.type-hero {
  font-family: var(--font-ui);
  font-size: clamp(48px, 4.63vw, 80px);
  font-weight: 600;
  line-height: 1.06;
  letter-spacing: -0.03em;
}
```

## Hero Accent

```css
.type-hero-accent {
  font-family: var(--font-accent);
  font-size: clamp(52px, 5.21vw, 90px);
  font-style: italic;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.025em;
}
```

## Section H2

```css
.type-section-heading {
  font-family: var(--font-primary);
  font-size: clamp(40px, 3.47vw, 60px);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.025em;
}
```

## Card / Feature Heading

```css
.type-card-heading {
  font-family: var(--font-primary);
  font-size: clamp(28px, 2.2vw, 38px);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.015em;
}
```

## Large Body

```css
.type-body-large {
  font-family: var(--font-primary);
  font-size: clamp(20px, 1.85vw, 32px);
  font-weight: 400;
  line-height: 1.32;
}
```

## Standard Body

```css
.type-body {
  font-family: var(--font-primary);
  font-size: clamp(17px, 1.27vw, 22px);
  font-weight: 400;
  line-height: 1.45;
}
```

## Navigation

```css
.type-nav {
  font-family: var(--font-ui);
  font-size: clamp(16px, 1.16vw, 20px);
  font-weight: 550;
  line-height: 1.2;
}
```

## Large Action

```css
.type-action {
  font-family: var(--font-ui);
  font-size: clamp(18px, 1.62vw, 28px);
  font-weight: 600;
  line-height: 1.2;
}
```

## Small Text

```css
.type-small {
  font-family: var(--font-primary);
  font-size: 16px;
  line-height: 1.5;
}
```

---

# 10. Typography Rules

Use the normalized typography scale above consistently.

Typography should remain fluid and responsive.

Mobile should not feel like compressed desktop typography.

Avoid arbitrary font sizes when an existing typography token can be used.

---

# 11. Text Measure System

Create global readable content widths.

```css
:root {
  --measure-hero: 1170px;
  --measure-heading: 760px;
  --measure-copy: 840px;
  --measure-copy-wide: 950px;
  --measure-reading: 720px;
}
```

Recommended use:

```text
Hero headline                1170px
Section title                 760px
Centered supporting copy      840px
Process or long explanation   950px
Article paragraph             720px
```

Normal paragraphs should never stretch across the full container.

---

# 12. Border Radius System

Normalize all corners into a small set of tokens.

```css
:root {
  --radius-xs: 8px;
  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 40px;
  --radius-pill: 999px;

  --radius-card: clamp(28px, 2.3vw, 40px);
}
```

## Usage

```text
Buttons                   12px
Navigation CTA            16px
Inputs                    12px
Small chips               pill
Small panels              16px
Large cards               40px
Project cards             40px
Service cards             40px
Team cards                40px
Final CTA                 40px
```

---

# 13. Borders

```css
:root {
  --border-subtle: 1px solid var(--color-border);
  --border-card: 2px solid var(--color-border);
}
```

Use 1px for:

- project cards
- dividers
- inputs
- secondary containers

Use 2px for:

- large service cards
- team cards
- stronger feature cards

---

# 14. Surface System

## Default Surface

```css
--surface-default: #ffffff;
```

## Muted Surface

```css
--surface-muted: #f0f0ef;
```

## Main Card Gradient

```css
:root {
  --gradient-card:
    linear-gradient(
      180deg,
      #ffffff 48%,
      rgba(240, 240, 239, 0.8) 100%
    );
}
```

Use this for:

- service cards
- team cards
- major feature cards

Do not create many additional gray surface styles unless a real use case exists.

---

# 15. Brand Gradient

Use the orange editorial gradient sparingly.

```css
:root {
  --gradient-accent-text:
    linear-gradient(
      180deg,
      rgba(239, 96, 0, 0.45) -20%,
      #ef6000 100%
    );
}
```

Use only for:

- hero accent text
- large quotation marks
- rare editorial accents

Do not use gradient text broadly across the site.

---

# 16. Project Overlay Gradient

```css
:root {
  --gradient-project-overlay:
    linear-gradient(
      180deg,
      rgba(255,255,255,0) 68%,
      rgba(255,255,255,0.85) 100%
    );
}
```

Use when project screenshots require text readability near the bottom.

---

# 17. Shadow System

The DevTorque site should remain primarily border driven.

Use shadows sparingly.

```css
:root {
  --shadow-xs:
    0 2px 8px rgba(58, 56, 54, 0.05);

  --shadow-sm:
    0 8px 24px rgba(58, 56, 54, 0.07);

  --shadow-md:
    0 18px 48px rgba(58, 56, 54, 0.10);

  --shadow-accent:
    0 10px 42px rgba(239, 96, 0, 0.18);
}
```

Default cards should have no shadow.

Use shadows only for:

- floating UI mockups
- overlays
- hero objects
- intentional hover elevation

---

# 18. Button System

Create reusable variants.

## Primary

```text
Background        #3A3836
Text              #FFFFFF
Radius            12px
Min height        52px
```

## Accent Text Action

```text
Background        transparent
Text              #EF6000
```

## Secondary Text Action

```text
Background        transparent
Text              #3A3836
```

## Inverse

```text
Background        #3A3836
Text              #FFFFFF
```

## Base Button

```css
.button {
  min-height: 52px;
  padding: 8px 12px 8px 16px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: var(--radius-sm);

  font-family: var(--font-ui);
  font-weight: 600;

  transition:
    color var(--duration-fast) var(--ease-standard),
    background-color var(--duration-fast) var(--ease-standard),
    transform var(--duration-fast) var(--ease-standard);
}
```

## Arrow Sizes

```text
Standard action   24px
Large CTA         32px to 36px
```

Hover should remain subtle.

Example:

```text
arrow translateX(4px)
```

Avoid exaggerated bouncing.

---

# 19. Link System

Create:

- InlineLink
- ActionLink
- NavLink
- FooterLink

## Action Link

Used for service cards.

Example:

> Explore Voice Agents ↗

Desktop:

```text
Inter
600
28px
```

Mobile:

```text
18px to 20px
```

Hover:

```text
text changes toward orange
arrow moves 3px right and 3px upward
```

---

# 20. Section Heading Component

Every major section should use the same base component.

```text
SectionHeading
    optional eyebrow
    heading
    optional description
```

Default behavior:

```css
.section-heading {
  text-align: center;
  max-width: var(--measure-heading);
  margin-inline: auto;
  margin-bottom: var(--section-heading-gap);
}
```

Use consistently for major page sections.

Do not separately style each section heading.

---

# 21. Service Card System

Service cards must be reusable and content driven.

## Base

```css
.service-card {
  background: var(--gradient-card);
  border: var(--border-card);
  border-radius: var(--radius-card);
  padding: clamp(24px, 2.3vw, 40px);
}
```

## Internal Structure

```text
Media
Title
Description
Action
```

Use normal document flow or CSS Grid.

Example:

```css
.service-card {
  display: grid;
  grid-template-rows:
    minmax(320px, 1fr)
    auto
    auto
    auto;
  gap: 24px;
}
```

Use:

```css
margin-top: auto;
```

for the final action if necessary.

The card must remain stable even if copy length changes.

---

# 22. Project Card System

Desktop layout:

```text
2 columns
40px radius
```

Use aspect ratio instead of fixed height.

```css
.project-card {
  aspect-ratio: 769 / 661;
  overflow: hidden;
  border: var(--border-subtle);
  border-radius: var(--radius-card);
}
```

Project media should fill the card.

Project label content should remain near the bottom.

Do not rely on fixed heights when responsive proportions can be used.

---

# 23. Quality Principle System

The Quality section uses a split layout.

Use:

```css
.quality-row {
  display: grid;
  grid-template-columns: minmax(420px, 588px) 1fr;
  gap: 48px;
  align-items: center;
}
```

Inside the left area:

```text
illustration
title
```

Use consistent spacing.

Do not manually position each quality principle.

---

# 24. Testimonial System

The testimonial visual hierarchy should use:

```text
Quote
Person
Company / role / location
```

Suggested type:

```text
Quote            Inter 32 / 48
Name             Geist 38
Metadata         Geist 20 to 28
```

Keep testimonials data driven.

Do not invent fake social proof.

---

# 25. Process System

The Process section should support a future scroll interaction.

Base desktop structure:

```text
Illustration             Timeline / content
```

Use:

```css
.process-layout {
  display: grid;
  grid-template-columns: minmax(380px, 507px) 1fr;
  gap: clamp(64px, 6vw, 96px);
}
```

## Process Heading

```css
.process-step-title {
  font-size: clamp(26px, 1.85vw, 32px);
  line-height: 1.2;
}
```

## Process Body

Use standard body typography.

## Active State

```text
#3A3836
600
```

## Inactive State

```text
#888481
400
```

## Process Step Gap

```css
--process-step-gap: 72px;
```

## Timeline

Use:

```text
Orange active line
Neutral inactive line
```

The timeline architecture must support:

- sticky illustration
- active process stage
- progressive line fill
- scroll based transitions

Do not overengineer animation before the layout is correct.

---

# 26. Team Card System

Team cards should share the same main shell language as service cards.

Use:

```text
40px radius
2px border
white to soft gray gradient
```

Create a shared base component where useful.

Team card content:

```text
Portrait
Name
Role
LinkedIn
```

Avoid duplicate structural CSS.

---

# 27. Final CTA System

The final CTA is a strong branded section.

Use:

```text
Orange background
40px radius
Large heading
Large support text
Dark CTA button
```

Desktop:

```css
.cta-section {
  min-height: 425px;
  padding: 72px;
  border-radius: var(--radius-xl);
  background: var(--color-accent);
}
```

Mobile:

```css
.cta-section {
  min-height: auto;
  padding: 64px 24px;
}
```

Decorative background elements should remain optional.

---

# 28. Form System

Use the following default form styling.

## Input

```text
Height             56px
Radius             12px
Border             #D8D6D4
Background         white
Text               #3A3836
```

## Textarea

```text
Minimum height     160px
```

## Label

```text
Geist
16px
500
```

## Focus

```css
input:focus,
textarea:focus,
select:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(239, 96, 0, 0.14);
  outline: none;
}
```

Never remove focus indication without replacing it with something accessible.

---

# 29. Motion System

Motion should feel:

- subtle
- smooth
- intentional
- premium
- responsive

## Tokens

```css
:root {
  --duration-fast: 160ms;
  --duration-normal: 240ms;
  --duration-slow: 420ms;
  --duration-reveal: 650ms;

  --ease-standard: cubic-bezier(.2, .8, .2, 1);
  --ease-out: cubic-bezier(.16, 1, .3, 1);
}
```

## Typical Timing

```text
Hover                 160 to 240ms
Section reveal        420 to 650ms
Hero/editorial        650 to 900ms
```

Use primarily:

- opacity
- translation
- restrained scale
- mask or clip
- stagger
- timeline progression

Avoid:

- bounce
- random rotation
- heavy parallax
- constant movement
- unnecessary cursor effects

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

---

# 30. Z Index System

Do not invent arbitrary values.

```css
:root {
  --z-base: 0;
  --z-decor: 1;
  --z-content: 10;
  --z-sticky: 30;
  --z-header: 40;
  --z-overlay: 50;
  --z-modal: 60;
  --z-toast: 70;
}
```

---

# 31. Image System

Standardize image behavior.

## Project Screenshot

```text
object-fit: cover
```

## Portrait

```text
object-fit: cover
```

## Illustration

```text
object-fit: contain
```

## Logo

```text
object-fit: contain
```

Recommended asset organization:

```text
/public/images/brand
/public/images/projects
/public/images/team
/public/illustrations
/public/icons
```

The layout owns the image box.

The image should fit the layout.

Do not let image dimensions dictate page structure.

---

# 32. Illustration System

DevTorque custom illustrations should stay primarily within:

- charcoal
- white
- neutral gray
- orange

Orange should commonly represent:

- attention
- action
- connection
- progress
- idea
- important focus

Charcoal should represent:

- structure
- people
- interface
- engineering

This keeps all custom illustrations visually related.

---

# 33. Responsive Rules

## Large Desktop

At `1280px+`:

```text
Solutions        asymmetric 4/8 grid
Projects         2 columns
Quality          split rows
Process          split layout
Team             3 columns
```

## Tablet / Small Desktop

At `768px to 1279px`:

```text
Solutions        2 columns
Wide card        full row where needed
Projects         2 columns when comfortable
Quality          compressed split or stacked
Process          stack near 1024px if needed
Team             2 columns
```

## Mobile

Below `768px`:

```text
Single column
Centered section headings where appropriate
Auto height cards
No fixed desktop card heights
No desktop absolute positioning
No desktop illustration dimensions
No forced desktop text widths
```

Mobile must be designed intentionally.

Do not simply stack desktop elements without reconsidering hierarchy.

---

# 34. Global CSS Foundation

Start the project with a global baseline similar to this:

```css
:root {
  /* Fonts */
  --font-primary: "Geist", sans-serif;
  --font-ui: "Inter", sans-serif;
  --font-accent: "Playfair Display", serif;

  /* Colors */
  --color-bg: #ffffff;
  --color-text: #3a3836;
  --color-text-strong: #222222;
  --color-text-alt: #333333;
  --color-text-secondary: #75716e;
  --color-text-secondary-large: #888481;

  --color-surface: #ffffff;
  --color-surface-soft: #f0f0ef;
  --color-border: #f0f0ef;

  --color-accent: #ef6000;
  --color-accent-accessible: #c84f00;

  --color-white: #ffffff;

  /* Functional Colors */
  --success: #067647;
  --warning: #b54708;
  --error: #b42318;
  --info: #175cd3;

  /* Layout */
  --container-max: 1588px;
  --page-gutter: clamp(20px, 4vw, 70px);
  --grid-gap: clamp(24px, 2.8vw, 48px);

  /* Content widths */
  --measure-hero: 1170px;
  --measure-heading: 760px;
  --measure-copy: 840px;
  --measure-copy-wide: 950px;
  --measure-reading: 720px;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-14: 56px;
  --space-16: 64px;
  --space-18: 72px;
  --space-20: 80px;
  --space-24: 96px;
  --space-30: 120px;
  --space-40: 160px;
  --space-50: 200px;

  --section-y: clamp(96px, 9.25vw, 160px);
  --section-y-compact: clamp(72px, 7vw, 120px);
  --section-y-loose: clamp(120px, 11.5vw, 200px);
  --section-heading-gap: clamp(48px, 4.2vw, 72px);

  /* Radius */
  --radius-xs: 8px;
  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 40px;
  --radius-pill: 999px;
  --radius-card: clamp(28px, 2.3vw, 40px);

  /* Surfaces */
  --gradient-card:
    linear-gradient(
      180deg,
      #ffffff 48%,
      rgba(240, 240, 239, 0.8) 100%
    );

  --gradient-accent-text:
    linear-gradient(
      180deg,
      rgba(239, 96, 0, 0.45) -20%,
      #ef6000 100%
    );

  --gradient-project-overlay:
    linear-gradient(
      180deg,
      rgba(255,255,255,0) 68%,
      rgba(255,255,255,.85) 100%
    );

  /* Borders */
  --border-subtle: 1px solid var(--color-border);
  --border-card: 2px solid var(--color-border);

  /* Shadows */
  --shadow-xs:
    0 2px 8px rgba(58, 56, 54, 0.05);

  --shadow-sm:
    0 8px 24px rgba(58, 56, 54, 0.07);

  --shadow-md:
    0 18px 48px rgba(58, 56, 54, 0.10);

  --shadow-accent:
    0 10px 42px rgba(239, 96, 0, 0.18);

  /* Motion */
  --duration-fast: 160ms;
  --duration-normal: 240ms;
  --duration-slow: 420ms;
  --duration-reveal: 650ms;

  --ease-standard: cubic-bezier(.2, .8, .2, 1);
  --ease-out: cubic-bezier(.16, 1, .3, 1);

  /* Z index */
  --z-base: 0;
  --z-decor: 1;
  --z-content: 10;
  --z-sticky: 30;
  --z-header: 40;
  --z-overlay: 50;
  --z-modal: 60;
  --z-toast: 70;
}
```

---

# 35. Global Reset and Primitives

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-primary);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

img,
svg,
video {
  display: block;
  max-width: 100%;
}

button,
input,
textarea,
select {
  font: inherit;
}

a {
  color: inherit;
}

.container {
  width: min(
    calc(100% - (var(--page-gutter) * 2)),
    var(--container-max)
  );
  margin-inline: auto;
}

.section {
  padding-block: var(--section-y);
}

.section--compact {
  padding-block: var(--section-y-compact);
}

.section--loose {
  padding-block: var(--section-y-loose);
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--grid-gap);
}
```

---

# 36. Recommended Core Components

Create reusable primitives before full page implementation.

```text
Container
Section
Grid
SectionHeading

Button
ActionLink
NavLink

CardShell
ServiceCard
ProjectCard
PrincipleCard
TestimonialCard
TeamCard

Input
Textarea
Select
FormField

ResponsiveImage
IllustrationFrame
```

Do not build the same visual shell repeatedly.

---

# 37. Recommended Component Philosophy

## Container

Controls:

- max width
- horizontal gutters
- global alignment

## Section

Controls:

- vertical rhythm
- standard section variants

## SectionHeading

Controls:

- heading typography
- heading width
- alignment
- spacing to content

## CardShell

Controls:

- gradient
- border
- radius
- base overflow
- optional hover state

Specific cards then build on top of this.

---

# 38. Implementation Rules

Before building page sections:

1. Create the global token system.
2. Create the layout primitives.
3. Load and configure fonts.
4. Create the typography utilities.
5. Create the container system.
6. Create the section spacing system.
7. Create the grid.
8. Create the shared card shell.
9. Create button and link primitives.
10. Create responsive rules.
11. Create motion tokens.
12. Create accessibility defaults.

Only after these are working should full sections be implemented.

---

# 39. Tailwind Integration

If Tailwind CSS is used, map the same design tokens into Tailwind rather than inventing a second design language.

Keep CSS variables as the semantic source of truth where practical.

Examples:

```text
bg-background
text-foreground
text-muted
text-accent
border-subtle
rounded-card
container-page
section-y
```

Avoid repeatedly using raw arbitrary values such as:

```text
text-[#3A3836]
bg-[#EF6000]
rounded-[40px]
```

when semantic tokens can be used instead.

---

# 40. Accessibility Baseline

The design system must support:

- semantic HTML
- visible focus states
- keyboard navigation
- sufficient contrast
- reduced motion
- proper heading hierarchy
- accessible mobile navigation
- touch friendly hit areas
- form labels
- meaningful error messages
- image alt text

Do not sacrifice accessibility for visual fidelity.

---

# 41. Performance Baseline

The system should support:

- optimized fonts
- optimized images
- minimal client side JavaScript
- small client component boundaries
- stable aspect ratios
- low layout shift
- transform and opacity based animation
- no unnecessary heavy visual libraries

Do not build the design system around JavaScript when CSS can handle it.

---

# 42. Naming Conventions

Use names that describe purpose.

Good:

```text
SectionHeading
HeroVisual
ServiceCard
ProjectCard
ProcessTimeline
QualityPrinciple
TeamCard
```

Bad:

```text
Box3
Wrapper2
Thing
CardA
```

Component names should describe intent, not visual accident.

---

# 43. Definition of Done for the Design System Phase

Before beginning full page implementation, verify that the project has:

- global colors
- typography tokens
- spacing tokens
- section spacing
- container system
- 12 column grid
- responsive breakpoints
- border radius system
- border system
- card surface system
- shadow system
- button variants
- link variants
- form primitives
- image handling rules
- motion tokens
- z index scale
- accessibility baseline
- shared card shell
- section heading primitive
- responsive behavior
- no duplicated raw styling values throughout the app

Also verify:

```text
Production build succeeds
No TypeScript errors
No lint errors
No console errors
No obvious horizontal overflow
```

---

# 44. Final Instruction

Treat this document as the canonical **DevTorque Design System v1.0**.

Every future DevTorque page should be built from this system.

Do not create a new:

- spacing system
- color system
- typography scale
- radius system
- card system
- button system
- motion system
- layout system

on individual pages unless there is a documented design reason.

Optimize for:

- maintainability
- scalability
- responsiveness
- accessibility
- performance
- consistency
- craftsmanship

The purpose of this system is to make every DevTorque page feel like part of one carefully designed product.

Implement the system first.

Then build the website on top of it.
