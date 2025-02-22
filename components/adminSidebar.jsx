"use client"
import { useSidebar } from "@/providers/sidebarProvider"
// import { faChartLine, faClockRotateLeft, faDashboard, faPlusCircle, faUsers } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logout } from "./logout"
import { useState } from "react"

export const AdminSidebar = () => {

    const pathname = usePathname()

    const { mobileScreen, openSidebar, setOpenSidebar } = useSidebar()

    const [logout,setLogout] = useState(false)

    return (
        <>
        {logout && <Logout setLogout={setLogout} />}
            {openSidebar && <div className="bg-[#0d4785] w-[230px] shrink-0 sticky top-0 h-svh transition duration-1000">
                <div className="p-3 flex flex-col gap-2 justify-center items-center border-b-2 border-dotted" >
                    <Image src={'/logo.png'} width={500} height={500} className="w-[50px] h-auto bg-white rounded p-2" alt="logo" />
                    <span className="text-xs text-gray-50">
                        Travel far, live fully
                    </span>
                </div>

                <div className="flex flex-col gap-4 pl-5 py-5 mt-5 text-sm">
                    <Link onClick={() => { mobileScreen && setOpenSidebar(false) }} className={`w-full ${pathname == "/admin/dashboard" ? "bg-[#f2f2f2] text-gray-800" : "text-gray-50"} rounded-l sm:p-2 p-2 py-4 flex gap-1.5 items-center hover:font-bold`} href={'/admin/dashboard'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                        </svg>

                        <span>Dashboard</span>
                    </Link>
                    <Link onClick={() => { mobileScreen && setOpenSidebar(false) }} className={`w-full ${pathname.includes("/admin/dashboard/applications") ? "bg-[#f2f2f2] text-gray-800" : "text-gray-50"} rounded-l sm:p-2 p-2 py-4 flex gap-1.5 items-center hover:font-bold`} href={'/admin/dashboard/applications'}>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>

                        <span>Applications</span>
                    </Link>
                    <Link onClick={() => { mobileScreen && setOpenSidebar(false) }} className={`w-full ${pathname.includes("/admin/dashboard/services") ? "bg-[#f2f2f2] text-gray-800" : "text-gray-50"} rounded-l sm:p-2 p-2 py-4 flex gap-1.5 items-center hover:font-bold`} href={'/admin/dashboard/services'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                        </svg>

                        <span>Services</span>
                    </Link>
                    <Link onClick={() => { mobileScreen && setOpenSidebar(false) }} className={`w-full ${pathname.includes("/admin/dashboard/listings") ? "bg-[#f2f2f2] text-gray-800" : "text-gray-50"} rounded-l sm:p-2 p-2 py-4 flex gap-1.5 items-center hover:font-bold`} href={'/admin/dashboard/listings'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>

                        <span>Offers</span>
                    </Link>
                    <Link onClick={() => { mobileScreen && setOpenSidebar(false) }} className={`w-full ${pathname.includes("/admin/dashboard/countries") ? "bg-[#f2f2f2] text-gray-800" : "text-gray-50"} rounded-l sm:p-2 p-2 py-4 flex gap-1.5 items-center hover:font-bold`} href={'/admin/dashboard/countries'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                        </svg>


                        <span>Countries</span>
                    </Link>
                </div>

                <div className="px-5 absolute bottom-2 w-full left-0">
                    <button type="button" onClick={()=>setLogout(true)} className="bg-red-200 hover:bg-red-600 hover:text-white transition duration-500 rounded p-2 py-4 w-full text-sm flex items-center justify-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                        </svg>

                        <span>
                            Log Out
                        </span>
                    </button>
                </div>
            </div>}
        </>
    )
}