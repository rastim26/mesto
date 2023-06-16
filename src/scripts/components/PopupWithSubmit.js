import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
    constructor(popupElemSelector, handleFormDeleteSubmit) {
        super(popupElemSelector);
        this._handleFormDeleteSubmit = handleFormDeleteSubmit;
        this._buttonElem = this._popupElem.querySelector(".popup__button");
        this._buttonElemValue = this._buttonElem.textContent;
    }

    open(cardId, cardElem) {
        super.open();
        this._setToButtonEventListener(cardId, cardElem);
    }

    _loading() {
        this._buttonElem.textContent = "Удаление...";
    } 

    _setToButtonEventListener(cardId, cardElem) {
        this._buttonElem.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._loading();
            this._handleFormDeleteSubmit(cardId, cardElem)
            .then(() => {
                super.close();
                this._buttonElem.textContent = this._buttonElemValue;
            })
        });
    }
}