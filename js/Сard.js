import { openPopupImage } from "./other.js";

class Card {
  constructor (object, selector) {
    this._name = object.name;
    this._link = object.link;
    this._selector = selector;
  }

  _getTemplate() {
    const elementTemplate = document.querySelector(this._selector).content;
    const cardsElement = elementTemplate.cloneNode(true);
    this._trash = cardsElement.querySelector('.element__trash-box-button');
    this._like = cardsElement.querySelector('.element__button');

    return cardsElement;
  }

  _addListeners () {
    this._trash.addEventListener('click', (evt) => {
      evt.target.closest('.element').remove();
    });

    this._like.addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__button_active');
    });

    this._element.querySelector('.element__image').addEventListener('click', (evt) => {
      openPopupImage(evt);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._addListeners();

    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;

    return this._element;
  }
}

export { Card }
