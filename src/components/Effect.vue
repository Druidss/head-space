<template>
  <div 
    class="w-32 h-32 bg-yellow-400 flex items-center justify-center radial-gradient"
    @click="playInstrument"
  >
     <div>
      {{ text }}
    </div>
  </div>
</template>

<script>
import * as Tone from 'tone'; 
import { playDrums } from '../tone'; 
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
          const piano = new Tone.Synth().toDestination();
          piano.triggerAttackRelease('C4', '8n');
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
    #9C3B91 20%,
    #FFFFFF 50%
  );
  cursor: pointer;
}
</style>