export default class StyleModel{
  id = ''
  width = ''
  height = ''
  top = ''
  left = ''
  bottom = ''
  right = ''
  position = 'absolute'
  border = 'solid '
  contain_border = true
  border_size = '1'
  default = ''

  // @deprecated
  toCss(){ 
    var cssText = ''
    if(this.position !== '')
      cssText += 'position:absolute;';
    if(this.border !== '' && this.contain_border)
      cssText += 'border:solid ' + this.border_size + 'px;';
    if(this.height !== '')
      cssText += 'height: ' + this.height + 'px;';
    if(this.width !== '')
      cssText += 'width:' + this.width + 'px;';
    if(this.top !== '')
      cssText += 'top:' + this.top + 'px;';
    if(this.left !== '')
      cssText += 'left:' + this.left + 'px;'

    return cssText;
  }

  toStyleSheet(){
    var cssText = ' .wc{\n';

    cssText += '  position:absolute;';

    if(this.border !== '' && this.contain_border)
      cssText += 'border:solid ' + this.border_size + 'px;';
    if(this.height !== '')
      cssText += 'height: ' + this.height + 'px;';
    if(this.width !== '')
      cssText += 'width:' + this.width + 'px;';
    if(this.top !== '')
      cssText += 'top:' + this.top + 'px;';
    if(this.left !== '')
      cssText += 'left:' + this.left + 'px;'

    cssText += '\n} ';

    cssText += this.onAddClassHover();

    var styletag = document.createElement('style');
    if(styletag.styleSheet){
      styletag.styleSheet.cssText = cssText;
    } else {
      styletag.appendChild(document.createTextNode(cssText));
    }
    document.getElementsByTagName('head')[0].appendChild(styletag);
    
    return 'wc';
  }

  onGetCss(element, top, left){
    this.border = element.style.border;
    this.height = this.onRegexNumber(element.style.height);
    this.width = this.onRegexNumber(element.style.width);
    this.left = left;
    this.top = top;
  }
  onRegexNumber(text){
    return text.replace(/\D/g,'');
  }
  onAddClassHover() {
    let hover = '.wc:hover{ border: 3px solid #0D2E75;}';
    return hover;
  }
    
}