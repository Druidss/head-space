<template>
   <!-- stemplayer -->
  <div class="w-12/12  mx-auto border-2 border-vi p-4">

    <div class="flex justify-left flex-col items-center mb-4">
      
      <div class="flex mx-8 ">
        <div class="text-vi font-display font-bold text-3xl mb-2">"GINGER"</div>


        <div class="flex justify-center items-center">
          <button @click="togglePlayPause" class="text-white text-2xl">
            <span v-if="isPlaying">❚❚</span>
            <span v-else>▶</span>
          </button>
        </div>

        <div class="flex justify-between text-white text-lg mt-4">
          <Rectangle class=''text="Key" number="Emin" />
          <Rectangle class=''text="Key" number="Emin" />
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <video ref="video" :src="videoSrc" class="w-4/12 h-fit border border-vi " autoplay></video>
    </div>

    <div class="flex justify-center text-white text-4xl text-vi font-display mt-4"> <span class="font-bold">01</span> / 09
    </div>
  </div>
</template>

<script>
import Rectangle from '@/components/Rectangle.vue';
export default {
  components: {
    Rectangle
  },
  data() {
    return {
      isPlaying: true,
      videoSrc: 'https://youtu.be/j5rL7Lgu4Uo?si=InP54zsj3FSNW92D', 
    };
  },
  methods: {
    togglePlayPause() {
      const video = this.$refs.video;
      if (video.paused) {
        video.play();
        this.isPlaying = true;
      } else {
        video.pause();
        this.isPlaying = false;
      }
    },
    toggleAutoplay() {
   
    },
    prevTrack() {
     
    },
    nextTrack() {
    
    }
  }
};
</script>

<style scoped>

</style>
