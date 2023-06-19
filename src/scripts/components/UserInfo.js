export default class UserInfo {
  constructor(userInfoSelectors) {
    this._profileTitleElem = document.querySelector(userInfoSelectors.name);
    this._profileSubtitleElem = document.querySelector(userInfoSelectors.about);
    this._profileAvatarElem = document.querySelector(userInfoSelectors.avatar);
    this.userData = {};
  }

  getUserInfo() {
    return this.userData;
  }

  setAvatar = (userData) => {
    this._profileAvatarElem.src = userData.avatar;
  }

  setUserInfo = (userData) => {
    this.userData = userData;
    this._profileTitleElem.textContent = userData.name;
    this._profileSubtitleElem.textContent = userData.about;
    this.setAvatar(userData);
  }
}