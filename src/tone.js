import * as Tone from 'tone';
import { useSamplerStore } from './stores/samplerStore';
import { useEffectStore } from './stores/effectStore';
import pianoUrl from "./assets/Ginger/GINGERPIANO.mp3";
import drumsUrl from "./assets/Ginger/GINGERDRUMS.mp3";
import hornsUrl from "./assets/Ginger/GINGERRHODES.mp3"
import bassUrl from "./assets/Ginger/GINGERBASS.mp3"
import synthUrl from "./assets/Ginger/GINGERSYNTHS.mp3"

const sampleStore = useSamplerStore();
const effectStore = useEffectStore();

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
          console.log("DEBUG-BACKEND: Drums Volume "+drumsPlayer.volume.value);
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

export function addEffects() {
  effectStore.pipeLine.forEach(element => {
    switch (element.sample) {
      case 'PIANO':
          //Value of Reverb
          console.log("DEBUG: Reverb added!")
          
        break;
      case 'DRUMS':
        console.log("DEBUG-BACKEND: DRUMS VOLUME")
        applyVolume(effectStore.pipeLine[0].value, drumsPlayer);
        applyReverb(effectStore.pipeLine[1].value,drumsPlayer);
        
        //setTimeout(applyReverb(effectStore.pipeLine[1].value,drumsPlayer),2000);
        
        
        //const volume = new Tone.Gain(1).toDestination();
        //drumsPlayer.connect(volume);
        
        break;
      case 'HORNS':

        break;
      case 'BASS':
        
        break;
      case 'SYTH':

        break;
      
      default:
        break;
    }
  })
}

//Helper
function applyVolume(value, player) {
  //Initial Connect of Gain()-Effect
  let calculatedValue = (value/10)-1;
  const volume = new Tone.Gain(calculatedValue).toDestination();
  
  if (!effectStore.pipeLine[0].connected) {
  effectStore.pipeLine[0].effectObject = volume;
  player.connect(volume);
  effectStore.pipeLine[0].connected = true;
  } else {
  player.disconnect(effectStore.pipeLine[0].effectObject);
  effectStore.pipeLine[0].effectObject = volume;
  player.connect(Tone.getDestination());
  player.chain(volume, Tone.getDestination());
  //effectStore.pipeLine[0].connected = false;

  }
}

function applyReverb(value,player) {
   //Initial Connect of Gain()-Effect
   //let calculatedValue = (value/10)-1;
   if (value == 0) {
      return;
   }
   const reverb = new Tone.Reverb(value).toDestination();
   
   if (!effectStore.pipeLine[1].connected) {
   effectStore.pipeLine[1].effectObject = reverb;
   player.connect(reverb);
   effectStore.pipeLine[1].connected = true;
   } else {
   player.disconnect(effectStore.pipeLine[1].effectObject);
   effectStore.pipeLine[1].effectObject = reverb;
   player.connect(Tone.getDestination());
   player.chain(reverb, Tone.getDestination());
   //effectStore.pipeLine[0].connected = false;
 
   }
}

function applyDelay() {
  
}

function applyFilter() {
  
}

function chainEffects() {
  
}