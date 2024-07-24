import { useState } from "react"
import nibadilishe from '../assets/images/Nibadilishe.png';
import ScrollToTop from "react-scroll-to-top";
import { Totop } from "./Totop";
// import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const [nav,setNav]= useState(false);
    // const inActive = "'bg-gray-700 text-white rounded-md px-2 py-3 text-md font-medium'";
    // const notActive="'rounded-md px-2 py-3 text-md font-medium text-gray-800 hover:bg-gray-700 hover:text-white'";
    return (
        <header className="sticky top-0 w-full bg-slate-50">
            <nav className="border-b-2 border-black">
                {/* DESKTOP NAV */}
                <div className="relative max-w-[1240px] mx-auto flex flex-row items-center h justify-between py-4 px-3">
                    <div className="flex flex-shrink-0 items-center">
                        <img className="h-8 w-auto" src={nibadilishe} sizes="100" alt="Company logo" />
                    </div>
                    <div className="hidden sm:ml-6 lg:block">
                        <div className="flex space-x-2 md:space-x-4">
                            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                            <a href="#" className="rounded-md px-2 py-3 text-md font-medium text-[#38466D] hover:bg-gray-700 hover:text-white">Home</a>
                            <a className={`rounded-md px-2 py-3 text-md font-medium text-gray-800 hover:bg-gray-700 hover:text-white`} >About us</a>
                            {/* <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? inActive
                                        : notActive
                                }
                                to="/about"
                            >
                                About us
                            </NavLink> */}
                            <a href="#" className="rounded-md px-2 py-3 text-md font-medium text-gray-800 hover:bg-gray-700 hover:text-white">What we do</a>
                            <a href="#" className="rounded-md px-2 py-3 text-md font-medium text-gray-800 hover:bg-gray-700 hover:text-white">Our events</a>
                            <a href="#" className="rounded-md px-2 py-3 text-md font-medium text-gray-800 hover:bg-gray-700 hover:text-white">Gallery</a>
                            <a href="#" className="rounded-md px-2 py-3 text-md font-medium text-gray-800 hover:bg-gray-700 hover:text-white">Contact Us</a>
                            <a href="#" className="rounded-md bg-[#F05A28] px-4 py-3 text-md font-medium text-white" aria-current="page">Donate</a>
                        </div>
                    </div>
                    <div className="inset-y-0 left-0 flex items-center lg:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button type="button" onClick={()=>setNav(!nav)} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed.
                            Menu open: "hidden", Menu closed: "block" */}
                            {nav ?
                                (
                                    <svg className="block  h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )
                                
                                :
                                
                                (
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>

                    {/* MOBILE NAV */}
                    <div className={`fixed start-0 top-0 bg-[rgba(0,0,0,0.5)] w-full h-full lg:hidden ${nav ? "" : "hidden"}`} onClick={()=>setNav(!nav)}>
                    </div>
                    <div className={`border-e-2 fixed lg:hidden top-0 ${nav ? "start-0" : "-start-[70vw]"} w-[70vw] ease-in-out duration-200  border-orange-600  bg-white block h-full py-4 px-3`}>
                        <div className="flex flex-row justify-between mt-3">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-8 w-auto" src={nibadilishe} sizes="100" alt="Organization logo" />
                            </div>
                            <svg onClick={()=>setNav(!nav)} className="block  h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div className="sm:ml-6 mt-6">
                            <div className="flex flex-col space-y-4">
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                <a href="#" className="rounded-md px-2 py-3 text-md font-medium text-gray-800 hover:bg-gray-700 hover:text-white">Home</a>
                                <a href="#" className="rounded-md px-2 py-3 text-md font-medium text-gray-800 hover:bg-gray-700 hover:text-white">About us</a>
                                <a href="#" className="rounded-md px-2 py-3 text-md font-medium text-gray-800 hover:bg-gray-700 hover:text-white">What we do</a>
                                <a href="#" className="rounded-md px-2 py-3 text-md font-medium text-gray-800 hover:bg-gray-700 hover:text-white">Our events</a>
                                <a href="#" className="rounded-md px-2 py-3 text-md font-medium text-gray-800 hover:bg-gray-700 hover:text-white">Gallery</a>
                                <a href="#" className="rounded-md px-2 py-3 text-md font-medium text-gray-800 hover:bg-gray-700 hover:text-white">Contact Us</a>
                                <div  className="rounded-md text-center   bg-[#F05A28] px-4 py-5 text-md font-medium text-white" aria-current="page">Donate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <ScrollToTop component={<Totop/>} color="white" smooth />

        </header>
    )
}
