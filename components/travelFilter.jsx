"use client"
import { useState } from 'react';

const TravelFilter = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const countries = ['United States', 'United Kingdom', 'Japan', 'France', 'Australia'];
    const categories = ['Tour', 'Study', 'Work', 'Cultural Exchange'];

    const handleSearchChange = (e) => setSearchTerm(e.target.value);
    const handleCountryChange = (e) => setSelectedCountry(e.target.value);
    const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

    return (
        <div className='relative'>
            <div className='absolute left-0 w-full -top-16'>
                <div className="p-6 mb-12 bg-white border-2 border-[#0d4785] shadow-md rounded-lg max-w-5xl mx-auto mt-6">
                    <h2 className="text-xl font-bold mb-4">Find Your Travel Opportunities</h2>

                    <div className="flex flex-col md:flex-row gap-4">

                        {/* Country Selector */}
                        <select
                            value={selectedCountry}
                            onChange={handleCountryChange}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">All Countries</option>
                            {countries.map((country, index) => (
                                <option key={index} value={country}>{country}</option>
                            ))}
                        </select>

                        {/* Category Selector */}
                        <select
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">All Categories</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>

                        <button className="px-6 bg-[#0d4785] text-white font-semibold py-2 rounded-md hover:bg-[#0d4785] transition flex items-center justify-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <span>Find</span>
                        </button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default TravelFilter;
