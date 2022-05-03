export default class StyleModel{
  width = new String('')
  height = new String('')
  top = new String('')
  left = new String('')
  position = new String('absolute')
  border = new String('solid ')
  border_size = new String('1px')

  toString(){
    return 'position:' + this.position +
           ';border:' + this.border + this.border_size +
           ';height:' + this.height + 'px;' +
           'width:' + this.width + ';' +
           'height:' + this.height + ';' +
           'top:' + this.top + ';' +
           'lef:' + this.left + ';'
  }
}