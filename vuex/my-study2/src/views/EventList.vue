<template>
  <div>
    <h1>HealthCare Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
    <template v-if="page != 1">
      <router-link :to="{ name: 'event-list', query: { page: page - 1 } }" rel="prev">
        Prev Page | </router-link>
    </template>
    <router-link :to="{ name: 'event-list', query: { page: page + 1 } }" rel="next">
      Nexe Page</router-link>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },

  created() {
    this.perPage = 3
    // dispatch????
    // pagination????
    this.$store.dispatch('fetchEvents',{
      perPage: this.perPage,
      page: this.page
    })
  },
  computed: {
    page() {
      // 해당 페이지의 수 또는 최소 1페이지를 리턴
      return parseInt(this.$route.query.page) || 1
    },
    hasNextPage() {
      return this.eventsTotal > this.page * this.perPage
    },
    ...mapState(['events'])
  }
}
</script>
