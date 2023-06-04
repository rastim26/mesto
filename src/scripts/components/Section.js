export default class Section {
    constructor(data, containerSelector, getServerCards) {
        this._containerElem = document.querySelector(containerSelector);
        this._items = data.items;
        this._renderer = data.renderer;
        this.getServerCards = getServerCards;
    }

    renderer = () => {
        this.getServerCards();
    }

    addItem = (cardElem) => {
        this._containerElem.prepend(cardElem);
    }
}