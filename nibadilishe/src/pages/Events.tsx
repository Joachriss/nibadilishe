import { EventCard } from "../components/EventCard";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Events = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 mx-auto gap-y-5 md:gap-5 md:gap-y-0 md:grid-cols-3 px-3 justify-center md:justify-between">
                    <div className="col-span-3">
                        <div className='text-center text-[#F05A28] font-[500] md:text-4xl text-3xl'>Events</div>
                        <div className=" text-2xl md:text-2xl text-center font-[500] text-[#38466d] mb-5">
                            Our upcoming & completed events
                        </div>
                    </div>
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
            </div>
            <Footer />
        </div>
    )
}
