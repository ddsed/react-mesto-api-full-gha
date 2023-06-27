import React, { useState } from 'react';

const Login = ({ loginUser }) => {

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (evt) => {
        const input = evt.target;
        setLoginForm({
            ...loginForm,
            [input.name]: input.value,
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        loginUser(loginForm);
    }

    return(
        <div className="form-container">
            
            <form className="form" onSubmit={handleSubmit}>
                <p className="form__title">Вход</p>
                <input className="form__input" placeholder="Email" value={loginForm.email} type="email" name="email" id="email" onChange={handleChange} />
                <input className="form__input" placeholder="Пароль" value={loginForm.password} type="password" name="password" id="password" onChange={handleChange} />
                <button className="form__button" type="submit">Войти</button>
            </form>
        </div> 
    )
}

export default Login;