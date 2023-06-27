export const configValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_inactive',
    inputErrorClass: 'popup__item_type_error',
    errorClass: 'popup__item-error_active'
};

export const config = {
    selectorCardsList: '.elements__grid-container',
    selectorTemplateCard: '.cards-template',
};

export const popupAddNewCard = document.querySelector('.popup_type_add-card');
export const popupEditProfile = document.querySelector('.popup_type_edit-profile');
export const popupAvatar = document.querySelector('.popup_type_avatar');

export const buttonAdd = document.querySelector('.profile__add-button');

export const submitButtonCard = document.querySelector('.popup__submit-button_type_card');
export const initialButtonCardText = submitButtonCard.textContent;

const formEditProfile = popupEditProfile.querySelector('.popup__form_type_edit-profile');
export const nameInput = formEditProfile.querySelector('.popup__item_el_name');
export const descriptionInput = formEditProfile.querySelector('.popup__item_el_description');

export const buttonEdit = document.querySelector('.profile__edit-button');

export const submitButtonProfile = document.querySelector('.popup__submit-button_type_profile');
export const initialButtonProfileText = submitButtonProfile.textContent;

export const editAvatarButton = document.querySelector('.profile__avatar-button');

export const submitButtonAvatar = document.querySelector('.popup__submit-button_type_avatar');
export const initialButtonAvatarText = submitButtonAvatar.textContent;