export default defineAppConfig({
  ui: {
    // OneOctane Color System
    colors: {
      primary: 'blue',      // OneOctane primary brand color (#0ea5e9)
      secondary: 'slate',   // Secondary actions and neutral elements
      success: 'emerald',   // Success states (#22c55e)
      warning: 'amber',     // Warning states (#f59e0b)
      error: 'red',         // Error states (#ef4444)
      info: 'blue',         // Informational states
      neutral: 'zinc'       // Neutral UI elements
    },

    // Global Border Radius
    borderRadius: {
      default: '0.5rem',    // 8px
      sm: '0.25rem',        // 4px
      lg: '0.75rem',        // 12px
      xl: '1rem',           // 16px
      '2xl': '1.5rem',      // 24px
      full: '9999px'
    },

    // Component-Specific Theming
    button: {
      base: 'font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
      rounded: 'rounded-lg',
      size: {
        xs: 'px-2 py-1 text-xs',
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2.5 text-sm',
        lg: 'px-6 py-3 text-base',
        xl: 'px-8 py-3.5 text-lg'
      },
      color: {
        primary: {
          solid: 'bg-primary-500 hover:bg-primary-600 text-white shadow-sm hover:shadow-md focus:ring-primary-500',
          outline: 'border border-primary-300 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
          soft: 'bg-primary-50 text-primary-600 hover:bg-primary-100 focus:ring-primary-500',
          ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500'
        },
        secondary: {
          solid: 'bg-gray-900 hover:bg-gray-800 text-white shadow-sm hover:shadow-md focus:ring-gray-500',
          outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
          soft: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500',
          ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500'
        }
      }
    },

    input: {
      base: 'block w-full transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
      rounded: 'rounded-lg',
      size: {
        sm: 'px-3 py-2 text-sm',
        md: 'px-3.5 py-2.5 text-sm',
        lg: 'px-4 py-3 text-base'
      },
      color: {
        primary: {
          outline: 'border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500',
          soft: 'border-0 bg-gray-100 text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-primary-500'
        }
      },
      icon: {
        base: 'flex-shrink-0 text-gray-400',
        size: {
          sm: 'h-4 w-4',
          md: 'h-5 w-5',
          lg: 'h-6 w-6'
        }
      }
    },

    card: {
      base: 'overflow-hidden transition-all duration-200',
      background: 'bg-white dark:bg-gray-900',
      divide: 'divide-y divide-gray-200 dark:divide-gray-800',
      ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
      rounded: 'rounded-xl',
      shadow: 'shadow-sm hover:shadow-md',
      header: {
        base: '',
        background: '',
        padding: 'px-6 py-4'
      },
      body: {
        base: '',
        background: '',
        padding: 'px-6 py-4'
      },
      footer: {
        base: '',
        background: 'bg-gray-50 dark:bg-gray-800/50',
        padding: 'px-6 py-4'
      }
    },

    modal: {
      base: 'relative w-full flex flex-col',
      background: 'bg-white dark:bg-gray-900',
      ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
      rounded: 'rounded-xl',
      shadow: 'shadow-xl',
      width: 'w-full sm:max-w-lg',
      height: '',
      fullscreen: 'w-screen h-screen',
      transition: {
        enter: 'duration-300 ease-out',
        enterFrom: 'opacity-0 scale-95',
        enterTo: 'opacity-100 scale-100',
        leave: 'duration-200 ease-in',
        leaveFrom: 'opacity-100 scale-100',
        leaveTo: 'opacity-0 scale-95'
      }
    },

    formField: {
      wrapper: 'space-y-2',
      label: {
        base: 'block text-sm font-medium text-gray-700 dark:text-gray-200',
        required: "after:content-['*'] after:ml-0.5 after:text-red-500"
      },
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base'
      },
      error: 'mt-1 text-sm text-red-600 dark:text-red-400',
      help: 'mt-1 text-sm text-gray-500 dark:text-gray-400'
    },

    select: {
      base: 'relative block w-full cursor-pointer transition-all duration-200',
      rounded: 'rounded-lg',
      size: {
        sm: 'px-3 py-2 text-sm',
        md: 'px-3.5 py-2.5 text-sm',
        lg: 'px-4 py-3 text-base'
      },
      color: {
        primary: {
          outline: 'border border-gray-300 bg-white text-gray-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500'
        }
      },
      icon: {
        base: 'flex-shrink-0 text-gray-400',
        size: {
          sm: 'h-4 w-4',
          md: 'h-5 w-5',
          lg: 'h-6 w-6'
        }
      }
    },

    textarea: {
      base: 'block w-full resize-y transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
      rounded: 'rounded-lg',
      size: {
        sm: 'px-3 py-2 text-sm',
        md: 'px-3.5 py-2.5 text-sm',
        lg: 'px-4 py-3 text-base'
      },
      color: {
        primary: {
          outline: 'border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500'
        }
      }
    },

    alert: {
      base: 'relative overflow-hidden w-full',
      background: '',
      ring: 'ring-1',
      rounded: 'rounded-lg',
      shadow: 'shadow-sm',
      padding: 'p-4',
      gap: 'gap-3',
      color: {
        primary: {
          solid: 'bg-primary-500 text-white ring-primary-500',
          soft: 'bg-primary-50 text-primary-600 ring-primary-200'
        },
        success: {
          solid: 'bg-success-500 text-white ring-success-500',
          soft: 'bg-success-50 text-success-600 ring-success-200'
        },
        warning: {
          solid: 'bg-warning-500 text-white ring-warning-500',
          soft: 'bg-warning-50 text-warning-600 ring-warning-200'
        },
        error: {
          solid: 'bg-error-500 text-white ring-error-500',
          soft: 'bg-error-50 text-error-600 ring-error-200'
        }
      }
    },

    badge: {
      base: 'inline-flex items-center font-medium',
      rounded: 'rounded-full',
      font: 'font-medium',
      size: {
        xs: 'px-2 py-0.5 text-xs',
        sm: 'px-2.5 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-3.5 py-1 text-sm'
      },
      color: {
        primary: {
          solid: 'bg-primary-500 text-white',
          soft: 'bg-primary-100 text-primary-700'
        },
        secondary: {
          solid: 'bg-gray-500 text-white',
          soft: 'bg-gray-100 text-gray-700'
        },
        success: {
          solid: 'bg-success-500 text-white',
          soft: 'bg-success-100 text-success-700'
        },
        warning: {
          solid: 'bg-warning-500 text-white',
          soft: 'bg-warning-100 text-warning-700'
        },
        error: {
          solid: 'bg-error-500 text-white',
          soft: 'bg-error-100 text-error-700'
        }
      }
    },

    avatar: {
      base: 'relative inline-flex items-center justify-center flex-shrink-0',
      background: 'bg-gray-100 dark:bg-gray-800',
      rounded: 'rounded-full',
      text: 'font-medium text-gray-700 dark:text-gray-200 truncate',
      placeholder: 'bg-gray-100 dark:bg-gray-800',
      size: {
        xs: 'h-6 w-6 text-xs',
        sm: 'h-8 w-8 text-sm',
        md: 'h-10 w-10 text-base',
        lg: 'h-12 w-12 text-lg',
        xl: 'h-16 w-16 text-xl',
        '2xl': 'h-20 w-20 text-2xl',
        '3xl': 'h-24 w-24 text-3xl'
      }
    },

    // Navigation Components
    breadcrumb: {
      base: 'flex items-center space-x-2 text-sm',
      item: {
        base: 'flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-200',
        active: 'text-gray-900 font-medium'
      },
      divider: {
        base: 'flex-shrink-0 text-gray-400'
      }
    },

    tabs: {
      wrapper: 'space-y-4',
      list: {
        base: 'relative flex items-center justify-start w-full',
        background: 'bg-gray-100 dark:bg-gray-800',
        rounded: 'rounded-lg',
        shadow: '',
        padding: 'p-1',
        height: 'h-10',
        marker: {
          wrapper: 'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none',
          base: 'w-full h-full',
          background: 'bg-white dark:bg-gray-900',
          rounded: 'rounded-md',
          shadow: 'shadow-sm'
        },
        tab: {
          base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-75',
          background: '',
          active: 'text-gray-900 dark:text-white',
          inactive: 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200',
          height: 'h-8',
          padding: 'px-3',
          size: 'text-sm',
          font: 'font-medium',
          rounded: 'rounded-md',
          shadow: ''
        }
      }
    },

    // Default Icons (using Lucide)
    icons: {
      // Navigation icons
      chevronDown: 'i-lucide-chevron-down',
      chevronRight: 'i-lucide-chevron-right',
      chevronLeft: 'i-lucide-chevron-left',
      chevronUp: 'i-lucide-chevron-up',
      
      // Action icons
      check: 'i-lucide-check',
      close: 'i-lucide-x',
      search: 'i-lucide-search',
      plus: 'i-lucide-plus',
      minus: 'i-lucide-minus',
      edit: 'i-lucide-edit',
      trash: 'i-lucide-trash-2',
      save: 'i-lucide-save',
      
      // State icons
      loading: 'i-lucide-loader-2',
      success: 'i-lucide-check-circle',
      warning: 'i-lucide-alert-triangle',
      error: 'i-lucide-alert-circle',
      info: 'i-lucide-info',
      
      // Media icons
      play: 'i-lucide-play',
      pause: 'i-lucide-pause',
      stop: 'i-lucide-square',
      
      // File icons
      file: 'i-lucide-file',
      folder: 'i-lucide-folder',
      download: 'i-lucide-download',
      upload: 'i-lucide-upload',
      
      // Social icons
      external: 'i-lucide-external-link',
      link: 'i-lucide-link',
      mail: 'i-lucide-mail',
      
      // UI icons
      menu: 'i-lucide-menu',
      more: 'i-lucide-more-horizontal',
      settings: 'i-lucide-settings',
      user: 'i-lucide-user',
      home: 'i-lucide-home',
      dashboard: 'i-lucide-layout-dashboard',
      
      // Brand/OneOctane specific
      brand: 'i-lucide-tag',
      icp: 'i-lucide-users',
      analytics: 'i-lucide-bar-chart-3',
      content: 'i-lucide-file-text',
      campaign: 'i-lucide-megaphone'
    }
  }
})