import { EventCardManager } from "../components/EventCardManager"
import { StaffHero } from "../components/StaffHero"

export const Dashboard = () => {
  // console.log();
  return (
    <div className="w-full">
        <StaffHero  title="Dashboard" page="Dashboard"/>
        <div className="mx-auto max-w-[1240px] p-5">
            <h1 className="mb-3 text-2xl font-bold">Events</h1>
            <hr className="border-2 w-full my-3 border-gray-400"/>
            <EventCardManager/>
            <EventCardManager/>
            <EventCardManager/>
        </div>
    </div>
  )
}
