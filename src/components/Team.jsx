import React from 'react'
import Background from '../assets/background.jpg'
import T1 from '../assets/pruthvi.jpg'
import T2 from '../assets/raj.jpg'
import T3 from '../assets/yash.jpg'
import T4 from '../assets/harshin.jpg'
import T5 from '../assets/yog.jpg'

import T6 from '../assets/member.jpg'

const Team = () => {
  return (
  <div name='team' className='bg-opacity-100 text-gray-300' style={{ backgroundImage:  `linear-gradient(rgba(8, 14, 44, 0.5), rgba(8, 14, 44, 0.5)), url('${Background}')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width:'100%', height:'628px' }} >

  <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
	<div>
		<p className='text-4xl text-yellow-100 font-bold inline border-b-4 border-[#D1B069]'>Our Founders</p>
	</div>

	<div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
	
	   <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
		<img className='w-20 mx-auto' src={T1} alt="pruthvi img" />
		<p className='my-4'>Pruthvi Mashruwala</p><p> (CEO, Founder) </p>
	   </div>
	   
	   <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
		<img className='w-20 mx-auto' src={T2} alt=" img" />
		<p className='my-4'>Raj Shrimankar</p><p> (Co-founder) </p>
	   </div>

	   <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
		<img className='w-20 mx-auto' src={T3} alt="yash img" />
		<p className='my-4'> Yash Shah</p><p> (Co-founder) </p>
	   </div>
	   <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
		<img className='w-20 mx-auto' src={T4} alt="harshin img" />
		<p className='my-4'> Harshin Vora</p><p> (Co-founder) </p>
	   </div>
	   	   <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
		<img className='w-20 mx-auto' src={T5} alt="yog img" />
		<p className='my-4'> Yog Gandhi</p><p> (Co-founder) </p>
	   </div>

	   <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
		<img className='w-20 mx-auto' src={T6} alt=" img" />
		<p className='my-4'> Founder 6</p><p> (Co-founder) </p>
	   </div>

        </div>

   </div>

  </div>
  )
}

export default Team