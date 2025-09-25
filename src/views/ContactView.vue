<template>
  <div class="contact">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Ready to start your construction project? Get in touch with our team today.</p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-form-section">
            <h2>Send Us a Message</h2>
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    v-model="formData.firstName" 
                    required
                    :class="{ 'error': errors.firstName }"
                  >
                  <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    v-model="formData.lastName" 
                    required
                    :class="{ 'error': errors.lastName }"
                  >
                  <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="formData.email" 
                    required
                    :class="{ 'error': errors.email }"
                  >
                  <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="formData.phone"
                    :class="{ 'error': errors.phone }"
                  >
                  <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
                </div>
              </div>

              <div class="form-group">
                <label for="projectType">Project Type</label>
                <select id="projectType" v-model="formData.projectType">
                  <option value="">Select a project type</option>
                  <option value="construction">Construction</option>
                  <option value="project-management">Project Management</option>
                  <option value="other">Other</option>
                </select>
              </div>

<div class="form-group">
                <label for="message">Project Details *</label>
                <textarea 
                  id="message" 
                  v-model="formData.message" 
                  rows="5" 
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                  required
                  :class="{ 'error': errors.message }"
                ></textarea>
                <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
              </div>

              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else>Sending...</span>
              </button>

              <div v-if="submitMessage" class="submit-message" :class="submitMessageType">
                {{ submitMessage }}
              </div>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="contact-info-section">
            <h2>Get In Touch</h2>
            
            <div class="contact-details">
              <div class="contact-container">
                <div class="contact-item">
                  <span class="contact-icon">
                    <img src="/images/icons/phone.svg" alt="Phone icon" loading="lazy" width="24" height="24">
                  </span>
                  <span><strong>Phone:</strong> <a href="tel:+27828002992" aria-label="Call Econo Construction">+27 82 800 2992</a></span>
                </div>
                
                <div class="contact-item">
                  <span class="contact-icon">
                    <img src="/images/icons/mail.svg" alt="Email icon" loading="lazy" width="24" height="24">
                  </span>
                  <span><strong>Email:</strong> <a href="mailto:andre@projectmanage.co.za" aria-label="Email Econo Construction">andre@projectmanage.co.za</a></span>
                </div>
                
                <div class="contact-item">
                  <span class="contact-icon">
                    <img src="/images/icons/map-pin.svg" alt="Location icon" loading="lazy" width="24" height="24">
                  </span>
                  <span><strong>Office:</strong> 14 Hilltop Close, Magalies Golf Estate, Magaliesburg, 1791</span>
                </div>
                
                <div class="contact-item">
                  <span class="contact-icon">
                    <img src="/images/icons/clock.svg" alt="Business hours icon" loading="lazy" width="24" height="24">
                  </span>
                  <span><strong>Hours:</strong> <time datetime="Mo-Fr 07:00-17:00">Mon-Fri: 7AM-5PM</time></span>
                </div>
              </div>
              
              <!-- Map Section -->
              <div class="map-container">
                <iframe 
                  width="100%" 
                  height="300" 
                  style="border:0; border-radius: 8px; margin-top: 1.5rem;" 
                  loading="lazy" 
                  :src="'https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=14+Hilltop+Close,+Magalies+Golf+Estate,+Magaliesburg,+South+Africa'">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  projectType: '',
  message: ''
})

const errors = ref({})
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitMessageType = ref('')

const validateForm = () => {
  errors.value = {}
  
  if (!formData.firstName.trim()) {
    errors.value.firstName = 'First name is required'
  }
  
  if (!formData.lastName.trim()) {
    errors.value.lastName = 'Last name is required'
  }
  
  if (!formData.email) {
    errors.value.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.value.email = 'Please enter a valid email address'
  }
  
  if (formData.phone && !/^[\d\s+()-]+$/.test(formData.phone)) {
    errors.value.phone = 'Please enter a valid phone number'
  }
  
  if (!formData.message.trim()) {
    errors.value.message = 'Please enter your message'
  }
  
  return Object.keys(errors.value).length === 0
}

