import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { PageHero } from "../components/PageHero"

export const Donation = () => {
  return (
    <div>
        <Navbar/>
        <PageHero description="Donate to our NGO" title="Donation" page='Donate'/>

        <Footer/>
    </div>
  )
}
