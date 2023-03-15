let editButtonElem = document.querySelector(".profile__edit-button");
let popupElem = document.querySelector(".popup");
let closeButtonElem = popupElem.querySelector(".popup__close-btn");

function openPopup() {
  popupElem.classList.add("popup_opened");
}

function closePopup() {
  popupElem.classList.remove("popup_opened");
}

editButtonElem.addEventListener("click", openPopup);
closeButtonElem.addEventListener("click", closePopup);

let formElem = popupElem.querySelector(".popup__container");
let nameInput = formElem.querySelector("#name");
let jobInput = formElem.querySelector("#job");

function handleFormSubmit(evt) {
  evt.preventDefault();

  let profileTitleElem = document.querySelector(".profile__title");
  let profileSubtitleElem = document.querySelector(".profile__subtitle");

  let nameValue = nameInput.value;
  let jobValue = jobInput.value;

  profileTitleElem.textContent = nameValue;
  profileSubtitleElem.textContent = jobValue;

  closePopup();
}

formElem.addEventListener("submit", handleFormSubmit);
