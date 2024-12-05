<!-- Navigation.vue -->
<template>
    <nav class="nav-menu">
      <!-- Desktop Menu -->
      <div class="desktop-menu"> 
        <div class="menu-items">
          <router-link to="/" class="menu-item">
            <i class="far fa-compass"></i>
            <span>Home</span>
          </router-link>
          
          <router-link to="/about" class="menu-item">
            <i class="far fa-building"></i>
            <span>About Us</span>
          </router-link>
          
          <router-link to="/services" class="menu-item">
            <i class="far fa-list-alt"></i>
            <span>Our Services</span>
          </router-link>
          
          <router-link to="/customers" class="menu-item">
            <i class="far fa-handshake"></i>
            <span>Our Customers</span>
          </router-link>
        </div>
      </div>
  
      <!-- Mobile Menu -->
      <div class="mobile-menu">
        <div class="mobile-header">
          <div class="logo">
            <i class="far fa-cloud"></i>
            <span>WeatherApp</span>
          </div>
          <button @click="toggleMenu" class="menu-toggle">
            <i :class="isMenuOpen ? 'far fa-times' : 'far fa-bars'"></i>
          </button>
        </div>
  
        <div class="mobile-nav" :class="{ 'is-open': isMenuOpen }">
          <router-link to="/" class="mobile-item" @click="closeMenu">
            <i class="far fa-compass"></i>
            <span>Home</span>
          </router-link>
          
          <router-link to="/about" class="mobile-item" @click="closeMenu">
            <i class="far fa-building"></i>
            <span>About Us</span>
          </router-link>
          
          <router-link to="/services" class="mobile-item" @click="closeMenu">
            <i class="far fa-list-alt"></i>
            <span>Our Services</span>
          </router-link>
          
          <router-link to="/customers" class="mobile-item" @click="closeMenu">
            <i class="far fa-handshake"></i>
            <span>Our Customers</span>
          </router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navigation',
    data() {
      return {
        isMenuOpen: false
      }
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      closeMenu() {
        this.isMenuOpen = false;
      }
    }
  }
  </script>
  
  <style scoped>
  

  
  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: #0ea5e9;
  }
  
  .logo i {
    font-size: 1.5rem;
  }
  
  .menu-items {
    display: flex;
    gap: 2rem;
  }
  
  .menu-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #64748b;
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 6px;
    transition: all 0.2s ease;
  }
  
  .menu-item:hover {
    color: #0ea5e9;
    background-color: #f0f9ff;
  }
  
  .menu-item.router-link-active {
    color: #0ea5e9;
    background-color: #f0f9ff;
  }
  
  .menu-item i {
    font-size: 1.1rem;
  }
  
  /* Mobile Menu */
  .mobile-menu {
    display: none;
    padding: 1rem;
  }
  
  .mobile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .menu-toggle {
    background: none;
    border: none;
    font-size: 1.25rem;
    color: #64748b;
    cursor: pointer;
    padding: 0.5rem;
  }
  
  .mobile-nav {
    display: none;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 0;
  }
  
  .mobile-nav.is-open {
    display: flex;
  }
  
  .mobile-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #64748b;
    text-decoration: none;
    padding: 0.75rem;
    border-radius: 6px;
    transition: all 0.2s ease;
  }
  
  .mobile-item:hover {
    color: #0ea5e9;
    background-color: #f0f9ff;
  }
  
  .mobile-item.router-link-active {
    color: #0ea5e9;
    background-color: #f0f9ff;
  }
  
  @media (max-width: 768px) {
    .desktop-menu {
      display: none;
    }
  
    .mobile-menu {
      display: block;
    }
  }
  </style>