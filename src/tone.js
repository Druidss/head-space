import * as Tone from 'tone';

Tone.start();

// Define your synths, loops, and effects here
const synthA = new Tone.AMSynth().toDestination();
const loopA = new Tone.Loop((time) => {
  synthA.triggerAttackRelease("C2", "8n", time);
}, "4n").start(0);

// const drumsUrl = URL.createObjectURL('./assets/Drums.wav');

const drums = new Tone.Player({
  url: 'https://tonejs.github.io/audio/berklee/gong_1.mp3',
}).toDestination();

export function playDrums() {
  Tone.start();
  Tone.loaded().then(() => {
    drums.start();
  });
}