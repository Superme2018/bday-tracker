export default {
  namespaced: true,
  state: {
    birthDayForm: {
      loader: false,
      name: '',
      birthDay: ''
    },
  },
  mutations: {
    setName: function(state, name) {
      state.birthDayForm.name = name;
    },
    setBirthday: function(state, birthDay) {
      state.birthDayForm.birthDay = birthDay;
    }
  },
  getters: {
    getName(state){
      return state.birthDayForm.name;
    },
    getBirthday(state){
      return state.birthDayForm.birthDay;
    }
  },
  actions: {
    setForm: function(context, payload){
      console.log(payload);
      // Just noticed Vue.http, looks like an axios wrapper.
      context.commit('setName', payload.name);
      context.commit('setBirthday', payload.date);
    },
    createNewBirthDay: function(context, payload) {
      console.log(payload);
    }
  },
}
