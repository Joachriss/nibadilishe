import { GoArrowRight } from "react-icons/go"
// import { NavLink } from "react-router-dom"
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import dummy from '../assets/images/dummy.jpg'

export const EventCard = () => {
  return (
    // <NavLink to={""}>
        <div className="col-span-2 group mx-auto md:mx-0 md:col-span-1 shadow-xl relative bg-white px-0 rounded-lg border-b-2 border-b-[#F05A28] ">
            <div className="mx-auto flex flex-col overflow-hidden">
                <img src={dummy} className="mx-auto rounded aspect-square group-hover:scale-105 duration-200" alt="Event picture" />
                <div className="text-2xl md:text-3xl my-3 px-6 text-[#38466d] font-[600] group-hover:text-[#F05A28] duration-200">Event name</div>
                <div className="flex flex-row justify-between px-5 items-center">
                    <div className="text-md text-gray-600  my-1 ">{Date().toString()}</div>
                </div>
                <div className="text-md text-justify mb-5 px-6">
                    Lorem ipsum dolor sit amet, consectetur acupiditate inventore harum nemo distinctio, vero eveniet. Lorem ipsum dolor, sit amet consectetur minus ad repellendus aperiam architecto, enim harum consectetur!
                </div>
                <button className="rounded-md mt-6 ms-5 mb-3 flex flex-row items-center space-x-2 px-4 py-2 text-md font-medium text-[#F05A28] hover:scale-[1.1] ease-in-out duration-200 hover:text-[#b4502f]" aria-current="page">
                    <span>Read more</span> <GoArrowRight/>
                </button>
            </div> 
            <div className="absolute top-3 end-3">
                <button className="z-[1]rounded-md hidden flex ms-5 mb-3 border-2 bg-[#1EA74A] flex-row items-center px-4 py-1 text-md font-medium text-[#FFF]" aria-current="page">
                    <span>Completed</span><FaCheckCircle className="ps-1"/>
                </button>
                <button className="rounded-md space-x-1 ms-5 mb-3 border-2 bg-[#F05A28] flex flex-row items-center px-4 py-1 text-md font-medium text-[#FFF]" aria-current="page">
                    <span>On process</span><AiOutlineLoading className="duration-500 animate-spin"/>

                </button>
            </div> 
        </div>
    // </NavLink>
  )
}
