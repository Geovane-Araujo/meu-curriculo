import { ref } from 'vue';

export default class Container{

  coordenadas = ref(Object);
  countelements = 0;
  temp = ''
  tempStyleModel = ref(null);

  Container(countelements,coordenadas ){
    this.coordenadas.value = coordenadas;
    this.countelements = countelements;
  }

  onCreateElement = (componentProperties) => {
    var element = document.createElement('div')
    element.id = 'element_id_' + (this.countelements += 1)
    componentProperties.id = element.id;
    componentProperties.height = 50;
    componentProperties.width = 200;
    this.tempStyleModel.value = componentProperties;
    element.style.cssText = componentProperties.toCss();
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
    var styleCss = this.tempStyleModel.value;
    styleCss.id = this.temp;
    styleCss.onGetCss(document.getElementById(this.temp),y ,x);
    document.getElementById(this.temp).className = styleCss.toStyleSheet();
  }

  onEnd = () => {
    removeEventListener("mousemove", this.onMove);
    removeEventListener("mouseup", this.onEnd);
  }
}