<template>
  <div class="w-120 h-120 bg-yellow-400 flex items-center justify-center">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Rectangle120',
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