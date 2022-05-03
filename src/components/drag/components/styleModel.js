export default class StyleModel{
  width = new String('')
  height = new String('')
  top = new String('')
  left = new String('')
  position = new String('absolute')
  border = new String('solid ')
  contain_border = new Boolean(true)
  border_size = new String('1')

  toString(){
    var cssText = ''
    if(this.position !== '')
      cssText = 'position:' + this.position + 'px;';
    if(this.border !== '' && this.contain_border)
      cssText = 'border: solid ' + this.border_size + ' px;';
    if(this.height !== '')
      cssText = 'height: ' + this.height + ' px;';
    if(this.width !== '')
      cssText = 'width: ' + this.width + ' px;';
    if(this.top !== '')
      cssText = 'top: ' + this.top + ' px;';
    if(this.left !== '')
      cssText = 'left: ' + this.left + ' px;'

    return cssText;
  }
}