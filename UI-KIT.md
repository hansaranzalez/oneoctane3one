# OneOctane UI Kit Documentation

**Version**: 1.0  
**Last Updated**: December 2024  
**Inspired by**: Content Fabrica Design System  

## Overview

This UI Kit provides a comprehensive design system for the OneOctane application, ensuring consistency across all components and interfaces. The design language emphasizes modern, clean aesthetics with a focus on content creation and brand management workflows.

## Design Principles

### 1. **Content-Focused**
- Clean, minimal interfaces that prioritize content visibility
- Generous whitespace to reduce cognitive load
- Clear information hierarchy

### 2. **Professional & Trustworthy**
- Sophisticated color palette
- Consistent typography scale
- Reliable interaction patterns

### 3. **Efficient Workflows**
- Streamlined user journeys
- Contextual actions and information
- Responsive and adaptive layouts

### 4. **Brand-Centric**
- Flexible theming system
- Brand color integration
- Customizable visual elements

## Color System

### Primary Colors

```css
:root {
  /* Primary Brand Colors */
  --primary-50: #f0f9ff;
  --primary-100: #e0f2fe;
  --primary-200: #bae6fd;
  --primary-300: #7dd3fc;
  --primary-400: #38bdf8;
  --primary-500: #0ea5e9;  /* Main Primary */
  --primary-600: #0284c7;
  --primary-700: #0369a1;
  --primary-800: #075985;
  --primary-900: #0c4a6e;
  --primary-950: #082f49;
}
```

### Secondary Colors

```css
:root {
  /* Secondary/Accent Colors */
  --secondary-50: #f8fafc;
  --secondary-100: #f1f5f9;
  --secondary-200: #e2e8f0;
  --secondary-300: #cbd5e1;
  --secondary-400: #94a3b8;
  --secondary-500: #64748b;  /* Main Secondary */
  --secondary-600: #475569;
  --secondary-700: #334155;
  --secondary-800: #1e293b;
  --secondary-900: #0f172a;
  --secondary-950: #020617;
}
```

### Semantic Colors

```css
:root {
  /* Success */
  --success-50: #f0fdf4;
  --success-500: #22c55e;
  --success-600: #16a34a;
  --success-700: #15803d;

  /* Warning */
  --warning-50: #fffbeb;
  --warning-500: #f59e0b;
  --warning-600: #d97706;
  --warning-700: #b45309;

  /* Error */
  --error-50: #fef2f2;
  --error-500: #ef4444;
  --error-600: #dc2626;
  --error-700: #b91c1c;

  /* Info */
  --info-50: #eff6ff;
  --info-500: #3b82f6;
  --info-600: #2563eb;
  --info-700: #1d4ed8;
}
```

### Neutral Colors

```css
:root {
  /* Grayscale */
  --gray-50: #fafafa;
  --gray-100: #f4f4f5;
  --gray-200: #e4e4e7;
  --gray-300: #d4d4d8;
  --gray-400: #a1a1aa;
  --gray-500: #71717a;
  --gray-600: #52525b;
  --gray-700: #3f3f46;
  --gray-800: #27272a;
  --gray-900: #18181b;
  --gray-950: #09090b;

  /* Surface Colors */
  --surface-primary: #ffffff;
  --surface-secondary: #f8fafc;
  --surface-tertiary: #f1f5f9;
  --surface-inverse: #0f172a;
}
```

## Typography

### Font Families

```css
:root {
  /* Primary Font - Inter */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  /* Monospace Font */
  --font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace;
  
  /* Display Font (for headers) */
  --font-display: 'Cal Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Font Scale

```css
:root {
  /* Font Sizes */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */
  --text-6xl: 3.75rem;    /* 60px */
  --text-7xl: 4.5rem;     /* 72px */

  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;

  /* Font Weights */
  --font-thin: 100;
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
  --font-black: 900;
}
```

### Typography Classes

```css
/* Headings */
.heading-display {
  font-family: var(--font-display);
  font-size: var(--text-6xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: -0.025em;
}

.heading-1 {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
}

.heading-2 {
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
}

.heading-3 {
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
}

.heading-4 {
  font-family: var(--font-sans);
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
}

.heading-5 {
  font-family: var(--font-sans);
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-normal);
}

