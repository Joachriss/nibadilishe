// import ScrollToTop from 'react-scroll-to-top';
import './App.css';
import { WhoWeAreCard } from './components/WhoWeAreCard';
import { EventCard } from './components/EventCard';
import { Navbar } from './components/Navbar';
import { GoArrowRight } from "react-icons/go";

function App() {

  return (
    <>
      <Navbar/>
      <div className="w-full mt-4 mb-48">
        <div className="mx-auto max-w-[1140px] flex flex-col space-y-5">
          {/* hero portion */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 px-3">
            <div>
              <div className="md:text-5xl text-3xl text-center md:text-start font-[500] text-[#38466d]">
                Empower youths today to be strong leaders tomorrow.
              </div>
              <div className="md:text-3xl text-xl text-center md:text-start font-[400] mt-4">
                Empower. Advocate. Inspire. Join EcoBuilders, where youths amplify change for a sustainable future.
              </div>
              <button className="rounded-md md:mx-0 mx-auto mt-6 bg-[#F05A28] flex flex-row items-center space-x-2 px-4 py-2 text-md font-medium text-white hover:bg-[#b4502f]" aria-current="page">
                <span>Who are we?</span> <GoArrowRight/>
              </button>
            </div>
            <img src="" className='rounded mx-auto' alt="team picture" />
          </div>

          {/* what we do */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 px-3">
            <div className="col-span-2">
              <div className='text-center text-[#F05A28] font-[500] md:text-4xl text-3xl'>What we do</div>
              {/* <div className='text-center text-[#1EA74A] text-2xl md:text-2xl'>What we do</div> */}
              <div className=" text-2xl md:text-2xl text-center font-[500] text-[#38466d] mb-5">
                NIBADILISHE is centered around:
              </div>
            </div>
            <WhoWeAreCard/>
            <WhoWeAreCard/>
          </div>
        </div>
        <div className="text-center w-full bg-[#F05A28] px-12 py-14 text-white my-10">
          <div className="grid grid-cols-4">
            <div className="col-span-4 md:col-span-3">
              <div className="text-2xl mb-4">Support us</div>
              <div className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur perferendis provident nemo.um, magnam repellendus, tempore possimus pariatur blanditiis nam?</div>
            </div>
            <div className="col-span-4 md:col-span-1 flex items-center justify-center">
              <button className="rounded-md  md:mx-0 mx-auto mt-6 text-[#F05A28] flex flex-row items-center space-x-2 px-4 py-2 text-md font-medium bg-white hover:font-bold hover:text-[#b4502f]" aria-current="page">
                <span>Contact us</span> <GoArrowRight/>
              </button>
            </div>
          </div>
        </div>

        {/* what we do */}
        <div className="max-w-[1140px] mx-auto">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 px-3">
            <div className="col-span-3">
              <div className='text-center text-[#F05A28] font-[500] md:text-4xl text-3xl'>Events</div>
              {/* <div className='text-center text-[#1EA74A] text-2xl md:text-2xl'>What we do</div> */}
              <div className=" text-2xl md:text-2xl text-center font-[500] text-[#38466d] mb-5">
                Our upcoming & completed events
              </div>
            </div>
            <EventCard/>
            <EventCard/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
