<template>
  <div class="h-1/10 w-9/12 border-b-2 border-solid border-vi flex justify-between mx-auto ">
    <div class="my-4 flex flex-row text-viWhite cursor-pointer ">
      <router-link
        v-for="(item, index) in navItems"
        :key="index"
        :to="{ name: item.routeName }"
        class="block py-2 px-4 m-1 router-nav text-vi font-display link "
        :class="{ isselected: isSelected(item.routeName) }"
        @click.native="selectedIndex = index"
      >{{ item.text }}</router-link>
    </div>

         <router-link :to="{ name: 'home' }">
            <div clas="h-1/10 bg-cover bg-center mx-auto">
              <img :src="logo" class="h-16 w-16 ml-24"> </img>
            </div>
         </router-link>

    <div class="my-4 flex flex-row  cursor-pointer">
      <a
        v-for="(item, index) in socialItems"
        :key="index"
        :href="item.href"
        class="block py-2 px-4 m-1 text-vi font-display  link"
        @click.native="socialIndex = index"
      >{{ item.text }}</a>
    </div>
  </div>
  <RouterView />
</template>

<script>
import logo from '@/assets/images/logo.png';
export default {
  data() {
    return {
      logo: logo,
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
.isselected {
  background-color: #F9E0A0;
  box-shadow: 5px 5px 0px #7F4634;
  text-transform: capitalize;
  border-radius: 999px; 
  font-weight: 600 ;
}
.link:hover {
  background-color: #F9E0A0;
  box-shadow: 5px 5px 0px #7F4634;
  transition: box-shadow 0.3s ease, color 0.3s ease, background-color 0.3s ease;
  border-radius: 999px; 
}

</style>
