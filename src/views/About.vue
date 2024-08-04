<template>
  <div class="bg-texture bg-cover bg-center h-screen w-screen">
    <NavigationColumn />
    <div class="h-9/12 w-9/12 mx-auto ">
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

    
      <div class=" absolute w-9/12 mx-auto border-t-2 border-vi flex justify-center items-center  inset-x-0 mt-4 bottom-0">
  <div class="w-72 h-12 my-2 flex items-center justify-center "><img :src="group" alt="">
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
      imageSrc1: imageSrc1,
      imageSrc2: imageSrc2,
      imageSrc3: imageSrc3,
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

</style>