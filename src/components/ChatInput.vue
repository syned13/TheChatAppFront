<template>
    <div class="chat-input-wrapper">
        <b-input class="chat-input"  placeholder="Enter your message" v-model="message"></b-input>
        <b-button class="send-message-btn" v-on:click="sendMessage">Send message</b-button>
    </div>
</template>

<script>
export default {
    computed: {
        message: {
            get(){
                return this.$store.state.currentMessage;
            },
            set(value){
                this.$store.commit("setCurrentMessage", value);
            }
        }
    },
    methods: {
        sendMessage: function(){
            // TODO: handle error
            this.$store.dispatch("sendChatMessage");
            this.message = "";
        }
    }
}
</script>

<style scoped>
.chat-input-wrapper{
    display: flex;
    flex-direction: row;
    /* background-color: grey; */
}
.chat-input{
    width: 700px;
}

.send-message-btn{
    margin-left: 10px;
}
</style>