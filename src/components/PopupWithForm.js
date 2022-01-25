import { Popup } from '../components/Popup.js';

class PopupWithForm extends Popup {
  constructor (popupSelector, submitForm) {
    super(popupSelector);
    this._submit = submitForm;
    this._form = this._selector.querySelector('.popup__content');
    this._formInputs = this._form.querySelectorAll('.popup__form-input');
  }

  _getInputValues () {
    this._allFormValues = {};
    this._formInputs.forEach ((input) => {
      this._allFormValues[input.name] = input.value;
    });

    return this._allFormValues;
  }

  _events = (evt) => {
    evt.preventDefault();
    this._submit(this._getInputValues());
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._events);
  }

  removeEventListeners() {
    super.removeEventListeners();
    this._form.removeEventListener('submit', this._events);
  }

  close() {
    this._form.reset();
    super.close();
  }
}

export { PopupWithForm }
