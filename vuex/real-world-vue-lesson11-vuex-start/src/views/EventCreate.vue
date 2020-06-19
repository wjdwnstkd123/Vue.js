<template>
  <div>
    <!-- 헤드 내용 + 유저네임 -->
    <h1>Create an Event, {{ user.name }}</h1>
    <!--텍스트 내용 + 유저네임 -->
    <p>This event was created by {{ user.id }}</p>
    <p>{{  getEvent(1) }}</p>
  </div>
</template>

<script>
// mapState Helper사용
// mapstate 단축키로 가져온다.
// import를 할 때  vuex가 제공하는
import {mapState} from 'vuex'
  
  export default {
    computed: {
      getEvent() {
        return this.$store.getters.getEventById
      },
      // ... : Object Spread Operator
      // a,b가 있는데 c,d를 넣고 싶을 때, 즉 내가 쓰고자하는 단축키만 쓰고 싶을때
      // 원래 것을 가져오고 추가한다.
      ...mapState(['user', 'categories'])
    }
  }
</script>


<style lang="scss" scoped>

</style>