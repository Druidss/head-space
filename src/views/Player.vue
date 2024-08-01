

<template>
  <div class="bg-texture bg-cover bg-center h-screen w-screen">
    <NavigationColumn />
    <div class="h-4/6 w-4/6 mx-auto">
       <Carousel  autoplay>
        <div><img  :src="imageSrc1" alt=""></div>
        <div><img  :src="imageSrc1" alt=""></div>
        <div><img  :src="imageSrc1" alt=""></div>
        <div><img  :src="imageSrc1" alt=""></div>
        <div><img  :src="imageSrc1" alt=""></div>
        <div><img  :src="imageSrc1" alt=""></div>
        <div><img  :src="imageSrc1" alt=""></div>
        <div><img  :src="imageSrc1" alt=""></div>
        <div><img  :src="imageSrc1" alt=""></div>

      </Carousel>
    </div>
  </div>
  <div class="bg-stem bg-contain bg-center h-4/6 w-4/6"></div>
</template>

<script>
import NavigationColumn from '@/components/NavigationColumn.vue'
import { Carousel } from 'ant-design-vue';
import imageSrc1 from '@/assets/stemplayer.png';

export default {
  name: 'Player',
  components: {
    NavigationColumn,
    Carousel
  },
  data() {
    return {
      imageSrc1: imageSrc1,
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

</style>