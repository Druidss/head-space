<script>
import NavigationColumn from '@/components/NavigationColumn.vue'
import logo from '@/assets/images/logo.png';
import group from '@/assets/images/group.png';

import { useEffectStore } from '../stores/effectStore';
import { ref } from 'vue';
import  { addEffects } from "../tone";


//const valueVolume = ref();

//const volumeValue = computed(() => effectStore.pipeLine[0].value);
//return { valueVolume }

export default {
  components: {
    NavigationColumn
  },
  methods: {
    updateEffect() {
      addEffects();
    }
  },
  data() {
    return {
      logo: logo,
      group: group,
    }
  },
  setup() {
    const effectStore = useEffectStore();
    const valueVolume = ref(10);

    const updateStore = (effectString,newSliderValue) => {
      valueVolume.value = newSliderValue;
      //console.log("Updating store!");
      //console.log(effectString);
      //console.log(valueVolume.value);
      effectStore.setValue(valueVolume.value,effectString);
      console.log("DEBUG-updateStore(): VolumeValue in Pinia" + effectStore.pipeLine[1].value);
      applyEffects();
    };

    const applyEffects = () => {
        addEffects();
    };

    return { valueVolume, updateStore, applyEffects };
  }

  
  //const valueVolume = ref(0);
  //const valueReverb = ref(0);
  //const valueDelay = ref(0);
  //const valueFliter = ref(0);

</script>

<template>
  <div class="flex w-screen h-screen flex-col  bg-texture bg-cover bg-center">
      <NavigationColumn/>
      <div class="flex-1">
      <div class="text-center flex flex-col justify-center my-auto">
        <div class="bg-cover bg-center h-2/12 w-2/12 mx-auto mt-24 "><img  :src="logo" alt=""></div>
        <p class="font-display text-4xl w-6/12 mx-auto text-vi uppercase font-semibold">an Album Concept <br>
          by designer and beatmaker <br> alexander sente aka <br>
          john da lemon.
        </p>
         <router-link :to="{ name: 'mixer' }">
            <button 
            class="text-sm text-vi font-medium font-display linear px-2 rounded-full border border-vi cursor-pointer"
            >dive in & explore</button>
         </router-link>
        </div>

        </div>
        </div>

  </div>

</template>


<style>
  .linear{
    background: linear-gradient(90deg, #F9E0A0 0%, #FFD66E 100%);
  }
  .link:hover {
  background-color: #F9E0A0;
  box-shadow: 5px 5px 0px #7F4634;
  font-weight: 700;
  transition: box-shadow 0.3s ease, color 0.3s ease, background-color 0.3s ease;
}
</style>