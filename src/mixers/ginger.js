import * as Tone from 'tone';
import { useGingerStore } from '../stores/gingerStore';
import { useEffectStore } from '../stores/effectStore';
//import pianoUrl from "../assets/Ginger/GINGERPIANO.mp3";
import pianoUrl from "../assets/Albumstems/01Ginger/GINGERPIANO.mp3"
import drumsUrl from "../assets/Albumstems/01Ginger/GINGERDRUMS.mp3";
import rhodesUrl from "../assets/Albumstems/01Ginger/GINGERRHODES.mp3"
import bassUrl from "../assets/Albumstems/01Ginger/GINGERBASS.mp3"
import synthUrl from "../assets/Albumstems/01Ginger/GINGERSYNTHS.mp3"

const gingerStore = useGingerStore();
const effectStore = useEffectStore();

//Load playSampleGinger and stopSampleGinger in gingerStore
gingerStore.play = playSampleGinger;
gingerStore.stop = stopSampleGinger;

//Variables
//-> Player:
let pianoPlayer;
let drumsPlayer;
let rhodesPlayer;
let bassPlayer;
let synthPlayer;
//->Loops:
let loopPiano;
let loopDrums;
let loopRhodes;
let loopBass;
let loopSynth;


//TODO: update status player.mute after init
//Init Players

export function initPlayerLoopsGinger() {  
pianoPlayer = new Tone.Player({
  url: pianoUrl,
  debug: true,
}).toDestination();



drumsPlayer = new Tone.Player({
  url: drumsUrl,
}).toDestination();
gingerStore.pipeLine[1].player = drumsPlayer;

rhodesPlayer = new Tone.Player({
  url: rhodesUrl,
}).toDestination();
gingerStore.pipeLine[2].player = rhodesPlayer;

bassPlayer = new Tone.Player({
  url: bassUrl,
}).toDestination();
gingerStore.pipeLine[3].player = bassPlayer;

synthPlayer = new Tone.Player({
  url: synthUrl,
}).toDestination();
gingerStore.pipeLine[4].player = synthPlayer;

//Init Loops
loopPiano = new Tone.Loop((time) => {
  pianoPlayer.start(time);
  },21).start(0);

loopDrums = new Tone.Loop((time) => {
  drumsPlayer.start(time);
},21).start(0);

loopBass = new Tone.Loop((time) => {
  bassPlayer.start(time)
},21).start(0);

loopRhodes = new Tone.Loop((time) => {
  rhodesPlayer.start(time)
},21).start(0);

loopSynth = new Tone.Loop((time) => {
  synthPlayer.start(time);
},21).start(0);

gingerStore.pipeLine[0].player = pianoPlayer;

//Sets mute according to PiniaStore isPlaying
gingerStore.pipeLine.forEach(element => {
  if (!element.isPlaying) {
    element.player.mute = true;
  }
})

}

//FIX THIS deprecated
export function startTransport() {
  console.log("WRONG START TRANSPORT")
}
//
export function startMixerGinger() {
  initPlayerLoopsGinger();
  console.log("Wait 1sec to load Players/Loops");
  setTimeout(() => {
    if (Tone.getTransport().state != 'started') {
      Tone.getTransport().start();
  }
  }, 1000);
  
}

export function stopMixerGinger() {
  if (Tone.getTransport().state != 'stopped') {
    //Stop all Players
    pianoPlayer.stop();
    drumsPlayer.stop();
    bassPlayer.stop();
    rhodesPlayer.stop();
    synthPlayer.stop();
    //stop all Loops
    loopPiano.stop();
    loopDrums.stop();
    loopBass.stop();
    loopRhodes.stop();
    loopSynth.stop();
    Tone.getTransport().stop();
    Tone.getTransport().clear();
    Tone.getTransport().loop = false;
  }
}

