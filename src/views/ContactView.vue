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
                <label for="budget">Estimated Budget</label>
                <select id="budget" v-model="formData.budget">
                  <option value="">Select budget range</option>
                  <option value="under-425k">Under R425,000</option>
                  <option value="425k-850k">R425,000 - R850,000</option>
                  <option value="850k-1700k">R850,000 - R1,700,000</option>
                  <option value="1700k-4250k">R1,700,000 - R4,250,000</option>
                  <option value="4250k-8500k">R4,250,000 - R8,500,000</option>
                  <option value="over-8500k">Over R8,500,000</option>
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
            
            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">📞</div>
                <div class="method-content">
                  <h4>Phone</h4>
                  <p><a href="tel:+15551234567">(555) 123-4567</a></p>
                  <p class="method-note">Mon-Fri: 8AM-6PM</p>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">✉️</div>
                <div class="method-content">
                  <h4>Email</h4>
                  <p><a href="mailto:info@echoconstruction.com">info@echoconstruction.com</a></p>
                  <p class="method-note">We respond within 24 hours</p>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">📍</div>
                <div class="method-content">
                  <h4>Office Location</h4>
                  <p>123 Construction Ave<br>Builder City, BC 12345</p>
                  <p class="method-note">By appointment only</p>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">🚨</div>
                <div class="method-content">
                  <h4>Emergency Services</h4>
                  <p><a href="tel:+15551234999">(555) 123-4999</a></p>
                  <p class="method-note">24/7 Emergency repairs</p>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="business-hours">
              <h3>Business Hours</h3>
              <div class="hours-list">
                <div class="hours-item">
                  <span class="day">Monday - Friday</span>
                  <span class="time">8:00 AM - 6:00 PM</span>
                </div>
                <div class="hours-item">
                  <span class="day">Saturday</span>
                  <span class="time">9:00 AM - 4:00 PM</span>
                </div>
                <div class="hours-item">
                  <span class="day">Sunday</span>
                  <span class="time">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-grid">
          <div class="faq-item" v-for="faq in faqs" :key="faq.id">
            <h4>{{ faq.question }}</h4>
            <p>{{ faq.answer }}</p>
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
  budget: '',
  message: ''
})

const errors = ref({})
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitMessageType = ref('')

const faqs = ref([
  {
    id: 1,
    question: 'How long does a typical construction project take?',
    answer: 'Project timelines vary based on scope and complexity. Residential projects typically take 3-8 months, while commercial projects can range from 6-18 months. We provide detailed timelines during the planning phase.'
  },
  {
    id: 2,
    question: 'Do you provide free estimates?',
    answer: 'Yes, we offer free initial consultations and estimates for all potential projects. Our team will assess your needs and provide a detailed quote within 48-72 hours.'
  },
  {
    id: 3,
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. EchoConstruction is fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers compensation coverage for your protection.'
  },
  {
    id: 4,
    question: 'What areas do you serve?',
    answer: 'We primarily serve the greater metropolitan area within a 50-mile radius of our main office. Contact us to confirm service availability in your specific location.'
  },
  {
    id: 5,
    question: 'Do you handle permits and inspections?',
    answer: 'Yes, we handle all necessary permits, inspections, and regulatory compliance as part of our comprehensive project management services.'
  },
  {
    id: 6,
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including checks, bank transfers, and major credit cards. Payment schedules are typically structured around project milestones.'
  }
])

const validateForm = () => {
  errors.value = {}
  
  if (!formData.firstName.trim()) {
    errors.value.firstName = 'First name is required'
  }
  
  if (!formData.lastName.trim()) {
    errors.value.lastName = 'Last name is required'
  }
  
  if (!formData.email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.value.email = 'Please enter a valid email address'
  }
  
  if (!formData.message.trim()) {
    errors.value.message = 'Project details are required'
  } else if (formData.message.trim().length < 10) {
    errors.value.message = 'Please provide more details about your project'
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
  color: white;
}

/* Hero Section */
.contact-hero {
  background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
  padding: 6rem 0 4rem;
  text-align: center;
}

.contact-hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #ff6b35;
  font-weight: 700;
}

.contact-hero p {
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
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #ff6b35;
}

.contact-form {
  background: #2a2a2a;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #333;
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
  color: #e0e0e0;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  background: #1a1a1a;
  border: 1px solid #444;
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #ff6b35;
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
  border-color: #ff4444;
}

.error-message {
  color: #ff4444;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  display: block;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: #ff6b35;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background: #e55a2b;
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
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
  border: 1px solid #22c55e;
}

.submit-message.error {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
  border: 1px solid #ef4444;
}

/* Contact Info */
.contact-info-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #ff6b35;
}

.contact-methods {
  margin-bottom: 3rem;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #2a2a2a;
  border-radius: 10px;
  border: 1px solid #333;
}

.method-icon {
  font-size: 2rem;
  margin-right: 1rem;
  flex-shrink: 0;
}

.method-content h4 {
  color: #ff6b35;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.method-content p {
  color: #e0e0e0;
  margin-bottom: 0.3rem;
}

.method-content a {
  color: #ff6b35;
  text-decoration: none;
}

.method-content a:hover {
  text-decoration: underline;
}

.method-note {
  font-size: 0.9rem;
  color: #999 !important;
}

/* Business Hours */
.business-hours {
  background: #2a2a2a;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #333;
}

.business-hours h3 {
  color: #ff6b35;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.hours-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #333;
}

.hours-item:last-child {
  border-bottom: none;
}

.day {
  color: #e0e0e0;
}

.time {
  color: #ff6b35;
  font-weight: 500;
}

/* FAQ Section */
.faq-section {
  padding: 5rem 0;
  background: #2a2a2a;
}

.faq-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #ff6b35;
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
  border: 1px solid #333;
}

.faq-item h4 {
  color: #ff6b35;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.faq-item p {
  color: #e0e0e0;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-hero h1 {
    font-size: 2.5rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
  
  .hours-item {
    flex-direction: column;
    gap: 0.3rem;
  }
}
</style>
