"use client"
import Image from "next/image";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
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

export default function NewService() {

    const router = useRouter()

    const [formData, setFormData] = useState({
        service: '',
        description: '',
        serviceImage: '',
        serviceImagePreview: '',
        serviceImageFile: ''
    })

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            setLoading(true)
            const imgRef = ref(imageDb, `raloc/travels/services/${v4()}`);
            const uploadImage = await uploadBytes(imgRef, formData.serviceImageFile);
            const getImageUrl = await getDownloadURL(uploadImage.ref);

            const data = {
                service: formData.service, description: formData.description, serviceImage: getImageUrl, createdAt: new Date().toISOString()
            }

            const addService = await addDoc(collection(db, `raloc/travels/service`), data);

            if (addService?.id) {
                toast.success('New service created successfully!')
                router.back()
            } else {
                toast.error('Unexpected error while adding service, please try again later!')
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
            setFormData((prevData) => ({ ...prevData, serviceImagePreview: previewURL, serviceImageFile: selectedImage }));
        }
    };

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
                <h2 className="text-2xl font-semibold mb-5">New Service</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-2 pt-1">
                        <div className="mb-5">
                            <label htmlFor="service" className="block mb-2 text-sm font-medium text-gray-900">Service Name:</label>
                            <input type="text" id="service" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="e.g Study Abroad" value={formData.service} onChange={(e) => setFormData((prevData) => ({ ...prevData, service: e.target.value }))} required />
                        </div>

                        <div>
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description:</label>
                            <textarea value={formData.description} onChange={(e) => setFormData((prevData) => ({ ...prevData, description: e.target.value }))} id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a description of the service..."></textarea>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <input id="serviceImage" hidden type="file" accept="image/*"
                            onChange={handleSelectImage} />
                        {formData.serviceImagePreview ? <div className="w-full h-56 border-2 border-dotted flex flex-col items-center justify-center rounded-md text-gray-400 gap-2 cursor-pointer hover:border-red-500 transition duration-500 relative"> <Image src={formData.serviceImagePreview} className="w-full h-full object-cover" width={1000} height={1000} alt="service image" /> <div className="absolute -bottom-3 w-full flex justify-center"> <button type="button" onClick={() => setFormData((prevData) => ({ ...prevData, serviceImagePreview: '', serviceImageFile: '' }))} className="p-2 rounded-md bg-red-600 hover:bg-red-400 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>

                        </button> </div> </div> : <label htmlFor="serviceImage" className="w-full h-56 border-2 border-dotted flex flex-col items-center justify-center rounded-md text-gray-400 gap-2 cursor-pointer hover:border-black hover:text-black transition duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <span>
                                Service Image
                            </span>

                        </label>}

                    </div>
                </div>

                <div className="mt-8">
                    <button type="submit" disabled={loading} className="p-2 rounded-md bg-indigo-600 hover:bg-indigo-400 disabled:bg-indigo-300 text-white flex items-center justify-center gap-1">
                        {loading ? <>
                            <FontAwesomeIcon icon={faSpinner} width={20} height={20} className="text-lg" spin />
                            Loading...</> : <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span>
                                Add Service
                            </span></>}
                    </button>
                </div>
            </form>

        </div>
    )
}