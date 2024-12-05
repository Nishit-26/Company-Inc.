<template>
  <div class="app-wrapper">
    <nav class="navbar">
      <div class="nav-content">
        <div class="logo-container">
          <i class="bi bi-cloud-sun-fill weather-icon"></i>
          <h1 class="logo">Company Inc</h1>
        </div>
      </div>
      <Navigation />
    </nav>
    <main class="main-content">
      <router-view />
    </main>

    <footer class="footer">
      <p>Weather app</p>
      <div class="social-links">
        <a href="https://github.com/Nishit268/Company-Inc." class="social-link"><i class="bi bi-github"></i></a>
        <a href="#" class="social-link"><i class="bi bi-twitter-x"></i></a>
      </div>
    </footer>
  </div>
</template>

<script>
import WeatherWidget from '@/components/WeatherWidget.vue';
import DateTime from '@/components/DateTime.vue';
import Navigation from '@/components/Navigation.vue';


export default {
  components: {
    WeatherWidget,
    DateTime,
    Navigation
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.css");

/* Reset and Base Styles */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1a1a1a;
  min-height: 100vh;
}

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%);
}

/* Navbar Styles */
.navbar {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;

}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.weather-icon {
  font-size: 1.75rem;
  color: #0ea5e9;
  margin-top: -2px;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle {
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.25rem;
  transition: color 0.3s ease;
}

.theme-toggle:hover {
  color: #0ea5e9;
}

.location-select {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(14, 165, 233, 0.1);
  border-radius: 2rem;
  color: #0ea5e9;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.location-select:hover {
  background: rgba(14, 165, 233, 0.15);
}

/* Main Content Area */
.main-content {
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

/* Footer Styles */
.footer {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  text-align: center;
  color: #64748b;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
}

.social-link {
  color: #64748b;
  font-size: 1.25rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #0ea5e9;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-content {
    padding: 0 1rem;
  }

  .logo {
    font-size: 1.25rem;
  }

  .location-select span {
    display: none;
  }

  .location-select {
    padding: 0.5rem;
  }
}

@media (max-width: 480px) {
  .nav-content {
    padding: 0 0.75rem;
  }

  .weather-icon {
    font-size: 1.5rem;
  }

  .logo {
    font-size: 1.125rem;
  }
}
</style>