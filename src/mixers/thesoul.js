import * as Tone from 'tone';
import { useThesoulStore } from '../stores/theSoulStore';
import { useEffectStore } from '../stores/effectStore';
import chordsUrl from "../assets/Albumstems/07TheSoul/THESOULCHORDS.mp3"
import drumsUrl from "../assets/Albumstems/07TheSoul/THESOULDRUMS.mp3"
import bassUrl from "../assets/Albumstems/07TheSoul/THESOULBASS.mp3"
import guitarsUrl from "../assets/Albumstems/07TheSoul/THESOULGUITARS.mp3"
import synthsUrl from "../assets/Albumstems/07TheSoul/THESOULSYNTHS.mp3"

const effectStore = useEffectStore();

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



  export function addEffectsThesoul() {
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
        case 'BASS':
          return bassPlayer;
        case 'GUITARS':
          return guitarsPlayer;
        case 'SYNTHS':
          return synthsPlayer;
        default:
          return null;
          break;
      }
  }