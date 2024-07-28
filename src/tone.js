import * as Tone from 'tone';
import { useSamplerStore } from './stores/samplerStore';
import pianoUrl from "./assets/Ginger/GINGERPIANO.mp3";
import drumsUrl from "./assets/Ginger/GINGERDRUMS.mp3";
import hornsUrl from "./assets/Ginger/GINGERRHODES.mp3"
import bassUrl from "./assets/Ginger/GINGERBASS.mp3"
import synthUrl from "./assets/Ginger/GINGERSYNTHS.mp3"

const sampleStore = useSamplerStore();

//Init Players
const pianoPlayer = new Tone.Player({
  url: pianoUrl,
}).toDestination();

const drumsPlayer = new Tone.Player({
  url: drumsUrl,
}).toDestination();

const hornsPlayer = new Tone.Player({
  url: hornsUrl,
}).toDestination();

const bassPlayer = new Tone.Player({
  url: bassUrl,
}).toDestination();

const synthPlayer = new Tone.Player({
  url: synthUrl,
}).toDestination();

//Init Loops
let loopPiano = new Tone.Loop((time) => {
  pianoPlayer.start(time);
  },21).start(0);

let loopDrums = new Tone.Loop((time) => {
  drumsPlayer.start(time);
},21).start(0);

let loopHorns = new Tone.Loop((time) => {
  hornsPlayer.start(time)
},21).start(0);

let loopBass = new Tone.Loop((time) => {
  bassPlayer.start(time)
},21).start(0);

let loopSynth = new Tone.Loop((time) => {
  synthPlayer.start(time);
},21).start(0);

export function startTransport() {
  if (Tone.getTransport().state != 'started') {
      Tone.getTransport().start();
  }
}

export function playSample() {
  sampleStore.pipeLine.forEach(element => {
    if (element.isPlaying == true) {
      switch (element.id) {
        case 'PIANO':
          console.log("DEBUG-BACKEND: Piano Button On!")
          pianoPlayer.mute = false;
          break;
        case 'DRUMS':
          console.log("DEBUG-BACKEND: Drum Button On!")
          drumsPlayer.mute = false;
          break;
        case 'HORNS':
          console.log("DEBUG-BACKEND: Horns Button On!")
          hornsPlayer.mute = false;
          break;
        case 'BASS':
          console.log("DEBUG-BACKEND: Bass Button On!")
          bassPlayer.mute = false;
          break;
        case 'SYTH':
          console.log("DEBUG-BACKEND: Syth Button On!")
          synthPlayer.mute = false;
          break;
        default:
          console.log(element.id)
      }
    }
  });
}

export function stopSample() {
  sampleStore.pipeLine.forEach(element => {
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
        case 'HORNS':
          console.log("DEBUG-BACKEND: Horns Button Off!");
          hornsPlayer.mute = true;
          break;
        case 'BASS':
          console.log("DEBUG-BACKEND: Horns Button Off!");
          bassPlayer.mute = true;
          break;
        case 'SYTH':
          console.log("DEBUG-BACKEND: Synth Button Off!");
          synthPlayer.mute = true;
          break;
        default:
          break;
      }
    }
  })
}