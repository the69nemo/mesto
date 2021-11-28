const initialCards = [
  {
    name: 'Звездное небо',
    link: 'https://images.unsplash.com/photo-1638091990389-7f4d9bbe8d81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
  },
  {
    name: 'Горное озеро',
    link: 'https://images.unsplash.com/photo-1576521403898-3a103a0f1e31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
  },
  {
    name: 'Песчаные дюны',
    link: 'https://images.unsplash.com/photo-1638024510305-c36fcc0bf3b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1645&q=80'
  },
  {
    name: 'Серпантин',
    link: 'https://images.unsplash.com/photo-1637954975855-bef3ec525549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Зимняя дорога',
    link: 'https://images.unsplash.com/photo-1637983927552-812e9871191e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Пик в облаках',
    link: 'https://images.unsplash.com/photo-1637919177060-16ccc91fce1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  }
];

// ищем popup элементы
const editButton = document.querySelector(".profile__btn");
const popupProfile = document.querySelector(".popup__profile");
const popupCards = document.querySelector(".popup__cards");
const popupCloseButton = document.querySelector(".popup__close-button");
const greateButton = document.querySelector(".profile__button-add");
const closeButtons = document.querySelectorAll('.popup__close-button');
const popupImage = document.querySelector('.popup_image');
const pictureInPopupImage = popupImage.querySelector('.popup__picture');
const figcaptionInPopupImage = popupImage.querySelector('.popup__figcaption');
const addCardButton = document.querySelector('.popup__save-button');

// ищем формы
const formProfile = document.querySelector(".profileContent");
const formAddCards = document.querySelector(".addCardsContent");
const formName = document.querySelector(".popup__form-name");
const formJob = document.querySelector(".popup__form-job");
const cardName = document.querySelector(".popup__form-card-name");
const cardUrl = document.querySelector(".popup__form-card-url");

// ищем значение имени и профессии из профиля
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__subtitle");

// ищем контейнер для карточек
const elementsSection = document.querySelector('.elements');

function createCard (card) {
  const elementTemplate = document.querySelector('.element-template').content;
  const cardsElement = elementTemplate.cloneNode(true);
  const deleteCardButton = cardsElement.querySelector('.element__trash-box-button');
  const likeCardButton = cardsElement.querySelector('.element__button');
  const cardImage =  cardsElement.querySelector('.element__image');
  const cardTitle = cardsElement.querySelector('.element__title');

  cardTitle.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;

  deleteCardButton.addEventListener('click', (evt) => evt.target.closest('.element').remove());
  likeCardButton.addEventListener('click', (evt) => evt.target.classList.toggle('element__button_active'));
  cardImage.addEventListener ('click', openPopupImage);

  return cardsElement;
};

initialCards.forEach(card => elementsSection.append(createCard(card)));

function openPopup (popupName) {
  popupName.classList.add("popup__opened");
};

function closePopup (popupName) {
  popupName.closest('.popup').classList.remove('popup__opened');
};

function openPopupProfile() {
  openPopup (popupProfile);
  popupProfile.classList.add("popup__opened");
  formName.value = profileName.textContent;
  formJob.value = profileJob.textContent;
};

function submitForm (evt) {
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileJob.textContent = formJob.value;
  closePopup(popupProfile);
};

function openPopupImage (evt) {
  openPopup (popupImage);
  pictureInPopupImage.src = evt.target.src;
  figcaptionInPopupImage.textContent =  evt.target.alt;
};

function addCard (evt) {
  evt.preventDefault();
  card = {
    name: cardName.value,
    link: cardUrl.value,
  };
  elementsSection.prepend(createCard(card));
  cardUrl.value = '';
  cardName.value = '';
  closePopup(popupCards);
};

popupCloseButton.addEventListener('click', () => closePopup)
greateButton.addEventListener('click', () => openPopup(popupCards));
editButton.addEventListener('click', openPopupProfile);
formProfile.addEventListener('submit', submitForm);
closeButtons.forEach (button => button.addEventListener('click', () => closePopup(button)));
formAddCards.addEventListener('submit', addCard);
