import InputText from 'primevue/inputtext'
import { ref } from 'vue'
import Login from '@/classes/Login'
import Button from 'primevue/button';
import { useRouter } from 'vue-router'

export default {
  
  setup () {
    var form = ref(new Login())
    const router = useRouter()

    function onRegister() {
      router.push('register')
    }
    function onLogin() {
      sessionStorage.setItem('authenticate', 'base64')
      router.push('/')
    }
    return { form, onRegister, onLogin }
  }, 
  components: {
    InputText,
    Button
  }
}
