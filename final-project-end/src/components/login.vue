<template>
  <v-container>
    <template>
    <div id='loginImage'>
    <v-img
      :src="require('../assets/health.jpg')"
      class="my-3"
      contain
      width="700"
      height="700"
    />
    </div>
    <h1>
      NAVIWORKS Health Keepper
    </h1>
    </template>
  </v-container>
</template>

<script>
  export default {
    name : "login",
    data() {
      return {
      }
    }
  }
</script>
<style>
  #loginImage {
    float: left;
  }
  h1 {
    position: absolute;
    left:750px;
    top :130px;
    color:darkorange;
  }
</style>