<template>
  <div class="w-28 h-28 m-1 flex items-center justify-center ">
     <div class="flex text-center flex-col">
      <div class="font-goudy text-vi ">{{ text }}</div><br>
      <div class="font-display font-semibold  text-vi "> {{ number }} </div>
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
    number: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>