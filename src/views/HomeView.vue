<template>
  <div class="home">
    <!-- Hero Section with Animation -->
    <section class="hero-section">
      <div class="hero-content" :class="{ 'animate': isAnimated }">
        <div class="welcome-animation">
          <h1 class="company-name">
            <span v-for="(letter, index) in 'EchoConstruction'" :key="index" 
                  :style="{ animationDelay: `${index * 0.1}s` }" 
                  class="letter">
              {{ letter }}
            </span>
          </h1>
          <p class="welcome-text" :class="{ 'fade-in': showWelcome }">
            Welcome to EchoConstruction - Building Your Dreams Into Reality
          </p>
          <div class="cta-buttons" :class="{ 'slide-up': showButtons }">
            <router-link to="/services" class="cta-button primary">Our Services</router-link>
            <router-link to="/contact" class="cta-button secondary">Get Quote</router-link>
          </div>
        </div>
      </div>
      <div class="hero-background">
        <div class="construction-overlay"></div>
      </div>
    </section>

    <!-- About Preview Section -->
    <section class="about-preview">
      <div class="container">
        <div class="content-grid">
          <div class="text-content">
            <h2>Excellence in Construction</h2>
            <p>
              With over two decades of experience, EchoConstruction has been the trusted partner 
              for residential and commercial construction projects. We pride ourselves on quality 
              craftsmanship, innovative solutions, and exceptional customer service.
            </p>
            <router-link to="/services" class="learn-more-btn">View Our Services</router-link>
          </div>
          <div class="image-content">
            <div class="placeholder-image">
              <span>Construction Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="services-preview">
      <div class="container">
        <h2>Our Services</h2>
        <div class="services-grid">
          <div class="service-card" v-for="service in previewServices" :key="service.id">
            <div class="service-icon">{{ service.icon }}</div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
        <div class="services-cta">
          <router-link to="/services" class="view-all-btn">View All Services</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isAnimated = ref(false)
const showWelcome = ref(false)
const showButtons = ref(false)

const previewServices = ref([
  {
    id: 1,
    icon: '🏗️',
    title: 'Construction',
    description: 'Comprehensive construction services for residential, commercial, and industrial projects.'
  },
  {
    id: 2,
    icon: '📋',
    title: 'Project Management',
    description: 'End-to-end project management ensuring timely delivery and quality results.'
  }
])

onMounted(() => {
  // Trigger animations in sequence
  setTimeout(() => {
    isAnimated.value = true
  }, 500)
  
  setTimeout(() => {
    showWelcome.value = true
  }, 2000)
  
  setTimeout(() => {
    showButtons.value = true
  }, 2800)
})
</script>

<style scoped>
.home {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23333" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.1;
}

.construction-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 40%, rgba(255, 165, 0, 0.05) 50%, transparent 60%);
}

.hero-content {
  text-align: center;
  z-index: 2;
  color: white;
  max-width: 800px;
  padding: 0 2rem;
}

.company-name {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ff6b35;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(50px);
  animation: letterDrop 0.6s ease-out forwards;
}

@keyframes letterDrop {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.welcome-text {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
  color: #e0e0e0;
}

.welcome-text.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.cta-buttons.slide-up {
  opacity: 1;
  transform: translateY(0);
}

.cta-button {
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.cta-button.primary {
  background: #ff6b35;
  color: white;
  border-color: #ff6b35;
}

.cta-button.primary:hover {
  background: #e55a2b;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 107, 53, 0.3);
}

.cta-button.secondary {
  background: transparent;
  color: #ff6b35;
  border-color: #ff6b35;
}

.cta-button.secondary:hover {
  background: #ff6b35;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 107, 53, 0.3);
}

/* About Preview Section */
.about-preview {
  padding: 5rem 0;
  background: #2a2a2a;
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.text-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #ff6b35;
}

.text-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #e0e0e0;
}

.learn-more-btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: transparent;
  color: #ff6b35;
  text-decoration: none;
  border: 2px solid #ff6b35;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.learn-more-btn:hover {
  background: #ff6b35;
  color: white;
}

.placeholder-image {
  height: 300px;
  background: linear-gradient(135deg, #333 0%, #555 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 1.2rem;
}

/* Services Preview Section */
.services-preview {
  padding: 5rem 0;
  background: #1a1a1a;
  color: white;
}

.services-preview h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #ff6b35;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.service-card {
  background: #2a2a2a;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #333;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(255, 107, 53, 0.1);
  border-color: #ff6b35;
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ff6b35;
}

.service-card p {
  color: #e0e0e0;
  line-height: 1.5;
}

.services-cta {
  text-align: center;
}

.view-all-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background: #ff6b35;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.view-all-btn:hover {
  background: #e55a2b;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 107, 53, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .company-name {
    font-size: 2.5rem;
  }
  
  .welcome-text {
    font-size: 1.2rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
