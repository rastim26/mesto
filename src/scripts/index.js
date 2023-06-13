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



const createCard = (cardData, userData) => { 
  const card = new Card(
    cardData, 
    ".template-card", 
    popupImageElem.open, 
    openDeleteCardForm,
    userData,
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
    const cardElem = createCard(card, userData);
    section.addItem(cardElem);
  });
})
.catch(err => {
  console.log(err);
});



const popupDelete = new PopupWithForm('.delete-popup', handleFormDeleteSubmit);

function openDeleteCardForm(cardId) {
  popupDelete.open();
}
function handleFormDeleteSubmit() {
  
  api.deleteCard(cardId)
}

popupDelete.setEventListeners();  



function handleFormCardSubmit(cardSentData) {
  api.addNewCard(cardSentData)
  .then((cardResData) => {
    const cardElem = createCard(cardResData);  
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

