<template>
  <div class="style">
    <div class="mask">
      <router-view/>
    </div>
  </div>

</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
html {
    font-size: 16px;
}

body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Ubuntu', sans-serif;
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
.mask{
  height: 100vh;
  width: 100vw;
  background-color: rgba($color: #ffffff, $alpha: 0.3);
}
</style>
