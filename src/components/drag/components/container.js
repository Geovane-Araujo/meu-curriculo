import { ref } from 'vue';
import WCElement from './element';

export default class Container{

  coordenadas = ref(Object);
  countelements = 0;
  temp = ''
  tempStyleModel = ref(null);
  el = new WCElement();

  Container(countelements,coordenadas ){
    this.coordenadas.value = coordenadas;
    this.countelements = countelements;
  }

  onCreateElement = (componentProperties) => {
    var element = this.el.onCreateElement(componentProperties, 50, 200)
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
    document.getElementById(this.temp).style.cssText = styleCss.toCss();
  }

  onEnd = () => {
    removeEventListener("mousemove", this.onMove);
    removeEventListener("mouseup", this.onEnd);
  }
}