<template>
  <div class="h-1/10  border-solid border-viwhite flex justify-between mx-auto">
    <div class="mt-10 flex flex-row text-viWhite">
      <a
        v-for="(item, index) in navItems"
        :key="index"
        :href="item.href"
        class="block py-2 px-4"
        :class="{ selected: selectedIndex === index }"
        @click="selectedIndex = index"
      >{{ item.text }}</a>
    </div>

    <div class="mt-10 flex flex-row text-viWhite">
      <a
        v-for="(item, index) in socialItems"
        :key="index"
        :href="item.href"
        class="block py-2 px-4"
        :class="{ selected: socialIndex === index }"
        @click="socialIndex = index"
      >{{ item.text }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0,
      socialIndex: 0,
      navItems: [
        { text: 'Player', href: '#' },
        { text: 'Album', href: '#' },
        { text: 'About', href: '#' },
      ],
      socialItems: [
        { text: 'Spotify', href: '#' },
        { text: 'Instagram', href: '#' },
        { text: 'SoundCloud', href: '#' },
      ],
    }
  }
}
</script>

<style>
.selected {
  background-color: #FCFCFC;
  color: #A44A3F;
  text-shadow: 0 0 1px 02020A;
}

</style>
