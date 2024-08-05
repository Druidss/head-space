import * as Tone from 'tone';
import { useThesoulStore } from '../stores/theSoulStore';
import { useEffectStore } from '../stores/effectStore';
import chordsUrl from "../assets/Albumstems/07TheSoul/THESOULCHORDS.mp3"
import drumsUrl from "../assets/Albumstems/07TheSoul/THESOULDRUMS.mp3"
import bassUrl from "../assets/Albumstems/07TheSoul/THESOULBASS.mp3"
import guitarsUrl from "../assets/Albumstems/07TheSoul/THESOULGUITARS.mp3"
import synthsUrl from "../assets/Albumstems/07TheSoul/THESOULSYNTHS.mp3"


const theSoulStore = useThesoulStore();
//TODO:EFFEKT STORE
//Load playSampleThesoul and stopSampleThesoul in store
theSoulStore.play = playSampleThesoul;
theSoulStore.stop = stopSampleThesoul;

//Variables
//-> Player:
let chordsPlayer;
let drumsPlayer;
let bassPlayer;
let guitarsPlayer;
let synthsPlayer;
//->Loops:
let loopChords;
let loopDrums;
let loopBass;
let loopGuitars;
let loopSynths;

export function initPlayerLoopsThesoul() {
//Init Players
chordsPlayer = new Tone.Player({
    url: chordsUrl,
}).toDestination();
theSoulStore.pipeLine[0].player = chordsPlayer;

drumsPlayer = new Tone.Player({
    url: drumsUrl,
}).toDestination();
theSoulStore.pipeLine[1].player = drumsPlayer;

bassPlayer = new Tone.Player({
    url: bassUrl,
}).toDestination();
theSoulStore.pipeLine[2].player = bassPlayer;

guitarsPlayer = new Tone.Player({
    url: guitarsUrl,
}).toDestination();
theSoulStore.pipeLine[3].player = guitarsPlayer;

synthsPlayer = new Tone.Player({
    url: synthsUrl,
}).toDestination();
theSoulStore.pipeLine[4].player = synthsPlayer;

//Init Loops
loopChords = new Tone.Loop((time) => {
    chordsPlayer.start(time);
    },17).start(0);
  
loopDrums = new Tone.Loop((time) => {
    drumsPlayer.start(time);
    },17).start(0);
  
loopBass = new Tone.Loop((time) => {
    bassPlayer.start(time)
    },17).start(0);

loopGuitars = new Tone.Loop((time) => {
    guitarsPlayer.start(time)
    },17).start(0);

loopSynths = new Tone.Loop((time) => {
    synthsPlayer.start(time);
    },17).start(0);

theSoulStore.pipeLine.forEach(element => {
  if (!element.isPlaying) {
    element.player.mute = true;
  }
})

}

export function startMixerThesoul() {
    //if (Tone.getTransport().state != 'started') {
    //  Tone.getTransport().start();
    //}
    initPlayerLoopsThesoul();
    console.log("Wait 1sec to load Players/Loops");
    setTimeout(() => {
      if (Tone.getTransport().state != 'started') {
        Tone.getTransport().start();
    }
    }, 1000);
  }

export function stopMixerThesoul() {
  if (Tone.getTransport().state != 'stopped') {
    //Stop all Players
    chordsPlayer.stop();
    drumsPlayer.stop();
    bassPlayer.stop();
    guitarsPlayer.stop();
    synthsPlayer.stop();
    //stop all Loops
    loopChords.stop();
    loopDrums.stop();
    loopBass.stop();
    loopGuitars.stop();
    loopSynths.stop();
    Tone.getTransport().stop();
    Tone.getTransport().clear();
    Tone.getTransport().loop = false;
}
}

export function playSampleThesoul() {
  theSoulStore.pipeLine.forEach(element => {
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

export function stopSampleThesoul() {
    theSoulStore.pipeLine.forEach(element => {
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

