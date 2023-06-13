import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupElemSelector, handleFormSubmit, ) {
        super(popupElemSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElem = this._popupElem.querySelector(".popup__form");
        this._inputs = Array.from(this._formElem.querySelectorAll('.popup__input'));
    }

    open() {
        super.open();
    }

    close() {
        super.close();
        this._formElem.reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElem.addEventListener("submit", (evt) => {
            evt.preventDefault();
            const inputValues = this._getInputValues();
            this._handleFormSubmit(inputValues)
            // this.close();
        });
    }

    // getValue(cardId) {
    //     return cardId
    // }

    _getInputValues() {
        const inputValues = {};
        this._inputs.forEach((item) => {
            inputValues[item.name] = item.value;
        });
        return inputValues;
    }
}