const editButtonElem = document.querySelector(".profile__edit-button");
// const popupElem = document.querySelector(".popup");
// const closeButtonElem = popupElem.querySelector(".popup__close-btn");

// // const formElem = popupElem.querySelector(".popup__container");
// const nameInput = formElem.querySelector("#name");
// const jobInput = formElem.querySelector("#job");

const profileTitleElem = document.querySelector(".profile__title");
const profileSubtitleElem = document.querySelector(".profile__subtitle");

// function openPopup() {
//   // popupElem.classList.add("popup_opened");

//   nameInput.value = profileTitleElem.textContent;
//   jobInput.value = profileSubtitleElem.textContent;
// }

// function closePopup() {
//   popupElem.classList.remove("popup_opened");
// }

// function handleFormSubmit(evt) {
//   evt.preventDefault();

//   const nameValue = nameInput.value;
//   const jobValue = jobInput.value;

//   profileTitleElem.textContent = nameValue;
//   profileSubtitleElem.textContent = jobValue;

//   closePopup();
// }

// editButtonElem.addEventListener("click", openPopup);
// closeButtonElem.addEventListener("click", closePopup);
// formElem.addEventListener("submit", handleFormSubmit);

/* ----------------- Открытие окна редактирования --------------- */

const popupTemplate = document.querySelector(".template-popup").content;
const pageElement = document.querySelector(".page");

const popupElement = popupTemplate.querySelector(".popup").cloneNode(true);

const nameInput = popupElement.querySelector("#name");
const jobInput = popupElement.querySelector("#job");

function openPopup() {
  pageElement.append(popupElement);
}

function openEditPopup() {
  popupElement.querySelector(".popup__title").textContent =
    "Редактировать профиль";

  popupElement.querySelector(".popup__button").value = "сохранить";

  nameInput.value = profileTitleElem.textContent;
  jobInput.value = profileSubtitleElem.textContent;

  openPopup();
}

editButtonElem.addEventListener("click", openEditPopup);

/* -------------- Открытие окна добавления ------------ */

const addButtonElem = document.querySelector(".profile__add-button");

function openAddPopup() {
  popupElement.querySelector(".popup__title").textContent = "Новое место";

  popupElement.querySelector(".popup__button").value = "создать";

  popupElement.querySelector("#name").placeholder = "Название";

  popupElement.querySelector("#job").placeholder = "Ссылка на картинку";

  console.dir(popupElement.querySelector("#name"));

  openPopup();
}

addButtonElem.addEventListener("click", openAddPopup);

/* ----------------- Закрытие окна --------------- */

const closePopupButton = popupElement.querySelector(".popup__close-btn");

function closeEditPopup(event) {
  const currentPopupElement = event.target.closest(".popup");
  currentPopupElement.remove();
}

closePopupButton.addEventListener("click", closeEditPopup);

/* ----------------- Обработка формы --------------- */

const popupButton = popupElement.querySelector(".popup__button");

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileTitleElem.textContent = nameInput.value;
  profileSubtitleElem.textContent = jobInput.value;

  closeEditPopup(evt);
}

popupButton.addEventListener("click", handleFormSubmit);
