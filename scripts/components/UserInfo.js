export default class UserInfo {
    constructor(userInfoSelectors) {
        this._profileTitleElem = document.querySelector(userInfoSelectors.nameElem);
        this._profileSubtitleElem = document.querySelector(userInfoSelectors.jobElem);
    }

    getUserInfo() {
        return { 
            name: this._profileTitleElem.textContent, 
            job: this._profileSubtitleElem.textContent 
        };
    }

    setUserInfo = ({ name, job }) => {
        this._profileTitleElem.textContent = name;
        this._profileSubtitleElem.textContent = job;
    }
}