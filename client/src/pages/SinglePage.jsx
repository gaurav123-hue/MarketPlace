import React from 'react'
import Navbar from '../components/Navbar';
import ImgSlider from '../components/ImgSlider';
import { singlePostData, userData } from '../dummyData';
import { CiLocationOn } from "react-icons/ci";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { MdOutlinePets } from "react-icons/md";
import { MdRealEstateAgent } from "react-icons/md";
import { IoMdResize } from "react-icons/io";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { LiaSchoolSolid } from "react-icons/lia";
import { TbBusStop } from "react-icons/tb";
import { IoIosRestaurant } from "react-icons/io";
import Map from '../components/Map';
import { TfiCommentAlt } from "react-icons/tfi";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

import { useState } from 'react';











export default function SinglePage() {
  const [isSaved, setIsSaved] = useState(false);

  // Toggle the saved state
  const handleClick = () => {
    setIsSaved(!isSaved); // Toggle between true and false
  };
  return (

    <div className="grid grid-cols-1 sm:grid-cols-8 grid-rows-1 gap-1 bg-blue-50 order-1 px-4 pt-2 pb-4 custom-scrollbar">
      <div className="col-span-5 ">

        <div className="grid grid-cols-1 grid-rows-2 gap-2 ">

          <div >
            <ImgSlider images={singlePostData.images} />
          </div>

          <div className='py-4 flex flex-col justify-between'>

            <div className="flex justify-between ">
              <div>

                <p className="text-2xl">
                  {singlePostData.title}

                </p>
                <h3 className="flex  items-center ">
                  <CiLocationOn size={18} />
                  {singlePostData.address}
                </h3>

                <div className="w-fit mt-2">

                  <p className="p-2  bg-yellow-200">
                    {`$${singlePostData.price}`}
                  </p>
                </div>
              </div>


              <div className="flex items-start   mr-2">
                <div className="bg-blue-200 p-2 rounded-md flex flex-col items-center">
                  <img src={userData.img} alt="" className="h-12 w-12 object-cover rounded-full" />
                  <h3 className="text-xs">{userData.name}</h3>
                </div>
              </div>
            </div>


            <div className="text-sm ">
              <p>
                {singlePostData.description}
              </p>
            </div>

          </div>


        </div>

      </div>
      <div className="col-span-3 rounded-md">
        <div>
          <h4 className='text-lg'>General </h4>
          <div className="sm:bg-blue-100 sm:p-2 flex flex-col gap-3 rounded-sm mt-2 sm:mt-0">

            {/* utilities */}
            <div className="flex items-center gap-2">
              <div>
                <FaScrewdriverWrench size={20} />
              </div>
              <div>
                <p className="text-normal ">
                  Utilities
                </p>
                <p className="text-xs text-slate-600">
                  Renter is responsible
                </p>
              </div>
            </div>

            {/* Pet Policy */}
            <div className="flex items-center gap-2">
              <div>
                <MdOutlinePets size={20} />

              </div>
              <div>
                <p className="text-normal ">
                  Pet Policy
                </p>
                <p className="text-xs text-slate-600">
                  Pets Allowed
                </p>
              </div>
            </div>

            {/* Property Fees*/}
            <div className="flex items-center gap-2">
              <div>
                <MdRealEstateAgent size={20} />

              </div>
              <div>
                <p className="text-normal ">
                  Property Fees
                </p>
                <p className="text-xs text-slate-600">
                  Must have 3x the rent in total household income
                </p>
              </div>
            </div>
          </div>

          <h4 className="text-lg mt-3
          ">Property Details</h4>

          <div className="flex justify-between mt-2 ">

            {/* RoomSize */}
            <div className="flex gap-2 items-center bg-blue-100 py-1 px-2  rounded-sm ">

              <div>
                <IoMdResize size={20} />

              </div>
              <div className='text-md'>
                {`${singlePostData.size} sqft`}
              </div>
            </div>
            {/* Beds */}
            <div className="flex gap-2  items-center bg-blue-100 py-1 px-2 rounded-sm">

              <div>
                <IoBed size={20} />

              </div>
              <div className='text-md'>
                {`${singlePostData.bedRooms} Bedrooms`}
              </div>
            </div>

            <div className="flex gap-2 items-center bg-blue-100 py-1 px-2 rounded-sm">

              <div>
                <FaBath size={20} />

              </div>
              <div className='text-md'>
                {`${singlePostData.bathroom} Bathrooms`}
              </div>
            </div>
          </div>

          <h4 className="text-lg mt-3
          ">Nearby Places </h4>

          <div className="p-2 bg-blue-100 rounded-sm flex justify-between">

            {/* schools */}

            <div className="flex items-center gap-2">
              <div>
                <LiaSchoolSolid size={20} />

              </div>
              <div className="flex flex-col items-start">
                <p className="text-sm">
                  Schools
                </p>
                <p className="text-xs">
                  {
                    singlePostData.school
                  }
                </p>
              </div>
            </div>

            {/* BusStops */}
            <div className="flex items-center gap-2">
              <div>
                <TbBusStop size={20} />

              </div>
              <div className="flex flex-col items-start">
                <p className="text-sm">
                  Bus Stop
                </p>
                <p className="text-xs">
                  {
                    singlePostData.bus
                  }
                </p>
              </div>
            </div>

            {/* Restaurant */}
            <div className="flex items-center gap-2">
              <div>
                <IoIosRestaurant size={20} />

              </div>
              <div className="flex flex-col items-start">
                <p className="text-sm">
                  Restaurant
                </p>
                <p className="text-xs">
                  {
                    singlePostData.restaurant
                  }
                </p>
              </div>
            </div>
          </div>


          {/* Map/Location */}
          <h4 className='text-lg mt-3'>
            Location
          </h4>
          <div className="mt-2">

            <div className='  mt-2 '>
              <Map items={[singlePostData]} height={"200px"} />  {/* Pass height prop here */}
            </div>

            <div className="flex justify-between text-md mt-4 px-1">
              <button className="flex items-center gap-2 p-2 bg-blue-400 text-white  ">
                <TfiCommentAlt />
                Send a message
              </button>

              <button
                onClick={handleClick}
                className={`flex items-center gap-2 p-2 rounded-sm border 
        ${isSaved ? 'border-blue-400 text-blue-400 bg-blue-100' : 'border-blue-400 text-blue-400 bg-white'}
        transition duration-300 ease-in-out transform hover:scale-105`}
              >
                {isSaved ? <FaBookmark /> : <FaRegBookmark />}
                {isSaved ? 'Saved' : 'Save the place'}
              </button>
            </div>
          </div>




        </div>

      </div>
    </div>


  )
}
