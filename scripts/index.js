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

const popupTemplate = document.querySelector(".template-popup").content;

/* ----------------- Change profile --------------- */

const editPopupElement = popupTemplate.querySelector(".popup").cloneNode(true);
const titleEditPopupElem = editPopupElement.querySelector(".popup__title");
const nameInputEditPopupElem = editPopupElement.querySelector("#name");
const jobInputEditPopupElem = editPopupElement.querySelector("#job");
const buttonEditPopupElem = editPopupElement.querySelector(".popup__button");
const closeButtonEditPopupElem =
  editPopupElement.querySelector(".popup__close-btn");

function openEditPopup() {
  titleEditPopupElem.textContent = "Редактировать профиль";
  buttonEditPopupElem.value = "сохранить";
  nameInputEditPopupElem.value = profileTitleElem.textContent;
  jobInputEditPopupElem.value = profileSubtitleElem.textContent;
  pageElement.append(editPopupElement);
}

function closeEditPopup(evt) {
  const currentPopupElement = evt.target.closest(".popup");
  currentPopupElement.remove();
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

/* -------------- Окно добавления ------------ */

const addPopupElement = popupTemplate.querySelector(".popup").cloneNode(true);
const titleAddPopupElem = addPopupElement.querySelector(".popup__title");
const nameInputAddPopupElem = addPopupElement.querySelector("#name");
const jobInputAddPopupElem = addPopupElement.querySelector("#job");
const buttonAddPopupElem = addPopupElement.querySelector(".popup__button");
const closeButtonAddPopupElem =
  addPopupElement.querySelector(".popup__close-btn");

function openAddPopup() {
  titleAddPopupElem.textContent = "Новое место";
  buttonAddPopupElem.value = "создать";
  nameInputAddPopupElem.placeholder = "Название";
  jobInputAddPopupElem.placeholder = "Ссылка на картинку";
  pageElement.append(addPopupElement);
}

function closeAddPopup(evt) {
  const currentPopupElement = evt.target.closest(".popup");

  nameInputAddPopupElem.value = "";
  jobInputAddPopupElem.value = "";
  currentPopupElement.remove();
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();

  const cardElem = cardTemplate.querySelector(".cards__card").cloneNode(true);
  const imgCardElem = cardElem.querySelector(".cards__thumbnail");
  const titleCardElem = cardElem.querySelector(".cards__title");
  const likeCardElem = cardElem.querySelector(".cards__button");

  imgCardElem.src = jobInputAddPopupElem.value;
  imgCardElem.alt = nameInputAddPopupElem.value;
  titleCardElem.textContent = nameInputAddPopupElem.value;

  likeCardElem.addEventListener("click", likePlace);

  document.querySelector(".cards").prepend(cardElem);

  closeAddPopup(evt);
}

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

  titleCardElem.textContent = item["name"];
  imgCardElem.alt = item["name"];
  imgCardElem.src = item["link"];

  likeCardElem.addEventListener("click", likePlace);

  document.querySelector(".cards").append(cardElem);
}

function likePlace(evt) {
  evt.target.classList.toggle("cards__button_active");
}

// const delCardElem = cardElem.querySelector(".cards__button-delete");
