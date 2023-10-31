

const About = () => {
    return (
<> <h2 className="text-3xl font-bold text-orange-600 text-center">About Us</h2>
<div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
        <img src="https://i.imgur.com/s09uNE8.jpg" className="w-3/4 rounded-lg shadow-2xl" />
        <img src="https://i.imgur.com/XKVRNxW.jpg" className="w-1/2 top-1/2 right-5 rounded-lg shadow-2xl absolute border-white border-8" />
        </div>
          <div className="lg:w-1/2 mt-12">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
</>
    );
};

export default About;