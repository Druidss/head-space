<template>
  <div class="fixed top-0 left-0 w-screen">
    <NavigationColumn /></div>

  <div class="w-300 bg-texture">
  <div class="w-screen">
    <div class=" w-9/12 h-screen mx-auto ml-20 flex flex-row">
      <div class="carousel">
          <div v-for="(img, index) in images" :key="index" class="carousel-item ">
            <img :src="img" alt="" class="mt-28">
          </div>
          
      </div>
    </div>
  </div>
</div>
 <div class="fixed bottom-0 left-0 w-screen">
    <Footer /></div>
</template>

<script>
import NavigationColumn from '@/components/NavigationColumn.vue'
import { Carousel } from 'ant-design-vue';
import Footer from '@/components/FooterAbout.vue';
import imageSrc1 from '@/assets/images/1.png';
import imageSrc2 from '@/assets/images/2.png';
import imageSrc3 from '@/assets/images/3.png';
import about from '@/assets/images/about.png';
import group from '@/assets/images/group.png';


export default {
  components: {
    NavigationColumn,
    Footer,
    Carousel
  },
  data() {
    return {
      images: [imageSrc1, imageSrc2, imageSrc3],
      group: group,
      about
    }
  }
}
</script>

<style scoped>
.w-300{
  width: 490vh;
  height: 100vh;
  background-size: contain;
  background-position: center;
  background-repeat: repeat;
  z-index: -999;
}

.carousel {
  display: flex;
  width: 300%; 
}
.carousel-item {
  flex: 0 0 100%; 
}
.carousel-item img {
  max-height: 100vh;
  object-fit: contain;
}
</style>