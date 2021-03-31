<template>
  <div class="appOutput">
    <code v-if="isMultipleValue == true">
      {{ allCorners > 0 ? 'border-radius: ' + allCorners + 'px;' : '' }}
    </code>
    <code v-else>
      {{ outputMultiple == true ? 'border-radius: ' + topLeft + 'px ' + topRight + 'px ' + bottomRight + 'px ' + bottomLeft + 'px;' : '' }}
    </code>
    <button type="button" class="btnDefault">Copy to clipboard</button>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    outputMultiple() {
      if (this.topLeft > 0 || this.topRight > 0 || this.bottomRight > 0 || this.bottomLeft > 0 ) {
        return true;
      }
      else {
        return false
      }
    },
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