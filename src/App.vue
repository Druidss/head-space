<script>
import NavigationColumn from './components/NavigationColumn.vue'
import Rectangle from './components/Rectangle.vue'

export default {
  components: {
    NavigationColumn,
    Rectangle
  }
}
</script>

<template>
  <div class="flex w-screen">

    <NavigationColumn />
    
    <div class="w-9/10 w-screen border-l-2 border-gray-500">
      <h1 class="text-8xl text-center my-30">The Head Space</h1>
      <button class="absolute bottom-0 right-0 rounded-full m-4 p-2 bg-gray-600 text-white">Download Stems</button>
      <div class="flex items-center justify-center">
        <div class="w-30 bg-gray-800">
          <h1 class="text-white text-center">Ginger</h1>
          <Rectangle text="Pause" />
          <Rectangle text="Key\nEmin" />
          <Rectangle text="Tempo\n90Bpm" />
        </div>
        <div class="w-70 flex">
          <div class="w-1/2 bg-gray-800 m-4">
            <Rectangle text="Volume" />
            <div class="w-120 h-120 bg-yellow-400 rounded-full flex items-center justify-center">
              <p>80%</p>
            </div>
            <Rectangle text="Reverb" />
            <div class="w-120 h-120 bg-yellow-400 rounded-full flex items-center justify-center">
              <p>60%</p>
            </div>
          </div>
          <div class="w-1/2 bg-gray-800 m-4">
            <Rectangle text="Delay" />
            <div class="w-120 h-120 bg-yellow-400 rounded-full flex items-center justify-center">
              <p>40%</p>
            </div>
            <Rectangle text="Filter" />
            <div class="w-120 h-120 bg-yellow-400 rounded-full flex items-center justify-center">
              <p>20%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


