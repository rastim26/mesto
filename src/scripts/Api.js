class Api {
    constructor(host, cohort, token) {
        this._host = host;
        this._cohort = cohort;
        this._token = token;
    }

    getInitialCards = () => {
        return fetch(`https://${this._host}/${this._cohort}/cards`, {
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
        return fetch(`https://${this._host}/${this._cohort}/cards`, {
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
        return fetch(`https://${this._host}/${this._cohort}/cards/${cardId}`, {
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
        return fetch(`https://${this._host}/${this._cohort}/users/me`, {
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
        return fetch(`https://${this._host}/${this._cohort}/users/me`, {
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

export const api = new Api('mesto.nomoreparties.co/v1', 'cohort-66','daca49b5-68d6-4b10-a310-ee0cfcd15750');