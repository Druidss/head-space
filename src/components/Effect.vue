<template>
  <div 
    class="w-32 h-32 flex items-center justify-center radial-gradient bg-viOrange"
    @click="playInstrument()"
  >
     <div class="m-4">
      {{ text }}
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
  },
methods: {
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
};
</script>

<style scoped>
.radial-gradient {
  background-image: radial-gradient(
    farthest-corner at 50% 50%,
    #FFACA2 20%,
    #FF9153 50%
  );
  cursor: pointer;
}
</style>