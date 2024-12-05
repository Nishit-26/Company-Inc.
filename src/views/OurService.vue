<!-- Services.vue -->
<template>
    <div class="services-container">
      <!-- Header Section -->
      <div class="services-header">
        <div class="header-content">
          <h1>Our Services</h1>
          <p>Experience weather forecasting at its best</p>
        </div>
      </div>
  
      <!-- Main Content -->
      <div class="services-content">
        <!-- Services Grid -->
        <div class="services-grid">
          <!-- Weather Forecast -->
          <div class="service-card">
            <div class="service-icon">
              <i class="far fa-sun"></i>
            </div>
            <div class="service-info">
              <h3>Weather Forecast</h3>
              <p>Real-time weather updates and forecasts</p>
            </div>
          </div>
  
          <!-- Location Based -->
          <div class="service-card">
            <div class="service-icon">
              <i class="far fa-map-marker-alt"></i>
            </div>
            <div class="service-info">
              <h3>Location Based</h3>
              <p>Accurate local weather information</p>
            </div>
          </div>
  
          <!-- Weather Alerts -->
          <div class="service-card">
            <div class="service-icon">
              <i class="far fa-bell"></i>
            </div>
            <div class="service-info">
              <h3>Weather Alerts</h3>
              <p>Instant notifications for weather changes</p>
            </div>
          </div>
  
          <!-- Weather History -->
          <div class="service-card">
            <div class="service-icon">
              <i class="far fa-clock"></i>
            </div>
            <div class="service-info">
              <h3>Weather History</h3>
              <p>Historical weather data and analysis</p>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Services'
  }
  </script>
  
  <style scoped>
  .services-container {

padding: 10px;    background-color: #f8fafc;
  }
  
  .services-header {
    background: linear-gradient(to right, #0ea5e9, #3b82f6);
    padding: 4rem 2rem;
    text-align: center;
    color: white;
  }
  
  .header-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .header-content h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  .header-content p {
    font-size: 1.25rem;
    opacity: 0.9;
  }
  
  .services-content {
    max-width: 1200px;
    margin: -3rem auto 4rem;
    padding: 0 2rem;
  }
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .service-card {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }
  
  .service-icon {
    background: #f0f9ff;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #0ea5e9;
    transition: all 0.3s ease;
  }
  
  .service-card:hover .service-icon {
    background: #0ea5e9;
    color: white;
  }
  
  .service-info h3 {
    color: #1e293b;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  
  .service-info p {
    color: #64748b;
    line-height: 1.5;
  }
  
  @media (max-width: 768px) {
    .services-header {
      padding: 3rem 1.5rem;
    }
  
    .header-content h1 {
      font-size: 2rem;
    }
  
    .services-content {
      margin-top: -2rem;
      padding: 0 1.5rem;
    }
  
    .feature-banner {
      flex-direction: column;
      text-align: center;
      gap: 1.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .service-card {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 1.5rem;
    }
  
    .service-icon {
      margin-bottom: 0.5rem;
    }
  }
  </style>