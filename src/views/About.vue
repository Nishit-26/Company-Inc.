<!-- AboutUs.vue -->
<template>
  <div class="about-container">
    <!-- Header Section -->
    <div class="about-header">
      <h1>Our Team</h1>
      <p>Meet the people behind WeatherApp</p>
    </div>

    <!-- Team Section -->
    <div class="team-container">
      <!-- Team Grid -->
      <div class="team-grid">
        <!-- Team Member 1 -->
        <div class="team-card">
          <div class="member-image">
            <div class="avatar">
              <div class="avatar-face">
                <div class="avatar-eyes"></div>
                <div class="avatar-smile"></div>
                <div class="avatar-glasses"></div>
              </div>
            </div>
          </div>
          <div class="member-info">
            <h3>Nishit</h3>
            <div class="social-links">
              <a href="#" class="social-link">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Team Member 2 -->
        <div class="team-card">
          <div class="member-image">
            <div class="avatar">
              <div class="avatar-face avatar-color-2">
                <div class="avatar-eyes"></div>
                <div class="avatar-smile"></div>
                <div class="avatar-headphones"></div>
              </div>
            </div>
          </div>
          <div class="member-info">
            <h3>Ritish</h3>
            <div class="social-links">
              <a href="#" class="social-link">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Team Member 3 -->
        <div class="team-card">
          <div class="member-image">
            <div class="avatar">
              <div class="avatar-face avatar-color-3">
                <div class="avatar-eyes"></div>
                <div class="avatar-smile"></div>
                <div class="avatar-hat"></div>
              </div>
            </div>
          </div>
          <div class="member-info">
            <h3>Puneet</h3>
            <div class="social-links">
              <a href="#" class="social-link">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Team Member 4 -->
        <div class="team-card">
          <div class="member-image">
            <div class="avatar">
              <div class="avatar-face avatar-color-4">
                <div class="avatar-eyes"></div>
                <div class="avatar-smile"></div>
                <div class="avatar-bowtie"></div>
              </div>
            </div>
          </div>
          <div class="member-info">
            <h3>Siddharth</h3>
            <div class="social-links">
              <a href="#" class="social-link">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style scoped>
.about-container {
  min-height: 100vh;
  background-color: #f8fafc;
}

.about-header {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(to right, #0ea5e9, #3b82f6);
  color: white;
}

.about-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.about-header p {
  font-size: 1.25rem;
  opacity: 0.9;
}

.team-container {
  max-width: 1200px;
  margin: -2rem auto 4rem;
  padding: 0 2rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.team-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.member-image {
  width: 120px;
  height: 120px;
  background: #f0f9ff;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Avatar Base */
.avatar {
  width: 80px;
  height: 80px;
  position: relative;
}

.avatar-face {
  width: 60px;
  height: 60px;
  background: #FFD93D;
  border-radius: 50%;
  position: relative;
  margin: 0 auto;
  animation: bounce 3s ease-in-out infinite;
}

.avatar-color-2 { background: #98FB98; }
.avatar-color-3 { background: #FFA07A; }
.avatar-color-4 { background: #87CEEB; }

/* Avatar Features */
.avatar-eyes {
  position: absolute;
  top: 25px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.avatar-eyes::before,
.avatar-eyes::after {
  content: '';
  width: 8px;
  height: 8px;
  background: #333;
  border-radius: 50%;
  position: relative;
  animation: blink 4s infinite;
}

.avatar-smile {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 12px;
  border-bottom: 3px solid #333;
  border-radius: 0 0 20px 20px;
}

/* Accessories */
.avatar-glasses {
  position: absolute;
  top: 22px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 15px;
  border: 2px solid #333;
  border-radius: 5px;
}

.avatar-headphones {
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 20px;
  border: 3px solid #333;
  border-radius: 20px 20px 0 0;
}

.avatar-hat {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 20px;
  background: #333;
  border-radius: 5px 5px 0 0;
}

.avatar-bowtie {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 10px;
  background: #e74c3c;
  clip-path: polygon(0 50%, 50% 0, 100% 50%, 50% 100%);
}

/* Member Info */
.member-info h3 {
  color: #1e293b;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  color: #64748b;
  font-size: 1.25rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  color: #0ea5e9;
  transform: translateY(-2px);
}

/* Animations */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes blink {
  0%, 96%, 100% { transform: scaleY(1); }
  98% { transform: scaleY(0); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .about-header {
    padding: 3rem 1.5rem;
  }

  .about-header h1 {
    font-size: 2rem;
  }

  .team-container {
    padding: 0 1.5rem;
    margin-top: -1.5rem;
  }
}

@media (max-width: 480px) {
  .team-grid {
    grid-template-columns: 1fr;
  }

  .member-image {
    width: 100px;
    height: 100px;
  }

  .avatar {
    width: 70px;
    height: 70px;
  }

  .avatar-face {
    width: 50px;
    height: 50px;
  }
}
</style>