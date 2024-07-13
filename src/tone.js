import * as Tone from 'tone';

Tone.start();

// Define your synths, loops, and effects here
const synthA = new Tone.AMSynth().toDestination();
const loopA = new Tone.Loop((time) => {
  synthA.triggerAttackRelease("C2", "8n", time);
}, "4n").start(0);