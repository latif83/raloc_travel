"use client"
import { useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "@/Firebase/config";
import { sendEmail, sendSMS } from "@/actions/actions";

export const Apply = ({ listingData, setApply }) => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        tel: "",
        dob: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // console.log(listingData)
            // Save to Firestore
            const addApplication = await addDoc(collection(db, `raloc/travels/countries`), { ...formData, listing: listingData.listing, listingId: listingData.id });

            if (addApplication?.id) {
                toast.success("Application submitted successfully!");
                // Send email to the applicant
                await sendEmail({ ...formData, listing: listingData.listing });

                await sendSMS({ ...formData, listing: listingData.listing, offerLink : `https://raloctravels.com/offers/${listingData.id}` });
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
                className="max-w-3xl transition duration-1000 h-full w-full sm:border border-blue-500 shadow relative z-50 bg-white sm:p-6 p-3 sm:rounded-t-lg overflow-auto"
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

                    <div className="text-sm mt-5">
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

                    <div className="text-sm mt-5">
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

                    <div className="text-sm mt-5">
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

                    <div className="text-sm mt-5">
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
