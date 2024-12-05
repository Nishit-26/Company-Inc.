<!-- WeatherWidget.vue -->
<template>
  <div class="container py-3">
    <div class="card weather-widget">
      <div class="card-body weather_container">
        <!-- Header with Location and Refresh -->
        <div class="location-header mb-4">
          <div class="location-info">
            <i class="bi bi-geo-alt-fill location-icon"></i>
            <h2 class="location-title">Toronto, CA</h2>
          </div>
          <button @click="fetchWeatherData" class="refresh-btn" :disabled="loading">
            <i class="bi bi-arrow-clockwise" :class="{ 'rotating': loading }"></i>
          </button>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="loading-container">
          <div class="loading-content">
            <div class="spinner-grow text-primary" role="status"></div>
            <div class="spinner-grow text-primary ms-2" role="status" style="animation-delay: 0.2s"></div>
            <div class="spinner-grow text-primary ms-2" role="status" style="animation-delay: 0.4s"></div>
          </div>
          <span class="loading-text">Updating weather information...</span>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="error-container">
          <div class="alert alert-danger fade-in" role="alert">
            <i class="bi bi-exclamation-triangle-fill me-2"></i>
            <span>{{ error }}</span>
          </div>
        </div>

        <!-- Weather Content -->
        <template v-else>
          <!-- Current Weather -->
          <div class="row g-4">
            <div class="col-md-6">
              <div class="current-weather-card">
                <div class="temp-display" v-if="currentWeather && currentWeather.temp !== null">
                  <span class="temperature">{{ currentWeather.temp }}</span>
                  <span class="degree">°C</span>
                  <i :class="getWeatherIcon(currentWeather.description || '')" class="weather-icon"></i>
                </div>
                <div class="weather-description" v-if="currentWeather">
                  <i class="bi bi-cloud-fill me-2"></i>
                  {{ currentWeather.description || 'No data available' }}
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="weather-details" v-if="currentWeather">
                <div class="detail-item">
                  <i class="bi bi-thermometer-half"></i>
                  <div class="detail-info">
                    <span class="label">Feels like</span>
                    <span class="value">{{ currentWeather.feelsLike || '--' }}°C</span>
                  </div>
                </div>

                <div class="detail-item">
                  <i class="bi bi-droplet-fill"></i>
                  <div class="detail-info">
                    <span class="label">Humidity</span>
                    <span class="value">{{ currentWeather.humidity || '--' }}%</span>
                  </div>
                </div>

                <div class="detail-item">
                  <i class="bi bi-thermometer-high text-danger"></i>
                  <div class="detail-info">
                    <span class="label">High</span>
                    <span class="value">{{ currentWeather.tempMax || '--' }}°C</span>
                  </div>
                </div>

                <div class="detail-item">
                  <i class="bi bi-thermometer-low text-info"></i>
                  <div class="detail-info">
                    <span class="label">Low</span>
                    <span class="value">{{ currentWeather.tempMin || '--' }}°C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Forecast Section -->
          <div class="forecast-section mt-4" v-if="forecast && forecast.length">
            <h3 class="forecast-title">
              <i class="bi bi-calendar3-week"></i>
              2-Day Forecast
            </h3>
            <div class="row g-3 mt-2">
              <div v-for="day in forecast" :key="day.date" class="col-md-6">
                <div class="forecast-card">
                  <div class="forecast-date">{{ day.date }}</div>
                  <div class="forecast-main">
                    <div class="forecast-temp">{{ day.temp }}°C</div>
                    <i :class="getWeatherIcon(day.description)" class="forecast-icon"></i>
                  </div>
                  <div class="forecast-description">{{ day.description }}</div>
                  <div class="forecast-minmax">
                    <span class="max-temp">
                      <i class="bi bi-arrow-up-circle-fill"></i>
                      {{ day.tempMax }}°C
                    </span>
                    <span class="min-temp">
                      <i class="bi bi-arrow-down-circle-fill"></i>
                      {{ day.tempMin }}°C
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherWidget',
  data() {
    return {
      loading: true,
      error: null,
      apiKey: 'ad29d948814ccf11d11405fb569a59d3',
      currentWeather: {
        temp: null,
        feelsLike: null,
        tempMin: null,
        tempMax: null,
        humidity: null,
        description: ''
      },
      forecast: []
    }
  },
  methods: {
    formatDate(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    },
    getWeatherIcon(description) {
      const iconMap = {
        'clear sky': 'bi-sun-fill',
        'few clouds': 'bi-cloud-sun-fill',
        'scattered clouds': 'bi-cloud-fill',
        'broken clouds': 'bi-clouds-fill',
        'shower rain': 'bi-cloud-rain-heavy-fill',
        'rain': 'bi-cloud-rain-fill',
        'thunderstorm': 'bi-cloud-lightning-fill',
        'snow': 'bi-snow',
        'mist': 'bi-cloud-haze-fill',
        'overcast clouds': 'bi-clouds-fill',
        'light rain': 'bi-cloud-drizzle-fill'
      };
      return `bi ${iconMap[description.toLowerCase()] || 'bi-cloud-fill'}`;
    },
    async fetchWeatherData() {
      this.loading = true;
      this.error = null;

      try {
        // Current Weather API Call
        const currentResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&units=metric&appid=${this.apiKey}`
        );

        if (!currentResponse.ok) {
          throw new Error(`HTTP error! status: ${currentResponse.status}`);
        }

        const currentData = await currentResponse.json();

        // Update current weather data
        this.currentWeather = {
          temp: Math.round(currentData.main.temp) || 0,
          feelsLike: Math.round(currentData.main.feels_like) || 0,
          tempMin: Math.round(currentData.main.temp_min) || 0,
          tempMax: Math.round(currentData.main.temp_max) || 0,
          humidity: currentData.main.humidity || 0,
          description: currentData.weather[0]?.description || 'No description available'
        };

        // Forecast API Call
        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=Toronto,CA&units=metric&appid=${this.apiKey}`
        );

        if (!forecastResponse.ok) {
          throw new Error(`HTTP error! status: ${forecastResponse.status}`);
        }

        const forecastData = await forecastResponse.json();

        // Process forecast data
        const dailyForecasts = {};

        forecastData.list.forEach(item => {
          const date = new Date(item.dt * 1000).toLocaleDateString();
          if (!dailyForecasts[date]) {
            dailyForecasts[date] = {
              temps: [],
              descriptions: [],
              date: this.formatDate(item.dt)
            };
          }
          dailyForecasts[date].temps.push(item.main.temp);
          dailyForecasts[date].descriptions.push(item.weather[0].description);
        });

        this.forecast = Object.values(dailyForecasts)
          .slice(1, 3)
          .map(day => ({
            date: day.date,
            temp: Math.round(day.temps.reduce((a, b) => a + b) / day.temps.length),
            tempMax: Math.round(Math.max(...day.temps)),
            tempMin: Math.round(Math.min(...day.temps)),
            description: day.descriptions[Math.floor(day.descriptions.length / 2)]
          }));

      } catch (err) {
        console.error('Weather fetch error:', err);
        this.error = 'Error fetching weather data. Please try again.';
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.fetchWeatherData();
    setInterval(this.fetchWeatherData, 30 * 60 * 1000);
  }
}
</script>


