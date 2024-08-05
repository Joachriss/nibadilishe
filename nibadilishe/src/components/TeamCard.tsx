// import { FaCheckCircle } from "react-icons/fa"
// import dummy from '../assets/images/dummy.jpg'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect } from "react";

export const TeamCard = (props: { picture: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; tittle: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
    useEffect(()=>{
        AOS.init({duration:1000});
    })
    return (
        <div data-aos="flip-right" data-aos-duration="1000" className="col-span-2 duration-200 group hover:scale-105 mx-auto md:col-span-1 shadow-xl relative bg-white px-0 rounded-lg border-b-2 border-b-[#F05A28] ">
            <div className="mx-auto flex flex-col overflow-hidden rounded-md">
                <img src={props.picture} className="mx-auto rounded aspect-auto duration-200" alt="Member picture" />
                <div className="text-2xl md:text-XLxl my-2 px-6 text-[#38466d] text-center font-[400] duration-200 font-['quicksand-bold']">{props.name}</div>
                <div className=" text-sm text-gray-500  text-center mb-2 w-fit mx-auto">{props.tittle} <br /><hr/></div>
                <div className="text-md text-center italic mb-5 px-6">
                    {props.description}
                </div>
                {/* <button className="rounded-md mt-6 ms-5 mb-3 flex flex-row items-center space-x-2 px-4 py-2 text-md font-medium text-[#F05A28] hover:scale-[1.1] ease-in-out duration-200 hover:text-[#b4502f]" aria-current="page">
                    <span>Read more</span> <GoArrowRight />
                </button> */}
            </div>
            <div className="absolute top-3 end-3">
                {/* <button className="z-[1]rounded-md hidden fflex ms-5 mb-3 border-2 bg-[#1EA74A] flex-row items-center px-4 py-1 text-md font-medium text-[#FFF]" aria-current="page">
                    <span>Completed</span><FaCheckCircle className="ps-1" />
                </button> */}
                {/* <button className="rounded-md space-x-1 ms-5 mb-3 border-2 bg-[#F05A28] flex flex-row items-center px-4 py-1 text-md font-medium text-[#FFF]" aria-current="page">
                    <span>In progress</span><AiOutlineLoading className="duration-500 animate-spin" />
                </button> */}
            </div>
        </div>
    )
}
