<template>
  <v-card
    class="mx-0 overflow-hidden"
    id="bigCard"
    height="1100"
    width="500"
  >
    <v-app-bar
      color="orange darken-3"
      dark
    >

    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Naviworks Keeper</v-toolbar-title>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <router-link :to="{ name: 'LoginView' }">
            <v-list-item-title>
              <v-btn x-small color="secondary" dark>Login</v-btn>
            </v-list-item-title>
            </router-link>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-btn class="mt-2" x-small color="secondary" dark>manage</v-btn>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <h2> 등록 현황 </h2>
    <v-card v-for="registerList in registerLists" v-bind:key=registerList height="140" width="500" class="mt-3" >
      <img :src="registerList.image" align='right' class="imageView">
      이름 : {{registerList.username}}
      <br/>
      부서명 : {{registerList.departName}}
      <br/>
      이용날짜 : {{registerList.registerDate}}
      <br/>
      이용시간 : {{registerList.registerTime}}
    </v-card>
    <router-link :to="{ name: 'Join'}">
      <v-btn class="reBtn2 mt-5 " color="success" >Prev</v-btn>
    </router-link>
  </v-card>

</template>

<script>

//import NaviBar from "@/components/NaviBar";

export default {
    name: 'manageTab',
    data() {
      return {
        registerLists:[
          {
            username: "정준상",
            departName: "OITA",
            registerDate: "2020/06/29",
            registerTime: "9:30",
            image: 'https://picsum.photos/120/120/?image=100'
          },
          {
            username: "하선영",
            departName: "OITA",
            registerDate: "2020/06/29",
            registerTime: "10:30",
            image: 'https://picsum.photos/120/118/?image=101'
          },
          {
            username: "김남태",
            departName: "OITA",
            registerDate: "2020/06/29",
            registerTime: "11:00",
            image: 'https://picsum.photos/120/118/?image=102'
          },
          {
            username: "아무나",
            departName: "OITA",
            registerDate: "2020/06/29",
            registerTime: "21:30",
            image: 'https://picsum.photos/120/118/?image=103'
          },
                    {
            username: "이원만",
            departName: "OITA",
            registerDate: "2020/06/29",
            registerTime: "18:30",
            image: 'https://picsum.photos/120/118/?image=104'
          },
                    {
            username: "최상혁",
            departName: "OITA",
            registerDate: "2020/06/29",
            registerTime: "19:30",
            image: 'https://picsum.photos/120/118/?image=10'
          },
        ],
        group: '',
        drawer: false,
      }
    },
    // components: {
    //   NaviBar
      
    // },
    // methods: {
    //   createCard() {
    //     this.registerList.push({

    //     })
    //   }
    // }
  }
</script>

<style scoped>
  .imageView{
    margin : 10px;
  }
  #bigCard{
    border : 1px block
  }
</style>