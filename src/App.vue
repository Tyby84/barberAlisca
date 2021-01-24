<template>
  <div id="app">
    <header>
      <div class="idopont">
        <p>
            Időpontfoglalás
        </p>
    </div>
      <div class="cover">
        <div class="nav">
          <div><router-link to="/">Home</router-link></div>
        <div><router-link to="/about">About</router-link></div>
        <div><router-link to="/prices">Arak</router-link></div>
        <div><router-link to="/contact">Kapcsolat</router-link></div>
        </div>
      </div>
    </header>
    <div class="content">
      <transition name="fade">
        <keep-alive>
      <router-view></router-view>
        </keep-alive>
    </transition> 
    </div>
    <footer>
      <div class="social">
      <a href="#" target="_blank"><img src="images/png/facebook.png" /></a>
      </div>
      <div class="copy">
        Alisca Barber | 2020  
      </div>
      <div class="social">
      <a href="#" target="_blank"><img src="images/png/instagram.png" /></a>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@import './assets/css/mixin.css';
@import './assets/css/base.css';
@import './assets/css/header.css';
@import './assets/css/prices.css';
@import './assets/css/contact.css';

</style>
