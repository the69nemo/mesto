import './index.css';

import {
  initialCards,
  editButton,
  popupProfile,
  popupCards,
  greateButton,
  formName,
  formJob,
  profileName,
  profileJob,
  elementsSection,
  popupImage,
  elementsTemplate,
  dataValidation,
  formProfile,
  formAddCards,
} from '../utils/constants.js';

import { FormValidator } from "../components/FormValidator.js";

import { Card } from '../components/Сard.js';

import { Section } from '../components/Section.js';

import { PopupWithImage } from '../components/PopupWithImage.js';

import { PopupWithForm } from '../components/PopupWithForm.js';

import { UserInfo } from '../components/UserInfo.js';

const addFormValidation = new FormValidator(dataValidation, formAddCards);
const formProfileValidation = new FormValidator(dataValidation, formProfile);

//Включаем валидацию форм
addFormValidation.enableValidation();
formProfileValidation.enableValidation();

const handleSubmitProfile = (inputValues) => userInfo.setUserInfo(inputValues);

const handleSubmitAddCard = ({ nameCard, cardUrl }) => {
  const card = createCard({
    name: nameCard,
    link: cardUrl,
  });
  cardList.addItem(card);
}

const userInfo = new UserInfo({
  userName: profileName,
  userJob: profileJob,
});

const addCardPopup = new PopupWithForm(popupCards, handleSubmitAddCard);
const popupWithImage = new PopupWithImage(popupImage);
const editProfilePopup = new PopupWithForm(popupProfile, handleSubmitProfile)


const createCard = (item) => {
  const newCard = new Card({
    object: item,
    selector: elementsTemplate,
    handleCardClick: () => popupWithImage.open(item),
  });
  const cardsElement = newCard.generateCard();
  return cardsElement
}

const cardList = new Section({
  items: initialCards.reverse(),
  renderer: createCard,
},
elementsSection
);

cardList.renderItem();

//обработчик кноки сохранения в popup'е добавления card
greateButton.addEventListener('click', () => {
  addFormValidation.resetValidation();
  addCardPopup.open();
});

//обработчик кнопки открытия popup'а редактирования данных профиля
editButton.addEventListener('click', () => {
  const user = userInfo.getUserInfo();
  formName.value = user.name;
  formJob.value = user.job;
  formProfileValidation.resetValidation();
  editProfilePopup.open();
});
