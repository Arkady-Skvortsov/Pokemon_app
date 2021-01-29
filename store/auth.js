import firebase from 'firebase/app'

export default {
  state: () => ({
    error: null,
  }),

  actions: {
    async Login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        commit('SetError', e)

        throw e
      }
    },

    async Logout() {
      await firebase.auth().signOut()
    },

    async Register({ commit, dispatch }, { email, password }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)

        const uid = await dispatch('getUid')

        await firebase.database().ref(`users/${uid}/info`).set({
          email,
          password,
        })
      } catch (e) {
        commit('SetError', e)

        throw e
      }
    },

    getUid() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
  },

  mutations: {
    SetError(state, Error) {
      state.error = Error
    },

    ClearError(state) {
      state.error = null
    },
  },

  getters: {
    ERROR: (s) => s.error,
  },
}
