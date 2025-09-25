import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Econo Construction | Professional Building Services in South Africa',
        description: 'Econo Construction provides professional building and construction services in South Africa. With over 70 years of experience in residential and commercial construction.',
        keywords: 'construction, building, renovation, residential, commercial, South Africa, Econo Construction',
        canonical: 'https://econoconstruction.co.za/'
      }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
      meta: {
        title: 'Our Construction Services | Econo Construction',
        description: 'Comprehensive construction services including residential building, commercial construction, renovations, and project management. Expert construction solutions in South Africa.',
        keywords: 'construction services, building services, residential construction, commercial construction, renovation, project management',
        canonical: 'https://econoconstruction.co.za/services'
      }
    },
    {
      path: '/services/construction',
      name: 'construction-service',
      component: () => import('../views/ServicesView.vue'),
      meta: {
        title: 'Construction Services | Econo Construction',
        description: 'Professional construction services for residential and commercial projects. Quality building solutions with decades of experience.',
        keywords: 'construction services, building contractors, residential construction, commercial construction',
        canonical: 'https://econoconstruction.co.za/services/construction'
      }
    },
    {
      path: '/services/project-management',
      name: 'project-management-service',
      component: () => import('../views/ServicesView.vue'),
      meta: {
        title: 'Project Management Services | Econo Construction',
        description: 'Expert construction project management services. Professional oversight of building projects from planning to completion.',
        keywords: 'project management, construction management, building projects, project oversight',
        canonical: 'https://econoconstruction.co.za/services/project-management'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: 'Contact Econo Construction | Building Services South Africa',
        description: 'Contact Econo Construction for professional building and construction services in South Africa. Get a quote for your construction project today.',
        keywords: 'contact construction, building quote, construction services South Africa, Econo Construction contact',
        canonical: 'https://econoconstruction.co.za/contact'
      }
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../views/PrivacyView.vue'),
      meta: {
        title: 'Privacy Policy | Econo Construction',
        description: 'Privacy Policy for Econo Construction. Learn how we protect your personal information when you use our construction services.',
        keywords: 'privacy policy, data protection, personal information, construction services',
        canonical: 'https://econoconstruction.co.za/privacy'
      }
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/TermsView.vue'),
      meta: {
        title: 'Terms of Service | Econo Construction',
        description: 'Terms of Service for Econo Construction. Understand the terms and conditions for using our construction and building services.',
        keywords: 'terms of service, construction terms, building services terms, conditions',
        canonical: 'https://econoconstruction.co.za/terms'
      }
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      component: () => import('../views/SitemapView.vue'),
      meta: {
        title: 'Sitemap | Econo Construction',
        description: 'Sitemap for Econo Construction website. Navigate through our construction services, company information, and contact details.',
        keywords: 'sitemap, website navigation, construction services, building company',
        canonical: 'https://econoconstruction.co.za/sitemap'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: {
        title: 'Page Not Found | Econo Construction',
        description: 'The page you are looking for cannot be found. Visit our homepage to learn about our construction services.',
        keywords: '404, page not found, construction services, building company',
        canonical: 'https://econoconstruction.co.za/'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Global navigation guard to update meta tags
router.beforeEach((to, from, next) => {
  // Update document title
  document.title = to.meta.title || 'Econo Construction | Professional Building Services'
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || 'Econo Construction provides professional building and construction services in South Africa.')
  }
  
  // Update meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]')
  if (metaKeywords) {
    metaKeywords.setAttribute('content', to.meta.keywords || 'construction, building, renovation, residential, commercial, South Africa')
  }
  
  // Update canonical URL
  let canonicalLink = document.querySelector('link[rel="canonical"]')
  if (canonicalLink) {
    canonicalLink.setAttribute('href', to.meta.canonical || 'https://econoconstruction.co.za/')
  }
  
  // Update Open Graph tags
  let ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) {
    ogTitle.setAttribute('content', to.meta.title || 'Econo Construction | Professional Building Services')
  }
  
  let ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription) {
    ogDescription.setAttribute('content', to.meta.description || 'Econo Construction provides professional building and construction services in South Africa.')
  }
  
  let ogUrl = document.querySelector('meta[property="og:url"]')
  if (ogUrl) {
    ogUrl.setAttribute('content', to.meta.canonical || 'https://econoconstruction.co.za/')
  }
  
  next()
})

export default router
