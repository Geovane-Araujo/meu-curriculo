export default class StyleModel{
  width = ''
  height = ''
  top = ''
  left = ''
  position = 'absolute'
  border = 'solid '
  contain_border = true
  border_size = '1'
  default = ''

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
}