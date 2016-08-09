<template>
  <div id="app">

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

  </div>
</template>

<script>
import ComponentMenu from './component-menu.vue';

export default {
  data () {
    return {
      links: [
        { name: 'Home', link: '/home' },
        { name: 'Blog', link: '/blog' },
        { name: 'Github', link: '/github'},
        { name: 'Contact', link: '/contact'},
        { name: 'About', link: '/about'}]
    }
  },
  components: { ComponentMenu }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content {
  width: 100%;
  height: 100%;
  padding: 5rem;
}

.content > h1 {
  color: #777;
  margin-bottom: 5px;
}

.content > a {
  text-decoration: none;
}
.content > a:hover {
  text-decoration: underline;
}
</style>
