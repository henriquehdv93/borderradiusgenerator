export const state = () => ({
    allCorners: 0,
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
    isMultipleValue: false,
});
export const mutations = {
  updateAllCorners (state, allCorners) {
    state.allCorners = allCorners
  },
  updateTopLeft (state, topLeft) {
    state.topLeft = topLeft
  },
  updateTopRight (state, topRight) {
    state.topRight = topRight
  },
  updateBottomLeft (state, bottomLeft) {
    state.bottomLeft = bottomLeft
  },
  updateBottomRight (state, bottomRight) {
    state.bottomRight = bottomRight
  },
  updateIsMultipleValue (state, isMultipleValue) {
    state.isMultipleValue = isMultipleValue
  }, 
}