<template>
  <div id="app">
    <header>
      <div class="idopont">
        <p>
            <a href="http://bwnet.hu/partner/AliscaBarberSalon" target="_blank">Időpontfoglalás</a> 
        </p>
    </div>
      <div class="cover">
        <div class="nav">
        <div><router-link to="/">Home</router-link></div>
        <div><router-link to="/about">Rólam</router-link></div>
        <div><router-link to="/prices">Árak</router-link></div>
        <div><router-link to="/partnerek">Partnerek</router-link></div>
        <div><router-link to="/contact">Kapcsolat</router-link></div>
        </div>
      </div>

    <div class="menu-bar menu-bar-animated" @click="toggleAnim">
				<div class="menu_bar__bar" v-bind:class="{ menu_bar__close: isActive }">

        </div>
			</div>
		<nav class="navigation_mobile" v-show="clicked"  @click="closeMenu">
			
			<ul class="nav__mobile__ul">
        <div><router-link to="/"><i class="fas fa-home"></i> Home</router-link></div>
        <div><router-link to="/about"><i class="far fa-user"></i> Rólam</router-link></div>
        <div><router-link to="/prices"><i class="fas fa-coins"></i> Árak</router-link></div>
        <div><router-link to="/partnerek"> <i class="fas fa-users"></i> Partnerek</router-link></div>
        <div><router-link to="/contact"><i class="far fa-address-card"></i> Kapcsolat</router-link></div>
			</ul>
		</nav>
 
    </header>
    <div class="content" @click="closeMenu">
      <!-- <transition name="fade"> -->
        <keep-alive>
      <router-view></router-view>
        </keep-alive>
    <!-- </transition>  -->
    </div>
    <footer>
      <div class="social">
      <a href="https://www.facebook.com/aliscabarbersalon" target="_blank"><img src="images/png/facebook.png" /></a>
      </div>
      <div class="copy">
        Alisca Barber | 2020  
      </div>
      <div class="social">
      <a href="https://www.instagram.com/aliscabarbersalon/?fbclid=IwAR2v6lFDoWxcTMUWebr-AdvvcLtqEMMikS3J1D2MN6wvV_IW9i366J7xXAA" target="_blank"><img src="images/png/instagram.png" /></a>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        clicked: false,
        isActive: false,
        time: new Date(),
        istwelve: false     
        
      }
      },
      mounted() {
        //this.calcHour();
        this.clickClose();
        this.closeMenu();
      },
      methods: {
      clickClose() {
        this.clicked = false;
      },
      toggleAnim() {
        this.clicked = !this.clicked;
        this.isActive = !this.isActive;
      },
      closeMenu() {
        this.clicked = false;
        this.isActive = false;
      },
      // calcHour() {
      //   console.log('fut');
      //   //let time = new Date();
      //   let timeNow = this.time.getHours();
      //   console.log(timeNow);
      //   if (timeNow > 12) {
      //     this.istwelve = false;
      //   } else {
      //     this.istwelve = true;
      //   }
      // }
      }
  }
</script>

<style>
@import './assets/css/mixin.css';
@import './assets/css/base.css';
@import './assets/css/content.css';
@import './assets/css/header.css';
@import './assets/css/prices.css';
@import './assets/css/contact.css';
@import './assets/css/partnerek.css';

</style>
