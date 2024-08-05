<script>
import Rectangle from '@/components/Rectangle.vue'
import Effect from '@/components/Effect.vue'
import Pause from '@/components/Pause.vue'
import Instrument from '@/components/Instrument.vue'
import { Slider,ConfigProvider } from 'ant-design-vue';
import group from '@/assets/images/group.png';


import { useEffectStore } from '../stores/effectStore';
import { ref } from 'vue';
import  { addEffects } from "../mixers/ginger";

export default {
  components: {
    Rectangle,
    Effect,
    Pause,
    Instrument,
    Slider,
    ConfigProvider
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    musicKey: {
      type: String,
      required: true,
    },
    tempo: {
      type: String,
      required: true,
    },
    instruments: {
      type: Array,
      required: true, 
    },
    numberSampler: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      value: 20,
      group: group,
    }
  },
  methods: {
    updateEffect() {
      addEffects();
    },
    checkPage() {

    }
  },
  setup() {
    const effectStore = useEffectStore();
    const valueVolume = ref(10);

    //Updates value of slider in Pinia Store
    //applyEffects with Values from Pinia Store
    const updateStore = (effectString,newSliderValue) => {
      valueVolume.value = newSliderValue;
      effectStore.setValue(valueVolume.value,effectString);
      applyEffects();
    };

    const applyEffects = () => {
        addEffects();
    };

    const checkSampler = (key) => {
      
    }

    return { valueVolume, updateStore, applyEffects };
  },
}
  
  // const valueVolume = ref(0);
  // const valueReverb = ref(0);
  // const valueDelay = ref(0);
  // const valueFliter = ref(0);
</script>

<template>
  <ConfigProvider           
    :theme="{
      token: {
      colorPrimary: '#FFB700',
      },
    }" 
  >
  <div class="flex w-screen flex-col">
    <div class="w-9/12 mx-auto" >
        <!-- text -->
          <div class="flex justify-between items-center mt-12">
            <div class="text-4xl font-display font-bold uppercase text-viSelect text-outline">john da lemon</div>
            <div class="text-4xl font-anisette text-viSelect text-outline">thE sOul sanctuary</div>
          </div>
         
        <!-- player -->
        <div class="flex items-center justify-center border-2 border-vi mb-8 py-16 px-8 md:p-6">

          <div class="w-30">
            <h1 class=" giner text-3xl text-vi bg-viWhite font-display  text-center p-2 font-bold border-2 border-vi">"{{ name }}"</h1>
            <div class="grid justify-center">
              <Pause  class="p-4 bg-vi" text="Pause" :numberSampler="numberSampler"/>
              <Rectangle class=''text="Key" :number="musicKey" />
              <Rectangle class='' text="Tempo"  :number="tempo" />
            </div>
          </div>

          <div class="w-70">
            <h1 class="text-xl text-left mx-8  px-4 font-display bg-viSelect linear giner"
            >EFFECT BOARD</h1>
            <div class="h-1/2 bg-gray-800 m-8 mb-4 flex flex-row justify-between ">
              <div class="flex flex-col">
                <Effect text="VOLUME" img="https://i.imgur.com/AxET1xh.png"/>
                <Slider id="volume" class="" v-model:value="valueVolume" @change="updateStore('VOLUME',$event)" :min="0" :max="10" />
                </div>

                <div class="flex flex-col">
                <Effect text="REVERB" img="https://i.imgur.com/vpjAkpT.png" />
                <Slider id="volume" v-model:value="valueReverb" @change="updateStore('REVERB',$event)" />
                </div> 

                <div class="flex flex-col">
                <Effect text="DELAY" img="https://i.imgur.com/8N9tFCn.png" />
                <Slider id="volume" v-model:value="valueDelay" />
                </div>
                
                <div class="flex flex-col">
                <Effect text="FILTER" img="https://i.imgur.com/YyuaWX9.png"/>
                <Slider id="volume" v-model:value="valueFliter" />
                </div>
            </div>
            <h1 class="text-xl text-left mx-8 font-display bg-viSelect px-4 linear giner">INSTRUMENT BOARD</h1>
            <div class="h-1/2 bg-gray-800 m-8 flex flex-row gap-4">
              <Instrument v-for="(instrument, index) in instruments" :key="index" :text="instrument" :numberSampler="numberSampler" :instruments="instruments" />
            </div>

          </div>
        </div>
        <!-- button -->
      <div class="flex justify-end items-center ">
        <button class="rounded-full mb-4  px-4 py-1 text-white  border-vi border-2 linear hover:bg-viSelect font-goudy text-xs">
          <a href="https://drive.google.com/drive/folders/1--R81ZPS4ZeNBxBYO9VivOqB3BY9r63U?usp=sharing" target="_blank"
          class="hover:no-underline hover:text-viBlack focus:no-underline "
          >
          DOWNLOAD SONG STEMS 
          </a>
        </button>
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

