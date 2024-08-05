import * as Tone from 'tone';
import { useWaldbodenStore } from '../stores/waldbodenStore';
import { useEffectStore } from '../stores/effectStore';
import rhodesUrl from "../assets/Albumstems/05Waldboden/WALDBODENRHODES.mp3"
import drumsUrl from "../assets/Albumstems/05Waldboden/WALDBODENDRUMS.mp3"
import bassUrl from "../assets/Albumstems/05Waldboden/WALDBODENBASS.mp3"
import guitarsUrl from "../assets/Albumstems/05Waldboden/WALDBODENGUITARS.mp3"
import synthsUrl from "../assets/Albumstems/05Waldboden/WALDBODENSYNTHS.mp3"


const waldbodenStore = useWaldbodenStore();
//TODO:EFFEKT STORE
//Load playSampleSANCTUARY and stopSampleSANCTUARY in store
waldbodenStore.play = playSampleWaldboden;
waldbodenStore.stop = stopSampleWaldboden;

//Variables
//-> Player:
let rhodesPlayer;
let drumsPlayer;
let bassPlayer;
let guitarsPlayer;
let synthsPlayer;
//->Loops:
let loopRhodes;
let loopDrums;
let loopBass;
let loopGuitars;
let loopSynths;

export function initPlayerLoopsWaldboden() {
//Init Players
rhodesPlayer = new Tone.Player({
    url: rhodesUrl,
}).toDestination();
waldbodenStore.pipeLine[0].player = rhodesPlayer;

drumsPlayer = new Tone.Player({
    url: drumsUrl,
}).toDestination();
waldbodenStore.pipeLine[1].player = drumsPlayer;

bassPlayer = new Tone.Player({
    url: bassUrl,
}).toDestination();
waldbodenStore.pipeLine[2].player = bassPlayer;

guitarsPlayer = new Tone.Player({
    url: guitarsUrl,
}).toDestination();
waldbodenStore.pipeLine[3].player = guitarsPlayer;

synthsPlayer = new Tone.Player({
    url: synthsUrl,
}).toDestination();
waldbodenStore.pipeLine[4].player = synthsPlayer;

//Init Loops
loopRhodes = new Tone.Loop((time) => {
    rhodesPlayer.start(time);
    },19).start(0);
  
loopDrums = new Tone.Loop((time) => {
    drumsPlayer.start(time);
    },19).start(0);
  
loopBass = new Tone.Loop((time) => {
    bassPlayer.start(time)
    },19).start(0);

loopGuitars = new Tone.Loop((time) => {
    guitarsPlayer.start(time)
    },19).start(0);

loopSynths = new Tone.Loop((time) => {
    synthsPlayer.start(time);
    },19).start(0);

waldbodenStore.pipeLine.forEach(element => {
  if (!element.isPlaying) {
    element.player.mute = true;
  }
})

}

export function startMixerWaldboden() {
    //if (Tone.getTransport().state != 'started') {
    //  Tone.getTransport().start();
    //}
    initPlayerLoopsWaldboden();
    console.log("Wait 1sec to load Players/Loops");
    setTimeout(() => {
      if (Tone.getTransport().state != 'started') {
        Tone.getTransport().start();
    }
    }, 1000);
  }

export function stopMixerWaldboden() {
  if (Tone.getTransport().state != 'stopped') {
    //Stop all Players
    rhodesPlayer.stop();
    drumsPlayer.stop();
    bassPlayer.stop();
    guitarsPlayer.stop();
    synthsPlayer.stop();
    //stop all Loops
    loopRhodes.stop();
    loopDrums.stop();
    loopBass.stop();
    loopGuitars.stop();
    loopSynths.stop();
    Tone.getTransport().stop();
    Tone.getTransport().clear();
    Tone.getTransport().loop = false;
}
}

export function playSampleWaldboden() {
  waldbodenStore.pipeLine.forEach(element => {
    if (element.isPlaying == true) {
      switch (element.id) {
        case 'RHODES':
          console.log("DEBUG-BACKEND: Piano Button On!")
          rhodesPlayer.mute = false;
          break;
        case 'DRUMS':
          console.log("DEBUG-BACKEND: Drum Button On!")
          drumsPlayer.mute = false;
          break;
        case 'BASS':
          console.log("DEBUG-BACKEND: Bass Button On!")
          bassPlayer.mute = false;
          break;
        case 'GUITARS':
          console.log("DEBUG-BACKEND: Rhodes Button On!")
          guitarsPlayer.mute = false;
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

export function stopSampleWaldboden() {
    waldbodenStore.pipeLine.forEach(element => {
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
          case 'BASS':
            console.log("DEBUG-BACKEND: Bass Button Off!");
            bassPlayer.mute = true;
            break;
          case 'GUITARS':
            console.log("DEBUG-BACKEND: Rhodes Button Off!");
            guitarsPlayer.mute = true;
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

