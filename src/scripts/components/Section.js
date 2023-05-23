export default class Section {
    constructor(data, containerSelector) {
        this._containerElem = document.querySelector(containerSelector);
        this._items = data.items;
        this._renderer = data.renderer;
    }

    renderer = () => {
        this._items.forEach((item) => {
            const cardElem = this._renderer(item);
            this.addItem(cardElem);
        });
    }

    addItem = (cardElem) => {
        this._containerElem.prepend(cardElem);
    }
}