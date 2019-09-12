export const state = () => ({
  inActive: 0
})

export const mutations = {
  setActiveState (state, inActive) {
    state.inActive = inActive
  }
}

export const actions = {
  toLeftSide ({ commit }) {
    commit('setActiveState', 1)
  },
  toRightSide ({ commit }) {
    commit('setActiveState', 2)
  },
  toDefault ({ commit }) {
    commit('setActiveState', 0)
  }
}
