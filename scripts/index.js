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

// const imagePopupElem = document.querySelector(".image-popup");
// const pictureElem = imagePopupElem.querySelector(".image-popup__image");
// const pictureDescriptionElem = imagePopupElem.querySelector(
//   ".image-popup__descr"
// );

const popupList = Array.from(document.querySelectorAll(".popup"));
const closeButtons = document.querySelectorAll(".popup__close");
const cardTemplate = document.querySelector(".template-card").content;
const cardsElem = document.querySelector(".cards");

const closePopupByOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
};

const closeEscPopup = (evt) => {
  if (evt.key === "Escape") {
    const popupItem = document.querySelector(".popup_open");
    closePopup(popupItem);
  }
};

export function openPopup(popupItem) {
  popupItem.classList.add("popup_open");
  document.addEventListener("keydown", closeEscPopup);
}

function closePopup(popupItem) {
  popupItem.classList.remove("popup_open");
  document.removeEventListener("keydown", closeEscPopup);
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileTitleElem.textContent = nameInputEditPopupElem.value;
  profileSubtitleElem.textContent = jobInputEditPopupElem.value;
  closePopup(editPopupElement);
}

/* -------------- Окно добавления ------------ */

/* -------------- Создание карточек  ------------ */

// function toggleLike(evt) {
//   evt.target.classList.toggle("cards__button_active");
// }

// function deleteCard(evt) {
//   evt.target.closest(".cards__card").remove();
// }

// function createCard(cardItem) {
//   const cardElem = cardTemplate.querySelector(".cards__card").cloneNode(true);
//   const imgCardElem = cardElem.querySelector(".cards__thumbnail");
//   const titleCardElem = cardElem.querySelector(".cards__title");
//   const likeCardElem = cardElem.querySelector(".cards__button");
//   const delCardElem = cardElem.querySelector(".cards__button-del");

//   imgCardElem.src = cardItem["link"];
//   imgCardElem.alt = cardItem["name"];
//   titleCardElem.textContent = cardItem["name"];

//   likeCardElem.addEventListener("click", toggleLike);
//   delCardElem.addEventListener("click", deleteCard);
//   imgCardElem.addEventListener("click", () => handleCardClick(imgCardElem));

//   return cardElem;
// }

// function handleCardClick(imgCardElem) {
//   pictureElem.src = imgCardElem.src;
//   pictureElem.alt = imgCardElem.alt;
//   pictureDescriptionElem.textContent = imgCardElem.alt;
//   return openPopup(imagePopupElem);
// }

// initialCards.forEach((cardItem) => {
//   const cardElem = createCard(cardItem);
//   cardsElem.append(cardElem);
// });

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const cardItem = {
    name: nameInputAddPopupElem.value,
    link: urlInputAddPopupElem.value,
  };
  const card = new Card(cardItem, ".template-card");
  const newCardElem = card.getCard();

  const buttonElement = evt.target.querySelector(".popup__button");

  formAddPopupElem.reset();
  disableButton(buttonElement, validationConfig);
  closePopup(addPopupElement);
  cardsElem.prepend(newCardElem);
}

const disableButton = (buttonElement, validationConfig) => {
  buttonElement.classList.add(validationConfig.inactiveButtonClass);
  buttonElement.setAttribute("disabled", true);
};

initialCards.forEach((cardItem) => {
  const card = new Card(cardItem, ".template-card");
  const cardElem = card.getCard();
  cardsElem.append(cardElem);
});

const formList = Array.from(
  document.querySelectorAll(validationConfig.formSelector)
);

formList.forEach((formElement) => {
  const formValidator = new FormValidator(validationConfig, formElement);

  formValidator.enableValidation();
});

editButtonElem.addEventListener("click", () => {
  nameInputEditPopupElem.value = profileTitleElem.textContent;
  jobInputEditPopupElem.value = profileSubtitleElem.textContent;
  hideInputError(editPopupElement, nameInputEditPopupElem, validationConfig);
  hideInputError(editPopupElement, jobInputEditPopupElem, validationConfig);
  return openPopup(editPopupElement);
});

const hideInputError = (
  formElement,
  inputElement,
  { inputErrorClass, errorClass }
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};

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
