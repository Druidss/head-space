<template>
  <div class="bg-texture bg-cover bg-center h-screen w-screen">
    <NavigationColumn />
      <div class="w-screen">
          <Carousel  ref="carousel" :beforeChange="cleanPlayersAndLoops" :dots="false">
              <Stem v-for="(track, index) in tracks" 
              :key="index" :name="track.name" :id="track.videoID" 
              :number="track.number" 
              :musicKey="track.key" :tempo="track.tempo" 
              />
          </Carousel>
      </div>
  </div>

  <div @click="togglePre" class="pt-10 absolute bottom-1/2 left-80 cursor-pointer">
    <img :src="left" alt="" class="w-6 h-10"></img>
  </div>
  <div @click="toggleNext" class=" absolute bottom-1/2 right-80 cursor-pointer">
    <img :src="right" alt="" class="w-6 h-10"></img>
  </div>

  <!-- <Footer/> -->
</template>

<script>
import NavigationColumn from '@/components/NavigationColumn.vue'
import Stem from '@/components/Stemplayer.vue';
import { Carousel } from 'ant-design-vue';
import Footer from '@/components/Footer.vue';
import imageSrc1 from '@/assets/stemplayer.png';
import group from '@/assets/images/group.png';
import left from '@/assets/images/left.png';
import right from '@/assets/images/right.png';
import tracks from '@/assets/tracks.json';
import { initPlayerLoopsGinger, stopMixerGinger } from '../mixers/ginger';
import { initPlayerLoopsBluesky, stopMixerBluesky } from '../mixers/bluesky';
import { initPlayerLoopsHoehenangst, stopMixerHoehenangst } from '../mixers/hoehenangst';
import { initPlayerLoopsSanctuary, stopMixerSanctuary } from '../mixers/sanctuary';
import { initPlayerLoopsWaldboden, stopMixerWaldboden } from '../mixers/waldboden';
import { initPlayerLoopsHarshwinds, stopMixerHarshwinds } from '../mixers/harshwinds';
import { initPlayerLoopsThesoul,stopMixerThesoul } from '../mixers/thesoul';
import { initPlayerLoopsFeatherweight, stopMixerFeatherweight } from '../mixers/featherweight';
import { initPlayerLoopsAtpeace, stopMixerAtpeace } from '../mixers/atpeace';

export default {
  name: 'Player',
  components: {
    NavigationColumn,
    Stem,
    Footer,
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
    cleanPlayersAndLoops(currentSlide) {
      switch (currentSlide) {
        case 0:
          stopMixerGinger();
          break;
        case 1:
          stopMixerBluesky();
          break;
        case 2:
          stopMixerHoehenangst();
          break;
        case 3:
          stopMixerSanctuary();
          break;
        case 4:
          stopMixerWaldboden();
          break;
        case 5:
          stopMixerHarshwinds();
          break;
        case 6:
          stopMixerThesoul();
          break;
        case 7:
          stopMixerFeatherweight();
          break;
        case 8:
          stopMixerAtpeace();
          break;
        default:
          break;
      }
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