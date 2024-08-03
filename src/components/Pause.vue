<template>
  <div 
    class="w-28 h-28 m-1 flex items-center justify-center pause-gradient " 
    @click="start"
  >
     <div class="flex text-center flex-col ">
      <div class="font-display text-xl text-viWhite">{{ text }}</div>
     </div>
  </div>
</template>

<script>
import { startTransport } from '../tone';   
export default {
  name: 'Rectangle',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    start() {
      startTransport();
    }
  },
};
</script>

<style scoped>
.pause-gradient {
  cursor: pointer;
  background: radial-gradient(#AF6047 30%, #7F4634);
}
</style>