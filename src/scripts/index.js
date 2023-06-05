// import '../pages/index.css'; // добавьте импорт главного файла стилей

import { validationConfig } from "./utils/validationConfig.js";
import { buttonOpenPopupProfile, buttonOpenPopupCard, formPopupProfileElem, inputNameProfileElem, inputJobProfileElem, formPopupCardElem } from "./utils/consts.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js";
import Section from "./components/Section.js";
import { api } from "./Api.js";


function getServerCards() {
  return api.getInitialCards()
  .then((data) => {
    data.forEach((item) => {
      const cardElem = createCard(item);
      section.addItem(cardElem);
    });
  })
  .catch((err) => {
    console.log(err);
  }); 
}


function handleGetUserInfo() {
  return api.getUserInfo()
  .then((userData) => {
    userInfo.setUserInfo(userData);
    return userData._id;
  })
  
}

const popupImageElem = new PopupWithImage('.image-popup');

const createCard = (cardData) => { 
  const card = new Card(cardData, ".template-card",popupImageElem.open, openDeleteCardForm, handleGetUserInfo);
  const cardElem = card.getCard();
  return cardElem;
};

const section = new Section({ 
  // items: initialCards, 
  renderer: createCard }, ".cards", getServerCards);

const validatorFormCard = new FormValidator(validationConfig, formPopupCardElem);
const validatorFormProfile = new FormValidator(validationConfig, formPopupProfileElem);

const popupCard = new PopupWithForm('.add-popup', handleFormCardSubmit); 
const popupProfile = new PopupWithForm('.edit-popup', handleFormProfileSubmit); 
const popupDelete = new PopupWithForm('.delete-popup', () => {
  ///
});

const userInfo = new UserInfo({nameElem: ".profile__title", aboutElem: ".profile__subtitle"});


function handleFormDeleteSubmit(cardId) {
  api.deleteCard(cardId)
}

function openDeleteCardForm() {
  popupDelete.open();
}

function handleFormCardSubmit(cardSentData) {
  api.addNewCard(cardSentData)
  .then((cardResData) => {
    const cardElem = createCard(cardResData);  
    section.addItem(cardElem);
  })
  .catch((err) => {
    console.log(err);
  }); 
}

function handleFormProfileSubmit(userData) {
  api.patchUserInfo(userData)
  .then((userDataRes) => {
    userInfo.setUserInfo(userDataRes);
  })
  .catch((err) => {
    console.log(err);
  }); 
}

function setProfileInputValues(userData) {
  inputNameProfileElem.value = userData.name;
  inputJobProfileElem.value = userData.about;
}

section.renderer();
validatorFormCard.enableValidation();
validatorFormProfile.enableValidation();


buttonOpenPopupCard.addEventListener("click", () => {
  popupCard.open();
  validatorFormCard.resetValidation(); 
}); 

buttonOpenPopupProfile.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  popupProfile.open();
  setProfileInputValues(userData);
  validatorFormProfile.resetValidation();
}); 

popupImageElem.setEventListeners();
popupCard.setEventListeners();  
popupProfile.setEventListeners();  
popupDelete.setEventListeners();  

// const profileTitleElem = document.querySelector(".profile__title");
// const profileSubtitleElem = document.querySelector(".profile__subtitle");
// const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
// const buttonOpenPopupCard = document.querySelector(".profile__add-button");

// const popupProfileElem = document.querySelector(".edit-popup");
// const nameInputEditPopupElem = popupProfileElem.querySelector("#name");
// const jobInputEditPopupElem = popupProfileElem.querySelector("#job");
// const formPopupProfileElem = popupProfileElem.querySelector(".edit-popup__form");

// const popupCardElement = document.querySelector(".add-popup");
// const nameInputAddPopupElem = popupCardElement.querySelector("#image-name");
// const urlInputAddPopupElem = popupCardElement.querySelector("#url");
// const formPopupCardElem = popupCardElement.querySelector(".add-popup__form");

// const popupImageElem = document.querySelector(".image-popup");
// const pictureElem = popupImageElem.querySelector(".image-popup__image");
// const pictureDescriptionElem = popupImageElem.querySelector(
//   ".image-popup__descr"
// );

// const popupList = Array.from(document.querySelectorAll(".popup"));
// const closeButtons = document.querySelectorAll(".popup__close");
// const cardsElem = document.querySelector(".cards");

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

// function handleFormProfileSubmit(name, job) {
//   profileTitleElem.textContent = name;
//   profileSubtitleElem.textContent = job;
// }

// function handleCardClick(name, link) {
//   pictureElem.src = link;
//   pictureElem.alt = name;
//   pictureDescriptionElem.textContent = name;
//   return openPopup(popupImageElem);
// }

// function handleFormCardSubmit(name, link) {
//   const cardItem = { name, link };
//   const cardElem = createCard(cardItem);  
//   section.addItem(cardElem);
// }

// function handleFormCardSubmit(evt) {
//   evt.preventDefault();
//   const cardItem = {
//     name: nameInputAddPopupElem.value,
//     link: urlInputAddPopupElem.value,
//   };
//   const cardElem = createCard(cardItem);

//   formPopupCardElem.reset();
//   validatorFormCard.resetValidation();
//   closePopup(popupCardElement);
//   cardsElem.prepend(cardElem);
// }

// const renderer = initialCards.forEach((cardItem) => {
//   const cardElem = createCard(cardItem);
//   cardsElem.append(cardElem);
// });


// buttonOpenPopupProfile.addEventListener("click", () => {
//   nameInputEditPopupElem.value = profileTitleElem.textContent;
//   jobInputEditPopupElem.value = profileSubtitleElem.textContent;
//   validatorFormProfile.resetValidation();
//   return openPopup(popupProfileElem);
// });
          
// formPopupProfileElem.addEventListener("submit", handleFormProfileSubmit);

// formPopupCardElem.addEventListener("submit", handleFormCardSubmit);

// closeButtons.forEach((buttonItem) => {
//   const popup = buttonItem.closest(".popup");
//   buttonItem.addEventListener("click", () => closePopup(popup));
// });

// popupList.forEach((popupItem) => {
//   popupItem.addEventListener("click", closePopupByOverlay, openPopup);
// });
