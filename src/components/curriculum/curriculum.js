import { ref } from 'vue'
import Button from 'primevue/button';
export default {
  name: 'ListCurriculum',
  setup () {
    var isEmpty = ref(false)
    var notEmpty = ref(true)
    return { isEmpty, notEmpty }
  },
  components: {
    Button
  }
}