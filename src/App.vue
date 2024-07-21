<script>
import NavigationColumn from './components/NavigationColumn.vue'
import Rectangle from './components/Rectangle.vue'
import Effect from './components/Effect.vue'
import { Slider } from 'ant-design-vue';

export default {
  components: {
    NavigationColumn,
    Rectangle,
    Effect,
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
  <div class="flex w-screen  h-screen bg-vi">
    <div class="flex flex-col justify-center items-center w-1/10">  
      <h1 class="text-6xl text-center rotate-270 text-viWhite">JOHNDA LEMON</h1>
      <h1 class="text-2xl text-center rotate-270 text-viWhite translate-x-12">The Head Space</h1>
    </div>

    <div class="w-9/10 h-screen">
      <NavigationColumn />
      <!-- <h1 class="text-8xl text-center my-10">The Head Space</h1> -->
      <!-- <button class="absolute bottom-8 right-4 rounded-full m-4 p-2  text-white border border-viWhite ">Download Stems</button> -->

      <div class="flex items-center justify-center border border-viWhite m-4 p-8 ">
        <div class="w-30">
          <h1 class=" text-3xl text-vi bg-viWhite  text-center p-6">"Ginger"</h1>
          <div class="grid justify-center">
            <Rectangle class="p-4 bg-vi" text="Pause" />
            <Rectangle class='border border-vi'text="Key" number="Emin" />
            <Rectangle class='border border-vi' text="Tempo"  number="90Bpm" />
          </div>
        </div>

        <div class="w-70">
          <div class="h-1/2 bg-gray-800 m-8 flex flex-row justify-between">
             <!-- <h1 class="text-3xl">Effect Board</h1> -->
              <div class="flex flex-col justify-between">
              <Effect text="VOLUME" />
              <Slider id="volume" v-model:value="valueVolume" />
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
</style>

