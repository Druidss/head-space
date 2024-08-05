import * as Tone from 'tone';
import { useAtpeaceStore } from '../stores/atpeaceStore';
import { useEffectStore } from '../stores/effectStore';
import rhodesUrl from "../assets/Albumstems/09AtPeace/ATPEACERHODES.mp3"
import drumsUrl from "../assets/Albumstems/09AtPeace/ATPEACEDRUMS.mp3"
import vibraphoneUrl from "../assets/Albumstems/09AtPeace/ATPEACEVIBRAPHONE.mp3"
import ambienceUrl from "../assets/Albumstems/09AtPeace/ATPEACEAMBIENCE.mp3"
import synthsUrl from "../assets/Albumstems/09AtPeace/ATPEACESYNTHS.mp3"


const atpeaceStore = useAtpeaceStore();
//TODO:EFFEKT STORE
//Load playSampleAtpeace and stopSampleAtpeace in store
atpeaceStore.play = playSampleAtpeace;
atpeaceStore.stop = stopSampleAtpeace;

//Variables
//-> Player:
let rhodesPlayer;
let drumsPlayer;
let vibraphonePlayer;
let ambiencePlayer;
let synthsPlayer;
//->Loops:
let loopRhodes;
let loopDrums;
let loopVibraphone;
let loopAmbience;
let loopSynths;

export function initPlayerLoopsAtpeace() {
//Init Players
rhodesPlayer = new Tone.Player({
    url: rhodesUrl,
}).toDestination();
atpeaceStore.pipeLine[0].player = rhodesPlayer;

drumsPlayer = new Tone.Player({
    url: drumsUrl,
}).toDestination();
atpeaceStore.pipeLine[1].player = drumsPlayer;

vibraphonePlayer = new Tone.Player({
    url: vibraphoneUrl,
}).toDestination();
atpeaceStore.pipeLine[2].player = vibraphonePlayer;

ambiencePlayer = new Tone.Player({
    url: ambienceUrl
}).toDestination();
atpeaceStore.pipeLine[3].player = ambiencePlayer;

synthsPlayer = new Tone.Player({
    url: synthsUrl,
}).toDestination();
atpeaceStore.pipeLine[4].player = synthsPlayer;

//Init Loops
loopRhodes = new Tone.Loop((time) => {
    rhodesPlayer.start(time);
    },16).start(0);
  
loopDrums = new Tone.Loop((time) => {
    drumsPlayer.start(time);
    },16).start(0);
  
loopVibraphone = new Tone.Loop((time) => {
    vibraphonePlayer.start(time)
    },16).start(0);

loopAmbience = new Tone.Loop((time) => {
    ambiencePlayer.start(time)
    },16).start(0);

loopSynths = new Tone.Loop((time) => {
    synthsPlayer.start(time);
    },16).start(0);

atpeaceStore.pipeLine.forEach(element => {
  if (!element.isPlaying) {
    element.player.mute = true;
  }
})

}

export function startMixerAtpeace() {
    //if (Tone.getTransport().state != 'started') {
    //  Tone.getTransport().start();
    //}
    initPlayerLoopsAtpeace();
    console.log("Wait 1sec to load Players/Loops");
    setTimeout(() => {
      if (Tone.getTransport().state != 'started') {
        Tone.getTransport().start();
    }
    }, 1000);
  }

export function stopMixerAtpeace() {
  if (Tone.getTransport().state != 'stopped') {
    //Stop all Players
    vibraphonePlayer.stop();
    rhodesPlayer.stop();
    drumsPlayer.stop();
    ambiencePlayer.stop();
    synthsPlayer.stop();
    //stop all Loops
    loopVibraphone.stop();
    loopRhodes.stop();
    loopDrums.stop();
    loopAmbience.stop();
    loopSynths.stop();
    Tone.getTransport().stop();
    Tone.getTransport().clear();
    Tone.getTransport().loop = false;
}
}

export function playSampleAtpeace() {
  atpeaceStore.pipeLine.forEach(element => {
    if (element.isPlaying == true) {
      switch (element.id) {
        case 'RHODES':
          console.log("DEBUG-BACKEND: Piano Button On!")
          rhodesPlayer.mute = false;
          break;
        case 'DRUMS':
          console.log("DEBUG-BACKEND: Drum Button On!")
          drumsPlayer.mute = false;
          //console.log("DEBUG-BACKEND: Drums Volume "+drumsPlayer.volume.value);
          break;
        case 'VIBRAPHONE':
          console.log("DEBUG-BACKEND: Bass Button On!")
          vibraphonePlayer.mute = false;
          break;
        case 'AMBIENCE':
          console.log("DEBUG-BACKEND: Rhodes Button On!")
          ambiencePlayer.mute = false;
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

export function stopSampleAtpeace() {
    atpeaceStore.pipeLine.forEach(element => {
      if (element.isPlaying == false) {
        switch (element.id) {
          case 'RHODES':
            console.log("DEBUG-BACKEND: Piano Button Off!");
            rhodesPlayer.mute = true;
            break;
          case 'DRUMS':
            console.log("DEBUG-BACKEND: Drums Button Off!");
            drumsPlayer.mute = true;
            break;
          case 'VIBRAPHONE':
            console.log("DEBUG-BACKEND: Bass Button Off!");
            vibraphonePlayer.mute = true;
            break;
          case 'AMBIENCE':
            console.log("DEBUG-BACKEND: Rhodes Button Off!");
            ambiencePlayer.mute = true;
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

