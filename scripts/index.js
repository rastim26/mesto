const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const pageElement = document.querySelector(".page");

const profileTitleElem = document.querySelector(".profile__title");
const profileSubtitleElem = document.querySelector(".profile__subtitle");
const editButtonElem = document.querySelector(".profile__edit-button");
const addButtonElem = document.querySelector(".profile__add-button");

const editPopupElement = document.querySelector(".edit-popup");
const nameInputEditPopupElem = editPopupElement.querySelector("#name");
const jobInputEditPopupElem = editPopupElement.querySelector("#job");
const formEditPopupElem = editPopupElement.querySelector(".edit-popup__form");
const closeEditPopupElem = editPopupElement.querySelector(".popup__close");

const addPopupElement = document.querySelector(".add-popup");
const nameInputAddPopupElem = addPopupElement.querySelector("#image-name");
const urlInputAddPopupElem = addPopupElement.querySelector("#url");
const formAddPopupElem = addPopupElement.querySelector(".add-popup__form");
const closeAddPopupElem = addPopupElement.querySelector(".popup__close");

const imagePopupElem = document.querySelector(".image-popup");
const closeImagePopupElem = imagePopupElem.querySelector(".popup__close");
const imageElem = imagePopupElem.querySelector(".image-popup__image");
const descrElem = imagePopupElem.querySelector(".image-popup__descr");

const closeButtons = document.querySelectorAll(".popup__close");
const cardTemplate = document.querySelector(".template-card").content;
const cardsElem = document.querySelector(".cards");

function openPopup(popupItem) {
  popupItem.classList.add("popup_open");
}

function closePopup(popupItem) {
  popupItem.classList.remove("popup_open");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileTitleElem.textContent = nameInputEditPopupElem.value;
  profileSubtitleElem.textContent = jobInputEditPopupElem.value;
  closePopup(editPopupElement);
}

/* -------------- Окно добавления ------------ */

function toggleLike(evt) {
  evt.target.classList.toggle("cards__button_active");
}

function deleteCard(evt) {
  evt.target.closest(".cards__card").remove();
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const cardItem = {
    name: nameInputAddPopupElem.value,
    link: urlInputAddPopupElem.value,
  };
  const newCardElem = createCard(cardItem);

  urlInputAddPopupElem.value = "";
  nameInputAddPopupElem.value = "";
  closePopup(addPopupElement);
  cardsElem.prepend(newCardElem);
}

initialCards.forEach((cardItem) => {
  const cardElem = createCard(cardItem);
  cardsElem.append(cardElem);
});

function createCard(cardItem) {
  const cardElem = cardTemplate.querySelector(".cards__card").cloneNode(true);
  const imgCardElem = cardElem.querySelector(".cards__thumbnail");
  const titleCardElem = cardElem.querySelector(".cards__title");
  const likeCardElem = cardElem.querySelector(".cards__button");
  const delCardElem = cardElem.querySelector(".cards__button-del");

  imgCardElem.src = cardItem["link"];
  imgCardElem.alt = cardItem["name"];
  titleCardElem.textContent = cardItem["name"];

  likeCardElem.addEventListener("click", toggleLike);
  delCardElem.addEventListener("click", deleteCard);
  imgCardElem.addEventListener("click", () => handleCardClick(imgCardElem));

  return cardElem;
}

function handleCardClick(imgCardElem) {
  imageElem.src = imgCardElem.src;
  imageElem.alt = imgCardElem.alt;
  descrElem.textContent = imgCardElem.alt;
  return openPopup(imagePopupElem);
}

editButtonElem.addEventListener("click", () => {
  nameInputEditPopupElem.value = profileTitleElem.textContent;
  jobInputEditPopupElem.value = profileSubtitleElem.textContent;
  return openPopup(editPopupElement);
});
addButtonElem.addEventListener("click", () => openPopup(addPopupElement));
formEditPopupElem.addEventListener("submit", handleEditFormSubmit);
formAddPopupElem.addEventListener("submit", handleAddFormSubmit);
closeButtons.forEach((buttonItem) => {
  const popup = buttonItem.closest(".popup");
  buttonItem.addEventListener("click", () => closePopup(popup));
});
