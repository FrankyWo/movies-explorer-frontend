import { Link } from 'react-router-dom';

import './AboutMe.css';
import myPhoto from '../../images/pic__COLOR_pic.jpg';

function AboutMe() {
    return (
        <section className='about-me'>
            <div className='container container_place_about-me'>
                <h2 className='landing-title about-me__title'>Студент</h2>

                <article className='brief'>
                    <h3 className='brief__title'>Виталий</h3>
                    <p className='brief__subtitle'>Фронтенд-разработчик, 30 лет</p>
                    <p className='brief__desc'>
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
                        Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
                        фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <Link
                        to='https://github.com/FrankyWo'
                        target='_blank'
                        className='link link_theme_primary brief__link hover-effect hover-effect_type_opacity-60'>
                        Github
                    </Link>
                    <img
                        src={myPhoto}
                        alt='Моё фото'
                        className='brief__img'
                    />
                </article>
                <article className='portfolio'>
                    <h3 className='portfolio__title'>Портфолио</h3>
                    <ol className='list portfolio__list'>
                        <li className='portfolio__item'>
                            <Link
                                to='https://github.com/FrankyWo/how-to-learn'
                                target='_blank'
                                className='link link_theme_primary portfolio__link hover-effect hover-effect_type_opacity-60'>
                                Статичный сайт
                            </Link>
                        </li>
                        <li className='portfolio__item'>
                            <Link
                                to='https://github.com/FrankyWo/russian-travel'
                                target='_blank'
                                className='link link_theme_primary portfolio__link hover-effect hover-effect_type_opacity-60'>
                                Адаптивный сайт
                            </Link>
                        </li>
                        <li className='portfolio__item'>
                            <Link
                                to='https://github.com/FrankyWo/react-mesto-auth'
                                target='_blank'
                                className='link link_theme_primary portfolio__link hover-effect hover-effect_type_opacity-60'>
                                Одностраничное приложение
                            </Link>
                        </li>
                    </ol>
                </article>
            </div>
        </section>
    );
}
export { AboutMe };
