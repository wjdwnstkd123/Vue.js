import Vue from 'vue'
import Vuex from 'vuex'
import MeetingServices from '@/services/MeetingServices.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      { id: 1, name: "정희영", phone: "01056724786", team: "AVA" },
      { id: 2, name: "심현우", phone: "01047872631", team: "클라우드융합" },
      { id: 3, name: "김남태", phone: "01028776422", team: "OITA" },
      { id: 4, name: "노승업", phone: "01032903474", team: "BITA" },
      // { name: "이소영", phone: "01092336738", team: "AVA" },
      // { name: "홍진우", phone: "01059934439", team: "SITA" },
      // { name: "김보라", phone: "01029472223", team: "클라우드융합" },
      // { name: "노병현", phone: "01039494343", team: "SITA" },
      // { name: "하선영", phone: "01082338741", team: "OITA" },
      // { name: "이정욱", phone: "01046923432", team: "클라우드융합" },
      // { name: "정준상", phone: "01045523232", team: "OITA" },
      // { name: "원종은", phone: "01032142122", team: "인턴" },
    ],
    clubs: [
      { id: 1, title: "Pilates", description: "Pilates for Hot Body", administrator: "정희영" },
      { id: 2, title: "Movies", description: "We love watching movies", administrator: "홍진우" },
      { id: 3, title: "Books", description: "I am smarter than you think", administrator: "심현우" }
    ],
    meetings: [
      { id: 1, host: "하선영", status: true },
      { id: 2, host: "김남태", status: false },
      { id: 3, host: "정준상", status: true }
    ]
  },

  getters: {
    clubLength: state => {
      return state.clubs.length
    },
    availMeetingCount: state => {
      return state.meetings.filter(meeting => meeting.status).length
    },
    getClubById: state => id => {
      return state.clubs.find(club => club.id === id)
    }
  },
  mutations: {
    ADD_MEETING(state, meeting) {
      state.meetings.push(meeting)
    },
    ADD_CLUB(state, club) {
      state.clubs.push(club)
    },
    SET_CLUBS(state, clubs) {
      state.clubs = clubs
    }
  },
  actions: {
    createMeeting({ commit }, meeting) {
      return MeetingServices.postMeeting(meeting).then(() => {
        commit('ADD_MEETING', meeting)
      })
    },
    createClub({ commit }, club) {
      return MeetingServices.postClub(club).then(() => {
        commit('ADD_CLUB', club)
      })
    },
    fetchClubs({ commit }) {
      MeetingServices.getClubs()
        .then(response => {
          console.log(response)
          commit('SET_CLUBS', response.data._embedded.clubs)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },
    fetchMeetings({commit}) {
      MeetingServices.getMeetings()
      .then(response => {
        console.log(response)
        commit('SET_MEETINGS', response.data._embedded.meetings)
      })
      .catch(error => {
        console.log('There was an error: ', error.response)
      })
    }
  }
})
