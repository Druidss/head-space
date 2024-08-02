<script>
import NavigationColumn from '@/components/NavigationColumn.vue'
import Rectangle from '@/components/Rectangle.vue'
import Effect from '@/components/Effect.vue'
import Pause from '@/components/Pause.vue'
import { Slider,ConfigProvider } from 'ant-design-vue';
import group from '@/assets/images/group.png';

export default {
  components: {
    NavigationColumn,
    Rectangle,
    Effect,
    Pause,
    Slider,
    ConfigProvider
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
  <ConfigProvider           
    :theme="{
      token: {
      colorPrimary: '#FFB700',
      },
    }" 
  >
  <div class="flex w-screen h-screen flex-col">
    <div class=" w-screen h-screen bg-texture bg-cover bg-center">
      <NavigationColumn />
      <div class="w-9/12 mx-auto">
        <!-- text -->
          <div class="flex justify-between items-center mt-12">
            <div class="text-4xl font-anisette text-viSelect text-outline">john da lemon</div>
            <div class="text-4xl font-anisette text-viSelect text-outline">thE sOul sanctuary</div>
          </div>
        <!-- player -->
        <div class="flex items-center justify-center border-2 border-vi mb-8 py-16 px-8">

          <div class="w-30">
            <h1 class=" giner text-3xl text-vi bg-viWhite font-display  text-center p-2 font-bold border-2 border-vi">"Ginger"</h1>
            <div class="grid justify-center">
              <Pause class="p-4 bg-vi" text="Pause" />
              <Rectangle class=''text="Key" number="Emin" />
              <Rectangle class='' text="Tempo"  number="90Bpm" />
            </div>
          </div>

          <div class="w-70">
            <h1 class="text-xl mx-8  px-4 font-display bg-viSelect linear giner"
            >EFFECT BORARD</h1>
            <div class="h-1/2 bg-gray-800 m-8 mb-4 flex flex-row justify-between ">
              <div class="flex flex-col">
              
                <Effect text="VOLUME" />
                <Slider 
                  id="volume" class="" v-model:value="valueVolume" 

                />
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
            <h1 class="text-xl mx-8 font-display bg-viSelect px-4 linear giner">INSTRUMENT BORARD</h1>
            <div class="h-1/2 bg-gray-800 m-8 flex flex-row gap-4">
              <Effect text="PIANO" />
              <Effect text="DRUMS" />
              <Effect text="HORNS" />
              <Effect text="BASS" />
              <Effect text="SYTH" />
            </div>

          </div>
        </div>
        <!-- button -->
      <div class="flex justify-end items-center ">
        <button class="rounded-full  px-4 py-1 text-white  border-vi border-2 linear hover:bg-viSelect font-goudy text-xs ">DOWNLOAD SONG STEMS </button>
      </div>
      <!-- group -->
      <div class=" border-t-2 border-vi flex justify-center items-center  inset-x-0 mt-6 ">
        <div class="w-72 h-12 my-2 flex items-center justify-center "><img :src="group" alt=""></div>
      </div>
      </div>
    </div>
  </div>
  </ConfigProvider>
</template>



<style scoped>
  .code-box-demo .ant-slider {
    margin-bottom: 16px;
  }
  .giner{
    box-shadow: 5px 5px 0px #7F4634;
    transition: box-shadow 0.3s ease, color 0.3s ease, background-color 0.3s ease;
  }
  .text-outline {
    text-shadow: 
        -1px -1px 0 #7F4634,  
        1px -1px 0 #7F4634,
        -1px  1px 0 #7F4634,
        1px  1px 0 #7F4634;
  }
  .linear{
    background: linear-gradient(90deg, #F9E0A0 0%, #FFD66E 100%);
  }

</style>

