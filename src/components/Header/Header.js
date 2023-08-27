import React from 'react';
import './Header.css'
import Logo from "../Logo/Logo";
import NavProfileBtn from "./NavProfileBtn/NavProfileBtn";
import HeaderAuth from "./HeaderAuth/HeaderAuth";
import Navigation from './Navigation/Navigation';
import HeaderNav from "./HeaderNav/HeaderNav";


const Header = ({ auth }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    function handleClickOpen() {
        setIsOpen(true)
    }

    function handleClickClose() {
        setIsOpen(false)
    }

    return (
        <header className='header'>
            <div className='header__logo-container'>
                <Logo />
                {auth && <HeaderNav onClick={handleClickOpen} />}
            </div>
            {auth ? <NavProfileBtn isOpen={handleClickOpen} /> : <HeaderAuth />}
            <Navigation isOpen={isOpen} onClick={handleClickClose} />
        </header>
    );
}

export default Header;