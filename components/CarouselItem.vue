<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      quotes: [
        { im: "Better" ,quote: " late than never", quote2: "You aren't in charge of the universe, you are in charge of yourself." },
        { im: "practice" ,quote: " makes perfect", quote2: "Keep trying no matter how hard it seems, it will get easier." },
        { im: "Nothing" ,quote: " seek, nothing find", quote2: "The first step is as good as half over." },
      ],
      settings: {
        arrows: false,
        dots: true,
      },
      state: false,
    };
  },
  methods: {
    handleWheel(event) {
      if (this.state === false) {
        this.state = true;
        if (event.deltaY < 0) {
          this.$refs.indexcarousel.prev();
        } else {
          this.$refs.indexcarousel.next();
        }
        setTimeout(() => {
          this.state = false;
        }, 1000);
      }
    },
  },
}
</script> 

<template>
  <div class="carouselWrapper mb-4">
    <VueSlickCarousel
      ref="indexcarousel"
      v-bind="settings"
    >
      <div
        v-for="slideNum in 3"
        :key="slideNum"
        class="carousel__item"
        @wheel.prevent="handleWheel($event)"
      >
        <a href="#">
          <img
            :alt="'carousel image' + slideNum"
            :src="require(`~/assets/images/test/${slideNum}.webp`)"
          />
          <div>
            <h3><span> {{ quotes[slideNum - 1].im }} </span> {{ quotes[slideNum - 1].quote }} </h3>
            <p> {{ quotes[slideNum - 1].quote2 }} </p>
          </div>
        </a>
      </div>
    </VueSlickCarousel>
  </div>
</template>