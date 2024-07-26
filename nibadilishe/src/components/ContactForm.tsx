import { FaCheckCircle } from "react-icons/fa"

export const ContactForm = () => {
    return (
        <form action="" className="h-full mx-2">
            <div className="h-full col-span-1 rounded-3xl bg-white p-5 md:p-10 flex flex-col space-y-4 shadow-lg">
                <div className=' text-[#38466d] font-[500] md:text-3xl text-2xl'>Send a message</div>
                <input className="w-full border-2 text-md focus:outline-none focus:border-b-[#38466d] focus:border-b-4 md:text-lg border-gray-300 rounded-md border-t-0 border-x-0 p-3" type="text" placeholder="Name" />
                <input className="w-full border-2 text-md focus:outline-none focus:border-b-[#38466d] focus:border-b-4 md:text-lg border-gray-300 rounded-md border-t-0 border-x-0 p-3" type="text" placeholder="E-mail" />
                <textarea name="" className="w-full border-2 focus:outline-none focus:border-b-[#38466d] focus:border-b-4 text-md md:text-lg border-gray-300 rounded-md border-t-0 border-x-0 p-3" placeholder="Message" id=""></textarea>
                <div className=" text-md font-[400] text-[#38466d]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio atque repellendus fuga eligendi aut voluptatibus nemo labore, impedit ipsam.
                </div>
                <button className="w-fit mx-auto rounded-md flex mb-3 border-2 bg-[#1EA74A] flex-row items-center px-4 py-2 text-md font-medium text-[#FFF]" aria-current="page">
                    <span>Send</span><FaCheckCircle className="ps-1 hidden" />
                </button>
            </div>
        </form>
    )
}
