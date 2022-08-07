import React from 'react'
import Background from '../assets/background.jpg'

const Vision = () => {
  return (
  <div name='vision' className='bg-opacity-100 text-gray-300' style={{ backgroundImage:  `linear-gradient(rgba(8, 14, 44, 0.5), rgba(8, 14, 44, 0.5)), url('${Background}')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width:'100%', height:'628px' }} >
       <div className='flex flex-col justify-center items-center w-full h-full'>
       	    <div className='max-w-[1000px] w-full grid grid-cols-1 gap-8 '>
		<div className='sm:text-left  pl-4'>
		   <p className='text-4xl text-yellow-100 font-bold inline border-b-4 border-[#D1B069] '>
		      Our Vision & Mission
		   </p>
	    	</div>
				
       	        <div className='max-w-[1000px] w-full px-4 grid grid-cols-1 gap-8 '>
       	             <div>
			<p>
			Our core mission remains to provide no-cost mentoring to all the CA aspirants around the country and help them in achieving the beautiful prefix of CA. Our strength is our community of CA students.

We also aspire to actively contribute to increased awareness of various opportunities in allied fields of CA such as finance, valuation, management consultancy, due diligence etc. and conducts workshop to develop the essential skillset for qualified CA's.
			</p>
	       	     </div>
	       	 </div>
	    </div>

       </div>
       
  </div>
  )
}

export default Vision