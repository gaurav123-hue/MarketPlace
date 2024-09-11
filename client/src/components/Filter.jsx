import React from 'react'

export default function Filter() {
    return (
        <div className='h-auto pr-4'>
            <span
                className='text-2xl font-thin'>
                Search results for
            </span>
            {/* search query div */}
            <div className='mt-1 '>
                <div className="flex flex-col">
                    <label htmlFor="city-location" className='text-slate-600 text-sm'>Location</label>
                    <input type="text" placeholder='City Location' id='city-location' className="border focus:outline-none py-1 px-1" />
                </div>
                <div className='mt-3 flex flex-col sm:flex-row sm:items-end justify-between gap-y-2'>
                    {/* Rent/Buy */}
                    <div className="flex flex-col">
                        <label htmlFor="type"
                        className='text-slate-600 text-sm'>Type</label>
                        <select name="type" id="type"
                        className="border p-1 text-slate-700 focus:outline-none">
                            <option value="Buy">Buy</option>
                            <option value="Rent">Rent</option>
                        </select>
                    </div>
                    {/* Property */}
                    <div className="flex flex-col">
                        <label htmlFor="type"
                        className='text-slate-600 text-sm'>Property</label>
                        <select name="type" id="type"
                        className="border p-1 text-slate-700 focus:outline-none">
                            <option value="Apartment">Apartment</option>
                            <option value="House">House</option>
                            <option value="Condo">Condo</option>
                            <option value="Land">Land</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="type"
                        className='text-slate-600 text-sm'>Min. Price</label>
                        <input type='number'
                        className="border p-1 text-slate-700 focus:outline-none"
                        max={1000000}
                        min={0}/>
                    </div>


                    <div className="flex flex-col">
                    <label htmlFor="type"
                        className='text-slate-600 text-sm'>Max. Price</label>
                        <input type='number'
                        className="border p-1 text-slate-700 focus:outline-none"
                        max={1000000}
                        min={0}/>
                    </div>


                    <div className="flex flex-col">
                    <label htmlFor="type"
                        className='text-slate-600 text-sm'>Bedrooms</label>
                        <input type='number'
                        className="border p-1 text-slate-700 focus:outline-none"
                        max={10}
                        min={0}/>
                    </div>

                    <div className="flex items-center justify-center">
                        <button className="bg-yellow-500 text-white py-2 px-2 rounded-sm hover:scale-105 transition-all">
                            Search
                        </button>
                    </div>
                </div>


            </div>
        </div>
    )
}
