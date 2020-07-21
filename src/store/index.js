import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allProducts: null,
    products: null,
    limit: 6,
    limitIncrement: 6,
    cart: []
  },
  getters: {
    totalItemsCart: state => state.cart.length > 9 ? '+ 9' : state.cart.length,
    showTotalItems: state => state.cart.length === 0 ? false : true,
  },
  mutations: {
    getAllProducts: (state, payload) => state.allProducts = payload,
    getProducts: (state, payload) => state.products = payload,
    getMoreProducts: (state, payload) => state.products.push(payload),
    limit: (state, payload) => state.limit = payload,
    addCart: (state, payload) => state.cart.push(payload),
  },
  actions: {
    getProducts: async ({ commit, state }) => {

      const response = await Api.getProducts()

      commit('getAllProducts', response.data.products)

      const { products } = response.data

      let prods = []

      products.forEach((product, index) => {
                            
        if(index < state.limit) {

          prods.push(product)

        }

      })

      commit('getProducts', prods)

    },
    getMoreProductsOnTheScreen: ({ state, commit }) => {
      
      const maxProds = state.limit + state.limitIncrement

      commit('limit', maxProds)

      if(state.allProducts.length > state.products.length) {
        
        state.allProducts.forEach((product, index) => {
            
          if(index >= state.products.length && index < state.limit) {

            commit('getMoreProducts', product)

          }

        })

      }
        
    },
    surveyedProducts: ({ state, commit }, term) => {
      
      const search = new RegExp(term, 'i')

      if(term === '') {
                            
        commit('getProducts', state.allProducts)

      } else {
          
        let  searchResult = state.allProducts.filter(product => {
        
          return search.test(product.name)

        })

        commit('getProducts', searchResult)
      }

    },
    addCart: ({ state, commit }, item) => {
  
      const prod = state.cart.find(itemCart => {

        return item.productID === itemCart.productID

      }) 

      if(!prod && item.unitsInStock > 0) {

        item.quantity = 1

        commit('addCart', item)

      }
        
    }
  },
  modules: {
  }
})
