<template>
  <div class="appOutput">
    <code v-if="isMultipleValue == true" class="appOutputCode">
      {{ allCorners > 0 ? 'border-radius: ' + allCorners + 'px;' : '' }}
    </code>
    <code v-else class="appOutputCode">
      {{ outputMultiple == true ? 'border-radius: ' + topLeft + 'px ' + topRight + 'px ' + bottomRight + 'px ' + bottomLeft + 'px;' : '' }}
    </code>
    <button type="button" class="btnDefault" @click="copyToClipboard($event)">{{ btnCopyName }}</button>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data: () => ({
    isCopied: false,
  }),
  computed: {
    btnCopyName() {
      return this.isCopied ? 'Copiado!' : 'Copiar para a área de transferência';
    },
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
  methods: {
    copyToClipboard: function() {
      let property = document.querySelector('.appOutputCode').innerText;
      navigator.clipboard.writeText(property);
      if (property == '') {
        console.error();
      }
      else {
        this.isCopied = true;
        event.target.classList.add('copied');
        this.timeOut();
      }
    },
    timeOut: function() {
      var vm = this;
      setTimeout(function(){
        vm.isCopied = false;
        document.querySelector('.btnDefault.copied').classList.remove('copied');
      }, 5000); 
    }
  }
}
</script>