import AdCard from "./AdCard";
import '../../assets/components/ads.css';

const Ads = [{
    id: 1,
    img: "https://placehold.co/100",
    title: "Bike",
    price: 100,
    date: "2021-09-01",
    address: "123 Main St"
},
{
    id: 2,
    img: "https://placehold.co/100",
    title: "Car",
    price: 1000,
    date: "2021-09-01",
    address: "123 Main St"
},
{
    id: 3,
    img: "https://placehold.co/100",
    title: "House",
    price: 100000,
    date: "2021-09-01",
    address: "123 Main St"
}]

const AllAds = () => {
    return (
        <div className="ads">
            {Ads.map(ad => 
                <AdCard 
                    key={ad.id} 
                    img={ad.img} 
                    title={ad.title} 
                    price={ad.price} 
                    address={ad.address} 
                    date={ad.date} 
                    id={0} 
                />
            )}
        </div>
    )
}

export default AllAds;