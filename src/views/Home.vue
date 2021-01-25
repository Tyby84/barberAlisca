<template>
   <div>
      <h2 class="text-centered fade">Home</h2>
      <!-- <div class="video">
         <video width="40%" controls >
       <source src="/images/alisca_barber.mp4" type="video/mp4">
       Your browser does not support the video tag.
       </video>
      </div> -->
      <!-- <p class="coolfloat home"><i class="fas fa-quote-left"></i> A siker az, amikor elégedetten állsz fel a fodrász székből! <i class="fas fa-quote-right"></i></p> -->
      <div class="coolfloat home">
         <p class="floatleft">
            Tradicionális borbély szalon Szekszárd belvárosában.
         </p>
         <p class="floatright">
            Éld át a klasszikus borbély élményt!
         </p>
         <p class="floattop">
            Szalonunk a klasszikus, old school vonalat képviseli, vegyítve a new school irányvonallal.
         </p>
      </div>
      <div class="slides floatbot">
         <vueper-slides
            ref="myVueperSlides"
            autoplay
            :pause-on-hover="pauseOnHover"
            @autoplay-pause="internalAutoPlaying = false"
            @autoplay-resume="internalAutoPlaying = true">
            <vueper-slide
            v-for="(slide) in slides"
            :key="slide.id"
            :title="slide.title"
            :content="slide.content"
            :image="slide.image" />
      </vueper-slides>
      </div>
   </div>
</template>

<script>
// @ is an alias to /src
// import CategoryLink from '@/components/CategoryLink.vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  
  name: 'home',
  components: { VueperSlides, VueperSlide },
  data: () => ({
  pauseOnHover: true,
  autoPlaying: true,
  internalAutoPlaying: true,
  slides: [
    {
      id: 'slide-1',
          image: '/images/slides/tomi2.jpg',
    },
    {
      id: 'slide-2',
          image: '/images/slides/2.jpg',
    },
    {
      id: 'slide-3',
          image: '/images/slides/3.jpg',
    },
    {
      id: 'slide-4',
          image: '/images/slides/4.jpg',
    },
    {
      id: 'slide-5',
          image: '/images/slides/5.jpg',
    },
    {
      id: 'slide-6',
          image: '/images/slides/6.jpg',
    },
    {
      id: 'slide-7',
          image: '/images/slides/7.jpg',
    },
    {
      id: 'slide-8',
          image: '/images/slides/8.jpg',
    },
    {
      id: 'slide-9',
          image: '/images/slides/1.jpg',
    },
  ]
})
}
</script>