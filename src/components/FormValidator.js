class FormValidator {
  constructor (data, formSelector) {
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._form = formSelector;
    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._button = this._form.querySelector(this._submitButtonSelector);
  };

  _showError = (input, errorMessage) => {
    const errorText = this._form.querySelector(`#${input.id}-error`);
    errorText.textContent = errorMessage;
    errorText.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  };

  _hideError = (input) => {
    const errorText = this._form.querySelector(`#${input.id}-error`);
    errorText.textContent = '';
    errorText.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
  };

  _hasInvalidInput = () => {
    return this._inputs.some((input) => {
      return !input.validity.valid});
  };

  _checkInputValid = (input) => {
    if (!input.validity.valid) {
        this._showError(input, input.validationMessage);
    } else {
        this._hideError(input);
    }
  };

  _setInputListeners = () => {
    this._toggleButtonError();
    this._inputs.forEach((input) => {
        input.addEventListener('input', () => {
            this._checkInputValid(input);
            this._toggleButtonError();
        });
    });
  };

  _toggleButtonError = () => {
    if (this._hasInvalidInput()) {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.setAttribute("disabled", "");
    } else {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.removeAttribute("disabled");
    }
  };

  enableValidation = () => {
    this._form.addEventListener('submit', (event) => {
            event.preventDefault();
        });
    this._setInputListeners();
  };

  resetValidation = () => {
    this._toggleButtonError();
    this._inputs.forEach((input) => this._hideError(input));
  }

}

export { FormValidator }
