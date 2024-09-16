import React from 'react';
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { TfiCommentAlt } from "react-icons/tfi";


export default function Card({ item }) {
    return (


        <div className="sm:grid grid-cols-5 gap-2  cursor-pointer ">
            <div className="col-span-2 rounded-l">
                <Link to={`/${item.id}`}>
                    <img src={item.img} alt="" className="rounded-md h-60 w-full sm:h-40 sm:w-80" />
                </Link>

            </div>
            <div className="col-span-3 px-2">
                <div className=''>
                    <Link to={`/${item.id}`}>

                        <p className="text-md ">

                            {item.title}

                        </p>
                    </Link>
                    <div className="flex flex-col gap-y-3">

                        <div className="flex">
                            <CiLocationOn size={18} />
                            <span className=" text-slate-700 text-sm ">
                                {`${item.address}`}
                            </span>
                        </div>
                        <div className=" ">
                            <span className="text-md bg-yellow-100 rounded-sm py-1 px-2">
                                {`$${item.price}`}
                            </span>
                        </div>
                        <div className='sm:mt-4 mt-2 flex justify-between'>
                            <div className="text-xs flex gap-2 py-2">
                                <span className="flex  items-center gap-1 bg-slate-100 text-slate-600 py-1 px-2">
                                    <FaBed />{`${item.bedroom} `}Bedrooms
                                </span>
                                <span className="flex  items-center gap-1 bg-slate-100 text-slate-600 py-1 px-2">
                                    <FaBath />{`${item.bathroom} `}Bathrooms
                                </span>
                            </div>

                            <div className="text-md text-slate-600 flex items-center mr-4 gap-2">
                                <FaRegBookmark />
                                <TfiCommentAlt />


                            </div>
                        </div>
                    </div>


                </div>



            </div>
            {/* <hr className="mt-2 sm:hidden" /> */}
        </div>

    )
}
