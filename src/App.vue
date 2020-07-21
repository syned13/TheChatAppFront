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
  color: #2c3e50;
}
</style>
