import Link from "next/link"

export const ListingDetails = ({ listingData, setViewOffer }) => {

    return (
        <div className="fixed top-0 left-0 h-svh w-full bg-white/20 backdrop-blur-[1px] flex flex-col pt-12">
            <div className="bg-white max-w-3xl w-full mx-auto flex-1 shadow rounded-t-lg p-6">

                <button onClick={()=>setViewOffer(false)} type="button" className="text-sm rounded-md flex items-center justify-center gap-1.5 bg-gray-200 hover:bg-red-200 transition duration-500 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                    </svg>

                    <span>Back</span>
                </button>

                <div className="mt-3">
                    <img src={listingData.listingImage} className="block w-full h-40 object-cover rounded-md shadow-md" />

                    <h2 className="mt-3 text-xl font-bold">
                        {listingData.listing}
                    </h2>

                    <div className="mt-2">
                    <span className="text-red-600 text-xs">
                            Description
                        </span>
                        <p className="text-sm">{listingData.description}
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

                        {listingData.requirements.map((data, index) => (<p className="text-gray-500 text-sm">
                            {`${index + 1}. ${data}`}
                        </p>))}
                    </div>

                    <div className="mt-3 flex justify-between">
                        <Link href={`/admin/listings/editListing/${listingData.id}`} className="flex items-center justify-center gap-1.5 border border-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-500 text-sm p-2 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>

                            <span>
                                Edit
                            </span>
                        </Link>

                        <button type="button" className="flex items-center justify-center gap-1.5 border border-red-600 hover:bg-red-600 hover:text-white transition duration-500 text-sm p-2 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
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
    )
}