const submitForm = async () => {
  if (!validateForm()) {
    return
  }
  
  isSubmitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    Object.keys(formData).forEach(key => {
      formData[key] = ''
    })
    
    submitMessage.value = 'Thank you for your message! We\'ll get back to you within 24 hours.'
    submitMessageType.value = 'success'
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
    
  } catch (error) {
    submitMessage.value = 'Sorry, there was an error sending your message. Please try again or call us directly.'
    submitMessageType.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact {
  min-height: 100vh;
  background: #1a1a1a;
  color: #e0e0e0;
}

/* Hero Section */
.contact-hero {
  background: linear-gradient(135deg, #2a2a2a 0%, #333333 100%);
  padding: 6rem 0 4rem;
  text-align: center;
}

.contact-hero h1 {
  font-size: 6rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-weight: 700;
}

.contact-hero p {
  font-size: 2.2rem;
  max-width: 800px;
  margin: 0 auto;
  color: #cccccc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Contact Content */
.contact-content {
  padding: 5rem 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

/* Contact Form */
.contact-form-section h2 {
  font-size: 3.5rem;
  margin-bottom: 2rem;
  color: #ffffff;
}

.contact-form {
  background: #2a2a2a;
  padding: 2rem;
  border-radius: 12px;
  border-bottom: 1px solid #333333;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #ffffff;
  font-weight: 500;
  font-size: 1.8rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  background: #1a1a1a;
  border: 1px solid #333333;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 1.8rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #888888;
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
  border-color: #ff4444;
}

.error-message {
  color: #ff4444;
  font-size: 1.2rem;
  margin-top: 0.5rem;
  display: block;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  padding: 1.2rem;
  background: #333333;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background: #555555;
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 6px;
  text-align: center;
}

.submit-message.success {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border: 1px solid #22c55e;
}

.submit-message.error {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid #ef4444;
}

/* Contact Info */
.contact-info-section h2 {
  font-size: 3.5rem;
  margin-bottom: 2rem;
  color: #ffffff;
}

.contact-details {
  margin-bottom: 3rem;
}

.contact-container {
  background: #2a2a2a;
  padding: 2rem;
  border-radius: 12px;
  border-bottom: 1px solid #333333;
}

.contact-item {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
}

.map-container {
  margin-top: 2rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-icon {
  margin-right: 1rem;
  font-size: 1.8rem;
  width: 36px;
  flex-shrink: 0;
}

.contact-icon img {
  filter: brightness(0) invert(1);
}

.contact-item strong {
  color: #ffffff;
  font-weight: 600;
  font-size: 1.5rem;
}

.contact-item a {
  color: #cccccc;
  text-decoration: none;
  font-size: 1.5rem;
}

.contact-item a:hover {
  text-decoration: underline;
}


/* FAQ Section */
.faq-section {
  padding: 5rem 0;
  background: #2a2a2a;
}

.faq-section h2 {
  text-align: center;
  font-size: 4rem;
  margin-bottom: 3rem;
  color: #ffffff;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.faq-item {
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 10px;
  border-bottom: 1px solid #333333;
}

.faq-item h4 {
  color: #ffffff;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.faq-item p {
  font-size: 1.8rem;
  line-height: 1.6;
  color: #cccccc;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-hero h1 {
    font-size: 3.5rem;
  }
  
  .contact-hero p {
    font-size: 1.3rem;
  }
  
  .contact-info h3 {
    font-size: 1.8rem;
  }
  
  .contact-info p {
    font-size: 1.2rem;
  }
  
  .contact-icon {
    font-size: 1.4rem;
    width: 28px;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .form-group label {
    font-size: 1.2rem;
  }
  
  .form-group input, .form-group select, .form-group textarea {
    font-size: 1.2rem;
  }
  
  .submit-btn {
    font-size: 1.4rem;
    padding: 1rem 2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .contact-info-section h2 {
    font-size: 2.8rem;
  }
  
  .faq-section h2 {
    font-size: 3rem;
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
  
  .faq-item h4 {
    font-size: 1.6rem;
  }
  
  .faq-item p {
    font-size: 1.2rem;
  }
  
  .hours-item {
    flex-direction: column;
    gap: 0.3rem;
  }
}

@media (max-width: 480px) {
  .contact-hero h1 {
    font-size: 2.8rem;
  }
  
  .contact-hero p {
    font-size: 1.1rem;
  }
  
  .contact-info h3 {
    font-size: 1.6rem;
  }
  
  .contact-info p {
    font-size: 1.1rem;
  }
  
  .contact-icon {
    font-size: 1.2rem;
    width: 24px;
  }
  
  .form-group label {
    font-size: 1.1rem;
  }
  
  .form-group input, .form-group select, .form-group textarea {
    font-size: 1.1rem;
  }
  
  .submit-btn {
    font-size: 1.2rem;
    padding: 0.8rem 1.6rem;
  }
  
  .contact-info-section h2 {
    font-size: 2.2rem;
  }
  
  .faq-section h2 {
    font-size: 2.5rem;
  }
  
  .faq-item h4 {
    font-size: 1.4rem;
  }
  
  .faq-item p {
    font-size: 1.1rem;
  }
}
</style>
