import React from 'react';

function ImagePopup({card, isOpen, onClose}) {
    return (
        <div className={`popup popup_type_image ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__content">
                <button className="popup__close-button button" type="button" onClick={onClose}></button>
                <img className="popup__photo" src={card.link} alt={card.name}/>
                <h2 className="popup__title popup__title_type_image">{card.name}</h2>
            </div>
        </div>
    )
}

export default ImagePopup 