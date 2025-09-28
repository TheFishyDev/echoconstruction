<template>
  <div class="home">
    <!-- Hero Section with Animation -->
    <header class="hero-section" role="banner" aria-label="Econo Construction Hero Section">
      <div class="hero-content" :class="{ 'animate': isAnimated }">
        <div class="welcome-animation">
          <h1 class="company-name">
            <span v-for="(word, wordIndex) in ['Econo', 'Construction']" :key="wordIndex" class="word-group">
              <span v-for="(letter, letterIndex) in word" :key="`${wordIndex}-${letterIndex}`" 
                    :style="{ animationDelay: `${(wordIndex * word.length + letterIndex) * 0.1}s` }" 
                    class="letter">
                {{ letter }}
              </span>
              <span v-if="wordIndex < 1" class="space" :style="{ animationDelay: `${(wordIndex * word.length + word.length) * 0.1}s` }">&nbsp;</span>
            </span>
          </h1>
          <p class="welcome-text" :class="{ 'fade-in': showWelcome }">
            EXCELLENCE - TRUSTED - PRIDE - QUALITY - ON TIME
          </p>
          <div class="cta-buttons" :class="{ 'slide-up': showButtons }">
            <router-link to="/services" class="cta-button primary" aria-label="View our construction services">Our Services</router-link>
          </div>
        </div>
      </div>
      <div class="hero-background">
        <div class="construction-overlay"></div>
      </div>
    </header>

    <!-- About Preview Section -->
    <section class="about-preview" aria-labelledby="about-heading">
      <div class="container">
        <div class="content-grid">
          <div class="text-content">
            <h2 id="about-heading">Excellence in Construction</h2>
            <p>
              With over 7 decades of experience, Econo Construction has been the trusted partner 
              for residential and commercial construction projects. We pride ourselves on quality 
              craftsmanship, innovative solutions, and exceptional customer service.
            </p>
            <router-link to="/services" class="learn-more-btn" aria-label="Learn more about our construction services">View Our Services</router-link>
          </div>
          <div class="image-content">
            <div class="award-image">
              <img src="/images/icons/nhbrc-award.jpg" alt="NHBRC Certification Award - Professional Construction Excellence" loading="lazy" width="300" height="200" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <main class="services-preview" aria-labelledby="services-heading">
      <div class="container">
        <h2 id="services-heading">Our Services</h2>
        <div class="services-grid" role="list" aria-label="Construction services">
          <article class="service-card" v-for="service in previewServices" :key="service.id" role="listitem">
            <div class="service-icon">
              <img :src="service.icon" :alt="`${service.title} service icon`" loading="lazy" width="48" height="48" />
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </article>
        </div>
        
        <section class="nhbrc-section" aria-labelledby="nhbrc-heading">
          <h2 id="nhbrc-heading">Registered with NHBRC</h2>
          <div class="nhbrc-logo-container">
            <img src="/images/icons/nhbrc.png" alt="National Home Builders Registration Council (NHBRC) Certification Logo" loading="lazy" width="200" height="80" />
          </div>
        </section>

        <div class="services-cta">
          <router-link to="/services" class="view-all-btn" aria-label="View all construction services">View All Services</router-link>
        </div>
      </div>
    </main>

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
    icon: '/images/icons/hotel.svg',
    title: 'Construction',
    description: 'Comprehensive construction services for residential, commercial, and industrial projects.'
  },
  {
    id: 2,
    icon: '/images/icons/clipboard-list.svg',
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
  background: url('/images/scott-blake-ZOiGMIcfXXg-unsplash.jpg') center/cover no-repeat;
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
  color: #ffffff;
  max-width: 800px;
  padding: 0 2rem;
}

.company-name {
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff !important;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.word-group {
  display: inline-block;
}

.letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(50px);
  animation: letterDrop 0.6s ease-out forwards;
}

.space {
  display: inline-block;
  opacity: 0;
  transform: translateY(50px);
  animation: letterDrop 0.6s ease-out forwards;
  width: 0.5em;
}

