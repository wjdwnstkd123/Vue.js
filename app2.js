// plan이란 이름으로 컴포넌트를 만든다.
let PlanComponent = {
  template: '#plan-template',
  // 부모가 자식에 내려주는 값을 잡을때 사용
  // 자식 컴포넌트다
  props:{
    name: {
      type: String,
      required: true
    },
  
    selectedPlan: {
    type: String
    },
    computed:{
      isSelected(){
        return this.name === this.selectedPlan
      }
    }

  },
    methods: {
      select(){
        // 이벤트를 강제로 실행하기 위해 emit을 사용한다.
        // 이벤트 버스?
        this.$emit('select', this.name)
    }
  }
}

//p
let PlanPickerComponent = {
  template: '#plan-picker-template',
  components: {
    plan: PlanComponent
  },
  data(){
    return {
      plans: ['The Single', 'The Curious', 'The Addict'],
      selectedPlan: null
    }
  },
  methods: {
    // 자식이 큐! 하면 올려준다.
    selectPlan(plan) {
      // 부모의 데이터를 치환합니다.
      // 문자열을 받으면 문자열이라 생각하고 예측해서 사용하자
      this.selectedPlan = plan
    }
  }
}

new Vue({
  el: '#app',
  components: {
    'plan-picker': PlanPickerComponent
  }
})