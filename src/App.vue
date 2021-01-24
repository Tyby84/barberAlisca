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
        <div><router-link to="/about">Rólam</router-link></div>
        <div><router-link to="/prices">Árak</router-link></div>
        <div><router-link to="/contact">Partnerek</router-link></div>
        <div><router-link to="/contact">Kapcsolat</router-link></div>
        </div>
      </div>

    <div class="menu-bar menu-bar-animated" @click="toggleAnim">
				<div class="menu_bar__bar" v-bind:class="{ menu_bar__close: isActive }">

        </div>
			</div>
		<nav class="navigation_mobile" v-show="clicked">
			
			<ul class="nav__mobile__ul">
        <div><router-link to="/"><i class="fas fa-home"></i> Home</router-link></div>
        <div><router-link to="/about"><i class="far fa-user"></i> Rólam</router-link></div>
        <div><router-link to="/prices"><i class="fas fa-wallet"></i> Árak</router-link></div>
        <div><router-link to="/partnerek"> <i class="fas fa-users"></i> Partnerek</router-link></div>
        <div><router-link to="/contact"><i class="far fa-address-card"></i> Kapcsolat</router-link></div>

				<!-- <a href="#rolunk"><li class="nav__mobile__li"> Rólunk</li></a>
				<a href="#infok"><li class="nav__mobile__li"> Hasznos infók</li></a>
				<a href="#elerhetoseg"><li class="nav__mobile__li"> Elérhetőségeink</li></a>
				<a href="#"><li class="nav__mobile__li"> Galéria</li></a> -->
			</ul>
		</nav>

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
    data: function() {
      return {
        clicked: false,
        isActive: false
        
      }
      },
      mounted() {
        this.clickClose;
      },
      methods: {
      clickClose() {
        this.clicked = false;
      },
      toggleAnim() {
        this.clicked = !this.clicked;
        this.isActive = !this.isActive;
      }
      
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
