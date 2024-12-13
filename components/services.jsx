"use client"
import { db } from "@/Firebase/config"
import { collection, getDocs } from "firebase/firestore"
import Image from "next/image"
import { useEffect, useState } from "react"

export const Services = () => {

    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getServices = async () => {
            try {

                const getServicesDataRequest = await getDocs(
                    collection(db, "raloc/travels/service")
                );

                const servicesData = getServicesDataRequest.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setServices(servicesData)

                // console.log(servicesData)

            }
            catch (e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        }

        getServices()

    }, [])

    return (
        <div id="services" className="py-12 md:px-12 px-3">
            <h2 className="text-2xl font-bold text-center">OUR SERVICES</h2>
            <hr className="h-1 w-8 bg-black mx-auto rounded-xl" />

            <div className="grid sm:grid-cols-4 gap-4 mt-8">

                {loading ? [1, 2, 3, 4].map((n, index) => (<div key={index} className="bg-indigo-100 rounded overflow-hidden">
                    <div className="w-full h-40 bg-gray-100 animate-pulse">
                    </div>
                    <div className="p-3">
                        <h3 className="text-lg text-center h-3 rounded-md bg-gray-100 animate-pulse">
                        </h3>
                        <p className="font-bold text-center h-3 rounded-md bg-gray-100 animate-pulse mt-1  ">
                        </p>

                        <button type="button" className="flex items-center justify-center gap-1.5 p-3 bg-indigo-300 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-xl mt-3 mx-auto transition duration-500 w-full animate-pulse">

                        </button>
                    </div>
                </div>)) : services.map((service, index) => (
                    <div key={index} className="bg-indigo-100 rounded overflow-hidden">
                        <div>
                            <img src={service.serviceImage} width={500} height={500} className="w-full h-40 object-cover" alt="image" />
                        </div>
                        <div className="p-3">
                            <h3 className="text-lg text-center">
                                {service.service}
                            </h3>
                            <p className="font-bold text-center">
                                10 Offers
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
                ))}



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