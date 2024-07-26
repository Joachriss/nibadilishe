import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { PageHero } from "../components/PageHero"

export const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <PageHero
                page="About us"
                title="Who are we?"
                description="
                 We are an impact organization led by women,
                committed to driving positive change in our
                community. Through a variety of initiatives, we
                address critical social and environmental issues
                such as health, gender-based violence, and climate
                change. Our approach involves active engagement
                with local communities, raising awareness, and
                implementing practical solutions for a brighter,
                more sustainable future."
            />
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 mx-auto gap-y-5 md:gap-5 md:gap-y-0 md:grid-cols-3 px-3 justify-center md:justify-between">
                    <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* <div className="col-span-1 flex items-center">
                            <div className="bg-white p-5 rounded-lg shadow-lg border-l-8 border-l-[#38466d] ">
                                <div className=' text-[#38466d] font-[700] my-2 md:text-3xl text-2xl'>Background</div>
                                <div className=" text-justify text-lg font-[500] text-[#38466d] mb-5">
                                    In Dar es Salaam, Tanzania, Sophia Evodius founded
                                    Stand With Girls in 2018 to empower girls and
                                    women, addressing challenges and inequalities. In
                                    2022, under the leadership of Sophia Evodius, the
                                    organization evolved into Nibadilishe ("Let's
                                    Change" in Swahili), broadening its focus to encom-
                                    pass women's rights, health, environmental sustain-
                                    ability, and gender-based violence.
                                </div>
                            </div>
                        </div> */}
                        <div className="col-span-full flex flex-col md:flex-row space-y-3 md:space-x-3 item">
                            <div className="bg-white p-5 rounded-lg shadow-lg border-l-8 border-l-[#1EA74A] ">
                                <div className=' text-[#38466d] font-[700] my-2 md:text-3xl text-2xl'>Mission</div>
                                <div className="text-justify text-lg font-[500] text-[#38466d] mb-5">
                                    The mission of NIBADILISHE is to create
                                    lasting change by empowering women,
                                    promoting health, addressing climate
                                    change, and ending gender based
                                    violence. Through education, advocacy,
                                    and community action, we aim to build
                                    a future where every woman in Tanzania
                                    has the opportunity to thrive safe and
                                    sustainable environment.
                                </div>
                            </div>
                            <div className="bg-white p-5 rounded-lg shadow-lg border-l-8 border-l-[#F05A28]">
                                <div className=' text-[#38466d] font-[700] my-2 md:text-3xl text-2xl'>Vision</div>
                                <div className="text-justify text-lg font-[500] text-[#38466d] mb-5">
                                    Nibadilishe envisions a Tanzania where
                                    women and girls are empowered,
                                    healthy, and safe, and where gender
                                    equality is ingrained in every aspect of
                                    society. We strive for a future where
                                    women lead the charge in addressing
                                    climate change, shaping policies, and
                                    fostering inclusive communities for all.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full bg-[url('./assets/images/aboutUsBg.jpeg')] my-5 bg-top bg-fixed bg-cover h-[400px] md:h-72">
                <div className="absolute h-full w-full bg-black bg-opacity-50 p-2 md:p-20">
                    <div className="bg-transparent rounded-lg text-center">
                        <div className=' text-[#FFF] font-[900] mb-2 md:text-3xl text-2xl pt-8 md:pt-0'>Background</div>
                        <div className=" text-center text-xl font-[700] text-[#FFF] mb-5">
                            In Dar es Salaam, Tanzania, Sophia Evodius founded
                            Stand With Girls in 2018 to empower girls and
                            women, addressing challenges and inequalities. In
                            2022, under the leadership of Sophia Evodius, the
                            organization evolved into Nibadilishe ("Let's
                            Change" in Swahili), broadening its focus to encompass women's rights, health, environmental sustainability, and gender-based violence.
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
