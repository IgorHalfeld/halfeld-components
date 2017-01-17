<template>
  <div class="card">
    <header class="card-header">
      <span class="tooltip"></span>
      <div class="overlay" :style="{ backgroundColor: overlayColor }"></div>
      <img :alt="altImageTag" class="card-header-image" :src="imageSrc" />
      <h2 class="title">
        <small class="title-small">{{ titleSmallWord }},</small>
        {{ titleBigWord }}
      </h2>
    </header>

    <article class="card-article">
      <slot></slot>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    titleBigWord: {
      type: String,
      default: 'Luíz'
    },
    titleSmallWord: {
      type: String,
      default: 'Igor'
    },
    overlayColor: {
      type: String,
      default: 'purple'
    },
    imageSrc: {
      type: String,
      default: 'http://igorluiz.me/assets/img/halfeld.jpg'
    }
  },
  name: 'HalfeldCard',
  computed: {
    altImageTag () {
      return `${this.titleSmallWord} ${this.titleBigWord}`
    }
  }
}
</script>

<style lang="scss">
.card {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 300px;
  max-width: 300px;
  height: auto;
  background-color: #f4f4f4;
  transition: all .3s ease;
}

.card-header {
  position: relative;
  width: 100%;
  height: 300px;

  > .overlay {
    position: absolute;
    width: 100%;
    height: 300px;
    opacity: 0.5;
    z-index: 1;
  }

  > .tooltip {
    position: absolute;
    content: '';
    width: 0px;
    height: 0px;
    border: 18px solid transparent;
    border-bottom: 18px solid #f4f4f4;
    right: 10px;
    bottom: 0px;
    z-index: 2;
  }

  > .card-header-image {
    position: absolute;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 300px;
    z-index: 0;
  }

  > .title {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: absolute;
    z-index: 2;
    font-size: 60px;
    color: #f4f4f4;
    bottom: 0px;
    padding-left: 10px;
    padding-bottom: 10px;
    text-shadow: 0px 0px 1px #444;

    .title-small {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      position: absolute;
      z-index: 2;
      font-size: 28px;
      color: #f4f4f4;
      bottom: 60px;
      padding-left: 2px;
      padding-bottom: 10px;
      text-shadow: 0px 0px 1px #444;
    }
  }
}

.card-article {
  margin: 0;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: auto;
  padding: 10px;
}
</style>
