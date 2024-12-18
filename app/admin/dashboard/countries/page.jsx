"use client"
import { faEdit, faPlus, faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NewCountry } from "./newCountry";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/Firebase/config";

export default function Countries() {

    const [addCounty,setAddCountry] = useState(false)

    const [countries,setCountries] = useState([])

    const [fetchData, setFetchData] = useState(true)

    const [loading,setLoading] = useState(true)

    useEffect(() => {

        const getCountries = async () => {
            try {

                const getCountriesDataRequest = await getDocs(
                    collection(db, "raloc/travels/countries")
                );

                const countriesData = getCountriesDataRequest.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setCountries(countriesData)

            }
            catch (e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        }

        if (fetchData) {
            getCountries()
            setFetchData(false)
        }

    }, [fetchData])

    return (


        <div className="px-3 pt-8">
            {addCounty && <NewCountry setAddCountry={setAddCountry} setFetchData={setFetchData} />}
            <div className="flex justify-between items-center mb-8">
                <h1>
                    Countries
                </h1>
                <button onClick={()=>setAddCountry(true)} type="button" className="bg-black hover:bg-gray-700 text-white p-2 rounded-md flex items-center gap-1.5 text-sm">
                    <FontAwesomeIcon icon={faPlusCircle} width={20} height={20} className="text-xs" />
                    <span>
                        New Country
                    </span>
                </button>
            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-center text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Countries
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading ? <tr className="bg-white border-b">
                            <td colSpan={2} className="px-6 py-4 text-center">
                                Loading data...
                            </td>
                        </tr> : countries.length < 1 ? <tr className="bg-white border-b">
                            <td colSpan={2} className="px-6 py-4 text-center">
                                No countries found
                            </td>
                        </tr>  : countries.map((country,index)=>(
                            <tr key={index} className="bg-white border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {country.country}
                            </th>
                            <td className="px-6 py-4 flex gap-2 items-center justify-center">
                                <button type="button" className="bg-blue-600 rounded-md flex items-center justify-center p-2 text-white gap-2 text-xs">
                                    <FontAwesomeIcon icon={faEdit} width={15} height={15} className="text-xs" />
                                    <span>
                                        Edit
                                    </span>
                                </button>

                                <button type="button" className="bg-red-600 rounded-md flex items-center justify-center p-2 text-white gap-2 text-sm">
                                    <FontAwesomeIcon icon={faTrash} width={15} height={15} className="text-xs" />
                                    <span>
                                        Delete
                                    </span>
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