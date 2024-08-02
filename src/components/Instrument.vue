<template>
  <div 
    class="w-28 h-28 flex items-center justify-center radial-gradient bg-viOrange cursor-pointer"
     @click="handleClick"
     :class="{ 'selected': isSelected }"
  >
     <div class="m-4 font-display text-sm font-medium ">
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
  handleClick() {
  this.playInstrument();
  this.toggleSelect();
  },
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
  toggleSelect() {
    this.isSelected = !this.isSelected;
    this.$forceUpdate();
  },
  }
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