import React from "react";
import NavTab from "./NavTab/NavTab";
import './Promo.css';

function Promo() {
    return (
        <section className='promo'>
            <div className='container container_place_promo'>
                <div className='promo__content'>
                    <h1 className='promo__title'>
                    Учебный проект студента факультета Веб-разработки.
                    </h1>
                    <NavTab />
                </div>
            </div>
        </section>
    );
}

export { Promo };
