<template>
  <footer class="footer" role="contentinfo" aria-label="Site footer">
    <div class="footer-content">
      <div class="container">
        <div class="footer-grid">
          <!-- Company Info -->
          <section class="footer-section" aria-labelledby="company-info-heading">
            <h3 id="company-info-heading">Econo Construction</h3>
            <p>Building your dreams into reality with over 70 years of construction excellence.</p>
            <nav class="social-links" aria-label="Social media links">
              <a href="https://facebook.com/econoconstruction" class="social-link" aria-label="Follow Econo Construction on Facebook" target="_blank" rel="noopener noreferrer">
                <img src="/images/icons/facebook.svg" alt="Facebook icon" loading="lazy" width="24" height="24">
              </a>
              <a href="https://linkedin.com/company/econoconstruction" class="social-link" aria-label="Follow Econo Construction on LinkedIn" target="_blank" rel="noopener noreferrer">
                <img src="/images/icons/linkedin.svg" alt="LinkedIn icon" loading="lazy" width="24" height="24">
              </a>
              <a href="https://instagram.com/econoconstruction" class="social-link" aria-label="Follow Econo Construction on Instagram" target="_blank" rel="noopener noreferrer">
                <img src="/images/icons/instagram.svg" alt="Instagram icon" loading="lazy" width="24" height="24">
              </a>
            </nav>
          </section>

          <!-- Quick Links -->
          <section class="footer-section" aria-labelledby="quick-links-heading">
            <h4 id="quick-links-heading">Quick Links</h4>
            <nav aria-label="Quick navigation">
              <ul class="footer-links">
                <li><router-link to="/" aria-label="Navigate to home page">Home</router-link></li>
                <li><router-link to="/services" aria-label="View our construction services">Services</router-link></li>
                <li><router-link to="/contact" aria-label="Contact Econo Construction">Contact</router-link></li>
              </ul>
            </nav>
          </section>

          <!-- Services -->
          <section class="footer-section" aria-labelledby="services-heading">
            <h4 id="services-heading">Our Services</h4>
            <nav aria-label="Services navigation">
              <ul class="footer-links">
                <li><router-link to="/services#construction" aria-label="Learn about construction services">Construction</router-link></li>
                <li><router-link to="/services#project-management" aria-label="Learn about project management services">Project Management</router-link></li>
              </ul>
            </nav>
          </section>

          <!-- Contact Info -->
          <section class="footer-section" aria-labelledby="contact-info-heading">
            <h4 id="contact-info-heading">Contact Info</h4>
            <address class="contact-info">
              <p>
                <span class="contact-icon">
                  <img src="/images/icons/phone.svg" alt="Phone icon" loading="lazy" width="24" height="24">
                </span>
                <a href="tel:+27828002992" aria-label="Call Econo Construction">+27 82 800 2992</a>
              </p>
              <p>
                <span class="contact-icon">
                  <img src="/images/icons/mail.svg" alt="Email icon" loading="lazy" width="24" height="24">
                </span>
                <a href="mailto:andre@projectmanage.co.za" aria-label="Email Econo Construction">andre@projectmanage.co.za</a>
              </p>
              <p>
                <span class="contact-icon">
                  <img src="/images/icons/map-pin.svg" alt="Location icon" loading="lazy" width="24" height="24">
                </span>
                14 Hilltop Close<br>Magalies Golf Estate, Magaliesburg, 1791
              </p>
              <p>
                <span class="contact-icon">
                  <img src="/images/icons/clock.svg" alt="Clock icon" loading="lazy" width="24" height="24">
                </span>
                <time datetime="Mo-Fr 07:00-17:00">Mon-Fri: 7AM-5PM</time>
              </p>
            </address>
          </section>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <p>&copy; {{ currentYear }} Econo Construction. All rights reserved.</p>
          <nav class="footer-bottom-links" aria-label="Legal links">
            <router-link to="/privacy" aria-label="View privacy policy">Privacy Policy</router-link>
            <router-link to="/terms" aria-label="View terms of service">Terms of Service</router-link>
            <router-link to="/sitemap" aria-label="View site map">Sitemap</router-link>
          </nav>
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
  background: #0d0d0d;
  color: #cccccc;
  margin-top: auto;
  border-top: 1px solid #333333;
}

.footer-content {
  padding: 3rem 0 2rem;
  border-bottom: 1px solid #333333;
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
  color: #ffffff;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.footer-section h4 {
  color: #ffffff;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.footer-section p {
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #666;
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
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links li a {
  color: #cccccc;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 1.4rem;
}

.footer-links li a:hover {
  color: #ffffff;
}

.contact-info p {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.8rem;
  color: #666;
}

.contact-icon {
  margin-right: 0.8rem;
  font-size: 1.5rem;
  width: 30px;
  flex-shrink: 0;
}

.contact-icon img,
.social-link img {
  filter: brightness(0) invert(1);
}


.footer-bottom {
  text-align: center;
  padding: 1.5rem 0;
  font-size: 1.2rem;
  color: #999999;
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
  color: #1ABC9C;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  .footer-section h3 {
    font-size: 1.8rem;
  }
  
  .footer-section h4 {
    font-size: 1.5rem;
  }
  
  .footer-links li a {
    font-size: 1.2rem;
  }
  
  .contact-icon {
    font-size: 1.2rem;
    width: 24px;
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
  .footer-section h3 {
    font-size: 1.6rem;
  }
  
  .footer-section h4 {
    font-size: 1.4rem;
  }
  
  .footer-links li a {
    font-size: 1.1rem;
  }
  
  .footer-bottom {
    font-size: 1rem;
  }
  
  .footer-bottom-links {
    flex-direction: column;
    gap: 1rem;
  }
  
  .footer-bottom-links a {
    font-size: 0.8rem;
  }
}
</style>
