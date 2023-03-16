let editButtonElem = document.querySelector(".profile__edit-button");
let popupElem = document.querySelector(".popup");
let closeButtonElem = popupElem.querySelector(".popup__close-btn");

let formElem = popupElem.querySelector(".popup__container");
let nameInput = formElem.querySelector("#name");
let jobInput = formElem.querySelector("#job");

let profileTitleElem = document.querySelector(".profile__title");
let profileSubtitleElem = document.querySelector(".profile__subtitle");

function openPopup() {
  popupElem.classList.add("popup_opened");

  nameInput.value = profileTitleElem.textContent;
  jobInput.value = profileSubtitleElem.textContent;
}

function closePopup() {
  popupElem.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  let nameValue = nameInput.value;
  let jobValue = jobInput.value;

  profileTitleElem.textContent = nameValue;
  profileSubtitleElem.textContent = jobValue;

  closePopup();
}

editButtonElem.addEventListener("click", openPopup);
closeButtonElem.addEventListener("click", closePopup);
formElem.addEventListener("submit", handleFormSubmit);
