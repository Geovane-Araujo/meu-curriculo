<template>
  <div class="studio">
    <div class="header">
      <div class="ui-sec-logo">
        Logo
      </div>
      <div class="ui-sec-title">
        <p>Curriculo Design Studio</p>
      </div>
    </div>
    <div class="body">
      <div class="tools">
        <div v-for="item in menu" :key="item.label" @click="item.function" class="ui-side-butons">
          <div v-tooltip.right="item.label"  class="ui-side-butons-btn">
            <i :class="item.icon"></i>
          </div>
        </div>
      </div>
      <div class="body-page">
        <div class="aria-design" >
          <div id="drg" ref="drg" class="page-body-drag"></div>
        </div>
        <div class="aria-components" >
          Ola
        </div>
    </div>
  </div>
  </div>
</template>

<script src="./drag.js">
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
