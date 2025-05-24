import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
  const {createUser, signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const photo = form.photo.value;

    if(!name || !photo){
      toast.warn('Please enter Your name and Photo!')
    }
    const isValidPassword = () =>{
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasLength = password.length >= 6;
      return hasUpperCase && hasLength && hasLowerCase;
    }
    if(!isValidPassword()){
      toast.warn('Password must be at least 6 characters and an uppercase and a lowercase!');
      return
    }
    createUser(email, password)
      .then(result =>{
        const user = result.user;
        navigate('/')
        toast.success("Successfully registered!")
      })
      .catch(error =>{
        const errorMessage = error.message;
        // console.log(errorMessage);
      })
  }

  const googleSignIn = () =>{
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
        <h2 className="text-3xl font-bold text-center text-purple-700">Create your account</h2>
        <p className="text-center text-gray-600">
          Join our gaming community and start sharing your reviews!
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name='name'
              placeholder="Enter Your Name"
              className="input input-bordered w-full bg-white border border-gray-300 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name='email'
              placeholder="user@gmail.com"
              className="input input-bordered w-full bg-white border border-gray-300 placeholder:text-gray-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Profile Picture URL (Optional)
            </label>
            <input
              type="text"
              name='photo'
              placeholder="https://example.com/avatar.jpg"
              className="input input-bordered w-full bg-white placeholder:text-gray-400 border border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name='password'
              placeholder="••••••••"
              className="input w-full text-sm pr-10 bg-white border border-gray-300 placeholder:text-gray-400"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Must contain at least 6 characters, one uppercase and one lowercase letter
            </p>
          </div>

          <button
            type="submit"
            className="btn border-none w-full bg-purple-600 hover:bg-purple-700 text-white"
          >
            Sign up
          </button>
        </form>

        <div className="divider">Or continue with</div>
        
        <button onClick={googleSignIn} className="btn bg-white w-full border border-gray-300 text-gray-700 hover:bg-gray-200">
          <FaGoogle className="text-xl mr-2" />
          Sign up with Google
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have account?
          <Link to="/login" className="text-purple-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
