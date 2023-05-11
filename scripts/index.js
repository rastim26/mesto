import { validationConfig } from "./validationConfig.js";
import { initialCards } from "./cards.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const profileTitleElem = document.querySelector(".profile__title");
const profileSubtitleElem = document.querySelector(".profile__subtitle");
const editButtonElem = document.querySelector(".profile__edit-button");
const addButtonElem = document.querySelector(".profile__add-button");

const editPopupElement = document.querySelector(".edit-popup");
const nameInputEditPopupElem = editPopupElement.querySelector("#name");
const jobInputEditPopupElem = editPopupElement.querySelector("#job");
const formEditPopupElem = editPopupElement.querySelector(".edit-popup__form");

const addPopupElement = document.querySelector(".add-popup");
const nameInputAddPopupElem = addPopupElement.querySelector("#image-name");
const urlInputAddPopupElem = addPopupElement.querySelector("#url");
const formAddPopupElem = addPopupElement.querySelector(".add-popup__form");

const imagePopupElem = document.querySelector(".image-popup");
const pictureElem = imagePopupElem.querySelector(".image-popup__image");
const pictureDescriptionElem = imagePopupElem.querySelector(
  ".image-popup__descr"
);

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

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileTitleElem.textContent = nameInputEditPopupElem.value;
  profileSubtitleElem.textContent = jobInputEditPopupElem.value;
  closePopup(editPopupElement);
}

/* -------------- Окно добавления ------------ */

function handleCardClick(name, link) {
  pictureElem.src = link;
  pictureElem.alt = name;
  pictureDescriptionElem.textContent = name;
  return openPopup(imagePopupElem);
}

const createCard = (cardItem) => {
  const card = new Card(cardItem, ".template-card", handleCardClick);
  const cardElem = card.getCard();
  return cardElem;
};

const addFormValidator = new FormValidator(validationConfig, formAddPopupElem);
const editFormValidator = new FormValidator(
  validationConfig,
  formEditPopupElem
);

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const cardItem = {
    name: nameInputAddPopupElem.value,
    link: urlInputAddPopupElem.value,
  };
  const cardElem = createCard(cardItem);

  formAddPopupElem.reset();
  addFormValidator.resetValidation();
  closePopup(addPopupElement);
  cardsElem.prepend(cardElem);
}

initialCards.forEach((cardItem) => {
  const cardElem = createCard(cardItem);
  cardsElem.append(cardElem);
});
addFormValidator.enableValidation();
editFormValidator.enableValidation();

editButtonElem.addEventListener("click", () => {
  nameInputEditPopupElem.value = profileTitleElem.textContent;
  jobInputEditPopupElem.value = profileSubtitleElem.textContent;
  editFormValidator.resetValidation();
  return openPopup(editPopupElement);
});

addButtonElem.addEventListener("click", () => openPopup(addPopupElement));
formEditPopupElem.addEventListener("submit", handleEditFormSubmit);

formAddPopupElem.addEventListener("submit", handleAddFormSubmit);

closeButtons.forEach((buttonItem) => {
  const popup = buttonItem.closest(".popup");
  buttonItem.addEventListener("click", () => closePopup(popup));
});

popupList.forEach((popupItem) => {
  popupItem.addEventListener("click", closePopupByOverlay, openPopup);
});
