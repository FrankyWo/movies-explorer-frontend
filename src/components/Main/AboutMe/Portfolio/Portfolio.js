import "./Portfolio.css";

function Portfolio() {
    return (
        <>
            <p className="portfolio__portfolio-link">Портфолио</p>
            <ul className="portfolio__navigation">
                <li>
                    <a
                        href="https://github.com/FrankyWo/how-to-learn"
                        className="portfolio__link-container"
                        rel="noreferrer"
                        target="_blank">
                        <p className="portfolio__link-name link">Статичный сайт</p>
                        <span className='portfolio__link-span link'>↗</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/FrankyWo/russian-travel"
                        className="portfolio__link-container"
                        rel="noreferrer"
                        target="_blank">
                        <p className="portfolio__link-name link">Адаптивный сайт</p>
                        <span className='portfolio__link-span link'>↗</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/FrankyWo/react-mesto-auth"
                        className="portfolio__link-container"
                        rel="noreferrer"
                        target="_blank">
                        <p className="portfolio__link-name link">Одностраничное приложение</p>
                        <span className='portfolio__link-span link'>↗</span>
                    </a>
                </li>
            </ul>
        </>
    );
}

export default Portfolio;
