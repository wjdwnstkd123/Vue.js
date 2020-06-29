<template>
  <div>
    <h1>Create a New Club</h1>

    <form @submit.prevent="createClub">
      <div class="field">
        <label>Title</label>
        <input v-model="club.title" type="text" placeholder="Input a club title" />
      </div>
      <div class="field">
        <label>Description</label>
        <input v-model="club.description" type="text" placeholder="Input a club description" />
      </div>
      <div class="field">
        <label>Administrator</label>
        <input v-model="club.administrator" type="text" placeholder="Input a club administrator" />
      </div>-

      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      club: this.createFreshClubObject()
    };
  },
  methods: {
    createClub() {
      this.$store
        .dispatch("createClub", this.club)
        .then(() => {
          this.$router.push({
            name: "clubs",
            params: { id: this.club.id }
          });
          this.club = this.createFreshClubObject();
        })
        .catch(() => {
          console.log("There was a problem creating your club");
        });
    },
    createFreshClubObject() {
      const id = Math.floor(Math.random() * 10000000);
      return {
        id: id,
        title: "",
        description: "",
        administrator: ""
      };
    }
  }
};
</script>

<style scoped>
.field{
    margin-bottom: 24px;
}
</style>