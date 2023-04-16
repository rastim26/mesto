const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const enableValidation = ({ formSelector, ...rest }) => {
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, rest);
  });
};

const setEventListeners = (
  formElement,
  { inputSelector, submitButtonSelector, ...rest }
) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  toggleButtonState(inputList, buttonElement, rest);

  inputList.forEach((inputElement) => {
    const handleCheckEvent = () => {
      isValid(formElement, inputElement, rest);
      toggleButtonState(inputList, buttonElement, rest);
    };

    inputElement.addEventListener("input", handleCheckEvent);
  });
};

const isValid = (formElement, inputElement, rest) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      rest
    );
  } else {
    hideInputError(formElement, inputElement, rest);
  }
};

const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  { inputErrorClass, errorClass }
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (
  formElement,
  inputElement,
  { inputErrorClass, errorClass }
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, rest) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, rest);
  } else {
    enableButton(buttonElement, rest);
  }
};

const disableButton = (buttonElement, { inactiveButtonClass }) => {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.setAttribute("disabled", true);
};

const enableButton = (buttonElement, { inactiveButtonClass }) => {
  buttonElement.classList.remove(inactiveButtonClass);
  buttonElement.removeAttribute("disabled");
};
