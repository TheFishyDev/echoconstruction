<template>
  <div class="services">
    <!-- Hero Section -->
    <section class="services-hero">
      <div class="container">
        <h1>Our Services</h1>
        <p>Comprehensive construction solutions tailored to your needs</p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-content">
      <div class="container">
        <div class="services-grid">
          <div class="service-item" v-for="service in services" :key="service.id">
            <div class="service-header">
              <div class="service-icon">{{ service.icon }}</div>
              <h3>{{ service.title }}</h3>
            </div>
            <p class="service-description">{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
            </ul>
            <div class="service-footer">
              <span class="service-price">{{ service.priceRange }}</span>
              <button class="contact-btn" @click="scrollToContact">Get Quote</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section">
      <div class="container">
        <h2>Our Construction Process</h2>
        <div class="process-steps">
          <div class="process-step" v-for="(step, index) in processSteps" :key="step.id">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h4>{{ step.title }}</h4>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="services-cta">
      <div class="container">
        <h2>Ready to Start Your Project?</h2>
        <p>Contact us today for a free consultation and detailed quote</p>
        <div class="cta-buttons">
          <router-link to="/contact" class="cta-button primary">Get Free Quote</router-link>
          <a href="tel:+1234567890" class="cta-button secondary">Call Now</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  {
    id: 1,
    icon: '🏗️',
    title: 'Construction',
    description: 'Comprehensive construction services covering residential, commercial, and industrial projects from foundation to completion.',
    features: [
      'Residential Construction',
      'Commercial Buildings',
      'Industrial Facilities',
      'Renovation & Remodeling',
      'Sustainable Building Solutions'
    ],
    priceRange: 'Starting from R255,000'
  },
  {
    id: 2,
    icon: '📋',
    title: 'Project Management',
    description: 'Professional project management services ensuring your construction project is delivered on time, within budget, and to the highest quality standards.',
    features: [
      'Project Planning & Scheduling',
      'Budget Management',
      'Quality Control & Assurance',
      'Permit & Regulatory Compliance',
      'Stakeholder Communication'
    ],
    priceRange: 'Starting from R85,000'
  }
])

const processSteps = ref([
  {
    id: 1,
    title: 'Initial Consultation',
    description: 'We meet with you to discuss your vision, requirements, and budget for the project.'
  },
  {
    id: 2,
    title: 'Design & Planning',
    description: 'Our team creates detailed plans and designs, handling all permits and approvals.'
  },
  {
    id: 3,
    title: 'Project Execution',
    description: 'Construction begins with regular updates and quality control throughout the process.'
  },
  {
    id: 4,
    title: 'Final Inspection',
    description: 'Thorough inspection and walkthrough to ensure everything meets our high standards.'
  },
  {
    id: 5,
    title: 'Project Completion',
    description: 'Final delivery with warranty coverage and ongoing support for your new space.'
  }
])

const scrollToContact = () => {
  // This would scroll to contact section or navigate to contact page
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}
</script>

<style scoped>
.services {
  min-height: 100vh;
  background: #1a1a1a;
  color: white;
}

/* Hero Section */
.services-hero {
  background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
  padding: 6rem 0 4rem;
  text-align: center;
}

.services-hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #ff6b35;
  font-weight: 700;
}

.services-hero p {
  font-size: 1.3rem;
  color: #e0e0e0;
  max-width: 600px;
  margin: 0 auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Services Content */
.services-content {
  padding: 4rem 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.service-item {
  background: #2a2a2a;
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid #333;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(255, 107, 53, 0.1);
  border-color: #ff6b35;
}

.service-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.service-icon {
  font-size: 2.5rem;
  margin-right: 1rem;
}

.service-item h3 {
  font-size: 1.5rem;
  color: #ff6b35;
  margin: 0;
}

.service-description {
  color: #e0e0e0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.service-features li {
  padding: 0.5rem 0;
  color: #ccc;
  position: relative;
  padding-left: 1.5rem;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #ff6b35;
  font-weight: bold;
}

.service-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.service-price {
  font-weight: 600;
  color: #ff6b35;
  font-size: 1.1rem;
}

.contact-btn {
  background: #ff6b35;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background: #e55a2b;
  transform: translateY(-2px);
}

/* Process Section */
.process-section {
  background: #2a2a2a;
  padding: 5rem 0;
}

.process-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #ff6b35;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.process-step {
  text-align: center;
  padding: 2rem;
}

.step-number {
  width: 60px;
  height: 60px;
  background: #ff6b35;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1rem;
}

.step-content h4 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #ff6b35;
}

.step-content p {
  color: #e0e0e0;
  line-height: 1.5;
}

/* CTA Section */
.services-cta {
  background: #1a1a1a;
  padding: 5rem 0;
  text-align: center;
}

.services-cta h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ff6b35;
}

.services-cta p {
  font-size: 1.2rem;
  color: #e0e0e0;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
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
}

/* Responsive Design */
@media (max-width: 768px) {
  .services-hero h1 {
    font-size: 2.5rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .process-steps {
    grid-template-columns: 1fr;
  }
  
  .service-footer {
    flex-direction: column;
    gap: 1rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
