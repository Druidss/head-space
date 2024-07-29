<template>
  <div class="h-1/10  border-b-2 border-solid border-vi flex justify-between mx-56 md:mx-24 ">
    <div class="my-4 flex flex-row text-viWhite cursor-pointer ">
      <router-link
        v-for="(item, index) in navItems"
        :key="index"
        :to="{ name: item.routeName }"
        class="block py-2 px-4 m-1 router-nav text-vi font-display hover:font-semibold "
        :class="{ selected: isSelected(item.routeName) }"
        @click.native="selectedIndex = index"
      >{{ item.text }}</router-link>
    </div>

    <div class="my-4 flex flex-row  cursor-pointer">
      <a
        v-for="(item, index) in socialItems"
        :key="index"
        :href="item.href"
        class="block py-2 px-4 m-1 text-vi font-display hover:font-semibold"
        @click.native="socialIndex = index"
      >{{ item.text }}</a>
    </div>
  </div>
  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0,
      socialIndex: 0,
      navItems: [
        { text: 'MIXER', href: '#', routeName: 'home' },
        { text: 'Album', href: '#', routeName: 'album' },
        { text: 'About', href: '#', routeName: 'about' },
      ],
      socialItems: [
        { text: 'Spotify', href: 'https://open.spotify.com/artist/4mZMlXKDeS8tEuMLn2SHRE?si=XeoevquKTJCdQdUPs4RBWg', routeName: 'spotify' },
        { text: 'Instagram', href: 'https://www.instagram.com/johndalemon/?hl=de', routeName: 'instagram' },
        { text: 'SoundCloud', href: 'https://on.soundcloud.com/D1oL5Q5ba58MuPvD8', routeName: 'soundcloud' },
      ],
    }
  },
  methods: {
    isSelected(routeName) {
      return this.$route.name === routeName;
    }
  }
}
</script>

<style>
.selected {
  background-color: #FCFCFC;
  font-weight: 700;
  text-shadow: 20 20 10px #02020A;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
}
a:hover {
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.8);
  transition: box-shadow 0.3s ease, color 0.3s ease, background-color 0.3s ease;
}

</style>
