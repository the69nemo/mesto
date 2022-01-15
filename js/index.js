import {
  initialCards,
  editButton,
  popupProfile,
  popupCards,
  greateButton,
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
  addCardButton,
  popupImage,
  elementsTemplate,
} from './other.js';

import { Card } from './Сard.js';

import { FormValidator } from './FormValidator.js';

import { Section } from './Section.js';

import { Popup } from './Popup.js';

import { PopupWithImage } from './PopupWithImage.js';

import { PopupWithForm } from './PopupWithForm.js';

import { UserInfo } from './UserInfo.js';

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

const submitProfileHandler = (values) => {
  userInfo.setUserInfo(values)
};

const userInfo = new UserInfo({profileName, profileJob});
const addCardPopup = new Popup(popupCards);
const popupWithImage = new PopupWithImage(popupImage);
const popupWithForm = new PopupWithForm(formProfiles, submitProfileHandler)

const newOneCard = (item) => {
  const newCard = new Card({
    object: item,
    selector: elementsTemplate,
    popupWithImage: () => popupWithImage.open(item),
  });
  const cardsElement = newCard.generateCard();
  return cardsElement
}

const cardList = new Section({
  items: initialCards,
  renderer: newOneCard,
},
elementsSection
);

cardList.renderItem();


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
  const user = userInfo.getUserInfo();
  user.name = formName.textContent;
  user.job = formJob.textContent;
  formProfileValidation.resetValidation();
  popupWithForm.open();
};

//закрытие popup редактирования профиля и сохранение внесенных данных
// function submitProfileForm (evt) {
//   evt.preventDefault();
//   profileName.textContent = formName.value;
//   profileJob.textContent = formJob.value;
//   closePopup(popupProfile);
// };

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

//обработчик кноки сохранения в popup'е добавления card
greateButton.addEventListener('click', () => {
  addCardPopup.open();
});

//обработчик кнопки открытия popup'а редактирования данных профиля
editButton.addEventListener('click', openPopupProfile);

// //обработчик кнопки сохранения данных профиля
// formProfile.addEventListener('submit', submitProfileForm);

//обработчик кнопки сохранения данных добовления card
formAddCards.addEventListener('submit', addCard);
