"use client"
import { useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db, imageDb } from "@/Firebase/config";
import { sendEmail, sendSMS } from "@/actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

export const Apply = ({ listingData, setApply }) => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        tel: "",
        dob: "",
        address: "",
        city: ""

    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const [passportImagePreview, setPassportImagePreview] = useState("")
    const [passportImageFile, setPassportImageFile] = useState("")

    const handleSelectImage = (e) => {
        const selectedImage = e.target.files[0];

        if (selectedImage) {
            // Create a preview URL htmlFor the selected image
            const previewURL = URL.createObjectURL(selectedImage);
            setPassportImagePreview(previewURL)
            setPassportImageFile(selectedImage)
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // console.log(listingData)

            const imgRef = ref(imageDb, `raloc/travels/passportpics/${v4()}`);
            const uploadImage = await uploadBytes(imgRef, passportImageFile);
            const getImageUrl = await getDownloadURL(uploadImage.ref);

            // Save to Firestore
            const addApplication = await addDoc(collection(db, `raloc/travels/applications`), { ...formData, listing: listingData.listing, listingId: listingData.id, passportImage: getImageUrl });

            if (addApplication?.id) {
                toast.success("Application submitted successfully!");
                // Send email to the applicant
                await sendEmail({ ...formData, listing: listingData.listing });

                await sendSMS({ ...formData, listing: listingData.listing, offerLink: `https://raloctravels.com/offers/${listingData.id}` });
                // toast.success("Confirmation email sent!");
                setApply(false)
            } else {
                toast.error('Unexpected error while submitting application, please try again later!')
            }



            setApply(false);
        } catch (error) {
            console.error("Error submitting application: ", error);
            toast.error("Failed to submit application!");
        }
    };

    return (
        <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen z-50 flex items-center justify-center sm:pt-16">
            <form
                onSubmit={handleSubmit}
                className="max-w-4xl transition duration-1000 h-full w-full sm:border border-blue-500 shadow relative z-50 bg-white sm:p-6 p-3 sm:rounded-t-lg overflow-auto"
            >
                <div className="flex justify-between items-center">
                    <h2 className="text-xl">Apply</h2>
                    <button
                        onClick={() => setApply(false)}
                        type="button"
                        className="p-2 bg-gray-100 rounded-lg hover:bg-red-600 hover:text-white duration-500"
                    >
                        Close
                    </button>
                </div>

                <div className="mt-5">
                    <div className="p-2 bg-black text-white rounded">
                        <h3 className="font-bold">{listingData.listing}</h3>
                        <p className="text-xs text-gray-200">
                            Please provide your personal details to apply for this offer!
                        </p>
                    </div>

                    <div className="mt-5 flex justify-end">
                        {passportImagePreview ? <Image src={passportImagePreview} width={500} height={500} className="w-32 h-32 rounded-md object-cover" alt="Passport Image" /> : <label htmlFor="passportImg" className="w-32 text-xs h-32 flex items-center flex-col justify-center gap-4 border rounded-md text-center">
                            <FontAwesomeIcon icon={faFileUpload} width={20} height={20} />
                            Upload Passport Picture
                        </label>}
                        <input id="passportImg" type="file" hidden accept="image/*"
                            onChange={handleSelectImage} />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mt-5">
                        <div className="text-sm">
                            <label htmlFor="fullname" className="mb-1 block">
                                Full Name:
                            </label>
                            <input
                                id="fullname"
                                type="text"
                                value={formData.fullname}
                                onChange={handleChange}
                                className="w-full p-2 py-3 block outline-blue-300 border rounded-lg"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="text-sm">
                            <label htmlFor="email" className="mb-1 block">
                                Email:
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 py-3 block outline-blue-300 border rounded-lg"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="text-sm">
                            <label htmlFor="tel" className="mb-1 block">
                                Tel:
                            </label>
                            <input
                                id="tel"
                                type="number"
                                value={formData.tel}
                                onChange={handleChange}
                                className="w-full p-2 py-3 block outline-blue-300 border rounded-lg"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        <div className="text-sm">
                            <label htmlFor="dob" className="mb-1 block">
                                Date Of Birth:
                            </label>
                            <input
                                id="dob"
                                type="date"
                                value={formData.dob}
                                onChange={handleChange}
                                className="w-full p-2 py-3 block outline-blue-300 border rounded-lg"
                                required
                            />
                        </div>

                        <div className="text-sm">
                            <label htmlFor="address" className="mb-1 block">
                                Address:
                            </label>
                            <input
                                id="address"
                                type="text"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full p-2 py-3 block outline-blue-300 border rounded-lg"
                                placeholder="Enter your address"
                                required
                            />
                        </div>

                        <div className="text-sm">
                            <label htmlFor="city" className="mb-1 block">
                                City:
                            </label>
                            <input
                                id="city"
                                type="text"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full p-2 py-3 block outline-blue-300 border rounded-lg"
                                placeholder="Enter your city"
                                required
                            />
                        </div></div>

                    <div className="text-sm mt-5 flex justify-end items-center">
                        <button
                            type="submit"
                            className="bg-blue-700 p-3 text-white hover:bg-blue-900 transition duration-500 rounded-lg"
                        >
                            Submit Application
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
