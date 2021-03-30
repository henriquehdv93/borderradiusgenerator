<template>
  <section>
        <div class="rangeGroup">
          <label for="allCorners">All corners</label>
          <div>
            <input type="range" id="allCorners" name="allCorners" v-model="allCorners">
            <input type="text" id="allCornersValue" name="allCornersValue" v-model="allCorners">
          </div>
        </div>
        <div class="rangeGroup">
          <label for="topLeft">Top Left</label>
          <div>
            <input type="range" id="topLeft" name="topLeft" v-model="topLeft">
            <input type="text" id="topLeftValue" name="topLeftValue" v-model="topLeft">
          </div>
        </div>
        <div class="rangeGroup">
          <label for="topRight">Top Right</label>
          <div>
            <input type="range" id="topRight" name="topRight" v-model="topRight">
            <input type="text" id="topRightValue" name="topRightValue" v-model="topRight">
          </div>
        </div>
        <div class="rangeGroup">
          <label for="bottomLeft">Bottom Left</label>
          <div>
            <input type="range" id="bottomLeft" name="bottomLeft" v-model="bottomLeft">
            <input type="text" id="bottomLeftValue" name="bottomLeftValue" v-model="bottomLeft">
          </div>
        </div>
        <div class="rangeGroup">
          <label for="bottomRight">Bottom Right</label>
          <div>
            <input type="range" id="bottomRight" name="bottomRight" v-model="bottomRight">
            <input type="text" id="bottomRightValue" name="bottomRightValue" v-model="bottomRight">
          </div>
        </div>
      </section>
</template>
<script>
export default {
  data: () => ({
    allCorners: 0,
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  })
}
</script>