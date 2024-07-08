<template>
  <div class="w-32 h-32 bg-yellow-400 flex items-center justify-center radial-gradient">
     <div>
      {{ text }}
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
.radial-gradient {
  background-image: radial-gradient(
    farthest-corner at 50% 50%,
    #9C3B91 20%,
    #FFFFFF 50%
  );
}
</style>