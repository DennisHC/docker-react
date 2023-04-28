export default function Card({ title, imgSrc, bodyText }) {
    return ( 
        <div className="card-container">
            <h1 className="card-title">{title}</h1>
            <img src={imgSrc} className="card-image" alt="card-img"></img>
            <p className="card-body-text">{bodyText}</p>
        </div>
    )
}