import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Apply = ({ setApply }) => {
    return (
        <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-svh z-50 flex items-center justify-center pt-16">
            <form className="max-w-3xl transition duration-1000 h-full w-full border border-blue-500 shadow relative z-50 bg-white p-6 rounded-t-lg overflow-auto">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl">
                        Apply
                    </h2>

                    <button onClick={() => setApply(false)} type="button" className="p-2 bg-gray-100 rounded-lg hover:bg-red-600 hover:text-white duration-500">
                        <FontAwesomeIcon icon={faXmark} width={20} height={20} className="text-sm" />
                    </button>
                </div>

                <div className="mt-5">
                    <div className="text-sm" >
                        <label htmlFor="offer" className="mb-1 block">
                            Select Service:
                        </label>
                        <select id="offer" className="w-full p-2 py-3 block border rounded-lg outline-none">
                            <option className="text-gray-500">
                                Please select the service you're applying for.
                            </option>
                            <option>
                                Education Scholarship
                            </option>
                        </select>
                    </div>
                    <div className="text-sm mt-5" >
                        <label htmlFor="offer" className="mb-1 block">
                            Select Offer:
                        </label>
                        <select id="offer" className="w-full p-2 py-3 block border rounded-lg outline-none">
                            <option className="text-gray-500">
                                Please select the offer you're applying for.
                            </option>
                            <option>
                                Scholarship Opportunity
                            </option>
                        </select>
                    </div>

                    <div className="text-sm mt-5" >
                        <label htmlFor="fullname" className="mb-1 block">
                            Full Name:
                        </label>
                        <input id="fullname" type="text" className="w-full p-2 py-3 block outline-blue-300 border rounded-lg" placeholder="Enter your full name" />
                    </div>

                    <div className="text-sm mt-5" >
                        <label htmlFor="email" className="mb-1 block">
                            Email:
                        </label>
                        <input id="email" type="email" className="w-full p-2 py-3 block outline-blue-300 border rounded-lg" placeholder="Enter your email" />
                    </div>

                    <div className="text-sm mt-5" >
                        <label htmlFor="tel" className="mb-1 block">
                            Tel:
                        </label>
                        <input id="tel" type="number" className="w-full p-2 py-3 block outline-blue-300 border rounded-lg" placeholder="Enter your phone number" />
                    </div>

                    <div className="text-sm mt-5" >
                        <label htmlFor="email" className="mb-1 block">
                            Date Of Birth:
                        </label>
                        <input id="email" type="date" className="w-full p-2 py-3 block outline-blue-300 border rounded-lg" placeholder="Enter your date number" />
                    </div>

                    <div className="text-sm mt-5 flex justify-end items-center">
                        <button type="submit" className="bg-blue-700 p-3 text-white hover:bg-blue-900 transition duration-500 rounded-lg">
                            Submit Application
                        </button>
                    </div>

                </div>


            </form>
        </div>
    )
}