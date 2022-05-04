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
          <div class="aria-components-body" ref="refBody">
            <span class="margin-default-field p-float-label col-12">
              <InputText type="text" class="p-input-filled col-12" disabled v-model="componentProperties.id"/>
              <label style="color:#ffffff" >ID</label>
            </span>
            <span class="margin-default-field p-float-label col-6">
              <InputText type="text" class="p-input-filled col-12" v-model="componentProperties.width"/>
              <label style="color:#ffffff">width</label>
            </span>
            <span class="margin-default-field p-float-label col-6">
              <InputText type="text" class="p-input-filled col-12" v-model="componentProperties.height"/>
              <label style="color:#ffffff">height</label>
            </span>
            <span class="margin-default-field p-float-label col-6">
              <InputText type="text" class="p-input-filled col-12" v-model="componentProperties.top"/>
              <label style="color:#ffffff">top</label>
            </span>
            <span class="margin-default-field p-float-label col-6">
              <InputText type="text" class="p-input-filled col-12" v-model="componentProperties.left"/>
              <label style="color:#ffffff">left</label>
            </span>
            <span class="margin-default-field p-float-label col-6">
              <InputText type="text" class="p-input-filled col-12" v-model="componentProperties.bottom"/>
              <label style="color:#ffffff">bottom</label>
            </span>
            <span class="margin-default-field p-float-label col-6">
              <InputText type="text" class="p-input-filled col-12" v-model="componentProperties.right"/>
              <label style="color:#ffffff">right</label>
            </span>
            <span class="margin-default-field p-float-label col-12">
              <InputText type="text" class="p-input-filled col-12" disabled v-model="componentProperties.border"/>
              <label style="color:#ffffff">Border</label>
            </span>
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
