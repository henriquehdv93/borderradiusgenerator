<template>
  <div class="appPreview">
    <div class="appPreview--box" :style="{ borderRadius: allCorners + 'px' }">
      Preview
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data: () => ({
  }),
  computed: {
  ...mapState({
    allCorners: state => state.allCorners,
    topLeft: state => state.topLeft,
    topRight: state => state.topRight,
    bottomLeft: state => state.bottomLeft,
    bottomRight: state => state.bottomRight,
  })
},
}
</script>