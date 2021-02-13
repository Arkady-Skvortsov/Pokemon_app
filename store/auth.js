import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  state: () => ({
    error: null,
    mode: null,
    photoAuth: null,
  }),

  actions: {
    async Login({ commit, dispatch }, { email, password }) {
      const uid = await dispatch('getUid')

      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((user) => {
            firebase
              .storage()
              .ref(`users/${uid}`)
              .getDownloadURL()
              .then((data) => {
                commit('changePhoto', data)
              })
              .catch((e) => console.log(e))
          })
      } catch (e) {
        commit('SetError', e)

        throw e
      }
    },

    async Logout() {
      await firebase.auth().signOut()
    },

    async Register({ commit, dispatch }, { email, password, photoURL }) {
      const uid = await dispatch('getUid')

      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            firebase.storage().ref(`users/${uid}`).put(photoURL)

            firebase.firestore.collection('users').set({
              email,
              password,
              uid,
            })
          })

        await firebase
          .storage()
          .ref(`users/${uid}`)
          .getDownloadURL()
          .then((data) => {
            console.log(data)

            commit('changePhoto', data)
          })
          .catch((e) => console.log(e))
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

    changePhoto(state, photo) {
      state.photoAuth = photo
    },

    ClearError(state) {
      state.error = null
    },
  },

  getters: {
    ERROR: (s) => s.error,
    MODE: (s) => s.mode,
    PHOTOAUTH: (s) => s.photoAuth,
  },
}
