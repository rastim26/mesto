export default class Card {
  constructor({ name, link }, cardTemplateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this._cardElem = document
      .querySelector(cardTemplateSelector)
      .content
      .querySelector(".cards__card")
      .cloneNode(true);
    this._imgCardElem = this._cardElem.querySelector(".cards__thumbnail");
    this._titleCardElem = this._cardElem.querySelector(".cards__title");
    this._likeCardElem = this._cardElem.querySelector(".cards__button");
    this._delCardElem = this._cardElem.querySelector(".cards__button-del");
  }

  _createCard() {
    this._imgCardElem.src = this._link;
    this._imgCardElem.alt = this._name;
    this._titleCardElem.textContent = this._name;

    this._setEventListeners();
  }

  _setEventListeners() {
    this._likeCardElem.addEventListener("click", this._toggleLike);
    this._delCardElem.addEventListener("click", this._deleteCard);
    this._imgCardElem.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  getCard() {
    this._createCard();
    return this._cardElem;
  }

  _toggleLike = () => {
    this._likeCardElem.classList.toggle("cards__button_active");
  }

  _deleteCard = () => {
    this._cardElem.remove();
    this._cardElem = null
  }
}
