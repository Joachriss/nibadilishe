import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { PageHero } from "../components/PageHero"

export const Donation = () => {
  return (
    <div>
        <Navbar/>
        <PageHero description="Transform lives with your generous donations to our NGO." title="Donation" page='Donate'/>

        <Footer/>
    </div>
  )
}