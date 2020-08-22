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
        var container = this.$el.querySelector(".messages-wrapper");
        container.scr
        container.scrollTop = container.scrollHeight - container.clientHeight + container.scrollTop;
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
    /* width: 1000px; */
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
    /* width: 70%; */
}

.messages-wrapper{
    height: 400px;
    border-radius: 10px;
    border: solid;
    border-width: 1px;
    border-color: grey;
    padding: 30px 0 10px 10px;
    overflow-y: scroll;
}

.sized-box{
    margin-top: 15px;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .wrapper{
        width: 350px;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 400px) {
    .wrapper{
        width: 350px;
    }
}



/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 900px) {
    .wrapper{
        width: 1000px;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1500px) {
    .wrapper{
        width: 1300px;
    }
}

</style>