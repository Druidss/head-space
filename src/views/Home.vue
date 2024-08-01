<script>
import NavigationColumn from '@/components/NavigationColumn.vue'
import logo from '@/assets/images/logo.png';

export default {
  components: {
    NavigationColumn
  },
  data() {
    return {
      logo: logo,
    }
  }
}
</script>

<template>
  <div class="flex w-screen h-screen flex-col">
      <NavigationColumn/>
      <div class="text-center">
        <div class="bg-cover bg-center h-2/12 w-2/12 mx-auto"><img  :src="logo" alt=""></div>
        <p class="text-4xl w-6/12 mx-auto text-vi uppercase font-bold">an Album Concept </br>
          by designer and beatmaker alexander sente aka</br>
          john da lemon.</br>
        </p>
         <router-link :to="{ name: 'mixer' }">
            <button 
            class="text-sm text-vi font-medium font-display linear px-2 rounded-full border border-vi cursor-pointer"
            >dive in & explore</button>
         </router-link>
      </div>
  </div>

</template>


<style>
  .linear{
    background: linear-gradient(90deg, #F9E0A0 0%, #FFD66E 100%);
  }
</style>