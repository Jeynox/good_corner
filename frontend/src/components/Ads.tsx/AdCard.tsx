import '../../assets/components/adCard.css';

export type AdCardProps = {
    id: number;
    img: string;
    title: string
    price: number;
    address: string;
    date: string;
}

const AdCard = ({id, img, title, price, address, date}: AdCardProps) => {
    return (
        <article key={id} className='card'>
            <a href="#">
                <div className="card__img">
                    <img src={img} alt="" />
                </div>
                <div className="card__text">
                    <h3>{title}</h3>
                    <b>{price} €</b>
                    <address>{address}</address>
                    <time>{date}</time>
                </div>
            </a>
        </article>
    )
}

export default AdCard;