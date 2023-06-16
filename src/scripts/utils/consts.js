const buttonOpenPopupAvatar = document.querySelector(".profile__overlay");
const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
const buttonOpenPopupCard = document.querySelector(".profile__add-button");

const popupProfileElem = document.querySelector(".edit-popup");
const formPopupProfileElem = popupProfileElem.querySelector(".edit-popup__form");
const inputNameProfileElem = formPopupProfileElem.querySelector('.popup__input_type_name');
const inputJobProfileElem = formPopupProfileElem.querySelector('.popup__input_type_info');

const popupCardElement = document.querySelector(".add-popup");
const formPopupCardElem = popupCardElement.querySelector(".add-popup__form");

const popupAvatarElement = document.querySelector(".avatar-popup");
const formPopupAvatarElem = popupAvatarElement.querySelector(".avatar-popup__form");

export { buttonOpenPopupProfile, buttonOpenPopupCard, formPopupProfileElem, inputNameProfileElem, inputJobProfileElem, formPopupCardElem, buttonOpenPopupAvatar, formPopupAvatarElem };