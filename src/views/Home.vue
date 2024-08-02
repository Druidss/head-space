<script>
import NavigationColumn from '@/components/NavigationColumn.vue'
import logo from '@/assets/images/logo.png';
import group from '@/assets/images/group.png';

export default {
  components: {
    NavigationColumn
  },
  data() {
    return {
      logo: logo,
      group: group,
    }
  }
}
</script>

<template>
  <div class="flex w-screen h-screen flex-col  bg-texture bg-cover bg-center">
      <NavigationColumn/>
      <div class="flex-1">
      <div class="text-center flex flex-col justify-center my-auto">
        <div class="bg-cover bg-center h-2/12 w-2/12 mx-auto mt-24 "><img  :src="logo" alt=""></div>
        <p class="text-4xl w-6/12 mx-auto text-vi uppercase font-bold">an Album Concept <br>
          by designer and beatmaker <br> alexander sente aka <br>
          john da lemon.
        </p>
         <router-link :to="{ name: 'mixer' }">
            <button 
            class="text-sm text-vi font-medium font-display linear px-2 rounded-full border border-vi cursor-pointer"
            >dive in & explore</button>
         </router-link>
        </div>
        <div class="absolute bottom-0 w-9/12 mx-auto  border-t-2 border-vi flex justify-center items-center  inset-x-0 mt-6 ">
            <div class="w-72 h-12 mt-2 mb-8 flex items-center justify-center ">
              <img :src="group" alt=""></div>
        </div>
        </div>

  </div>

</template>


<style>
  .linear{
    background: linear-gradient(90deg, #F9E0A0 0%, #FFD66E 100%);
  }
</style>