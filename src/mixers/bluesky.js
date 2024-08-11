import * as Tone from 'tone';
import { useBlueskyStore } from '../stores/blueskyStore';
import { useEffectStore } from '../stores/effectStore';
import bassUrl from "../assets/Albumstems/02Bluesky/BLUESKYBASS.mp3"
import chordsUrl from "../assets/Albumstems/02Bluesky/BLUESKYCHORDS.mp3"
import drumsUrl from "../assets/Albumstems/02Bluesky/BLUESKYDRUMS.mp3"
import oneshotUrl from "../assets/Albumstems/02Bluesky/BLUESKYOneShots.mp3"
import synthUrl from "../assets/Albumstems/02Bluesky/BLUESKYSYNTH.mp3"


const blueSkyStore = useBlueskyStore();
const effectStore = useEffectStore();
//TODO:EFFEKT STORE
//Load playSampleBluesky and stopSampleBluesky in store
blueSkyStore.play = playSampleBlueSky;
blueSkyStore.stop = stopSampleBlueSky;

//Variables
//-> Player:
let chordPlayer;
let drumsPlayer;
let bassPlayer;
let oneshotPlayer;
let synthPlayer;
//->Loops:
let loopChords;
let loopDrums;
let loopBass;
let loopOneshot
let loopSynth;

export function initPlayerLoopsBluesky() {
//Init Players
chordPlayer = new Tone.Player({
    url: chordsUrl,
}).toDestination();
blueSkyStore.pipeLine[0].player = chordPlayer;

drumsPlayer = new Tone.Player({
    url: drumsUrl,
}).toDestination();
blueSkyStore.pipeLine[1].player = drumsPlayer;

bassPlayer = new Tone.Player({
    url: bassUrl,
}).toDestination();
blueSkyStore.pipeLine[2].player = bassPlayer;

oneshotPlayer = new Tone.Player({
    url: oneshotUrl
}).toDestination();
blueSkyStore.pipeLine[3].player = oneshotPlayer;

synthPlayer = new Tone.Player({
    url: synthUrl,
}).toDestination();
blueSkyStore.pipeLine[4].player = synthPlayer;

//Init Loops
loopChords = new Tone.Loop((time) => {
    chordPlayer.start(time);
    },22).start(0);
  
loopDrums = new Tone.Loop((time) => {
    drumsPlayer.start(time);
    },22).start(0);
  
loopBass = new Tone.Loop((time) => {
    bassPlayer.start(time)
    },22).start(0);

loopOneshot = new Tone.Loop((time) => {
    oneshotPlayer.start(time)
    },22).start(0);

loopSynth = new Tone.Loop((time) => {
    synthPlayer.start(time);
    },22).start(0);

blueSkyStore.pipeLine.forEach(element => {
  if (!element.isPlaying) {
    element.player.mute = true;
  }
})

}

export function startMixerBluesky() {
    //if (Tone.getTransport().state != 'started') {
    //  Tone.getTransport().start();
    //}
    initPlayerLoopsBluesky();
    console.log("Wait 1sec to load Players/Loops");
    setTimeout(() => {
      if (Tone.getTransport().state != 'started') {
        Tone.getTransport().start();
    }
    }, 1000);
  }

export function stopMixerBluesky() {
  if (Tone.getTransport().state != 'stopped') {
    //Stop all Players
    bassPlayer.stop();
    chordPlayer.stop();
    drumsPlayer.stop();
    oneshotPlayer.stop();
    synthPlayer.stop();
    //stop all Loops
    loopBass.stop();
    loopChords.stop();
    loopDrums.stop();
    loopOneshot.stop();
    loopSynth.stop();
    Tone.getTransport().stop();
    Tone.getTransport().clear();
    Tone.getTransport().loop = false;
}
}

export function playSampleBlueSky() {
  blueSkyStore.pipeLine.forEach(element => {
    if (element.isPlaying == true) {
      switch (element.id) {
        case 'CHORDS':
          console.log("DEBUG-BACKEND: Piano Button On!")
          chordPlayer.mute = false;
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
        case 'SYNTH':
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

export function stopSampleBlueSky() {
    blueSkyStore.pipeLine.forEach(element => {
      if (element.isPlaying == false) {
        switch (element.id) {
          case 'CHORDS':
            console.log("DEBUG-BACKEND: Piano Button Off!");
            chordPlayer.mute = true;
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
          case 'SYNTH':
            console.log("DEBUG-BACKEND: Synth Button Off!");
            synthPlayer.mute = true;
            break;
          default:
            break;
        }
      }
    })
  }

export function addEffectsBluesky() {
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

function returnLastClickedSample() {
  switch (effectStore.sample) {
    case 'CHORDS':
      return chordPlayer;
    case 'DRUMS':
      return drumsPlayer;
    case 'BASS':
      return bassPlayer;
    case 'ONESHOTS':
      return oneshotPlayer;
    case 'SYNTH':
      return synthPlayer;
    default:
      return null;
      break;
  }
}