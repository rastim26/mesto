import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor (popupElemSelector, handleFormSubmit) {
        super(popupElemSelector);
        this._popupElem = document.querySelector(popupElemSelector);
        this._nameInputElem = this._popupElem.querySelector("#name");
        this._jobInputElem = this._popupElem.querySelector("#job");

        this._handleFormSubmit = handleFormSubmit;
    }
    

    _getInputValues () {
        // собирает данные всех полей формы.
        this._handleFormSubmit(this._nameInputElem.value, this._jobInputElem.value);

    }

    setEventListeners () {

        //  добавлять обработчик клика иконке закрытия
        // добавлять обработчик сабмита формы
    }

    close () {
        //  при закрытии попапа форма должна ещё и сбрасываться.
        super.close()
    }
}

// Для каждого попапа создавайте свой экземпляр класса PopupWithForm .