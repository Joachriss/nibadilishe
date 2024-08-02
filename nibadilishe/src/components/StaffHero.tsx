import AOS from "aos";
import { ReactElement, JSXElementConstructor, ReactNode, useEffect } from "react";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
export const StaffHero = (props: {
    // description: ReactNode;
    title: ReactNode; page: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; 
}) => {
    useEffect(()=>{
        AOS.init({duration:1000});
    })
    return (
        <div className="w-full mb-5 bg-[url('./assets/images/hero.jpg')] bg-right bg-opacity-25 bg-cover">
            <div className="mx-auto max-w-[1200px] px-5 md:px-2">
                <div className="flex flex-col">
                    <div className='flex fle-row text-gray-50 font-[500] md:text-lg text-sm my-3'>
                        <Link to="/staff/dashboard" className="flex flex-row items-center"><IoMdHome /><span className="hover:font-bold">Home</span></Link>/<span className="underline">{props.page}</span>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000" className="text-start text-[#F05A28] font-[700] font-['quicksand-bold'] md:text-5xl text-4xl mb-3">{props.title}</div>
                    {/* <div className=" text-lg md:text-lg text-start font-[700] text-[#ffffff] mb-5">
                        {props.description}
                    </div> */}
                </div>
            </div>
        </div>
    )
}
