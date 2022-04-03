const page = document.querySelector('.page');
const buttonKhan = page.querySelector('.khan__button');
const popup = page.querySelector('.popup');
const popupButtonClose = popup.querySelector('.popup__button-close');
const formElement = page.querySelector('.popup__form')

function opnePopup(){
  popup.classList.add('popup_active')
}
function closePopup(){
  popup.classList.remove('popup_active')
}
function closePopupByClickOnOverlay (event) {
  if (event.target !== event.currentTarget) {
    return;
  } else {
    closePopup()
  }
}
function formSubmitHandler(evt) {
  evt.preventDefault();
  closePopup()
}

buttonKhan.addEventListener('click', opnePopup)
popupButtonClose.addEventListener('click', closePopup)
popup.addEventListener('click', closePopupByClickOnOverlay)
formElement.addEventListener('submit', formSubmitHandler);
