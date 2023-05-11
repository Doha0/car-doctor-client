import { Link } from "react-router-dom";
import logImage from "../../assets/images/login/login.svg"

const SignUp = () => {
    const handelSignUp = (event) => {
        event.preventDefault();
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 lg:mr-20">
                    <img src={logImage} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-4xl text-center font-bold text-orange-600">SignUp</h1>
                        <form onSubmit={handelSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary border-orange-600 bg-orange-600" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center">Already Have an account <Link to='/login' className="text-orange-600">Sign Up</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;