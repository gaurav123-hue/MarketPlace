import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { userData } from '../dummyData';
import List from '../components/List';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import BASE_URL from '../config';
import { useEffect } from 'react';

export default function Profile() {
  const navigate = useNavigate();
  const { updateUser, currentUser } = useContext(AuthContext);
  // console.log(currentUser);

  const handleLogOut = async () => {
    try {
      const res = await fetch(`${BASE_URL}/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include', // Include cookies or authentication headers if necessary
      });

      if (res.ok) {
        // Successfully logged out
        updateUser(null); // Clear user data from local storage
         // Redirect to the home page or login page
      } else {
        // Handle any errors (if the server responds with an error status)
        console.error("Logout failed:", res.statusText);
      }
    } catch (error) {
      // Handle any network errors
      console.error("Error logging out:", error);
    }
  }

  useEffect(() => {
    if (!currentUser) {
      navigate('/signin');
    }
  }, [currentUser, navigate]);

  
  return (
    currentUser &&
    (<div className="grid grid-cols-6 grid-rows-1 gap-2 pt-4">
      <div
        className='col-span-3 h-custom-h overflow-auto  custom-scrollbar '>
        {/* User Information */}
        <div
          className="flex items-center justify-between">
          <span className="text-lg ">
            User Information
          </span>
          <button
            className='py-1 px-2 bg-blue-600 text-white rounded-sm text-sm'>
            Update Profile
          </button>

        </div>
        {/* User Information */}
        <div>
          <span
            className='flex items-center gap-2'>
            Avatar:
            <img
              src={currentUser.userInfo?.avatar || '/images/userProfileImage.png'}
              className='h-8 w-8 rounded-full object-cover' />
          </span>
          <span className="flex gap-2">
            Username:<b>{currentUser.userInfo.username}</b>
          </span>
          <span className="flex gap-2">
            E-mail:<b>{currentUser.userInfo.email}</b>
          </span>
          <span>
            <button className="bg-red-500 text-white rounded-md text-sm py-1 px-2 mt-2" onClick={handleLogOut}>
              LogOut
            </button>
          </span>

        </div>
        <hr className="mt-3 text-xl text-slate-700
        "/>


        {/*My List*/}
        <div
          className=" mt-2">
          <div
            className="flex justify-between items-center">
            <span
              className="text-lg ">
              My List
            </span>
            <button
              className='py-1 px-2 bg-blue-600 text-white rounded-sm text-sm'>
              Add New
            </button>
          </div>
          <div
            className="mt-3">
            <List />
          </div>
        </div>


      </div>
      <div
        className='col-span-3  h-custom-h overflow-auto  custom-scrollbar'> {/* Saved Properties */}
        <div
          className='mt-4'>
          <span
            className="text-lg">
            Saved Properties
          </span>
          <div
            className="mt-4">
            <List />
          </div>
        </div>
      </div>
    </div>)
  )
}
