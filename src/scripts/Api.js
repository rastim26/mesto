import { authorizationData } from "./utils/authorizationConfig.js";

class Api {
    constructor(authorizationData) {
        this._cohort = authorizationData.cohort;
        this._token = authorizationData.token;
    }

    getInitialCards = () => {
        return fetch(`https://mesto.nomoreparties.co/v1/${this._cohort}/cards`, {
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    addNewCard = ({ name, link }) => {
        return fetch(`https://mesto.nomoreparties.co/v1/${this._cohort}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, link })
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    deleteCard = (cardId) => {
        return fetch(`https://mesto.nomoreparties.co/v1/${this._cohort}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    patchUserInfo = ({ name, about }) => {
        return fetch(`https://mesto.nomoreparties.co/v1/${this._cohort}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, about })
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    getUserInfo = () => {
        return fetch(`https://mesto.nomoreparties.co/v1/${this._cohort}/users/me`, {
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }


}

export const api = new Api(authorizationData);