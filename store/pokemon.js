export const state = () => ({
  choicePokemon: false,
})

export const mutations = {
  CHANGESTATE(state, different) {
    state.choicePokemon = different
  },
}

export const actions = {
  CHANGESTATE({ commit }, different) {
    commit('CHANGESTATE', different)
  },
}

export const getters = {
  CHOICEPOKEMON: (s) => s.choicePokemon,
}
