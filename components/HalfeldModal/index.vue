<template>
  <div class="modal-backdrop">
    <div class="modal">
      <slot name="header">
      </slot>

      <slot name="body">
      </slot>

      <slot name="footer">
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HalfeldModal'
}
</script>
