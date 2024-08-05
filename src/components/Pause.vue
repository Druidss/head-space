<template>
  <div 
    class="w-28 h-28 m-1 flex items-center justify-center pause-gradient " 
    @click="handleClick"
  >
     <div class="flex text-center flex-col ">
      <div class="font-display text-xl text-viWhite">{{ text }}</div>
     </div>
  </div>
</template>

<script>
import * as Tone from 'tone';
import { startMixerGinger, stopMixerGinger } from '../mixers/ginger';

import  { startMixerBluesky, stopMixerBluesky } from '../mixers/bluesky';

import { startMixerHoehenangst,stopMixerHoehenangst } from '../mixers/hoehenangst';

import { startMixerSanctuary,stopMixerSanctuary } from '../mixers/sanctuary';

import { startMixerWaldboden,stopMixerWaldboden } from '../mixers/waldboden';

import { startMixerHarshwinds,stopMixerHarshwinds } from '../mixers/harshwinds';

import { startMixerThesoul,stopMixerThesoul } from '../mixers/thesoul';

import { startMixerFeatherweight,stopMixerFeatherweight } from '../mixers/featherweight';

import { startMixerAtpeace,stopMixerAtpeace } from '../mixers/atpeace';


export default {
  name: 'Rectangle',
  props: {
    text: {
      type: String,
      required: true,
    },
    numberSampler: {
      type: Number,
      required: true
    }
  },
  methods: {
    handleClick() {
      //startTransportGinger();
      switch (this.numberSampler) {
        case 1:
        if(Tone.getTransport().state == 'started') {
          stopMixerGinger();
        } else {
          startMixerGinger();
        };
          break;
        case 2:
        if(Tone.getTransport().state == 'started') {
          stopMixerBluesky();
          console.log("Mixer Bluesky stopped")
        } else {
          startMixerBluesky();
        };
          break;
        case 3:
        if(Tone.getTransport().state == 'started') {
          stopMixerHoehenangst();
        } else {
          startMixerHoehenangst();
        };
          break;
        case 4:
        if(Tone.getTransport().state == 'started') {
          stopMixerSanctuary();
        } else {
          startMixerSanctuary();
        };
          break;
        case 5:
        if(Tone.getTransport().state == 'started') {
          stopMixerWaldboden();
        } else {
          startMixerWaldboden();
        };
          break;
        case 6:
        if(Tone.getTransport().state == 'started') {
          stopMixerHarshwinds();
        } else {
          startMixerHarshwinds();
        };
          break;
        case 7:
        if(Tone.getTransport().state == 'started') {
          stopMixerThesoul();
        } else {
          startMixerThesoul();
        };
          break;
        case 8:
        if(Tone.getTransport().state == 'started') {
          stopMixerFeatherweight();
        } else {
          startMixerFeatherweight();
        };
          break;
        case 9:
        if(Tone.getTransport().state == 'started') {
          stopMixerAtpeace();
        } else {
          startMixerAtpeace();
        };
          break;
        default:
          break;
      }
    }
  },
};
</script>

<style scoped>
.pause-gradient {
  cursor: pointer;
  background: radial-gradient(#AF6047 30%, #7F4634);
}
</style>