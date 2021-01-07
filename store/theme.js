export const state = () => ({
	changeTheme: false,
	changeIcon: 'wb_sunny',
   changeSearch: false,
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
   }   
}

export const actions = {
   CHANGE({commit}, ch) {
      commit("CHANGE", ch)
   },

   ICON({commit}, ico) {
   	commit('ICON', ico)
   },

   CHANGES({commit}, search) {
      commit('CHANGES', search) 
   } 
}

export const getters = {
	CHANGETHEME: s => s.changeTheme,
   CHANGEICON: s => s.changeIcon,
   CHANGESEARCH: s => s.changeSearch
}