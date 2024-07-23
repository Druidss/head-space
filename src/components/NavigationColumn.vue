<template>
  <div class="h-1/10  border-solid border-viwhite flex justify-between mx-6 md:mx-4 ">
    <div class="mt-10 flex flex-row text-viWhite cursor-pointer ">
      <router-link
        v-for="(item, index) in navItems"
        :key="index"
        :to="{ name: item.routeName }"
        class="block py-2 px-4 m-1 router-nav"
        :class="{ selected: selectedIndex === index }"
        @click.native="selectedIndex = index"
      >{{ item.text }}</router-link>
    </div>

    <div class="mt-10 flex flex-row text-viWhite cursor-pointer">
      <a
        v-for="(item, index) in socialItems"
        :key="index"
        :href="item.href"
        class="block py-2 px-4 m-1"
        :class="{ selected: socialIndex === index }"
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
        { text: 'Player', href: '#', routeName: 'player' },
        { text: 'Album', href: '#', routeName: 'album' },
        { text: 'About', href: '#', routeName: 'about' },
      ],
      socialItems: [
        { text: 'Spotify', href: 'https://open.spotify.com/artist/4mZMlXKDeS8tEuMLn2SHRE?si=XeoevquKTJCdQdUPs4RBWg', routeName: 'spotify' },
        { text: 'Instagram', href: 'https://www.instagram.com/johndalemon/?hl=de', routeName: 'instagram' },
        { text: 'SoundCloud', href: 'https://on.soundcloud.com/D1oL5Q5ba58MuPvD8', routeName: 'soundcloud' },
      ],
    }
  }
}
</script>

<style>
.selected {
  background-color: #FCFCFC;
  color: #A44A3F;
  text-shadow: 20 20 10px #02020A;
  cursor: pointer;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
}
a:hover {
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.8);
  transition: box-shadow 0.3s ease, color 0.3s ease, background-color 0.3s ease;
}

.router-nav:hover {
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.8);
  transition: box-shadow 0.3s ease, color 0.3s ease, background-color 0.3s ease;
}
</style>
