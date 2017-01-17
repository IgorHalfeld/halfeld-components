<<<<<<< HEAD
Vue Component Menu
==================

> Simple, response and beautiful Vue menu component

[DEMO](https://halfeld.github.io/vue-component-menu/)

Install
-------

```bash
npm install vue-component-menu --save-dev
```

Usage
-----

### Template tag

```html
<template>
  <div id="app">

    <!-- You need create `el:wapper` to open and close menu -->
    <div class="wapper" v-el:wapper>

      <!-- Container of header and menu -->
      <div class="canvas">

        <!-- Component Menu -->
        <component-menu
            label="MENU"
            color-primary="tomato"
            color-secondary="#fff"
            color-shadow="#ff3c1a"
            :items="links"></component-menu>

        <!-- Your Header -->
        <header class="content">
          <h1>Vue menu component</h1>
          <p>This is a test!</p>
        </header>

      </div>
    </div>

  </div>
</template>
```

### Script tag

```javascript
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
```

=======
# halfeld-components

> Some Vue.js components
>>>>>>> new-version

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
<<<<<<< HEAD
=======

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
>>>>>>> new-version
