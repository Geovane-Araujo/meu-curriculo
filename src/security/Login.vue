<template>
  <div class="login">
    <div class="container-center">
      <div class="container-body-fields">
        <div class="body-fields p-input-filled">
          <InputFilled v-model="form.login" />
        </div>
      </div>
      <div class="body-logo">
      </div>
    </div>
  </div>
</template>

<script src="./login.js">
</script>

<style lang="scss" scoped>
@import './login.scss'
</style>