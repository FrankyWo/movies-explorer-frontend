import './NavProfileBtn.css'
import React from 'react';

function NavProfileBtn(props) {
    return (
        <>
            <a href='/profile' className='nav-profile-btn nav-profile-btn-link link'>Аккаунт</a>
            <button
                className='nav-profile-menu'
                type='button'
                onClick={props.isOpen}>
            </button>
        </>
    );
}

export default NavProfileBtn;