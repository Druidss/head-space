<template>

  <div class=" h-12 m-1 flex items-center justify-center ">
     <div class="flex text-center flex-col ">
      <div class="font-display text-vi text-xl "><span class="mx-2">{{ text }}:</span> {{ number }} </div>
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