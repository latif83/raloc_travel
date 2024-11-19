"use client"
import { db } from "@/Firebase/config";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ListingDetails } from "./listingDetails";

export default function Listings() {

    const [loading, setLoading] = useState(true)

    const [offers, setOffers] = useState([])

    const [fetchData, setFetchData] = useState(true)

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

            }
            catch (e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        }

        if (fetchData) {
            getOffers()
            setFetchData(false)
        }

    }, [fetchData])

    const [viewOffer, setViewOffer] = useState(false)

    const [offerData, setOfferData] = useState({})

    return (
        <div className="sm:py-8 sm:px-5 py-4 px-3">

            {viewOffer && <ListingDetails listingData={offerData} setViewOffer={setViewOffer} setFetchData={setFetchData} />}

            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold mb-5">Listings</h2>

                <Link href={'/admin/listings/newListing'} className="border border-black hover:text-white p-3 rounded-xl hover:bg-black transition duration-500 flex items-center justify-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>
                        New Listing
                    </span>
                </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">

                {loading ? <div className="col-span-3 flex flex-col items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faSpinner} width={30} height={30} className="text-lg" spin />
                    <span>
                        Loading Data...
                    </span>
                </div> : offers.length > 0 ? offers.map((opp, index) => (
                    <div key={index} className="rounded overflow-hidden shadow">
                        <img src={opp.listingImage} width={600} height={600} className="w-full h-40 object-cover" alt={opp.listing} />
                        <div className="p-3 text-center">
                            <h2 className="font-bold">{opp.listing}</h2>
                            <p className="flex flex-col items-center justify-center gap-1">
                                <span className="font-medium">
                                    Deadline:
                                </span>

                                <span>
                                    {new Date(opp.deadline).toDateString()}
                                </span>
                            </p>

                            <p className="flex gap-1.5 items-center justify-center">
                                <span className="font-medium">
                                    Applicants:
                                </span>

                                <span>
                                    5
                                </span>
                            </p>

                            <button onClick={() => {
                                setOfferData(opp)
                                setViewOffer(true)
                            }} type="button" className="p-3 flex mx-auto items-center justify-center gap-1.5 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-500 mt-2 rounded-xl">
                                <span>
                                    Manage
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>

                            </button>
                        </div>
                    </div>)) : <div className="col-span-3 flex flex-col items-center justify-center gap-2">

                    <span>
                        No offers Found
                    </span>

                    <Link href="/admin/listings/newListing" className="bg-black text-white hover:bg-gray-700 p-2 rounded-md">
                        New Offer
                    </Link>
                </div>}

            </div>

        </div>
    )
}