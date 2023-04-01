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

/* ----------------- Change profile --------------- */

const editPopupElement = document.querySelector(".edit-popup");
const titleEditPopupElem = editPopupElement.querySelector(".edit-popup__title");
const nameInputEditPopupElem = editPopupElement.querySelector("#name");
const jobInputEditPopupElem = editPopupElement.querySelector("#job");
const buttonEditPopupElem = editPopupElement.querySelector(
  ".edit-popup__button"
);
const closeButtonEditPopupElem = editPopupElement.querySelector(
  ".edit-popup__close-btn"
);

function openEditPopup() {
  titleEditPopupElem.textContent = "Редактировать профиль";
  buttonEditPopupElem.value = "сохранить";
  nameInputEditPopupElem.value = profileTitleElem.textContent;
  jobInputEditPopupElem.value = profileSubtitleElem.textContent;
  editPopupElement.classList.add("edit-popup_action_opening");
}

function closeEditPopup() {
  editPopupElement.classList.add("edit-popup_action_closing");
  editPopupElement.classList.remove("edit-popup_action_opening");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileTitleElem.textContent = nameInputEditPopupElem.value;
  profileSubtitleElem.textContent = jobInputEditPopupElem.value;
  closeEditPopup(evt);
}

editButtonElem.addEventListener("click", openEditPopup);
closeButtonEditPopupElem.addEventListener("click", closeEditPopup);
buttonEditPopupElem.addEventListener("click", handleEditFormSubmit);

document.addEventListener("animationstart", function (e) {
  if (e.animationName === "fade-in") {
    e.target.classList.add("edit-popup_action_closing");
  }
});
document.addEventListener("animationend", function (e) {
  if (e.animationName === "fade-out") {
    e.target.classList.remove("edit-popup_action_closing");
  }
});

/* -------------- Окно добавления ------------ */

const addPopupElement = document.querySelector(".add-popup");
const nameInputAddPopupElem = addPopupElement.querySelector("#image-name");
const jobInputAddPopupElem = addPopupElement.querySelector("#url");
const buttonAddPopupElem = addPopupElement.querySelector(".add-popup__button");
const closeButtonAddPopupElem = addPopupElement.querySelector(
  ".add-popup__close-btn"
);

function openAddPopup() {
  addPopupElement.classList.add("add-popup_action_opening");
}

function closeAddPopup(evt) {
  nameInputAddPopupElem.value = "";
  jobInputAddPopupElem.value = "";
  addPopupElement.classList.add("add-popup_action_closing");
  addPopupElement.classList.remove("add-popup_action_opening");
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();

  const cardElem = cardTemplate.querySelector(".cards__card").cloneNode(true);
  const imgCardElem = cardElem.querySelector(".cards__thumbnail");
  const titleCardElem = cardElem.querySelector(".cards__title");
  const likeCardElem = cardElem.querySelector(".cards__button");
  const delCardElem = cardElem.querySelector(".cards__button-del");

  imgCardElem.src = jobInputAddPopupElem.value;
  imgCardElem.alt = nameInputAddPopupElem.value;
  titleCardElem.textContent = nameInputAddPopupElem.value;

  likeCardElem.addEventListener("click", likePlace);
  delCardElem.addEventListener("click", deleteCard);
  imgCardElem.addEventListener("click", openImagePopup);

  document.querySelector(".cards").prepend(cardElem);

  closeAddPopup(evt);
}

document.addEventListener("animationstart", function (e) {
  if (e.animationName === "fade-in") {
    e.target.classList.add("add-popup_action_closing");
  }
});
document.addEventListener("animationend", function (e) {
  if (e.animationName === "fade-out") {
    e.target.classList.remove("add-popup_action_closing");
  }
});

addButtonElem.addEventListener("click", openAddPopup);
closeButtonAddPopupElem.addEventListener("click", closeAddPopup);
buttonAddPopupElem.addEventListener("click", handleAddFormSubmit);

/* -------------- Add card ------------ */

const cardTemplate = document.querySelector(".template-card").content;

initialCards.forEach(loadInitialCards);

function loadInitialCards(item) {
  const cardElem = cardTemplate.querySelector(".cards__card").cloneNode(true);
  const imgCardElem = cardElem.querySelector(".cards__thumbnail");
  const titleCardElem = cardElem.querySelector(".cards__title");
  const likeCardElem = cardElem.querySelector(".cards__button");
  const delCardElem = cardElem.querySelector(".cards__button-del");

  titleCardElem.textContent = item["name"];
  imgCardElem.alt = item["name"];
  imgCardElem.src = item["link"];

  delCardElem.addEventListener("click", deleteCard);
  likeCardElem.addEventListener("click", likePlace);
  imgCardElem.addEventListener("click", openImagePopup);

  document.querySelector(".cards").append(cardElem);
}

function likePlace(evt) {
  evt.target.classList.toggle("cards__button_active");
}

function deleteCard(evt) {
  evt.target.closest(".cards__card").remove();
}

const imagePopupElem = document.querySelector(".image-popup");
const closePopupElem = imagePopupElem.querySelector(".image-popup__close-btn");

function openImagePopup(evt) {
  const imageElem = imagePopupElem.querySelector(".image-popup__image");
  const descrElem = imagePopupElem.querySelector(".image-popup__descr");

  imageElem.src = evt.target.src;
  imageElem.alt = evt.target.alt;
  descrElem.textContent =
    evt.target.nextElementSibling.nextElementSibling.firstElementChild.textContent;

  imagePopupElem.classList.add("image-popup_action_opening");
}

function closeImagePopup() {
  imagePopupElem.classList.add("image-popup_action_closing");
  imagePopupElem.classList.remove("image-popup_action_opening");
}

closePopupElem.addEventListener("click", closeImagePopup);
document.addEventListener("animationstart", function (e) {
  if (e.animationName === "fade-in") {
    e.target.classList.add("image-popup_action_closing");
  }
});
document.addEventListener("animationend", function (e) {
  if (e.animationName === "fade-out") {
    e.target.classList.remove("image-popup_action_closing");
  }
});
