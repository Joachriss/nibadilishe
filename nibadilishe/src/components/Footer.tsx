import nibadilishe from '../assets/images/Nibadilishe.png'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";
import { NewsPaper } from './NewsPaper';
export const Footer = () => {
  return (
    <footer className="w-full mt-5 py-5">
        <NewsPaper/>
        <div className="grid md:grid-cols-3 px-6 grid-cols-1">
            <div className="col-span-1 flex flex-col md:items-start items-center">
                <img src={nibadilishe} className='md:w-[70%] w-[60%]' alt="" />
                <div className="mt-4 flex space-x-4 px-4 flex-row items-center ">
                    <BsInstagram size={27}/>
                    <BsFacebook size={27} />
                    <BsTwitter size={27} />
                    <BsLinkedin size={27} />
                </div>
            </div>

            <div className="col-span-2 items-center md:mx-auto md:items-start flex justify-center my-5">
                <div className="md:text-xl text-end text-sm font-bold text-gray-500 w-fit">Contact us</div>
                <div className="min-h-full md:min-h-[40px] border-2 mx-3 border-black"/>
                <div className="md:text-xl text-sm font-bold text-gray-500">Terms of service</div>
                <div className="min-h-full md:min-h-[40px] border-2 mx-3 border-black"/>
                <div className="md:text-xl text-sm font-bold text-gray-500">FAQ</div>
            </div>
        </div>
        <hr className='border-[1px] my-4 border-[#0c02026c]'/>
        <div className="text-center text-sm font-bold text-gray-500 mt-4">Created by: <a href="https://ikoncreatives.com" className='text-gray-800'>IkonCreatives</a></div>
        <div className="text-center text-sm font-bold text-gray-500">NIBADILISHE © {new Date().getFullYear()}</div>
    </footer>
  )
}
