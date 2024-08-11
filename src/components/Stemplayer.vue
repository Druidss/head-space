<template >
  <div class="w-screen">
  <div class="w-9/12 mx-auto">
        <!-- text -->
          <div class="flex justify-between items-center mt-12">
            <div class="text-4xl font-display font-bold uppercase text-viSelect text-outline">john da lemon</div>
            <div class="text-4xl font-anisette text-viSelect text-outline">thE sOul sanctuary</div>
          </div>

        <!-- stem -->
        <div class="">
        <div class="flex flex-col border-2 border-vi px-4 py-4">
          <div class="flex justify-center items-center flex-col mb-4">
            
            <div class="flex w-full justify-center mx-8 ">
              <div class="flex-1 text-vi font-display font-bold text-3xl mb-2 justify-center text-center items-center pt-8">"{{ name }}"</div>
      

              <div class="flex  flex-1 justify-center items-center my-4">
                <button @click="handleClick" class="text-vi text-2xl mx-2 my-2 p-2">
                  <span>{{ isPlaying ? '❚❚' : '▶' }}</span>
                </button>
              </div>

              <div class="flex flex-1 justify-left text-lg mt-4">
                <div class="flex w-150 justify-center">
                <Rectangle class=''text="Key" :number="musicKey" />
                <Rectangle class=''text="Tempo" :number="tempo" />
                </div>
              </div>
            </div>
          </div>
          <div class="flex w-full justify-center">
            <video class="w-9/12 " ref="video" loop>
              <source :src="videoSrc" type="video/mp4"
                    width="1920"
                    height="667"
              >
            </video>
          </div>
          <div class="flex justify-center text-white text-4xl text-vi font-display mt-4 ">       
            <span class="font-bold px-2">{{number}}</span> / 09
          </div>
        </div>
        </div>

      <!-- button -->
      <div class="flex justify-center items-center mt-6">
        <button class="rounded-full mb-4  px-4 py-1 text-whit border-vi border-2 linear hover:bg-viSelect text-sm text-vi font-display">
          <a href="https://linktr.ee/johndalemon" target="_blank"
          class="hover:no-underline hover:text-viBlack focus:no-underline text-display text-sm "
          >
          Follow on Socials
          </a>
        </button>
      </div>
  </div>
</div>
</template>

<script>
import Rectangle from '@/components/RectangleStem.vue';
import { vueVimeoPlayer } from 'vue-vimeo-player'
import myVideo from '@/assets/vids/wave-f.mp4';

import * as Tone from 'tone';
import { startMixerGinger, stopMixerGinger } from '../mixers/ginger';
import { startMixerBluesky, stopMixerBluesky } from '../mixers/bluesky';
import { startMixerHoehenangst,stopMixerHoehenangst } from '../mixers/hoehenangst';
import { startMixerSanctuary,stopMixerSanctuary } from '../mixers/sanctuary';
import { startMixerWaldboden,stopMixerWaldboden } from '../mixers/waldboden';
import { startMixerHarshwinds,stopMixerHarshwinds } from '../mixers/harshwinds';
import { startMixerThesoul,stopMixerThesoul } from '../mixers/thesoul';
import { startMixerFeatherweight,stopMixerFeatherweight } from '../mixers/featherweight';
import { startMixerAtpeace,stopMixerAtpeace } from '../mixers/atpeace';
import gingerUrl from "../assets/Fullalbum/FULLALBUM/1GingerAL01.wav"
import blueskyUrl from "../assets/Fullalbum/FULLALBUM/2BlueskyAL01.wav"
import hoehenAngstUrl from "../assets/Fullalbum/FULLALBUM/3HoehenangstAL01.wav"
import sanctuaryUrl from "../assets/Fullalbum/FULLALBUM/4SanctuaryAL01.wav"
import waldbodenUrl from "../assets/Fullalbum/FULLALBUM/5WaldbodenAL01.wav"
import harshwindsUrl from "../assets/Fullalbum/FULLALBUM/6HarshWindsAL02.wav"
import thesoulUrl from "../assets/Fullalbum/FULLALBUM/7TheSoulAL01.wav"
import featherweightUrl from "../assets/Fullalbum/FULLALBUM/8FeatherWeightAL01.wav"
import atpeaceUrl from "../assets/Fullalbum/FULLALBUM/9AtPeaceAL02.wav"



const gingerPlayer = new Tone.Player({
        url: gingerUrl,
        autostart: false
      }).toDestination();
const blueskyPlayer = new Tone.Player({
  url: blueskyUrl,
  autostart: false
}).toDestination();
const hoehenangstPlayer = new Tone.Player({
  url: hoehenAngstUrl,
  autostart: false
}).toDestination();
const sanctuaryPlayer = new Tone.Player({
  url: sanctuaryUrl,
  autostart: false
}).toDestination();
const waldbodenPlayer = new Tone.Player({
  url: waldbodenUrl,
  autostart: false
}).toDestination();
const harshwindsPlayer = new Tone.Player({
  url: harshwindsUrl,
  autostart: false
}).toDestination();
const thesoulPlayer = new Tone.Player({
  url: thesoulUrl,
  autostart: false
}).toDestination();
const featherweightPlayer = new Tone.Player({
  url: featherweightUrl,
  autostart: false
}).toDestination();
const atpeacePlayer = new Tone.Player({
  url: atpeaceUrl,
  autostart: false
}).toDestination();


export default {
  components: {
    Rectangle,
    vueVimeoPlayer
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
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
  },
  data() {
    return {
      isPlaying: false,
      videoSrc: myVideo
    }
  },
  mounted() {
    this.videoId = this.id;
    this.playerReady = false;
  },
  methods: {
    handleClick() {
      this.togglePlayPause();
      switch (this.number) {
        case 1:
        if(gingerPlayer.state == 'started') {
          
          gingerPlayer.stop();
        } else {
          gingerPlayer.start();
        };
          break;
        case 2:
        if(blueskyPlayer.state == 'started') {
          blueskyPlayer.stop();
        } else {
          blueskyPlayer.start();
        };
          break;
        case 3:
        if(hoehenangstPlayer.state == 'started') {
          hoehenangstPlayer.stop();
        } else {
          hoehenangstPlayer.start();
        };
          break;
        case 4:
        if(sanctuaryPlayer.state == 'started') {
          sanctuaryPlayer.stop();
        } else {
          sanctuaryPlayer.start();
        };
          break;
        case 5:
        if(waldbodenPlayer.state == 'started') {
          waldbodenPlayer.stop();
        } else {
          waldbodenPlayer.start();
        };
          break;
        case 6:
        if(harshwindsPlayer.state == 'started') {
          harshwindsPlayer.stop();
        } else {
          harshwindsPlayer.start();
        };
          break;
        case 7:
        if(thesoulPlayer.state == 'started') {
          thesoulPlayer.stop();
        } else {
          thesoulPlayer.start();
        };
          break;
        case 8:
        if(featherweightPlayer.state == 'started') {
          featherweightPlayer.stop();
        } else {
          featherweightPlayer.start();
        };
          break;
        case 9:
        if(atpeacePlayer.state == 'started') {
          atpeacePlayer.stop();
        } else {
          atpeacePlayer.start();
        };
          break;
        default:
          break;
      }
    },
    togglePlayPause() {
      const video = this.$refs.video;
      if (!this.isPlaying) {
        video.play();
        this.isPlaying = true;
      } else {
        video.pause();
        this.isPlaying = false;
      }
    },
    
  }
};
</script>

<style scoped>
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
