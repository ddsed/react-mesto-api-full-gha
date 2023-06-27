import React from 'react';
import success from '../images/success.svg';
import fail from '../images/fail.svg';

function InfoTooltip({ name, isOpen, onClose, isSuccess }) {
    const infoImg = isSuccess ? success : fail;
    const infoText = isSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.';
    
    return (
      <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container popup__container_type_info-outcome">
          <button className="popup__close-button button" type="button" onClick={onClose} />
          <img className="popup__info-image"  src={infoImg} alt='Иконка успеха/ошибки регистрации'/>
          <h2 className="popup__info-text">{infoText}</h2>
        </div>
      </div>
    )
}

export default InfoTooltip;