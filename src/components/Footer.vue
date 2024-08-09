<template>
  <div class="absolute bottom-0 w-9/12 mx-auto  border-t-2 border-vi  items-center  inset-x-0 mt-6 ">
    <div class='grid grid-cols-3 gap-4'> 
      <div class=" text-sm font-display text-vi mt-10"> It Will All</div>
      <div class=" h-12 mt-4 mb-3 flex justify-center">
        <img class="mx-auto inline-block " :src="group" alt=""></div>
      <div class="text-sm font-display text-vi mt-10 flex justify-end"> Be Over Soon</div>
    </div>
  </div>
</template>

<script>
import group from '@/assets/images/group.png';

export default {
  data() {
    return {
      group: group,
    }
  }
}
</script>