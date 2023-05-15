import { validationConfig } from "./validationConfig.js";
import { initialCards } from "./cards.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";

import Popup from "./components/Popup.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
// import Popup from "./components/PopupWithForm.js";
// import Popup from "./components/PopupWithImage.js";

const profileTitleElem = document.querySelector(".profile__title");
const profileSubtitleElem = document.querySelector(".profile__subtitle");
const editButtonElem = document.querySelector(".profile__edit-button");
const addButtonElem = document.querySelector(".profile__add-button");

const editPopupElement = document.querySelector(".edit-popup");
// const nameInputEditPopupElem = editPopupElement.querySelector("#name");
// const jobInputEditPopupElem = editPopupElement.querySelector("#job");
const formEditPopupElem = editPopupElement.querySelector(".edit-popup__form");

const addPopupElement = document.querySelector(".add-popup");
// const nameInputAddPopupElem = addPopupElement.querySelector("#image-name");
// const urlInputAddPopupElem = addPopupElement.querySelector("#url");
const formAddPopupElem = addPopupElement.querySelector(".add-popup__form");

// const imagePopupElem = document.querySelector(".image-popup");
// const pictureElem = imagePopupElem.querySelector(".image-popup__image");
// const pictureDescriptionElem = imagePopupElem.querySelector(
//   ".image-popup__descr"
// );

// const popupList = Array.from(document.querySelectorAll(".popup"));
// const closeButtons = document.querySelectorAll(".popup__close");
const cardsElem = document.querySelector(".cards");

// const closePopupByOverlay = (evt) => {
//   if (evt.target === evt.currentTarget) {
//     closePopup(evt.currentTarget);
//   }
// };

// const closeEscPopup = (evt) => {
//   if (evt.key === "Escape") {
//     const popupItem = document.querySelector(".popup_open");
//     closePopup(popupItem);
//   }
// };

// function openPopup(popupItem) {
//   popupItem.classList.add("popup_open");
//   document.addEventListener("keydown", closeEscPopup);
// }

// function closePopup(popupItem) {
//   popupItem.classList.remove("popup_open");
//   document.removeEventListener("keydown", closeEscPopup);
// }

function handleEditFormSubmit(name, job) {
  profileTitleElem.textContent = name;
  profileSubtitleElem.textContent = job;
}

/* -------------- Окно добавления ------------ */

// function handleCardClick(name, link) {
//   pictureElem.src = link;
//   pictureElem.alt = name;
//   pictureDescriptionElem.textContent = name;
//   return openPopup(imagePopupElem);
// }
const imagePopupElem = new PopupWithImage('.image-popup');

// imagePopupElem.open('qwer', 'qwerrrr')

const createCard = (cardItem) => {
  const card = new Card(cardItem, ".template-card", imagePopupElem.open);
  const cardElem = card.getCard();
  return cardElem;
};

const addFormValidator = new FormValidator(validationConfig, formAddPopupElem);
const editFormValidator = new FormValidator(
  validationConfig,
  formEditPopupElem
);

function handleAddFormSubmit(name, link) {
  const cardItem = {
    name: name,
    link: link,
  };
  const cardElem = createCard(cardItem);
  addFormValidator.resetValidation();

  cardsElem.prepend(cardElem);
}

// function handleAddFormSubmit(evt) {
//   evt.preventDefault();
//   const cardItem = {
//     name: nameInputAddPopupElem.value,
//     link: urlInputAddPopupElem.value,
//   };
//   const cardElem = createCard(cardItem);

//   formAddPopupElem.reset();
//   addFormValidator.resetValidation();
//   closePopup(addPopupElement);
//   cardsElem.prepend(cardElem);
// }

initialCards.forEach((cardItem) => {
  const cardElem = createCard(cardItem);
  cardsElem.append(cardElem);
});
addFormValidator.enableValidation();
editFormValidator.enableValidation();

// editButtonElem.addEventListener("click", () => {
//   nameInputEditPopupElem.value = profileTitleElem.textContent;
//   jobInputEditPopupElem.value = profileSubtitleElem.textContent;
//   editFormValidator.resetValidation();
//   return openPopup(editPopupElement);
// });

const addPopupNew = new PopupWithForm('.add-popup', handleAddFormSubmit); //+
addButtonElem.addEventListener("click", () => {
  addPopupNew.open();
}); //+

addPopupNew.setEventListeners();  //+

const editPopupNew = new PopupWithForm('.edit-popup', handleEditFormSubmit); //+
editButtonElem.addEventListener("click", () => {
  editPopupNew.open();
}); //+

editPopupNew.setEventListeners();  //+


// formEditPopupElem.addEventListener("submit", handleEditFormSubmit);

// formAddPopupElem.addEventListener("submit", handleAddFormSubmit);

// closeButtons.forEach((buttonItem) => {
//   const popup = buttonItem.closest(".popup");
//   buttonItem.addEventListener("click", () => closePopup(popup));
// });

// popupList.forEach((popupItem) => {
//   popupItem.addEventListener("click", closePopupByOverlay, openPopup);
// });
