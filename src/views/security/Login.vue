<template>
  <div class="login">
    <div class="container-center">
      <div class="container-body-fields">
        <div class="body-fields">
          <span class="margin-login p-float-label col-6">
            <InputText id="username-login" aria-placeholder="dsd" type="text" class="p-input-filled col-12" v-model="form.login" />
            <label style="color:#ffffff" for="username-login">Email or Username</label>
          </span>
          <span class="margin-login p-float-label col-6">
            <InputText id="username-password" type="text" class="p-input-filled col-12" v-model="form.senha" />
            <label style="color:#ffffff" for="username-password">Password</label>
          </span>
          <div class="login-butons col-6">
            <Button label="Entre" @click="onLogin" class="p-button-raised p-button-entre"/>
            <Button label="Registre-se" @click="onRegister" class="p-button-raised p-button-registre"/>
          </div>
        </div>
      </div>
      <div class="body-logo">
        <div class="body-logo-title">
          <div class="logo-text">
            WebCurriculo
          </div>
          <div class="slogan-text">
            Visando o meio ambiente, seja no inicio ou em novos rumos de sua carreira
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./login.js">
</script>

<style lang="scss" scoped>
@import './login.scss'
</style>