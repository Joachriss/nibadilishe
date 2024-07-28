import { GoArrowRight } from "react-icons/go"
// import { NavLink } from "react-router-dom"
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const EventCard = (props: { picture: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; date: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; isCompleted: any; }) => {
    const [width,setWidth]=useState('line-clamp-4')
    const viewMore = () => {
        if(width == "line-clamp-4"){
            setWidth('line-clamp-none');
        }else{
            setWidth('line-clamp-4')
        }
    }

    useEffect(()=>{
        AOS.init({duration:1000});
    })
    return (
    // <NavLink to={""}>
        <div data-aos="fade-up" data-aos-duration="1000" className="col-span-full group mx-auto md:mx-0 md:col-span-1 shadow-xl relative bg-white px-0 rounded-lg border-b-2 border-b-[#F05A28] ">
            <div className="mx-auto flex flex-col overflow-hidden">
                <div className="overflow-hidden h-[200px]">
                    <img src={props.picture} className="mx-auto rounded aspect-auto group-hover:scale-105 duration-200" alt="Event picture" />
                </div>
                <div className="text-2xl md:text-3xl my-3 px-6 text-[#38466d] font-[400] group-hover:text-[#F05A28] duration-200 font-['quicksand-bold']">{props.name}</div>
                <div className="flex flex-row justify-between px-5 items-center">
                    <div className="text-md text-gray-600  my-1 ">{props.date}</div>
                </div>
                <div className={`text-sm duration-1000 ease-in-out md:text-lg text-justify mb-14 px-6 line-clamp-4 ${width} `}>
                    {props.description}
                </div>
            </div> 
            <button  onClick={viewMore} className="absolute bottom-1 right-1 rounded-md mt-6 ms-5 mb-3 flex flex-row items-center space-x-2 px-4 py-2 text-md font-medium text-[#F05A28] hover:scale-[1.1] ease-in-out duration-200 hover:text-[#b4502f]" aria-current="page">
                <span>Read more</span> <GoArrowRight/>
            </button>
            <div className="absolute top-3 end-3">
                {
                    props.isCompleted ? (
                        <button className="z-[1]rounded-md flex ms-5 mb-3 border-2 bg-[#1EA74A] flex-row items-center px-4 py-1 text-md font-medium text-[#FFF]" aria-current="page">
                            <span>Completed</span><FaCheckCircle className="ps-1"/>
                        </button>
                    ):
                    (
                        <button className="rounded-md space-x-1 ms-5 mb-3 border-2 bg-[#F05A28] flex flex-row items-center px-4 py-1 text-md font-medium text-[#FFF]" aria-current="page">
                            <span>In progress</span><AiOutlineLoading className="duration-500 animate-spin"/>
                        </button>
                    )
                }
                
                
            </div> 
        </div>
    // </NavLink>
  )
}
