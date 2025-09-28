<template>
  <div class="privacy-page">
    <section class="privacy-hero" aria-labelledby="privacy-heading">
      <div class="container">
        <h1 id="privacy-heading">Privacy Policy</h1>
        <p>Last updated: {{ currentDate }}</p>
      </div>
    </section>

    <main class="privacy-content">
      <div class="container">
        <section class="privacy-section" aria-labelledby="introduction-heading">
          <h2 id="introduction-heading">Introduction</h2>
          <p>
            Welcome to Econo Construction. We respect your privacy and are committed to protecting your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
            website or use our construction services.
          </p>
        </section>

        <section class="privacy-section" aria-labelledby="information-collection-heading">
          <h2 id="information-collection-heading">Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect personal information that you provide directly to us, including:</p>
          <ul>
            <li>Name and contact information (email, phone number, address)</li>
            <li>Project details and requirements</li>
            <li>Communication records</li>
            <li>Payment information (when applicable)</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect certain information, including:</p>
          <ul>
            <li>IP address and browser information</li>
            <li>Device information</li>
            <li>Pages visited and time spent on our site</li>
            <li>Referring websites</li>
          </ul>
        </section>

        <section class="privacy-section" aria-labelledby="information-use-heading">
          <h2 id="information-use-heading">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide construction services and respond to inquiries</li>
            <li>Communicate with you about your projects</li>
            <li>Improve our website and services</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section class="privacy-section" aria-labelledby="information-sharing-heading">
          <h2 id="information-sharing-heading">Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only:</p>
          <ul>
            <li>With service providers who assist us in operating our business</li>
            <li>As required by law or to protect our rights</li>
            <li>With your explicit consent</li>
          </ul>
        </section>

        <section class="privacy-section" aria-labelledby="data-security-heading">
          <h2 id="data-security-heading">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
            internet is 100% secure.
          </p>
        </section>

        <section class="privacy-section" aria-labelledby="your-rights-heading">
          <h2 id="your-rights-heading">Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section class="privacy-section" aria-labelledby="contact-us-heading">
          <h2 id="contact-us-heading">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <address>
            <p><strong>Email:</strong> <a href="mailto:andre@projectmanage.co.za">andre@projectmanage.co.za</a></p>
            <p><strong>Phone:</strong> <a href="tel:+27828002992">+27 82 800 2992</a></p>
            <p><strong>Address:</strong> 14 Hilltop Close, Magalies Golf Estate, Magaliesburg, 1791</p>
          </address>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const currentDate = computed(() => {
  return new Date().toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>

<style scoped>
.privacy-page {
  min-height: 100vh;
  background-color: #1a1a1a;
  color: #ffffff;
}

.privacy-hero {
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  padding: 4rem 0;
  text-align: center;
  border-bottom: 2px solid #ff6b35;
}

.privacy-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.privacy-hero p {
  font-size: 1.2rem;
  color: #ffffff;
}

.privacy-content {
  padding: 4rem 0;
}

.privacy-section {
  margin-bottom: 3rem;
  background: #2a2a2a;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #333;
}

.privacy-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #ff6b35;
}

.privacy-section h3 {
  font-size: 1.5rem;
  margin: 2rem 0 1rem 0;
  color: #ffffff;
}

.privacy-section p {
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #ffffff;
}

.privacy-section ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.privacy-section li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #ffffff;
}

.privacy-section li::before {
  content: "•";
  color: #ff6b35;
  font-weight: bold;
  position: absolute;
  left: 0;
}

address {
  font-style: normal;
}

address p {
  margin-bottom: 0.5rem;
}

address a {
  color: #ffffff;
  text-decoration: none;
}

address a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .privacy-hero h1 {
    font-size: 2.5rem;
  }
  
  .privacy-hero p {
    font-size: 1rem;
  }
  
  .privacy-content {
    padding: 2rem 0;
  }
  
  .privacy-section {
    padding: 1.5rem;
  }
  
  .privacy-section h2 {
    font-size: 1.8rem;
  }
  
  .privacy-section h3 {
    font-size: 1.3rem;
  }
}
</style>
