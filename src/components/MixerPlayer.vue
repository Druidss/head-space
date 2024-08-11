<script>
import Rectangle from '@/components/Rectangle.vue'
import Effect from '@/components/Effect.vue'
import Pause from '@/components/Pause.vue'
import Instrument from '@/components/Instrument.vue'
import { Slider,ConfigProvider } from 'ant-design-vue';
import group from '@/assets/images/group.png';
import { useEffectStore } from '../stores/effectStore';
import { ref } from 'vue';
import  { addEffectsGinger } from "../mixers/ginger";
import { addEffectsBluesky } from '../mixers/bluesky';
import { addEffectsHoehenangst } from '../mixers/hoehenangst';
import { addEffectsSanctuary } from '../mixers/sanctuary';
import { addEffectsWaldboden } from '../mixers/waldboden';
import { addEffectsHarshwinds } from '../mixers/harshwinds';
import { addEffectsThesoul } from '../mixers/thesoul';
import { addEffectsFeatherweight } from '../mixers/featherweight';
import { addEffectsAtpeace } from '../mixers/atpeace';

const effectStore = useEffectStore();

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
    handleClick(effectString,newSliderValue) {
      this.syncEffectStoreWithSlider(effectString,newSliderValue);
      this.applyEffect();
    },
    syncEffectStoreWithSlider(effectString,newSliderValue) {
      switch (effectString) {
        case 'VOLUME':
          effectStore.pipeLine[0].value = newSliderValue;
          console.log("DEBUG: syncEffectStoreWithSlider " + effectStore.pipeLine[0].value);
          //this.applyEffect?? On every case?
          //this.applyEffect(this.numberSampler, 'VOLUME');
          break;
        case 'REVERB':
          effectStore.pipeLine[1].value = newSliderValue;
          console.log("DEBUG: syncEffectStoreWithSlider " + effectStore.pipeLine[1].value);
          break;
        case 'DELAY':
          effectStore.pipeLine[2].value = newSliderValue;
          console.log("DEBUG: syncEffectStoreWithSlider " + effectStore.pipeLine[2].value);
          break;
        case 'BITCRUSHER':
          effectStore.pipeLine[3].value = newSliderValue;
          console.log("DEBUG: syncEffectStoreWithSlider " + effectStore.pipeLine[3].value);
          break;
        default:
          break;
      }
    },
    applyEffect() {
      //TODO: work out effects in every sampler js
      switch (this.numberSampler) {
        case 1:
          //Ginger
          addEffectsGinger()

          break;
        case 2:
          addEffectsBluesky()
        case 3:
          addEffectsHoehenangst()
          break;
        case 4:
          addEffectsSanctuary()
          break;
        case 5:
          addEffectsWaldboden()
          break;
        case 6:
          addEffectsHarshwinds()
          break;
        case 7:
          addEffectsThesoul()
          break;
        case 8:
          addEffectsFeatherweight()
          break;
        case 9:
          addEffectsAtpeace()
        default:
          console.log("DEBUG: EFFECT DEFAULT")
          break;
      }
    }
  },
  setup() {
    const valueVolume = ref(10);
    const valueReverb = ref(0);
    const valueDelay = ref(0);
    const valueBitcrusher = ref(0);

    return { valueVolume, applyEffects };
  },
}
</script>

<template>
  <ConfigProvider           
    :theme="{
      token: {
      colorPrimary: '#7F4634',
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
        <div class="flex items-center justify-center border-2 border-vi mb-8 pb-8">
          <div class="w-30">
            <h1 class=" giner text-3xl text-vi bg-viWhite font-display  text-center p-2 font-bold border-2 border-vi">"{{ name }}"</h1>
            <div class="grid justify-center gap-10">
              <Pause  class="p-4 bg-vi" text="Pause" :numberSampler="numberSampler"/>
              <Rectangle class=''text="Key" :number="musicKey"  />
              <Rectangle class='flex justify-bettween' text="Tempo"  :number="tempo" />
            </div>
          </div>

          <div class="w-70">
            <h1 class="text-xl text-left mx-8 mt-20 mb-2 px-4 font-display bg-viSelect linear giner"
            >EFFECT BOARD</h1>
            <div class="h-1/2 bg-gray-800 mx-8 mt-6 mb-4 flex flex-row justify-between ">
              <div class="flex flex-col">
                <Effect text="VOLUME" img="https://i.imgur.com/6v1j1UP.png"
                selectedImg="https://i.imgur.com/vhkyGLz.png" :numberSampler="numberSampler"
                />
                <Slider id="volume" class="" v-model:value="valueVolume" :min="0" :max="10" @change="handleClick('VOLUME',$event)" />
                </div>

                <div class="flex flex-col">
                <Effect text="REVERB" img="https://i.imgur.com/nR4zWpL.png" 
                 selectedImg="https://i.imgur.com/3k3ziaB.png" :numberSampler="numberSampler"
                />
                <Slider id="volume" class="" v-model:value="valueVolume" :min="0" :max="10" @change="handleClick('REVERB',$event)" />
                </div> 

                <div class="flex flex-col">
                <Effect text="DELAY" img="https://i.imgur.com/jO6OF29.png" 
                  selectedImg="https://i.imgur.com/int6frq.png" :numberSampler="numberSampler"
                />
                <Slider id="volume" class="" v-model:value="valueVolume" :min="0" :max="10" @change="handleClick('DELAY',$event)" />
                </div>
                
                <div class="flex flex-col">
                <Effect text="FILTER" img="https://i.imgur.com/Rsu6sex.png"
                  selectedImg="https://i.imgur.com/mV2Ejwy.png" :numberSampler="numberSampler"
                />
                <Slider id="volume" class="" v-model:value="valueVolume" :min="0" :max="10" @change="handleClick('FILTER',$event)" />
                </div>
            </div>
            <h1 class="text-xl text-left mx-8 font-display bg-viSelect px-4 linear giner">INSTRUMENT BOARD</h1>
            <div class="h-1/2 bg-gray-800 m-8 flex flex-row gap-4">
              <Instrument v-for="(instrument, index) in instruments" :key="index" :text="instrument" :numberSampler="numberSampler" :instruments="instruments" />
            </div>

          </div>
        </div>
        <!-- button -->
      <div class="flex justify-center items-center">
        <button class="rounded-full mb-4  px-4 py-1 text-white  border-vi border-2 linear hover:bg-viSelect text-sm text-vi font-display">
          <a href="https://ditto.fm/coast-to-coast-john-da-lemon" target="_blank"
          class="hover:no-underline hover:text-viBlack focus:no-underline text-display text-sm "
          >
          Listen on Streaming Platform 
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

