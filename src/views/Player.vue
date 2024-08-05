<template>
  <div class="bg-texture bg-cover bg-center h-screen w-screen">
    <NavigationColumn />
    <div class=" w-9/12 mx-auto">


    </div>
  <!-- <Stem /> -->
   <div class="w-screen">
       <Carousel  ref="carousel" >
          <Stem v-for="(track, index) in tracks" 
          :key="index" :name="track.name" :id="track.videoID" 
          :number="track.number" 
          :musicKey="track.key" :tempo="track.tempo" 
          />
      </Carousel>
    </div>
  </div>


      <div @click="togglePre" class="p-3 absolute bottom-1/3 left-72 cursor-pointer">
        <img :src="left" alt="" class="w-6 h-10"></img>
      </div>
      <div @click="toggleNext" class="p-3 absolute bottom-1/3 right-72 cursor-pointer">
        <img :src="right" alt="" class="w-6 h-10"></img>
      </div>
<!-- group -->
  <div class=" absolute w-9/12 mx-auto border-t-2 border-vi flex justify-center items-center  inset-x-0 mt-4 bottom-0">
  <div class="w-72 h-12 my-2 flex items-center justify-center "><img :src="group" alt="">
  </div>
  </div>
</template>

<script>
import NavigationColumn from '@/components/NavigationColumn.vue'
import Stem from '@/components/Stemplayer.vue';
import { Carousel } from 'ant-design-vue';
import imageSrc1 from '@/assets/stemplayer.png';
import group from '@/assets/images/group.png';
import left from '@/assets/images/left.png';
import right from '@/assets/images/right.png';
import tracks from '@/assets/tracks.json';


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
      tracks: tracks,      
      left: left,
      right: right,
    }
  },
  methods: {
    toggleNext() {
       const carousel = this.$refs.carousel;
       carousel.next();
    },
    togglePre() {
       const carousel = this.$refs.carousel;
       carousel.prev();
    },
  },
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