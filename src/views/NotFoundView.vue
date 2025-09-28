<template>
  <div class="not-found-page">
    <section class="not-found-hero" aria-labelledby="not-found-heading">
      <div class="container">
        <div class="error-content">
          <div class="error-code">404</div>
          <h1 id="not-found-heading">Page Not Found</h1>
          <p>
            Oops! The page you're looking for seems to have wandered off the construction site. 
            Don't worry, we'll help you get back on track.
          </p>
          <div class="error-actions">
            <router-link to="/" class="primary-btn" aria-label="Go to homepage">
              Back to Home
            </router-link>
            <router-link to="/services" class="secondary-btn" aria-label="View our services">
              View Services
            </router-link>
          </div>
        </div>
        <div class="error-illustration">
          <div class="construction-icon">🏗️</div>
        </div>
      </div>
    </section>

    <main class="not-found-content">
      <div class="container">
        <section class="help-section" aria-labelledby="help-heading">
          <h2 id="help-heading">What Can You Do?</h2>
          <div class="help-grid">
            <div class="help-item">
              <div class="help-icon">🔍</div>
              <h3>Check the URL</h3>
              <p>Make sure you've typed the address correctly. A small typo can lead you astray.</p>
            </div>
            <div class="help-item">
              <div class="help-icon">🏠</div>
              <h3>Visit Our Homepage</h3>
              <p>Start fresh from our homepage to explore all our construction services.</p>
            </div>
            <div class="help-item">
              <div class="help-icon">📞</div>
              <h3>Contact Us</h3>
              <p>If you need immediate assistance, don't hesitate to reach out to our team.</p>
            </div>
          </div>
        </section>

        <section class="popular-pages" aria-labelledby="popular-heading">
          <h2 id="popular-heading">Popular Pages</h2>
          <div class="popular-grid">
            <router-link to="/" class="popular-link" aria-label="Visit homepage">
              <span class="popular-icon">🏠</span>
              <div>
                <strong>Home</strong>
                <span>Learn about our construction expertise</span>
              </div>
            </router-link>
            <router-link to="/services" class="popular-link" aria-label="View our services">
              <span class="popular-icon">🔨</span>
              <div>
                <strong>Services</strong>
                <span>Explore our comprehensive construction services</span>
              </div>
            </router-link>
            <router-link to="/contact" class="popular-link" aria-label="Contact us">
              <span class="popular-icon">📞</span>
              <div>
                <strong>Contact</strong>
                <span>Get in touch for quotes and inquiries</span>
              </div>
            </router-link>
          </div>
        </section>

        <section class="contact-section" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Still Need Help?</h2>
          <p>
            If you can't find what you're looking for, our friendly team is here to help you with any questions 
            about our construction services.
          </p>
          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-icon">📱</span>
              <a href="tel:+27828002992" aria-label="Call Econo Construction">+27 82 800 2992</a>
            </div>
            <div class="contact-item">
              <span class="contact-icon">✉️</span>
              <a href="mailto:andre@projectmanage.co.za" aria-label="Email Econo Construction">andre@projectmanage.co.za</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
.not-found-page {
  min-height: 100vh;
  background-color: #1a1a1a;
  color: #ffffff;
}

.not-found-hero {
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  padding: 6rem 0;
  text-align: center;
  border-bottom: 2px solid #ff6b35;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
}

.error-code {
  font-size: 8rem;
  font-weight: bold;
  color: #ff6b35;
  line-height: 1;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.not-found-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.not-found-hero p {
  font-size: 1.2rem;
  color: #ffffff;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.primary-btn, .secondary-btn {
  display: inline-block;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.primary-btn {
  background: #ff6b35;
  color: #ffffff;
}

.primary-btn:hover {
  background: #e55a2b;
  transform: translateY(-2px);
}

.secondary-btn {
  background: transparent;
  color: #ff6b35;
  border: 2px solid #ff6b35;
}

.secondary-btn:hover {
  background: #ff6b35;
  color: #ffffff;
  transform: translateY(-2px);
}

.error-illustration {
  text-align: center;
}

.construction-icon {
  font-size: 6rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.not-found-content {
  padding: 4rem 0;
}

.help-section, .popular-pages, .contact-section {
  margin-bottom: 4rem;
}

.help-section h2, .popular-pages h2, .contact-section h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #ff6b35;
}

.help-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.help-item {
  background: #2a2a2a;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #333;
  transition: transform 0.3s ease;
}

.help-item:hover {
  transform: translateY(-5px);
}

.help-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.help-item h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.help-item p {
  color: #ffffff;
  line-height: 1.6;
}

.popular-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.popular-link {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: #2a2a2a;
  border-radius: 8px;
  text-decoration: none;
  color: #ffffff;
  border: 1px solid #333;
  transition: all 0.3s ease;
}

.popular-link:hover {
  background: #333;
  border-color: #ff6b35;
  transform: translateY(-2px);
}

.popular-icon {
  font-size: 2rem;
  margin-right: 1rem;
}

.popular-link strong {
  display: block;
  margin-bottom: 0.25rem;
  color: #ffffff;
}

.popular-link span {
  font-size: 0.9rem;
  color: #ffffff;
}

.contact-section {
  text-align: center;
}

.contact-section p {
  font-size: 1.1rem;
  color: #ffffff;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
}

.contact-icon {
  font-size: 1.5rem;
}

.contact-item a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
}

.contact-item a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .not-found-hero {
    padding: 4rem 0;
  }
  
  .error-code {
    font-size: 6rem;
  }
  
  .not-found-hero h1 {
    font-size: 2.5rem;
  }
  
  .not-found-hero p {
    font-size: 1rem;
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .primary-btn, .secondary-btn {
    width: 100%;
    max-width: 300px;
  }
  
  .construction-icon {
    font-size: 4rem;
  }
  
  .not-found-content {
    padding: 2rem 0;
  }
  
  .help-section h2, .popular-pages h2, .contact-section h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .help-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .popular-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-info {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
</style>
