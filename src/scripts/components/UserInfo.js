// отвечает за управление отображением информации о пользователе  на странице.

export default class UserInfo {
    constructor (userData) {
        this._profileTitleElem = document.querySelector(userData.name);
        this._profileSubtitleElem = document.querySelector(userData.job);
    }

    getUserInfo () {
        //v возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
        return this._object;
    }

    setUserInfo = (name, job) => {
        this._profileTitleElem.textContent = name;
        this._profileSubtitleElem.textContent = job;
        this._object = {name, job};
        //v принимает новые данные пользователя и добавляет их на страницу
    }
}