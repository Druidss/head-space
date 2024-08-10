8<script>
import NavigationColumn from '@/components/NavigationColumn.vue'
import Footer from '@/components/Footer.vue'
import logo from '@/assets/images/logo.png';

export default {
  components: {
    NavigationColumn,
    Footer
  },
  data() {
    return {
      logo: logo,
    }
  }
}
</script>

<template>
  <div class="flex w-screen h-screen flex-col  bg-texture bg-cover bg-center">
      <NavigationColumn/>
      <div class="flex-1">
      <div class="text-center flex flex-col justify-center my-auto">
        <div class="bg-cover bg-center h-96 w-96 mx-auto mt-12"><img  :src="logo" alt=""></div>
        <p class="font-display text-xl w-6/12 mx-auto  mb-20 text-vi">
          an album concept by designer and beatmaker <br>
           Alexander Sente aka John da Lemon.
        </p>
         <router-link :to="{ name: 'mixer' }">
            <button 
            class="text-2xl text-vi font-display linear px-4 py-1 rounded-full border-vi border-2 cursor-pointer"
            >Dive in & explore</button>
         </router-link>
        </div>
      </div>
      <Footer/>
  </div>

</template>


<style>
  .linear{
    background: linear-gradient(90deg, #F9E0A0 0%, #FFD66E 100%);
  }
  .link:hover {
  background-color: #F9E0A0;
  box-shadow: 5px 5px 0px #7F4634;
  /* font-weight: 700; */
  transition: box-shadow 0.3s ease, color 0.3s ease, background-color 0.3s ease;
}
</style>