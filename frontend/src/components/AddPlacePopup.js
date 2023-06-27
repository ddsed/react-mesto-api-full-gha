import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddCard}) {
    const [placeName, setPlaceName] = useState("");
    const [url, setUrl] = useState("");
  
    useEffect(() => {
      setPlaceName("");
      setUrl("");
    }, [isOpen]);
  
    function handleChangePlaceName(e) {
      setPlaceName(e.target.value);
    }
  
    function handleChangeUrl(e) {
      setUrl(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        onAddCard({
          name: placeName,
          link: url,
        });
    }

    return (
        <PopupWithForm
            name='add-card'
            title='Новое место'
            buttonText='Создать'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
		>
            <input type="text" id="place-input" className="popup__item popup__item_el_name" name="form-name" placeholder="Название" required minLength="2" maxLength="30" value={placeName} onChange={handleChangePlaceName} />
            <span className="place-input-error popup__item-error popup__item-error_first"></span>

            <input type="url" id="place-url-input" className="popup__item popup__item_el_description" name="form-description" placeholder="Ссылка на картинку" required value={url} onChange={handleChangeUrl} />
            <span className="place-url-input-error popup__item-error popup__item-error_second"></span>
		</PopupWithForm>
    )
  
}

export default AddPlacePopup