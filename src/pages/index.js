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
  addFormValidation,
  formProfileValidation,
} from '../components/utils/constants.js';

import { Card } from '../components/Сard.js';

import { Section } from '../components/Section.js';

import { PopupWithImage } from '../components/PopupWithImage.js';

import { PopupWithForm } from '../components/PopupWithForm.js';

import { UserInfo } from '../components/UserInfo.js';

//Включаем валидацию форм
addFormValidation.enableValidation();
formProfileValidation.enableValidation();

const submitProfileHandler = (inputValues) => userInfo.setUserInfo(inputValues);

const submitAddCardHandler = ({ nameCard, cardUrl }) => {
  const card = newOneCard({
    name: nameCard,
    link: cardUrl,
  });
  cardList.addItem(card);
}

const userInfo = new UserInfo({
  selectorName: profileName,
  selectorJob: profileJob,
});

const addCardPopup = new PopupWithForm(popupCards, submitAddCardHandler);
const popupWithImage = new PopupWithImage(popupImage);
const editProfilePopup = new PopupWithForm(popupProfile, submitProfileHandler)


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
  items: initialCards.reverse(),
  renderer: newOneCard,
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
