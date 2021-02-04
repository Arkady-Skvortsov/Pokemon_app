import firebase from 'firebase/app'

export default {
  state: () => ({
    error: null,
    mode: null,
    photoAuth: '',
  }),

  actions: {
    async Login({ commit, dispatch }, { email, password }) {
      const uid = await dispatch('getUid')

      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            this.photoAuth = firebase
              .storage()
              .ref(`user/${uid}`)
              .getDownloadURL()
              .once('value', (d) => {
                console.log(d)
              })
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
          })

        await firebase.database().ref(`users/${uid}/info`).set({
          email,
          password,
        })

        await firebase
          .storage()
          .ref(`users/`)
          .child(uid)
          .getDownloadURL()
          .then((data) => {
            console.log(data)

            commit('changePhoto', data)
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
