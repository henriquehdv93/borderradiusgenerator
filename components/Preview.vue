<template>
  <div class="appPreview">
    <div class="appPreview--box" :style="isMultipleValue == true ? { borderRadius: allCorners + 'px' } : { borderRadius: topLeft + 'px ' + topRight + 'px ' + bottomRight + 'px ' + bottomLeft + 'px'}">
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
      isMultipleValue: state => state.isMultipleValue,
    })
  },
}
</script>