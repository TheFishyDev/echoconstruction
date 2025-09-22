<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <!-- Logo -->
      <router-link to="/" class="nav-logo">
        <img src="/images/icons/econoconstruction.png" alt="Econo Construction Logo" class="logo-img">
        <span class="logo-text">Econo Construction</span>
      </router-link>

      <!-- Desktop Navigation -->
      <div class="nav-menu" :class="{ 'active': isMobileMenuOpen }">
        <router-link 
          v-for="item in navigationItems" 
          :key="item.name"
          :to="item.path" 
          class="nav-link"
          @click="closeMobileMenu"
        >
          {{ item.name }}
        </router-link>
      </div>

      <!-- Mobile Menu Toggle -->
      <div class="nav-toggle" @click="toggleMobileMenu">
        <span class="bar" :class="{ 'active': isMobileMenuOpen }"></span>
        <span class="bar" :class="{ 'active': isMobileMenuOpen }"></span>
        <span class="bar" :class="{ 'active': isMobileMenuOpen }"></span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navigationItems = ref([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' }
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
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e0e0e0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
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
  color: #1ABC9C;
  font-size: 1.8rem;
  font-weight: 700;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-img {
  height: 40px;
  width: auto;
  transition: transform 0.3s ease;
}

.nav-logo:hover .logo-img {
  transform: scale(1.05);
}

.logo-text {
  background: linear-gradient(135deg, #16a085 0%, #1abc9c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: #666;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #16a085;
  background: rgba(26, 160, 133, 0.1);
}

.nav-link.router-link-active {
  color: #16a085;
  background: rgba(26, 160, 133, 0.15);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: #f5f5f5;
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
  background: #16a085;
  margin: 3px 0;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.bar.active:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
  background: #f5f5f5;
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
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.3);
    border-top: 1px solid #333;
    padding: 2rem 0;
    gap: 1rem;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-link {
    padding: 1rem 2rem;
    width: 100%;
    font-size: 1.1rem;
  }

  .nav-link:hover {
    background: rgba(255, 107, 53, 0.2);
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 1rem;
  }
  
  .nav-logo {
    font-size: 1.5rem;
  }
}
</style>
