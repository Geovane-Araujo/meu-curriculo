<template>
  <div class="style">
    <router-view/>
  </div>

</template>

<style lang="scss">
html {
    font-size: 13px;
}

body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.style {
  height: 100vh;
  width: 100vw;
  background-image: url('./assets/img/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  backdrop-filter: blur(22px);
}
</style>
