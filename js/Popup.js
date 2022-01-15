class Popup {
  constructor (popupSelector){
    this._selector = document.querySelector(popupSelector);

  }

  open() {
    this._selector.classList.add('popup__opened');
    this.setEventListeners();
  }

  close() {
    this._selector.classList.remove('popup__opened');
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
    this._selector.addEventListener('click', this._handleButtonClose);
  };

  removeEventListeners() {
    document.removeEventListener('keydown',  this._handleEscClose);
    this._selector.removeEventListener('click', this._handleButtonClose);
  }
}

export {Popup}