@keyframes letterDrop {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.welcome-text {
  font-size: 3rem;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
  color: #ffffff !important;
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
  background: #333333;
  color: white;
  border-color: #333333;
}

.cta-button.primary:hover {
  background: #555555;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
}

.cta-button.secondary {
  background: transparent;
  color: #ffffff;
  border-color: #ffffff;
}

.cta-button.secondary:hover {
  background: #ffffff;
  color: #000000;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
}

/* About Preview Section */
.about-preview {
  padding: 5rem 0;
  background: #2a2a2a;
  color: #ffffff;
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
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.text-content p {
  font-size: 1.6rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #ffffff;
}

.learn-more-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background: transparent;
  color: #ffffff;
  text-decoration: none;
  border: 2px solid #ffffff;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-size: 1.4rem;
}

.learn-more-btn:hover {
  background: #ffffff;
  color: #000000;
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
  width: 100%;
  height: 300px;
  background: #2a2a2a;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: #ffffff;
}

/* Services Preview Section */
.services-preview {
  padding: 5rem 0;
  background: #1a1a1a;
  color: #ffffff;
}

.services-preview h2 {
  font-size: 4rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #ffffff;
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
  border-bottom: 1px solid #333333;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.1);
  border-color: #555555;
}

.service-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.service-icon img {
  filter: brightness(0) invert(1);
}

.service-card h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.service-card p {
  color: #ffffff;
  line-height: 1.5;
  font-size: 1.4rem;
}

.services-cta {
  text-align: center;
}

.view-all-btn {
  display: inline-block;
  padding: 1.2rem 2.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  margin: 0.5rem;
  cursor: pointer;
  background: #333333;
  color: white;
  border: 2px solid #333333;
}

.view-all-btn:hover {
  background: #555555;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .company-name {
    font-size: 3.5rem;
  }
  
  .welcome-text {
    font-size: 2rem;
  }
  
  .cta-button {
    font-size: 1.2rem;
    padding: 1rem 2rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .text-content h2 {
    font-size: 2.5rem;
  }
  
  .text-content p {
    font-size: 1.2rem;
  }
  
  .learn-more-btn {
    font-size: 1.1rem;
    padding: 0.6rem 1.4rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .service-card h3 {
    font-size: 1.6rem;
  }
  
  .service-card p {
    font-size: 1.1rem;
  }
  
  .view-all-btn {
    font-size: 1.2rem;
    padding: 1rem 2rem;
  }
  
  .service-icon {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .company-name {
    font-size: 2.8rem;
  }
  
  .welcome-text {
    font-size: 1.6rem;
  }
  
  .cta-button {
    font-size: 1.1rem;
    padding: 0.8rem 1.6rem;
  }
  
  .text-content h2 {
    font-size: 2rem;
  }
  
  .text-content p {
    font-size: 1.1rem;
  }
  
  .service-card h3 {
    font-size: 1.4rem;
  }
  
  .service-card p {
    font-size: 1rem;
  }
  
  .view-all-btn {
    font-size: 1.1rem;
    padding: 0.8rem 1.6rem;
  }
  
  .service-icon {
    font-size: 2.5rem;
  }
}

/* NHBRC Section */
.nhbrc-section {
  padding: 5rem 0;
  background: #1a1a1a;
  color: #ffffff;
  text-align: center;
}

.nhbrc-section h2 {
  font-size: 4rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #ffffff;
}

.nhbrc-logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
}

.nhbrc-logo-container img {
  display: block;
}

.nhbrc-section .services-cta {
  margin-top: 2rem;
}

@media (max-width: 768px) {
  /* Hero Section Mobile */
  .hero-content {
    padding: 2rem 1rem;
  }
  
  .company-name {
    font-size: 2.5rem !important;
  }
  
  .welcome-text {
    font-size: 1rem !important;
    padding: 0 1rem;
  }
  
  .cta-buttons {
    gap: 1rem;
  }
  
  .cta-button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
  
  /* About Preview Mobile */
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .text-content {
    text-align: center;
    order: 2;
  }
  
  .image-content {
    order: 1;
  }
  
  .text-content h2 {
    font-size: 2rem;
  }
  
  .text-content p {
    font-size: 1.1rem;
  }
  
  /* Services Preview Mobile */
  .services-preview {
    padding: 3rem 0;
  }
  
  .services-preview h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .service-card {
    padding: 1.5rem;
  }
  
  .service-card h3 {
    font-size: 1.4rem;
  }
  
  .service-card p {
    font-size: 1rem;
  }
  
  .view-all-btn {
    font-size: 1.1rem;
    padding: 0.8rem 1.6rem;
  }
  
  .service-icon {
    font-size: 2.5rem;
  }
  
  /* NHBRC Section Mobile */
  .nhbrc-section h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  
  .nhbrc-logo-container {
    margin: 2rem 0;
  }
  
  .nhbrc-logo-container img {
    max-width: 120px;
  }
}

/* Extra Small Mobile (Phones) */
@media (max-width: 480px) {
  /* Hero Section */
  .hero-content {
    padding: 1.5rem 1rem;
  }
  
  .company-name {
    font-size: 2rem !important;
    line-height: 1.2;
  }
  
  .welcome-text {
    font-size: 0.9rem !important;
    line-height: 1.4;
  }
  
  .cta-button {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
  
  /* About Section */
  .text-content h2 {
    font-size: 1.8rem;
  }
  
  .text-content p {
    font-size: 1rem;
    line-height: 1.5;
  }
  
  .learn-more-btn {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
  
  /* Services Section */
  .services-preview {
    padding: 2rem 0;
  }
  
  .services-preview h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .service-card {
    padding: 1.2rem;
  }
  
  .service-card h3 {
    font-size: 1.2rem;
  }
  
  .service-card p {
    font-size: 0.9rem;
  }
  
  .view-all-btn {
    font-size: 1rem;
    padding: 0.7rem 1.4rem;
  }
  
  /* NHBRC Section */
  .nhbrc-section {
    padding: 3rem 0;
  }
  
  .nhbrc-section h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .nhbrc-logo-container img {
    max-width: 100px;
  }
}

/* Tablet Optimization */
@media (min-width: 769px) and (max-width: 1024px) {
  .company-name {
    font-size: 3.5rem !important;
  }
  
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .text-content {
    text-align: center;
  }
}

/* Touch Device Optimizations */
@media (hover: none) and (pointer: coarse) {
  .cta-button,
  .learn-more-btn,
  .view-all-btn,
  .nav-link,
  .service-card {
    -webkit-tap-highlight-color: rgba(255, 107, 53, 0.3);
    touch-action: manipulation;
  }
  
  .service-card:hover {
    transform: none;
  }
  
  .service-card:active {
    transform: scale(0.98);
  }
  
  .cta-button:active,
  .learn-more-btn:active,
  .view-all-btn:active {
    transform: scale(0.95);
  }
}

/* Mobile Landscape Optimization */
@media (max-width: 768px) and (orientation: landscape) {
  .hero-content {
    padding: 1rem;
  }
  
  .company-name {
    font-size: 2rem !important;
  }
  
  .welcome-text {
    font-size: 0.8rem !important;
  }
  
  .services-preview,
  .about-preview,
  .nhbrc-section {
    padding: 2rem 0;
  }
  
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  
  .text-content {
    order: 1;
  }
  
  .image-content {
    order: 2;
  }
}

/* High DPI/Retina Display Optimization */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .logo-img,
  .service-icon img,
  .nhbrc-logo-container img {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
}

/* Reduced Motion Accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  .letter {
    animation: none !important;
    opacity: 1 !important;
  }
  
  .welcome-text {
    animation: none !important;
    opacity: 1 !important;
  }
  
  .cta-buttons {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
