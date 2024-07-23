

<template>
  
  <div class="bg-vi h-screen w-screen">
    <NavigationColumn />
    <h1>Player Page</h1>
    <div class="h-screen bg-cover bg-center" :style="{ backgroundImage: `url(${stemplayer})` }">
    </div>
  </div>
</template>

<script>
import NavigationColumn from '@/components/NavigationColumn.vue'
import stemplayer from '@/assets/stemplayer.png';

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