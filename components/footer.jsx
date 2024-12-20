import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export const Footer = () => {
    return (


        <footer className="bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 flex flex-col gap-2 items-center justify-center">
                        <img src="/logo.png" className="h-24" alt="Raloc Logo" />
                        <span className="text-white font-bold text-sm">
                            WHERE EVERY JOURNEY TELLS A STORY
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Resources</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Follow us</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://www.tiktok.com/@raloc_travelsgh?_t=8s39qqTLlsD&_r=1" className="hover:underline ">TikTok</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://www.facebook.com/raloctravels" className="hover:underline">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/raloctravels?igsh=amhlMjNjeDBxNmdi&utm_source=qr" className="hover:underline">Instagram</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="/tos" className="hover:underline">Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm sm:text-center text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Raloc™</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://www.facebook.com/raloctravels" className="text-gray-500 hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="https://www.instagram.com/raloctravels?igsh=amhlMjNjeDBxNmdi&utm_source=qr" className="text-gray-500 hover:text-white ms-5">
                            <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 p-0" />
                            <span className="sr-only">Instagram page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>


    )
}