.heading-6 {
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  line-height: var(--leading-normal);
}

/* Body Text */
.body-large {
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
}

.body-base {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
}

.body-small {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
}

/* Labels and Captions */
.label-large {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
}

.label-medium {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
}

.label-small {
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.caption {
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
  color: var(--gray-600);
}

.code {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
}
```

## Spacing System

```css
:root {
  /* Spacing Scale */
  --space-0: 0;
  --space-px: 1px;
  --space-0_5: 0.125rem;  /* 2px */
  --space-1: 0.25rem;     /* 4px */
  --space-1_5: 0.375rem;  /* 6px */
  --space-2: 0.5rem;      /* 8px */
  --space-2_5: 0.625rem;  /* 10px */
  --space-3: 0.75rem;     /* 12px */
  --space-3_5: 0.875rem;  /* 14px */
  --space-4: 1rem;        /* 16px */
  --space-5: 1.25rem;     /* 20px */
  --space-6: 1.5rem;      /* 24px */
  --space-7: 1.75rem;     /* 28px */
  --space-8: 2rem;        /* 32px */
  --space-9: 2.25rem;     /* 36px */
  --space-10: 2.5rem;     /* 40px */
  --space-12: 3rem;       /* 48px */
  --space-14: 3.5rem;     /* 56px */
  --space-16: 4rem;       /* 64px */
  --space-20: 5rem;       /* 80px */
  --space-24: 6rem;       /* 96px */
  --space-28: 7rem;       /* 112px */
  --space-32: 8rem;       /* 128px */
  --space-36: 9rem;       /* 144px */
  --space-40: 10rem;      /* 160px */
  --space-44: 11rem;      /* 176px */
  --space-48: 12rem;      /* 192px */
  --space-52: 13rem;      /* 208px */
  --space-56: 14rem;      /* 224px */
  --space-60: 15rem;      /* 240px */
  --space-64: 16rem;      /* 256px */
  --space-72: 18rem;      /* 288px */
  --space-80: 20rem;      /* 320px */
  --space-96: 24rem;      /* 384px */
}
```

## Component Library

### Buttons

```css
/* Base Button */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  font-family: var(--font-sans);
  font-weight: var(--font-medium);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 1px solid transparent;
  white-space: nowrap;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Button Sizes */
.btn-xs {
  padding: var(--space-1) var(--space-2);
  font-size: var(--text-xs);
  line-height: var(--leading-normal);
}

.btn-sm {
  padding: var(--space-1_5) var(--space-3);
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
}

.btn-md {
  padding: var(--space-2_5) var(--space-4);
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
}

.btn-lg {
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
}

.btn-xl {
  padding: var(--space-3_5) var(--space-8);
  font-size: var(--text-lg);
  line-height: var(--leading-normal);
}

/* Button Variants */
.btn-primary {
  background-color: var(--primary-500);
  color: white;
  border-color: var(--primary-500);
}

.btn-primary:hover {
  background-color: var(--primary-600);
  border-color: var(--primary-600);
}

.btn-primary:active {
  background-color: var(--primary-700);
  border-color: var(--primary-700);
}

.btn-secondary {
  background-color: var(--surface-primary);
  color: var(--gray-700);
  border-color: var(--gray-300);
}

.btn-secondary:hover {
  background-color: var(--gray-50);
  border-color: var(--gray-400);
}

.btn-outline {
  background-color: transparent;
  color: var(--primary-600);
  border-color: var(--primary-300);
}

.btn-outline:hover {
  background-color: var(--primary-50);
  border-color: var(--primary-400);
}

.btn-ghost {
  background-color: transparent;
  color: var(--gray-700);
  border-color: transparent;
}

.btn-ghost:hover {
  background-color: var(--gray-100);
  color: var(--gray-900);
}

.btn-danger {
  background-color: var(--error-500);
  color: white;
  border-color: var(--error-500);
}

.btn-danger:hover {
  background-color: var(--error-600);
  border-color: var(--error-600);
}
```

### Cards

```css
.card {
  background-color: var(--surface-primary);
  border-radius: 0.75rem;
  border: 1px solid var(--gray-200);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease-in-out;
}

.card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-color: var(--gray-300);
}

