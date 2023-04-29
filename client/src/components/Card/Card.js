import './Card.css';

export default function Card({ title, imgSrc, bodyText }) {
    return ( 
        <div className="card-container">
            <header className="card-header-container">
                <h1 className="card-title">{title}</h1>
            </header>

            <div className="card-image-container">
                <img src={imgSrc} className="card-image" alt="card-img"></img>
            </div>

            <div className="card-body-container">
                <p className="card-body-text">{bodyText}</p>
            </div>
        </div>
    );
}