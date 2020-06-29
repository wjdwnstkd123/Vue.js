<template>
  <v-card
    class="mx-0 overflow-hidden"
    height="700"
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
    <h1>안녕하세</h1>
  </v-card>
</template>
<script>
  export default {
    data() {
      return{
        drawer: false,
        group:''
      }
    },
  }
</script>