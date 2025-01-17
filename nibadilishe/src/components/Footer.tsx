import nibadilishe from '../assets/images/Nibadilishe.png'
import { BsInstagram, BsLinkedin, BsTiktok, BsTwitter} from "react-icons/bs";
import { NewsPaper } from './NewsPaper';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';

import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Footer = () => {
    useEffect(()=>{
        AOS.init({duration:1000});
    })
  return (
    <div className="w-full mt-5 py-5 sticky">
        <NewsPaper/>
        <div data-aos='fade-up' data-aos-duration="1000" className="grid md:grid-cols-3 px-6 grid-cols-1">
            <div className="col-span-1 flex flex-col md:items-start items-center">
                <img src={nibadilishe} className='md:w-[70%] w-[60%]' alt="" />
                <div className="mt-4 flex space-x-4 px-4 flex-row items-center text-gray-800">
                    <a href="https://www.instagram.com/nibadilishe_organization?igsh=MWM2aWU5ZTA3NWhvNw=="><BsInstagram size={30}/></a>
                    <BsTiktok  size={30} />
                    <BsTwitter size={30} />
                    <BsLinkedin size={30} />
                </div>
            </div>

            <div className="col-span-2 items-center md:mx-auto md:items-start flex justify-center my-5">
                <NavLink to='/Contact_us' className="md:text-xl text-end text-sm font-bold text-gray-500 w-fit hover:text-gray-900">Contact us</NavLink>
                <div className="min-h-full md:min-h-[40px] border-2 mx-3 border-black"/>
                {/* <div className="md:text-xl text-sm font-bold text-gray-500">Terms of service</div>
                <div className="min-h-full md:min-h-[40px] border-2 mx-3 border-black"/> */}
                <div className="md:text-xl text-sm font-bold text-gray-500">FAQ</div>
            </div>
        </div>
        <hr className='border-[1px] my-4 border-[#0c02026c]'/>
        <div className="text-center text-lg text-gray-500 mt-4">Created by: <a href="https://ikoncreatives.com" className='text-gray-900 font-bold'><span className='duration-200 hover:text-black'>IkonCreatives</span></a></div>
        <div className="text-center text-sm font-bold text-gray-500">NIBADILISHE © {new Date().getFullYear()}</div>
    </div>
  )
}
