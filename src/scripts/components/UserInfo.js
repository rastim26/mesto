export default class UserInfo {
    constructor(userInfoSelectors
        // , handleGetUserInfo
        ) {
        this._profileTitleElem = document.querySelector(userInfoSelectors.nameElem);
        this._profileSubtitleElem = document.querySelector(userInfoSelectors.aboutElem);
        // this._handleGetUserInfo = handleGetUserInfo;
    
    }

    getUserInfo() {
        return {
            name: this._profileTitleElem.textContent, 
            about: this._profileSubtitleElem.textContent,
        }
    }

    getUserID = () => {
        this.setUserInfo();
        return this._profileSubtitleElem.getAttribute('data-user-id');
    }

    setUserInfo = (userData) => {
        this._profileTitleElem.textContent = userData.name;
        this._profileSubtitleElem.textContent = userData.about;
        this._profileSubtitleElem.setAttribute('data-user-id', userData._id);
    }
}