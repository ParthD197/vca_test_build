import React, {useState} from 'react';
import { FaBars, FaTimes, FaLinkedin, FaFacebook, FaWhatsapp, FaTwitter, FaInstagram, FaYoutube, FaLink } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
   const [nav, setNav]=useState(false)
   const handleClick = () => setNav(!nav)
   
   return (
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0F172A] text-gray-300" > 
      {/* <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0F172A] 182339text-gray-300" >  */}
   
 
      <div> {/*<img src={Logo} alt="Logo Image" style={{width: '110px', paddingLeft: '30px'}}/> */}
      	    <img src={Logo} alt='Logo Image' style={{width: '80px'}} />
      </div>
      
      {/*menu*/}
       <ul className='hidden md:flex'>
		<li>
		    <Link  to="home" smooth={true}  duration={500} >
		     Home   
	            </Link>
		</li>
		
	        <li>
		    <Link  to="about" smooth={true}  duration={500} >
		    About us
	            </Link>
		 </li>
		
		<li>
		    <Link  to="vision" smooth={true}  duration={500} >
		    Vision
	            </Link>
		</li>
		
		<li>
		    <Link  to="mentor" smooth={true}  duration={500} >
		     Mentors
	            </Link>
		</li>
		
		<li>
		    <Link  to="team" smooth={true}  duration={500} >
		    Team 
	            </Link>
		</li>
		
		<li>
		    <Link  to="contact" smooth={true}  duration={500} >
		     Contact 
	            </Link>
		</li>
    	    </ul>

      {/*menu icon*/}
      <div onClick={handleClick} className='md:hidden z-10'>
      	   {!nav ? <FaBars /> : <FaTimes />}
      </div>


      {/*mobile menu*/}
           <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0F172A] flex flex-col justify-center items-center'}>
		<li className='py-6 text-4xl'>
		    <Link onClick={handleClick}  to="home" smooth={true}  duration={500} >
		     Home   
	            </Link>
		</li>
		
	        <li className='py-6 text-4xl'>
		    <Link onClick={handleClick} to="about" smooth={true}  duration={500} >
		    About us
	            </Link>		
		</li>
		
		<li className='py-6 text-4xl'>
		    <Link onClick={handleClick} to="vision" smooth={true}  duration={500} >
		    Vision
	            </Link>		
		</li>
		
		<li className='py-6 text-4xl'>
		    <Link onClick={handleClick} to="mentor" smooth={true}  duration={500} >
		     Mentors
	            </Link>
		 </li>
		 
		<li className='py-6 text-4xl'>
		    <Link onClick={handleClick} to="team" smooth={true}  duration={500} >
		    Team 
	            </Link>		
		</li>
		
		<li className='py-6 text-4xl'>
		    <Link onClick={handleClick} to="contact" smooth={true}  duration={500} >
		     Contact 
	            </Link>		
		</li>
    	    </ul>

      {/*social icons  linekd color  bg-[#0B66C3]*/}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
       <ul>

	<li className='w-[160px] h-[50px] flex justify-between items-center px-4 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0B66C3]'>
	    <a className='flex justify-between items-center w-full text-gray-300'
	       href="https://www.linkedin.com/company/vision-ca/?viewAsMember=true">
	       LinkedIn <FaLinkedin size={30} />
	    </a>
	</li>

	<li className='w-[160px] h-[50px] flex justify-between items-center px-4 ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-b from-purple-500 via-pink-500 to-yellow-400'>
	    <a className='flex justify-between items-center w-full text-gray-300'
	       href="https://instagram.com/teamvisionca?igshid=YmMyMTA2M2Y="> Instagram <FaInstagram size={30} />
	    </a>
	</li>

{/*	<li className='w-[160px] h-[50px] flex justify-between items-center px-4 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3BE15A]'>
	    <a className='flex justify-between items-center w-full text-gray-300'
	       href="/"> Whatsapp <FaWhatsapp size={30} />
	    </a>
	</li> */}

	<li className='w-[160px] h-[50px] flex justify-between items-center px-4 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1877F3]'>
	    <a className='flex justify-between items-center w-full text-gray-300'
	       href="https://www.facebook.com/teamvisionca"> Facebook <FaFacebook size={30} />
	    </a>
	</li>

	<li className='w-[160px] h-[50px] flex justify-between items-center px-4 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1DA1F3]'>
	    <a className='flex justify-between items-center w-full text-gray-300'
	       href="https://twitter.com/teamvisionca?s=20&t=3JjNG_7NeXDt3c5D4OoFRg"> Twitter <FaTwitter size={30} />
	    </a>
	</li>

	<li className='w-[160px] h-[50px] flex justify-between items-center px-4 ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500'>
	    <a className='flex justify-between items-center w-full text-gray-300'
	       href="https://www.youtube.com/channel/UCWFH-J4_dpBy5bt1IxvA1FA"> YouTube <FaYoutube size={30} />
	    </a>
	</li>

{/*
	<li className='w-[160px] h-[50px] flex justify-between items-center px-4 ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-l from-red-400 to-green-400'>
	    <a className='flex justify-between items-center w-full text-gray-300'
	       href="/"> Gmail <HiOutlineMail size={30} />
	    </a>
	</li>
*/}
	<li className='w-[160px] h-[50px] flex justify-between items-center px-4 ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
	    <a className='flex justify-between items-center w-full text-gray-300'
	       href="https://linktr.ee/visionca"> More <FaLink size={23}/>
	    </a>
	</li>

       </ul>
      </div>

    </div>
  )
}

export default Navbar;