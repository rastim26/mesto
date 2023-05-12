import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor (popupSelector, handleSubmit) {

    }

    _getInputValues () {
        // собирает данные всех полей формы.

    }

    setEventListeners () {
        //  добавлять обработчик клика иконке закрытия
        // добавлять обработчик сабмита формы
    }

    close () {
        //  при закрытии попапа форма должна ещё и сбрасываться.

    }
}

// Для каждого попапа создавайте свой экземпляр класса PopupWithForm .