<template>
  <div class="home">
    <SideMenu/>
  </div>
</template>

<script>
import SideMenu from '@/components/menu/Menu.vue'
import DragComponent from '@/components/drag/Drag.vue'

export default {
  name: 'HomeView',
  components: {
    DragComponent,
    SideMenu
  }
}
</script>
