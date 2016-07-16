<template>
  <div id="app">

    <div class="wapper" v-el:wapper>
      <div class="canvas">
        <component-menu
          label="MENU"
          color-primary="tomato"
          color-secondary="#fff"
          color-shadow="#ff3c1a"
          :items="links"></component-menu>
        <header class="content">
          <h1>Vue menu component</h1>
          <p>This is a test!</p>
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

<style lang="sass">
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
</style>
