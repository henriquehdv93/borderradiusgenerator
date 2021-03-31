<template>
  <section>
        <div class="rangeGroup">
          <label for="allCorners">All corners</label>
          <div>
            <input type="range" id="allCorners" name="allCorners" v-model="allCorners" @change="updateAllCorners">
            <input type="text" id="allCornersValue" name="allCornersValue" v-model="allCorners" @input="updateAllCorners">
          </div>
        </div>
        <div class="rangeGroup">
          <label for="topLeft">Top Left</label>
          <div>
            <input type="range" id="topLeft" name="topLeft" v-model="topLeft" @change="updateTopLeft">
            <input type="text" id="topLeftValue" name="topLeftValue" v-model="topLeft" @input="updateTopLeft">
          </div>
        </div>
        <div class="rangeGroup">
          <label for="topRight">Top Right</label>
          <div>
            <input type="range" id="topRight" name="topRight" v-model="topRight" @change="updateTopRight">
            <input type="text" id="topRightValue" name="topRightValue" v-model="topRight" @input="updateTopRight">
          </div>
        </div>
        <div class="rangeGroup">
          <label for="bottomLeft">Bottom Left</label>
          <div>
            <input type="range" id="bottomLeft" name="bottomLeft" v-model="bottomLeft" @change="updateBottomLeft">
            <input type="text" id="bottomLeftValue" name="bottomLeftValue" v-model="bottomLeft" @input="updateBottomLeft">
          </div>
        </div>
        <div class="rangeGroup">
          <label for="bottomRight">Bottom Right</label>
          <div>
            <input type="range" id="bottomRight" name="bottomRight" v-model="bottomRight" @change="updateBottomRight">
            <input type="text" id="bottomRightValue" name="bottomRightValue" v-model="bottomRight" @change="updateBottomRight">
          </div>
        </div>
      </section>
</template>
<script>
import { mapState } from 'vuex';
export default {
  // data: () => ({
  //   allCornersVal: null,
  //   topLeftVal: null,
  //   topRightVal: null,
  //   bottomLeftVal: null,
  //   bottomRightVal: null,
  // }), 
  computed: {
    allCorners: {
      get () {
        return this.$store.state.allCorners
      },
      set (value) {
        this.$store.commit('updateAllCorners', value)
      }
    },
    topLeft: {
      get () {
        return this.$store.state.topLeft
      },
      set (value) {
        this.$store.commit('updateTopLeft', value)
      }
    },
    topRight: {
      get () {
        return this.$store.state.topRight
      },
      set (value) {
        this.$store.commit('updateTopRight', value)
      }
    },
    bottomLeft: {
      get () {
        return this.$store.state.bottomLeft
      },
      set (value) {
        this.$store.commit('updateBottomLeft', value)
      }
    },
    bottomRight: {
      get () {
        return this.$store.state.bottomRight
      },
      set (value) {
        this.$store.commit('updateBottomRight', value)
      }
    },
  },
  methods: {
    updateAllCorners (e) {
      this.$store.commit('updateAllCorners', e.target.value)
    },
    updateTopLeft (e) {
      this.$store.commit('updateTopLeft', e.target.value)
    },
    updateTopRight (e) {
      this.$store.commit('updateTopRight', e.target.value)
    },
    updateBottomLeft (e) {
      this.$store.commit('updateBottomLeft', e.target.value)
    },
    updateBottomRight (e) {
      this.$store.commit('updateBottomRight', e.target.value)
    },
  },
}
</script>