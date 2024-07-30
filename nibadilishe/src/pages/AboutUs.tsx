import { useEffect } from "react"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { PageHero } from "../components/PageHero"
import { TeamCard } from "../components/TeamCard"
import sophie from '../assets/team/sophie.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AboutUs = () => {
    const team =[
        {id:1, name:'Sophia Evodius', picture:sophie, tittle:'Chairwoman', description: 'lorem youth-led impact organization dedicated to positive change in our community. We tackle health,'}
    ];
    useEffect(()=>{
        AOS.init({duration:1000});
    })
    return (
        <div className="w-full">
            <Navbar />
            <PageHero
                page="About us"
                title="Who are we?"
                description="
                    Learn about our mission, values, and the impactful work we do to create lasting change in communities.
                "
            />
            <div className="max-w-[1240px] mx-auto">
                <div className="grid grid-cols-1 mx-auto gap-y-5 md:gap-5 md:gap-y-0 px-3 justify-center md:justify-between">
                    <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="col-span-full grid grid-cols-1 md:grid-cols-2 space-y-3 md:space-y-0 md:space-x-3">
                            <div className="col-span-full text-center px-3 text-xl md:text-2xl my-6">
                                <i>
                                    "We are a youth-led impact organization dedicated to positive change in our community. We tackle health, gender-based violence, and climate change through local engagement, awareness, and practical solutions for a sustainable future."
                                </i>
                                <br />
                                <div className="text-center mt-4 font-bold">- NIBADILISHE Org. -</div>
                            </div>
                            <div className="bg-white p-5 rounded-lg shadow-lg border-l-8 border-l-[#1EA74A] ">
                                <div className=' text-[#38466d] font-[700] my-2 md:text-3xl text-2xl w-fit'>Our Mission <br /><hr /></div>
                                <div className="text-justify text-lg font-[500] text-[#38466d] mb-5">
                                    NIBADILISHE's mission is to create lasting change by empowering women, promoting health, combating climate change, and ending gender-based violence. Through education, advocacy, and community action, we strive for a future where every woman in Tanzania can thrive in a safe and sustainable environment.
                                </div>
                            </div>
                            <div className="bg-white p-5 rounded-lg shadow-lg border-l-8 border-l-[#F05A28]">
                                <div className=' text-[#38466d] font-[700] my-2 md:text-3xl text-2xl w-fit'>Our Vision <br /><hr /></div>
                                <div className="text-justify text-lg font-[500] text-[#38466d] mb-5">
                                    NIBADILISHE envisions a Tanzania where women and girls are empowered, healthy, and safe, with gender equality in all aspects of society. We strive for a future where women lead in addressing climate change, shaping policies, and fostering inclusive communities.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full bg-[url('./assets/images/aboutUsBg.jpeg')] my-10 bg-top  bg-fixed min-h-[450px] bg-cover md:h-72">
                <div className=" rounded-lg flex flex-col items-center bg-[rgba(0,0,0,0.6)] py-12 justify-center h-full md:py">
                    <div data-aos="fade-up" data-aos-duration="1000" className=" text-[#FFF] font-[900] mb-2 md:text-6xl text-2xl mt-10 md:pt-0 font-['quicksand-bold']">Background</div>
                    <div data-aos="fade-up" data-aos-duration="1000" className=" text-center text-2xl font-[700] text-[#FFF] mb-10">
                        In Dar es Salaam, Tanzania, Sophia Evodius founded
                        Stand With Girls in 2018 to empower girls and
                        women, addressing challenges and inequalities. In
                        2022, under the leadership of Sophia Evodius, the
                        organization evolved into Nibadilishe ("Let's
                        Change" in Swahili), broadening its focus to encompass women's rights, health, environmental sustainability, and gender-based violence.
                    </div>
                </div>
            </div>

            {/* OUR TEAM SECTION */}
            <div className="max-w-[1240px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 mx-auto gap-y-5 md:gap-5 md:gap-y-0 px-3 justify-center md:justify-between">
                    <div className="col-span-full my-6">
                        <div className='text-center text-[#F05A28] font-[500] md:text-4xl text-3xl'>Meet Our Team</div>
                        <div className=" text-md md:text-xl text-center font-[500] text-[#38466d] mb-5">
                            Our team at Nibadilishe drives positive change with collaboration and compassion.
                        </div>
                    </div>
                    {
                        team.map((person)=>{return <TeamCard  picture={person.picture} name={person.name} tittle={person.tittle} description={person.description}/>})
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}
