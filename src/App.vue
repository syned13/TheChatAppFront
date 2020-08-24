<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box; /*If you set box-sizing: border-box; on an element, padding and border are included in the width and height:*/
}

#app {
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400&display=swap');

  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
</style>

<script>
export default {
  computed: {
    errorMessage: function(){
      return this.$store.state.errorMessage;
    }
  },
  methods: {
    clearErrorMessage: function(){
      this.$store.commit("setErrorMessage", "");
    }
  },
  watch: {
    errorMessage: function(val){
      if(val !== ""){
        this.$buefy.dialog.alert({
                    title: 'Error',
                    message: val,
                    type: 'is-danger',
                    ariaRole: 'alertdialog',
                    ariaModal: true,
                    onCancel: this.clearErrorMessage()
                })
      }
    }
  }
}
</script>