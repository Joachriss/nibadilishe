import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { ContactForm } from "../components/ContactForm";
import { PageHero } from "../components/PageHero";

export const Contacts = () => {
    return (
        <div>
            <Navbar />
            <PageHero
                page="Contact us"
                title="Contact us"
                description="   NIBADILISHE Our upcoming & completed events Lorem
                      ipsum dolor sit amet consectetur adipisicing eliacere qui tempore
                       earum provident tempora. Voluptas, natus qui.
                    "
            />
            <div className="max-w-[1200px] mx-auto my-5 px-2">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-10">
                    <div className="col-span-1 px-5 md:px-1">
                        <div className=' text-[#38466d] font-[500] md:text-3xl text-2xl'>Get in touch</div>
                        <div className=" text-md md:text-lg font-[500] text-[#38466d] mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio atque repellendus fuga eligendi aut voluptatibus nemo labore, impedit ipsam.
                        </div>
                        <div className="flex flex-col text-start space-y-5">
                            <div className="flex flex-row items-center">
                                <FaLocationDot size={40} />
                                <div className="ps-4">
                                    <span className="text-[#38466d] text-lg font-bold">Location</span><br />
                                    <span className="text-[#38466d] text-lg">consectetur adipisicing eliacere qui eliacere qui tempore earum</span>
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                                <FaPhoneAlt size={40} />
                                <div className="ps-4">
                                    <span className="text-[#38466d] text-lg font-bold">Phone number</span><br />
                                    <span className="text-[#38466d] text-lg">+255 658 191 222</span>
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                                <MdEmail size={40} />
                                <div className="ps-4">
                                    <span className="text-[#38466d] text-lg font-bold">E-Mail</span><br />
                                    <span className="text-[#38466d] text-lg">joachriss@gmail.com</span>
                                </div>
                            </div>
                            <hr className="border-2 border-gray-600" />
                            <div className="flex flex-col items-center ">
                                <span className="text-[#38466d] text-lg font-bold">Follow Us:</span><br />
                                <div className="flex space-x-4 flex-row items-center ">
                                    <BsInstagram size={40} />
                                    <BsFacebook size={40} />
                                    <BsTwitter size={40} />
                                    <BsLinkedin size={40} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}
