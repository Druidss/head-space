<template >
   <!-- stemplayer -->
  <div class="mb-12">
  <div class="flex justify-center w-screen ">
    <div class=" giner text-3xl text-vi bg-viWhite font-display  text-center mt-8 py-1 px-4 font-bold border-2 border-vi cursor-pointer">Auto Play</div>
  </div>

  <div class="w-9/12 mx-auto">
        <!-- text -->
        <div class="flex justify-between items-center ">
          <div class="text-4xl font-display font-bold uppercase text-viSelect text-outline ">john  da  lemon</div>
          <div class="text-4xl font-anisette text-viSelect text-outline">thE sOul sanctuary</div>
        </div>

        <!-- stem -->
        <div>
        <div class="flex flex-col border-2 border-vi px-12 pb-4">
          <div class="flex justify-left item-center flex-col items-center mb-4">
            
            <div class="flex w-full justify-center mx-8 ">
              <div class="flex-1 text-vi font-display font-bold text-3xl mb-2 justify-center text-center items-center pt-12">"{{ name }}"</div>
      

              <div class="flex  flex-1 justify-center items-center">
                <button @click="togglePlayPause" class="text-vi text-2xl mx-2 p-1">
                  <span>{{ isPlaying ? '❚❚' : '▶' }}</span>
                </button>
              </div>

              <div class="flex flex-1 justify-center text-white text-lg mt-4">
                <div class="flex max-w-60 justify-center">
                <Rectangle class=''text="Key" :number="musicKey" />
                <Rectangle class=''text="Tempo" :number="tempo" />
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <video class="w-6/12 " ref="video">
              <source :src="videoSrc" type="video/mp4">
            </video>
          </div>
          <div class="flex justify-center text-white text-4xl text-vi font-display mt-4 ">       
            <span class="font-bold px-2">{{number}}</span> / 09
          </div>
        </div>
        </div>
  </div>
</div>

</template>

<script>
import Rectangle from '@/components/Rectangle.vue';
 import { vueVimeoPlayer } from 'vue-vimeo-player'
 import myVideo from '@/assets/vids/wave.mp4';

export default {
  components: {
    Rectangle,
    vueVimeoPlayer
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    musicKey: {
      type: String,
      required: true,
    },
    tempo: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isPlaying: false,
      videoSrc: myVideo
    }
  },
  mounted() {
    this.videoId = this.id;
    this.playerReady = false;
  },
  methods: {
    onReady() {
			this.playerReady = true;
      
		},
    togglePlayPause() {
      const video = this.$refs.video;
      if (!this.isPlaying) {
        video.play();
        this.isPlaying = true;
      } else {
        video.pause();
        this.isPlaying = false;
      }
    },
  }
};
</script>

<style scoped>
.text-outline {
  text-shadow: 
      -1px -1px 0 #7F4634,  
      1px -1px 0 #7F4634,
      -1px  1px 0 #7F4634,
      1px  1px 0 #7F4634;
}

</style>
