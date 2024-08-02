import { FaCheckCircle } from "react-icons/fa"
import AOS from 'aos'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  useEffect(()=>{AOS.init({duration:1000})})
  return (
    <div className='w-full h-[70vh]'>
      <div className="mx-auto max-w-xl min-h-full flex flex-col justify-center align-middle items-center px-2">
        <form data-aos="fade-up" data-aos-duration="1000" action="" className="h-full w-full">
          <div className="h-full rounded-3xl bg-white p-5 md:p-10 flex flex-col space-y-5 shadow-lg">
            <div className="text-[#38466d] font-[500] md:text-3xl text-2xl font-['quicksand-bold']">Register</div>
            <div className="bg-red-400 rounded-lg text-center p-3 text-white">Error here</div>
            <input required value={name} onChange={e=>setName(e.target.value)} className="w-full border-2 text-md focus:outline-none focus:border-b-[#38466d] focus:border-b-4 md:text-lg border-gray-300 rounded-md border-t-0 border-x-0 p-3" type="text" placeholder="Name" />
            <input required value={email} onChange={e=>setEmail(e.target.value)} className="w-full border-2 text-md focus:outline-none focus:border-b-[#38466d] focus:border-b-4 md:text-lg border-gray-300 rounded-md border-t-0 border-x-0 p-3" type="text" placeholder="E-mail" />
            <input required value={password} onChange={e=>setPassword(e.target.value)} type="password" name="" className="w-full border-2 focus:outline-none focus:border-b-[#38466d] focus:border-b-4 text-md md:text-lg border-gray-300 rounded-md border-t-0 border-x-0 p-3" placeholder="password" id=""/>
            <input required value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} type="password" name="" className="w-full border-2 focus:outline-none focus:border-b-[#38466d] focus:border-b-4 text-md md:text-lg border-gray-300 rounded-md border-t-0 border-x-0 p-3" placeholder="Confirm password" id=""/>
            {/* <div className=" text-md font-[400] text-[#38466d]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio atque repellendus fuga eligendi aut voluptatibus nemo labore, impedit ipsam.
                </div> */}
            <div className="mx-auto text-center">
              <button className="w-fit mt-10 mb-5 rounded-md flex border-2 bg-[#1EA74A] flex-row px-4 py-2 text-md font-medium text-[#FFF]" aria-current="page">
                <span>Register</span><FaCheckCircle className="ps-1 hidden" />
              </button>
              <Link to={'/staff'} >Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
