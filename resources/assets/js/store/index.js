import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import snackbar from './modules/snackbar'
import users from './modules/users'
import TestModule from './modules/testModule'

// Dialogs
import CreateBirthdayDialogModule from './modules/dialogs/CreateBirthdayDialogModule'
import UpdateBirthdayDialogModule from './modules/dialogs/UpdateBirthdayDialogModule'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    pageNumber: 456,
    birthDayForm:{
      name: '',
      birthDay: ''
    },
  },
  mutations: {
    setName: function(state, name) {
      state.birthDayForm.name = name;
    },
    setBirthDay: function(state, birthDay) {
      state.birthDayForm.birthDay = birthDay;
    }
  },
  modules: {
    auth,
    snackbar,
    users,
    testModule: TestModule,
    createBirthdayDialogModule: CreateBirthdayDialogModule,
    updateBirthdayDialogModule: UpdateBirthdayDialogModule
  },
  strict: debug
})
