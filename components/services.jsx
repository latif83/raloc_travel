import Image from "next/image"

export const Services = () => {
    return (
        <div id="services" className="p-12">
            <h2 className="text-2xl font-bold text-center">OUR SERVICES</h2>
            <hr className="h-1 w-8 bg-black mx-auto rounded-xl" />

            <div className="grid grid-cols-4 gap-4 mt-8">

                <div className="bg-indigo-100 rounded overflow-hidden">
                    <div>
                        <Image src={'/travel3.jpg'} width={500} height={500} className="w-full h-40 object-cover" alt="image" />
                    </div>
                    <div className="p-3">
                        <h3 className="text-lg text-center">
                            Study Abroad
                        </h3>
                        <p className="font-bold text-center">
                            10 Listings
                        </p>

                        <button type="button" className="flex items-center justify-center gap-1.5 p-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-xl mt-3 mx-auto transition duration-500">
                            <span>
                                View Now
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>

                        </button>
                    </div>
                </div>

                <div className="bg-indigo-100 rounded overflow-hidden">
                    <div>
                        <Image src={'/travel4.jpg'} width={500} height={500} className="w-full h-40 object-cover" alt="image" />
                    </div>
                    <div className="p-3">
                        <h3 className="text-lg text-center">
                            Visa Application
                        </h3>
                        <p className="font-bold text-center">
                            3 Listings
                        </p>

                        <button type="button" className="flex items-center justify-center gap-1.5 p-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-xl mt-3 mx-auto transition duration-500">
                            <span>
                                View Now
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>

                        </button>
                    </div>
                </div>

                <div className="bg-indigo-100 rounded overflow-hidden">
                    <div>
                        <Image src={'/travel5.jpg'} width={500} height={500} className="w-full h-40 object-cover" alt="image" />
                    </div>
                    <div className="p-3">
                        <h3 className="text-lg text-center">
                            Tour Guide
                        </h3>
                        <p className="font-bold text-center">
                            2 Listings
                        </p>

                        <button type="button" className="flex items-center justify-center gap-1.5 p-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-xl mt-3 mx-auto transition duration-500">
                            <span>
                                View Now
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>

                        </button>
                    </div>
                </div>

                <div className="bg-indigo-100 rounded overflow-hidden">
                    <div>
                        <Image src={'/travel6.jpg'} width={500} height={500} className="w-full h-40 object-cover" alt="image" />
                    </div>
                    <div className="p-3">
                        <h3 className="text-lg text-center">
                            Work Abroad
                        </h3>
                        <p className="font-bold text-center">
                            12 Listings
                        </p>

                        <button type="button" className="flex items-center justify-center gap-1.5 p-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-xl mt-3 mx-auto transition duration-500">
                            <span>
                                View Now
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>

                        </button>
                    </div>
                </div>

            </div>

            <div className="mt-8">
                <button type="button" className="flex mx-auto items-center justify-center gap-2 text-blue-600 hover:border hover:text-red-600 border-red-600 p-3 rounded-xl transition duration-500">
                    <span>
                        View More
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </button>
            </div>

        </div>
    )
}