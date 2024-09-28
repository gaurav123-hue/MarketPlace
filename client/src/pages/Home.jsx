import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const SearchBar = ({ types }) => {
    // Initial state for the search query
    const [query, setQuery] = useState({
        type: 'buy',
        location: '',
        minPrice: '', // Use empty string for numbers to avoid NaN
        maxPrice: '', // Use empty string for numbers to avoid NaN
    });

    // Function to switch between Buy and Rent
    const switchType = (val) => {
        setQuery((prev) => ({ ...prev, type: val }));
    };

    // Function to update search query inputs (location, price)
    const updateQuery = (key, value) => {
        setQuery((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <div className="searchBar">
            <div className="type flex rounded-t-sm">
                {/* Buttons for Buy and Rent */}
                {types.map((type) => (
                    <button
                        key={type}
                        onClick={() => switchType(type)}
                        className={`px-4 py-2 rounded-t-sm ${query.type === type ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
                            }`}
                    >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                ))}
            </div>

            {/* Search fields for location and price */}
            <div className="searchFields flex flex-col sm:flex-row sm:space-x-2 bg-white sm:border space-y-2 sm:space-y-0">
                <input
                    type="text"
                    placeholder="Location"
                    value={query.location}
                    onChange={(e) => updateQuery('location', e.target.value)}
                    className="px-4 py-2 sm:w-1/3 rounded-sm outline-none border sm:border-none text-slate-700"
                />
                <input
                    type="number"
                    placeholder="Min Price"
                    value={query.minPrice}
                    max={1000000}
                    min={0}
                    onChange={(e) => updateQuery('minPrice', e.target.value)}
                    className="px-4 py-2 sm:w-1/3 rounded-sm outline-none sm:border-none border text-slate-700"
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={query.maxPrice}
                    max={1000000}
                    min={0}
                    onChange={(e) => updateQuery('maxPrice', e.target.value)}
                    className="px-4 py-2 sm:w-1/3 rounded-sm outline-none border sm:border-none text-slate-700"
                />
                <button className="bg-blue-500 text-white px-6 py-2 rounded-r-sm mt-4 sm:mt-0">
                    Search
                </button>
            </div>
        </div>
    );
};

const Home = () => {
    // Types for the property options (Buy or Rent)
    const types = ['buy', 'rent'];
    const { currentUser } = useContext(AuthContext);

    // // Conditional logging for currentUser
    console.log(currentUser ? currentUser : 'No user logged in');

    return (
        <div>
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center items-start px-8 mt-5 sm:mt-0 md:bg-blue-50">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
                    {/* Text Section */}
                    <div className="lg:w-1/2 space-y-6">
                        <h1 className="text-4xl font-bold text-gray-900">
                            Find Real Estate & Get Your Dream Place
                        </h1>
                        <p className="text-lg text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo suscipit cum eius, iure est nulla animi.
                        </p>
                        {/* Buy and Rent Options */}
                        <SearchBar types={types} />

                        <div className="max-w-7xl mx-auto flex justify-around">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-gray-800">16+</p>
                                <p className="text-gray-600">Years of Experience</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-gray-800">200</p>
                                <p className="text-gray-600">Award Gained</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-gray-800">1200+</p>
                                <p className="text-gray-600">Property Ready</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="lg:w-1/2 mt-8 lg:mt-0 flex items-center justify-center pb-6 sm:pb-0">
                        <div className="grid grid-cols-2 gap-4">
                            <img src="/images/building1.jpg" alt="Building 1" className="w-36 h-52 rounded-lg" />
                            <img src="/images/pexels-pixabay-259780.jpg" alt="Building 2" className="w-36 h-52 rounded-lg" />
                            <img src="/images/b3.jpg" alt="Building 3" className="w-36 h-52 rounded-lg" />
                            <img src="/images/b4.jpg" alt="Building 4" className="w-36 h-52 rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
