import './index.css'; // добавьте импорт главного файла стилей

import { validationConfig } from "../scripts/utils/validationConfig.js";
import { buttonOpenPopupProfile, buttonOpenPopupCard, formPopupProfileElem, inputNameProfileElem, inputJobProfileElem, formPopupCardElem, buttonOpenPopupAvatar, formPopupAvatarElem } from "../scripts/utils/consts.js";
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithConfirmation from "../scripts/components/PopupWithConfirmation.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import { api } from "../scripts/components/Api.js";

const likeCard = (cardId) => {
  return api.likeCard(cardId)
}

const unlikeCard = (cardId) => {
  return api.unlikeCard(cardId)
}

const createCard = (cardData) => {

  const userId = userInfo.userData._id;

  const card = new Card(
    cardData,
    ".template-card",
    popupImageElem.open,
    onDelete,
    userId,
    likeCard,
    unlikeCard,
  );

  const cardElem = card.getCard();
  return cardElem;
};

const userInfo = new UserInfo({
  name: ".profile__title", 
  about: ".profile__subtitle",
  avatar: ".profile__avatar",
});

const section = new Section({
  renderer: createCard
}, ".cards");

const validatorFormCard = new FormValidator(validationConfig, formPopupCardElem);
const validatorFormAvatar = new FormValidator(validationConfig, formPopupAvatarElem);
const validatorFormProfile = new FormValidator(validationConfig, formPopupProfileElem);

const popupDelete = new PopupWithConfirmation('.delete-popup');
const popupImageElem = new PopupWithImage('.image-popup');
const popupCard = new PopupWithForm('.add-popup', handleFormCardSubmit);
const popupAvatar = new PopupWithForm('.avatar-popup', handleFormAvatarSubmit);
const popupProfile = new PopupWithForm('.edit-popup', handleFormProfileSubmit);


function onDelete(cardId, cardElem) {
  popupDelete.open(() => {
    return api.deleteCard(cardId)
      .then(() => {
        cardElem.remove();
        cardElem = null;
      })
      .catch((err) => {
        console.log(err);
      }); 
  });
}


function handleFormCardSubmit(cardDataSent) {
  return api.addNewCard(cardDataSent)
    .then((cardDataRes) => {
      const cardElem = createCard(cardDataRes);
      section.addItem(cardElem);
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleFormProfileSubmit(userData) {
  return api.patchUserInfo(userData)
    .then((userDataRes) => {
      userInfo.setUserInfo(userDataRes);
    })
    .catch((err) => {
      console.log(err);
    }); 
}

function handleFormAvatarSubmit(imageData) {
  return api.uploadAvatar(imageData.link)
    .then((res) => {
      userInfo.setAvatar(res);
    })
    .catch((err) => {
      console.log(err);
    }); 
}

function setProfileInputValues(userData) {
  inputNameProfileElem.value = userData.name;
  inputJobProfileElem.value = userData.about;
}


Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    section.renderItems(cards);
  })
  .catch(err => {
    console.log(err);
  });

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
popupImageElem.setEventListeners();
popupDelete.setEventListeners();
popupAvatar.setEventListeners();
popupCard.setEventListeners();
popupProfile.setEventListeners();

