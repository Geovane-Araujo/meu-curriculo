<template>
  <div class="ui-menu">
    <div class="ui-header">
      <div class="ui-sec-logo">
        Logo
      </div>
      <div class="ui-sec-botoes">
        botoes
      </div>
    </div>
    <div class="ui-body">
      <div class="ui-side">
        <div v-for="menu in buttons" :key="menu.label" class="ui-side-butons">
          <div class="ui-side-butons-btn">
            <i :class="menu.icon" ></i>
          </div>
        </div>
      </div>
      <div class="ui-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script src="./menu.js">
</script>

<style lang="scss" scoped>
@import './menu.scss';
</style>