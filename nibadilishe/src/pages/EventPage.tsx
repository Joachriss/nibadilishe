import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { PageHero } from "../components/PageHero"

export const EventPage = () => {
  return (
    <div>
        <Navbar/>
        <PageHero description="Event description" title="event name" page='Event_Details'/>

        <Footer/>
    </div>
  )
}
