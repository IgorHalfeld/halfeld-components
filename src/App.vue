<template>
  <div id="app">

<<<<<<< HEAD
    <div class="wapper" v-el:wapper>
      <div class="canvas">
        <component-menu
          label="MENU"
          :items="links"></component-menu>
        <header class="content">
          <h1>Vue menu component</h1>
          <a href="https://github.com/Halfeld/vue-component-menu">View o Github</a>
        </header>
      </div>
    </div>

=======
    <!-- <HalfeldMenu :items="links">
      <h1>Vue menu component</h1>
      <a href="https://github.com/Halfeld/vue-component-menu">View o Github</a>
    </HalfeldMenu> -->
    <!-- <HalfeldCard
      title-big-word="Luíz"
      title-small-word="Igor"
      overlay-color="tomato"
      image-src="http://igorluiz.me/assets/img/halfeld.jpg">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </HalfeldCard> -->
>>>>>>> new-version
  </div>
</template>

<script>
<<<<<<< HEAD
import ComponentMenu from './component-menu.vue';

export default {
=======
import { HalfeldMenu, HalfeldCard } from './index'

export default {
  name: 'App',
  components: { HalfeldMenu, HalfeldCard },
>>>>>>> new-version
  data () {
    return {
      links: [
        { name: 'Home', link: '/home' },
        { name: 'Blog', link: '/blog' },
        { name: 'Github', link: '/github'},
        { name: 'Contact', link: '/contact'},
        { name: 'About', link: '/about'}]
    }
<<<<<<< HEAD
  },
  components: { ComponentMenu }
=======
  }
>>>>>>> new-version
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

<<<<<<< HEAD
.content {
  width: 100%;
  height: 100%;
  padding: 5rem;
}

=======
>>>>>>> new-version
.content > h1 {
  color: #777;
  margin-bottom: 5px;
}
<<<<<<< HEAD

=======
>>>>>>> new-version
.content > a {
  text-decoration: none;
}
.content > a:hover {
  text-decoration: underline;
}
</style>
