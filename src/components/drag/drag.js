import { onMounted, ref } from 'vue'

export default {
  name: 'DragComponent',
  setup () {
    let drg = ref(null)
    let temp = ''
    let coordenadas = ref(Object)
    var countelements = 0
    onMounted(() => {
    })
    const onClick = () => {
      var element = onCreateElement()
      drg.value.appendChild(element)
      element.addEventListener('mousedown', onStart)
    }
    const onCreateElement = () => {
      var element = document.createElement('div')
      element.id = 'element_id_' + (countelements += 1)
      element.style.cssText = 'position:absolute;border:solid 1px;height:50px;width:200px;top:10px;';
      coordenadas.value[element.id] = { x: 0, y: 0 }
      
      return element
    }
    const onStart = (e) => {
      var element = document.getElementById(e.srcElement.id)
      coordenadas.value[e.srcElement.id].x = e.pageX - element.offsetLeft
      coordenadas.value[e.srcElement.id].y = e.pageY - element.offsetTop
      temp = e.srcElement.id
      addEventListener('mousemove', onMove)
      addEventListener('mouseup', onEnd)
    }
    const onMove = (e) => {
      var x = (e.pageX - coordenadas.value[temp].x)
      var y = (e.pageY - coordenadas.value[temp].y)
      document.getElementById(temp).style.cssText = 'position:absolute;border:solid 1px;height:50px;width:200px;' + 'top:' + y + 'px;left:' + x + 'px;';
    }
    const onEnd = () => {
      removeEventListener("mousemove", onMove);
      removeEventListener("mouseup", onEnd);
    }
    return { onClick, drg }
  }
}
