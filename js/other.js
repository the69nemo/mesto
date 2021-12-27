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
const popupProfile = document.querySelector(".popup_profile");
const popupCards = document.querySelector(".popup_cards");
const greateButton = document.querySelector(".profile__button-add");
const popupImage = document.querySelector('.popup_image');
const pictureInPopupImage = popupImage.querySelector('.popup__picture');
const figcaptionInPopupImage = popupImage.querySelector('.popup__figcaption');
const allPopups = document.querySelectorAll('.popup');
const addCardButton = popupCards.querySelector('.popup__save-button');

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

const elementTemplate = document.querySelector('.element-template').content;

function openPopup (popup) {
  popup.classList.add("popup__opened");
  document.addEventListener ('keydown', closePopupWithEsc);
};

//закрытие popup
function closePopup (popup) {
  popup.closest('.popup').classList.remove('popup__opened');
  document.removeEventListener ('keydown', closePopupWithEsc);
};

function openPopupImage (evt) {
  openPopup (popupImage);
  pictureInPopupImage.src = evt.target.src;
  figcaptionInPopupImage.textContent =  evt.target.alt;
};

//функция для закрытия popup'а клавишей esc
function closePopupWithEsc (evt) {
  if (evt.key == "Escape") {
    const currentPopup = document.querySelector('.popup__opened');
    closePopup(currentPopup);
  };
};

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
  formAddCards,
  formName,
  formJob,
  cardName,
  cardUrl,
  profileName,
  profileJob,
  elementsSection,
  elementTemplate,
  closePopup,
  closePopupWithEsc,
  openPopup,
  openPopupImage,
}

