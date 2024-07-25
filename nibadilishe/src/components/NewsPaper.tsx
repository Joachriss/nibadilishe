import { GoArrowRight } from "react-icons/go"


export const NewsPaper = () => {
    return (
        <div>
            <form action="">
                <div className="text-center w-full bg-[#d6d6d6] px-12 py-14 text-white my-10">
                    <div className="grid grid-cols-4">
                        <div className="col-span-4">
                            <div className="text-2xl mb-4 text-[#38466d]">Our Newsletter</div>
                            <div className='text-lg text-gray-700'>Subscribe to our weekly newsletter to get updates on events and opportunities.</div>
                        </div>
                        <div className="col-span-4 mt-7 flex flex-col md:flex-row items-center justify-center">
                            <input type="Email" className="rounded-md min-w-[250px]  px-4 py-2 focus:border-[#F05A28]" placeholder="Eg: member@example.com" />
                            <button className="rounded-md md:mx-0 mt-2 md:mt-0 mx-auto bg-[#1EA74A] flex flex-row items-center space-x-2 px-4 py-2 text-md font-medium text-white hover:font-bold hover:bg-[#278d47]" aria-current="page">
                                <span>Subscribe</span> <GoArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
