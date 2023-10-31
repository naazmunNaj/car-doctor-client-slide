import { Link } from 'react-router-dom';
import login from '../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
const Login = () => {
    const {signIn} = useContext(AuthContext)

    const handleLogin =(e)=>{
        e.preventDefault();
        console.log("form submitting");
        const form = e.target;
        const email =form.email.value;
        const password =form.password.value;
        console.log(email, password);

        signIn(email,password)
        .then(result=> {
            const user = result.user
            console.log("LoggedInUser", user);
        })
        .catch(error =>console.log(error))
    }
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-28">
          <div className="">
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
            <p className="text-3xl font-bold text-orange-500 text-center">Login</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name='email'
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name= 'password'
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <div>New here? <span className='text-orange-600'><Link to ="/register">Sign Up</Link></span></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Login;
