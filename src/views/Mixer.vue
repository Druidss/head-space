<template>
  <div class="bg-texture bg-cover bg-center h-screen w-screen">
    <NavigationColumn />
    <div class="w-screen">
       <Carousel  >
        <MixerPlayer v-for="(track, index) in tracks" :key="index" :name="track.name" :instruments="track.instruments" />
      </Carousel>
    </div>

  </div>
  <!-- group -->
  <div class=" absolute w-9/12 mx-auto border-t-2 border-vi flex justify-center items-center  inset-x-0 mt-4 bottom-0">
  <div class="w-72 h-12 my-2 flex items-center justify-center "><img :src="group" alt="">
  </div>
  </div>
</template>

<script>
import NavigationColumn from '@/components/NavigationColumn.vue'
import MixerPlayer from '../components/MixerPlayer.vue';       
import { Carousel } from 'ant-design-vue';
import group from '@/assets/images/group.png';
import tracks from '@/assets/tracks.json';



export default {
  name: 'Player',
  components: {
    NavigationColumn,
    MixerPlayer,
    Carousel
  },
  data() {
    return {
      group: group,
      tracks: tracks,
      currentTrack: null,
    }
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