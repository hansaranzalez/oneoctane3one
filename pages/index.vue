<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <header class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div class="container-oneoctane">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center space-x-3">
            <UIcon 
              name="i-lucide-layout-dashboard" 
              class="w-8 h-8 text-primary-600" 
            />
            <h1 class="heading-5 text-gray-900 dark:text-white">
              OneOctane
            </h1>
          </div>

          <!-- Navigation -->
          <nav class="hidden md:flex items-center space-x-6">
            <UButton 
              variant="ghost" 
              label="Brands" 
              icon="i-lucide-tag"
            />
            <UButton 
              variant="ghost" 
              label="ICPs" 
              icon="i-lucide-users"
            />
            <UButton 
              variant="ghost" 
              label="Analytics" 
              icon="i-lucide-bar-chart-3"
            />
          </nav>

          <!-- Actions -->
          <div class="flex items-center space-x-3">
            <UButton 
              @click="toggleColorMode" 
              :icon="colorModeIcon" 
              variant="ghost"
              size="sm"
            />
            <UDropdown :items="userMenuItems">
              <UAvatar 
                src="https://avatar.vercel.sh/oneoctane" 
                alt="User Avatar"
                size="sm"
              />
            </UDropdown>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container-oneoctane py-8">
      <!-- Hero Section -->
      <section class="text-center mb-12">
        <div class="animate-fade-in">
          <h1 class="heading-display mb-4 text-gray-900 dark:text-white">
            Welcome to OneOctane
          </h1>
          <p class="body-large text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Your comprehensive brand management and ideal customer profiling platform. 
            Create, manage, and optimize your brand strategy with powerful AI-driven insights.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton 
              label="Create Brand" 
              icon="i-lucide-plus"
              size="lg"
              @click="showCreateBrandModal = true"
            />
            <UButton 
              label="View Analytics" 
              icon="i-lucide-bar-chart-3"
              variant="outline"
              size="lg"
            />
          </div>
        </div>
      </section>

      <!-- Feature Cards -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <!-- Brand Management Card -->
        <UCard class="brand-card">
          <template #header>
            <div class="flex items-center space-x-3">
              <div class="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <UIcon name="i-lucide-tag" class="w-6 h-6 text-primary-600" />
              </div>
              <h3 class="heading-6 text-gray-900 dark:text-white">
                Brand Management
              </h3>
            </div>
          </template>
          
          <div class="space-y-3">
            <p class="body-small text-gray-600 dark:text-gray-300">
              Create and manage your brand identity with comprehensive tools for voice, 
              visual elements, and content guidelines.
            </p>
            
            <div class="flex flex-wrap gap-2">
              <UBadge label="Brand Voice" variant="soft" color="primary" />
              <UBadge label="Visual Identity" variant="soft" color="secondary" />
              <UBadge label="Guidelines" variant="soft" color="success" />
            </div>
          </div>

          <template #footer>
            <UButton 
              label="Manage Brands" 
              icon="i-lucide-arrow-right"
              variant="ghost"
              size="sm"
              block
            />
          </template>
        </UCard>

        <!-- ICP Management Card -->
        <UCard class="icp-card">
          <template #header>
            <div class="flex items-center space-x-3">
              <div class="p-2 bg-success-100 dark:bg-success-900/30 rounded-lg">
                <UIcon name="i-lucide-users" class="w-6 h-6 text-success-600" />
              </div>
              <h3 class="heading-6 text-gray-900 dark:text-white">
                ICP Profiling
              </h3>
            </div>
          </template>
          
          <div class="space-y-3">
            <p class="body-small text-gray-600 dark:text-gray-300">
              Define and analyze your ideal customer profiles with detailed demographics, 
              psychographics, and behavioral patterns.
            </p>
            
            <div class="flex flex-wrap gap-2">
              <UBadge label="Demographics" variant="soft" color="success" />
              <UBadge label="Behavior" variant="soft" color="info" />
              <UBadge label="Insights" variant="soft" color="warning" />
            </div>
          </div>

          <template #footer>
            <UButton 
              label="Create ICP" 
              icon="i-lucide-arrow-right"
              variant="ghost"
              size="sm"
              block
            />
          </template>
        </UCard>

        <!-- Content Strategy Card -->
        <UCard class="content-strategy-card">
          <template #header>
            <div class="flex items-center space-x-3">
              <div class="p-2 bg-warning-100 dark:bg-warning-900/30 rounded-lg">
                <UIcon name="i-lucide-megaphone" class="w-6 h-6 text-warning-600" />
              </div>
              <h3 class="heading-6 text-gray-900 dark:text-white">
                Content Strategy
              </h3>
            </div>
          </template>
          
          <div class="space-y-3">
            <p class="body-small text-gray-600 dark:text-gray-300">
              Generate AI-powered content strategies tailored to your brand 
              and ideal customer profiles.
            </p>
            
            <div class="flex flex-wrap gap-2">
              <UBadge label="AI-Powered" variant="soft" color="warning" />
              <UBadge label="Multi-Platform" variant="soft" color="error" />
              <UBadge label="Analytics" variant="soft" color="neutral" />
            </div>
          </div>

          <template #footer>
            <UButton 
              label="Generate Strategy" 
              icon="i-lucide-arrow-right"
              variant="ghost"
              size="sm"
              block
            />
          </template>
        </UCard>
      </section>

      <!-- Quick Stats -->
      <section class="mb-12">
        <h2 class="heading-4 text-gray-900 dark:text-white mb-6">
          Quick Overview
        </h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between">
              <div>
                <p class="label-small text-gray-500 dark:text-gray-400">Total Brands</p>
                <p class="heading-3 text-gray-900 dark:text-white">{{ stats.brands }}</p>
              </div>
              <UIcon name="i-lucide-tag" class="w-8 h-8 text-primary-500" />
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between">
              <div>
                <p class="label-small text-gray-500 dark:text-gray-400">Active ICPs</p>
                <p class="heading-3 text-gray-900 dark:text-white">{{ stats.icps }}</p>
              </div>
              <UIcon name="i-lucide-users" class="w-8 h-8 text-success-500" />
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between">
              <div>
                <p class="label-small text-gray-500 dark:text-gray-400">Campaigns</p>
                <p class="heading-3 text-gray-900 dark:text-white">{{ stats.campaigns }}</p>
              </div>
              <UIcon name="i-lucide-megaphone" class="w-8 h-8 text-warning-500" />
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between">
              <div>
                <p class="label-small text-gray-500 dark:text-gray-400">Engagement</p>
                <p class="heading-3 text-gray-900 dark:text-white">{{ stats.engagement }}%</p>
              </div>
              <UIcon name="i-lucide-trending-up" class="w-8 h-8 text-info-500" />
            </div>
          </div>
        </div>
      </section>

      <!-- Recent Activity -->
      <section>
        <div class="flex items-center justify-between mb-6">
          <h2 class="heading-4 text-gray-900 dark:text-white">
            Recent Activity
          </h2>
          <UButton 
            label="View All" 
            variant="ghost" 
            size="sm"
            icon="i-lucide-arrow-right"
          />
        </div>

        <UCard>
          <div class="divide-y divide-gray-200 dark:divide-gray-700">
            <div 
              v-for="activity in recentActivities" 
              :key="activity.id"
              class="flex items-start space-x-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <div class="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <UIcon :name="activity.icon" class="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </div>
              
              <div class="flex-1 min-w-0">
                <p class="body-small text-gray-900 dark:text-white">
                  {{ activity.title }}
                </p>
                <p class="caption text-gray-500 dark:text-gray-400">
                  {{ activity.description }}
                </p>
              </div>
              
              <time class="caption text-gray-500 dark:text-gray-400">
                {{ activity.time }}
              </time>
            </div>
          </div>
        </UCard>
      </section>
    </main>

    <!-- Create Brand Modal -->
    <UModal v-model="showCreateBrandModal">
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="heading-5 text-gray-900 dark:text-white">
              Create New Brand
            </h3>
            <UButton 
              @click="showCreateBrandModal = false"
              icon="i-lucide-x"
              variant="ghost"
              size="sm"
            />
          </div>
        </template>

        <UForm :state="brandForm" @submit="createBrand" class="space-y-4">
          <UFormField label="Brand Name" name="name" required>
            <UInput 
              v-model="brandForm.name" 
              placeholder="Enter brand name"
            />
          </UFormField>

          <UFormField label="Industry" name="industry" required>
            <USelect 
              v-model="brandForm.industry"
              :options="industryOptions"
              placeholder="Select industry"
            />
          </UFormField>

          <UFormField label="Description" name="description">
            <UTextarea 
              v-model="brandForm.description"
              placeholder="Describe your brand..."
              :rows="3"
            />
          </UFormField>
        </UForm>

        <template #footer>
          <div class="flex justify-end space-x-3">
            <UButton 
              @click="showCreateBrandModal = false"
              variant="ghost"
              label="Cancel"
            />
            <UButton 
              @click="createBrand"
              label="Create Brand"
              icon="i-lucide-plus"
              :loading="isCreatingBrand"
            />
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
// Composables
const colorMode = useColorMode()

