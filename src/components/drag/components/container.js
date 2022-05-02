import { ref } from 'vue';

export default class Container{

  coordenadas = ref(Object);
  countelements = 0;
  temp = ''

  Container(countelements,coordenadas ){
    this.coordenadas.value = coordenadas;
    this.countelements = countelements;
  }

  onCreateElement = () => {
    var element = document.createElement('div')
    element.id = 'element_id_' + (this.countelements += 1)
    element.style.cssText = 'position:absolute;border:solid 1px;height:50px;width:200px;top:10px;';
    this.coordenadas.value[element.id] = { x: 0, y: 0 }
    return element
  }

  onStart = (e) => {
    var element = document.getElementById(e.srcElement.id)
    this.coordenadas.value[e.srcElement.id].x = e.pageX - element.offsetLeft
    this.coordenadas.value[e.srcElement.id].y = e.pageY - element.offsetTop
    this.temp = e.srcElement.id
    addEventListener('mousemove', this.onMove)
    addEventListener('mouseup', this.onEnd)
  }

  onMove = (e) => {
    var x = (e.pageX - this.coordenadas.value[this.temp].x)
    var y = (e.pageY - this.coordenadas.value[this.temp].y)
    document.getElementById(this.temp).style.cssText = 'position:absolute;border:solid 1px;height:50px;width:200px;' + 'top:' + y + 'px;left:' + x + 'px;';
  }

  onEnd = () => {
    removeEventListener("mousemove", this.onMove);
    removeEventListener("mouseup", this.onEnd);
  }
}