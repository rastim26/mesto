// import '../pages/index.css'; // добавьте импорт главного файла стилей

import { validationConfig } from "./utils/validationConfig.js";
import { buttonOpenPopupProfile, buttonOpenPopupCard, formPopupProfileElem, inputNameProfileElem, inputJobProfileElem, formPopupCardElem } from "./utils/consts.js";
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
const validatorFormProfile = new FormValidator(validationConfig, formPopupProfileElem);

const popupImageElem = new PopupWithImage('.image-popup');
    
const popupCard = new PopupWithForm('.add-popup', handleFormCardSubmit); 
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


// const newPromise = new Promise(function (resolve, reject) {
//   resolve(res1); // Сразу получим обработанный промис
// });
// newPromise
// .then(() => {
// })
// .then(() => {
// })
// .catch(thirdAction);


const popupDelete = new PopupWithSubmit('.delete-popup', openDeleteCardForm);

function openDeleteCardForm(cardId) {
  popupDelete.launch(cardId);
}


function handleFormDeleteSubmit(cardId) {
  return api.deleteCard(cardId)
}

popupDelete.setEventListeners();  



function handleFormCardSubmit(cardSentData) {

  
  api.addNewCard(cardSentData)
  .then((cardResData) => {
    cardResData.owner._id = userInfo.getUserID;
    const cardElem = createCard(cardResData, cardResData.owner._id);  
    section.addItem(cardElem);
  })
  .then(() => {
    popupCard.close();
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
  .then(() => {
    popupProfile.close();
  })
  .catch((err) => {
    console.log(err);
  }); 
}

function setProfileInputValues(userData) {
  inputNameProfileElem.value = userData.name;
  inputJobProfileElem.value = userData.about;
}

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

