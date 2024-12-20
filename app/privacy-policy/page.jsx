"use client"
import { Footer } from "@/components/footer";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function PrivacyPolicy() {

    const [openMNav, setOpenMNav] = useState(false);

    return (
        <>
            <header className="">
                <div className="bg-[#0d4785] shadow text-white md:flex hidden justify-between text-sm sm:px-12">
                    <div className="flex gap-6 p-3 pl-0">
                        <div className="flex gap-1 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                />
                            </svg>

                            <span>Accra, Ghana</span>
                        </div>
                        <div>
                            <span className="border"></span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                            <span>Monday - Friday : 08.00 am - 05.00 pm</span>
                        </div>
                    </div>

                    <div className="flex gap-5 items-center">
                        <span className="border h-full"></span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5"
                        >
                            <path
                                fill="#ffffff"
                                d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 1004.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                            />
                        </svg>
                        <span className="border h-full"></span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5"
                        >
                            <path
                                fill="#ffffff"
                                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                            />
                        </svg>
                        <span className="border h-full"></span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            className="w-5 h-5"
                        >
                            <path
                                fill="#ffffff"
                                d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                            />
                        </svg>
                    </div>
                </div>
                <div className="p-2 sm:px-12 px-3 relative flex justify-between items-center">
                    <div className="relative z-40 bg-white">
                        <Image
                            src={"/logo.png"}
                            width={1000}
                            height={1000}
                            alt="Raloc Travels Logo"
                            className="w-16 h-auto"
                        />
                    </div>
                    <div className="absolute top-12 bg-[#00b1eb] border-t border-b border-[#00b1eb] w-full left-0"></div>

                    <div className="md:flex hidden gap-4 text-sm font-medium pt-2 relative z-40">
                        <Link href={"/"} className="bg-white p-2">
                            HOME
                        </Link>
                        <Link href={"/#getInTouch"} className="bg-white p-2">
                            CONTACT US
                        </Link>
                        <Link href={"/#services"} className="bg-white p-2">
                            OUR SERVICES
                        </Link>
                        <Link href={"/#testimonials"} className="bg-white p-2">
                            TESTIMONIALS
                        </Link>
                        <Link href={"/offers"} className="bg-white p-2">
                            OFFERS
                        </Link>
                    </div>

                    <div className="md:hidden block relative z-40">
                        <button
                            onClick={() => setOpenMNav(true)}
                            type="button"
                            className="bg-[#00b1eb] py-4 px-3 text-white rounded-lg text-gray-200"
                        >
                            <FontAwesomeIcon
                                icon={faBars}
                                width={30}
                                height={30}
                                className="text-xl"
                            />
                        </button>
                    </div>

                    {openMNav && (
                        <div className="bg-[#00b1eb] fixed top-0 left-0 h-svh w-full z-100 py-12 px-4 flex flex-col justify-between transition duration-1000">
                            <div>
                                <div className="flex justify-end">
                                    <button
                                        onClick={() => setOpenMNav(false)}
                                        type="button"
                                        className="bg-red-600 p-2 rounded-lg"
                                    >
                                        <FontAwesomeIcon icon={faXmark} width={20} height={20} />
                                    </button>
                                </div>

                                <nav className="flex flex-col gap-2 text-gray-100">
                                    <Link href={"/"} className="p-2">
                                        HOME
                                    </Link>
                                    <Link href={"/#getInTouch"} className="p-2">
                                        CONTACT US
                                    </Link>
                                    <Link href={"/#services"} className="p-2">
                                        OUR SERVICES
                                    </Link>
                                    <Link href={"/#testimonials"} className="p-2">
                                        TESTIMONIALS
                                    </Link>
                                    <Link href={"/offers"} className="p-2">
                                        OFFERS
                                    </Link>
                                </nav>
                            </div>
                            <div>
                                <p className="text-center">&copy; RALOC TRAVELS, 2024</p>
                            </div>
                        </div>
                    )}


                </div>
            </header>
            <div className="md:px-12 px-3 py-12">
                <div className="">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                        Privacy Policy
                    </h1>

                    <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                        How Do We Collect Data?
                    </h2>
                    <p className="text-gray-700 mb-6">
                        All information related to a traveler’s booking, request, trip, or tour is securely gathered via email and stored in our database whenever a traveler or agent contacts us on behalf of their client.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                        Why and What Data Do We Collect?
                    </h2>
                    <p className="text-gray-700 mb-4">
                        The following information may be gathered during account registration and booking processes:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                        <li>Individual Data</li>
                        <li>Address of Residence</li>
                        <li>Details of the National ID card and postal address</li>
                        <li>Details about the family</li>
                        <li>Information for Education</li>
                        <li>Work Experience</li>
                        <li>Details about the parent or parents</li>
                        <li>Subsequent Kin Details</li>
                    </ul>

                    <p className="text-gray-700 mb-6">
                        This information is required by our suppliers to:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                        <li>Hold temporary reservations using the traveler’s booking name.</li>
                        <li>Inform visitors about visa requirements based on their nationality.</li>
                        <li>Recommend age-appropriate activities and accommodations for children.</li>
                        <li>Make personalized vacation recommendations based on hobbies, budget, and preferences.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                        When the Confirmation Is Made
                    </h2>
                    <p className="text-gray-700 mb-6">
                        Tours carry inherent risks. Personal details such as name, passport information, medical insurance details, and next of kin contact are essential for emergency response and operational purposes. Without this information, emergency response times may be compromised.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                        <li>Complete name (first name, middle name, last name)</li>
                        <li>Passport details (nationality and number)</li>
                        <li>Medical insurance details (policy number, emergency contact, insurance company)</li>
                        <li>Next of Kin (contact for emergencies)</li>
                        <li>Allergies or pre-existing medical conditions</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                        Who Do We Share This Information With?
                    </h2>
                    <p className="text-gray-700 mb-6">
                        Raloc Travels uses the collected data primarily for organizing travel plans and handling emergencies. Information may be shared with subcontractors (lodging, transportation, activity providers) to ensure clients’ comfort and safety. In emergencies, information may also be shared with law enforcement, emergency response teams, or government representatives.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-800 mb-4">Client Comments</h2>
                    <p className="text-gray-700 mb-6">
                        Feedback is shared with service providers to address concerns and improve services. It is also used internally to enhance consultant knowledge of destinations, products, and client expectations.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                        Duration of Data Retention
                    </h2>
                    <p className="text-gray-700 mb-6">
                        Customer information forms are retained for one year after a trip. General details about the booking process may be retained for up to two years.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                        Whom to Contact
                    </h2>
                    <p className="text-gray-700 mb-6">
                        If you have any questions or concerns about how we secure your data, please contact us at:
                    </p>
                    <p className="text-gray-700">
                        Email:{" "}
                        <a
                            href="mailto:ralocgh@gmail.com"
                            className="text-blue-500 hover:underline"
                        >
                            ralocgh@gmail.com
                        </a>
                    </p>
                    <p className="text-gray-700">
                        Phone:{" "}
                        <a href="tel:0503905535" className="text-blue-500 hover:underline">
                            0503905535
                        </a>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}
