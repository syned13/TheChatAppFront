<template>
  <div class="home">
    <h1>This is home</h1>
    <b-button v-on:click="logOut">Logout</b-button>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  },
  methods:{
    logOut: function(){
      this.$cookie.delete("Token");
      this.$router.push("/signin");
    }
  }
}
</script>
