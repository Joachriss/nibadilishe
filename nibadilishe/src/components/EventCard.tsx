import { GoArrowRight } from "react-icons/go"


export const EventCard = () => {
  return (
    <div className="col-span-2 mx-auto md:mx-0 md:col-span-1 shadow-xl bg-white px-0 rounded-lg border-b-2 border-b-[#F05A28] ">
        <div className="mx-auto flex flex-col">
            <img src="" className="mx-auto rounded aspect-[]" alt="Event picture" />
            <div className="flex flex-row justify-between px-5 items-center">
                <div className="text-md text-gray-600  my-1 ">{Date().toString()}</div>
                <button className="rounded-md mt-6 ms-5 mb-3 border-2 border-[#1EA74A] flex flex-row items-center px-4 py-1 text-md font-medium text-[#1EA74A]" aria-current="page">
                    <span>Completed</span>
                </button>
            </div>
            <div className="text-2xl md:text-3xl my-2 px-6 text-[#38466d] font-[600]">Event name</div>
            <div className="text-md text-justify mb-5 px-6">
                Lorem ipsum dolor sit amet, consectetur acupiditate inventore harum nemo distinctio, vero eveniet. Lorem ipsum dolor, sit amet consectetur minus ad repellendus aperiam architecto, enim harum consectetur!
            </div>
            <button className="rounded-md mt-6 ms-5 mb-3 flex flex-row items-center space-x-2 px-4 py-2 text-md font-medium text-[#F05A28] hover:scale-[1.1] ease-in-out duration-200 hover:text-[#b4502f]" aria-current="page">
                <span>Read more</span> <GoArrowRight/>
            </button>
        </div>  
    </div>
  )
}
