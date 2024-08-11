<template>
  <div class="bg-texture bg-cover bg-center h-screen w-screen">
    <NavigationColumn />
    <div class="w-screen">
       <Carousel  ref="carousel" :beforeChange="handleClick">
        <MixerPlayer v-for="(track, index) in tracks" 
        :key="index" :name="track.name" :instruments="track.instruments"  
        :musicKey="track.key" :tempo="track.tempo" :numberSampler="track.number"
        />
      </Carousel>
    </div>

      <div @click="togglePre" class="p-3 absolute bottom-1/2 left-64 cursor-pointer">
        <img :src="left" alt="" class="w-6 h-10"></img>
      </div>
      <div @click="toggleNext" class="p-3 absolute bottom-1/2 right-64 cursor-pointer">
        <img :src="right" alt="" class="w-6 h-10"></img>
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
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
import group from '@/assets/images/group.png';
import left from '@/assets/images/left.png';
import right from '@/assets/images/right.png';
import tracks from '@/assets/tracks.json';
//TODO:Special Case: gets init from start

import { initPlayerLoopsGinger, stopMixerGinger } from '../mixers/ginger';

import { initPlayerLoopsBluesky, stopMixerBluesky } from '../mixers/bluesky';

import { initPlayerLoopsHoehenangst, stopMixerHoehenangst } from '../mixers/hoehenangst';

import { initPlayerLoopsSanctuary, stopMixerSanctuary } from '../mixers/sanctuary';

import { initPlayerLoopsWaldboden, stopMixerWaldboden } from '../mixers/waldboden';

import { initPlayerLoopsHarshwinds, stopMixerHarshwinds } from '../mixers/harshwinds';

import { initPlayerLoopsThesoul,stopMixerThesoul } from '../mixers/thesoul';

import { initPlayerLoopsFeatherweight, stopMixerFeatherweight } from '../mixers/featherweight';

import { initPlayerLoopsAtpeace, stopMixerAtpeace } from '../mixers/atpeace';
import { useEffectStore } from '../stores/effectStore';


export default defineComponent( {
  name: 'Player',
  components: {
    NavigationColumn,
    MixerPlayer,
    LeftOutlined,
    RightOutlined,
    Carousel,
  },
  data() {
    return {
      group: group,
      tracks: tracks,
      left: left,
      right: right,
      currentTrack: null,
    }
  },
  methods: {
    handleClick(currentSlide){
      this.cleanPlayersAndLoops(currentSlide);
      this.resetEffectStore(currentSlide);
    },
    resetEffectStore() {
      const effectStore = useEffectStore();
      effectStore.reset();
      console.log("DEBUG: EffectStore RESET");
      console.log(effectStore.pipeLine);
      
      
    },
    //Slides are indezes starting with 0
    //Currently deprecated: caused double init
    initPlayersAndLoops(currentSlide) {
      console.log("CAROUSEL CHANGE" + currentSlide);
      //initPlayerLoopsBluesky();
      //TODO: stopMixer from before to clean Transport before init new 
      switch (currentSlide) {
        case 0:
          
          break;
        case 1:
          initPlayerLoopsBluesky();
          console.log("DEBUG: BLUESKY INIT");
          break;
        default:
          break;
      }
    },
    cleanPlayersAndLoops(currentSlide) {
      console.log("AFTER CHANGE: " + currentSlide);
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
          stopMixerAtpeace();
          break;
        default:
          break;
      }
    },
    toggleNext() {
       const carousel = this.$refs.carousel;
       carousel.next();
    },
    togglePre() {
       const carousel = this.$refs.carousel;
       carousel.prev();
    },
  },
})
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
.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}


.ant-carousel .slick-prev,
.ant-carousel .slick-next,
.ant-carousel .slick-prev:hover,
.ant-carousel .slick-next:hover {
  font-size: inherit;
  color: currentColor;
}

</style>