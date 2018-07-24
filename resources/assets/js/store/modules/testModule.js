export default {
  namespaced: true,
  state: {
    isActive: false,
    records: [
      {
        id:23, title: "Test record"
      }
    ]
  },
  getters: {
    getActiveState(state, getters, rootState){
      console.log(state.isActive);
    }
  },
  mutations: {
    activate(state){
      state.isActive = true;
    },
    deactivate(state){
      state.isActive = false;
    }
  }
}
