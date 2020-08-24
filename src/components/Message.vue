<template>
    <div class="message-wrapper">
        <div class="avatar-wrapper">
            <img class="message-pic" src="../assets/avatar.png" alt="pic">
        </div>
        
        <div class="name-and-message">
            <div >
                <p class="nickname">{{message.sender.nickname}}</p>
            </div>
            <div class="message-and-time">
                <p>{{message.body}}</p>
                <div class="msg-time">
                    {{message.receivedTime.getHours()}}:{{message.receivedTime.getMinutes()}}
                </div>
            </div>
           
            
        </div>
        
    </div>
</template>


<script>
export default {
    props: {
        message: Object,
    },
    methods: {
    
    }
}
</script>

<style scoped>
.message-wrapper{
    display: flex;
    align-items: center;
}

.avatar-wrapper{
    background-color: rgb(47, 112, 58);
    padding: 10px;
    border-radius: 360px;
    height: 60px;
}

.message-pic{
    height: 100%;
}

.name-and-message{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    align-items: flex-start;
}

.nickname{
    font-weight: 800;
}

.message-and-time{
    display: flex;
    align-items: center;
    /* background-color: red; */
}

.msg-time{
    margin-left: 5px;
    font-size: 13px;
    color: grey;
}
</style>