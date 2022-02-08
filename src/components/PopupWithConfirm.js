import { Popup } from "./Popup.js";

class PopupWithConfirm extends Popup {
  constructor(popupSelector, confirmButton, submitHandler) {
    super(popupSelector);
    this._confirmButton = confirmButton;
    this._submitHandler = submitHandler;
  }

  _submitPopup() {
    this._confirmButton.textContent = "Удаление...";
    this._submitHandler()
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