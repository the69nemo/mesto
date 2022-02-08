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
const popupAvatar = document.querySelector('.popup_avatar');
const popupAvatarSelector = '.popup_avatar';
const avatarOverlay = document.querySelector('.profile__avatar-overlay');
const avatarSaveButton = popupAvatar.querySelector('.popup__save-button');
const popupConfirmSelector = '.popup_confirm';
const popupConfirm = document.querySelector(popupConfirmSelector);
const popupConfirmButton = popupConfirm.querySelector('.popup__save-button');

// ищем формы
const formProfiles = ".profileContent";
const formProfile = document.querySelector(".profileContent");
const formAddCards = document.querySelector(".addCardsContent");
const formName = document.querySelector(".popup__form-name");
const formJob = document.querySelector(".popup__form-job");
const cardName = document.querySelector(".popup__form-card-name");
const cardUrl = document.querySelector(".popup__form-card-url");
const formAvatar = document.querySelector('.avatarContent');

const avatarImg = document.querySelector('.profile__avatar')

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
  popupAvatarSelector,
  formAvatar,
  avatarOverlay,
  avatarSaveButton,
  popupConfirmSelector,
  popupConfirmButton,
  avatarImg,
}