.card-header {
  padding: var(--space-6);
  border-bottom: 1px solid var(--gray-200);
}

.card-content {
  padding: var(--space-6);
}

.card-footer {
  padding: var(--space-6);
  border-top: 1px solid var(--gray-200);
  background-color: var(--gray-50);
  border-radius: 0 0 0.75rem 0.75rem;
}

/* Card Variants */
.card-elevated {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.card-interactive {
  cursor: pointer;
}

.card-interactive:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
```

### Form Elements

```css
/* Input Fields */
.input {
  display: block;
  width: 100%;
  padding: var(--space-2_5) var(--space-3_5);
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
  color: var(--gray-900);
  background-color: var(--surface-primary);
  border: 1px solid var(--gray-300);
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
}

.input:focus {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px var(--primary-100);
}

.input::placeholder {
  color: var(--gray-400);
}

.input:disabled {
  background-color: var(--gray-50);
  color: var(--gray-500);
  cursor: not-allowed;
}

/* Input Sizes */
.input-sm {
  padding: var(--space-2) var(--space-3);
  font-size: var(--text-xs);
}

.input-lg {
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-base);
}

/* Select */
.select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: var(--space-10);
}

/* Textarea */
.textarea {
  resize: vertical;
  min-height: 80px;
}

/* Checkbox and Radio */
.checkbox,
.radio {
  width: var(--space-4);
  height: var(--space-4);
  border: 1px solid var(--gray-300);
  background-color: var(--surface-primary);
  cursor: pointer;
}

.checkbox {
  border-radius: 0.25rem;
}

.radio {
  border-radius: 50%;
}

.checkbox:checked,
.radio:checked {
  background-color: var(--primary-500);
  border-color: var(--primary-500);
}

/* Form Groups */
.form-group {
  margin-bottom: var(--space-4);
}

.form-label {
  display: block;
  margin-bottom: var(--space-2);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--gray-700);
}

.form-error {
  margin-top: var(--space-1);
  font-size: var(--text-xs);
  color: var(--error-600);
}

.form-help {
  margin-top: var(--space-1);
  font-size: var(--text-xs);
  color: var(--gray-500);
}
```

### Navigation

```css
/* Navigation Bar */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-6);
  background-color: var(--surface-primary);
  border-bottom: 1px solid var(--gray-200);
}

.navbar-brand {
  display: flex;
  align-items: center;
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  text-decoration: none;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.navbar-link {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--gray-600);
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

.navbar-link:hover,
.navbar-link.active {
  color: var(--primary-600);
}

/* Sidebar Navigation */
.sidebar {
  width: 16rem;
  background-color: var(--surface-primary);
  border-right: 1px solid var(--gray-200);
  height: 100vh;
  overflow-y: auto;
}

.sidebar-nav {
  padding: var(--space-4);
}

.sidebar-item {
  display: flex;
  align-items: center;
  padding: var(--space-2_5) var(--space-3);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--gray-700);
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  margin-bottom: var(--space-1);
}

.sidebar-item:hover {
  background-color: var(--gray-100);
  color: var(--gray-900);
}

.sidebar-item.active {
  background-color: var(--primary-100);
  color: var(--primary-700);
}

.sidebar-icon {
  width: var(--space-5);
  height: var(--space-5);
  margin-right: var(--space-3);
}
```

## Elevation & Shadows

```css
:root {
  /* Shadow Scale */
  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
}

