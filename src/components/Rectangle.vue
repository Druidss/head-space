<template>
  <div class="w-32 h-32 bg-yellow-400 flex items-center justify-center">
    
      {{ text }}

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
</style>