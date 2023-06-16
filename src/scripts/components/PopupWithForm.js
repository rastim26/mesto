import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupElemSelector, handleFormSubmit) {
        super(popupElemSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElem = this._popupElem.querySelector(".popup__form");
        this._buttonElem = this._popupElem.querySelector(".popup__button");
        this._inputs = Array.from(this._formElem.querySelectorAll('.popup__input'));
        this._buttonElemValue = this._buttonElem.textContent;
    }

    open() {
        super.open();
    }

    close() {
        super.close();
        this._formElem.reset();
    }

    _loading() {
        this._buttonElem.textContent = "Сохранение...";
    } 

    setEventListeners() {
        super.setEventListeners();
        this._formElem.addEventListener("submit", (evt) => {
            evt.preventDefault();
            const inputValues = this._getInputValues();
            this._loading();
            this._handleFormSubmit(inputValues)
            .then(() => {
                this.close();
                this._buttonElem.textContent = this._buttonElemValue;
            })
        });

    }

    _getInputValues() {
        const inputValues = {};
        this._inputs.forEach((item) => {
            inputValues[item.name] = item.value;
        });
        return inputValues;
    }
}