import './SingleCard.scss';

function SingleCard(props) {
    return (
        <div className="singleCardWrapper">
            <img src='https://unsplash.it/200/150' alt='Bild' />
            <h1>Ruccola</h1>
            <div>
                <p>500 gramm</p>
                <p>2,00 €</p>
            </div>
            <button>Kaufen</button>
            <div className='speciallInfo'>
                <p>* mwst: 17%</p>
                <p>Zusatzinfo</p>

            </div>
        </div>
    );
}

export default SingleCard;