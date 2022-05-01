<template>
  <div class="page">
    <div class="tools">
      <div @click="onClick" class="buttons-fun config">
        Conteiner
      </div>
    </div>
    <div class="body-page">
      <div id="drg" ref="drg" class="page-body-drag">
      </div>
    </div>
  </div>
</template>

<script src="./drag.js">
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
