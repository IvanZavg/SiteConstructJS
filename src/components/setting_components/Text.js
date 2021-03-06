import { SettingBlock } from './classes/SettingBlock.js'

export class Text extends SettingBlock {
  #label
  #textArea

  constructor(value) {
    super('text')
    this.#label = document.createElement('label')
    this.#textArea = document.createElement('textarea')
    this.#reneder()
    if (value) this.setValue(value)
  }

  #reneder() {
    this.#label.htmlFor = 'option-text'
    this.#label.className = 'form-label'
    this.#label.textContent = 'Text'

    this.#textArea.className = 'form-control'
    this.#textArea.id = 'option-text'
    this.#textArea.rows = 5

    this.#label.append(this.#textArea)
    this.containerAppend(this.#label)
  }

  setValue(value) {
    this.#textArea.value = value
  }

  getValue() {
    return this.#textArea.value
  }
}
