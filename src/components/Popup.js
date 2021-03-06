class Popup {
  constructor (popupSelector){
    this._popup = document.querySelector(popupSelector);

  }

  open() {
    this._popup.classList.add('popup__opened');
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup__opened');
    this.removeEventListeners();
  }

  _handleEscClose = (evt) => {
    if (evt.key == "Escape") {
      this.close();
    }
  }

  _handleButtonClose = (evt) => {
    if (evt.target.classList.contains('popup__opened')) {
      this.close();
    };
    if (evt.target.classList.contains('popup__close-button')) {
      this.close();
    };
  }

  setEventListeners() {
    document.addEventListener('keydown',  this._handleEscClose);
    this._popup.addEventListener('click', this._handleButtonClose);
  };

  removeEventListeners() {
    document.removeEventListener('keydown',  this._handleEscClose);
    this._popup.removeEventListener('click', this._handleButtonClose);
  }
}

export {Popup}
