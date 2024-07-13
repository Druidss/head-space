import * as Tone from 'tone';
import drumsUrl from "./assets/Drums.mp3";
import pianoUrl from "./assets/Main_piano.wav";

Tone.start();




const drums = new Tone.Player({
  url: drumsUrl,
}).toDestination();
const piano = new Tone.Player({
  url: pianoUrl,
}).toDestination();

export function playDrums() {
  Tone.loaded().then(() => {
    drums.start();
  });
}
export function playPiano() {
  Tone.loaded().then(() => {
    piano.start();
  });
}