<script>
import NavigationColumn from '@/components/NavigationColumn.vue'
import Rectangle from '@/components/Rectangle.vue'
import Effect from '@/components/Effect.vue'
import Pause from '@/components/Pause.vue'
import { Slider } from 'ant-design-vue';

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
      value: 20
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
    <!-- <div class="flex flex-col justify-center items-center w-1/10 md:w-auto">  
      <h1 class="text-6xl text-center rotate-270 text-viWhite">JOHNDA LEMON</h1>
      <h1 class="text-2xl text-center rotate-270 text-viWhite translate-x-16">The Head Space</h1>
    </div> -->

    <div class="w-screen h-3/4" >
      <NavigationColumn  />
      <button class="absolute bottom-0 right-4 rounded-full m-4 px-6 py-2  text-white border border-vi hover:bg-viSelect font-goudy">Download Stems</button>

      <div class="flex items-center justify-center border border-vi mx-56 my-8 py-8 px-24 md:mx-24">
        <div class="w-30">
          <h1 class=" giner text-3xl text-vi bg-viWhite font-display  text-center p-2 font-bold">"Ginger"</h1>
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
    </div>
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
</style>

