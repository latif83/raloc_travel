"use client"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export const Logout = ({ setLogout }) => {

    const [confirmLogout, setConfirmLogout] = useState(false)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (confirmLogout) {
            setLoading(true)
            setTimeout(() => {
                localStorage.removeItem("auth");
                toast.success("You have being logged out!")
                router.push('/admin')
            }, 2000);
        }
    }, [confirmLogout])

    return (
        <div className="fixed top-0 left-0 w-full h-svh bg-black/10 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="p-4 px-8 bg-white rounded-md shadow-md border">
                <h2 className="font-semibold">
                    Log Out
                </h2>

                <p className="text-sm mt-8">
                    Are you sure you want to logout?
                </p>

                <div className="mt-8 flex justify-between">
                    <button onClick={() => setLogout(false)} type="button" className="p-2 rounded-md border border-gray-600 transition duration-500 hover:bg-gray-600 hover:text-white text-sm">
                        Cancel
                    </button>

                    <button onClick={() => setConfirmLogout(true)} disabled={loading} type="button" className="p-2 rounded-md border border-red-600 transition duration-500 hover:bg-red-600 hover:text-white disabled:bg-red-200 flex items-center gap-1.5 text-sm">
                        {loading ? <> <FontAwesomeIcon icon={faSpinner} spin width={20} height={20} /> <span>Logging out...</span> </> : <span>
                            Log Out</span>}
                    </button>
                </div>
            </div>
        </div>
    )
}