import Vue from 'vue'
import Vuex from 'vuex'

import transactions from './modules/transactions'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    transactions
  }
})
