<!-- Customers.vue -->
<template>
    <div class="customers-container">
      <!-- Header Section -->
      <div class="customers-header">
        <div class="header-content">
          <h1>Our Customers</h1>
          <p>Trusted by millions worldwide</p>
        </div>
      </div>
  
      <!-- Main Content -->
      <div class="customers-content">
        <!-- Quick Stats -->
        <div class="stats-banner">
          <div class="stat-item">
            <div class="stat-number">95%</div>
            <div class="stat-label">Satisfaction Rate</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-number">5M+</div>
            <div class="stat-label">Active Users</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">Countries</div>
          </div>
        </div>
  
        <!-- Testimonials -->
        <div class="testimonials-section">
          <div class="testimonial-card">
            <div class="testimonial-profile">
              <div class="profile-icon">
                <i class="far fa-building"></i>
              </div>
              <div class="profile-info">
                <h3>ABC Airlines</h3>
                <span>Corporate Client</span>
              </div>
            </div>
            <p class="testimonial-text">
              "Essential tool for our flight planning and operations."
            </p>
          </div>
  
          <div class="testimonial-card">
            <div class="testimonial-profile">
              <div class="profile-icon">
                <i class="far fa-user"></i>
              </div>
              <div class="profile-info">
                <h3>Sarah Parker</h3>
                <span>Premium User</span>
              </div>
            </div>
            <p class="testimonial-text">
              "Perfect for planning outdoor activities. Very accurate!"
            </p>
          </div>
  
          <div class="testimonial-card">
            <div class="testimonial-profile">
              <div class="profile-icon">
                <i class="far fa-store"></i>
              </div>
              <div class="profile-info">
                <h3>City Events Co.</h3>
                <span>Business Partner</span>
              </div>
            </div>
            <p class="testimonial-text">
              "Reliable forecasts for all our outdoor events."
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Customers'
  }
  </script>
  
  <style scoped>
  .customers-container {
    padding: 10px;
    background-color: #f8fafc;
  }
  
  .customers-header {
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
  
  .customers-content {
    max-width: 1200px;
    margin: -3rem auto 4rem;
    padding: 0 2rem;
  }
  
  .stats-banner {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    margin-bottom: 3rem;
  }
  
  .stat-item {
    text-align: center;
  }
  
  .stat-number {
    font-size: 2rem;
    font-weight: 600;
    color: #0ea5e9;
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    color: #64748b;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .stat-divider {
    width: 1px;
    height: 50px;
    background: #e2e8f0;
  }
  
  .testimonials-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .testimonial-card {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
  }
  
  .testimonial-card:hover {
    transform: translateY(-5px);
  }
  
  .testimonial-profile {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .profile-icon {
    width: 50px;
    height: 50px;
    background: #f0f9ff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #0ea5e9;
  }
  
  .profile-info h3 {
    color: #1e293b;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }
  
  .profile-info span {
    color: #64748b;
    font-size: 0.875rem;
  }
  
  .testimonial-text {
    color: #1e293b;
    line-height: 1.6;
    font-style: italic;
  }
  
  .trust-banner {
    background: white;
    border-radius: 12px;
    padding: 3rem 2rem;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }
  
  .trust-banner h2 {
    color: #1e293b;
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
  
  .trust-banner p {
    color: #64748b;
    margin-bottom: 2rem;
  }
  
  .cta-button {
    background: #0ea5e9;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .cta-button:hover {
    background: #0284c7;
  }
  
  .cta-button i {
    transition: transform 0.3s ease;
  }
  
  .cta-button:hover i {
    transform: translateX(4px);
  }
  
  @media (max-width: 768px) {
    .customers-header {
      padding: 3rem 1.5rem;
    }
  
    .header-content h1 {
      font-size: 2rem;
    }
  
    .customers-content {
      margin-top: -2rem;
      padding: 0 1.5rem;
    }
  
    .stats-banner {
      flex-direction: column;
      gap: 2rem;
    }
  
    .stat-divider {
      width: 50%;
      height: 1px;
    }
  }
  
  @media (max-width: 480px) {
    .trust-banner {
      padding: 2rem 1rem;
    }
  
    .trust-banner h2 {
      font-size: 1.5rem;
    }
  }
  </style>