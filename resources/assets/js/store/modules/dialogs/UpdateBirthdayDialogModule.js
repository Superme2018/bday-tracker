export default {
  namespaced: true,
  state: {
    visible: false
  },
  getters: {
    getVisibility(state){ // <-- getters rootState interesting.
      return state.visible;
    }
  },
  mutations: {
    setVisibility(state, val){
      state.visible = val;
    }
  }
}
