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
        <div class="aria-design" id="area-design">
          <div id="drg" ref="drg" class="page-body-drag"></div>
        </div>
        <div class="aria-components" ref="mnuproperties">
          <div class="aria-components-header">
            <div class="aria-components-header-btn" id="ref-btn">
              <div @click="onCollapsed()" class="ui-person-button ui-button">
                <i ref="iconbtn" id="icon-btn" class="pi pi-chevron-right"></i>
              </div>
            </div>
            <div class="aria-components-header-title" id="ref-title">
              Propriedades
            </div>
          </div>
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
