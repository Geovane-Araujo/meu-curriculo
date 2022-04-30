import InputText from 'primevue/inputtext'
import InputFilled from '../components/input-filled/InputFilled.vue'
export default {
  setup () {
    var form = {
      login: ''
    }
    return { form }
  }, 
  components: {
    InputText,
    InputFilled
  }
}
