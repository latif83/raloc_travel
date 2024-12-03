"use client";
import { Apply } from "@/components/apply";
import { Contact } from "@/components/Contact";
import { Feedback } from "@/components/feedback";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import RecentOpportunities from "@/components/recentOpportunities";
import { Services } from "@/components/services";
import SlidingBanner from "@/components/slidingBanner";
import TravelFilter from "@/components/travelFilter";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [apply, setApply] = useState();

  const [openMNav, setOpenMNav] = useState(false);

  return (
    <div>
      {apply && <Apply setApply={setApply} />}
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
                d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
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
              width={500}
              height={500}
              alt="Raloc Travels Logo"
              className="w-16 h-auto"
            />
          </div>
          <div className="absolute top-12 bg-[#00b1eb] border-t border-b border-[#00b1eb] w-full left-0"></div>

          <div className="md:flex hidden gap-4 text-sm font-medium pt-2 relative z-40">
            <Link href={"/"} className="bg-white p-2">
              HOME
            </Link>
            <Link href={"#getInTouch"} className="bg-white p-2">
              CONTACT US
            </Link>
            <Link href={"#services"} className="bg-white p-2">
              OUR SERVICES
            </Link>
            <Link href={"#testimonials"} className="bg-white p-2">
              TESTIMONIALS
            </Link>
            <Link href={"#offers"} className="bg-white p-2">
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
            <div className="bg-[#00b1eb] fixed top-0 left-0 h-svh w-full z-50 py-12 px-4 flex flex-col justify-between transition duration-500">
              <div>
                <div className="flex justify-end">
                  <button onClick={() => setOpenMNav(false)} type="button" className="bg-red-600 p-2 rounded-lg">
                    <FontAwesomeIcon icon={faXmark} width={20} height={20} />
                  </button>
                </div>

                <nav className="flex flex-col gap-2 text-gray-100">
                  <Link href={"/"} className="p-2">
                    HOME
                  </Link>
                  <Link href={"#getInTouch"} className="p-2">
                    CONTACT US
                  </Link>
                  <Link href={"#services"} className="p-2">
                    OUR SERVICES
                  </Link>
                  <Link href={"#testimonials"} className="p-2">
                    TESTIMONIALS
                  </Link>
                  <Link href={"#offers"} className="p-2">
                    OFFERS
                  </Link>
                </nav>
              </div>
              <div>
                <p className="text-center">&copy; RALOC TRAVELS, 2024</p>
              </div>
            </div>
          )}

          <div className="pt-2 md:block hidden relative z-40">
            <button
              onClick={() => setApply(true)}
              type="button"
              className="bg-[#00b1eb] hover:border transition duration-500 p-3 rounded-md flex gap-1.5 text-gray-700"
            >
              <span>Apply Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <SlidingBanner />

      <div className="relative bg-[url('/bg1.png')]">
        <TravelFilter />
        <span className="h-[150px] block"></span>
        <RecentOpportunities />
      </div>

      <Services />

      <Feedback />

      <Gallery />

      <Contact />

      <Footer />
    </div>
  );
}
