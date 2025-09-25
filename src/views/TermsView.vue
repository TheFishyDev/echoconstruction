<template>
  <div class="terms-page">
    <section class="terms-hero" aria-labelledby="terms-heading">
      <div class="container">
        <h1 id="terms-heading">Terms of Service</h1>
        <p>Last updated: {{ currentDate }}</p>
      </div>
    </section>

    <main class="terms-content">
      <div class="container">
        <section class="terms-section" aria-labelledby="acceptance-heading">
          <h2 id="acceptance-heading">Acceptance of Terms</h2>
          <p>
            By accessing and using this website and the services provided by Econo Construction, you accept and agree 
            to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section class="terms-section" aria-labelledby="services-heading">
          <h2 id="services-heading">Our Services</h2>
          <p>
            Econo Construction provides professional building and construction services including but not limited to:
          </p>
          <ul>
            <li>Residential construction and renovation</li>
            <li>Commercial construction projects</li>
            <li>Project management services</li>
            <li>Building consultations and assessments</li>
          </ul>
        </section>

        <section class="terms-section" aria-labelledby="client-responsibilities-heading">
          <h2 id="client-responsibilities-heading">Client Responsibilities</h2>
          <p>As a client of Econo Construction, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information about your project requirements</li>
            <li>Obtain necessary permits and approvals for your construction project</li>
            <li>Make timely payments as agreed upon in contracts</li>
            <li>Provide access to the construction site as required</li>
            <li>Communicate promptly about any concerns or changes</li>
          </ul>
        </section>

        <section class="terms-section" aria-labelledby="payment-terms-heading">
          <h2 id="payment-terms-heading">Payment Terms</h2>
          <p>
            Payment terms will be specified in individual project contracts. Generally, payment schedules include:
          </p>
          <ul>
            <li>Initial deposit to commence work</li>
            <li>Progress payments based on project milestones</li>
            <li>Final payment upon project completion</li>
          </ul>
          <p>
            All payments are due within the specified timeframe. Late payments may incur additional charges.
          </p>
        </section>

        <section class="terms-section" aria-labelledby="project-changes-heading">
          <h2 id="project-changes-heading">Project Changes</h2>
          <p>
            Any changes to the original project scope must be documented in writing and agreed upon by both parties. 
            Changes may affect project timelines and costs.
          </p>
        </section>

        <section class="terms-section" aria-labelledby="warranty-heading">
          <h2 id="warranty-heading">Warranty and Quality</h2>
          <p>
            Econo Construction stands behind the quality of our work. We provide warranties for our construction 
            services as specified in individual contracts and as required by South African law.
          </p>
        </section>

        <section class="terms-section" aria-labelledby="limitation-heading">
          <h2 id="limitation-heading">Limitation of Liability</h2>
          <p>
            Econo Construction shall not be liable for any indirect, incidental, special, consequential or punitive 
            damages, including without limitation, lost profits or lost data, arising out of or relating to these 
            terms or our services.
          </p>
        </section>

        <section class="terms-section" aria-labelledby="termination-heading">
          <h2 id="termination-heading">Termination</h2>
          <p>
            Either party may terminate the service agreement with written notice. Termination terms and conditions 
            will be specified in individual project contracts.
          </p>
        </section>

        <section class="terms-section" aria-labelledby="governing-law-heading">
          <h2 id="governing-law-heading">Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of South Africa. 
            Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the South African courts.
          </p>
        </section>

        <section class="terms-section" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us:
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
.terms-page {
  min-height: 100vh;
  background-color: #1a1a1a;
  color: #ffffff;
}

.terms-hero {
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  padding: 4rem 0;
  text-align: center;
  border-bottom: 2px solid #ff6b35;
}

.terms-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.terms-hero p {
  font-size: 1.2rem;
  color: #cccccc;
}

.terms-content {
  padding: 4rem 0;
}

.terms-section {
  margin-bottom: 3rem;
  background: #2a2a2a;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #333;
}

.terms-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #ff6b35;
}

.terms-section p {
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #cccccc;
}

.terms-section ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.terms-section li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #cccccc;
}

.terms-section li::before {
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
  color: #ff6b35;
  text-decoration: none;
}

address a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .terms-hero h1 {
    font-size: 2.5rem;
  }
  
  .terms-hero p {
    font-size: 1rem;
  }
  
  .terms-content {
    padding: 2rem 0;
  }
  
  .terms-section {
    padding: 1.5rem;
  }
  
  .terms-section h2 {
    font-size: 1.8rem;
  }
}
</style>
