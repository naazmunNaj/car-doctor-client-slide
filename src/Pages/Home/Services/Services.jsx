import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch("services.json")
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])
  return (
    <>
      <div className="text-center">
        <h2 className="text-4xl text-orange-500">Our Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          fugit quae excepturi deserunt
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
            {
                services.map(service=> <ServiceCard
                key ={service.id}
                service={service}
                ></ServiceCard>)
            }
        </div>
      </div>
    </>
  );
};

export default Services;
