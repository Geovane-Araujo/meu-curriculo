import InputText from 'primevue/inputtext'
import { ref } from 'vue'
import Button from 'primevue/button';
import Register from '@/classes/Register';
export default {
  
  setup () {
    var form = ref(new Register())
    let confirmCode = ref(false)
    let registre = ref(true)

    function onRegister(){
      confirmCode.value = true
      registre.value = false
    }

    return { form, confirmCode, registre, onRegister }
  }, 
  components: {
    InputText,
    Button
  }
}