// Reactive data
const showCreateBrandModal = ref(false)
const isCreatingBrand = ref(false)

const brandForm = reactive({
  name: '',
  industry: '',
  description: ''
})

const stats = reactive({
  brands: 12,
  icps: 8,
  campaigns: 24,
  engagement: 87
})

// Computed
const colorModeIcon = computed(() => 
  colorMode.value === 'dark' ? 'i-lucide-sun' : 'i-lucide-moon'
)

// Data
const industryOptions = [
  { label: 'Technology', value: 'TECH' },
  { label: 'Healthcare', value: 'HEALTHCARE' },
  { label: 'Finance', value: 'FINANCE' },
  { label: 'Education', value: 'EDUCATION' },
  { label: 'Retail', value: 'RETAIL' },
  { label: 'Manufacturing', value: 'MANUFACTURING' }
]

const userMenuItems = [
  [{
    label: 'Profile',
    icon: 'i-lucide-user',
    click: () => console.log('Profile clicked')
  }],
  [{
    label: 'Settings',
    icon: 'i-lucide-settings',
    click: () => console.log('Settings clicked')
  }],
  [{
    label: 'Sign Out',
    icon: 'i-lucide-log-out',
    click: () => console.log('Sign out clicked')
  }]
]

const recentActivities = [
  {
    id: 1,
    title: 'Created new brand "TechStart"',
    description: 'Technology startup brand with modern identity',
    icon: 'i-lucide-tag',
    time: '2 hours ago'
  },
  {
    id: 2,
    title: 'Updated ICP "Tech Millennials"',
    description: 'Added new behavioral insights and demographics',
    icon: 'i-lucide-users',
    time: '4 hours ago'
  },
  {
    id: 3,
    title: 'Generated content strategy',
    description: 'AI-powered strategy for Q1 2024 campaigns',
    icon: 'i-lucide-megaphone',
    time: '1 day ago'
  },
  {
    id: 4,
    title: 'Brand analytics updated',
    description: 'Monthly performance metrics and insights',
    icon: 'i-lucide-bar-chart-3',
    time: '2 days ago'
  }
]

// Methods
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const createBrand = async () => {
  isCreatingBrand.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Reset form
    Object.assign(brandForm, {
      name: '',
      industry: '',
      description: ''
    })
    
    // Close modal
    showCreateBrandModal.value = false
    
    // Show success notification
    console.log('Brand created successfully!')
    
    // Update stats
    stats.brands++
    
  } catch (error) {
    console.error('Failed to create brand:', error)
  } finally {
    isCreatingBrand.value = false
  }
}

// SEO
useSeoMeta({
  title: 'OneOctane - Brand Management & ICP Platform',
  ogTitle: 'OneOctane - Brand Management & ICP Platform',
  description: 'Comprehensive brand management and ideal customer profiling platform with AI-powered insights.',
  ogDescription: 'Comprehensive brand management and ideal customer profiling platform with AI-powered insights.',
  ogImage: 'https://oneoctane.com/og-image.png',
  twitterCard: 'summary_large_image'
})

// Keyboard shortcuts
defineShortcuts({
  'meta_k': () => {
    console.log('Search shortcut triggered')
  },
  'c': () => {
    showCreateBrandModal.value = true
  },
  'escape': () => {
    showCreateBrandModal.value = false
  }
})
</script>

<style scoped>
/* Component-specific styles if needed */
</style>