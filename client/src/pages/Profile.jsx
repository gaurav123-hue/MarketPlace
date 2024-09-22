import React from 'react';
import { userData } from '../dummyData';
import List from '../components/List';

export default function Profile() {
  return (
    <div className="grid grid-cols-5 grid-rows-1 gap-2 pt-4">
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
              src={userData.img}
              className='h-8 w-8 rounded-full object-cover' />
          </span>
          <span className="flex gap-2">
            Username:<b>{userData.name}</b>
          </span>
          <span className="flex gap-2">
            E-mail:<b>{userData.mail}</b>
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

        {/* Saved Properties */}
        <div 
          className='mt-4'>
          <span
            className="text-lg">
            Saved Properties
          </span>
          <div
            className="mt-4">
            <List/>
          </div>
        </div>
      </div>
      <div
        className='col-span-2'>Messages
      </div>
    </div>
  )
}
