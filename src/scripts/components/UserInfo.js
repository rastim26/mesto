class UserInfo {
  constructor(userInfoSelectors) {
    this._profileTitleElem = document.querySelector(userInfoSelectors.nameElem);
    this._profileSubtitleElem = document.querySelector(userInfoSelectors.aboutElem);
    this._profileAvatarElem = document.querySelector(".profile__avatar");
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

export const userInfo = new UserInfo({ nameElem: ".profile__title", aboutElem: ".profile__subtitle" });