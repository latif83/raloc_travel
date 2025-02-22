"use client"
import { useEffect, useRef, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/Firebase/config';
import { ViewOffer } from './viewOffer';
import Link from 'next/link';

const RecentOpportunities = () => {

    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const [loading, setLoading] = useState(true)

    const [offers, setOffers] = useState([])

    useEffect(() => {

        const getOffers = async () => {
            try {

                const getOffersDataRequest = await getDocs(
                    collection(db, "raloc/travels/listings")
                );

                const offersData = getOffersDataRequest.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setOffers(offersData)

                // console.log(offersData)

            }
            catch (e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        }

        getOffers()

    }, [])

    const [viewOffer,setViewOffer] = useState(false)
    const [listingData,setListingData] = useState()

    return (
        <div id='offers' className="sm:px-12 px-3 md:mt-0 mt-32 pb-8">

            {viewOffer && <ViewOffer listingData={listingData} setViewOffer={setViewOffer} />}

            <h2 className="text-2xl font-bold mb-4 text-center">Recent Offers</h2>

            <div className="relative">
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-scroll no-scrollbar space-x-4"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {loading ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n, index) => (<div
                        key={index}
                        className="min-w-[250px] flex-shrink-0 bg-gray-50 rounded-md shadow hover:shadow-lg transition"
                    >

                        <div className="w-full h-40 bg-gray-200 object-cover rounded-t-md mb-1 animate-pulse">

                        </div>
                        <div className='p-2 py-4'>
                            <h3 className="font-semibold text-lg bg-gray-200 rounded-md animate-pulse h-3"></h3>
                            <p className="text-sm text-gray-600 h-3 bg-gray-200 rounded-md animate-pulse mt-1"></p>
                            <button type='button' className='text-blue-600 text-sm hover:underline hover:text-red-600 transition duration-500 flex items-center gap-1.5 mt-2 bg-blue-200 animate-pulse h-4 w-full rounded-md'>


                            </button>
                        </div>
                    </div>)) : offers.length < 1 ? <div className='flex-1 text-gray-500'> <p className='text-center font-bold'>
                        No Offers found at the moment, please try again later!</p> </div> : offers.map((offer, index) => (
                            <div
                                key={index}
                                className="min-w-[250px] flex-shrink-0 bg-gray-100 rounded-md shadow hover:shadow-lg transition"
                            >
                                <img
                                    src={offer.listingImage}
                                    alt={offer.title}
                                    className="w-full h-40 object-cover rounded-t-md mb-3"
                                />
                                <div className='p-2 py-4'>
                                    <h3 className="font-semibold text-lg">{offer.listing}</h3>
                                    <p className="text-sm text-gray-600">Deadline: {new Date(offer.deadline).toDateString()}</p>
                                    <Link href={`/offers/${offer.id}`} className='text-blue-600 text-sm hover:underline hover:text-red-600 transition duration-500 flex items-center gap-1.5 mt-2'>
                                        <span>
                                            View More and Apply
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>

                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <div className="flex justify-center gap-4 mt-4">
                <button
                    onClick={scrollLeft}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>

                </button>
                <button
                    onClick={scrollRight}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </button>
            </div>

            <div className="mt-6 text-center">
                <Link href="/offers" className="bg-gray-800 rounded-md hover:underline p-3 text-white inline-flex gap-1.5">
                    <span>
                        Explore More Offers
                    </span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default RecentOpportunities;
