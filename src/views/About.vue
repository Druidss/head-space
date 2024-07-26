<template>
  <div class="bg-texture bg-vi bg-opacity-75 h-screen w-screen">
    <NavigationColumn />
    <div class="h-5/6 w-5/6 mx-auto ">
       <Carousel  autoplay>
        <div>
            <img  :src="imageSrc1" alt="">
        </div>
        <div>
          <img  :src="imageSrc2" alt="">
        </div>
        <div>
          <img  :src="imageSrc3" alt="">
        </div>
      </Carousel>
    </div>
  </div>

</template>

<script>
import NavigationColumn from '@/components/NavigationColumn.vue'
import { Carousel } from 'ant-design-vue';
import imageSrc1 from '@/assets/images/1.png';
import imageSrc2 from '@/assets/images/2.png';
import imageSrc3 from '@/assets/images/3.png';


export default {
  components: {
    NavigationColumn,
    Carousel
  },
  data() {
    return {
      imageSrc1: imageSrc1,
      imageSrc2: imageSrc2,
      imageSrc3: imageSrc3
    }
  }
}
</script>

<style scoped>
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: auto;
  width: 40rem;
  max-width: fit-content;
  max-height: fit-content;
  /* overflow: hidden; */
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
img {
  object-fit: contain;
  max-width: 60rem;
  height: auto;
}
</style>