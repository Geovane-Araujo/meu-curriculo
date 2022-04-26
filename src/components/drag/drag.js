import { onMounted, ref } from 'vue'

export default {
  name: 'DragComponent',
  setup () {
    let drg = ref(null)
    let roll = []
    let coordenadas = ref(Object)
    var countelements = 0
    onMounted(() => {
    })
    const onClick = () => {
      drg.value.appendChild(onCreateElement())
    }
    const onCreateElement = () => {
      var element = document.createElement('div')
      element.id = 'element_id_' + (countelements += 1)
      element.style.cssText = 'position:absolute;border:solid 1px;height:50px;width:200px';
      var coord = {
        x: 0,
        y: 0
      }
      coordenadas.value[element.id] = coord
      element.addEventListener('mousedown', onStart)
      return element
    }
    const onStart = (e) => {
      coordenadas.value[e.srcElement.id].x = e.pageX - document.getElementById(e.srcElement.id).offsetLeft
      coordenadas.value[e.srcElement.id].y = e.pageY - document.getElementById(e.srcElement.id).offsetTop
      var element = document.getElementById(e.srcElement.id)

      element.addEventListener('mousemove', onMove(e,e.srcElement.id))
      element.addEventListener('mouseup', onEnd(e,e.srcElement.id))
    }
    const onMove = (e, id) => {
      document.getElementById(id).style.left = (e.pageX - coordenadas.value[e.srcElement.id].x) + 'px'
      document.getElementById(id).style.top = (e.pageY - coordenadas.value[e.srcElement.id].y) + 'px'
    }
    const onEnd = (e, id) => {
      document.getElementById(id).removeEventListener("mousemove", onMove);
      document.getElementById(id).removeEventListener("mouseup", onEnd);
    }
    return { onClick, drg }
  }
}
