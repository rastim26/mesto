export default class Popup {
    constructor(popupElemSelector) {
        this._popupElem = document.querySelector(popupElemSelector);
        this._closeButtonElem = this._popupElem.querySelector(".popup__close");
    }

    open() {
        this._popupElem.classList.add("popup_open");
    }

    close() {
        this._popupElem.classList.remove("popup_open");
    }

    setEventListeners() {
        this._closeButtonElem.addEventListener("click", this._handleXClose);
        this._popupElem.addEventListener("click", this._handleOverlayClose);
        document.addEventListener("keydown", this._handleEscClose); //--
    }

    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    _handleOverlayClose = (evt) => {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    }

    _handleXClose = () => {
        this.close();
    }
}