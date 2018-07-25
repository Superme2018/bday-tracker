export default {
  namespaced: true,
  state: {
    datePicker: false,
    loaderActive: false,
    valid: false,
    cancelActive: false,
    saveActive: false,
    alertActive: true,
    alertMessage: '',
    birthDayForm: {
      errors: '',
      id: null,
      name: '',
      birthDay: null, // is dateFormated
      date: null,
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
      state.loaderActive = val;
    },
    setCancelActive: function(state, val){
      state.cancelActive = val;
    },
    setSaveActive: function(state, val){
      state.saveActive = val;
    },
    setAlertActive: function(state, val){
      state.alertActive = val;
    },
    /*
    setDateFormated: function(state, date){
      state.dateFormatted = date;
    },
    */
    setValid: function(state, val){
      state.valid = val;
    },
    setDate(state, date){
      state.birthDayForm.date = date;
    },
    setDatePicker(state, val){
      state.datePicker = val;
    },
  },
  getters: {
    getName(state){
      return state.birthDayForm.name;
    },
    getBirthday(state){
      return state.birthDayForm.birthDay;
    },
    getAlertMessage(state){
      return state.alertMessage;
    },
    getAlertActive(state){
      return state.alertActive;
    },
    getCancelActive: function(state){
      return state.cancelActive;
    },
    getSaveActive: function(state){
      return state.saveActive;
    },
    getValid(state){
      return state.valid;
    },
    getDate(state){
      return state.birthDayForm.date;
    },
    /*
    getDateFormatted(state){
      return state.birthDayForm.dateFormatted;
    },
    */
    getDatePicker(state){
      return state.datePicker;
    },
    getLoaderActive(state){
      return state.loaderActive;
    },
  },
  actions: {

    setForm: function(context, payload){
      console.log(payload);
      // Just noticed Vue.http, looks like an axios wrapper.
      context.commit('setName', payload.name);
      context.commit('setBirthday', payload.date);
    },

    createBirthDay: function(context, payload) {
      console.log(payload);

      context.commit('setLoader', true);
      context.commit('cancelDisabled', true);

      var requestUrl = "http://localhost/bday-tracker/public/api/bday"

      axios.post(requestUrl, {
        name: context.state.name,
        birthDay: context.state.date
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
