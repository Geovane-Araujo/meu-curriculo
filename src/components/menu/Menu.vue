<template>
  <div class="ui-menu">
    <div class="ui-header">
      <div class="ui-sec">
        <div class="ui-sec-logo">
          Logo
        </div>
        <div class="ui-sec-title">
          {{ title }}
        </div>
      </div>
      <div class="ui-sec-botoes">
        <div class="ui-person-button ui-button">
          <i class="mc-6 mc-mail-black"></i>
        </div>
        <div class="ui-person-button ui-button">
          <i class="mc-6 mc-person-outline-black"></i>
        </div>
      </div>
    </div>
    <div class="ui-body">
      <div class="ui-side">
        <div @click="onRoute(menu.route, menu.label)" v-for="menu in buttons" :key="menu.label" class="ui-side-butons">
          <div v-tooltip.right="menu.label"  class="ui-side-butons-btn">
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