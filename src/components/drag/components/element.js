export default class WCElement{

  countelements = 1;

  onCreateElement = (componentProperties, height, width ) => {
    var element = document.createElement('div')
    element.id = 'element_id_' + (this.countelements += 1)
    componentProperties.id = element.id;
    componentProperties.height = height;
    componentProperties.width = width;
    element.style.cssText = componentProperties.toCss();
    element.className = ' wc'
    return element
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