const showError = (form, input, errorMessage, errorClass, inputErrorClass) => {
  const errorText = form.querySelector(`#${input.id}-error`);
  errorText.textContent = errorMessage;
  errorText.classList.add(errorClass);
  input.classList.add(inputErrorClass);
}

const hideError = (form, input, errorClass, inputErrorClass) => {
  const errorText = form.querySelector(`#${input.id}-error`);
  errorText.textContent = '';
  errorText.classList.remove(errorClass);
  input.classList.remove(inputErrorClass);
}

const hasInvalidInput = (inputs) => {
  return Array.from(inputs).some((element) => !element.validity.valid);
}

const checkInputValid = (form, input, { inputErrorClass, errorClass }) => {
  if (!input.validity.valid) {
      showError(form, input, input.validationMessage, errorClass, inputErrorClass);
  } else {
      hideError(form, input, errorClass, inputErrorClass);
  }
}

const setInputListeners = (form, { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }) => {
  const inputs = form.querySelectorAll(inputSelector);
  const button = form.querySelector(submitButtonSelector);

  inputs.forEach((input) => {
      input.addEventListener('input', () => {
          checkInputValid(form, input, rest);
          toggleButtonError(inputs, button, inactiveButtonClass);
      });
  });
}

const toggleButtonError = (inputs, button, inactiveButtonClass) => {
  if (hasInvalidInput(inputs)) {
      button.classList.add(inactiveButtonClass);
      button.setAttribute("disabled", " ");
  } else {
      button.classList.remove(inactiveButtonClass);
      button.removeAttribute("disabled");
  }
}

const enableValidation = ({ formSelector, ...rest }) => {
  const forms = document.querySelectorAll(formSelector);

  forms.forEach((form) => {
      form.addEventListener('submit', (event) => {
          event.preventDefault();
      });

      setInputListeners(form, rest);
  });
}


enableValidation ({
  formSelector: '.popup__content',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
