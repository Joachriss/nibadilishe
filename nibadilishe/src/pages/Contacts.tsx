import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export const Contacts = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-[1200px] mx-auto my-5 px-2">
                <div className="grid grid-cols-1 mx-auto gap-y-5 md:gap-5 md:gap-y-0 md:grid-cols-3 px-3 justify-center md:justify-between">
                    <div className="col-span-full">
                        <div className='text-center text-[#F05A28] font-[500] md:text-4xl text-3xl my-3'>Contact us</div>
                        <div className=" text-lg md:text-xl text-center font-[500] text-[#38466d] mb-5">
                            NIBADILISHE Our upcoming & completed events Lorem ipsum dolor sit amet consectetur adipisicing eliacere qui tempore earum provident tempora. Voluptas, natus qui.
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-10">
                    <div className="col-span-1 px-5 md:px-1">
                        <div className=' text-[#38466d] font-[500] md:text-3xl text-2xl'>Get in touch</div>
                        <div className=" text-md md:text-lg font-[500] text-[#38466d] mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio atque repellendus fuga eligendi aut voluptatibus nemo labore, impedit ipsam.
                        </div>
                        <div className="flex flex-col text-start space-y-5">
                            <div className="flex flex-row items-center">
                                <FaLocationDot size={40}/>
                                <div className="ps-4">
                                    <span className="text-[#38466d] text-lg font-bold">Location</span><br />
                                    <span className="text-[#38466d] text-lg">consectetur adipisicing eliacere qui eliacere qui tempore earum</span>
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                                <FaPhoneAlt  size={40}/>
                                <div className="ps-4">
                                    <span className="text-[#38466d] text-lg font-bold">Phone number</span><br />
                                    <span className="text-[#38466d] text-lg">+255 658 191 222</span>
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                                <MdEmail  size={40}/>
                                <div className="ps-4">
                                    <span className="text-[#38466d] text-lg font-bold">E-Mail</span><br />
                                    <span className="text-[#38466d] text-lg">joachriss@gmail.com</span>
                                </div>
                            </div>
                            <hr className="border-2 border-gray-600" />
                            <div className="flex flex-col items-center ">
                                <span className="text-[#38466d] text-lg font-bold">Follow Us:</span><br />
                                <div className="flex space-x-4 flex-row items-center ">
                                    <BsInstagram size={40}/>
                                    <BsFacebook size={40} />
                                    <BsTwitter size={40} />
                                    <BsLinkedin size={40} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <form action="" className="h-full mx-2">
                        <div className="h-full col-span-1 rounded-3xl bg-white p-5 md:p-10 flex flex-col space-y-4">
                            <div className=' text-[#38466d] font-[500] md:text-3xl text-2xl'>Send a message</div>
                            <input className="w-full border-2 text-md focus:outline-none focus:border-b-[#38466d] focus:border-b-4 md:text-lg border-gray-300 rounded-md border-t-0 border-x-0 p-3" type="text" placeholder="Name" />
                            <input className="w-full border-2 text-md focus:outline-none focus:border-b-[#38466d] focus:border-b-4 md:text-lg border-gray-300 rounded-md border-t-0 border-x-0 p-3" type="text" placeholder="E-mail" />
                            <textarea name="" className="w-full border-2 focus:outline-none focus:border-b-[#38466d] focus:border-b-4 text-md md:text-lg border-gray-300 rounded-md border-t-0 border-x-0 p-3" placeholder="Message" id=""></textarea>
                            <div className=" text-md font-[400] text-[#38466d]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio atque repellendus fuga eligendi aut voluptatibus nemo labore, impedit ipsam.
                            </div>
                            <button className="w-fit mx-auto rounded-md flex mb-3 border-2 bg-[#1EA74A] flex-row items-center px-4 py-2 text-md font-medium text-[#FFF]" aria-current="page">
                                <span>Send</span><FaCheckCircle className="ps-1 hidden"/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
