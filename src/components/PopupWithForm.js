import { Popup } from '../components/Popup.js';

class PopupWithForm extends Popup {
  constructor (popupSelector, submitForm) {
    super(popupSelector);
    this._submit = submitForm;
    this._form = this._popup.querySelector('.popup__content');
    this._submitButton = this._popup.querySelector('.popup__save-button');
    this._formInputs = this._form.querySelectorAll('.popup__form-input');
  }

  _getInputValues () {
    this._allFormValues = {};
    this._formInputs.forEach ((input) => {
      this._allFormValues[input.name] = input.value;
    });

    return this._allFormValues;
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();
    this._submitButton.textContent = 'Сохранение...';
    this._submit(this._getInputValues())
      .then(() => this.close())
      .finally(() => {
        setTimeout(() => {
          this._submitButton.textContent = 'Сохранить';
        }, 800);
      });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleSubmit);
  }

  removeEventListeners() {
    super.removeEventListeners();
    this._form.removeEventListener('submit', this._handleSubmit);
  }

  close() {
    this._form.reset();
    super.close();
  }
}

export { PopupWithForm }