export function playSampleGinger() {
  gingerStore.pipeLine.forEach(element => {
    if (element.isPlaying == true) {
      switch (element.id) {
        case 'PIANO':
          console.log("DEBUG-BACKEND: Piano Button On!")
          pianoPlayer.mute = false;
          break;
        case 'DRUMS':
          console.log("DEBUG-BACKEND: Drum Button On!")
          drumsPlayer.mute = false;
          console.log("DEBUG-BACKEND: Drums Volume "+drumsPlayer.volume.value);
          break;
        case 'BASS':
          console.log("DEBUG-BACKEND: Bass Button On!")
          bassPlayer.mute = false;
          break;
        case 'RHODES':
          console.log("DEBUG-BACKEND: Rhodes Button On!")
          rhodesPlayer.mute = false;
          break;
        case 'SYNTHS':
          console.log("DEBUG-BACKEND: Syth Button On!")
          synthPlayer.mute = false;
          break;
        default:
          console.log("SWITCH-CASE playSample()-toneJS. DEFAULT")
          break;
      }
    }
  });
}

export function stopSampleGinger() {
  gingerStore.pipeLine.forEach(element => {
    if (element.isPlaying == false) {
      switch (element.id) {
        case 'PIANO':
          console.log("DEBUG-BACKEND: Piano Button Off!");
          pianoPlayer.mute = true;
          break;
        case 'DRUMS':
          console.log("DEBUG-BACKEND: Drums Button Off!");
          drumsPlayer.mute = true;
          break;
        case 'BASS':
          console.log("DEBUG-BACKEND: Bass Button Off!");
          rhodesPlayer.mute = true;
          break;
        case 'RHODES':
          console.log("DEBUG-BACKEND: Rhodes Button Off!");
          bassPlayer.mute = true;
          break;
        case 'SYNTHS':
          console.log("DEBUG-BACKEND: Synth Button Off!");
          synthPlayer.mute = true;
          break;
        default:
          break;
      }
    }
  })
}

//#########################################################################################
//Adds effects, with current values from Pinia Store
//Global Array of current
//let currentSelectedEffects = [];
let delay;

export function addEffectsGinger() {
  let player = returnLastClickedSample();
  //let currentlyConnectedEffectsObjects = [];
  effectStore.pipeLine.forEach(element => {
    if (element.selected) {
      switch (element.id) {
        case 'VOLUME':
          let value = effectStore.pipeLine[0].value;
          let volumeValues = [-50,-45,-40,-35,-30,-25,-20,-15,-10,-5,0];
          player.volume.value = volumeValues[value];
          effectStore.pipeLine[0].connected = true;
          break;
        case 'REVERB':
          break;
        case 'DELAY':
          break;
        case 'BITCRUSHER':
          //const bitcrusher = new Tone.BitCrusher(effectStore.pipeLine[3]).toDestination();
          //if (effectStore.pipeLine[3].effectObject == null) {
          //  player.connect(bitcrusher)
          //  effectStore.pipeLine[3].connected = true;
          //  effectStore.pipeLine[3].effectObject = bitcrusher;
          //  console.log("DEBUG: INITAL BITCRUSHER ADD");
          //} else {
          //player.disconnect(effectStore.pipeLine[3].effectObject);
          //player.connect(Tone.getDestination());
          //player.connect(bitcrusher);
          //}
          break;
        default:
          break;
      }
    } else {
      switch (element.id) {
        case 'VOLUME':
          player.volume.value = 0;
          effectStore.pipeLine[0].connected = false;
          break;
        case 'REVERB':
          break;
        case 'DELAY':
        default:
          break;
      }
    }
  })
}

//Helper
function returnLastClickedSample() {
    switch (effectStore.sample) {
      case 'PIANO':
        return pianoPlayer;
      case 'DRUMS':
        return drumsPlayer;
      case 'BASS':
        return bassPlayer;
      case 'RHODES':
        return rhodesPlayer;
      case 'SYNTHS':
        return synthPlayer;
      default:
        return null;
        break;
    }
}

//Not in use yet