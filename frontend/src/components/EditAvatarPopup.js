import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const avatarRef = React.useRef();

    useEffect(() => {
        avatarRef.current.value = "";
    }, [isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
    }
    
    return (
        <PopupWithForm
            name='avatar'
            title='Обновить аватар'
            buttonText='Сохранить'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
		>
            <input type="url" id="avatar-input" className="popup__item popup__item_el_description popup__item_type_avatar" name="form-description" placeholder="Ссылка на аватар" required ref={avatarRef} />
            <span className="avatar-input-error popup__item-error"></span>
		</PopupWithForm>
    )
}

export default EditAvatarPopup