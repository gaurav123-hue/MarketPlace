import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BASE_URL from '../config';

export default function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password }),
        credentials: 'include',

      });

      const userData = await res.json();

      // Check for success in the response
      if (res.ok) {
        // Assuming your server sends back a success message
        if (userData.message === "User created successfully") {
          navigate("/signin");
        }
      } else {
        // Handle server error
        setError(userData.message || "Registration failed");
      }
    } catch (err) {
      // Catch network errors
      setError("An error occurred. Please try again.");
      console.error("Error:", err);
    }
  };

  return (
    <>
      <div className="px-8 mt-12 col-span-4 sm:mx-auto sm:mt-0 sm:px-0 sm:flex sm:flex-col sm:items-center sm:justify-center h-custom-h">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">Create a new account</span>
          <span className="text-sm  text-slate-800 w-[500px] text-center">Join our community today and unlock access to the best rental and buying opportunities for your dream property!</span>
        </div>
        <form onSubmit={handleSubmit} className='mt-5 flex flex-col gap-y-4'>
          <input type="text" name="username" id="username" placeholder='Username' className='text-md rounded-sm p-2 focus:outline-none border border-gray-700' />
          <input type="email" name="email" id="email" placeholder='Email' className='text-md rounded-sm p-2 focus:outline-none border border-gray-700 w-[500px]' />
          <input type="password" name="password" id="password" placeholder='Password' className='text-md rounded-sm p-2 focus:outline-none border border-gray-700' />
          <button className="text-md rounded-sm bg-slate-500 text-white p-2">Sign Up</button>
          {error && <span className="text-red-500">{error}</span>}
        </form>
        <div className="mt-2 text-xs">

          <span className=" text-slate-900">Already have an account? </span>
          <Link to="/signin">
          <span className='hover:text-slate-500 transition-all'> 

            Sign In
          </span>
          </Link>
        </div>
      </div>

    </>
  );
}
