export default class UserInfo {
  constructor(userInfoSelectors) {
    this._profileTitleElem = document.querySelector(userInfoSelectors.name);
    this._profileSubtitleElem = document.querySelector(userInfoSelectors.about);
    this._profileAvatarElem = document.querySelector(userInfoSelectors.avatar);
  }

  getUserInfo() {
    return {
      name: this._profileTitleElem.textContent,
      about: this._profileSubtitleElem.textContent,
    }
  }

  getUserID = () => {
    return this._profileSubtitleElem.getAttribute('data-user-id');
  }

  setAvatar = (userData) => {
    this._profileAvatarElem.src = userData.avatar;
  }

  setUserInfo = (userData) => {
    this._profileTitleElem.textContent = userData.name;
    this._profileSubtitleElem.textContent = userData.about;
    this._profileSubtitleElem.setAttribute('data-user-id', userData._id);
    this.setAvatar(userData);
  }
}