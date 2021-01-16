export const state = () => ({
  choicePokemon: false,
  vs_pokemon: {},
  first_vs_pokemon: {},
  vs_message: '',
  searchPokemon: '',
  statPokemonParams: {},
  aboutPokemonParams: '',
  savePath: 0,
  pokemons: [],
})

export const mutations = {
  CHANGESTATE(state, different) {
    state.choicePokemon = different
  },

  CHOOSEVSPOKEMON(state, choose) {
    state.vs_pokemon = choose
  },

  CLEARVSPOKEMON(state) {
    state.vs_pokemon = {}
  },

  SEARCHPOKEMONS(state, pole) {
    state.searchPokemon = pole
  },

  CHANGESTATPARAMS(state, paramtr) {
    state.statPokemonParams = paramtr
  },

  CHANGEABOUTPARAMS(state, about) {
    state.aboutPokemonParams = about
  },

  SAVINGTHEPATH(state, num) {
    state.savePath = num
  },

  SETPOKEMONS(state, otherPayload) {
    state.pokemons = otherPayload
  },

  GETPOKEMONS(state, payload) {
    state.pokemons = payload
  },

  GETFIRSTVSPOKEMON(state, newPok) {
    state.first_vs_pokemon = newPok
  },

  GETVSMESSAGE(state, mess) {
    state.vs_message = mess
  },
}

export const actions = {
  CHANGESTATE({ commit }, different) {
    commit('CHANGESTATE', different)
  },

  CHOOSEVSPOKEMON({ commit }, choose) {
    commit('CHOOSEVSPOKEMON', choose)
  },

  CLEARVSPOKEMON({ commit }) {
    commit('CLEARVSPOKEMON')
  },

  SEARCHPOKEMONS({ commit }, pole) {
    commit('SEARCHPOKEMONS', pole)
  },

  CHANGESTATPARAMS({ commit }, paramtr) {
    commit('CHANGESTATPARAMS', paramtr)
  },

  CHANGEABOUTPARAMS({ commit }, about) {
    commit('CHANGEABOUTPARAMS', about)
  },

  SAVINGTHEPATH({ commit }, num) {
    commit('SAVINGTHEPATH', num)
  },

  async GETPOKEMONS({ commit }) {
    const pokemons = await this.$axios.$get('http://localhost:3000/pokemons')

    commit('GETPOKEMONS', pokemons)
  },

  GETFIRSTVSPOKEMON({ commit }, newPok) {
    commit('GETFIRSTVSPOKEMON', newPok)
  },

  GETVSMESSAGE({ commit }, mess) {
    commit('GETVSMESSAGE', mess)
  },
}

export const getters = {
  CHOICEPOKEMON: (s) => s.choicePokemon,
  VSPOKEMON: (s) => s.vs_pokemon,
  FIRSTVSPOKEMON: (s) => s.first_vs_pokemon,
  SEARCHPOKEMON: (s) => s.searchPokemon,
  STATPOKEMONPARAMS: (s) => s.statPokemonParams,
  ABOUTPOKEMONPARAMS: (s) => s.aboutPokemonParams,
  SAVEPATH: (s) => s.savePath,
  POKEMONS: (s) => s.pokemons,
  VSMESSAGE: (s) => s.vs_message,
}
