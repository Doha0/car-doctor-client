import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [asc, setAsc] = useState(true);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services?sort=${asc ? 'asc' : 'des'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [asc])
    return (
        <div className="text-center my-10 space-y-5">
            <h2 className="text-4xl font-semibold text-orange-600" >Services</h2>
            <h1 className="text-5xl font-bold">Our Service Area</h1>
            <p>The majority have suffered alteration in some form,<br /> by injected humour,  or randomised words which do not look even slightly believable. </p>

            <button
                className="btn btn-secondary bg-orange-500"
                onClick={() => setAsc(!asc)}
            >{asc ? 'price: High to Low' : 'price: Low to High'}
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;