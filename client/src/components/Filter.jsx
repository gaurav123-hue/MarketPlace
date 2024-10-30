import React from 'react'

export default function Filter() {
    return (
        <div className='h-auto px-6 sm:px-0'>
            <span
                className='text-2xl font-thin text-slate-950'>
                Search results for
            </span>
            {/* search query div */}
            <div className='mt-1 '>
                <div className="flex flex-col">
                    <label htmlFor="city-location" className='text-slate-900 text-sm'>Location</label>
                    <input type="text" placeholder='City Location' id='city-location' className="border focus:outline-none py-1 px-1  border-slate-400" />
                </div>
                <div className='mt-3 flex flex-col sm:flex-row sm:items-end justify-between gap-y-2'>
                    {/* Rent/Buy */}
                    <div className="flex flex-col">
                        <label htmlFor="type"
                        className='text-slate-900 text-sm'>Type</label>
                        <select name="type" id="type"
                        className="border p-1 text-slate-900 focus:outline-none  border-slate-400">
                            <option value="Buy">Buy</option>
                            <option value="Rent">Rent</option>
                        </select>
                    </div>
                    {/* Property */}
                    <div className="flex flex-col">
                        <label htmlFor="type"
                        className='text-slate-900 text-sm'>Property</label>
                        <select name="type" id="type"
                        className="border p-1 text-slate-900 focus:outline-none  border-slate-400">
                            <option value="Apartment">Apartment</option>
                            <option value="House">House</option>
                            <option value="Condo">Condo</option>
                            <option value="Land">Land</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="type"
                        className='text-blue-900 text-sm'>Min. Price</label>
                        <input type='number'
                        placeholder='0000'
                        className="border p-1 text-slate-900 focus:outline-none  border-slate-400"
                        max={1000000}
                        min={0}/>
                    </div>


                    <div className="flex flex-col">
                    <label htmlFor="type"
                        className='text-slate-900 text-sm'>Max. Price</label>
                        <input type='number'
                        placeholder='0000'
                        className="border p-1 text-slate-700 focus:outline-none  border-slate-400"
                        max={1000000}
                        min={0}/>
                    </div>


                    <div className="flex flex-col">
                    <label htmlFor="type"
                        className='text-slate-900 text-sm'>Bedrooms</label>
                        <input type='number'
                        placeholder='0'
                        className="border p-1 text-slate-700 focus:outline-none  border-slate-400"
                        max={10}
                        min={0}/>
                    </div>

                    <div className="flex items-center justify-center ">
                        <button className="bg-slate-500 text-white mt-2 py-2 px-2 rounded-sm hover:scale-105 transition-all">
                            Search
                        </button>
                    </div>
                </div>


            </div>
        </div>
    )
}
