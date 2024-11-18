export default function AdminDashboard() {
    return (
        <div className="px-5 py-5">
            <h1 className="text-gray-900 text-2xl font-bold mb-5">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Registered Users */}
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-700">Registered Users</h3>
                        {/* <FontAwesomeIcon icon={faUsers} width={30} height={30} className="text-indigo-600 text-3xl" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>

                    </div>
                    {/* {loading ? <span className="w-32 h-6 animate-pulse bg-gray-300 block mt-3 rounded-md"></span> : <p className="text-2xl font-bold text-gray-800">{summaryData?.totalUsers}</p>} */}
                    <span>6</span>
                </div>

                {/* Active Subscribers */}
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="lg:text-lg md:text-md font-semibold text-gray-700">Services</h3>
                        {/* <FontAwesomeIcon icon={faUserCheck} width={30} height={30} className="text-green-600 text-3xl" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 w-8 text-green-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                        </svg>

                    </div>
                    <span>5</span>
                    {/* {loading ? <span className="w-32 h-6 animate-pulse bg-gray-300 block mt-3 rounded-md"></span> : <p className="text-2xl font-bold text-gray-800">950</p>} */}
                </div>

                {/* Total Trade Signals */}
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="lg:text-lg md:text-md font-semibold text-gray-700">Listings</h3>
                        {/* <FontAwesomeIcon icon={faChartLine} width={30} height={30} className="text-blue-600 text-3xl" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>

                    </div>
                    {/* {loading ? <span className="w-32 h-6 animate-pulse bg-gray-300 block mt-3 rounded-md"></span> : <p className="text-2xl font-bold text-gray-800">{summaryData?.totalTradeSignals}</p>} */}
                    <span>12</span>
                </div>


            </div>
        </div>
    )
}