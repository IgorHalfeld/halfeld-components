<p align="center">
  <h3 align="center">Halfeld Components</h3>
  <p align="center">Vue.js components.</p>

  <p align="center">
    <a href="http://standardjs.com/">
      <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg">
    </a>
    <br />
    <br />
    <a href="https://halfeld.github.io/halfeld-components/">DEMO</a>
  </p>
</p>

---

### Install

```bash
npm install halfeld-components --save-dev
```

### Usage

```html
<template>
  <div id="app">

    <!-- Menu component -->
    <HalfeldMenu
      :items="links"
      primary-color="#444"
      secondary-color="#c3c3c3"
      label="MENU"
      shadow-color="#333">

      <!-- Your header content -->
      <h1>Halfeld Components</h1>
      <a href="https://github.com/Halfeld/halfeld-components">View o Github</a>
    </HalfeldMenu>

    <!-- Card component -->
    <HalfeldCard
      title-big-word="Luíz"
      title-small-word="Igor"
      overlay-color="tomato"
      image-src="http://igorluiz.me/assets/img/halfeld.jpg">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </HalfeldCard>
  </div>
</template>
```

```javascript
import Vue from 'vue'
import HalfeldComponents from 'halfeld-components'

Vue.use(HalfeldComponents)
```

### TO-DO

+ [x] Loading
+ [ ] Slider
+ [ ] Modal

### Version 0.1.*

```bash
npm install vue-component-menu --save-dev
```

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
vue serve

# build for production with minification
vue build
```
