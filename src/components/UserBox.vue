<template>
    <div class="user-box">
        <div class="ball">

        </div>
    <h4 class="subtitle is-4 user-name">
        {{hello}}
    </h4>
        
    </div>
</template>

<script>
export default {
    props: {
        user: Object
    }
}
</script>

<style scoped>
.user-box{
    display: flex;

    align-items: center;
}

.ball{
    height: 40px;
    width: 40px;

    border-radius: 20px;
    background-color:  #30CAAD;;
}

.user-name{
    margin-left: 10px;
}
</style>