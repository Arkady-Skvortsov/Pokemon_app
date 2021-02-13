import firebase from 'firebase/app'
import 'firebase/firestore'

export const state = () => ({
  choicePokemon: false,
  vs_pokemon: {},
  first_vs_pokemon: {},
  vs_notification: {
    err: {
      txt: '',
    },
    notErr: {
      txt: '',
    },
  },
  searchPokemon: '',
  statPokemonParams: {},
  aboutPokemonParams: '',
  savePath: 0,
  pokemons: [],
  tags: [],
  vs_history: [],
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
    if (state.pokemons.includes(payload)) {
      return
    } else {
      state.pokemons.push(payload)
    }
  },

  GETFIRSTVSPOKEMON(state, newPok) {
    state.first_vs_pokemon = newPok
  },

  GETERRNOTIFICATION(state, err) {
    state.vs_notification.err.txt = err
  },

  GETVSNOTIFICATION(state, mess) {
    state.vs_notification.notErr.txt = mess
  },

  SETTAG(state, tag) {
    state.tags.push(tag)
  },

  CLEARTAG(state, tag2) {
    state.tags.splice(tag2, 1)
  },

  SETHISTORY(state, hist) {
    state.vs_history.push(hist)
  },

  CLEARHISTORY(state) {
    state.vs_history.splice(0, state.vs_history.length)
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
    await firebase
      .firestore()
      .collection('pokemons')
      .get()
      .then((querySnap) => {
        querySnap.docs.map((item) => {
          // commit('GETPOKEMONS', item.data())
          console.log(item.data())
        })
      })
  },

  SETPOKEMONS({ commit }, pokem) {
    //Нужно будет удалить!
    commit('SETPOKEMONS', pokem)
  },

  GETFIRSTVSPOKEMON({ commit }, newPok) {
    commit('GETFIRSTVSPOKEMON', newPok)
  },

  GETERRNOTIFICATION({ commit }, err) {
    commit('GETERRNOTIFICATION', err)
  },

  GETVSNOTIFICATION({ commit }, mess) {
    commit('GETVSNOTIFICATION', mess)
  },

  SETTAG({ commit }, tag) {
    commit('SETTAG', tag)
  },

  CLEARTAG({ commit }, tag2) {
    commit('CLEARTAG', tag2)
  },

  async SETHISTORY({ commit, dispatch, state }, hist) {
    try {
      const uid = await dispatch('getUid')

      await firebase.database().ref(`users/${uid}/addedPokemons`).push(hist)

      await firebase
        .database()
        .ref(`users/${uid}/addedPokemons`)
        .on('value', (snapshot) => {
          state.vs_history = snapshot.val()
        })
    } catch (e) {
      commit('setError', e)

      throw e
    }
  },

  async CLEARHISTORY({ commit, dispatch, state }) {
    try {
      const uid = await dispatch('getUid')

      commit('CLEARHISTORY')
    } catch (e) {
      commit('setError', e)

      throw e
    }
  },

  getUid() {
    const user = firebase.auth().currentUser
    return user ? user.uid : null
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
  VSNOTIFICATION: (s) => s.vs_notification,
  TAGS: (s) => s.tags,
  VSHISTORY: (s) => s.vs_history,
}
