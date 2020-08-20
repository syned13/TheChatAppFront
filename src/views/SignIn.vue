<template>
<div class="d-container">
    <div class="signin-container">
        <h2>
            The<span class="chat-logo-title">Chat</span>
        </h2>
        <b-input v-model="nickname" class="nickname-input" placeholder="Nickname"></b-input>
        <b-button  v-on:click="enterChat" class="enter-btn" type="is-success">Enter chat</b-button>
    </div>
    
</div>
    
</template>

<script>
export default {
    data: function(){
        return {
            nickname: "",
        }
    },
    methods: {
        enterChat: function(){
            this.$cookie.set("Token", "d", 1);
            this.$store.commit("setNickname", this.nickname);
            this.$router.push("/");
        }
    }
}
</script>


<style scoped>

.chat-logo-title{
    color:#FF5E5E;
}

h2{
    font-size: 60px;
    font-weight: 200;
    color: white;
}

.d-container{
    background-color: #9AC7FE;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.signin-container{
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #ABCDFF;
    height: 350px;
    width: 600px;
    padding: 30px;

    border-radius: 30px;
    box-shadow:
        0 2.5px 11.4px rgba(0, 0, 0, 0.066),
        0 7px 22px rgba(0, 0, 0, 0.095),
        0 16.9px 35.5px rgba(0, 0, 0, 0.124),
        0 56px 87px rgba(0, 0, 0, 0.19)
        ;
}

.nickname-input{
    height: 40px;
    margin-top: 20px;
    width: 200px;
    font-size: 15px;
}


.enter-btn{
    border-radius: 20px;
    border: none;
    padding: 10px;
    width: 150px;

    margin-top: 20px;
    color: white;
    background-color: #30CAAD;
    cursor: pointer;

    box-shadow:
        0 2.5px 11.4px rgba(0, 0, 0, 0.066),
        0 7px 22px rgba(0, 0, 0, 0.095),
        0 16.9px 35.5px rgba(0, 0, 0, 0.124),
        0 56px 87px rgba(0, 0, 0, 0.19)
        ;

    transition: 0.3s;
}

.enter-btn:hover{
    background-color: #177060;
}

.enter-btn:focus{
    outline: none;
}
</style>