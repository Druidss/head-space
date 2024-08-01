<template>
  <div 
    class="w-28 h-28 flex items-center justify-center radial-gradient bg-viOrange"
    @click="playInstrument"
  >
     <div class="m-4 font-display text-sm font-medium">
      {{ text }}
    </div>
  </div>
</template>

<script>
import * as Tone from 'tone'; 
import { playPiano, playDrums } from '../tone'; 
Tone.start();
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
          playPiano();
          break;
        case 'DRUMS':
          playDrums();
          break;
        case 'HORNS':
        default:
          console.log(this.text);
      }
    },
  }
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