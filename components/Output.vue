<template>
  <div class="appOutput">
    <code>
      {{ allCorners > 0 ? 'border-radius: ' + allCorners + 'px;' : '' }}
    </code>
    <button type="button" class="btnDefault">Copy to clipboard</button>
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