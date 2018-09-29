<template>
  <div
    class="loading">
    <div
      :style="{
        borderLeftColor: this.color,
        width: this.size,
        height: this.size,
        animationDuration: this.time
      }"
      class="loading-spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'HalfeldLoading',
  props: {
    time: { type: String, default: '1s' },
    color: { type: String, default: 'tomato' },
    size: { type: String, default: '50px' },
  }
}
</script>

<style lang="scss" scoped>
@keyframes spin {
  to { transform: rotate(360deg); }
}
.loading {
  position: absolute;
  z-index: 9999;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;

  &-spinner {
    border: 8px solid rgb(255, 255, 255);
    border-radius: 50%;
    animation: spin linear infinite;
  }
}
</style>
