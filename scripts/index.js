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

// const popupElement = document.querySelector(".popup");
// const titleEditPopupElem = editPopupElement.querySelector(".edit-popup__title");
const pageElement = document.querySelector(".page");

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

const cardTemplate = document.querySelector(".template-card").content;
const imagePopupElem = document.querySelector(".image-popup");

const cardsElem = document.querySelector(".cards");

function openPopup(popupItem) {
  const closePopupElem = popupItem.querySelector(".popup__close");

  popupItem.classList.add("popup_open");
  closePopupElem.addEventListener("click", closePopup);
}

function closePopup(evt) {
  const popupItem = evt.target.closest(".popup");
  popupItem.classList.remove("popup_open");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileTitleElem.textContent = nameInputEditPopupElem.value;
  profileSubtitleElem.textContent = jobInputEditPopupElem.value;
  closePopup(evt);
}

editButtonElem.addEventListener("click", () => {
  nameInputEditPopupElem.value = profileTitleElem.textContent;
  jobInputEditPopupElem.value = profileSubtitleElem.textContent;
  return openPopup(editPopupElement);
});

formEditPopupElem.addEventListener("submit", handleEditFormSubmit);

/* -------------- Окно добавления ------------ */

function toggleLike(evt) {
  evt.target.classList.toggle("cards__button_active");
}

function deleteCard(evt) {
  evt.target.closest(".cards__card").remove();
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const newCardElem = createCard();

  urlInputAddPopupElem.value = "";
  nameInputAddPopupElem.value = "";
  closePopup(evt);
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

  if (cardItem) {
    imgCardElem.src = cardItem["link"];
    imgCardElem.alt = cardItem["name"];
    titleCardElem.textContent = cardItem["name"];
  } else {
    imgCardElem.src = urlInputAddPopupElem.value;
    imgCardElem.alt = nameInputAddPopupElem.value;
    titleCardElem.textContent = nameInputAddPopupElem.value;
  }

  likeCardElem.addEventListener("click", toggleLike);
  delCardElem.addEventListener("click", deleteCard);
  imgCardElem.addEventListener("click", (evt) => {
    const imageElem = imagePopupElem.querySelector(".image-popup__image");
    const descrElem = imagePopupElem.querySelector(".image-popup__descr");

    imageElem.src = evt.target.src;
    imageElem.alt = evt.target.alt;
    descrElem.textContent = evt.target.alt;

    return openPopup(imagePopupElem);
  });

  return cardElem;
}

addButtonElem.addEventListener("click", () => openPopup(addPopupElement));
formAddPopupElem.addEventListener("submit", handleAddFormSubmit);
