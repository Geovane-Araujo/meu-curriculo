<template>
  <div class="ui-card">
    <div v-show="isEmpty" class="ui-isempty">
      Não há nenhum modelo de curriculo cadastrado
    </div>
    <div v-show="notEmpty" class="ui-list">
      <div class="ui-list-item">
        <label for="">Modelo Curriculo 1</label>
        <div class="ui-btns" >
          <Button icon="pi pi-check" class="p-button-rounded p-button-outlined ui-color ui-btn"/>
          <Button icon="pi pi-check" class="p-button-rounded p-button-outlined ui-color ui-btn"/>
          <Button icon="pi pi-check" class="p-button-rounded p-button-outlined ui-color ui-btn"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./curriculum.js">
</script>

<style lang="scss" scoped>
@import './curriculum.scss';
</style>