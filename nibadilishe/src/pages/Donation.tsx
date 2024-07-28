import { useEffect } from "react";
import { DonationDetails } from "../components/DonationDetails"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { PageHero } from "../components/PageHero"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Donation = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
  })
  return (
    <div>
      <Navbar />
      <PageHero description="Transform lives with your generous donations to our NGO." title="Donation" page='Donate' />
      <div className="w-full">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div data-aos='fade-up' className="col-span-1 text-center px-5 md:px-1 text-[#38466d]">
              <div className=" text-[#38466d] font-[500] font-['quicksand-bold'] md:text-3xl text-2xl">Donate today</div>
              <div className=" text-md md:text-lg font-[500] text-[#38466d] mb-5">
                Every contribution, big or small, makes a difference. Donate today and invest in the future of Tanzania. Witness the ripple effect of your generosity as empowered youth become agents of positive change, building a stronger, more vibrant nation.                            
              </div>
              
            </div>
            <DonationDetails />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
