// store/index.ts
import { createStore } from 'vuex'
import pro from './modules/pro'
import getters from './getters'
const store = createStore({
  state() {
    return {
    }
  },
  mutations: {
   
  },
  
  modules: {
    pro
  },
  getters
})

export default store
