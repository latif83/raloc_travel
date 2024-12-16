"use client"
import { faArrowLeftLong, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Apply } from "./apply"

export const ViewOffer = ({ listingData, setViewOffer }) => {

    const [apply, setApply] = useState(false)

    return (
        <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-svh z-40 flex items-center justify-center sm:pt-12">

            {apply && <Apply listingData={listingData} setApply={setApply} />}

            <div className="max-w-4xl transition duration-1000 h-full w-full sm:border border-blue-500 shadow relative z-40 bg-white sm:p-6 p-3 sm:rounded-t-lg overflow-auto">
                <div className="flex justify-between items-center">

                    <button onClick={() => setViewOffer(false)} type="button" className="p-2 bg-gray-100 rounded-lg hover:bg-red-600 hover:text-white duration-500 flex items-center gap-1.5 text-sm">
                        <FontAwesomeIcon icon={faArrowLeftLong} width={20} height={20} className="text-sm" />
                        <span>
                            Back
                        </span>
                    </button>

                    <button
                        onClick={() => setApply(true)}
                        type="button"
                        className="bg-indigo-600 hover:bg-indigo-400 transition duration-500 p-2 rounded-md flex gap-1.5 text-gray-700 text-sm text-white"
                    >
                        <span>Apply Now</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 animate-bounce"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </button>
                </div>

                <div className="w-full rounded-md h-60 overflow-hidden mt-3">
                    <img src={listingData.listingImage} className="w-full h-full object-cover" />
                </div>

                <div className="mt-3">
                    <h1 className="font-bold">
                        {listingData.listing}
                    </h1>

                    <div className="mt-2">
                        <span className="text-red-600 text-xs">
                            Description
                        </span>
                        <p className="text-sm">
                            {listingData.description}
                        </p>
                    </div>

                    <div className="mt-3">
                        <span className="text-red-600 text-xs">
                            Deadline
                        </span>
                        <p className="text-sm">
                            {new Date(listingData.deadline).toDateString()}
                        </p>
                    </div>

                    <div className="mt-3">
                        <span className="text-red-600 text-xs">
                            Requirements
                        </span>

                        {listingData.requirements.map((data, index) => (<p key={index} className="text-gray-500 text-sm">
                            {`${index + 1}. ${data}`}
                        </p>))}
                    </div>

                </div>

            </div>
        </div>
    )
}