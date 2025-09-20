<template>
  <div class="home">
    <!-- Hero Section with Animation -->
    <section class="hero-section">
      <div class="hero-content" :class="{ 'animate': isAnimated }">
        <div class="welcome-animation">
          <h1 class="company-name">
            <span v-for="(letter, index) in 'EconoConstruction'" :key="index" 
                  :style="{ animationDelay: `${index * 0.1}s` }" 
                  class="letter">
              {{ letter }}
            </span>
          </h1>
          <p class="welcome-text" :class="{ 'fade-in': showWelcome }">
            Welcome to EconoConstruction - Building Your Dreams Into Reality
          </p>
          <div class="cta-buttons" :class="{ 'slide-up': showButtons }">
            <router-link to="/services" class="cta-button primary">Our Services</router-link>
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
            <div class="award-image">
              <img src="/images/icons/nhbrc-award.jpg" alt="NHBRC Award" />
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
            <div class="service-icon"><img :src="service.icon" :alt="service.title" /></div>
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
    icon: './images/icons/hotel.svg',
    title: 'Construction',
    description: 'Comprehensive construction services for residential, commercial, and industrial projects.'
  },
  {
    id: 2,
    icon: './images/icons/clipboard-list.svg',
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
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/images/IMG_6693-900x450.jpg') center/cover no-repeat;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  color: #1ABC9C;
  max-width: 800px;
  padding: 0 2rem;
}

.company-name {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1ABC9C !important;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
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
  color: #1ABC9C !important;
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
  background: #1ABC9C;
  color: white;
  border-color: #1ABC9C;
}

.cta-button.primary:hover {
  background: #16a085;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(26, 188, 156, 0.3);
}

.cta-button.secondary {
  background: transparent;
  color: #1ABC9C;
  border-color: #1ABC9C;
}

.cta-button.secondary:hover {
  background: #1ABC9C;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(26, 188, 156, 0.3);
}

/* About Preview Section */
.about-preview {
  padding: 5rem 0;
  background: #f5f5f5;
  color: #1ABC9C;
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
  color: #1ABC9C;
}

.text-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #1ABC9C;
}

.learn-more-btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: transparent;
  color: #1ABC9C;
  text-decoration: none;
  border: 2px solid #1ABC9C;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.learn-more-btn:hover {
  background: #1ABC9C;
  color: white;
}

.award-image {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.award-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

.placeholder-image {
  height: 300px;
  background: linear-gradient(135deg, #1ABC9C 0%, #16a085 100%);
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
  background: #f9f9f9;
  color: #1ABC9C;
}

.services-preview h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #1ABC9C;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.service-card {
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-bottom: 1px solid #e0e0e0;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(26, 188, 156, 0.1);
  border-color: #1ABC9C;
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1ABC9C;
}

.service-card p {
  color: #1ABC9C;
  line-height: 1.5;
}

.services-cta {
  text-align: center;
}

.view-all-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background: #1ABC9C;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.view-all-btn:hover {
  background: #16a085;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(26, 188, 156, 0.3);
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
