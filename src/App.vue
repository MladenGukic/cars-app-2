<template>
<div>
  <div class="container">
  <nav class="navbar navbar-expand-sm navbar-dark bg-light">
    <a class="navbar-brand" ><router-link class="link" to="/cars">Cars</router-link></a>
    <a class="navbar-brand" ><router-link class="link" to="/add">Add</router-link></a>
  </nav>
  <div id="app">
    <img alt="Vue logo" src="./assets/audi_PNG1764.png">
  </div>
  <router-view/>
</div>
</div>
</template>

<script>

export default {
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.link {
  color: black
}
</style>
