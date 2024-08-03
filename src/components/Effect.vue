<template>
  <div 

    class="w-28 h-28 flex items-center justify-center radial-gradient bg-viOrange cursor-pointer"
    :class="{ 'selected': isSelected }"
    @click="handleClick"
  >
     <div class="m-4 font-display text-sm font-medium ">
      {{ text }}
     
      <img :src="img" alt="Image" class="w-12 h-12 mx-auto mt-2">
    </div>
  </div>
</template>

<script>
import * as Tone from 'tone'; 

import { playSample, stopSample, startTransport } from '../tone'; 
import { useSamplerStore } from '../stores/samplerStore';
import { useEffectStore } from '../stores/effectStore';


const samplerStore = useSamplerStore();
const effectStore = useEffectStore();

const start = Tone.start();
//console.log(start);

export default {
  name: 'Rectangle',
  props: {
    text: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },   
  },
methods: {
    handleClick() {
    this.playInstrument();
    this.toggleSelect();
    },

    playInstrument() {
      switch (this.text) {
        case 'PIANO':
          if (samplerStore.pipeLine[0].isPlaying) {
              samplerStore.pipeLine[0].isPlaying = false;
              stopSample();
            } else {
              samplerStore.pipeLine[0].isPlaying = true;
              playSample()
            }
          break;
        case 'DRUMS':
          if (samplerStore.pipeLine[1].isPlaying) {
              samplerStore.pipeLine[1].isPlaying = false;
              stopSample();
            } else {
              samplerStore.pipeLine[1].isPlaying = true;
              //Logs pipeline
              //console.log(samplerStore.pipeLine);
              playSample()
            }
            break;
        case 'HORNS':
          if (samplerStore.pipeLine[2].isPlaying) {
              samplerStore.pipeLine[2].isPlaying = false;
              stopSample()
            } else {
              samplerStore.pipeLine[2].isPlaying = true;
              playSample()
            }
            break;
        case 'BASS':
          if (samplerStore.pipeLine[3].isPlaying) {
              samplerStore.pipeLine[3].isPlaying = false;
              stopSample()
            } else {
              samplerStore.pipeLine[3].isPlaying = true;
              playSample()
            }
          break;
        case 'SYTH':
        if (samplerStore.pipeLine[4].isPlaying) {
              samplerStore.pipeLine[4].isPlaying = false;
              stopSample()
            } else {
              samplerStore.pipeLine[4].isPlaying = true;
              playSample()
              break;
            }
        default:
          console.log(this.text);
      }
    },

    updateSampleInPiniaStore() {
      //console.log("Effect should be played")
      effectStore.pipeLine.forEach(element => {
        element.sample = this.text;
      })
      console.log("DEBUG-updateSampleInPiniaStore: " + effectStore.pipeLine.forEach(element => {console.log(element.sample)}));
    }
  },

  toggleSelect() {
    this.isSelected = !this.isSelected;
    this.$forceUpdate();
  },
};

</script>

<style scoped>
.radial-gradient {
  background-color: rgba(252, 197, 84, 0.3);
}
.radial-gradient:hover, .selected {
  border: 2px solid #7F4634;
  box-shadow: 5px 5px 0px #7F4634;
  transition: box-shadow 0.3s ease, color 0.3s ease, background-color 0.3s ease;
  background: radial-gradient(#FFF4D8 30%, #FCD777 100%);
}
</style>