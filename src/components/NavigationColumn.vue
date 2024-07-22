<template>
  <div class="h-1/10  border-solid border-viwhite flex justify-between mx-auto md:mx-12">
    <div class="mt-10 flex flex-row text-viWhite">
      <router-link
        v-for="(item, index) in navItems"
        :key="index"
        :to="{ name: item.routeName }"
        class="block py-2 px-4"
        :class="{ selected: selectedIndex === index }"
        @click.native="selectedIndex = index"
      >{{ item.text }}</router-link>
    </div>

    <div class="mt-10 flex flex-row text-viWhite">
      <router-link
        v-for="(item, index) in socialItems"
        :key="index"
        :to="{ name: item.routeName }"
        class="block py-2 px-4"
        :class="{ selected: socialIndex === index }"
        @click.native="socialIndex = index"
      >{{ item.text }}</router-link>
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
        { text: 'Player', href: '#', routeName: 'player' },
        { text: 'Album', href: '#', routeName: 'album' },
        { text: 'About', href: '#', routeName: 'about' },
      ],
      socialItems: [
        { text: 'Spotify', href: '#', routeName: 'spotify' },
        { text: 'Instagram', href: '#', routeName: 'instagram' },
        { text: 'SoundCloud', href: '#', routeName: 'soundcloud' },
      ],
    }
  }
}
</script>

<style>
.selected {
  background-color: #FCFCFC;
  color: #A44A3F;
  text-shadow: 5 5 20px #FCFCFC;
}
</style>
