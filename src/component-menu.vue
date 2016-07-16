<template>
  <div class="menu" :style="{ backgroundColor: colorPrimary, boxShadow: 'inset -0.5rem 0rem 1rem ' + colorShadow}">

      <nav class="nav">
        <h2 :style="{ color: colorSecondary }">{{label}}</h2>
        <ul>
          <a v-for="item in items" href="{{item.link}}" :style="{ color: colorSecondary }">
            <li @mouseover="change(colorPrimary, colorSecondary, $event)" @mouseout="changeBack(colorPrimary, colorSecondary, $event)">{{item.name}}</li>
          </a>
        </ul>
      </nav>
      <svg class="toggle-menu" @click="toggle()" viewBox="0 0 100 125">
        <g>
          <path class="rotate" :class="{ 'rotateDown': isRotateDown }" fill="#000000" d="M15.7,31.7h69c0.6,0,1-0.4,1-1s-0.4-1-1-1h-69c-0.6,0-1,0.4-1,1S15.2,31.7,15.7,31.7z"/>
          <path  :class="{ 'fade': opacity }" fill="#000000" d="M84.8,49.1h-69c-0.6,0-1,0.4-1,1s0.4,1,1,1h69c0.6,0,1-0.4,1-1S85.3,49.1,84.8,49.1z"/>
          <path class="rotate" :class="{ 'rotateUp': isRotateUp }" fill="#000000" d="M84.8,68.5h-69c-0.6,0-1,0.4-1,1s0.4,1,1,1h69c0.6,0,1-0.4,1-1S85.3,68.5,84.8,68.5z"/>
        </g>
      </svg>

  </div>
</template>

<script>
export default {
  props: {
    colorPrimary: {
      type: String,
      default: '#444'
    },
    colorSecondary: {
      type: String,
      default: '#c3c3c3'
    },
    colorShadow: {
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
  data () {
    return {
      isRotateDown: '',
      isRotateUp: '',
      opacity: ''
    }
  },
  methods: {
    toggle () {
      this.$parent.$els.wapper.classList.toggle('show');
      if(!this.isRotateDown) {
        this.isRotateDown = true;
        this.isRotateUp = true;
        this.opacity = true;
      } else {
        this.isRotateDown = false;
        this.isRotateUp = false;
        this.opacity = false;

      }
    },
    change(colorPrimary, colorSecondary, {target}) {
      target.style.color = colorPrimary;
      target.style.backgroundColor = colorSecondary;
    },
    changeBack(colorPrimary, colorSecondary, {target}) {
      target.style.color = colorSecondary;
      target.style.backgroundColor = colorPrimary;
    }
  },
}
</script>

<style lang="sass" >

// Class to add
.wapper.show .canvas {
  transform: translate3d(16rem,0,0);
}

// Menu effects
.rotate {
  transition: .3s ease all;
  transform-origin: 0% 0%;
}
.rotateDown {
  transform: rotate(33deg);
}
.rotateUp {
  transform: rotate(-33deg);
}
.fade {
  opacity: 0;
}

// Wapper that will do the translateX
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

// Menu
.menu {
  position: absolute;
  width: 16rem;
  height: 100%;
  transform: translate3d(-16rem,0,0);

  // Button
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
