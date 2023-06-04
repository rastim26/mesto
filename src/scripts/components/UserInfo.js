export default class UserInfo {
    constructor(userInfoSelectors, getUserInfo) {
        this._profileTitleElem = document.querySelector(userInfoSelectors.nameElem);
        this._profileSubtitleElem = document.querySelector(userInfoSelectors.aboutElem);

        this._getUserInfo = getUserInfo;
    }

    getUserInfo() {
        return { 
            name: this._profileTitleElem.textContent, 
            about: this._profileSubtitleElem.textContent 
        };
    }

    setUserInfo = ({ name, about }) => {

        this._profileTitleElem.textContent = name;
        this._profileSubtitleElem.textContent = about;
    }
}