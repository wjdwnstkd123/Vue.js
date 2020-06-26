import Vue from 'vue'
import Vuex from 'vuex'
// import EventService
import EventService from '@/services/EventService.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam jahr'},
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: [],
    eventsTotal: 0,
    event: {}
  },
    // },
    // events: [
    //   { id: 1, title: '...', organizer: '...'},
    //   { id: 2, title: '...', organizer: '...'},
    //   { id: 3, title: '...', organizer: '...'},
    //   { id: 4, title: '...', organizer: '...'}
    // ]

    // todos: [
    //   { id: 1, text: '...', done: true},
    //   { id: 2, text: '...', done: false},
    //   { id: 3, text: '...', done: true},
    //   { id: 4, text: '...', done: false}
    // ]
  mutations: {
    // event를 추가
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENTS_TOTAL(state, eventsTotal) {
      state.eventsTotal = eventsTotal
    },
    SET_EVENT(state, event) {
      state.event = event
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    },
    fetchEvents({ commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then(response => {
          // 전체 page수를 10개로 하여 콘솔에 출력
          console.log('Total event are ' + response.headers['x-total-count'])
          // SET_EVENTS를 불러온다.
          commit('SET_EVENTS', response.data)
        })
        // 에러 처리
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },
    fetchEvent({ commit, getters }, id) {
        
      var event = getters.getEventById(id)

        if (event) {
          commit('SET_EVENT', event)
        } else {
          EventService.getEvent(id)
            .then(response => {
              commit('SET_EVENT', response.data)
            })
            .catch(error => {
            console.log('There was an error:', error.response)
            })
          }
      }
    },
    getters: {
      getEventById: state => id =>  {
        return state.events.find(event => event.id === id)
      }
    }
})

// catLength: state => {
//   return state.categories.length
// },
// // filter가 실행되면 todo.done값을 리턴한다.
// doneTodos: state => {
//   return state.todos.filter(todo => todo.done)
// },

// //activeTodosCount: (state, getters) => {
//   activeTodosCount: state => {
//   // todo.done 값을 바로 가져온다.
//     return state.todos.filter(todo => !todo.done).length
//   }
//   // true와 false를 개수로 가져와 0 or 1을 리턴
//   //return state.todos.length - getters.doneTodos.length
