import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaHouseCircleCheck } from "react-icons/fa6";





export default function Footer() {
  return (
    <footer className="bg-black p-6">
      <div
        className=' flex justify-between   items-center '>

        <div className="flex items-center">
          <span className="text-white">
            <FaHouseCircleCheck size={25} />
          </span>
          <span className="text-2xl font-semibold text-white">
            Market
          </span>
          <span className="text-2xl font-semibold text-slate-500">
            Place
          </span>

        </div>
        <div className="gap-x-10 hidden sm:flex">
          <div className="opacity-90">
            <h4 className="text-white text-sm ">COMPANY</h4>
            <ul className="text-slate-400 text-xs flex gap-y-4 mt-4 flex-col">
              <li>Blog</li>
              <li>Careers</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="opacity-90">
            <h4 className="text-white text-sm ">RESOURCES</h4>
            <ul className="text-slate-400 text-xs flex gap-y-4 mt-4 flex-col ">
              <li>Documentation</li>
              <li>Papers</li>
              <li>Press Conferences</li>
            </ul>
          </div>
          <div className="opacity-90">
            <h4 className="text-white text-sm ">LEGAL</h4>
            <ul className="text-slate-400 text-xs  flex gap-y-4 mt-4 flex-col">
              <li>Terms Of Services</li>
              <li>Privacy Policy</li>
              <li>Cookies Policy</li>
              <li>Data Processing</li>
            </ul>
          </div>
        </div>
        <div>

        </div>

      </div>
      <div>

        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>

      <div className="flex  items-center justify-between">
        <div>
          <span className='text-xs text-gray-400'>© 2025 MarketPlace Inc. All rights reserved</span>
        </div>
        <div>
          <ul className="text-gray-400 flex space-x-3">
            <li><AiFillInstagram /></li>
            <li><FaYoutube /></li>
            <li><FaFacebookSquare /></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
