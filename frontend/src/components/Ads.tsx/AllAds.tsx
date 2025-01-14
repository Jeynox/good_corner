import AdCard from "./AdCard";
import '../../assets/components/ads.css';

const AllAds = () => {
    return (
        <div className="ads">
            <AdCard
                id={1}
                img="https://placehold.co/200"
                title="Bike"
                price={100}
                date="2021-09-01"
                address="123 Main St"
            />
        </div>
    )
}

export default AllAds;