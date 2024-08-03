import { FaCheckCircle } from "react-icons/fa"
import AOS from 'aos'
import { useEffect, useState } from "react"
import axios from 'axios';
import { Link } from "react-router-dom"
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [axierror, setAxierror] = useState('');
  const [response, setResponse] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
  };

  useEffect(() => { AOS.init({ duration: 1000 }) });

  function registerUser(e: { preventDefault: () => void; }) {
    e.preventDefault();
    const userData = { name: name, email: email, password: password, confirmPassword: confirmPassword };
    axios.post('http://127.0.0.1:5000/api/createUser', userData)
      .then(res => {setResponse(res.data); console.log(res)})
      .catch(err => { setAxierror(err.response.data.errors[0].msg); console.log(err) });
  }

  let message;
  if (response.length > 0) {
    message = (
      <div className="bg-green-400 rounded-lg text-center p-3 text-white">
        {response}
      </div>
    );
  } else if (axierror.length > 0) {
    message = (
      <div className="bg-red-400 rounded-lg text-center p-3 text-white">
        {axierror}
      </div>
    );
  }

  return (
    <div className='w-full h-[70vh]'>
      <div className="mx-auto max-w-xl min-h-full flex flex-col justify-center align-middle items-center px-2">
        <form data-aos="fade-up" onSubmit={registerUser} data-aos-duration="1000" action="" className="h-full w-full">
          <div className="h-full rounded-3xl bg-white p-5 md:p-10 flex flex-col space-y-5 shadow-lg">
            <div className="text-[#38466d] font-[500] md:text-3xl text-2xl font-['quicksand-bold']">Register</div>
            {/* {response.length == 0  ? (<div className="bg-red-400 rounded-lg text-center p-3 text-white">{axierror}</div>)
            
           : (<div className="bg-green-400 rounded-lg text-center p-3 text-white">{response}</div>)} */}
            {message}
            <input required value={name} onChange={e => setName(e.target.value)} className="w-full border-2 text-md focus:outline-none focus:border-b-[#38466d] focus:border-b-4 md:text-lg border-gray-300 rounded-md border-t-0 border-x-0 p-3" type="text" placeholder="Name" id="name" autoComplete="on" name="name" />
            <input required value={email} onChange={e => setEmail(e.target.value)} className="w-full border-2 text-md focus:outline-none focus:border-b-[#38466d] focus:border-b-4 md:text-lg border-gray-300 rounded-md border-t-0 border-x-0 p-3" type="text" placeholder="E-mail" id="email" autoComplete="on" name="email"/>
            <div className="flex flex-row">
              <input required value={password} onChange={e => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} name="password" className="w-full border-2 focus:outline-none focus:border-b-[#38466d] focus:border-b-4 text-md md:text-lg border-gray-300 rounded-md border-t-0 border-x-0 p-3" placeholder="password" id="password" /> 
              <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="mt-2 text-gray-700"
              >
                  {showPassword ? <BiSolidHide size={40}/> : <BiSolidShow size={40}/>}
              </button>
            </div>
            <input required value={confirmPassword} onChange={e =>{ setConfirmPassword(e.target.value)}} type="password" name="confirmPassword" className="w-full border-2 focus:outline-none focus:border-b-[#38466d] focus:border-b-4 text-md md:text-lg border-gray-300 rounded-md border-t-0 border-x-0 p-3" placeholder="Confirm password" id="confirmPassword" />
            <div className="mx-auto text-center">
              <button type="submit" className="w-fit mt-10 mb-5 rounded-md flex border-2 bg-[#1EA74A] hover:bg-[#27c258] flex-row px-4 py-2 text-md font-medium text-[#FFF]" aria-current="page">
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
