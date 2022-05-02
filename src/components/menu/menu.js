import { onMounted, toRefs, ref } from 'vue'
import Button from 'primevue/button';
import { useRouter } from 'vue-router'

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
    const router = useRouter()
    var title = ref('')

    onMounted(() => {
      buttons.value = btns.butons.value
      if(btns.butons.value.length > 0)
        title.value = btns.butons.value[0].label
    })
    function onRoute(route, label){
      title.value = label
      router.push(route)

    }
    function toggle(event) {
      this.$refs.op.toggle(event);
    }
    return { buttons, onRoute, title, toggle }
  },
  components: {
    Button
  }
}
