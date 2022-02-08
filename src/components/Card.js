class Card {
  constructor ({
    card,
    selector,
    handleCardClick,
    userId,
    handleCardDelete,
    handleCardLike,
    handleCardDeleteLike
  }) {
    this._name = card.name;
    this._link = card.link;
    this._likes = card.likes;
    this._id = card._id;
    this._userId = userId;
    this._ownerId = card.owner._id;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;
    this._handleCardDeleteLike = handleCardDeleteLike;

    this._template =  document.querySelector(this._selector).content;
    this._cardsElement = this._template.querySelector('.element').cloneNode(true);
    this._trash = this._cardsElement.querySelector('.element__trash-box-button');
    this._like = this._cardsElement.querySelector('.element__button');
    this._image = this._cardsElement.querySelector('.element__image');
    this._title = this._cardsElement.querySelector('.element__title');
    this._likeNumber = this._cardsElement.querySelector('.element__like-number');

    this._isLike = this._likes.find((like) => like._id === this._userId);

    if (this._ownerId != this._userId) {
      this._trash.classList.add('element__trash-box-button_hidden');
    }
  }

  _handleLike() {
    const act = () =>
      this._like.classList.contains('element__button_active')
        ? this._handleCardDeleteLike()
        : this._handleCardLike();

    act().then((res) => {
        this._likes = res.likes;
        this._likeNumber.textContent = this._likes.length;
        this._like.classList.toggle('element__button_active');
      })
  }

  _addListeners () {
    this._trash.addEventListener('click', () => {
      this._handleCardDelete();
    });

    this._like.addEventListener('click', () => {
      this._handleLike();
    });

    this._image.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  generateCard() {
    this._isLike ? this._like.classList.add('element__button_active') : null;

    this._title.textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    this._likeNumber.textContent = this._likes.length;
    this._cardsElement.id = 'card' +  this._id;
    this._addListeners();

    return this._cardsElement;
  }
}

export { Card }
