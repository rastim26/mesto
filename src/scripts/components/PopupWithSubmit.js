import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
    constructor(popupElemSelector, handleFormDeleteSubmit) {
        super(popupElemSelector);
        this._handleFormDeleteSubmit = handleFormDeleteSubmit;
    }

    launch() {
        
    }

    _setEventListeners() {
        this._buttonElem.addEventListener('click', () => {
            this._openDeleteCardForm();
        });
    }
}