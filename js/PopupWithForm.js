import { Popup } from '../js/Popup.js';

class PopupWithForm extends Popup {
  constructor (popupSelector, submitForm) {
    super(popupSelector);
    this._submit = submitForm;
    this._form = this._selector.querySelector('.profileContent');
  }

  _getInputValues () {
    this._formInputs = Array.from(this._form.querySelectorAll('.popup__form-input'));
    this._allFormValues = {};
    this._formInputs.forEach ((input) =>{
      this._allFormValues[input.name] = input.value;
    });
    return this._allFormValues
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submit(this._getInputValues());
      this.close();
    });
  }

  removeEventListeners() {
    super.removeEventListeners();
    this._form.removeEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submit(this._getInputValues());
      this.close();
    });
  }

  close() {
    this._form.reset();
    super.close();
  }
}

export { PopupWithForm }
