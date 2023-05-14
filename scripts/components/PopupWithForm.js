import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor (popupElemSelector, handleFormSubmit) {
        super(popupElemSelector);
        this._popupElem = document.querySelector(popupElemSelector);
        this._formElem =  this._popupElem.querySelector(".popup__form");
        this._handleFormSubmit = handleFormSubmit;
    }

    close () {
        super.close();
        this._formElem.reset();     //  при закрытии попапа форма должна ещё и сбрасываться.
    }

    setEventListeners () {
        super.setEventListeners();  
        //  добавлять обработчик клика иконке закрытия
        this._formElem.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._getInputValues();
            this._handleFormSubmit(this._nameInputValue, this._jobInputValue);
            
            this.close();
        }); // добавлять обработчик сабмита формы
    }

    _getInputValues () {
        // собирает данные всех полей формы.
        this._nameInputValue = this._popupElem.querySelector("#name").value;
        this._jobInputValue = this._popupElem.querySelector("#job").value;
    }
}   

// Для каждого попапа создавайте свой экземпляр класса PopupWithForm .