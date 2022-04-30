<template>
  <div class="login">
    <div class="container-center">
      <div class="container-body-fields">
        <div class="body-fields">
          <span v-show="registre" class="margin-login p-float-label col-6">
            <InputText id="username-login" aria-placeholder="dsd" type="text" class="p-input-filled col-12" v-model="form.login" />
            <label style="color:#ffffff" for="username-login">Email</label>
          </span>
          <span v-show="registre" class="margin-login p-float-label col-6">
            <InputText id="username-login" aria-placeholder="dsd" type="text" class="p-input-filled col-12" v-model="form.login" />
            <label style="color:#ffffff" for="username-login">Username</label>
          </span>
          <span v-show="registre" class="margin-login p-float-label col-6">
            <InputText id="username-password" type="text" class="p-input-filled col-12" v-model="form.senha" />
            <label style="color:#ffffff" for="username-password">Password</label>
          </span>
          <div v-show="confirmCode" class="ui-code col-6">
            Confirm code send email
          </div>
          <span v-show="confirmCode" class="margin-login p-float-label col-6">
            <InputText id="username-password" type="text" class="p-input-filled col-12" v-model="form.senha" />
            <label style="color:#ffffff" for="username-password">Code</label>
          </span>
          <div class="login-butons col-6">
            <Button label="Voltar" class="p-button-raised p-button-entre"/>
            <Button @click="onRegister" label="Registre-se" class="p-button-raised p-button-registre"/>
          </div>
        </div>
      </div>
      <div class="body-logo">
        <div class="body-logo-title">
          <div class="logo-text">
            WebCurriculo
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./register.js">
</script>

<style lang="scss" scoped>
@import './register.scss'
</style>