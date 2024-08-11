import * as Tone from 'tone';
import { useHarshwindsStore } from '../stores/harshwindsStore';
import { useEffectStore } from '../stores/effectStore';
import chordsUrl from "../assets/Albumstems/06HarshWinds/HARSHWINDSCHORDS.mp3"
import drumsUrl from "../assets/Albumstems/06HarshWinds/HARSHWINDSDRUMS.mp3"
import sampleUrl from "../assets/Albumstems/06HarshWinds/HARSHWINDSSAMPLE.mp3"
import saxophoneUrl from "../assets/Albumstems/06HarshWinds/HARSHWINDSSAXOPHONE.mp3"
import synthsUrl from "../assets/Albumstems/06HarshWinds/HARSHWINDSSYNTHS.mp3"

const effectStore = useEffectStore();
const harshwindsStore = useHarshwindsStore();
//TODO:EFFEKT STORE
//Load playSampleHarshwinds and stopSampleHarshwinds in store
harshwindsStore.play = playSampleHarshwinds;
harshwindsStore.stop = stopSampleHarshwinds;

//Variables
//-> Player:
let chordsPlayer;
let drumsPlayer;
let samplePlayer;
let saxophonePlayer;
let synthsPlayer;
//->Loops:
let loopChords;
let loopDrums;
let loopSample;
let loopSaxophone;
let loopSynths;

export function initPlayerLoopsHarshwinds() {
//Init Players
chordsPlayer = new Tone.Player({
    url: chordsUrl,
}).toDestination();
harshwindsStore.pipeLine[0].player = chordsPlayer;

drumsPlayer = new Tone.Player({
    url: drumsUrl,
}).toDestination();
harshwindsStore.pipeLine[1].player = drumsPlayer;

samplePlayer = new Tone.Player({
    url: sampleUrl,
}).toDestination();
harshwindsStore.pipeLine[2].player = samplePlayer;

saxophonePlayer = new Tone.Player({
    url: saxophoneUrl,
}).toDestination();
harshwindsStore.pipeLine[3].player = saxophonePlayer;

synthsPlayer = new Tone.Player({
    url: synthsUrl,
}).toDestination();
harshwindsStore.pipeLine[4].player = synthsPlayer;

//Init Loops
loopChords = new Tone.Loop((time) => {
    chordsPlayer.start(time);
    },17).start(0);
  
loopDrums = new Tone.Loop((time) => {
    drumsPlayer.start(time);
    },17).start(0);
  
loopSample = new Tone.Loop((time) => {
    samplePlayer.start(time)
    },17).start(0);

loopSaxophone = new Tone.Loop((time) => {
    saxophonePlayer.start(time)
    },17).start(0);

loopSynths = new Tone.Loop((time) => {
    synthsPlayer.start(time);
    },17).start(0);

harshwindsStore.pipeLine.forEach(element => {
  if (!element.isPlaying) {
    element.player.mute = true;
  }
})

}

export function startMixerHarshwinds() {
    //if (Tone.getTransport().state != 'started') {
    //  Tone.getTransport().start();
    //}
    initPlayerLoopsHarshwinds();
    console.log("Wait 1sec to load Players/Loops");
    setTimeout(() => {
      if (Tone.getTransport().state != 'started') {
        Tone.getTransport().start();
    }
    }, 1000);
  }

export function stopMixerHarshwinds() {
  if (Tone.getTransport().state != 'stopped') {
    //Stop all Players
    chordsPlayer.stop();
    drumsPlayer.stop();
    samplePlayer.stop();
    saxophonePlayer.stop();
    synthsPlayer.stop();
    //stop all Loops
    loopChords.stop();
    loopDrums.stop();
    loopSample.stop();
    loopSaxophone.stop();
    loopSynths.stop();
    Tone.getTransport().stop();
    Tone.getTransport().clear();
    Tone.getTransport().loop = false;
}
}

export function playSampleHarshwinds() {
  harshwindsStore.pipeLine.forEach(element => {
    if (element.isPlaying == true) {
      switch (element.id) {
        case 'CHORDS':
          console.log("DEBUG-BACKEND: Piano Button On!")
          chordsPlayer.mute = false;
          break;
        case 'DRUMS':
          console.log("DEBUG-BACKEND: Drum Button On!")
          drumsPlayer.mute = false;
          break;
        case 'SAMPLE':
          console.log("DEBUG-BACKEND: Bass Button On!")
          samplePlayer.mute = false;
          break;
        case 'SAXOPHONE':
          console.log("DEBUG-BACKEND: Rhodes Button On!")
          saxophonePlayer.mute = false;
          break;
        case 'SYNTHS':
          console.log("DEBUG-BACKEND: Syth Button On!")
          synthsPlayer.mute = false;
          break;
        default:
          console.log("SWITCH-CASE playSample()-toneJS. DEFAULT")
          break;
      }
    }
  });
}

export function stopSampleHarshwinds() {
    harshwindsStore.pipeLine.forEach(element => {
      if (element.isPlaying == false) {
        switch (element.id) {
          case 'CHORDS':
            console.log("DEBUG-BACKEND: Piano Button Off!");
            chordsPlayer.mute = true;
            break;
          case 'DRUMS':
            console.log("DEBUG-BACKEND: Drums Button Off!");
            drumsPlayer.mute = true;
            break;
          case 'SAMPLE':
            console.log("DEBUG-BACKEND: Bass Button Off!");
            samplePlayer.mute = true;
            break;
          case 'SAXOPHONE':
            console.log("DEBUG-BACKEND: Rhodes Button Off!");
            saxophonePlayer.mute = true;
            break;
          case 'SYNTHS':
            console.log("DEBUG-BACKEND: Synth Button Off!");
            synthsPlayer.mute = true;
            break;
          default:
            break;
        }
      }
    })
  }


export function addEffectsHarshwinds() {
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
      case 'CHORDS':
        return chordsPlayer;
      case 'DRUMS':
        return drumsPlayer;
      case 'SAMPLE':
        return samplePlayer;
      case 'SAXOPHONE':
        return saxophonePlayer;
      case 'SYNTHS':
        return synthsPlayer;
      default:
        return null;
        break;
    }
}
