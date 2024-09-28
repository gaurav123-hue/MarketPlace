import React, { useState ,useContext} from 'react';
import BASE_URL from '../config';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function SignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { updateUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const username = formData.get("username"); // Make sure this matches the input name
    const password = formData.get("password");
    


    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password }),
        credentials:'include',
      });

      const userData = await res.json();
      updateUser(userData);      // console.log("Stored User in localStorage:", localStorage.getItem("User")); // Log the stored user data
            // Check for success in the response
      if (res.ok) {
        // Navigate to home or dashboard on successful login
        navigate("/"); // Change this to your desired route
      } else {
        // Handle server error
        setError(userData.message || "Login failed");
      }
    } catch (err) {
      // Catch network errors
      setError("An error occurred. Please try again.");
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="grid sm:grid-cols-7 grid-rows-1 gap-4 items-center">
        <div className="px-8 mt-12 col-span-4 sm:mx-auto sm:mt-0 sm:px-0 sm:flex sm:flex-col sm:items-center sm:justify-center h-custom-h">
          <div>
            <span className="text-3xl font-bold">Login to your account!!!</span>
          </div>
          <form onSubmit={handleSubmit} className='mt-5 flex flex-col gap-y-4'>
            <input type="text" name="username" id="username" required placeholder='Username'
              className='text-md rounded-sm p-2 focus:outline-none border border-gray-700' />
            <input type="password" name="password" id="password" required placeholder='Password'
              className='text-md rounded-sm p-2 focus:outline-none border border-gray-700' />
            <button disabled={isLoading} className="text-md rounded-sm bg-blue-500 text-white p-2">
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
            {error && <span className="text-red-500">{error}</span>}
          </form>
          <Link to="/signup">
            <span className="mt-2 text-xs text-blue-900">Don't have an account? Sign Up</span>
          </Link>
        </div>
        <div className='col-span-3 items-center justify-center pb-10 hidden sm:flex'>
          <img src="/public/images/signin.jpg" alt="" className="h-full w-full rounded-sm object-cover" />
        </div>
      </div>
    </>
  );
}
