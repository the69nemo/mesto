import {
  initialCards,
  editButton,
  popupProfile,
  popupCards,
  greateButton,
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
  addCardButton,
} from './other.js';

import { Card } from './Сard.js';

import { FormValidator } from './FormValidator.js';

const dataValidation = ({
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

//Включаем валидацию форм
const addFormValidation = new FormValidator(dataValidation, formAddCards);
const formProfileValidation = new FormValidator(dataValidation, formProfile);
addFormValidation.enableValidation();
formProfileValidation.enableValidation();

//Создание Cards
initialCards.forEach((item) => {
  const card = new Card(item, '.element-template');
  const cardsElement = card.generateCard();

  handleAddCardInARow(elementsSection, 'append', cardsElement);
});

//функция добавления карточиек в разметку
function handleAddCardInARow (section, method, object) {
  if (method === 'append') {
    return section.append(object);
  } else if (method === 'prepend'){
    return section.prepend(object);
  }
}

//открытие popup для редактирования данных профиля
function openPopupProfile() {
  openPopup (popupProfile);
  formName.value = profileName.textContent;
  formJob.value = profileJob.textContent;
  formProfileValidation.resetValidation();
};

//закрытие popup редактирования профиля и сохранение внесенных данных
function submitProfileForm (evt) {
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileJob.textContent = formJob.value;
  closePopup(popupProfile);
};

//создание card на основании введенных данныъ из popup
function addCard (evt) {
  evt.preventDefault();

  const cardObject = new Card ({
    name: cardName.value,
    link: cardUrl.value,
  }, '.element-template');

  handleAddCardInARow(elementsSection, 'prepend', cardObject.generateCard());

  cardUrl.value = '';
  cardName.value = '';

  addCardButton.setAttribute('disabled', '');
  addCardButton.classList.add('popup__save-button_disabled');

  closePopup(popupCards);
};

//закрытиe popup'a при нажатии на область вне окна popup'а и кнопку закрытия
allPopups.forEach((popup) => {
  popup.addEventListener ('click', (evt) => {
    if (evt.target.classList.contains('popup__opened')) {
      closePopup(popup);
    };
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    };
  });
});



//обработчик кноки сохранения в popup'е добавления card
greateButton.addEventListener('click', () => openPopup(popupCards));

//обработчик кнопки открытия popup'а редактирования данных профиля
editButton.addEventListener('click', openPopupProfile);

//обработчик кнопки сохранения данных профиля
formProfile.addEventListener('submit', submitProfileForm);

//обработчик кнопки сохранения данных добовления card
formAddCards.addEventListener('submit', addCard);
