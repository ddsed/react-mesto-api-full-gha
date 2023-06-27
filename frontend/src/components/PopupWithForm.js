import React from 'react';

function PopupWithForm({ name, title, buttonText, children, isOpen, onClose, onSubmit }) {
    return(
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} >
            <div className="popup__container">
                <button className="popup__close-button button" type="button" onClick={onClose}></button>
                <form className={`popup__form popup__form_type_${name}`} name={`popup-form-${name}`} noValidate onSubmit={onSubmit}>
                    <h2 className="popup__title">{title}</h2>
                    {children}
                    <button className="popup__submit-button popup__submit-button_type_profile" type="submit">{buttonText}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm