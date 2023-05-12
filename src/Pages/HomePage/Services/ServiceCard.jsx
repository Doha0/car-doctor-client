import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title">{title}</h2>
                <h3 className=" text-left text-xl text-orange-600">Price: ${price} </h3>
                <div className="card-actions">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
