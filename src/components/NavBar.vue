<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }" role="navigation" aria-label="Main navigation">
    <div class="nav-container">
      <!-- Logo -->
      <router-link to="/" class="nav-logo" aria-label="Econo Construction Home">
        <img src="/images/icons/econoconstruction.png" alt="Econo Construction Logo - Professional Building Services" class="logo-img" loading="lazy" width="40" height="40">
        <span class="logo-text">Econo Construction</span>
      </router-link>

      <!-- Desktop Navigation -->
      <div class="nav-menu" :class="{ 'active': isMobileMenuOpen }" role="menubar" aria-label="Main menu">
        <router-link 
          v-for="item in navigationItems" 
          :key="item.name"
          :to="item.path" 
          class="nav-link"
          role="menuitem"
          @click="closeMobileMenu"
          :aria-current="item.path === $route.path ? 'page' : undefined"
        >
          {{ item.name }}
        </router-link>
      </div>

      <!-- Mobile Menu Toggle -->
      <button 
        class="nav-toggle" 
        @click="toggleMobileMenu"
        :aria-expanded="isMobileMenuOpen"
        :aria-controls="mobileMenuId"
        :aria-label="isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
      >
        <span class="bar" :class="{ 'active': isMobileMenuOpen }"></span>
        <span class="bar" :class="{ 'active': isMobileMenuOpen }"></span>
        <span class="bar" :class="{ 'active': isMobileMenuOpen }"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const mobileMenuId = ref('mobile-menu')

const navigationItems = ref([
  { name: 'Home', path: '/', ariaLabel: 'Navigate to home page' },
  { name: 'Services', path: '/services', ariaLabel: 'View our construction services' },
  { name: 'Contact', path: '/contact', ariaLabel: 'Contact Econo Construction' }
])

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #333333;
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(26, 26, 26, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.nav-logo {
  text-decoration: none;
  color: #ffffff;
  font-size: 3rem;
  font-weight: 700;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-img {
  height: 60px;
  width: auto;
  transition: transform 0.3s ease;
  filter: brightness(0) invert(1);
}

.nav-logo:hover .logo-img {
  transform: scale(1.05);
}

.logo-text {
  background: linear-gradient(135deg, #ffffff 0%, #e9e9e9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: #e0e0e0;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.6rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
}

.nav-link.router-link-active {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: #ffffff;
  border-radius: 1px;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem;
}

.bar {
  width: 25px;
  height: 3px;
  background: #e0e0e0;
  margin: 3px 0;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.bar.active:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
  background: #ffffff;
}

.bar.active:nth-child(2) {
  opacity: 0;
}

.bar.active:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
  background: #f5f5f5;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background: rgba(26, 26, 26, 0.98);
    backdrop-filter: blur(10px);
    width: 100%;
    text-align: center;
    transition: 0.3s ease;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.5);
    border-top: 1px solid #333333;
    padding: 2rem 0;
    gap: 0.5rem;
    max-height: calc(100vh - 70px);
    overflow-y: auto;
    list-style: none;
    margin: 0;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-link {
    padding: 1.2rem 2rem;
    width: 100%;
    font-size: 1.4rem;
    color: #e0e0e0;
    border-radius: 0;
    transition: all 0.3s ease;
  }

  .nav-link:hover {
    background: rgba(255, 107, 53, 0.15);
    color: #ffffff;
  }

  .nav-link.router-link-active {
    background: rgba(255, 107, 53, 0.2);
    color: #ffffff;
  }

  .nav-link.router-link-active::after {
    display: none;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 1rem;
    height: 60px;
  }
  
  .navbar {
    height: 60px;
  }
  
  .nav-logo {
    font-size: 1.8rem;
  }
  
  .logo-img {
    height: 35px;
  }
  
  .nav-menu {
    top: 60px;
    max-height: calc(100vh - 60px);
  }
  
  .nav-link {
    font-size: 1.2rem;
    padding: 1rem 1.5rem;
  }
  
  .nav-toggle {
    padding: 0.3rem;
  }
  
  .bar {
    width: 22px;
    height: 2px;
    margin: 2px 0;
  }
}

/* Tablet Optimization */
@media (min-width: 769px) and (max-width: 1024px) {
  .nav-container {
    padding: 0 1.5rem;
  }
  
  .nav-logo {
    font-size: 2.5rem;
  }
  
  .logo-img {
    height: 50px;
  }
  
  .nav-menu {
    gap: 1.5rem;
  }
  
  .nav-link {
    font-size: 1.4rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>
