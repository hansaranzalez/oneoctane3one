# Nuxt UI v3 Comprehensive Guide

**Version**: 3.0  
**Last Updated**: December 2024  
**Official Documentation**: https://ui.nuxt.com/

## Table of Contents

1. [Overview](#overview)
2. [Installation & Setup](#installation--setup)
3. [Core Architecture](#core-architecture)
4. [Component Library](#component-library)
5. [Theming System](#theming-system)
6. [Icons](#icons)
7. [Forms & Validation](#forms--validation)
8. [Keyboard Shortcuts](#keyboard-shortcuts)
9. [Best Practices](#best-practices)
10. [Integration with OneOctane](#integration-with-oneoctane)

## Overview

Nuxt UI v3 is a modern Vue component library built specifically for Nuxt applications. It represents a significant evolution in UI development, offering developers a powerful, flexible, and performant solution for building modern web interfaces.

### Key Features

- **55+ Components**: Comprehensive component library with primitives and complex components
- **Built on Modern Tech**: Reka UI, Tailwind CSS v4, and Tailwind Variants
- **Enhanced Accessibility**: WCAG compliant components with proper ARIA attributes
- **TypeScript Native**: Full TypeScript integration with auto-completion
- **Performance Optimized**: CSS cascade layers and optimized rendering
- **Framework Flexible**: Works with both Nuxt and standalone Vue projects

### Technical Innovations

- **Tailwind CSS v4 Integration**: Latest Tailwind features and performance improvements
- **Native CSS Cascade Layers**: Better style organization and specificity management
- **Advanced Color Management**: Dynamic color schemes and intelligent theming
- **Nuxt DevTools Integration**: Enhanced developer experience with component previewing

### Compatibility

✅ **Compatible**:
- Nuxt 3.x
- Vue 3.x
- Tailwind CSS v4
- TypeScript

❌ **Not Compatible**:
- UnoCSS (use Tailwind CSS instead)
- Nuxt 2.x
- Vue 2.x

## Installation & Setup

### Prerequisites

```bash
# Ensure you have a Nuxt project
npx nuxi@latest init my-nuxt-app
cd my-nuxt-app
```

### Step-by-Step Installation

#### 1. Install Nuxt UI

```bash
# Using pnpm (recommended)
pnpm add @nuxt/ui

# Using npm
npm install @nuxt/ui

# Using yarn
yarn add @nuxt/ui

# Using bun
bun add @nuxt/ui
```

#### 2. Add Module to Nuxt Config

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  
  // Optional: Configure Nuxt UI
  ui: {
    global: true,
    icons: ['heroicons', 'lucide']
  }
})
```

#### 3. Import CSS

```css
/* assets/css/main.css */
@import "tailwindcss";
@import "@nuxt/ui";
```

#### 4. Wrap App with UApp

```vue
<!-- app.vue -->
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

### Quick Start Alternative

```bash
# Create new project with Nuxt UI template
npm create nuxt@latest -- -t ui my-nuxt-ui-app
```

### Optional Configuration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  ui: {
    // Customize component prefix
    prefix: 'U',
    
    // Enable/disable default fonts
    fonts: true,
    
    // Configure color mode
    colorMode: {
      preference: 'system'
    }
  }
})
```

### VSCode Extension

Install the **Tailwind CSS IntelliSense** extension for better development experience:

```json
{
  "tailwindCSS.experimental.classRegex": [
    ["ui:\\s*{([^}]*)}", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

## Core Architecture

### Component Structure

Nuxt UI components follow a consistent architecture pattern:

```vue
<template>
  <component-name
    :prop="value"
    :ui="uiConfig"
    :class="customClasses"
    @event="handler"
  >
    <template #slot-name>
      <!-- Slot content -->
    </template>
  </component-name>
</template>
```

### Key Concepts

#### 1. **UI Prop Pattern**

Every component accepts a `ui` prop for granular styling:

```vue
<UButton
  :ui="{
    base: 'font-medium',
    rounded: 'rounded-lg',
    color: { primary: { solid: 'bg-blue-500 text-white' } }
  }"
/>
```

#### 2. **Variant System**

Components use Tailwind Variants for consistent styling:

```vue
<UButton 
  color="primary" 
  variant="solid" 
  size="md" 
/>
```

#### 3. **Slot-Based Customization**

Rich slot system for component composition:

```vue
<UInput>
  <template #leading>
    <UIcon name="i-lucide-search" />
  </template>
  
  <template #trailing>
    <UButton size="xs" variant="ghost">
      Clear
    </UButton>
  </template>
</UInput>
```

### Auto-Imports

Nuxt UI automatically imports components and composables:

```vue
<template>
  <!-- No need to import UButton -->
  <UButton @click="onClick">
    Click me
  </UButton>
</template>

<script setup>
// No need to import defineShortcuts
defineShortcuts({
  'meta_k': () => openModal()
})
</script>
```

## Component Library

### Component Categories

#### 1. **Element Components** (Core UI Building Blocks)

- **UAlert**: Display important messages and notifications
- **UAvatar**: User profile pictures and initials
- **UBadge**: Status indicators and labels
- **UButton**: Interactive buttons with various styles
- **UIcon**: SVG icon display
- **UProgress**: Progress bars and loading indicators

```vue
<!-- Element Components Examples -->
<UAlert
  icon="i-lucide-info"
  title="Information"
  description="This is an informational alert."
  color="blue"
/>

<UAvatar
  src="/avatar.jpg"
  alt="User Avatar"
  size="md"
/>

<UBadge
  label="New"
  color="green"
  variant="solid"
/>

<UButton
  icon="i-lucide-plus"
  label="Add Item"
  color="primary"
  @click="addItem"
/>
```

#### 2. **Form Components** (Interactive Form Elements)

- **UForm**: Form wrapper with validation
- **UFormField**: Form field with label and error handling
- **UInput**: Text inputs with variants
- **UTextarea**: Multi-line text input
- **USelect**: Dropdown selection
- **UCheckbox**: Boolean input with custom styling
- **URadio**: Single selection from options
- **UToggle**: Switch toggle input

```vue
<!-- Form Components Examples -->
<UForm :schema="schema" :state="state" @submit="onSubmit">
  <UFormField label="Email" name="email" required>
    <UInput
      v-model="state.email"
      type="email"
      placeholder="Enter your email"
      icon="i-lucide-mail"
    />
  </UFormField>
  
  <UFormField label="Message" name="message">
    <UTextarea
      v-model="state.message"
      placeholder="Enter your message"
      :rows="4"
    />
  </UFormField>
  
  <UFormField label="Category" name="category">
    <USelect
      v-model="state.category"
      :options="categoryOptions"
      placeholder="Select category"
    />
  </UFormField>
  
  <UFormField label="Notifications" name="notifications">
    <UCheckbox
      v-model="state.notifications"
      label="Enable email notifications"
    />
  </UFormField>
  
  <UButton type="submit" label="Submit" />
</UForm>
```

#### 3. **Data Components** (Display and Manage Data)

- **UAccordion**: Collapsible content sections
- **UCarousel**: Image and content sliders
- **UTable**: Data tables with sorting and pagination
- **UTimeline**: Chronological event display

```vue
<!-- Data Components Examples -->
<UAccordion :items="accordionItems">
  <template #item="{ item }">
    <p>{{ item.content }}</p>
  </template>
</UAccordion>

<UTable
  :columns="tableColumns"
  :rows="tableData"
  :loading="loading"
  @select="onRowSelect"
/>

<UTimeline :items="timelineEvents">
  <template #default="{ item }">
    <div>
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </template>
</UTimeline>
```

#### 4. **Navigation Components** (User Navigation and Wayfinding)

- **UBreadcrumb**: Navigation path indicator
- **UPagination**: Page navigation controls
- **UTabs**: Tabbed content organization
- **UStepper**: Step-by-step process indication
- **UNavigation**: Sidebar and menu navigation

```vue
<!-- Navigation Components Examples -->
<UBreadcrumb
  :links="[
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: 'Detail' }
  ]"
/>

<UTabs
  :items="[
    { key: 'overview', label: 'Overview' },
    { key: 'settings', label: 'Settings' }
  ]"
  v-model="selectedTab"
/>

<UPagination
  v-model="currentPage"
  :page-count="totalPages"
  :total="totalItems"
/>
```

#### 5. **Overlay Components** (Floating UI Elements)

- **UModal**: Dialog and modal windows
- **UTooltip**: Contextual information on hover
- **UDrawer**: Slide-out panels
- **UToast**: Notification messages
- **UPopover**: Floating content containers

```vue
<!-- Overlay Components Examples -->
<UModal v-model="isModalOpen">
  <div class="p-6">
    <h2>Modal Title</h2>
    <p>Modal content goes here.</p>
    
    <div class="flex justify-end gap-2 mt-4">
      <UButton variant="ghost" @click="isModalOpen = false">
        Cancel
      </UButton>
      <UButton @click="confirmAction">
        Confirm
      </UButton>
    </div>
  </div>
</UModal>

<UTooltip text="This is a helpful tooltip">
  <UButton label="Hover me" />
</UTooltip>

<UDrawer v-model="isDrawerOpen" side="right">
  <div class="p-6">
    <h3>Drawer Content</h3>
    <!-- Drawer content -->
  </div>
</UDrawer>
```

### Component Props Pattern

All Nuxt UI components follow consistent prop patterns:

```typescript
interface BaseComponentProps {
  // Styling props
  color?: string
  variant?: string
  size?: string
  
  // Behavior props
  disabled?: boolean
  loading?: boolean
  
  // Customization props
  ui?: Record<string, any>
  class?: string
  
  // Content props
  label?: string
  icon?: string
}
```

## Theming System

### Core Theming Concepts

Nuxt UI uses a CSS-first approach with Tailwind CSS v4, providing flexible theming through:

1. **Color Aliases**: Semantic color naming (primary, secondary, success, etc.)
2. **CSS Variables**: Design tokens for consistent styling
3. **Component-Level Customization**: Fine-grained control via `ui` prop
4. **Global Theme Configuration**: App-wide theming via `app.config.ts`

### Color System

#### Default Color Aliases

```typescript
// Default color mapping
const defaultColors = {
  primary: 'green',    // Main brand color
  secondary: 'blue',   // Secondary actions
  success: 'green',    // Success states
  info: 'blue',        // Informational
  warning: 'yellow',   // Warning states
  error: 'red',        // Error states
  neutral: 'slate'     // Neutral elements
}
```

#### Custom Color Configuration

```typescript
// app.config.ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      secondary: 'indigo',
      success: 'emerald',
      warning: 'amber',
      error: 'red',
      neutral: 'zinc'
    },
    borderRadius: {
      default: '0.5rem',
      sm: '0.25rem',
      lg: '0.75rem'
    }
  }
})
```

### Component Theming

#### UI Prop Customization

```vue
<template>
  <UButton
    :ui="{
      base: 'font-semibold transition-all duration-200',
      rounded: 'rounded-xl',
      padding: { md: 'px-6 py-3' },
      color: {
        primary: {
          solid: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
        }
      }
    }"
    label="Custom Button"
  />
</template>
```

#### Global Component Theming

```typescript
// app.config.ts
export default defineAppConfig({
  ui: {
    button: {
      base: 'font-medium transition-all duration-200',
      rounded: 'rounded-lg',
      size: {
        md: 'px-4 py-2.5 text-sm'
      }
    },
    input: {
      base: 'transition-all duration-200',
      rounded: 'rounded-lg',
      color: {
        primary: {
          outline: 'border-blue-300 focus:border-blue-500 focus:ring-blue-200'
        }
      }
    }
  }
})
```

### CSS Variable Override

```css
/* assets/css/main.css */
@import "tailwindcss";
@import "@nuxt/ui";

:root {
  /* Custom color tokens */
  --color-primary-50: 240 249 255;
  --color-primary-500: 59 130 246;
  --color-primary-600: 37 99 235;
  
  /* Custom spacing */
  --space-container: 1280px;
  
  /* Custom border radius */
  --border-radius-default: 0.5rem;
}

/* Dark mode overrides */
.dark {
  --color-primary-500: 96 165 250;
  --color-primary-600: 59 130 246;
}
```

### Dark Mode Support

```vue
<template>
  <div>
    <!-- Automatic dark mode support -->
    <UButton color="primary" label="Auto Theme" />
    
    <!-- Manual color mode toggle -->
    <UButton @click="toggleColorMode" :icon="colorModeIcon" />
  </div>
</template>

<script setup>
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const colorModeIcon = computed(() => 
  colorMode.value === 'dark' ? 'i-lucide-sun' : 'i-lucide-moon'
)
</script>
```

## Icons

### Icon System Overview

Nuxt UI integrates with **Nuxt Icon** to provide access to over **200,000+ icons** from the Iconify ecosystem.

### Icon Usage Patterns

#### 1. Basic Icon Usage

```vue
<template>
  <!-- UIcon component -->
  <UIcon name="i-lucide-heart" class="text-red-500" />
  
  <!-- Icon prop in components -->
  <UButton icon="i-lucide-plus" label="Add Item" />
  
  <!-- Leading and trailing icons -->
  <UInput 
    v-model="search"
    icon="i-lucide-search"
    trailing-icon="i-lucide-x"
  />
</template>
```

#### 2. Icon Collections

```bash
# Install specific icon collections for better performance
pnpm add @iconify-json/lucide        # Lucide icons
pnpm add @iconify-json/heroicons     # Heroicons
pnpm add @iconify-json/tabler        # Tabler icons
pnpm add @iconify-json/material-symbols  # Material symbols
```

#### 3. Icon Configuration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  icon: {
    // Configure default icon collections
    collections: ['lucide', 'heroicons', 'tabler']
  }
})
```

#### 4. Custom Icon Defaults

```typescript
// app.config.ts
export default defineAppConfig({
  ui: {
    icons: {
      // Customize default icons used by components
      chevronDown: 'i-lucide-chevron-down',
      chevronRight: 'i-lucide-chevron-right',
      check: 'i-lucide-check',
      close: 'i-lucide-x',
      search: 'i-lucide-search',
      loading: 'i-lucide-loader-2'
    }
  }
})
```

### Icon Best Practices

```vue
<template>
  <!-- ✅ Good: Specific collection and icon -->
  <UIcon name="i-lucide-user" />
  
  <!-- ✅ Good: Semantic icon usage -->
  <UButton icon="i-lucide-save" label="Save Changes" />
  
  <!-- ✅ Good: Consistent icon sizing -->
  <UIcon name="i-lucide-settings" class="w-5 h-5" />
  
  <!-- ❌ Avoid: Generic icon names -->
  <UIcon name="user" />
  
  <!-- ❌ Avoid: Mixing icon styles -->
  <UIcon name="i-heroicons-user" />
  <UIcon name="i-lucide-settings" />
</template>
```

### Popular Icon Collections

#### Lucide Icons (Recommended)
```vue
<UIcon name="i-lucide-home" />
<UIcon name="i-lucide-user" />
<UIcon name="i-lucide-settings" />
<UIcon name="i-lucide-search" />
```

#### Heroicons
```vue
<UIcon name="i-heroicons-home" />
<UIcon name="i-heroicons-user" />
<UIcon name="i-heroicons-cog-6-tooth" />
```

#### Tabler Icons
```vue
<UIcon name="i-tabler-home" />
<UIcon name="i-tabler-user" />
<UIcon name="i-tabler-settings" />
```

## Forms & Validation

### Form Architecture

Nuxt UI provides a comprehensive form system with built-in validation support for multiple schema libraries.

#### Supported Validation Libraries

- **Valibot** (recommended)
- **Zod**
- **Yup**
- **Joi**
- **Superstruct**

### Basic Form Usage

```vue
<template>
  <UForm
    :schema="schema"
    :state="state"
    @submit="onSubmit"
    @error="onError"
    class="space-y-4"
  >
    <UFormField label="Name" name="name" required>
      <UInput v-model="state.name" placeholder="Enter your name" />
    </UFormField>
    
    <UFormField label="Email" name="email" required>
      <UInput 
        v-model="state.email" 
        type="email" 
        placeholder="Enter your email"
        icon="i-lucide-mail"
      />
    </UFormField>
    
    <UFormField label="Password" name="password" required>
      <UInput 
        v-model="state.password" 
        type="password" 
        placeholder="Enter your password"
      />
    </UFormField>
    
    <UButton type="submit" label="Submit" :loading="isSubmitting" />
  </UForm>
</template>

<script setup>
import { z } from 'zod'

// Define validation schema
const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters')
})

// Form state
const state = reactive({
  name: '',
  email: '',
  password: ''
})

const isSubmitting = ref(false)

// Submit handler
async function onSubmit(data) {
  isSubmitting.value = true
  try {
    await $fetch('/api/submit', {
      method: 'POST',
      body: data
    })
    console.log('Form submitted successfully!')
  } catch (error) {
    console.error('Submission failed:', error)
  } finally {
    isSubmitting.value = false
  }
}

// Error handler
function onError(event) {
  console.log('Validation errors:', event.errors)
}
</script>
```

### Advanced Form Features

#### 1. Custom Validation

```vue
<script setup>
// Custom validation function
const validate = (state) => {
  const errors = []
  
  if (!state.name) {
    errors.push({ path: 'name', message: 'Name is required' })
  }
  
  if (state.password !== state.confirmPassword) {
    errors.push({ path: 'confirmPassword', message: 'Passwords do not match' })
  }
  
  return errors
}
</script>

<template>
  <UForm :validate="validate" :state="state" @submit="onSubmit">
    <!-- Form fields -->
  </UForm>
</template>
```

#### 2. Nested Forms

```vue
<script setup>
const schema = z.object({
  user: z.object({
    name: z.string(),
    email: z.string().email()
  }),
  address: z.object({
    street: z.string(),
    city: z.string(),
    zipCode: z.string()
  })
})

const state = reactive({
  user: {
    name: '',
    email: ''
  },
  address: {
    street: '',
    city: '',
    zipCode: ''
  }
})
</script>

<template>
  <UForm :schema="schema" :state="state" @submit="onSubmit">
    <fieldset>
      <legend>User Information</legend>
      <UFormField label="Name" name="user.name">
        <UInput v-model="state.user.name" />
      </UFormField>
      
      <UFormField label="Email" name="user.email">
        <UInput v-model="state.user.email" type="email" />
      </UFormField>
    </fieldset>
    
    <fieldset>
      <legend>Address</legend>
      <UFormField label="Street" name="address.street">
        <UInput v-model="state.address.street" />
      </UFormField>
      
      <UFormField label="City" name="address.city">
        <UInput v-model="state.address.city" />
      </UFormField>
    </fieldset>
  </UForm>
</template>
```

#### 3. Dynamic Form Fields

```vue
<script setup>
const state = reactive({
  items: [{ name: '', quantity: 1 }]
})

function addItem() {
  state.items.push({ name: '', quantity: 1 })
}

function removeItem(index) {
  state.items.splice(index, 1)
}
</script>

<template>
  <UForm :state="state" @submit="onSubmit">
    <div v-for="(item, index) in state.items" :key="index" class="flex gap-2">
      <UFormField :label="`Item ${index + 1} Name`" :name="`items.${index}.name`">
        <UInput v-model="item.name" />
      </UFormField>
      
      <UFormField :label="`Item ${index + 1} Quantity`" :name="`items.${index}.quantity`">
        <UInput v-model="item.quantity" type="number" />
      </UFormField>
      
      <UButton 
        @click="removeItem(index)" 
        icon="i-lucide-x" 
        variant="ghost" 
        color="red"
      />
    </div>
    
    <UButton @click="addItem" icon="i-lucide-plus" label="Add Item" />
  </UForm>
</template>
```

### Form Components Deep Dive

#### UInput Variations

```vue
<template>
  <!-- Basic input -->
  <UInput v-model="basic" placeholder="Basic input" />
  
  <!-- Input with icons -->
  <UInput 
    v-model="search" 
    icon="i-lucide-search"
    trailing-icon="i-lucide-x"
    placeholder="Search..."
  />
  
  <!-- Input with loading state -->
  <UInput v-model="loading" :loading="isLoading" />
  
  <!-- Input sizes -->
  <UInput v-model="small" size="sm" placeholder="Small input" />
  <UInput v-model="large" size="lg" placeholder="Large input" />
  
  <!-- Input variants -->
  <UInput v-model="outline" variant="outline" placeholder="Outline" />
  <UInput v-model="soft" variant="soft" placeholder="Soft" />
  
  <!-- File input -->
  <UInput type="file" @change="handleFileChange" />
</template>
```

#### USelect Usage

```vue
<script setup>
const selected = ref('')
const options = [
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' },
  { label: 'Option 3', value: 'opt3' }
]
</script>

<template>
  <USelect 
    v-model="selected"
    :options="options"
    placeholder="Select an option"
    searchable
    clearable
  />
</template>
```

## Keyboard Shortcuts

### defineShortcuts Composable

Nuxt UI provides a powerful `defineShortcuts` composable for keyboard navigation:

```vue
<script setup>
// Basic shortcuts
defineShortcuts({
  // Single key
  '?': () => openHelpModal(),
  
  // Key combinations
  'meta_k': () => openCommandPalette(),
  'ctrl_shift_d': () => toggleDarkMode(),
  
  // Key sequences
  'g-d': () => navigateTo('/dashboard'),
  'g-s': () => navigateTo('/settings'),
  
  // Arrow keys
  'arrowup': () => previousItem(),
  'arrowdown': () => nextItem(),
  
  // Escape key
  'escape': () => closeModal()
})

// Conditional shortcuts
defineShortcuts({
  'enter': {
    handler: () => submitForm(),
    // Only when not focusing on input
    usingInput: false
  },
  
  'meta_s': {
    handler: () => saveDocument(),
    // Prevent default browser save
    preventDefault: true
  }
})
</script>
```

### Platform-Specific Shortcuts

```vue
<script setup>
// Automatically adapts to platform
defineShortcuts({
  // Becomes 'ctrl_k' on Windows/Linux, 'meta_k' on Mac
  'meta_k': () => openSearch(),
  
  // Becomes 'ctrl_s' on Windows/Linux, 'meta_s' on Mac
  'meta_s': () => saveFile()
})
</script>
```

### Shortcut Configuration

```vue
<script setup>
defineShortcuts({
  'space': {
    handler: () => togglePlayPause(),
    // Only trigger when not in input fields
    usingInput: false,
    // Prevent default space scrolling
    preventDefault: true
  },
  
  'tab': {
    handler: () => nextField(),
    // Allow normal tab behavior in inputs
    usingInput: 'ignore'
  }
})
</script>
```

## Best Practices

### 1. Component Organization

```vue
<!-- ✅ Good: Clear component structure -->
<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-semibold">Card Title</h2>
        <UButton icon="i-lucide-settings" variant="ghost" />
      </div>
    </template>
    
    <div class="space-y-4">
      <p>Card content goes here.</p>
    </div>
    
    <template #footer>
      <div class="flex justify-end gap-2">
        <UButton variant="ghost" label="Cancel" />
        <UButton label="Save" />
      </div>
    </template>
  </UCard>
</template>
```

### 2. Consistent Styling

```vue
<script setup>
// ✅ Good: Centralized styling configuration
const cardConfig = {
  base: 'overflow-hidden',
  rounded: 'rounded-xl',
  shadow: 'shadow-lg',
  header: { padding: 'p-6' },
  body: { padding: 'p-6' },
  footer: { padding: 'p-6 bg-gray-50 dark:bg-gray-800' }
}
</script>

<template>
  <UCard :ui="cardConfig">
    <!-- Card content -->
  </UCard>
</template>
```

### 3. Accessibility

```vue
<!-- ✅ Good: Proper accessibility attributes -->
<template>
  <UButton
    :aria-label="isPlaying ? 'Pause video' : 'Play video'"
    :icon="isPlaying ? 'i-lucide-pause' : 'i-lucide-play'"
    @click="togglePlay"
  />
  
  <UModal
    v-model="isOpen"
    :aria-labelledby="modalTitleId"
    :aria-describedby="modalDescId"
  >
    <h2 :id="modalTitleId">Modal Title</h2>
    <p :id="modalDescId">Modal description</p>
  </UModal>
</template>
```

### 4. Performance Optimization

```vue
<script setup>
// ✅ Good: Lazy loading for large lists
const { data: items, pending } = await useLazyFetch('/api/items', {
  transform: (data) => data.map(item => ({
    label: item.name,
    value: item.id
  }))
})

// ✅ Good: Computed properties for filtered data
const filteredItems = computed(() => {
  if (!searchQuery.value) return items.value
  return items.value.filter(item => 
    item.label.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<template>
  <UInput v-model="searchQuery" placeholder="Search items..." />
  
  <USelect
    :options="filteredItems"
    :loading="pending"
    searchable
  />
</template>
```

### 5. Error Handling

```vue
<script setup>
const { $api } = useNuxtApp()

const state = reactive({
  email: '',
  password: ''
})

const { execute: login, status, error } = await useAsyncData('login', () =>
  $api.post('/auth/login', state), 
  { immediate: false }
)

const isLoading = computed(() => status.value === 'pending')
</script>

<template>
  <UForm :state="state" @submit="login">
    <UAlert
      v-if="error"
      icon="i-lucide-alert-circle"
      color="red"
      variant="soft"
      :title="error.message"
      class="mb-4"
    />
    
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" type="email" />
    </UFormField>
    
    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>
    
    <UButton 
      type="submit" 
      label="Sign In" 
      :loading="isLoading"
      block
    />
  </UForm>
</template>
```

## Integration with OneOctane

### Recommended Configuration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/icon', '@nuxt/image'],
  
  ui: {
    global: true,
    icons: ['lucide', 'heroicons']
  },
  
  css: ['~/assets/css/main.css']
})
```

```typescript
// app.config.ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',      // OneOctane primary brand color
      secondary: 'slate',   // Secondary actions
      success: 'emerald',   // Success states
      warning: 'amber',     // Warning states
      error: 'red',         // Error states
      neutral: 'zinc'       // Neutral elements
    },
    
    // OneOctane-specific component defaults
    button: {
      rounded: 'rounded-lg',
      size: {
        md: 'px-4 py-2.5 text-sm font-medium'
      }
    },
    
    card: {
      rounded: 'rounded-xl',
      shadow: 'shadow-sm',
      header: {
        padding: 'px-6 py-4'
      }
    },
    
    input: {
      rounded: 'rounded-lg',
      size: {
        md: 'px-3.5 py-2.5 text-sm'
      }
    }
  }
})
```

### OneOctane Component Patterns

#### Brand Management Card

```vue
<template>
  <UCard class="brand-card">
    <template #header>
      <div class="flex items-center gap-3">
        <UAvatar :src="brand.logo" :alt="brand.name" size="sm" />
        <div>
          <h3 class="font-semibold">{{ brand.name }}</h3>
          <p class="text-sm text-gray-500">{{ brand.industry }}</p>
        </div>
        <UDropdown :items="brandActions" class="ml-auto">
          <UButton icon="i-lucide-more-horizontal" variant="ghost" />
        </UDropdown>
      </div>
    </template>
    
    <div class="space-y-3">
      <p class="text-sm text-gray-600">{{ brand.description }}</p>
      
      <div class="flex gap-2">
        <UBadge 
          v-for="tag in brand.tags" 
          :key="tag"
          :label="tag"
          variant="soft"
        />
      </div>
    </div>
    
    <template #footer>
      <div class="flex justify-between items-center">
        <span class="text-sm text-gray-500">
          {{ brand.icpCount }} ICPs
        </span>
        
        <div class="flex gap-2">
          <UButton 
            icon="i-lucide-edit" 
            variant="ghost" 
            size="sm"
            @click="editBrand"
          />
          <UButton 
            icon="i-lucide-external-link" 
            variant="ghost" 
            size="sm"
            @click="viewBrand"
          />
        </div>
      </div>
    </template>
  </UCard>
</template>
```

#### ICP Creation Form

```vue
<template>
  <UForm :schema="icpSchema" :state="icpState" @submit="createICP">
    <div class="space-y-6">
      <div>
        <h2 class="text-lg font-semibold mb-4">Basic Information</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UFormField label="ICP Name" name="name" required>
            <UInput v-model="icpState.name" placeholder="Tech-Savvy Millennials" />
          </UFormField>
          
          <UFormField label="Industry" name="industry" required>
            <USelect 
              v-model="icpState.industry"
              :options="industryOptions"
              placeholder="Select industry"
            />
          </UFormField>
        </div>
        
        <UFormField label="Description" name="description" class="mt-4">
          <UTextarea 
            v-model="icpState.description"
            placeholder="Describe your ideal customer profile..."
            :rows="3"
          />
        </UFormField>
      </div>
      
      <div>
        <h3 class="text-base font-semibold mb-4">Demographics</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <UFormField label="Age Range Min" name="ageRangeMin">
            <UInput 
              v-model="icpState.ageRangeMin" 
              type="number"
              placeholder="25"
            />
          </UFormField>
          
          <UFormField label="Age Range Max" name="ageRangeMax">
            <UInput 
              v-model="icpState.ageRangeMax" 
              type="number"
              placeholder="40"
            />
          </UFormField>
          
          <UFormField label="Gender" name="gender">
            <USelect 
              v-model="icpState.gender"
              :options="genderOptions"
            />
          </UFormField>
        </div>
      </div>
      
      <div class="flex justify-end gap-3">
        <UButton variant="ghost" label="Cancel" @click="cancel" />
        <UButton 
          type="submit" 
          label="Create ICP" 
          :loading="isCreating"
          icon="i-lucide-plus"
        />
      </div>
    </div>
  </UForm>
</template>
```

### Conclusion

Nuxt UI v3 provides a comprehensive, modern component library that's perfect for building sophisticated applications like OneOctane. Its TypeScript-first approach, extensive customization options, and excellent developer experience make it an ideal choice for rapid development while maintaining design consistency and accessibility standards.

Key advantages for OneOctane:
- **Rapid Development**: Pre-built components accelerate development
- **Consistency**: Unified design system across the application
- **Customization**: Flexible theming for brand alignment
- **Accessibility**: Built-in accessibility features
- **Performance**: Optimized for Nuxt and modern web standards
- **Developer Experience**: Excellent TypeScript support and tooling

By following the patterns and best practices outlined in this guide, you'll be able to build a polished, professional application that leverages the full power of Nuxt UI.