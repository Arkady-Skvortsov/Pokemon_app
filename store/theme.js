export const state = () => ({
  changeTheme: false,
  changeIcon: 'wb_sunny',
  changeSearch: false,
  backgroundTheme: '',
  openPage: false,
})

export const mutations = {
  CHANGE(state, ch) {
    state.changeTheme = ch
  },

  ICON(state, ico) {
    state.changeIcon = ico
  },

  CHANGES(state, search) {
    state.changeSearch = search
  },

  SETBACKGROUNDTHEME(state, theme) {
    state.backgroundTheme = theme
  },

  SETOPENPAGE(state, theme) {
    state.openPage = theme
  },
}

export const actions = {
  CHANGE({ commit }, ch) {
    commit('CHANGE', ch)
  },

  ICON({ commit }, ico) {
    commit('ICON', ico)
  },

  CHANGES({ commit }, search) {
    commit('CHANGES', search)
  },

  SETBACKGROUNDTHEME({ commit }, theme) {
    commit('SETBACKGROUNDTHEME', theme)
  },

  SETOPENPAGE({ commit }, theme) {
    commit('SETOPENPAGE', theme)
  },
}

export const getters = {
  CHANGETHEME: (s) => s.changeTheme,
  CHANGEICON: (s) => s.changeIcon,
  CHANGESEARCH: (s) => s.changeSearch,
  BACKGROUNDTHEME: (s) => s.backgroundTheme,
  OPENPAGE: (s) => s.openPage,
}
