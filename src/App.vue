<script setup>
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div id="app">
    <NavBar />
    <main class="main-content">
      <RouterView />
    </main>
    <FooterComponent />
  </div>
</template>

<style>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #1a1a1a;
  color: #ffffff;
  font-size: 24px;
  line-height: 1.6;
  overflow-x: hidden;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  body {
    font-size: 18px;
  }
  
  h1 { font-size: 3.5rem; }
  h2 { font-size: 2.8rem; }
  h3 { font-size: 2.2rem; }
  h4 { font-size: 1.8rem; }
  h5 { font-size: 1.5rem; }
  h6 { font-size: 1.3rem; }
  
  .main-content {
    padding-top: 60px;
  }
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

h1 { font-size: 4.5rem; }
h2 { font-size: 3.5rem; }
h3 { font-size: 2.8rem; }
h4 { font-size: 2.2rem; }
h5 { font-size: 1.8rem; }
h6 { font-size: 1.5rem; }

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 70px; /* Account for fixed navbar */
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #e0e0e0;
}

::-webkit-scrollbar-thumb {
  background: #666666;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #888888;
}

/* Selection Color */
::selection {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

::-moz-selection {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

/* Focus Styles */
button:focus,
input:focus,
textarea:focus,
select:focus {
  outline: 2px solid #888888;
  outline-offset: 2px;
}

/* Utility Classes */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.text-center {
  text-align: center;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Animation Classes */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}

.slide-in-left {
  animation: slideInLeft 0.6s ease-out;
}

.slide-in-right {
  animation: slideInRight 0.6s ease-out;
}

/* Responsive Typography */
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
  
  .container {
    padding: 0 1rem;
  }
}

/* Print Styles */
@media print {
  .navbar,
  .footer {
    display: none;
  }
  
  .main-content {
    padding-top: 0;
  }
  
  body {
    background: white;
    color: black;
  }
}
</style>
