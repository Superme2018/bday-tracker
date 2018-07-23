import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import snackbar from './modules/snackbar'
import users from './modules/users'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    pageNumber: 456,
    birthDayForm:{
      name: '',
      birthDay: ''
    },
    createBirthDayDialog: {
      visible: false
    },
    updateBirthDayDialog: {
      visible: false
    },
  },
  mutations: {
    setName: function(state, name) {
      state.birthDayForm.name = name;
    },
    setBirthDay: function(state, birthDay) {
      state.birthDayForm.birthDay = birthDay;
    },
    showCreateBirthDayDialog: state => {
      state.createBirthDayDialog.visible = true;
    },
    hideCreateBirthDayDialog: state => {
      state.createBirthDayDialog.visible = false;
    },
    showUpdateBirthDayDialog: state => {
      state.updateBirthDayDialog.visible = true;
    },
    hideUpdateBirthDayDialog: state => {
      state.updateBirthDayDialog.visible = false;
    }

  },
  modules: {
    auth,
    snackbar,
    users
  },
  strict: debug
})
