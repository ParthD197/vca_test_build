import React from 'react'
import Background from '../assets/background.jpg';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll';

const Home = () => {
  return (
  <div name='home' className='bg-opacity-100' style={{ backgroundImage:  `linear-gradient(rgba(8, 14, 44, 0.5), rgba(8, 14, 44, 0.5)), url('${Background}')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width:'100%', height:'628px' }} >
    {/*  */} {/*  <div style={{ backgroundImage: `url('${Background}')` }}> */}

    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    	 <p className='text-gray-300'>Welcome to </p>
	 <h1 className='text-4xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-800'>VISION CA</h1> {/* gold1:DEB271  gold2:E7D0B0 bggold:A69674 */}
	 <p className='text-gray-300 py-4 max-w-[700px]'>India's first and largest free mentoring program run by 250 plus passionate CAs</p>

     <div>
     	   <Link  to="about" smooth={true}  duration={500} >
	   	<button className='text-[#D1B069] group border-2 border-yellow-100 hover:border-[#D1B069] px-6 py-3 my-2 flex items-center'>
		View About
	   
		<span className='group-hover:rotate-90 duration-300'>
		      <HiArrowNarrowRight className='ml-4' />
		</span>
		</button>
	  </Link>		
     </div>
    </div>
    

</div>
  )
}

export default Home