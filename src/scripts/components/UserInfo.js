export default class UserInfo {
    constructor(userInfoSelectors) {
        this._profileTitleElem = document.querySelector(userInfoSelectors.nameElem);
        this._profileSubtitleElem = document.querySelector(userInfoSelectors.aboutElem);
    }

    getUserInfo() {
        return { 
            name: this._profileTitleElem.textContent, 
            about: this._profileSubtitleElem.textContent 
        };
    }

    getUserID = () => {
        return this.userID;
    }

    setUserInfo = (userData) => {
        this._profileTitleElem.textContent = userData.name;
        this._profileSubtitleElem.textContent = userData.about;
        this.userID = userData._id;
    }
}