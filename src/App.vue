<script>
import NavigationColumn from './components/NavigationColumn.vue'
import Rectangle from './components/Rectangle.vue'
// import Slider from "vue3-slider"

export default {
  components: {
    NavigationColumn,
    Rectangle,
  },
  data() {
    return {
      value: 20
    }
  }
}
</script>

<template>
  <div class="flex w-screen bg-orange-500">

    <NavigationColumn />
    
    <div class="w-9/10 w-screen border-l-2 border-gray-500">

      <h1 class="text-8xl text-center my-10">The Head Space</h1>
      <button class="absolute bottom-8 right-4 rounded-full m-4 p-2  text-white border border-vi ">Download Stems</button>

      <div class="flex items-center justify-center border border-vi m-4">
        <div class="w-30 bg-gray-600">
          <h1 class=" text-3xl text-white bg-bgGray text-center p-2">"Ginger"</h1>
          <div>
            <Rectangle class="p-4 bg-vi" text="Pause" />
            <Rectangle class='border border-vi'text="Key" number="Emin" />
            <Rectangle class='border border-vi' text="Tempo" number="90Bpm" />
          </div>
        </div>

        <div class="w-70 flex">
          <div class="flex flex-row">
          <!-- <h1 class="text-3xl">Effect Board</h1> -->
          <div class="h-1/2 bg-gray-800 m-4">
              <Rectangle text="Volume" />
              <div class="m-4w-120 h-120 bg-yellow-400 rounded-full flex items-center justify-center">
              <!-- <Slider v-model="data" color="#FB278D" track-color="#FEFEFE" /> -->
              </div>
              <Rectangle text="Reverb" />
              <div class="w-120 h-120 bg-yellow-400 rounded-full flex items-center justify-center">
                <p>60%</p>
              </div>
              <Rectangle text="Reverb" />
              <div class="w-120 h-120 bg-yellow-400 rounded-full flex items-center justify-center">
                <p>60%</p>
              </div>
            </div>
          </div>

          <div class="h-1/2 bg-gray-800 m-4">
            <Rectangle text="Delay" />
            <div class="w-120 h-120 bg-yellow-400 rounded-full flex items-center justify-center">
              <p>40%</p>
            </div>
            <Rectangle text="Filter" />
            <div class="w-120 h-120 bg-yellow-400 rounded-full flex items-center justify-center">
              <p>20%</p>
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

<!-- <style src="@vueform/slider/themes/default.css"></style> -->
