"use client"
import { Footer } from "@/components/footer";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function TermsOfService() {

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
            <div className="sm:px-12 px-3 py-12">
                <div className="">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                        Terms and Conditions
                    </h1>

                    <p className="text-gray-700 mb-6">
                        These Terms and Conditions apply to the use of this website:{" "}
                        <a
                            href="https://www.raloctravels.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            https://www.raloctravels.com
                        </a>, including the mobile site and smartphone app platforms (iOS, Android, and Windows) published and maintained by Raloc Travels.
                        By using this website, you agree to be legally bound by these terms and conditions. Do not use this website if you disagree with any part of the terms and conditions.
                        By accessing or making purchases, you are considered to have read, understood, and agreed to these terms, along with our privacy policy.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-800 mb-4">General Terms</h2>
                    <p className="text-gray-700 mb-6">
                        Together with its subsidiaries and affiliates, Raloc Travels operates under the laws of its founding nation. By accessing or using the Site, you agree to adhere to these terms and any future updates. Terms and conditions for sub-sites or linked pages may vary. Raloc Travels reserves the right to modify these terms without prior notice. Please review the "Terms & Conditions" page periodically for updates.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-800 mb-4">Utilizing the Website</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                        <li>You have the legal right to enter into these Terms of Use and establish a legally enforceable obligation.</li>
                        <li>
                            You will adhere to the Terms of Use when using this website and use it only to make valid reservations for yourself or someone you are legally permitted to act on behalf of.
                        </li>
                        <li>
                            You will provide accurate and complete information, including your full name, address, phone number, and email address. Errors in the information provided are your responsibility.
                        </li>
                        <li>
                            You will secure your login credentials and are responsible for any misuse of your account.
                        </li>
                        <li>Raloc Travels reserves the right to deny access to this Website and its services at any time without prior warning.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-blue-800 mb-4">Communication Policy</h2>
                    <p className="text-gray-700 mb-6">
                        When you make a purchase on the Site, the Company will send you an email with the transaction's status. Ensure your email address is accurate, as Raloc Travels is not responsible for undelivered emails. Additionally, SMS alerts provided by the company are for convenience and are not a legal obligation.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-800 mb-4">Website Content</h2>
                    <p className="text-gray-700 mb-6">
                        This website is for personal use only. No content, including text, images, or videos, may be reproduced, licensed, or sold for commercial purposes without authorization. Raloc Travels grants a limited, non-exclusive license to access and use this site. Interference with the site's functionality is strictly prohibited.
                    </p>

                    <div className="bg-blue-50 p-4 border-l-4 border-blue-700 text-blue-900 text-sm rounded-lg">
                        <strong>Note:</strong> Raloc Travels reserves the right to update or modify these terms without prior notice. It is your responsibility to stay informed of any changes.
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
