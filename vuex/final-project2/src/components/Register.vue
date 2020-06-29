<template>
  <div>
    <div>
      <img src="nlogo.png">
      <h1>헬스 케어 등록</h1>
    </div>
      <form @submit.prevent="createEvent">

          <h4>이름을 입력해주세요.</h4>
          <select v-model="event.category">
            <option v-for="cat in categories" :key="cat">{{ cat }}</option>
          </select>



          <div class="field">
            <label>이름</label>
            <input v-model="event.title" type="text" placeholder="여기에 입력해주세요."/>
          </div>

          <h4>날짜를 선택해 주세요</h4>

          <div class="field">
            <label>Date</label>
            <datepicker v-model="event.date" placeholder="날짜를 선택해 주세요."/>
          </div>

          <div class="field">
            <h4>시간대를 선택해 주세요</h4>
            <select v-model="event.times">
            <option v-for="time in times" :key="time">{{ time }}</option>
            </select>
          </div>

          <input type="submit" class="button -fill-gradient" value=" 예  약 "/>
        </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker
  },
  data() {
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject()
    }
  }
}