import './ScrollMoviesBtn.css';

function MoreBtn({ onClick }) {
    return (
        <button
            type='button'
            onClick={onClick}
            className='btn ScrollMoviesBtn hover-effect'>
            Ещё
        </button>
    );
}

export { MoreBtn };
