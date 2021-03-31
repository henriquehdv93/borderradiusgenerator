export const state = () => ({
    allCorners: 10,
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
});
export const getters = {
  getAllCorners(state) {
    return state.allCorners
  },
  getTopLeft(state) {
    return state.topLeft
  },
  getTopRight(state) {
    return state.topRight
  },
  getBottomLeft(state) {
    return state.bottomLeft
  },
  getBottomRight(state) {
    return state.bottomRight
  }
}
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
}