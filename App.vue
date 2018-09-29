<template>
  <div id="app">
    <HalfeldLoading v-if="isLoading" time=".6s"/>
    <HalfeldMenu :items="links" shadow-color="#333">
      <HalfeldCard
        title-big-word="Luíz"
        title-small-word="Igor"
        overlay-color="tomato"
        image-src="https://avatars.githubusercontent.com/u/9022134?v=3%22,%20%22gravatar_id%22:%20%22%22,">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button @click="toggleLoading" class="loadingBtn">Toggle loading</button>
      </HalfeldCard>

    </HalfeldMenu>
  </div>
</template>

<script>
import HalfeldMenu from './components/HalfeldMenu/index.vue'
import HalfeldCard from './components/HalfeldCard/index.vue'
import HalfeldLoading from './components/HalfeldLoading/index.vue'

export default {
  name: 'App',
  components: {
    HalfeldMenu,
    HalfeldCard,
    HalfeldLoading
  },
  data: () => ({
    isLoading: false,
    links: [
      { name: 'Home', link: '/home' },
      { name: 'Blog', link: '/blog' },
      { name: 'Github', link: '/github'},
      { name: 'Contact', link: '/contact'},
      { name: 'About', link: '/about'}
    ]
  }),
  methods: {
    toggleLoading () {
      this.isLoading = true;
      setTimeout(() => this.isLoading = false, 1000)
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
.loadingBtn {
  border: none;
  padding: 10px 15px;
  background-color: #4D4972;
  color: #fff;
  font-size: 20px;
  border-radius: 8px;
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
