<template>

  <div class="w-28 h-18 m-1 flex items-center justify-center ">
     <div class="flex text-center flex-col ">
      <div class="font-display text-vi text-xl ">{{ text }}</div>
      <div class="font-display  text-vi tex "> {{ number }} </div>
     </div>
  </div>
</template>

<script>

//import { startTransport } from '../mixers/tone';
export default {
  name: 'Rectangle',
  props: {
    text: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },
  methods: {
    start() {
      //startTransport();
    }
  }
};
</script>

<style scoped>

</style>