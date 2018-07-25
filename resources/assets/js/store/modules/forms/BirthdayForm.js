export default {
  namespaced: true,
  state: {
    birthDayForm: {
      errors: '',
      name: '',
      birthDay: '',
      loaderDisabled: true,
      cancelDisabled: false,
      saveDisabled: false,
      alertDisabled: true,
    },
  },
  mutations: {
    setName: function(state, name) {
      state.birthDayForm.name = name;
    },
    setBirthday: function(state, birthDay) {
      state.birthDayForm.birthDay = birthDay;
    },
    setLoaderActive: function(state, val){
      state.loaderDisabled = val;
    },
    setCancelActive: function(state, val){
      state.cancelDisabled = val;
    },
    setSaveActive: function(state, val){
      state.saveDisabled = val;
    },
    setAlertActive: function(state, val){
      state.alertDisabled = val;
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

      context.commit('setLoader', true);
      context.commit('cancelDisabled', true);

      var requestUrl = "http://localhost/bday-tracker/public/api/bday"

      axios.post(requestUrl, {
        name: name,
        birthDay: date
      })
      .then(response => {

        // JSON responses are automatically parsed.
        context.state.birthDayForm.name = response.data.name;
        context.state.birthDayForm.birthDay = response.data.date;

        context.commit('setLoader', false);
        context.commit('cancelDisabled', false);

        /*
          this.$eventHub.$emit('toggle-create-birthday-dialog', false);
          this.$eventHub.$emit('change-page-request', {page:5}); // Page 5 for testing.
          this.$eventHub.$emit('birthday-created-notification', {state:true});
        */

      })
      .catch(e => {
        context.state.errors.push(e);
      })

    }
  },
}
