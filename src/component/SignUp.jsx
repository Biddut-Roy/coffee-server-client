import { useContext } from "react";
import { authContext } from "../Provider/Authprovider";


const SignUp = () => {

    const { signUp } = useContext(authContext)

    const handelSignUP =(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signUp(email, password)
        .then((Result) => {
            // Signed up 
            const createdAt = Result?.user?.metadata?.creationTime
            const user = {email ,createdAt }
            fetch('https://coffee-update-pbghddbo0-biddut-roys-projects.vercel.app/users',{
                method: 'POST',
                body: JSON.stringify(user),
                headers: { 
                    'Content-Type': 'application/json'
                }
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data);
            })
            
            // ...
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
          });
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSignUP} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                   
                        </div>
                        <div className="form-control mt-6">
                        <input type="submit" value="Submit"  className="btn"/>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default SignUp;