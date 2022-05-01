import { onMounted, toRefs, ref } from 'vue'

export default {
  name: 'SideMenu',
  props: {
    butons: {
      type: Array,
      require: false
    }
  },
  setup (props) {
    const btns = toRefs(props, 'butons')
    var buttons = ref()

    onMounted(() => {
      buttons.value = btns.butons.value
    })
    return { buttons }
  }
  // mounted() {
  //   console.log('jj')
  //   console.log(this.butons)
  // },
}
