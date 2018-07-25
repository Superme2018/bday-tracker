import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import snackbar from './modules/snackbar'
import users from './modules/users'

// Dialogs
import CreateBirthdayDialogModule from './modules/dialogs/CreateBirthdayDialogModule'
import UpdateBirthdayDialogModule from './modules/dialogs/UpdateBirthdayDialogModule'

// Forms
import BirthdayForm from './modules/forms/BirthdayForm'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({

  state: {},
  mutations: {},

  modules: {
    auth,
    snackbar,
    users,
    createBirthdayDialogModule: CreateBirthdayDialogModule,
    updateBirthdayDialogModule: UpdateBirthdayDialogModule,
    birthdayForm: BirthdayForm
  },

  strict: debug

})
