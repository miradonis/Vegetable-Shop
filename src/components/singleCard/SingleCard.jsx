import './SingleCard.scss';

function SingleCard(props) {
    return (
        <div className="singleCardWrapper">
            <img src='https://unsplash.it/200/150' alt='Bild' />
            <h1>name</h1>
            <div>
                <p>gewicht</p>
                <p>price</p>
            </div>
            <button>Kaufen</button>
            <p>* mwst und so</p>
        </div>
    );
}

export default SingleCard;