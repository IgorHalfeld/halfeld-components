<template>
  <div class="wapper" ref="wapper">

    <div class="canvas">
      <div
        class="menu"
        :style="{ backgroundColor: primaryColor, boxShadow: 'inset -0.5rem 0rem 1rem ' + shadowColor }">

          <!-- Menu list -->
          <nav class="nav">
            <h2 :style="{ color: secondaryColor }">{{ label }}</h2>
            <ul>
              <a v-for="item in items" :href="item.link" :style="{ color: secondaryColor }">
                <li
                  @mouseover="change(primaryColor, secondaryColor, $event)"
                  @mouseout="changeBack(secondaryColor, $event)">{{ item.name }}</li>
              </a>
            </ul>
          </nav>

          <!-- Menu icon -->
          <svg class="toggle-menu" @click="toggle()" viewBox="0 0 100 125">
            <g>
              <path fill="#000000" d="M15.7,31.7h69c0.6,0,1-0.4,1-1s-0.4-1-1-1h-69c-0.6,0-1,0.4-1,1S15.2,31.7,15.7,31.7z"/>
              <path fill="#000000" d="M84.8,49.1h-69c-0.6,0-1,0.4-1,1s0.4,1,1,1h69c0.6,0,1-0.4,1-1S85.3,49.1,84.8,49.1z"/>
              <path fill="#000000" d="M84.8,68.5h-69c-0.6,0-1,0.4-1,1s0.4,1,1,1h69c0.6,0,1-0.4,1-1S85.3,68.5,84.8,68.5z"/>
            </g>
          </svg>

      </div>

      <!-- Custom header -->
      <header class="content">
        <slot></slot>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    primaryColor: {
      type: String,
      default: '#444'
    },
    secondaryColor: {
      type: String,
      default: '#c3c3c3'
    },
    shadowColor: {
      type: String,
      default: '#444'
    },
    label: {
      type: String,
      default: 'MENU'
    },
    items: {
      type: Array,
      default() {
        return [{ name: 'Item 1', link: '/item'}];
      }
    }
  },
  name: 'HalfeldMenu',
  data () {
    return {
      isRotateDown: '',
      isRotateUp: '',
      opacity: ''
    }
  },
  methods: {
    toggle () {
      this.$refs.wapper.classList.toggle('show');
    },
    change (primaryColor, secondaryColor, { target }) {
      target.style.color = primaryColor;
      target.style.backgroundColor = secondaryColor;
    },
    changeBack (secondaryColor, { target }) {
      target.style.color = secondaryColor;
      target.style.backgroundColor = 'transparent';
    }
  },
}
</script>

<style lang="scss">
.content {
  width: 100%;
  height: 100%;
  padding: 5rem;
}

.wapper.show .canvas {
  transform: translate3d(16rem, 0, 0);
}

.fade {
  opacity: 0;
}

.wapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;

  > .canvas {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateX(0);
    transition: .3s ease all;
    backface-visibility: hidden;
  }
}

.menu {
  position: absolute;
  width: 16rem;
  height: 100%;
  transform: translate3d(-16rem, 0, 0);

  > .toggle-menu {
    position: absolute;
    top: 0.8rem;
    left: 16.5rem;
    width: 4rem;
    stroke: #c3c3c3;
    cursor: pointer;
  }

  > .nav {

    > h2 {
      padding: 2rem;
      color: #c3c3c3;
      text-align: center;
    }

    > ul {
      list-style: none;
      padding: 0;

      > a {
        color: #c3c3c3;
        text-decoration: none;

        > li {
          padding: 1.5rem 1.5rem 1.5rem 1.5rem;
          color: inherit;
          transition: .1s linear all;
          position: relative;
          font-size: 1.1rem;
        }
      }
    }

  }
}
</style>
