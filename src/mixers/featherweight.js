import * as Tone from 'tone';
import { useFeatherweightStore } from '../stores/featherweightStore';
import { useEffectStore } from '../stores/effectStore';
import pianoUrl from "../assets/Albumstems/08FeatherWeight/FEATHERWEIGHTPIANO.mp3"
import drumsUrl from "../assets/Albumstems/08FeatherWeight/FEATHERWEIGHTDRUMS.mp3"
import bassUrl from "../assets/Albumstems/08FeatherWeight/FEATHERWEIGHTBASS.mp3"
import oneshotUrl from "../assets/Albumstems/08FeatherWeight/FEATHERWEIGHTONE-SHOTS.mp3"
import synthsUrl from "../assets/Albumstems/08FeatherWeight/FEATHERWEIGHTSYNTHS.mp3"

const effectStore = useEffectStore();
const featherweightStore = useFeatherweightStore();
//TODO:EFFEKT STORE
//Load playSampleFeatherweight and stopSampleFeatherweight in store
featherweightStore.play = playSampleFeatherweight;
featherweightStore.stop = stopSampleFeatherweight;

//Variables
//-> Player:
let pianoPlayer;
let drumsPlayer;
let bassPlayer;
let oneshotPlayer;
let synthsPlayer;
//->Loops:
let loopPiano;
let loopDrums;
let loopBass;
let loopOneshot
let loopSynths;

export function initPlayerLoopsFeatherweight() {
//Init Players
pianoPlayer = new Tone.Player({
    url: pianoUrl,
}).toDestination();
featherweightStore.pipeLine[0].player = pianoPlayer;

drumsPlayer = new Tone.Player({
    url: drumsUrl,
}).toDestination();
featherweightStore.pipeLine[1].player = drumsPlayer;

bassPlayer = new Tone.Player({
    url: bassUrl,
}).toDestination();
featherweightStore.pipeLine[2].player = bassPlayer;

oneshotPlayer = new Tone.Player({
    url: oneshotUrl
}).toDestination();
featherweightStore.pipeLine[3].player = oneshotPlayer;

synthsPlayer = new Tone.Player({
    url: synthsUrl,
}).toDestination();
featherweightStore.pipeLine[4].player = synthsPlayer;

//Init Loops
loopPiano = new Tone.Loop((time) => {
    pianoPlayer.start(time);
    },16).start(0);
  
loopDrums = new Tone.Loop((time) => {
    drumsPlayer.start(time);
    },16).start(0);
  
loopBass = new Tone.Loop((time) => {
    bassPlayer.start(time)
    },16).start(0);

loopOneshot = new Tone.Loop((time) => {
    oneshotPlayer.start(time)
    },16).start(0);

loopSynths = new Tone.Loop((time) => {
    synthsPlayer.start(time);
    },16).start(0);

featherweightStore.pipeLine.forEach(element => {
  if (!element.isPlaying) {
    element.player.mute = true;
  }
})

}

export function startMixerFeatherweight() {
    //if (Tone.getTransport().state != 'started') {
    //  Tone.getTransport().start();
    //}
    initPlayerLoopsFeatherweight();
    console.log("Wait 1sec to load Players/Loops");
    setTimeout(() => {
      if (Tone.getTransport().state != 'started') {
        Tone.getTransport().start();
    }
    }, 1000);
  }

export function stopMixerFeatherweight() {
  if (Tone.getTransport().state != 'stopped') {
    //Stop all Players
    pianoPlayer.stop();
    drumsPlayer.stop();
    bassPlayer.stop();
    oneshotPlayer.stop();
    synthsPlayer.stop();
    //stop all Loops
    loopPiano.stop();
    loopDrums.stop();
    loopBass.stop();
    loopOneshot.stop();
    loopSynths.stop();
    Tone.getTransport().stop();
    Tone.getTransport().clear();
    Tone.getTransport().loop = false;
}
}

export function playSampleFeatherweight() {
  featherweightStore.pipeLine.forEach(element => {
    if (element.isPlaying == true) {
      switch (element.id) {
        case 'PIANO':
          console.log("DEBUG-BACKEND: Piano Button On!")
          pianoPlayer.mute = false;
          break;
        case 'DRUMS':
          console.log("DEBUG-BACKEND: Drum Button On!")
          drumsPlayer.mute = false;
          //console.log("DEBUG-BACKEND: Drums Volume "+drumsPlayer.volume.value);
          break;
        case 'BASS':
          console.log("DEBUG-BACKEND: Bass Button On!")
          bassPlayer.mute = false;
          break;
        case 'ONESHOTS':
          console.log("DEBUG-BACKEND: Rhodes Button On!")
          oneshotPlayer.mute = false;
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

export function stopSampleFeatherweight() {
    featherweightStore.pipeLine.forEach(element => {
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
            bassPlayer.mute = true;
            break;
          case 'ONESHOTS':
            console.log("DEBUG-BACKEND: Rhodes Button Off!");
            oneshotPlayer.mute = true;
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


  export function addEffectsFeatherweight() {
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
        case 'ONESHOTS':
          return oneshotsPlayer;
        case 'SYNTHS':
          return synthsPlayer;
        default:
          return null;
          break;
      }
  }