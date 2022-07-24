import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    products: [
      {
        id: 1,
        name: "iPhone 11",
        picture: "https://files.refurbed.com/ii/iphone-11-pro-1619179577.jpg",
        price: 399,
        stock: 3,
      },
      {
        id: 2,
        name: "Samsung Galaxy S8",
        picture:
          "https://files.refurbed.com/ii/64-gb-schwarz-single-sim-1562659918.jpg",
        price: 275,
        stock: 5,
      },
    ]
  },
  actions,
  getters,
  mutations
})

