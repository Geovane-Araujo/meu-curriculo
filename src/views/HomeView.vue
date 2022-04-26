<template>
  <div class="home">
    <DragComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import DragComponent from '@/components/drag/Drag.vue'

export default {
  name: 'HomeView',
  components: {
    DragComponent
  }
}
</script>
