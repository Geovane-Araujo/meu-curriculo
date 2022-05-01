<template>
  <div class="home">
    <SideMenu :butons="menu"/>
  </div>
</template>

<script>
import SideMenu from '@/components/menu/Menu.vue'
import DragComponent from '@/components/drag/Drag.vue'
import Menu from "@/classes/Menu"
import { onMounted } from '@vue/runtime-core'

export default {
  name: 'HomeView',
  setup () {
    var menu = new Array()

    onMounted(() => {
      onMountedMenu()
    })
    function onMountedMenu() {
      var dashBoard = new Menu()
      dashBoard.label = 'Dashboard'
      dashBoard.icon = 'mc mc-dashboard'
      dashBoard.route = 'dash'
      menu.push(dashBoard)

      var userData = new Menu()
      userData.label = 'Dados do Usuário'
      userData.icon = 'mc mc-person-outline-white'
      userData.route = 'userdata'
      menu.push(userData)

      var curriculum = new Menu()
      curriculum.label = 'Modelos de Curriculos'
      curriculum.icon = 'mc mc-curriculo'
      curriculum.route = 'curriculummodel'
      menu.push(curriculum)

      var estudio = new Menu()
      estudio.label = 'Curriculo Estudio'
      estudio.icon = 'mc mc-curriculo-estudio'
      estudio.route = 'curriculumstudio'
      menu.push(estudio)

    }
    return { menu }
  },
  components: {
    DragComponent,
    SideMenu
  }
}
</script>
