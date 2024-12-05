<!-- DateTime.vue -->
<template>
  <div class="datetime-widget">
    <!-- Main DateTime Display -->
    <div class="main-display">
      <div class="clock-header">
        <i class="fas fa-clock pulse"></i>
        <span>Current Time</span>
      </div>
      <div class="digital-clock">
        <div class="time-wrapper">
          <i class="fas fa-globe glow"></i>
          <div class="formatted-time">{{ formattedDateTime }}</div>
        </div>
      </div>
    </div>

    <!-- Date Details with Enhanced Icons -->
    <div class="date-details">
      <div class="detail-item">
        <div class="icon-wrapper">
          <i class="fas fa-calendar-day rotate-icon"></i>
        </div>
        <div class="detail-content">
          <div class="detail-value slide-in">{{ dayOfWeek }}</div>
          <div class="detail-label">
            <i class="fas fa-sun bounce"></i>
            Day
          </div>
        </div>
      </div>

      <div class="detail-item">
        <div class="icon-wrapper">
          <i class="fas fa-calendar-alt rotate-icon"></i>
        </div>
        <div class="detail-content">
          <div class="detail-value slide-in">{{ dayAndMonth }}</div>
          <div class="detail-label">
            <i class="fas fa-moon bounce"></i>
            Date
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Script remains the same as in your code
export default {
  name: 'DateTime',
  data() {
    return {
      formattedDateTime: '',
      fullDate: '',
      dayOfWeek: '',
      dayAndMonth: '',
      hours: '',
      minutes: '',
      seconds: '',
      timer: null
    }
  },
  methods: {
    formatTwoDigits(num) {
      return num.toString().padStart(2, '0');
    },
    updateDateTime() {
      const now = new Date();
      
      // Format: YYYY-MM-DD HH:mm:ss
      const year = now.getFullYear();
      const month = this.formatTwoDigits(now.getMonth() + 1);
      const day = this.formatTwoDigits(now.getDate());
      const hours = this.formatTwoDigits(now.getHours());
      const minutes = this.formatTwoDigits(now.getMinutes());
      const seconds = this.formatTwoDigits(now.getSeconds());
      
      this.formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      
      this.dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
      
      this.dayAndMonth = now.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric'
      });
    }
  },
  mounted() {
    this.updateDateTime();
    this.timer = setInterval(this.updateDateTime, 1000);
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
</script>

<style scoped>
.datetime-widget {
  background: linear-gradient(145deg, #ffffff, #f0f2f5);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 
    0 10px 20px rgba(0, 0, 0, 0.1),
    0 6px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.datetime-widget:hover {
  transform: translateY(-5px);
}

.clock-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 1rem;
  color: #4a5568;
  font-size: 1.2rem;
  font-weight: 500;
}

.main-display {
  text-align: center;
  margin-bottom: 2rem;
}

.digital-clock {
  padding: 1.5rem;
  background: linear-gradient(135deg, #2c5282, #4a87c8);
  border-radius: 16px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(43, 108, 176, 0.2);
}

.time-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
}

.formatted-time {
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 2px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.date-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.detail-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 1);
}

.icon-wrapper {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #3182ce, #4299e1);
  border-radius: 12px;
  color: white;
  font-size: 1.5rem;
}

.detail-content {
  flex-grow: 1;
}

.detail-value {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.25rem;
}

.detail-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #718096;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Animations */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes glow {
  0% { filter: brightness(1); }
  50% { filter: brightness(1.3); }
  100% { filter: brightness(1); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}

.pulse {
  animation: pulse 2s infinite;
  color: #3182ce;
}

.rotate-icon {
  animation: rotate 20s linear infinite;
}

.glow {
  animation: glow 2s infinite;
  color: #ffffff;
  margin-right: 1rem;
}

.bounce {
  animation: bounce 2s infinite;
}

.slide-in {
  animation: slideIn 0.5s ease-out;
}

/* Media Queries */
@media (max-width: 768px) {
  .datetime-widget {
    padding: 1.5rem;
  }

  .formatted-time {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .formatted-time {
    font-size: 1.5rem;
  }

  .date-details {
    grid-template-columns: 1fr;
  }

  .icon-wrapper {
    width: 40px;
    height: 40px;
    font-size: 1.25rem;
  }
}
</style>