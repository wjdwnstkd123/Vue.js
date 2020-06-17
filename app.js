// Vue.component('이름', {}) : 다음과 같은 컴포넌트가 있다 선언
Vue.component('click-counter', {
  // 버튼을 만들어 카운트를 증가
  template: '#click-counter-template',
  data () {
    return {
      count: 0
    }
  }
})

new Vue({
  el: '#app'
}) 