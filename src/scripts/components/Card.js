export default class Card {
  constructor(cardData, cardTemplateSelector, handleCardClick, handleFormDelete, handleGetUserInfo) {
    this._cardData = cardData;
    this._handleCardClick = handleCardClick;
    this._handleFormDelete = handleFormDelete;
    this._handleGetUserInfo = handleGetUserInfo;
    this._cardElem = document
      .querySelector(cardTemplateSelector)
      .content
      .querySelector(".cards__card")
      .cloneNode(true);
    this._imgCardElem = this._cardElem.querySelector(".cards__thumbnail");
    this._titleCardElem = this._cardElem.querySelector(".cards__title");
    this._likeButtonCardElem = this._cardElem.querySelector(".cards__button");
    this._delCardElem = this._cardElem.querySelector(".cards__button-del");
    this._likeDisplayElem = this._cardElem.querySelector(".cards__display");

  }
  
  getCard() {
    this._createCard();
    return this._cardElem;
  }

  _showLikes() {
    this._likeDisplayElem.textContent = this._cardData.likes.length;
  }

  _showDelButton = () => {
    this._handleGetUserInfo()
    .then((id) => {
      if (this._cardData.owner._id === id) {
        this._delCardElem.classList.add('cards__button-del_active');
      } else {
        this._delCardElem.classList.remove('cards__button-del_active');
      }
    })
    .catch((err) => {
      console.log(err);
    }); 
  }

  // _showDelButton() {
  //   this._checkOwner();
  //   console.log(this._isOwner);
  //   if (this._isOwner) {
  //     this._delCardElem.classList.add('cards__button-del_active');
  //   } else {
  //     this._delCardElem.classList.remove('cards__button-del_active');
  //   }
  // }

  _createCard() {
    this._imgCardElem.src = this._cardData.link;
    this._imgCardElem.alt = this._cardData.name;
    this._titleCardElem.textContent = this._cardData.name;
    this._showLikes();
    this._showDelButton();
    this._setEventListeners();
  }

  _setEventListeners() {
    this._likeButtonCardElem.addEventListener("click", this._toggleLike);
    this._delCardElem.addEventListener("click", () => {
      this._handleFormDelete(this._cardData._id, this._cardElem);
    });
    this._imgCardElem.addEventListener("click", () => {
      this._handleCardClick(this._cardData.name, this._cardData.link);
    });
  }

  _toggleLike = () => {
    this._likeButtonCardElem.classList.toggle("cards__button_active");
  }
}
