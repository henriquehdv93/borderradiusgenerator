<template>
  <div class="appOutput">
    <code v-html="outputCode">
    </code>
    <button type="button" class="btnDefault">Copy to clipboard</button>
  </div>
</template>
<script>
export default {
  data: () => ({
    outputCode: 'bla'
  }),
  computed: {
    // outputCode() {
    //   return this.$store.getters['getAllCorners'];
    // },
  }
}
</script>