// ищем popup элементы
const editButton = document.querySelector(".profile__btn");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close-button")

// ищем формы
const form = document.querySelector(".popup__content");
const formName = form.querySelector(".popup__form-name");
const formJob = form.querySelector(".popup__form-job");

// ищем значение имени и профессии из профиля
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__subtitle");


function openPopup() {
  popup.classList.add("popup__opened");
  formName.value = profileName.textContent;
  formJob.value = profileJob.textContent;
};

function popupClose() {
  popup.classList.remove("popup__opened");
};

function formSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileJob.textContent = formJob.value;
  popupClose();
};

editButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', popupClose);
form.addEventListener('submit', formSubmit);
