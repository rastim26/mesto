import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupElemSelector, handleFormSubmit) {
        super(popupElemSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElem = this._popupElem.querySelector(".popup__form");
        this._inputs = Array.from(this._formElem.querySelectorAll('.popup__input'));
        this._inputName = this._formElem.querySelector('.popup__input_type_name');
        this._inputJob = this._formElem.querySelector('.popup__input_type_info');
    }

    open() {
        super.open();
    }

    close() {
        super.close();
        this._formElem.reset();
    }

    setInputValues(data) {
        this._inputName.value = data.name;
        this._inputJob.value = data.job;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElem.addEventListener("submit", (evt) => {
            evt.preventDefault();
            const inputValues = this._getInputValues();
            this._handleFormSubmit(inputValues);
            console.log(inputValues);
            this.close();
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