<style scoped>
.weather_container {}


@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.css");

/* Main Widget Styling */
.weather-widget {
  border: none;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  background: linear-gradient(to bottom right, #ffffff, #f8f9fa);
  transition: all 0.3s ease;
}

.weather-widget:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

/* Location Header */
.location-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(var(--bs-primary-rgb), 0.1);
}

.location-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.location-icon {
  color: var(--bs-primary);
  font-size: 1.5rem;
}

.location-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
}

.refresh-btn {
  background: none;
  border: 2px solid var(--bs-primary);
  color: var(--bs-primary);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.refresh-btn:hover:not(:disabled) {
  background: var(--bs-primary);
  color: white;
}

.refresh-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Loading State */
.loading-container {
  text-align: center;
  padding: 2rem;
}

.loading-content {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.loading-text {
  color: #6c757d;
  font-size: 0.9rem;
}

/* Current Weather */
.current-weather-card {
  background: rgba(var(--bs-primary-rgb), 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
}

.temp-display {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.temperature {
  font-size: 4rem;
  font-weight: 300;
  color: var(--bs-primary);
}

.degree {
  font-size: 2rem;
  color: var(--bs-primary);
  margin-top: -1.5rem;
}

.weather-icon {
  font-size: 3rem;
  color: var(--bs-primary);
  margin-left: 1rem;
}

.weather-description {
  color: #6c757d;
  font-size: 1.1rem;
  text-transform: capitalize;
  margin-top: 0.5rem;
}

/* Weather Details */
.weather-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  height: 100%;
}

.detail-item {
  background: white;
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease;
}

.detail-item:hover {
  transform: translateY(-2px);
}

.detail-item i {
  font-size: 1.5rem;
  color: var(--bs-primary);
}

.detail-info {
  display: flex;
  flex-direction: column;
}

.detail-info .label {
  font-size: 0.8rem;
  color: #6c757d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-info .value {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
}

/* Forecast Section */
.forecast-section {
  padding-top: 1.5rem;
  border-top: 2px solid rgba(var(--bs-primary-rgb), 0.1);
}

.forecast-title {
  font-size: 1.2rem;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.forecast-title i {
  color: var(--bs-primary);
}

.forecast-card {
  background: white;
  padding: 1.25rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
}

.forecast-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.forecast-date {
  color: var(--bs-primary);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.forecast-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
}

.forecast-temp {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
}

.forecast-icon {
  font-size: 2rem;
  color: var(--bs-primary);
}

.forecast-description {
  color: #6c757d;
  font-size: 0.9rem;
  text-transform: capitalize;
  margin: 0.5rem 0;
}

.forecast-minmax {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.max-temp {
  color: var(--bs-danger);
}

.min-temp {
  color: var(--bs-info);
}

.forecast-minmax i {
  margin-right: 0.25rem;
}

/* Animations */
.rotating {
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .weather-details {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .temperature {
    font-size: 3rem;
  }

  .weather-icon {
    font-size: 2.5rem;
  }

  .detail-item {
    padding: 0.75rem;
  }
}
</style>