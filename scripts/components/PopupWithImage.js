import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupElemSelector) {
        super(popupElemSelector);
        this._popupElem = document.querySelector(popupElemSelector);
        this._pictureElem = this._popupElem.querySelector(".image-popup__image");
        this._pictureDescriptionElem = this._popupElem.querySelector(".image-popup__descr");
    }
    open = (name, link) => {
        this._pictureElem.src = link;
        this._pictureElem.alt = name;
        this._pictureDescriptionElem.textContent = name;
        super.open();

        //нужно вставлять в попап картинку с src изображения и подписью к картинке
    }
}