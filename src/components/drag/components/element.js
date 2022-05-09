export default class WCElement{

  countelements = 1;

  onCreateElement = (componentProperties, height, width ) => {
    var element = document.createElement('div');
    element.id = 'element_id_' + (this.countelements += 1);
    componentProperties.id = element.id;
    componentProperties.height = height;
    componentProperties.width = width;
    element.style.cssText = componentProperties.toCss();
    element.className = ' wc';
    this.onAddSizedConfiguration(element);
    return element;
  }

  onAddSizedConfiguration(element){
    // cria os elementos de borda
    var internalElementTopLeft = document.createElement('div');
    var internalElementTopRigth = document.createElement('div');
    var internalElementBottonLeft = document.createElement('div');
    var internalElementBottonRigth = document.createElement('div');

    // adiciona a classe de borda
    internalElementTopLeft.classList.add('square-size');
    internalElementTopLeft.classList.add('square-size-top-left');

    internalElementTopRigth.classList.add('square-size');
    internalElementTopRigth.classList.add('square-size-top-right');

    internalElementBottonLeft.classList.add('square-size');
    internalElementBottonLeft.classList.add('square-size-bottom-left');

    internalElementBottonRigth.classList.add('square-size');
    internalElementBottonRigth.classList.add('square-size-bottom-rigth');

    element.appendChild(internalElementTopLeft);
    element.appendChild(internalElementTopRigth);
    element.appendChild(internalElementBottonLeft);
    element.appendChild(internalElementBottonRigth);

  }
  

  onApplyCssElement(){
    var cssText = ' .wc{\n';

    cssText += '  position:absolute;\n';

    cssText += 'border:solid 1px;\n';

    cssText += '\n} ';

    var styletag = document.createElement('style');
    if(styletag.styleSheet){
      styletag.styleSheet.cssText = cssText;
    } else {
      styletag.appendChild(document.createTextNode(cssText));
    }
    document.getElementsByTagName('head')[0].appendChild(styletag);
    
    return 'wc';
  }
}