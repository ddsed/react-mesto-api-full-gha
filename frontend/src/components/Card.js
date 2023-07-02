import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner === currentUser._id;
    const isLiked = card.likes.some(i => i === currentUser._id);
    const cardLikeButtonClassName = (`element__like ${isLiked && 'element__like_active'}`); 

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }

    return(
            <li className="element">
                <img className="element__photo" src={card.link} alt={card.name} onClick={handleClick}/>

                {isOwn && <button className="element__delete" type="button" onClick={handleDeleteClick}/>}
                <div className="element__wrapper">
                    <h2 className="element__title">{card.name}</h2>
                    <div className="element__like-wrapper">
                        <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
                        <span className="element__like-count">{card.likes.length}</span>
                    </div>
                </div>
            </li>
    )
}

export default Card