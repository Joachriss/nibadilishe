import Aos from "aos";
import { ReactElement, JSXElementConstructor, ReactNode, useEffect } from "react";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
export const PageHero = (props: {
    description: ReactNode;
    title: ReactNode; page: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; 
}) => {
    useEffect(()=>{
        Aos.init();
    })
    return (
        <div className="w-full mb-5">
            <div className="mx-auto max-w-[1200px] px-5 md:px-2">
                <div className="flex flex-col">
                    <div className='flex fle-row text-gray-500 font-[500] md:text-lg text-sm my-3'>
                        <Link to="/" className="flex flex-row items-center"><IoMdHome /><span className="hover:text-gray-900">Home</span></Link>/{props.page}
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000" className="text-center text-[#F05A28] font-[700] font-['quicksand-bold'] md:text-4xl text-3xl mb-3">{props.title}</div>
                    <div className=" text-lg md:text-xl text-center font-[700] text-[#38466d] mb-5">
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    )
}
