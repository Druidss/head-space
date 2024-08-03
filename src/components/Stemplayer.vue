<template>
   <!-- stemplayer -->
  <div class=" w-9/12 mx-auto">
  <div class="flex flex-col border-2 border-vi px-12 py-4">
    <div class="flex justify-left item-center flex-col items-center mb-4">
      
      <div class="flex w-full justify-center mx-8 ">
        <div class="flex-1 text-vi font-display font-bold text-3xl mb-2 justify-center text-center items-center pt-12">"GINGER"</div>
 

        <div class="flex  flex-1 justify-center items-center">
          <button @click="togglePlayPause" class="text-white text-2xl mx-2">
            <span v-if="isPlaying">❚❚</span>
            <span v-else>▶</span>
          </button>
        </div>

        <div class="flex  flex-1 justify-between text-white text-lg mt-4">
          <Rectangle class=''text="Key" number="Emin" />
          <Rectangle class=''text="Key" number="Emin" />
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <video ref="video" :src="videoSrc" class="w-6/12 h-4/12 border border-vi " autoplay></video>
    </div>
    <div class="flex justify-center text-white text-4xl text-vi font-display mt-4"> <span class="font-bold">01</span> / 09
    </div>
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
        this.$forceUpdate();
      } else {
        video.pause();
        this.isPlaying = false;
        this.$forceUpdate();
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
