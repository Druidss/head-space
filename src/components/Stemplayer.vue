<template>
  <div class="bg-vi flex flex-col items-center justify-center w-screen h-screen p-4">
    <div class="flex justify-between items-center w-full mb-4">
      <span class="text-white text-xl">01 / 09</span>
      <button class="bg-red-500 text-white px-4 py-2 rounded">Auto Play</button>
    </div>
    <div class="flex flex-col items-center justify-center w-full">
      <h1 class="text-5xl text-white mb-4">"GINGER"</h1>
      <div class="flex items-center space-x-4 mb-4">
        {/* <button @click="togglePlayPause">
          <img :src="isPlaying ? pauseIcon : playIcon" alt="Play/Pause" class="w-12 h-12" />
        </button> */}
        <span class="text-white">Key<br />D min</span>
        <span class="text-white">Tempo<br />91 Bpm</span>
      </div>
      <div class="relative w-[245rem] h-[85rem] bg-black">
        <canvas ref="waveCanvas" class="absolute inset-0"></canvas>
      </div>
    </div>
    <div class="flex justify-between items-center w-full mt-4">
      <button @click="previousTrack" class="text-white text-xl" v-html="'&lt;'"></button>
      <button @click="nextTrack" class="text-white text-xl"></button>
    </div>
  </div>  
</template>

<script >
import { ref, onMounted } from 'vue';
import p5 from 'p5';

const isPlaying = ref(false);
const playIcon = 'path/to/play-icon.png'; // Replace with the path to your play icon
const pauseIcon = 'path/to/pause-icon.png'; // Replace with the path to your pause icon

const togglePlayPause = () => {
  isPlaying.value = !isPlaying.value;
};

const previousTrack = () => {
  // Logic to go to the previous track
};

const nextTrack = () => {
  // Logic to go to the next track
};

onMounted(() => {
  const sketch = (p) => {
    p.setup = () => {
      const canvas = p.createCanvas(980, 340);
      canvas.parent('waveCanvas');
      p.stroke(255);
      p.noFill();
    };

    p.draw = () => {
      p.background(0);
      p.beginShape();
      for (let x = 0; x < p.width; x++) {
        const y = p.noise(x * 0.01) * p.height;
        p.vertex(x, y);
      }
      p.endShape();
    };
  };

  new p5(sketch, document.querySelector('#waveCanvas'));
});
</script>

<style>
.bg-vi {
  background-color: #2c3e50; /* Customize this color as needed */
}
</style>
