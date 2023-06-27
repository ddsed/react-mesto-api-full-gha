import { NavLink, Route, Routes } from 'react-router-dom';

function NavBar({ userEmail, loggedIn, loggedOut }) {
  return(
    <nav className="navbar">
        {
            loggedIn ?
            <>
                <p className="navbar__email">{userEmail}</p>
                <button type="button" className="navbar__button" onClick={loggedOut}>Выйти</button>
            </> 
            :
            <>
                <Routes>
                    <Route path="*" element={<NavLink to="/sign-up" className="navbar__link">Регистрация</NavLink>} />
                    <Route path='/sign-in' element={<NavLink to="/sign-up" className="navbar__link">Регистрация</NavLink>} />
                    <Route path='/sign-up' element={<NavLink to="/sign-in" className="navbar__link">Войти</NavLink>} />
                </Routes>
            </>
        }
    </nav>
  )
}

export default NavBar;