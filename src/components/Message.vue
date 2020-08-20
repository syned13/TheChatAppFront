<template>
    <div class="message-wrapper">
        <div class="avatar-wrapper">
            <img class="message-pic" src="../assets/male.png" alt="pic">
        </div>
        
        <div class="name-and-message">
            <div >
                <p class="nickname">{{sender.nickname}}</p>
            </div>
            <div>
                {{message.body}}
            </div>
           
            
        </div>
        
    </div>
</template>


<script>
export default {
    props: {
        message: Object,
    },
    computed: {
        sender: function(){
            return this.getUserFromID();
        }
    },
    methods: {
        getUserFromID: function(){
            let user;
            for(user of this.$store.getters.getOnlineUsers){
                console.log(this.message.fromID);
                console.log(this.message.fromID);
                if(user.id === this.message.fromID){
                    console.log(user);
                    return user;
                }
            }

            return undefined;
        }
    }
}
</script>

<style scoped>
.message-wrapper{
    display: flex;
    align-items: center;
}

.avatar-wrapper{
    background-color: hotpink;
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
    font-weight: 300;
}

p{
    font-weight: bold;
}
</style>