/* Elevation Classes */
.elevation-0 { box-shadow: none; }
.elevation-1 { box-shadow: var(--shadow-xs); }
.elevation-2 { box-shadow: var(--shadow-sm); }
.elevation-3 { box-shadow: var(--shadow-md); }
.elevation-4 { box-shadow: var(--shadow-lg); }
.elevation-5 { box-shadow: var(--shadow-xl); }
.elevation-6 { box-shadow: var(--shadow-2xl); }
```

## Border Radius

```css
:root {
  /* Border Radius Scale */
  --radius-none: 0;
  --radius-sm: 0.25rem;   /* 4px */
  --radius-md: 0.375rem;  /* 6px */
  --radius-lg: 0.5rem;    /* 8px */
  --radius-xl: 0.75rem;   /* 12px */
  --radius-2xl: 1rem;     /* 16px */
  --radius-3xl: 1.5rem;   /* 24px */
  --radius-full: 9999px;
}
```

## Animations & Transitions

```css
:root {
  /* Transition Duration */
  --duration-75: 75ms;
  --duration-100: 100ms;
  --duration-150: 150ms;
  --duration-200: 200ms;
  --duration-300: 300ms;
  --duration-500: 500ms;
  --duration-700: 700ms;
  --duration-1000: 1000ms;

  /* Transition Timing Functions */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Animation Classes */
.animate-fade-in {
  animation: fadeIn var(--duration-300) var(--ease-out);
}

.animate-slide-up {
  animation: slideUp var(--duration-300) var(--ease-out);
}

.animate-scale-in {
  animation: scaleIn var(--duration-200) var(--ease-out);
}

/* Keyframes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(var(--space-4));
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from { 
    opacity: 0;
    transform: scale(0.95);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
}

/* Transition Utilities */
.transition-all { transition: all var(--duration-150) var(--ease-in-out); }
.transition-colors { transition: color, background-color, border-color var(--duration-150) var(--ease-in-out); }
.transition-opacity { transition: opacity var(--duration-150) var(--ease-in-out); }
.transition-transform { transition: transform var(--duration-150) var(--ease-in-out); }
```

## Layout System

### Grid System

```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}

/* Responsive Containers */
@media (min-width: 640px) {
  .container { max-width: 640px; padding-left: var(--space-6); padding-right: var(--space-6); }
}

@media (min-width: 768px) {
  .container { max-width: 768px; }
}

@media (min-width: 1024px) {
  .container { max-width: 1024px; padding-left: var(--space-8); padding-right: var(--space-8); }
}

@media (min-width: 1280px) {
  .container { max-width: 1280px; }
}

@media (min-width: 1536px) {
  .container { max-width: 1536px; }
}

/* Grid Classes */
.grid {
  display: grid;
  gap: var(--space-4);
}

.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
.grid-cols-6 { grid-template-columns: repeat(6, 1fr); }
.grid-cols-12 { grid-template-columns: repeat(12, 1fr); }

/* Flexbox Classes */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.flex-wrap { flex-wrap: wrap; }
.items-center { align-items: center; }
.items-start { align-items: flex-start; }
.items-end { align-items: flex-end; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-end { justify-content: flex-end; }
```

## Usage Guidelines

### Do's ✅

- Use consistent spacing from the spacing scale
- Apply appropriate color contrast for accessibility
- Follow the established typography hierarchy
- Use semantic color meanings (success = green, error = red)
- Implement hover and focus states for interactive elements
- Maintain consistent border radius across similar components

### Don'ts ❌

- Don't use arbitrary spacing values outside the scale
- Don't mix different font families without purpose
- Don't use colors that don't meet WCAG accessibility standards
- Don't override component styles without extending the design system
- Don't use animations longer than 500ms for UI interactions

### Accessibility

- Maintain minimum 4.5:1 contrast ratio for normal text
- Maintain minimum 3:1 contrast ratio for large text
- Ensure all interactive elements have visible focus states
- Use semantic HTML elements where appropriate
- Provide alternative text for images and icons
- Ensure keyboard navigation is functional

### Responsive Design

- Mobile-first approach with progressive enhancement
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl), 1536px (2xl)
- Fluid typography and spacing where appropriate
- Touch-friendly interactive elements (minimum 44px touch targets)

---

This UI Kit provides a solid foundation for building consistent, accessible, and beautiful interfaces for the OneOctane application. It should be treated as a living document that evolves with the product needs while maintaining design consistency.