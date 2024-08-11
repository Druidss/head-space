<template>
  <div 
    class="w-28 h-28 flex items-center justify-center radial-gradient bg-viOrange cursor-pointer"
    :class="{ 'selected': isSelected }"
    @click="handleClick"
  >
     <div class="m-4 font-display text-sm font-medium ">
      {{ text }}
      <!-- {{ selectedImg }} -->
      <img v-if="isSelected" :src="selectedImg" alt="Image" class="w-12 h-12 mx-auto mt-2">
      <img v-else :src="img" alt="Image" class="w-12 h-12 mx-auto mt-2">
    </div>
  </div>
</template>

<script>
import * as Tone from 'tone';
import { useEffectStore } from '../stores/effectStore';

import { addEffectsBluesky } from '../mixers/bluesky';
import { addEffectsGinger } from '../mixers/ginger';
import { addEffectsHoehenangst } from '../mixers/hoehenangst';
import { addEffectsSanctuary } from '../mixers/sanctuary';
import { addEffectsWaldboden } from '../mixers/waldboden';
import { addEffectsHarshwinds } from '../mixers/harshwinds';
import { addEffectsThesoul } from '../mixers/thesoul';
import { addEffectsFeatherweight } from '../mixers/featherweight';
import { addEffectsAtpeace } from '../mixers/atpeace';

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
    selectedImg: {
      type: String,
      required: true,
    } 
    ,
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
  //   if (this.isSelected) {
  //   this.currentImg = this.selectedImg;
  // } else {
  //   this.currentImg = this.img;
  // }
    // this.$forceUpdate();
  },
  applyEffect() {
    switch (this.numberSampler) {
        case 1:
          //Ginger
          addEffectsGinger();
          break;
        case 2:
          addEffectsBluesky();
          break;
        case 3:
          addEffectsHoehenangst();
          break;
        case 4:
          addEffectsSanctuary();
          break;
        case 5:
          addEffectsWaldboden();
          break;
        case 6:
          addEffectsHarshwinds();
          break;
        case 7:
          addEffectsThesoul();
          break;
        case 8:
          addEffectsFeatherweight();
          break;
        case 9:
          addEffectsAtpeace();
          break;
        default:
          break;
      }
  }
  },
  data()  {
    return {
      currentImg: this.img,
      isSelected: false,
    };
  }


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