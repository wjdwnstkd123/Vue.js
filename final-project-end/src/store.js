// import Vue from 'vue'
// import Vuex from 'vuex'
// // import InfoService from '@/services/EventService.js'
// // import EventService
// Vue.use(Vuex)

// export default new Vuex.Store({
//   state:{
//     user: { name:'asd123', departName: '정준상'},
//     infos: [],
//     info: {}
//   },
//   mutations: {
//     ADD_INFO(state, infos){
//       state.infos.push(infos)
//     },
//     SET_INFO(state, info) {
//       state.info = info
//     },
//     SET_INFOS(state, infos) {
//       state.infos = infos
//     }
//   },
//   actions: {
//     createInfo({ commit }, info) {
//       return InfoService.postEvent(info).then(() => {
//         commit('ADD_INFO', info)
//       })
//     },
//     fetchInfo({ commit }) {
        
//       InfosService.getInfos()
//         .then(reponse => {
//           console.log(response)
//           commit('SET_INFO', response.data._embed)
//         })
      
//       }
//   }
// })