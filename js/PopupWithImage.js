import { Popup } from '../js/Popup.js';

class PopupWithImage extends Popup{
  constructor (popupSelector) {
    super(popupSelector);
    this._name = this._selector.querySelector('.popup__figcaption');
    this._image = this._selector.querySelector('.popup__picture');
  }

  open ({ link, name }) {
    this._image.src = link;
    this._image.alt = name;
    this._name.textContent = name;
    super.open();
  }

}

export { PopupWithImage }
