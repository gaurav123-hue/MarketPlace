import React from 'react'
import Navbar from '../components/Navbar';
import ImgSlider from '../components/ImgSlider';
import { singlePostData, userData } from '../dummyData';
import { CiLocationOn } from "react-icons/ci";

export default function SinglePage() {
  return (

    <div className="grid grid-cols-1 sm:grid-cols-8 grid-rows-1 gap-1 bg-blue-50 order-1 px-4 pt-2">
      <div className="col-span-5 ">

        <div className="grid grid-cols-1 grid-rows-2 gap-2 ">

          <div >
            <ImgSlider images={singlePostData.images} />
          </div>

          <div className='py-4 flex flex-col justify-between'>

            <div className="flex justify-between">
              <div>
                
              <p className="text-2xl">
                {singlePostData.title}
           
              </p>
              <h3 className="flex  items-center mt-4">
                <CiLocationOn size={18} />
                {singlePostData.address}
              </h3>
              </div>

          
              <div className="flex items-start   mr-2">
                <div className="bg-blue-200 p-2 rounded-md flex flex-col items-center">
                  <img src={userData.img} alt="" className="h-12 w-12 object-cover rounded-full" />
                  <h3 className="text-normal">{userData.name}</h3>
                </div>
              </div>
            </div>


            <div className="text-sm -mt-2">
              <p>
                {singlePostData.description}
              </p>
            </div>

          </div>


        </div>

      </div>
      <div className="col-span-3 ">3</div>
    </div>


  )
}
