<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="container">
        <div class="footer-grid">
          <!-- Company Info -->
          <div class="footer-section">
            <h3>EchoConstruction</h3>
            <p>Building your dreams into reality with over 20 years of construction excellence.</p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Facebook">📘</a>
              <a href="#" class="social-link" aria-label="Twitter">🐦</a>
              <a href="#" class="social-link" aria-label="LinkedIn">💼</a>
              <a href="#" class="social-link" aria-label="Instagram">📷</a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul class="footer-links">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/services">Services</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>

          <!-- Services -->
          <div class="footer-section">
            <h4>Our Services</h4>
            <ul class="footer-links">
              <li><a href="#construction">Construction</a></li>
              <li><a href="#project-management">Project Management</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="footer-section">
            <h4>Contact Info</h4>
            <div class="contact-info">
              <p><span class="contact-icon">📞</span> (555) 123-4567</p>
              <p><span class="contact-icon">✉️</span> info@echoconstruction.com</p>
              <p><span class="contact-icon">📍</span> 123 Construction Ave<br>Builder City, BC 12345</p>
              <p><span class="contact-icon">🕒</span> Mon-Fri: 8AM-6PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <p>&copy; {{ currentYear }} EchoConstruction. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: #1a1a1a;
  color: #e0e0e0;
  margin-top: auto;
}

.footer-content {
  padding: 3rem 0 2rem;
  border-bottom: 1px solid #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section h3 {
  color: #ff6b35;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.footer-section h4 {
  color: #ff6b35;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.footer-section p {
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #ccc;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: inline-block;
  font-size: 1.5rem;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px);
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #ff6b35;
}

.contact-info p {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.8rem;
  color: #ccc;
}

.contact-icon {
  margin-right: 0.8rem;
  font-size: 1.1rem;
  width: 20px;
  flex-shrink: 0;
}

.footer-bottom {
  padding: 1.5rem 0;
  background: #0f0f0f;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  color: #999;
  margin: 0;
}

.footer-bottom-links {
  display: flex;
  gap: 2rem;
}

.footer-bottom-links a {
  color: #999;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
  color: #ff6b35;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-bottom-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-bottom-links {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
