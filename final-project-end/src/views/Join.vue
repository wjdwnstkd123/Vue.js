<template>

      <v-app>
      <NaviBar2 />
        <v-content>
          <v-card width=500 class="mt-5">
            <h2>Health Keeper Register</h2>
            <h4>이름</h4>
            <v-text-field v-model='userName' label='이름을 입력해주세요.'></v-text-field>
          </v-card>

          <v-card width=500 class="mt-5">
            <h4>부서명</h4>
            <v-text-field v-model='departName' label='부서명을 입력해주세요.'></v-text-field>
          </v-card>
          
          <v-card width=500 class="mt-5">
            <h4>날짜를 선택해주세요</h4>
            <datepic/>
          </v-card>
          
          <v-card width=500 class="mt-5">
            <h4>시간</h4>
            <v-text-field v-model='registerTime' label='원하시는 시간을 입력해주세요.'></v-text-field>
            
            <v-divider></v-divider> 
            <v-card-actions>
              <router-link :to="{ name: 'manageTab'}">         
                <v-btn class="reBtn1 mt-5 " color="info">Regiseter</v-btn>
              </router-link>
              <v-spacer></v-spacer>
              <router-link :to="{ name: 'LoginView'}">
                <v-btn class="reBtn2 mt-5 " color="success">Prev</v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-content>
      </v-app>
</template>

<script>
import datepic from "@/components/datepic";
import NaviBar2 from "@/components/NaviBar2";
export default {
    name: 'join',
    data() {
      return {
        userName: '',
        departName: '',
        registerTime: '',
        due: null,
      
      }
    },
    components: {
      datepic,
      NaviBar2
    },
    }
      // createInfo() {
      //   this.$store.dispatch('createInfo', this.info)
      //   .then(() => {
      //     this.info = this.createFreshInfoObject()
      //   })
      //   .catch(() => {
      //     console.log('There was a problem creating your event')
      //   })
      //   this.info = this.createFreshInfoObject()
      // },
      // createFreshInfoObject(){
      //   const user = this.$store.state.user

      //   return{
      //     id: '',
      //     name: '',
      //     depart: '',
      //     date: '',
      //     time: ''
      //   }
      // }

  
</script>

<style scoped>

</style>