<template>
  <div class="home">
    <div class="top-bar">
      <h2>The<span class="chat-logo-title">Chat</span></h2>
      <b-button v-on:click="logOut" class="logout-btn"  outlined>Logout</b-button>
    </div>
    <hr class="line-separator">
    <div class="chat-users-wrapper">
      <div class="d-body">
        <h1 class="title hello-title">Hello, {{user.nickname}}</h1>

        <h1 class="title is-4 online-title">Online users</h1>

        <div>
          <div v-for="onlineUser in onlineUsers" v-bind:key="onlineUser.key">
         
          <UserBox v-if="onlineUser.id !== user.id" v-bind:user="onlineUser"></UserBox>
          <div class="sized-box"></div>
          </div>
        </div>
      </div>
      <div class="chat-wrapper">
        <ChatWrapper></ChatWrapper>
      </div>
      
    </div>
    

    
    
  </div>
</template>

<script>
// @ is an alias to /src
import UserBox from "../components/UserBox"
import ChatWrapper from "../components/ChatWrapper"

export default {
  name: 'Home',
  components: {
    UserBox,
    ChatWrapper,
  },
  data: function(){
    return {

    }
  },
  computed:{
    user: function (){
      return this.$store.getters.getUser;
    },
    nickname: function(){
      return this.$store.state.user.nickname;
    },
    onlineUsers: function(){
      return this.$store.state.onlineUsers;
    }
  },
  created: function(){
    this.$store.dispatch("setWs");
    this.$store.dispatch("getOnlineUsers");
  },
  methods:{
    logOut: function(){
      this.$cookie.delete("Token");
      this.$store.commit("closeWs");
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
  min-height: 100vh;
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

.chat-users-wrapper{
  display: flex;
  flex-direction: row;
}

.chat-wrapper{
  padding: 10px;
  margin-top: 20px;
  /* max-height: 100vh; */
  /* background-color: black; */
}

.sized-box{
  height: 10px;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .hello-title{
    display: none;
  }
  .chat-users-wrapper{
    flex-direction: column-reverse;
    align-items: center;
  }

  .home{
    height: 100%;
  }

  .chat-wrapper{

  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 400px) {
    .wrapper{
        width: 350px;
    }

    .home{
    height: 100%;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

}


/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 900px) {
    .wrapper{
        width: 800px;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1500px) {
    .wrapper{
        width: 1300px;
    }
}

</style>