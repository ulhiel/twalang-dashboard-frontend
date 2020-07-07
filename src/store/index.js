import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    admin: JSON.parse(localStorage.getItem('admin')) || ''
  },
  getters: {
    admin(state){
      return state.admin
    }
  },
  mutations: {
    SET_ADMIN(state,admin){
      state.admin = admin
    }
  },
  actions: {
    login(context,data){
      console.log(data)
      axios.post('api/login',{
        email: data.email,
        password: data.password
      })
      .then(response => {
        localStorage.setItem('admin',JSON.stringify(response.data.result.admin))
        context.commit('SET_ADMIN',response.data.result.admin)
        router.push('/dashbooard')
      })
      .catch( err => {
        console.error(err)
      })
    },
    logout(){
      console.log('logout')
      localStorage.removeItem('admin')
      router.push('/')
    }
  },
  modules: {
  }
})
