import {Link} from "react-scroll";
import React from "react";
import "./NavTab.css";

function NavTab() {
    return (
        <nav className='nav-tab'>
            <Link
                to='about-project'
                smooth={true}
                duration={700}
                className='nav-tab__button button'>
                О проекте
            </Link>

            <Link
                to='tech'
                smooth={true}
                duration={700}
                className='nav-tab__button button'>
                Технологии
            </Link>

            <Link
                to='about-me'
                smooth={true}
                duration={700}
                className='nav-tab__button button'>
                Студент
            </Link>
        </nav>
    );
}

export default NavTab;