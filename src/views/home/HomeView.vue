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
      dashBoard.route = 'Dash'
      menu.push(dashBoard)

      var estudio = new Menu()
      estudio.label = 'Estudio'
      estudio.icon = 'mc mc-dashboard'
      estudio.route = 'Dash'
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
