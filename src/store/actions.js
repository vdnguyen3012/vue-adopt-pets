export default {
  addPet: ({ commit }, payload) => { // commit method from vuex
    commit('appendPet', payload) // call method from mutation
  }
}
