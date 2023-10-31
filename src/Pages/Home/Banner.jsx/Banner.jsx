const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-[600px] ">
        <img src="https://i.imgur.com/t3ENUTw.jpg" className="w-full rounded-xl" />
        <div className="absolute text-white h-full bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00)] rounded-xl" >
          <div className="space-y-5 w-2/5 ml-8 mt-24">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-outline btn-error">Error</button>
              <button className="btn btn-outline btn-error">Error</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 gap-5 right-5 bottom-0 ">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.imgur.com/5YqLX2W.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 gap-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.imgur.com/idIlNuL.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 gap-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://i.imgur.com/kGek0Ev.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 gap-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
