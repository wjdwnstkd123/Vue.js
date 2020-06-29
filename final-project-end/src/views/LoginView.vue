<template>  
  <v-app>
  <template>
    <login />
  </template>
  <div id="loginTab">
  <template>
    <v-card width="400" height="280" class="mx-auto"> 
        <h2 class="title-1">Login</h2>
        <v-card-text>
          <v-form>
            <v-text-field v-model='userName' label="이름을 입력해주세요" prepend-icon="mdi-account-circle"/>
            <v-text-field v-model='departName' label="부서명을 입력해주세요" prepend-icon="mdi-account-details"/>      
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
          <v-card-actions>
            <router-link :to="{ name: 'Join' }">
              <v-btn color="success">Join</v-btn>
            </router-link> 
            <v-spacer></v-spacer>
            <v-btn color="info" @click="addID">Login</v-btn>
          </v-card-actions>
    </v-card>
  </template>
  </div>
  </v-app>
</template>

<script>

import login from "@/components/login";

export default {
  name: "LoginView",

  components: {
    login
  },

  data() {
    return{
      userName: '',
      departName: ''
    }
  }
};
</script>
<style>
  #loginTab{
    position: absolute;
    left: 750px;
    top: 180px;

  }
</style>