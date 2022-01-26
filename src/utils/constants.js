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
const popupProfile = ".popup_profile";
const popupCards = ".popup_cards";
const popupCard = document.querySelector(".popup_cards")
const greateButton = document.querySelector(".profile__button-add");
const popupImage = '.popup_image';
const popupImages = document.querySelector('.popup_image');
const pictureInPopupImage = popupImages.querySelector('.popup__picture');
const figcaptionInPopupImage = popupImages.querySelector('.popup__figcaption');
const allPopups = document.querySelectorAll('.popup');
const addCardButton = popupCard.querySelector('.popup__save-button');

// ищем формы
const formProfiles = ".profileContent";
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
const elementsSection = ".elements";

const elementsTemplate = '.element-template';

const elementTemplate = document.querySelector('.element-template').content;

const dataValidation = ({
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});




export {
  initialCards,
  editButton,
  popupProfile,
  popupCards,
  greateButton,
  addCardButton,
  popupImage,
  pictureInPopupImage,
  figcaptionInPopupImage,
  allPopups,
  formProfile,
  formProfiles,
  formAddCards,
  formName,
  formJob,
  cardName,
  cardUrl,
  profileName,
  profileJob,
  elementsSection,
  elementTemplate,
  elementsTemplate,
  dataValidation,
}

