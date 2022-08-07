import React from 'react'
import Background from '../assets/background.jpg'

const Mentor = () => {
  return (
  <div name='mentor' className='bg-opacity-100 text-gray-300' style={{ backgroundImage:  `linear-gradient(rgba(8, 14, 44, 0.5), rgba(8, 14, 44, 0.5)), url('${Background}')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width:'100%', height:'628px' }} >
       <div className='flex flex-col justify-center items-center w-full h-full'>
       	    <div className='max-w-[1000px] w-full grid grid-cols-1 gap-8 '>
		<div className='sm:text-left  pl-4'>
		   <p className='text-4xl text-yellow-100 font-bold inline border-b-4 border-[#D1B069] '>
		      Mentor Family
		   </p>
	    	</div>
				
       	        <div className='max-w-[1000px] w-full px-4 grid grid-cols-1 gap-8 '>
       	             <div>
			<p>
		         We have a panel of over 150+ chartered accountants from diverse professional backgrounds, which includes AIR holders, experienced professionals and specialists,. from different niches like statutory audit, management consulting, international taxation, investment banking, equity research, data science, education and traditional CA practice.

			</p>
	       	     </div>
	       	     </div>


	    </div>

       </div>
       
  </div>
  )
}

export default Mentor