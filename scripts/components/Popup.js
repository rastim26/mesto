export default class Popup {
    constructor(popupSelector) {
        this._popupItem = document.querySelector(".popup_open");

        this._popupList = Array.from(document.querySelectorAll(".popup"));
        this._closeButtons = document.querySelectorAll(".popup__close");
    }

    open() {
        this._popupItem.classList.add("popup_open");
        document.addEventListener("keydown", closeEscPopup); //--
    }

    close() {
        this._popupItem.classList.remove("popup_open");
        document.removeEventListener("keydown", closeEscPopup); //--
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close(this._popupItem);
        }
    }

    _handleOverlayClose(evt) {
        if (evt.target === evt.currentTarget) {
            this.close(evt.currentTarget);
        }
    }

    setEventListeners() {

    }
}