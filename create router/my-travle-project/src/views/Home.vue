<template>
  <div class="home">
    <h2>
      All destinations
    </h2>

    <div v-for="destination in destinations"
    :key="destination.name">
    <router-link :to="destination.slug">
      <h2>{{destination.name}}</h2>
    </router-link>
    <figure>
      <router-link :to="destination.name"
        img :src="require(`@/assets/${destination.image}`)"
        :alt="destination.name">
      <router-link>
    </figure>
  </div>
</template>

<script>
// @ is an alias to /src

import store from '@/store.js'
export default {
  name: 'home',
  components: {},
  data() {
    return {
      destinations: store.destinations
    }
  
  }
}
</script>
