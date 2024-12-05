<!-- HomeView.vue -->
<template>
  <div class="widgets-wrapper">
    <div class="widget-container slide-in-left">
        <DateTime />
    </div>
    <div class="widget-container slide-in-right">
      <WeatherWidget />
    </div>
  </div>
</template>

<script>
import WeatherWidget from '@/components/WeatherWidget.vue';
import DateTime from '@/components/DateTime.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'HomeView',
  components: {
    WeatherWidget,
    DateTime,
    Navigation
  }
}
</script>

<style scoped>

</style>