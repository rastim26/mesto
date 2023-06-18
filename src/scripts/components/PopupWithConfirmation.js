import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupElemSelector, handleFormDeleteSubmit) {
    super(popupElemSelector);
    this._handleFormDeleteSubmit = handleFormDeleteSubmit;
    this._formElem = this._popupElem.querySelector(".popup__form");
    this._buttonElem = this._formElem.querySelector(".popup__button");
    this._buttonElemValue = this._buttonElem.textContent;
  }

  open(cardId, cardElem) {
    super.open();
    this._setEventListenerToButton(cardId, cardElem);
  }

  _loading() {
    this._buttonElem.textContent = "Удаление...";
  }

  _setEventListenerToButton(cardId, cardElem) {
    this._formElem.addEventListener("submit", (evt) => {
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