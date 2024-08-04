<template>
  <div class="fixed top-0 left-0 w-screen">
    <NavigationColumn /></div>

  <div class="w-300 bg-cover  bg-texture">
  <div class="h-screen w-screen">
    <div class=" w-9/12  h-screen mx-auto flex flex-row .carousel-container">
      <div class="carousel">
          <div v-for="(img, index) in images" :key="index" class="carousel-item ">
            <img :src="img" alt="" class=" object-cover h-9/12 w-full">
          </div>
      </div>
    </div>

    <!-- footer-group -->
      <div class=" fixed w-9/12 mx-auto border-t-2 border-vi flex justify-center items-center  inset-x-0  bottom-0">
        <div class="w-72 h-12 my-2 flex items-center justify-center  "><img :src="group" alt=""> 
      </div>

  </div>
  </div>
</div>
</template>

<script>
import NavigationColumn from '@/components/NavigationColumn.vue'
import { Carousel } from 'ant-design-vue';
import imageSrc1 from '@/assets/images/1.png';
import imageSrc2 from '@/assets/images/2.png';
import imageSrc3 from '@/assets/images/3.png';
import group from '@/assets/images/group.png';


export default {
  components: {
    NavigationColumn,
    Carousel
  },
  data() {
    return {
      images: [imageSrc1, imageSrc2, imageSrc3],
      group: group,
    }
  }
}
</script>

<style scoped>
.w-300{
  width: 500vh;
  background-size: contain;
  background-position: center;
  background-repeat: repeat;
  position: aboslute;
  z-index: -999;
}

.bg-texture {
  position: absolute; 
  top: 0;
  left: 0;
  z-index: -1; 
}
.carousel-container {
  height: 60vh; 
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  position: absolute;
}

.carousel {
  display: flex;
  width: 300%; 
}

.carousel-item {
  flex: 0 0 100%; 
  height: 80vh;
}


</style>