"use client"
import { db } from "@/Firebase/config";
import { faArrowLeftLong, faArrowRightLong, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Offers() {

    const router = useRouter()

    const [openMNav, setOpenMNav] = useState(false);

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

    return (
        <>
            <header className="">
                <div className="bg-[#0d4785] shadow text-white md:flex hidden justify-between text-sm sm:px-12">
                    <div className="flex gap-6 p-3 pl-0">
                        <div className="flex gap-1 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                />
                            </svg>

                            <span>Accra, Ghana</span>
                        </div>
                        <div>
                            <span className="border"></span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                            <span>Monday - Friday : 08.00 am - 05.00 pm</span>
                        </div>
                    </div>

                    <div className="flex gap-5 items-center">
                        <span className="border h-full"></span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5"
                        >
                            <path
                                fill="#ffffff"
                                d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 1004.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                            />
                        </svg>
                        <span className="border h-full"></span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5"
                        >
                            <path
                                fill="#ffffff"
                                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                            />
                        </svg>
                        <span className="border h-full"></span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            className="w-5 h-5"
                        >
                            <path
                                fill="#ffffff"
                                d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                            />
                        </svg>
                    </div>
                </div>
                <div className="p-2 sm:px-12 px-3 relative flex justify-between items-center">
                    <div className="relative z-40 bg-white">
                        <Image
                            src={"/logo.png"}
                            width={1000}
                            height={1000}
                            alt="Raloc Travels Logo"
                            className="w-16 h-auto"
                        />
                    </div>
                    <div className="absolute top-12 bg-[#00b1eb] border-t border-b border-[#00b1eb] w-full left-0"></div>

                    <div className="md:flex hidden gap-4 text-sm font-medium pt-2 relative z-40">
                        <Link href={"/"} className="bg-white p-2">
                            HOME
                        </Link>
                        <Link href={"#getInTouch"} className="bg-white p-2">
                            CONTACT US
                        </Link>
                        <Link href={"#services"} className="bg-white p-2">
                            OUR SERVICES
                        </Link>
                        <Link href={"#testimonials"} className="bg-white p-2">
                            TESTIMONIALS
                        </Link>
                        <Link href={"#offers"} className="bg-white p-2">
                            OFFERS
                        </Link>
                    </div>

                    <div className="md:hidden block relative z-40">
                        <button
                            onClick={() => setOpenMNav(true)}
                            type="button"
                            className="bg-[#00b1eb] py-4 px-3 text-white rounded-lg text-gray-200"
                        >
                            <FontAwesomeIcon
                                icon={faBars}
                                width={30}
                                height={30}
                                className="text-xl"
                            />
                        </button>
                    </div>

                    {openMNav && (
                        <div className="bg-[#00b1eb] fixed top-0 left-0 h-svh w-full z-100 py-12 px-4 flex flex-col justify-between transition duration-1000">
                            <div>
                                <div className="flex justify-end">
                                    <button
                                        onClick={() => setOpenMNav(false)}
                                        type="button"
                                        className="bg-red-600 p-2 rounded-lg"
                                    >
                                        <FontAwesomeIcon icon={faXmark} width={20} height={20} />
                                    </button>
                                </div>

                                <nav className="flex flex-col gap-2 text-gray-100">
                                    <Link href={"/"} className="p-2">
                                        HOME
                                    </Link>
                                    <Link href={"/#getInTouch"} className="p-2">
                                        CONTACT US
                                    </Link>
                                    <Link href={"/#services"} className="p-2">
                                        OUR SERVICES
                                    </Link>
                                    <Link href={"/#testimonials"} className="p-2">
                                        TESTIMONIALS
                                    </Link>
                                    <Link href={"/#offers"} className="p-2">
                                        OFFERS
                                    </Link>
                                </nav>
                            </div>
                            <div>
                                <p className="text-center">&copy; RALOC TRAVELS, 2024</p>
                            </div>
                        </div>
                    )}


                </div>
            </header>

            <div className="flex justify-between sm:flex-row flex-col gap-2 sm:items-center sm:px-12 px-3 pt-4">
                <div className="flex flex-col gap-4 items-center">
                    <button onClick={() => router.back()} type="button" className="bg-gray-200 hover:bg-red-700 hover:text-white transition duration-1000 flex items-center gap-2 rounded-md p-2 text-xs">
                        <FontAwesomeIcon icon={faArrowLeftLong} width={20} height={20} />
                        <span>
                            Back
                        </span>
                    </button>
                    <p className="text-sm text-gray-600">
                        Home / Offers
                    </p>
                </div>

                <div>
                    <h2 className="font-bold">
                        All Offers
                    </h2>
                </div>

            </div>

            <div className="p-3 border-2 border-[#0d4785] shadow-md rounded-lg mt-2 mx-12 text-sm">
                <h2 className="font-bold mb-4">Find Your Travel Opportunities</h2>

                <div className="flex gap-4">

                    {/* Country Selector */}
                    <select
                        // value={selectedCountry}
                        // onChange={handleCountryChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-1000 text-sm"
                    >
                        <option value="">All Countries</option>
                        {/* {countries.map((country, index) => (
                                <option key={index} value={country}>{country}</option>
                            ))} */}
                    </select>

                    {/* Category Selector */}
                    <select
                        // value={selectedCategory}
                        // onChange={handleCategoryChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-1000 text-sm"
                    >
                        <option value="">All Categories</option>
                        {/* {categories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))} */}
                    </select>

                    <button className="px-6 bg-[#0d4785] text-white font-semibold py-2 rounded-md hover:bg-[#0d4785] transition flex items-center justify-center gap-1.5 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span>Find</span>
                    </button>
                </div>


            </div>

            <div className="grid sm:grid-cols-4 gap-4 px-12 pt-5 animation-pulse">
                {loading ? [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12].map((n, index) => (
                    <div key={index} className="shadow rounded-md overflow-hidden">
                        <div className="w-full h-40 bg-gray-100">

                        </div>
                        <div className="p-2">
                            <h1 className="bg-gray-100 rounded-md h-5 mt-2"></h1>
                            <p className="bg-gray-100 rounded-md h-4 mt-1">

                            </p>
                            <p className="bg-blue-100 rounded-md h-4 mt-2">

                            </p>
                        </div>
                    </div>
                )) : offers.length > 0 ? offers.map((offer, index) => (
                    <div key={index} className="shadow rounded-md overflow-hidden">
                        <div className="w-full h-40 bg-gray-100">
                            <img src={offer.listingImage} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-2">
                            <h1 className="rounded-md truncate font-bold">{offer.listing}</h1>
                            <p className="truncate text-sm">
                                Deadline: {new Date(offer.deadline).toDateString()}
                            </p>

                            <Link href={`/offers/${offer.id}`} className="text-blue-600 font-semibold text-sm flex items-center hover:underline">
                                <span>
                                View more and apply
                                </span>
                                <FontAwesomeIcon icon={faArrowRightLong} width={20} height={20} />
                            </Link>
                        </div>
                    </div>
                )) : <div className="sm:col-span-4"> <p> No Offers found! </p> </div>}
            </div>

        </>
    )
}