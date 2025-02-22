"use client"
import Image from "next/image";
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react";
import { db } from "@/Firebase/config";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    updateDoc,
} from "firebase/firestore";
import { imageDb } from "@/Firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function NewListing() {

    const router = useRouter()

    const [servicesLoading, setServicesLoading] = useState(true)
    const [services, setServices] = useState([])

    const [countriesLoading, setCountriesLoading] = useState(true)
    const [countries, setCountries] = useState([])

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

            }
            catch (e) {
                console.log(e)
            } finally {
                setServicesLoading(false)
            }
        }

        const getCountries = async () => {
            try {

                const getCountriesDataRequest = await getDocs(
                    collection(db, "raloc/travels/countries")
                );

                const countriesData = getCountriesDataRequest.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setCountries(countriesData)

            }
            catch (e) {
                console.log(e)
            } finally {
                setCountriesLoading(false)
            }
        }

        getServices()

        getCountries()

    }, [])

    const [formData, setFormData] = useState({
        listing: '',
        service: '',
        serviceId: '',
        country : '',
        countryId : '',
        description: '',
        deadline: '',
        requirements: [],
        listingImagePreview: '',
        listingImageFile: '',
        listingImage: ''
    })

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            setLoading(true)
            const imgRef = ref(imageDb, `raloc/travels/listings/${v4()}`);
            const uploadImage = await uploadBytes(imgRef, formData.listingImageFile);
            const getImageUrl = await getDownloadURL(uploadImage.ref);

            const data = {
                listing: formData.listing, service: formData.service, serviceId: formData.serviceId, description: formData.description, requirements: formData.requirements, deadline: new Date(formData.deadline).toISOString(), listingImage: getImageUrl, country: formData.country, countryId : formData.countryId, createdAt: new Date().toISOString()
            }

            const addListing = await addDoc(collection(db, `raloc/travels/listings`), data);

            if (addListing?.id) {
                toast.success('New offer created successfully!')
                router.back()
            } else {
                toast.error('Unexpected error while adding offer, please try again later!')
            }
        }
        catch (e) {
            console.log(e)
            toast.error('Internal server error!')
        } finally {
            setLoading(false)
        }

    }

    const handleSelectImage = (e) => {
        const selectedImage = e.target.files[0];

        if (selectedImage) {
            // Create a preview URL htmlFor the selected image
            const previewURL = URL.createObjectURL(selectedImage);
            setFormData((prevData) => ({ ...prevData, listingImagePreview: previewURL, listingImageFile: selectedImage }));
        }
    };

    const reqRef = useRef(null);

    return (
        <div className="sm:py-8 sm:px-5 py-4 px-3">

            <div>
                <button onClick={() => router.back()} type="button" className="flex items-center gap-1.5 justify-center text-xs p-1.5 hover:bg-gray-200 rounded-md transition duration-500 bg-red-100 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                    </svg>

                    <span>
                        Back
                    </span>
                </button>
                <h2 className="text-2xl font-semibold mb-5">New Offer</h2>
            </div>

            <form onSubmit={handleSubmit}>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 pt-1">

                        <div className="mb-4">
                            <label htmlFor="serviceType" className="block mb-2 text-sm font-medium text-gray-900">Select Service</label>
                            <select
                                id="serviceType"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                value={`${formData.service}|${formData.serviceId}`} // Bind composite value
                                onChange={(e) => {
                                    const [service, serviceId] = e.target.value.split("|"); // Split the selected value
                                    setFormData((prevData) => ({
                                        ...prevData,
                                        service,
                                        serviceId,
                                    }));
                                }}
                            >
                                <option value="">Select Service</option>
                                {servicesLoading ? (
                                    <option value="">Loading Services! Please wait...</option>
                                ) : services.length < 1 ? (
                                    <option value="">No services found, please add a service!</option>
                                ) : (
                                    services.map((service, index) => (
                                        <option value={`${service.service}|${service.id}`} key={index}>
                                            {service.service}
                                        </option>
                                    ))
                                )}
                            </select>


                        </div>


                        <div className="mb-4">
                            <label htmlFor="serviceType" className="block mb-2 text-sm font-medium text-gray-900">Select Country</label>
                            <select
                                id="serviceType"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                value={`${formData.country}|${formData.countryId}`} // Bind composite value
                                onChange={(e) => {
                                    const [country, countryId] = e.target.value.split("|"); // Split the selected value
                                    setFormData((prevData) => ({
                                        ...prevData,
                                        country,
                                        countryId,
                                    }));
                                }}
                            >
                                <option value="">Select Country</option>
                                {countriesLoading ? (
                                    <option value="">Loading Countries! Please wait...</option>
                                ) : countries.length < 1 ? (
                                    <option value="">No Countries found, please add a country!</option>
                                ) : (
                                    countries.map((country, index) => (
                                        <option value={`${country.country}|${country.id}`} key={index}>
                                            {country.country}
                                        </option>
                                    ))
                                )}
                            </select>


                        </div>

                        <div className="mb-4">
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Listing Title:</label>
                            <input type="text" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="e.g University Scholarship in Canada" required value={formData.listing} onChange={(e) => setFormData(prevData => ({ ...prevData, listing: e.target.value }))} />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Description:</label>
                            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a description of the offer..." required value={formData.description} onChange={(e) => setFormData(prevData => ({ ...prevData, description: e.target.value }))}></textarea>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="deadline" className="block mb-2 text-sm font-medium text-gray-900">Deadline:</label>
                            <input type="date" id="deadline" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required value={formData.deadline} onChange={(e) => setFormData(prevData => ({ ...prevData, deadline: e.target.value }))} />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">Requirements:</label>
                            <div className="flex flex-col gap-1 text-sm text-gray-400 mb-1">
                                {formData.requirements.length > 0 && formData.requirements.map((req, index) => (
                                    <span key={index}>{`${index + 1}. ${req}`}</span>
                                ))}
                            </div>
                            <input ref={reqRef} type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Requirements for this offer..." />
                            <div className="flex justify-between items-center mt-1">

                                <button onClick={() => {

                                    const newRequirement = reqRef.current.value.trim()

                                    if (newRequirement) {
                                        setFormData((prevData) => ({ ...prevData, requirements: [...prevData.requirements, newRequirement] }))
                                    }

                                    reqRef.current.value = ""
                                }} type="button" className="text-blue-500 underline text-sm">
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1">
                        <input id="serviceImage" hidden type="file" accept="image/*"
                            onChange={handleSelectImage} />
                        {formData.listingImagePreview ? <div className="w-full h-56 border-2 border-dotted flex flex-col items-center justify-center rounded-md text-gray-400 gap-2 cursor-pointer hover:border-red-500 transition duration-500 relative"> <Image src={formData.listingImagePreview} className="w-full h-full object-cover" width={1000} height={1000} alt="service image" /> <div className="absolute -bottom-3 w-full flex justify-center"> <button type="button" onClick={() => setFormData((prevData) => ({ ...prevData, listingImagePreview: '', listingImageFile: '' }))} className="p-2 rounded-md bg-red-600 hover:bg-red-400 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>

                        </button> </div> </div> : <label htmlFor="serviceImage" className="w-full h-56 border-2 border-dotted flex flex-col items-center justify-center rounded-md text-gray-400 gap-2 cursor-pointer hover:border-black hover:text-black transition duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <span>
                                Listing Image
                            </span>

                        </label>}

                    </div>
                </div>

                <div className="mt-8">
                    <button type="submit" disabled={loading} className="p-2 rounded-md bg-indigo-600 hover:bg-indigo-400 text-white flex items-center justify-center gap-1 disabled:bg-indigo-300">
                        {loading ? <>
                            <FontAwesomeIcon icon={faSpinner} spin width={20} height={20} />
                            <span>Loading...</span>
                        </> : <><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                            <span>
                                Add Offer
                            </span></>}
                    </button>
                </div>
            </form>

        </div>
    )
}