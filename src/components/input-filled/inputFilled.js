import { toRefs } from 'vue'

export default {
  name: 'InputFilled',
  setup (props) {
    var val = toRefs('value', props)
    const onEmitInput = () => {
      this.$emit('input', this.val)
    }
    return { val, onEmitInput }
  }
}