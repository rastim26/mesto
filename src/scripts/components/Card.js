export default class Card {
  constructor(
    cardData, 
    cardTemplateSelector, 
    handleCardClick,  
    openDeleteCardForm,
    userId, 
    handleFormDeleteSubmit,
    likeCard,
    unlikeCard) {
    this._cardData = cardData;
    this._handleCardClick = handleCardClick;
    this._openDeleteCardForm = openDeleteCardForm;
    this._userId = userId;
    this._handleFormDeleteSubmit = handleFormDeleteSubmit;
    this._likeCard = likeCard;
    this._unlikeCard = unlikeCard;
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

  deleteCard() {
    this._handleFormDeleteSubmit(this._cardData._id)
    .then(() => {
      this._cardElem.remove();
      this._cardElem = null;  
    })
  }

  _showLikes() {
    if (this._isLikedByMe()) {
      this._likeButtonCardElem.classList.add("cards__button_active");
    }
    this._likeDisplayElem.textContent = this._cardData.likes.length;
  }

  _isOwner = () => this._cardData.owner._id === this._userId;

  _showDelButton = () => {
    if (this._isOwner()) {
      this._delCardElem.classList.add('cards__button-del_active');
    } else {
      this._delCardElem.classList.remove('cards__button-del_active');
    }
  }

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
      this.deleteCard()
      // this._handleFormDeleteSubmit(this._cardData._id, this._cardElem);
    });
    this._imgCardElem.addEventListener("click", () => {
      this._handleCardClick(this._cardData.name, this._cardData.link);
    });
  }

  _isLikedByMe = () => {
    return this._cardData.likes.some((obj) => {
      return obj._id === this._userId;
    });
  }

  _toggleLike = () => {
    if (!this._isLikedByMe()) {
      this._likeCard(this._cardData._id)
      .then((res) => {
        this._likeButtonCardElem.classList.add("cards__button_active");
        this._cardData = res;
        this._likeDisplayElem.textContent = res.likes.length;
      })
    } else {
      this._unlikeCard(this._cardData._id)
      .then((res) => {
        this._likeButtonCardElem.classList.remove("cards__button_active");
        this._cardData = res;
        this._likeDisplayElem.textContent = res.likes.length;
      })
    }
  }
  
}
