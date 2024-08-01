<template>
  <div class="h-1/10 w-9/12 border-b-2 border-solid border-vi flex justify-between mx-auto ">
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
        class="block py-2 px-4 m-1 text-vi font-display hover:font-semibold link"
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
        { text: 'mixer', href: '#', routeName: 'mixer' },
        { text: 'album', href: '#', routeName: 'album' },
        { text: 'about', href: '#', routeName: 'about' },
      ],
      socialItems: [
        { text: 'spotify', href: 'https://open.spotify.com/artist/4mZMlXKDeS8tEuMLn2SHRE?si=XeoevquKTJCdQdUPs4RBWg', routeName: 'spotify' },
        { text: 'instagram', href: 'https://www.instagram.com/johndalemon/?hl=de', routeName: 'instagram' },
        { text: 'soundcloud', href: 'https://on.soundcloud.com/D1oL5Q5ba58MuPvD8', routeName: 'soundcloud' },
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
  background-color: #F9E0A0;
  font-weight: 700;
  box-shadow: 5px 5px 0px #7F4634;
  text-transform: uppercase;
}
.link:hover {
  background-color: #F9E0A0;
  box-shadow: 5px 5px 0px #7F4634;
  font-weight: 700;
  transition: box-shadow 0.3s ease, color 0.3s ease, background-color 0.3s ease;
}

</style>
