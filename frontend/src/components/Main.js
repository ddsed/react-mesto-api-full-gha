import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete }) {

    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                
                <img className="profile__avatar" src={currentUser.avatar} alt="Фото" />
                <div className="profile__avatar-container" onClick={onEditAvatar}>	
                    <button className="profile__avatar-button button" type="button" ></button>
                </div>

                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button className="profile__edit-button button" type="button" onClick={onEditProfile}></button>
                    <p className="profile__description">{currentUser.about}</p>
                </div>

                <button className="profile__add-button button" type="button" onClick={onAddPlace}></button>
            </section>

            <section className="elements">
                <ul className="elements__grid-container">
                    {cards.map((card) => (
                        <Card
                        card={card}
                        key={card._id}
                        onCardClick={onCardClick}
                        onCardLike={onCardLike}
                        onCardDelete={onCardDelete}
                        />)
                    )}
                </ul> 
            </section>
        </main>
    )
}

export default Main