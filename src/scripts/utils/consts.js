const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
const buttonOpenPopupCard = document.querySelector(".profile__add-button");

const popupProfileElem = document.querySelector(".edit-popup");
const formPopupProfileElem = popupProfileElem.querySelector(".edit-popup__form");

const popupCardElement = document.querySelector(".add-popup");
const formPopupCardElem = popupCardElement.querySelector(".add-popup__form");

export { buttonOpenPopupProfile, buttonOpenPopupCard, formPopupProfileElem, formPopupCardElem };