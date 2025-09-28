<template>
  <div class="sitemap-page">
    <section class="sitemap-hero" aria-labelledby="sitemap-heading">
      <div class="container">
        <h1 id="sitemap-heading">Sitemap</h1>
        <p>Navigate through our website structure</p>
      </div>
    </section>

    <main class="sitemap-content">
      <div class="container">
        <div class="sitemap-grid">
          <section class="sitemap-section" aria-labelledby="main-pages-heading">
            <h2 id="main-pages-heading">Main Pages</h2>
            <nav aria-label="Main navigation">
              <ul class="sitemap-list">
                <li>
                  <router-link to="/" aria-label="Visit homepage">
                    <span class="sitemap-icon">🏠</span>
                    <div>
                      <strong>Home</strong>
                      <span class="sitemap-description">Learn about Econo Construction and our services</span>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/services" aria-label="View our construction services">
                    <span class="sitemap-icon">🔨</span>
                    <div>
                      <strong>Services</strong>
                      <span class="sitemap-description">Explore our comprehensive construction services</span>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/contact" aria-label="Contact Econo Construction">
                    <span class="sitemap-icon">📞</span>
                    <div>
                      <strong>Contact</strong>
                      <span class="sitemap-description">Get in touch with our team for quotes and inquiries</span>
                    </div>
                  </router-link>
                </li>
              </ul>
            </nav>
          </section>

          <section class="sitemap-section" aria-labelledby="service-pages-heading">
            <h2 id="service-pages-heading">Service Pages</h2>
            <nav aria-label="Service navigation">
              <ul class="sitemap-list">
                <li>
                  <router-link to="/services/construction" aria-label="Learn about construction services">
                    <span class="sitemap-icon">🏗️</span>
                    <div>
                      <strong>Construction Services</strong>
                      <span class="sitemap-description">Residential and commercial construction projects</span>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/services/project-management" aria-label="Learn about project management services">
                    <span class="sitemap-icon">📋</span>
                    <div>
                      <strong>Project Management</strong>
                      <span class="sitemap-description">Professional construction project oversight</span>
                    </div>
                  </router-link>
                </li>
              </ul>
            </nav>
          </section>

          <section class="sitemap-section" aria-labelledby="legal-pages-heading">
            <h2 id="legal-pages-heading">Legal Pages</h2>
            <nav aria-label="Legal navigation">
              <ul class="sitemap-list">
                <li>
                  <router-link to="/privacy" aria-label="View privacy policy">
                    <span class="sitemap-icon">🔒</span>
                    <div>
                      <strong>Privacy Policy</strong>
                      <span class="sitemap-description">How we protect your personal information</span>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/terms" aria-label="View terms of service">
                    <span class="sitemap-icon">📄</span>
                    <div>
                      <strong>Terms of Service</strong>
                      <span class="sitemap-description">Terms and conditions for using our services</span>
                    </div>
                  </router-link>
                </li>
              </ul>
            </nav>
          </section>

          <section class="sitemap-section" aria-labelledby="company-info-heading">
            <h2 id="company-info-heading">Company Information</h2>
            <div class="company-info">
              <div class="info-item">
                <h3>Contact Details</h3>
                <address>
                  <p><strong>Phone:</strong> <a href="tel:+27828002992">+27 82 800 2992</a></p>
                  <p><strong>Email:</strong> <a href="mailto:andre@projectmanage.co.za">andre@projectmanage.co.za</a></p>
                  <p><strong>Address:</strong> 14 Hilltop Close, Magalies Golf Estate, Magaliesburg, 1791</p>
                </address>
              </div>
              
              <div class="info-item">
                <h3>Business Hours</h3>
                <p><time datetime="Mo-Fr 07:00-17:00">Monday - Friday: 7:00 AM - 5:00 PM</time></p>
                <p><time datetime="Sa-Su closed">Saturday - Sunday: Closed</time></p>
              </div>

              <div class="info-item">
                <h3>Certifications</h3>
                <p>Registered with NHBRC (National Home Builders Registration Council)</p>
                <p>Over 70 years of construction experience</p>
              </div>
            </div>
          </section>
        </div>

        <section class="quick-links" aria-labelledby="quick-links-heading">
          <h2 id="quick-links-heading">Quick Links</h2>
          <div class="quick-links-grid">
            <router-link to="/" class="quick-link-btn" aria-label="Go to homepage">
              Back to Home
            </router-link>
            <router-link to="/services" class="quick-link-btn" aria-label="View services">
              View Services
            </router-link>
            <router-link to="/contact" class="quick-link-btn" aria-label="Contact us">
              Contact Us
            </router-link>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
.sitemap-page {
  min-height: 100vh;
  background-color: #1a1a1a;
  color: #ffffff;
}

.sitemap-hero {
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  padding: 4rem 0;
  text-align: center;
  border-bottom: 2px solid #ff6b35;
}

.sitemap-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.sitemap-hero p {
  font-size: 1.2rem;
  color: #ffffff;
}

.sitemap-content {
  padding: 4rem 0;
}

.sitemap-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.sitemap-section {
  background: #2a2a2a;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #333;
}

.sitemap-section h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #ff6b35;
}

.sitemap-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sitemap-list li {
  margin-bottom: 1rem;
}

.sitemap-list a {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #1a1a1a;
  border-radius: 6px;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.sitemap-list a:hover {
  background: #333;
  border-color: #ff6b35;
  transform: translateY(-2px);
}

.sitemap-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
  width: 40px;
  text-align: center;
}

.sitemap-list strong {
  display: block;
  margin-bottom: 0.25rem;
  color: #ffffff;
}

.sitemap-description {
  font-size: 0.9rem;
  color: #ffffff;
}

.company-info {
  display: grid;
  gap: 1.5rem;
}

.info-item h3 {
  color: #ff6b35;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.info-item p {
  color: #ffffff;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.info-item address {
  font-style: normal;
}

.info-item a {
  color: #ffffff;
  text-decoration: none;
}

.info-item a:hover {
  text-decoration: underline;
}

.quick-links {
  text-align: center;
  padding: 2rem 0;
}

.quick-links h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #ff6b35;
}

.quick-links-grid {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.quick-link-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background: #ff6b35;
  color: #ffffff;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.quick-link-btn:hover {
  background: #e55a2b;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .sitemap-hero h1 {
    font-size: 2.5rem;
  }
  
  .sitemap-hero p {
    font-size: 1rem;
  }
  
  .sitemap-content {
    padding: 2rem 0;
  }
  
  .sitemap-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .sitemap-section {
    padding: 1.5rem;
  }
  
  .sitemap-section h2 {
    font-size: 1.5rem;
  }
  
  .quick-links-grid {
    flex-direction: column;
    align-items: center;
  }
  
  .quick-link-btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>
