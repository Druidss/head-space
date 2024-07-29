<script>
import NavigationColumn from '@/components/NavigationColumn.vue'
import Rectangle from '@/components/Rectangle.vue'
import Effect from '@/components/Effect.vue'
import Pause from '@/components/Pause.vue'
import { Slider } from 'ant-design-vue';
import group from '@/assets/images/group.png';

export default {
  components: {
    NavigationColumn,
    Rectangle,
    Effect,
    Pause,
    Slider  
  },
  data() {
    return {
      value: 20,
      group: group
    }
  }
}
  import { ref } from 'vue';
  const valueVolume = ref(0);
  const valueReverb = ref(0);
  const valueDelay = ref(0);
  const valueFliter = ref(0);
</script>

<template>
  <div class="flex w-screen h-screen bg-texture  bg-contain bg-center  bg-vi bg-opacity-25">
    <div class="w-screen h-3/4 ">
      <NavigationColumn />
      <div class='border-l-2 border-vi '></div>
      <!-- text -->
        <div class="flex justify-between items-center mx-56 mt-12 md:mx-24 border-r-2">
          <div class="text-4xl font-anisette text-viSelect text-outline">jOHN DA LEMON</div>
          <div class="text-4xl font-anisette text-viSelect text-outline">THE SOUL SANCTUARY</div>
        </div>
      <div class="vert-line border-l-2 border-gray-400"></div>
      <!-- player -->
      <div class="flex items-center justify-center border-2 border-vi mx-56 mb-8 py-8 px-24 md:mx-24">

        <div class="w-30">
          <h1 class=" giner text-3xl text-vi bg-viWhite font-display  text-center p-2 font-bold border border-vi">"Ginger"</h1>
          <div class="grid justify-center">
            <Pause class="p-4 bg-vi" text="Pause" />
            <Rectangle class=''text="Key" number="Emin" />
            <Rectangle class='' text="Tempo"  number="90Bpm" />
          </div>
        </div>

        <div class="w-70">
          <div class="h-1/2 bg-gray-800 m-8 flex flex-row justify-between">
             <!-- <h1 class="text-3xl">Effect Board</h1> -->
              <div class="flex flex-col justify-between">
              <Effect text="VOLUME" />
              <Slider id="volume" class="" v-model:value="valueVolume" />
              </div>

              <div class="flex flex-col">
              <Effect text="REVERB" />
              <Slider id="volume" v-model:value="valueReverb" />
              </div> 

              <div class="flex flex-col">
              <Effect text="DELAY" />
              <Slider id="volume" v-model:value="valueDelay" />
              </div>
             
              <div class="flex flex-col">
              <Effect text="FLITER" />
              <Slider id="volume" v-model:value="valueFliter" />
              </div>
            
          </div>

          <div class="h-1/2 bg-gray-800 m-8 flex flex-row gap-4">
            <Effect text="PIANO" />
            <Effect text="DRUMS" />
            <Effect text="HORNS" />
            <Effect text="BASS" />
            <Effect text="SYTH" />
          </div>

        </div>
      </div>

      <!-- group -->
      <div class="border-t-2 border-vi md:mx-24 mt-52  md:mt-40 inset-0 flex justify-center items-center">
        <div class="w-72 h-12 mt-2 flex items-center justify-center"><img :src="group" alt=""></div>
      </div>
    </div>
    
    <button class="absolute bottom-16 right-20 rounded-full m-4 px-6 py-2  text-white  border-vi border-2 hover:bg-viSelect font-goudy">Download Stems</button>
  </div>
</template>



<style scoped>
  .code-box-demo .ant-slider {
    margin-bottom: 16px;
  }
  .giner{
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.8);
    transition: box-shadow 0.3s ease, color 0.3s ease, background-color 0.3s ease;
  }
  .text-outline {
  text-shadow: 
      -1px -1px 0 #7F4634,  
      1px -1px 0 #7F4634,
      -1px  1px 0 #7F4634,
      1px  1px 0 #7F4634;
  }
  .border-r-2 {
  border-right: 2px solid #ccc; /* adjust the width and color of the line */
  } 
  /* .vert-line {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%; 
  width: 2px; 
  background-color: #7F4634; 
  transform: translateX(-50%); 
  z-index: -999; 
} */
</style>

