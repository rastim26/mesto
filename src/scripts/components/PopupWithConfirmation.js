import PopupWithForm from './PopupWithForm.js';

export default class PopupWithConfirmation extends PopupWithForm {
  constructor(popupElemSelector) {
    super(popupElemSelector);
  }

  open(onSubmit) {
    super.open();
    this._handleFormSubmit = onSubmit;
  }
}