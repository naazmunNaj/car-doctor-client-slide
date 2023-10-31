

const ServiceCard = ({service}) => {
    const {title, img, price}= service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="service" /></figure>
        <div className="card-body justify-start">
          <h2 className="">{title}</h2>
          <p className="text-orange-600">{price}</p>
        </div>
      </div>
    );
};

export default ServiceCard;