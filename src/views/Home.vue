<template>
  <div class="home">
    <div class="top-bar">
      <h2>The<span class="chat-logo-title">Chat</span></h2>
      <b-button v-on:click="logOut" class="logout-btn"  outlined>Logout</b-button>
    </div>
    <hr class="line-separator">
    <div class="d-body">
      <h1 class="title hello-title">Hello, {{nickname}}</h1>

      <h1 class="title is-4 online-title">Online users</h1>

      <div>
        <div v-for="user in onlineUsers" v-bind:key="user.key">
          <UserBox v-bind:user="user"></UserBox>
        </div>
      </div>
    </div>

    
    
  </div>
</template>

<script>
// @ is an alias to /src
import UserBox from "../components/UserBox"

export default {
  name: 'Home',
  components: {
    UserBox,
  },
  data: function(){
    return {

    }
  },
  computed:{
    nickname: function(){
      return this.$store.state.nickname;
    },
    onlineUsers: function(){
      return [
        {name:"Denys"}
      ]
    }
  },
  methods:{
    logOut: function(){
      this.$cookie.delete("Token");
      this.$router.push("/signin");
    }
  }
}
</script>


<style scoped>
*{
  margin: 0px;
  padding: 0px;
}

.home{
  padding: 20px;
  background-color: #9AC7FE;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.chat-logo-title{
    color:#FF5E5E;
}

h2{
    font-size: 60px;
    font-weight: 200;
    color: white;
}

.top-bar{
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: blue; */
}

.logout-btn{
  margin-left: auto;
}

.hello-title{
  margin-top: 20px;
}
.d-body{
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 10px;
}

.online-title{
  color: #FF5D5D;
}
</style>