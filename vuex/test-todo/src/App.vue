<template>
  <div id="app">
    <ul>
      <li v-for="item in items" v-bind:key="item">
        {{ item.id }}
      </li>
    </ul>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
new Vue({
  el: '#app',
  data() {
    return {
      items: [
        {
          id:1,
          imege: 'https://picsum.photos/210/118/?image=1'
        },
                {
          id:2,
          imege: 'https://picsum.photos/210/118/?image=100'
        },
                {
          id:3,
          imege: 'https://picsum.photos/210/118/?image=3'
        },
                {
          id:4,
          imege: 'https://picsum.photos/210/118/?image=66'
        },
      ]
    }
  }
})

</script>

<style>


</style>
