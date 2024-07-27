import { WhoWeAreCard } from '../components/WhoWeAreCard';
import { EventCard } from '../components/EventCard';
import { Navbar } from '../components/Navbar';
import { GoArrowRight } from "react-icons/go";
import { Footer } from '../components/Footer';
import { Link, NavLink } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import picha01 from '../assets/gallery/WhatsAppImage2024-06-15at17.46.23.jpeg';
import picha02 from '../assets/gallery/WhatsAppImage2024-06-15at17.46.44.jpeg';
import picha03 from '../assets/gallery/WhatsAppImage2024-06-15at17.46.43.jpeg';



function App() {
  const whoWeAreList = [
    { id: 1, objective: 'Youth exposure & connect', color: 'border-b-[#1EA74A]', description: 'We present youths with various opportunities they can pursue based on their skills and interests.' },
    { id: 2, objective: 'Charity and philanthropy', color: 'border-b-[#F05A28]', description: 'We are devoted to providing assistance to various marginalized groups within the community, employing philanthropic initiatives to contribute to the well-being of society at large.' },
    { id: 3, objective: 'SDGs & Policy advocacy', color: 'border-b-[#FCC614]', description: 'We join development partners to shape policies in climate, gender and quality education to ensure sustainability of the world. ' },
    { id: 4, objective: 'Awareness Raising', color: 'border-b-[#38466d]', description: 'We conduct programs to raise awareness in communities through capacity building, knowledge transfer, and social media' },
  ]

  const eventLIst = [
    {id: 1, name: 'NI SAWA NA MIMI', image: picha01, isCompleted: true, date: '2022-02-02', description: '"Ni Sawa Na Mimi" is an initiative by Nibadilishe that advocatesfor equality and fights against discrimination towards individualswith special needs or belonging to marginalized groups.Thephrase "Ni Sawa Na Mimi" translates to English “It\'s the same as me" in Swahili, emphasizing the belief that every individual, regardless of their background, abilities, or circumstances,deserves equal rights, respect, and opportunities.Through this initiative, Nibadilishe works to raise awareness about the importance of inclusion, diversity, and acceptance in society.The goal is to create a more inclusive and equitable community where everyone can live with dignity and thrive to their fullest potential, free from prejudice and discrimination.', },
    { id: 2, name: 'NISITIRI BINTI CAMPAIGN', image: picha02, isCompleted: true, date: '2023-02-22', description: 'The "Nisitiri Binti" campaign is centered around the donation of underwear to girls and women in need. By providing clean and quality underwear, the campaign aims to address a fundamental aspect of menstrual hygiene management and empower girls and women to navigate their periods with comfort and dignity.' },
    { id: 3, name: 'FLASH BACK TO SCHOOL', image: picha03, isCompleted: false, date: '2024-02-12', description: '"Flashback to School" is an initiative by Nibadilishe that focuses on providing all the necessary school materials to children from low-income communities. The aim of this campaign is to ensure that every child has access to quality education by removing the financial barrier associated with purchasing school supplies. Through "Flashback to School," Nibadilishe distributes items such as textbooks, notebooks, stationery, backpacks, and uniforms to students in need, enabling them to fully engage in their learning and pursue their academic goals. By addressing the material needs of these students, the campaign seeks to promote educational equity and empower children from marginalized backgrounds to reach their full potential.' }
  ]
  return (
    <>
      <Navbar />
      <div className="w-full">
        {/* hero portion */}
        <div className="grid h-screen items-center gap-5 md:grid-cols-2 px-3 bg-[url('./assets/images/hero.jpg')] bg-cover bg-center relative">
          <div className='md:ps-10 -mt-20'>
            <div className="md:text-5xl text-3xl text-center md:text-start font-['quicksand-bold'] font-[500] text-[#FFF]">
              {/* Empowering women, driving change through health, equality, and climate action. */}
              Empowering communities for a sustainable future. <br />
              Impact-driven NGO led by youth.

            </div>
            <div className="md:text-3xl text-xl text-center md:text-start font-[400] mt-4 text-white">
              Together we tackle health gender equality, climate change and more <br />
              <TypeAnimation
                sequence={['Empowerment', 3000, 'Equality', 3000, 'Sustainability', 3000]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className='text-[#FCC614] font-["quicksand-bold"]'
                speed={10}
              />
            </div>
            <Link to='/About_Us' className="w-fit rounded-md md:mx-0 mx-auto mt-6 bg-[#1EA74A] shadow-xl flex flex-row items-center space-x-2 px-4 py-2 text-md font-medium text-white hover:bg-[#278d47]" aria-current="page">
              <span>Who are we?</span> <GoArrowRight />
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

            {whoWeAreList.map((item) => <WhoWeAreCard key={item.id} objective={item.objective} description={item.description} color={item.color} />)}

          </div>
        </div>
        <div className="text-center w-full bg-[#F05A28] px-12 py-14 text-white my-10">
          <div className="grid grid-cols-4">
            <div className="col-span-4 md:col-span-3">
              <div className="text-2xl mb-4 font-['quicksand-bold']">Support our cause</div>
              <div className='text-lg'>
                You can bolster our cause through partnerships, donations, and in-kind support, crucial for the
                organization's operational continuity. Your contribution greatly impacts our effort
              </div>
            </div>
            <div className="col-span-4 md:col-span-1 flex items-center justify-center">
              <Link to="/contact_Us" className="rounded-md  md:mx-0 mx-auto mt-6 text-[#F05A28] flex flex-row items-center space-x-2 px-4 py-2 text-md font-medium bg-white hover:font-bold hover:text-[#b4502f]" aria-current="page">
                <span>Contact us</span> <GoArrowRight />
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

            {eventLIst.map((details) => <EventCard key={details.id} picture={details.image} name={details.name} date={details.date} description={details.description} isCompleted={details.isCompleted} />)}

            <div className="col-span-3 mt-5">
              <NavLink to="/Our_events" className="rounded-md w-fit mx-auto mt-6 bg-[#1EA74A] shadow-xl flex flex-row items-center space-x-2 px-4 py-2 text-md font-medium text-white hover:bg-[#278d47]" aria-current="page">
                <span>View more</span> <GoArrowRight />
              </NavLink>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App;