import Element from './Element.js'

export default class Image extends Element {
  constructor(options) {
    super('img', options)
  }
  setOptions(options) {
    super.setOptions(options)
    if (options?.imgSrc) this.getElement().src = options.imgSrc
  }
}
