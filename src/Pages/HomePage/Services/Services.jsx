import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="text-center my-10 space-y-5">
            <h2 className="text-4xl font-semibold text-orange-600" >Services</h2>
            <h1 className="text-5xl font-bold">Our Service Area</h1>
            <p>The majority have suffered alteration in some form,<br /> by injected humour,  or randomised words which do not look even slightly believable. </p>

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