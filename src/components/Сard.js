class Card {
  constructor ({object, selector, handleCardClick}) {
    this._name = object.name;
    this._link = object.link;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const elementTemplate = document.querySelector(this._selector).content;
    const cardsElement = elementTemplate.cloneNode(true);
    this._trash = cardsElement.querySelector('.element__trash-box-button');
    this._like = cardsElement.querySelector('.element__button');
    this._image = cardsElement.querySelector('.element__image');
    this._title = cardsElement.querySelector('.element__title');

    return cardsElement;
  }

  _addListeners () {
    this._trash.addEventListener('click', (evt) => {
      evt.target.closest('.element').remove();
    });

    this._like.addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__button_active');
    });

    this._image.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._addListeners();

    this._title.textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;

    return this._element;
  }
}

export { Card }
