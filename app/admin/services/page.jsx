import Image from "next/image";
import Link from "next/link";

export default function Services() {
    return (
        <div className="sm:py-8 sm:px-5 py-4 px-3">

            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold mb-5">Services</h2>

                <Link href={'/admin/services/newService'} className="border border-black hover:text-white p-3 rounded-xl hover:bg-black transition duration-500 flex items-center justify-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 w-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                    <span>New Service</span>
                </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">

                <div className="bg-indigo-100 rounded overflow-hidden">
                    <div>
                        <Image src={'/travel4.jpg'} width={500} height={500} className="w-full h-40 object-cover" alt="image" />
                    </div>
                    <div className="p-3">
                        <h3 className="text-lg text-center">
                            Visa Application
                        </h3>
                        <p className="font-bold text-center">
                            3 Listings
                        </p>

                        <div className="grid grid-cols-2 gap-1.5">
                            <button type="button" className="flex items-center justify-center gap-1.5 p-2 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-xl mt-3 mx-auto transition duration-500 text-sm flex-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>

                                <span>
                                    Edit
                                </span>

                            </button>

                            <button type="button" className="flex items-center justify-center gap-1.5 p-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-xl mt-3 mx-auto transition duration-500 text-sm flex-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>


                                <span>
                                    Delete
                                </span>

                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-indigo-100 rounded overflow-hidden">
                    <div>
                        <Image src={'/travel5.jpg'} width={500} height={500} className="w-full h-40 object-cover" alt="image" />
                    </div>
                    <div className="p-3">
                        <h3 className="text-lg text-center">
                            Tour Guide
                        </h3>
                        <p className="font-bold text-center">
                            2 Listings
                        </p>

                        <div className="grid grid-cols-2 gap-1.5">
                            <button type="button" className="flex items-center justify-center gap-1.5 p-2 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-xl mt-3 mx-auto transition duration-500 text-sm flex-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>

                                <span>
                                    Edit
                                </span>

                            </button>

                            <button type="button" className="flex items-center justify-center gap-1.5 p-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-xl mt-3 mx-auto transition duration-500 text-sm flex-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>


                                <span>
                                    Delete
                                </span>

                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-indigo-100 rounded overflow-hidden">
                    <div>
                        <Image src={'/travel6.jpg'} width={500} height={500} className="w-full h-40 object-cover" alt="image" />
                    </div>
                    <div className="p-3">
                        <h3 className="text-lg text-center">
                            Work Abroad
                        </h3>
                        <p className="font-bold text-center">
                            12 Listings
                        </p>

                        <div className="grid grid-cols-2 gap-1.5">
                            <button type="button" className="flex items-center justify-center gap-1.5 p-2 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-xl mt-3 mx-auto transition duration-500 text-sm flex-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>

                                <span>
                                    Edit
                                </span>

                            </button>

                            <button type="button" className="flex items-center justify-center gap-1.5 p-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-xl mt-3 mx-auto transition duration-500 text-sm flex-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>


                                <span>
                                    Delete
                                </span>

                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}