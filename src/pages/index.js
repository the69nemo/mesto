import './index.css';

import {
  // initialCards,
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
  popupAvatar,
  formAvatar,
  avatarOverlay,
  avatarSaveButton,
  popupConfirmSelector,
  popupConfirmButton,
  avatarImg,
} from '../utils/constants.js';

import { FormValidator } from "../components/FormValidator.js";

import { Card } from '../components/Card.js';

import { Section } from '../components/Section.js';

import { PopupWithImage } from '../components/PopupWithImage.js';

import { PopupWithForm } from '../components/PopupWithForm.js';

import { UserInfo } from '../components/UserInfo.js';

import { Api } from '../components/Api';

import { PopupWithConfirm } from '../components/PopupWithConfirm';

const addFormValidation = new FormValidator(dataValidation, formAddCards);
const formProfileValidation = new FormValidator(dataValidation, formProfile);
const formChageAvatarValidation = new FormValidator(dataValidation, formAvatar)

//Включаем валидацию форм
addFormValidation.enableValidation();
formProfileValidation.enableValidation();
formChageAvatarValidation.enableValidation();

const api = new Api ({
  url: 'https://mesto.nomoreparties.co/v1/cohort-35',
  headers: {
    authorization: '8994131c-f4f1-45cc-a5e7-8627a23e5031',
    'Content-Type': 'application/json'
  },
});

const emptyContainer = {};

const handleSubmitProfile = ({ newName, newJob }) =>
  api.editProfileFromApi({
      name: newName,
      about: newJob
    })
    .then(() => {
      emptyContainer.userInfo.setUserInfo({ newName, newJob })
    })
    .catch((err) => console.log(`Ошибка ${err}`));

const handleSubmitAddCard = ({ nameCard, cardUrl }) =>
    api.postNewCardToServer({
        name: nameCard,
        link: cardUrl,
      })
    .then((card) => {
      emptyContainer.section.addItem(card)
    })
    .catch((err) => console.log(err));

const handleSubmitCardDelete = () => {
  const cardObject = document.querySelector(`#card${emptyContainer.cardId}`);
  return api.deleteCardFromServer(emptyContainer.cardId)
      .then(() => {
        cardObject.remove();
      })
      .catch((err) => console.log(`Ошибка ${err}`))
};

const handleCardDelete = (cardId) => {
  emptyContainer.cardId = cardId;
  popupWithConfirm.open();
}

const handleSubmitChangeAvatar = ({ newAvatarLink }) =>
  api.patchAvatarFromApi(newAvatarLink)
    .then((user) => {

      emptyContainer.userInfo.setUserInfo({ newAvatar: user.avatar })
      console.log(user.avatar)
    })
    .catch((err) => console.log(`Ошибка со сменой аватара ${err}`));

const handleCardLike = (cardId) =>
  api.putLikesOnCardFromApi(cardId)
    .catch((err) => console.log(`Ошибка с простановкой лайков ${err}`));

const handleCardDeleteLike = (cardId) =>
  api.deleteLikesOnCardFromApi(cardId)
    .catch((err) => console.log(`Ошибка с удалением лайков ${err}`));


const addCardPopup = new PopupWithForm(popupCards, handleSubmitAddCard);
const popupWithImage = new PopupWithImage(popupImage);
const editProfilePopup = new PopupWithForm(popupProfile, handleSubmitProfile);
const popupWithChangeAvatar = new PopupWithForm('.popup_avatar', handleSubmitChangeAvatar);
const popupWithConfirm = new PopupWithConfirm(popupConfirmSelector, popupConfirmButton, handleSubmitCardDelete);

const createCard = (item) =>
  new Card({
    object: item,
    selector: elementsTemplate,
    handleCardClick: () => popupWithImage.open(item),
    userId: emptyContainer.userInfo.userId,
    handleCardDelete: () => handleCardDelete(item._id),
    handleCardLike: () => handleCardLike(item._id),
    handleCardDeleteLike: () => handleCardDeleteLike(item._id)
  }).generateCard();

//   const cardsElement = newCard.generateCard();
//   return cardsElement
// }

// const cardList = new Section({
//   items: [],
//   renderer: (item) => {
//     cardList.addItem(createCard(item));
//   },
// },
// elementsSection);
// cardList.renderItem();

Promise.all([api.getUserInfoFromApi(), api.getCardsFromApi()])
  .then(([user, cards]) => {
    emptyContainer.userInfo = new UserInfo({
      userName: profileName,
      userJob: profileJob,
      avatar: avatarImg,
      userId: user._id
    });

    emptyContainer.userInfo.setUserInfo({
      newName: user.name,
      newJob: user.about,
      newAvatar: user.avatar,
    });

    emptyContainer.section = new Section({
      items: cards.reverse(),
      renderer: createCard,
      userId: emptyContainer.userInfo.userId
    }, elementsSection);


    emptyContainer.section.renderItem();
  })
  .catch((err) => console.log(`Ошибка в создании карточек: ${err}`));

//обработчик кноки сохранения в popup'е добавления card
greateButton.addEventListener('click', () => {
  addFormValidation.resetValidation();
  addCardPopup.open();
});

//обработчик кнопки открытия popup'а редактирования данных профиля
editButton.addEventListener('click', () => {
  const user = emptyContainer.userInfo.getUserInfo();
  formName.value = user.name;
  formJob.value = user.about;
  formProfileValidation.resetValidation();
  editProfilePopup.open();
});

avatarOverlay.addEventListener('click', () => {
  formChageAvatarValidation.resetValidation();
  popupWithChangeAvatar.open();
})