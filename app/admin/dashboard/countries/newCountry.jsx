"use client"
import { db } from "@/Firebase/config"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { addDoc, collection } from "firebase/firestore"
import Link from "next/link"
import { useState } from "react"
import { toast } from "react-toastify"

export const NewCountry = ({ setAddCountry, setFetchData }) => {

    const [country, setCountry] = useState("")
    const [loading, setLoading] = useState(false)

    const submitData = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {

            if (!country) {
                toast.error("Please add the country!")
                return
            }

            const addCountry = await addDoc(collection(db, `raloc/travels/countries`), { country });

            if (addCountry?.id) {
                toast.success('New country added successfully!')
                setFetchData(true)
                setAddCountry(false)
            } else {
                toast.error('Unexpected error while adding offer, please try again later!')
            }

        }
        catch (e) {
            console.log(e)
            toast.error("Internal Server Error!")
        } finally {
            setLoading(false)
        }

    }



    return (
        <div className="fixed top-0 left-0 h-svh w-full bg-white/20 backdrop-blur-[1px] flex flex-col pt-12 z-50">
            <form onSubmit={submitData} className="bg-white max-w-3xl w-full mx-auto flex-1 shadow rounded-t-lg p-6">

                <div className="flex items-center justify-between">
                    <h2>
                        New Country
                    </h2>
                    <button onClick={() => setAddCountry(false)} type="button" className="bg-gray-200 hover:bg-red-700 hover:text-white p-2 rounded-md">
                        <FontAwesomeIcon icon={faXmark} width={20} height={20} />
                    </button>
                </div>
                <div className="mt-8">
                    <label htmlFor="country" className="text-sm">
                        Country Name
                    </label>
                    <input className="mt-2 block w-full p-2 border rounded-md text-sm" type="text" placeholder="Enter the name of the county" value={country} onChange={(e) => setCountry(e.target.value)} />
                </div>

                <div className="mt-8">
                    <button type="submit" className="bg-blue-600 p-2 w-full text-white rounded-md text-sm">
                        Add Country
                    </button>
                </div>
            </form>


        </div>
    )
}