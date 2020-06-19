import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr' },
    categories: [
      'sustainability',
      'nature',
      'animal selfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: [
      {  id: 1, title: '...', organizer: '...'},
      {  id: 2, title: '...', organizer: '...'},
      {  id: 3, title: '...', organizer: '...'},
      {  id: 4, title: '...', organizer: '...'}
    ]
  },
  mutations: {},
    // PICK_UP_BREAD(state, bread) {
    //   state.breakg
    // }
  
  actions: {
    // pleasePickBoread({ commit }) {
    // if(possible) {
    //   fetch('/bread').then(bread => {
    //     commit('PICK_UP_BREAD'. bread)
    //   })
    // }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id ===id)
    }
  }
})
