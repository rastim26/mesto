// import '../pages/index.css'; // добавьте импорт главного файла стилей

import { validationConfig } from "./utils/validationConfig.js";
import { buttonOpenPopupProfile, buttonOpenPopupCard, formPopupProfileElem, inputNameProfileElem, inputJobProfileElem, formPopupCardElem, buttonOpenPopupAvatar, formPopupAvatarElem } from "./utils/consts.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithSubmit from "./components/PopupWithSubmit.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js";
import Section from "./components/Section.js";
import { api } from "./Api.js";

const likeCard = (cardId) => {
  return api.likeCard(cardId)
}

const unlikeCard = (cardId) => {
  return api.unlikeCard(cardId)
}

const uploadAvatar = () => {

}

const createCard = (cardData, userId) => { 
  const card = new Card(
    cardData, 
    ".template-card", 
    popupImageElem.open, 
    openDeleteCardForm,
    userId,
    handleFormDeleteSubmit,
    likeCard,
    unlikeCard,
    );

  const cardElem = card.getCard();
  return cardElem;
};
  
const section = new Section({ 
  // items: initialCards, 
  renderer: createCard }, ".cards");
    
const validatorFormCard = new FormValidator(validationConfig, formPopupCardElem);
const validatorFormAvatar = new FormValidator(validationConfig, formPopupAvatarElem);
const validatorFormProfile = new FormValidator(validationConfig, formPopupProfileElem);

const popupImageElem = new PopupWithImage('.image-popup');
const popupCard = new PopupWithForm('.add-popup', handleFormCardSubmit); 
const popupAvatar = new PopupWithForm('.avatar-popup', handleFormAvatarSubmit);
const popupProfile = new PopupWithForm('.edit-popup', handleFormProfileSubmit); 


const userInfo = new UserInfo({nameElem: ".profile__title", aboutElem: ".profile__subtitle"});


Promise.all([api.getUserInfo(), api.getCards()])
.then(([userData, cards]) => {
  userInfo.setUserInfo(userData);

  cards.forEach((card) => {
    const cardElem = createCard(card, userData._id);
    section.addItem(cardElem);
  });
})
.catch(err => {
  console.log(err);
});


//-----------

const popupDelete = new PopupWithSubmit('.delete-popup', handleFormDeleteSubmit);

function openDeleteCardForm(cardId, cardElem) {
  popupDelete.open(cardId, cardElem);
}


function handleFormDeleteSubmit(cardId, cardElem) {
  return api.deleteCard(cardId)
  .then(() => {
    cardElem.remove();
    cardElem = null; 
  })
}

popupDelete.setEventListeners();  

//-----------

function handleFormCardSubmit(cardSentData) {
  return api.addNewCard(cardSentData)
  .then((cardResData) => {
    cardResData.owner._id = userInfo.getUserID;
    const cardElem = createCard(cardResData, cardResData.owner._id);  
    section.addItem(cardElem);
  })
}

function handleFormProfileSubmit(userData) {
  return api.patchUserInfo(userData)
  .then((userDataRes) => {
    userInfo.setUserInfo(userDataRes);
  })
}

function handleFormAvatarSubmit(imageData) {
  return api.uploadAvatar(imageData.link)
  .then((res) => {
    userInfo.setAvatar(res);
  })
}


function setProfileInputValues(userData) {
  inputNameProfileElem.value = userData.name;
  inputJobProfileElem.value = userData.about;
}

validatorFormAvatar.enableValidation();
validatorFormCard.enableValidation();
validatorFormProfile.enableValidation();


buttonOpenPopupAvatar.addEventListener("click", () => {
  popupAvatar.open();
  validatorFormCard.resetValidation(); 
});

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

popupAvatar.setEventListeners();
popupImageElem.setEventListeners();
popupCard.setEventListeners();  
popupProfile.setEventListeners();  

