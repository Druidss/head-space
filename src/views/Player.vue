

<template>
  <div class="bg-vi h-screen w-screen">
    <NavigationColumn />
    <div class="bg-stem bg-contain bg-center  mx-auto my-6 h-5/6 w-5/6"
    ></div>
  </div>
</template>

<script>
import NavigationColumn from '@/components/NavigationColumn.vue'

export default {
  name: 'Player',
  components: {
    NavigationColumn,
  },
}
</script>


<style scoped>
/* Add your player component styles here */
</style>