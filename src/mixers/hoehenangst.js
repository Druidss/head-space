import * as Tone from 'tone';
import { useHoehenangstStore } from '../stores/hoehenangstStore';
import { useEffectStore } from '../stores/effectStore';
import guitarsUrl from "../assets/Albumstems/03Hoehenangst/HOEHENANGSTGUITARS.mp3"
import drumsUrl from "../assets/Albumstems/03Hoehenangst/HOEHENANGSTDRUMS.mp3"
import bassUrl from "../assets/Albumstems/03Hoehenangst/HOEHENANGSTBASS.mp3"
import sampleUrl from "../assets/Albumstems/03Hoehenangst/HOEHENANGSTSAMPLE.mp3"
import synthsUrl from "../assets/Albumstems/03Hoehenangst/HOEHENANGSTSYNTHS.mp3"


const hoehenangstStore = useHoehenangstStore();
//TODO:EFFEKT STORE
//Load playSampleHoehenangst and stopSampleHoehenangst in store
hoehenangstStore.play = playSampleHoehenangst;
hoehenangstStore.stop = stopSampleHoehenangst;

//Variables
//-> Player:
let guitarsPlayer;
let drumsPlayer;
let bassPlayer;
let samplePlayer;
let synthsPlayer;
//->Loops:
let loopGuitars;
let loopDrums;
let loopBass;
let loopSample
let loopSynths;

export function initPlayerLoopsHoehenangst() {
//Init Players
guitarsPlayer = new Tone.Player({
    url: guitarsUrl,
}).toDestination();
hoehenangstStore.pipeLine[0].player = guitarsPlayer;

drumsPlayer = new Tone.Player({
    url: drumsUrl,
}).toDestination();
hoehenangstStore.pipeLine[1].player = drumsPlayer;

bassPlayer = new Tone.Player({
    url: bassUrl,
}).toDestination();
hoehenangstStore.pipeLine[2].player = bassPlayer;

samplePlayer = new Tone.Player({
    url: sampleUrl
}).toDestination();
hoehenangstStore.pipeLine[3].player = samplePlayer;

synthsPlayer = new Tone.Player({
    url: synthsUrl,
}).toDestination();
hoehenangstStore.pipeLine[4].player = synthsPlayer;

//Init Loops
loopGuitars = new Tone.Loop((time) => {
    guitarsPlayer.start(time);
    },16).start(0);
  
loopDrums = new Tone.Loop((time) => {
    drumsPlayer.start(time);
    },16).start(0);
  
loopBass = new Tone.Loop((time) => {
    bassPlayer.start(time)
    },16).start(0);

loopSample = new Tone.Loop((time) => {
    samplePlayer.start(time)
    },16).start(0);

loopSynths = new Tone.Loop((time) => {
    synthsPlayer.start(time);
    },16).start(0);

hoehenangstStore.pipeLine.forEach(element => {
  if (!element.isPlaying) {
    element.player.mute = true;
  }
})

}

export function startMixerHoehenangst() {
    //if (Tone.getTransport().state != 'started') {
    //  Tone.getTransport().start();
    //}
    initPlayerLoopsHoehenangst();
    console.log("Wait 1sec to load Players/Loops");
    setTimeout(() => {
      if (Tone.getTransport().state != 'started') {
        Tone.getTransport().start();
    }
    }, 1000);
  }

export function stopMixerHoehenangst() {
  if (Tone.getTransport().state != 'stopped') {
    //Stop all Players
    guitarsPlayer.stop();
    drumsPlayer.stop();
    bassPlayer.stop();
    samplePlayer.stop();
    synthsPlayer.stop();
    //stop all Loops
    loopGuitars.stop();
    loopDrums.stop();
    loopBass.stop();
    loopSample.stop();
    loopSynths.stop();
    Tone.getTransport().stop();
    Tone.getTransport().clear();
    Tone.getTransport().loop = false;
}
}

export function playSampleHoehenangst() {
  hoehenangstStore.pipeLine.forEach(element => {
    if (element.isPlaying == true) {
      switch (element.id) {
        case 'GUITARS':
          console.log("DEBUG-BACKEND: Piano Button On!")
          guitarsPlayer.mute = false;
          break;
        case 'DRUMS':
          console.log("DEBUG-BACKEND: Drum Button On!")
          drumsPlayer.mute = false;
          break;
        case 'BASS':
          console.log("DEBUG-BACKEND: Bass Button On!")
          bassPlayer.mute = false;
          break;
        case 'SAMPLE':
          console.log("DEBUG-BACKEND: Rhodes Button On!")
          samplePlayer.mute = false;
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

export function stopSampleHoehenangst() {
    hoehenangstStore.pipeLine.forEach(element => {
      if (element.isPlaying == false) {
        switch (element.id) {
          case 'GUITARS':
            console.log("DEBUG-BACKEND: Piano Button Off!");
            guitarsPlayer.mute = true;
            break;
          case 'DRUMS':
            console.log("DEBUG-BACKEND: Drums Button Off!");
            drumsPlayer.mute = true;
            break;
          case 'BASS':
            console.log("DEBUG-BACKEND: Bass Button Off!");
            bassPlayer.mute = true;
            break;
          case 'SAMPLE':
            console.log("DEBUG-BACKEND: Rhodes Button Off!");
            samplePlayer.mute = true;
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

