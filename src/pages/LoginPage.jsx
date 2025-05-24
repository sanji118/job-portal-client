import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {signInWithGoogle,signIn} = useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
        .then(result => {
        if (result && result.user) {
            
            navigate('/');
            toast.success('Successfully logged in!');
        } else {
            
            Swal.fire('Login failed: User not found!');
        }
        })
        .catch(error => {
        const errorMessage = error.message;

        
        if (errorMessage.includes('EMAIL_NOT_FOUND')) {
            Swal.fire('Error', 'User not found!', 'error');
        } else if (errorMessage.includes('INVALID_PASSWORD')) {
            Swal.fire('Error', 'Invalid password!', 'error');
        } else if (errorMessage.includes('USER_DISABLED')) {
            toast.error('This user account is disabled.');
        } else {
            toast.error(`Login failed: ${errorMessage}`);
            
        }
        });
    };

  const googleSignin = ()=>{
    signInWithGoogle()
    .then(result=>{
      const res = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      toast.success('Successfully registered !')
      navigate('/')
    })
    .catch(error =>{
      const errorMessage = error.message;
      // console.log(errorMessage)
    })
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 py-20">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-purple-700">Sign in to your account</h2>
        <p className="text-center text-gray-600">Welcome back! Please enter your details.</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name='email'
              className="input input-bordered w-full bg-white border border-gray-300 placeholder:text-gray-400"
              placeholder="user@gmail.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                className="input input-bordered w-full text-sm pr-10 bg-white border border-gray-300 placeholder:text-gray-400"
                placeholder="••••••••"
              />
              <span onClick={()=> setShowPassword(!showPassword)} className="absolute inset-y-0 right-3 flex items-center text-gray-500 z-10">
                {
                  showPassword? <FaEyeSlash/> : <FaEye/>
                }
              </span>
            </div>
          </div>


          <button type="submit" className="btn border-none w-full bg-purple-600 hover:bg-purple-700">
            Sign in
          </button>
        </form>

        <div className="divider">Or continue with</div>

        <button onClick={googleSignin} className="btn bg-white w-full border border-gray-300 text-gray-700 hover:bg-gray-200">
          <FaGoogle className="text-xl mr-2" />
          Sign in with Google
        </button>

        <p className="text-center text-sm text-gray-600">
          Don't have any account?
          <Link to="/register" className="text-purple-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
