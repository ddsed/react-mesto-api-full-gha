import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = useState(currentUser.name);
    const [description, setDescription] = useState(currentUser.about);

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser, isOpen]);

    function handleChangeName(e) {
        setName(e.target.value);
    }
    
    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateUser({
          name,
          about: description,
        });
    }

    return (
        <PopupWithForm
            name='edit-profile'
            title='Редактировать профиль'
            buttonText='Сохранить'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
		>
			<input type="text" id="name-input" className="popup__item popup__item_el_name" name="form-name" placeholder="Имя" required minLength="2" maxLength="40" value={name} onChange={handleChangeName} />
			<span className="name-input-error popup__item-error popup__item-error_first"></span>

			<input type="text" id="description-input" className="popup__item popup__item_el_description" name="form-description" placeholder="О себе" required minLength="2" maxLength="200" value={description} onChange={handleChangeDescription} />
			<span className="description-input-error popup__item-error popup__item-error_second"></span>
		</PopupWithForm>
    )
}

export default EditProfilePopup