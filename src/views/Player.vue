<template>
  <div class="bg-texture bg-cover bg-center h-screen w-screen">
    <NavigationColumn />
    <div class="h-4/6 w-9/12 mx-auto">
      <div class="flex justify-center">
        <div class=" giner text-3xl text-vi bg-viWhite font-display  text-center m-4 py-1 px-4 font-bold border-2 border-vi cursor-pointer">Auto Play</div>
      </div>
      <!-- text -->
      <div class="flex justify-between items-center ">
        <div class="text-4xl font-anisette text-viSelect text-outline">john da lemon</div>
        <div class="text-4xl font-anisette text-viSelect text-outline">thE sOul sanctuary</div>
      </div>
      <Stem />
       <Carousel  autoplay>
        <!-- <div><img  :src="imageSrc1" alt=""></div> -->
      </Carousel>
    </div>
  </div>
  <div class="bg-stem bg-contain bg-center h-4/6 w-4/6"></div>

  <div class="absolute bottom-0 w-9/12 mx-auto  border-t-2 border-vi flex justify-center items-center  inset-x-0 mt-6 ">
    <div class="w-72 h-12 mt-2 mb-8 flex items-center justify-center ">
      <img :src="group" alt=""></div>
  </div>
</template>

<script>
import NavigationColumn from '@/components/NavigationColumn.vue'
import Stem from '@/components/Stemplayer.vue';
import { Carousel } from 'ant-design-vue';
import imageSrc1 from '@/assets/stemplayer.png';
import group from '@/assets/images/group.png';


export default {
  name: 'Player',
  components: {
    NavigationColumn,
    Stem,
    Carousel
  },
  data() {
    return {
      imageSrc1: imageSrc1,
      group: group,
    }
  }
}
</script>


<style scoped>
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: auto;
  max-width: fit-content;
  max-height: fit-content;
  overflow: hidden;
}
.ant-carousel :deep(.slick-slide img) {
  width: 90%;
  height: auto;
  overflow: hidden;
}
.text-outline {
  text-shadow: 
      -1px -1px 0 #7F4634,  
      1px -1px 0 #7F4634,
      -1px  1px 0 #7F4634,
      1px  1px 0 #7F4634;
}
</style>