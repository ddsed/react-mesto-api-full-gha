import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Register = ({ registerUser }) => {
    const [registerForm, setRegisterForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (evt) => {
        const input = evt.target;
        setRegisterForm({
            ...registerForm,
            [input.name]: input.value,
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        registerUser(registerForm);
    }

    return(
        <div className="form-container">
                
            <form className="form" onSubmit={handleSubmit}>
                <p className="form__title">Регистрация</p>
                <input className="form__input" placeholder="Email" value={registerForm.email} type="email" name="email" id="email" onChange={handleChange} />
                <input className="form__input" placeholder="Пароль" value={registerForm.password} type="password" name="password" id="password" onChange={handleChange} />
                <button className="form__button" type="submit">Зарегистрироваться</button>
            </form>

            <div className='already-sign-in'>
                <p className='already-sign-in__question'>Уже зарегистрированы?</p>
                <Link to="/sign-in" className="already-sign-in__link">Войти</Link>
            </div>
        </div> 
    )
}

export default Register;