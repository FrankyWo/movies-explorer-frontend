import React from "react";
import "./AboutProject.css";

function AboutProject() {
    return (
        <section className='about-project'>
            <h1 className='about-project__title'>О проекте</h1>
            <div className='about-project__cards-container'>
                <div className='about-project__card'>
                    <h2 className='about-project__card-title'>Дипломный проект включал 5 этапов</h2>
                    <p className='about-project__card-description'>
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
                        доработки.
                    </p>
                </div>
                <div className='about-project__card'>
                    <h2 className='about-project__card-title'>На выполнение диплома ушло 5 недель</h2>
                    <p className='about-project__card-description'>
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
                        защититься.
                    </p>
                </div>
            </div>
            <div className='about-project__time-container'>
                <p className='about-project__duration'>1 неделя</p>
                <p className='about-project__duration'>4 недели</p>
                <p className='about-project__subject'>Back-end</p>
                <p className='about-project__subject'>Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject;