<template>
  <div class="w-28 h-28 m-1 flex items-center justify-center  pause-gradient ">
     <div class="flex text-center flex-col ">
      <div class="font-display text-xl text-viWhite">{{ text }}</div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Rectangle',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.pause-gradient {
  background-image: radial-gradient(
    farthest-corner at 50% 50%,
    #AF6047 20%,
    #7F4634 50%
  );
  cursor: pointer;
}
</style>