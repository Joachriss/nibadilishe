import { WhoWeAreCard } from '../components/WhoWeAreCard';
import { EventCard } from '../components/EventCard';
import { Navbar } from '../components/Navbar';
import { GoArrowRight } from "react-icons/go";
import { Footer } from '../components/Footer';
import { Link, NavLink } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';



function App() {

  return (
    <>
      <Navbar/>
      <div className="w-full">
          {/* hero portion */}
          <div className="grid h-screen items-center gap-5 md:grid-cols-2 px-3 bg-[url('./assets/images/hero.jpg')] bg-cover bg-center relative">
            <div className='md:ps-10 -mt-20'>
              <div className="md:text-5xl text-3xl text-center md:text-start font-['quicksand-bold'] font-[500] text-[#FFF]">
                Empowering women, driving change through health, equality, and climate action.
              </div>
              <div className="md:text-3xl text-xl text-center md:text-start font-[400] mt-4 text-white">
                Empower. Advocate. Inspire. Join EcoBuilders, where youths amplify change for a sustainable future. <br />
                <TypeAnimation
                  sequence={['Empowerment',3000, 'Equality',3000, 'Sustainability',3000]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className='text-[#F05A28] font-["quicksand-bold"]'
                  speed={10}
                />
              </div>
              <Link to='/About_Us' className="w-fit rounded-md md:mx-0 mx-auto mt-6 bg-[#1EA74A] shadow-xl flex flex-row items-center space-x-2 px-4 py-2 text-md font-medium text-white hover:bg-[#278d47]" aria-current="page">
                <span>Who are we?</span> <GoArrowRight/>
              </Link>
            </div>
          </div>
        <div className="mx-auto max-w-[1240px] flex flex-col space-y-5">

          {/* what we do */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 px-3" id="whatWeDo">
            <div className="col-span-2">
              <div className='text-center mt-14 text-[#F05A28] font-[500] md:text-4xl text-3xl'>What we do</div>
              {/* <div className='text-center text-[#1EA74A] text-2xl md:text-2xl'>What we do</div> */}
              <div className=" text-2xl md:text-2xl text-center font-[500] text-[#38466d] mb-5">
                NIBADILISHE is centered around:
              </div>
            </div>
            <WhoWeAreCard/>
            <WhoWeAreCard/>
            <WhoWeAreCard/>
            <WhoWeAreCard/>
          </div>
        </div>
        <div className="text-center w-full bg-[#F05A28] px-12 py-14 text-white my-10">
          <div className="grid grid-cols-4">
            <div className="col-span-4 md:col-span-3">
              <div className="text-2xl mb-4 font-['quicksand-bold']">Support us</div>
              <div className='text-lg'>Be a catalyst for change! Your support enables us to empower women, improve health, and address key social and environmental challenges. Donate or get involved to help us create a lasting impact.</div>
            </div>
            <div className="col-span-4 md:col-span-1 flex items-center justify-center">
              <Link to="/contact_Us" className="rounded-md  md:mx-0 mx-auto mt-6 text-[#F05A28] flex flex-row items-center space-x-2 px-4 py-2 text-md font-medium bg-white hover:font-bold hover:text-[#b4502f]" aria-current="page">
                <span>Contact us</span> <GoArrowRight/>
              </Link>
            </div>
          </div>
        </div>

        {/* what we do */}
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 mx-auto gap-y-5 md:gap-5 md:gap-y-0 md:grid-cols-3 px-3 justify-center md:justify-between">
            <div className="col-span-full my-2">
              <div className='text-center text-[#F05A28] font-[500] md:text-4xl text-3xl'>Events</div>
              <div className=" text-2xl md:text-2xl text-center font-[500] text-[#38466d] mb-5">
                Our upcoming & completed events
              </div>
            </div>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <div className="col-span-3 mt-5">
              <NavLink to="/Our_events" className="rounded-md w-fit mx-auto mt-6 bg-[#1EA74A] shadow-xl flex flex-row items-center space-x-2 px-4 py-2 text-md font-medium text-white hover:bg-[#278d47]" aria-current="page">
                <span>View more</span> <GoArrowRight/>
              </NavLink>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App;