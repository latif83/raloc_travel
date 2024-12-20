"use client"
import { db } from "@/Firebase/config";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Applications() {

     const [applications,setApplications] = useState([])
    
        const [loading,setLoading] = useState(true)
    
        useEffect(() => {
    
            const getApplications = async () => {
                try {
    
                    const getApplicationsDataRequest = await getDocs(
                        collection(db, "raloc/travels/applications")
                    );
    
                    const applicationsData = getApplicationsDataRequest.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
    
                    setApplications(applicationsData)
                    console.log(applicationsData)
    
                }
                catch (e) {
                    console.log(e)
                } finally {
                    setLoading(false)
                }
            }
    
            getApplications()
    
        }, [])

    return (
        <div className="p-5" >
            <h1 className="text-xl font-semibold" >
                Applications
            </h1>

            <div className="relative overflow-x-auto mt-5">
                <table className="w-full text-sm text-center text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Passport Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Applicant
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Contact
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        

                        {
                                        loading ? <tr className="bg-white border-b">
                                        <td colSpan={4} className="px-6 py-4 text-center">
                                            Loading data...
                                        </td>
                                    </tr> : applications.length < 1 ? <tr className="bg-white border-b">
                                        <td colSpan={4} className="px-6 py-4 text-center">
                                            No applications found
                                        </td>
                                    </tr>  : applications.map((app,index)=>(
                                        <tr key={index} className="bg-white border-b">
                                        <td className="px-6 py-4 flex items-center justify-center">
                                            <img src={app.passportImage} className="w-32 h-32 object-cover rounded-md p-1 border" />
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {app.fullname}
                                        </th>
                                        <td className="px-3 py-4">
            
                                            {app.tel}
                                        </td>
            
                                        <td className="px-2 py-4 text-center">
                                            <button type="button" className="hover:underline text-blue-600 text-xs inline-flex items-center gap-1.5">
                                                <span>
                                                    View More Info
                                                </span>
                                                <FontAwesomeIcon icon={faArrowRightLong} width={20} height={20} />
                                            </button>
                                        </td>
                                    </tr>
                                    ))
                                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}