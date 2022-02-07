import { Popup } from "./Popup.js";

class PopupWithConfirm extends Popup {
  constructor(popupSelector, confirmButton, submitForm) {
    super(popupSelector);
    this._confirmButton = confirmButton;
    this._submitForm = submitForm;
  }

  _submitPopup() {
    this._confirmButton.textContent = "Удаление...";
    this._submitForm()
      .then(() => this.close)
      .finally(() => {
        setTimeout(() => {
          this._confirmButton.textContent = "Да";
        }, 800);
      });
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener("click", this._submitPopup);
  }

  removeEventListeners() {
    super.removeEventListeners();
    this._confirmButton.removeEventListener("click", this._submitPopup);
  }
}

export { PopupWithConfirm };