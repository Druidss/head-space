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
import { useEffectStore } from '../stores/effectStore';

import { addEffectsGinger } from '../mixers/ginger';

const effectStore = useEffectStore();

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
    numberSampler: {
      type: Number,
      required: true,
    }  
  },
methods: {
    handleClick(text) {
    this.toggleSelect();
    this.updateEffectStore(this.text);
    this.applyEffect();
    },

    updateEffectStore(text) {
      effectStore.pipeLine.forEach(element => {
        if (element.id == text) {
          if (element.selected) {
            element.selected = false;
          } else {
            element.selected = true;
          }
        }
      })
      //console.log("DEBUG udpateEffectStore: " + effectStore.pipeLine[0].selected);
    },
    applySelectedEffects() {
      //switch case for samples in pinia store, add selected effects to choosen sample
    },
    
    toggleSelect() {
    this.isSelected = !this.isSelected;
    this.$forceUpdate();
  },
  applyEffect() {
    switch (this.numberSampler) {
        case 1:
          //Ginger
          addEffectsGinger()
          break;
        case 2:
          //addEffectsBlueSky()
        default:
          break;
      }
  }
  },


};

</script>

<style scoped>
.radial-gradient {
  background-color: rgba(252, 197, 84, 0.3);
}
.radial-gradient:hover, .selected {
  border: 2px solid #7F4634;
  
  transition: box-shadow 0.3s ease, color 0.3s ease, background-color 0.3s ease;
  background: radial-gradient(#FFF4D8 30%, #FCD777 100%);
}

.selected {
  box-shadow: 5px 5px 0px #7F4634;
}
</style>