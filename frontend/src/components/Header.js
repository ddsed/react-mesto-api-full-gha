import React from 'react';
import logo from '../images/logo-white.svg';

function Header({children}) {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Лого" />
            {children}
        </header>
    )
}

export default Header;