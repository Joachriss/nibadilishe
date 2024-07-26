import { EventCard } from "../components/EventCard";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { PageHero } from "../components/PageHero";

export const Events = () => {
    return (
        <div>
            <Navbar />
            <PageHero
                page="Events"
                title="Events"
                description="NIBADILISHE Our upcoming & completed events Lorem"
            />
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 mx-auto gap-y-5 md:gap-5 md:gap-y-0 md:grid-cols-3 px-3 justify-center md:justify-between">
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
            </div>
            <Footer />
        </div>
    )
}
