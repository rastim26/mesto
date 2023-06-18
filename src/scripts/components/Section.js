export default class Section {
  constructor(data, containerSelector) {
    this._containerElem = document.querySelector(containerSelector);
    this._items = data.items;
    this._renderer = data.renderer;
  }

  renderer = (cardElem) => {
    this._containerElem.append(cardElem);
  }

  addItem = (cardElem) => {
    this._containerElem.prepend(cardElem);
  }
}