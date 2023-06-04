class Api {
    constructor() {

    }

    getCards = () => {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-66/cards', {
            headers: {
                authorization: 'daca49b5-68d6-4b10-a310-ee0cfcd15750',
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                ///..
            }
        })
    }

    addNewCard = ({ name, link }) => {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-66/cards', {
            method: 'POST',
            headers: {
                authorization: 'daca49b5-68d6-4b10-a310-ee0cfcd15750',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, link })
        })
    }

    patchUserInfo = (name, about) => {
        fetch('https://mesto.nomoreparties.co/v1/cohort-66/users/me', {
            method: 'PATCH',
            headers: {
                authorization: 'daca49b5-68d6-4b10-a310-ee0cfcd15750',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, about })
        });
    }

    getUserInfo = () => {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-66/users/me', {
            headers: {
                authorization: 'daca49b5-68d6-4b10-a310-ee0cfcd15750',
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                ///..
            }
        })
    }


}

export const api = new Api();