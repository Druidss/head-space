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


import { useGingerStore } from '../stores/gingerStore';
import { useBlueskyStore } from '../stores/blueskyStore';
import { useHoehenangstStore } from '../stores/hoehenangstStore';
import { useSanctuaryStore } from '../stores/sanctuaryStore';
import { useWaldbodenStore } from '../stores/waldbodenStore';
import { useHarshwindsStore } from '../stores/harshwindsStore';
import { useThesoulStore } from '../stores/theSoulStore';
import { useFeatherweightStore } from '../stores/featherweightStore';
import { useAtpeaceStore } from '../stores/atpeaceStore';

import { useEffectStore } from '../stores/effectStore';

const gingerStore = useGingerStore();
const blueskyStore = useBlueskyStore();
const hoehenangstStore = useHoehenangstStore();
const sanctuaryStore = useSanctuaryStore();
const waldbodenStore = useWaldbodenStore();
const harshwindsStore = useHarshwindsStore();
const theSoulStore = useThesoulStore();
const featherweightStore = useFeatherweightStore();
const atpeaceStore = useAtpeaceStore();
const effectStore = useEffectStore();
//const start = Tone.start();


export default {
  name: 'Rectangle',
  props: {
    text: {
      type: String,
      required: true,
    },
    numberSampler: {
      type: Number,
      required: true,
    },
    instruments: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      isSelected: true, 
    };
  },
methods: {
  //Index Track from tracks.json
  handleClick() {
  //console.log("Current Index: " + " "+  this.numberSampler + " AND " + this.text)
  this.findBeatAndStartSampler(this.numberSampler);
  this.toggleSelect();
  },
  findBeatAndStartSampler(numberSampler) {
    switch (numberSampler) {
    case 1:
      this.playBeat(gingerStore,this.instruments);
      console.log("GINGER IS PLAYING");
      break;
    case 2:
      this.playBeat(blueskyStore,this.instruments);
      console.log(this.instruments[0]);
      console.log("BLUE SKY IS PLAYING");
      break;
    case 3:
      this.playBeat(hoehenangstStore, this.instruments);
      console.log("HOEHENANGST IS PLAYING")
      break;
    case 4:
      this.playBeat(sanctuaryStore,this.instruments);
      console.log("SANCTUARY IS PLAYING")
      break;
    case 5:
      this.playBeat(waldbodenStore, this.instruments);
      console.log("WALDBODEN IS PLAYING");
      break;
    case 6:
      this.playBeat(harshwindsStore, this.instruments);
      console.log("HARSH WINDS IS PLAYING");
      break;
    case 7:
      this.playBeat(theSoulStore, this.instruments);
      console.log("THE SOUL IS PLAYING");
      break;
    case 8:
      this.playBeat(featherweightStore, this.instruments);
      console.log("FEATHER WEIGHT IS PLAYING");
      break;
    case 9:
      this.playBeat(atpeaceStore, this.instruments);
      console.log("AT PEACE IS PLAYING");
      break;
    default:
      console.log("DEFAULT IS PLAYING");
      break;
  }
  },
  playBeat(store,arrayOfSamples) {
    switch (this.text) {
      case arrayOfSamples[0]:
        if (store.pipeLine[0].isPlaying) {
            store.pipeLine[0].isPlaying = false;
            store.stop();
            //stopSampleBlueSky();
          } else {
            store.pipeLine[0].isPlaying = true;
            store.play();
            //playSampleBlueSky()
          }
        break;
      case arrayOfSamples[1]:
        if (store.pipeLine[1].isPlaying) {
            store.pipeLine[1].isPlaying = false;
            store.stop();
            //stopSampleBlueSky();
          } else {
            store.pipeLine[1].isPlaying = true;
            store.play();
            //playSampleBlueSky()
          }
          break;
      case arrayOfSamples[2]:
        if (store.pipeLine[2].isPlaying) {
            store.pipeLine[2].isPlaying = false;
            store.stop();
            //stopSampleBlueSky()
          } else {
            store.pipeLine[2].isPlaying = true;
            store.play();
            //playSampleBlueSky()
          }
          break;
      case arrayOfSamples[3]:
        if (store.pipeLine[3].isPlaying) {
            store.pipeLine[3].isPlaying = false;
            store.stop();
            //stopSampleBlueSky()
          } else {
            store.pipeLine[3].isPlaying = true;
            store.play();
            //playSampleBlueSky()
          }
        break;
      case arrayOfSamples[4]:
      if (store.pipeLine[4].isPlaying) {
          store.pipeLine[4].isPlaying = false;
          store.stop();
          //stopSampleBlueSky()
          } else {
          store.pipeLine[4].isPlaying = true;
          store.play();
          //playSampleBlueSky()
          break;
          }
      default:
        console.log(this.text);
    }
  },
  toggleSelect() {
    this.isSelected = !this.isSelected;
    this.$forceUpdate();
  },
  updateSampleInPiniaStore() {
  //console.log("Effect should be played")
  effectStore.pipeLine.forEach(element => {
    element.sample = this.text;
  })
  console.log("DEBUG-updateSampleInPiniaStore: " + effectStore.pipeLine.forEach(element => {console.log(element.sample)}));
} 
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