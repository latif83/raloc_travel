"use client"
import { useRouter } from "next/navigation"

export default function NewService() {

    const router = useRouter()

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

            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 pt-1">
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Service Name:</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="e.g Study Abroad" required />
                    </div>

                    <div>
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900">Description:</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a description of the service..."></textarea>
                    </div>
                </div>

                <div className="col-span-1">
                    <input id="serviceImage" hidden type="file" />
                    <label htmlFor="serviceImage" className="w-full h-56 border-2 border-dotted flex flex-col items-center justify-center rounded-md text-gray-400 gap-2 cursor-pointer hover:border-black hover:text-black transition duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span>
                            Service Image
                        </span>

                    </label>
                </div>
            </div>

            <div className="mt-8">
                <button type="button" className="p-2 rounded-md bg-indigo-600 hover:bg-indigo-400 text-white flex items-center justify-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>
                        Add Service
                    </span>
                </button>
            </div>

        </div>
    )
}