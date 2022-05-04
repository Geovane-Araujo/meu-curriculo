import { ref } from 'vue';
import StyleModel from './styleModel';

export default class Line{

  coordenadas = ref(Object);
  countelements = 0;
  temp = ''

  Line(countelements,coordenadas ){
    this.coordenadas.value = coordenadas;
    this.countelements = countelements;
  }

  onCreateElement = () => {
    var element = document.createElement('hr')
    element.id = 'element_id_' + (this.countelements += 1)
    var styleCss = new StyleModel();
    // default
    styleCss.height = 2;
    styleCss.width = 200;
    styleCss.top = 10;
    element.style.cssText = styleCss.toCss();
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
    var styleCss = new StyleModel();
    styleCss.onGetCss(document.getElementById(this.temp),y ,x);
    document.getElementById(this.temp).style.cssText = styleCss.toCss();
  }

  onEnd = () => {
    removeEventListener("mousemove", this.onMove);
    removeEventListener("mouseup", this.onEnd);
  }
}