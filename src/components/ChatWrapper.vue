<template>
    <div class="wrapper">
        <div class="room-top-bar">
            <div class="pic-and-title">
                <div class="img-wrapper">
                    <img class="room-img" src="../assets/main.png">
                </div>
                <h1 class="title is-4 room-name">Main room</h1>
            </div>
            <hr class="line-separator">
            <div class="messages-wrapper">
                <div v-for="message in messages" v-bind:key="message.key">
                    <Message v-bind:message="message"></Message>
                    <div class="sized-box"></div>
                </div>
            </div>
            <div class="sized-box"></div>
            <div class="input-wrapper">
                <ChatInput></ChatInput>
            </div>
        </div>
    </div>
</template>

<script>
import ChatInput from "./ChatInput"
import Message from "./Message"

export default {
    components:{
        ChatInput,
        Message,
    },
    updated: function(){
        console.log(this.messages);
    },
    computed: {
        messages: function(){
            return this.$store.state.mainRoomMessages;
        },
    },
    methods: {
    }
}
</script>

<style scoped>
.wrapper{
    background-color: white;
    padding: 10px;
    border-radius: 20px;
    width: 1500px;
}

.room-top-bar{
    /* background-color: grey; */
}

.pic-and-title{
    display: flex;
    align-items: center;
}

.img-wrapper{
    background-color: white;
    border-radius: 360px;
    padding: 5px;
}

.room-img{
    border-radius: 300px;
    height: 60px;
}

.line-separator{
    background-color: rgb(168, 64, 64);
    margin-top: 0;
}

.room-name{
    margin-left: 10px;
}

.input-wrapper{
    padding: 10px;
    /* background-color: grey; */
    /* width: 100px; */
}

.messages-wrapper{
    /* background-color: rgb(84, 216, 84); */
    height: 500px;
    border-radius: 10px;
    border: solid;
    border-width: 1px;
    border-color: grey;
    padding: 30px;
}

.sized-box{
    margin-top: 15px;
}
</style>