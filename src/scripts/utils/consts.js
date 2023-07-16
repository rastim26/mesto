export const buttonOpenPopupAvatar = document.querySelector(".profile__overlay");
export const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
export const buttonOpenPopupCard = document.querySelector(".profile__add-button");

const popupProfileElem = document.querySelector(".edit-popup");
export const formPopupProfileElem = popupProfileElem.querySelector(".edit-popup__form");
export const inputNameProfileElem = formPopupProfileElem.querySelector('.popup__input_type_name');
export const inputJobProfileElem = formPopupProfileElem.querySelector('.popup__input_type_info');

const popupCardElement = document.querySelector(".add-popup");
export const formPopupCardElem = popupCardElement.querySelector(".add-popup__form");

const popupAvatarElement = document.querySelector(".avatar-popup");
export const formPopupAvatarElem = popupAvatarElement.querySelector(".avatar-popup__form");
