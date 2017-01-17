<template>
  <div id="app">
    <HalfeldMenu :items="links" shadow-color="#333">
      <HalfeldCard
        title-big-word="Luíz"
        title-small-word="Igor"
        overlay-color="tomato"
        image-src="http://igorluiz.me/assets/img/halfeld.jpg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </HalfeldCard>
    </HalfeldMenu>
  </div>
</template>

<script>
import { HalfeldMenu, HalfeldCard } from './index'

export default {
  name: 'App',
  components: { HalfeldMenu, HalfeldCard },
  data () {
    return {
      links: [
        { name: 'Home', link: '/home' },
        { name: 'Blog', link: '/blog' },
        { name: 'Github', link: '/github'},
        { name: 'Contact', link: '/contact'},
        { name: 'About', link: '/about'}]
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


</style>
