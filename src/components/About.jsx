import React from 'react'
import Background from '../assets/background.jpg'

const About = () => {
  return (
  <div name='about' className='bg-opacity-100 text-gray-300' style={{ backgroundImage:  `linear-gradient(rgba(8, 14, 44, 0.5), rgba(8, 14, 44, 0.5)), url('${Background}')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width:'100%', height:'628px' }} >
       <div className='flex flex-col justify-center items-center w-full h-full'>
       	    <div className='max-w-[1000px] w-full grid grid-cols-1 gap-8 '>
		<div className='sm:text-left  pl-4'>
		   <p className='text-4xl text-yellow-100 font-bold inline border-b-4 border-[#D1B069] '>
		      About us
		   </p>
	    	</div>
				
       	        <div className='max-w-[1000px] w-full px-4 grid grid-cols-1 gap-8 '>
       	             <div>
			<p>On 2nd May, 2020, amidst the raging Covid-19 Pandemic, a group of six Chartered Accountant friends wondered how they could help their juniors and give back to the CA community - the same one which had given them the chance to achieve their dreams.
			They pondered on what was it that enabled them to successfully achieve the coveted prefix . The answer was "Mentoring" and the result was "Vision CA" - a social initiative, which was started  with an aim to provide no cost mentoring to CA aspirants as a payback to society and the CA fraternity.
			
    {/* With no-cost mentoring for CA aspirants as the core philosophy, over time, the mentoring panel has grown multifold and it has become one of the fastest growing communities providing no cost personal mentoring to 1700+ CAstudents across the country. */}

{/*We have made an impact on 3000+ students through our WhatsApp and Telegram groups and our YouTube channel*/}

{/*Apart from for the free mentoring initiative, we have also diversified into various related segments for CA's like career mentoring for CA freshers and paid webinars and workshops on various topics of professional interest.  */}

</p>
		     	<p>
     With no-cost mentoring for CA aspirants as the core philosophy, over time, the mentoring panel has grown multifold and it has become one of the fastest growing communities providing no cost personal mentoring to 1700+ CA students across the country.
     We have made an impact on 3000+ students through our WhatsApp and Telegram groups and our YouTube channel.
{/*Apart from for the free mentoring initiative, we have also diversified into various related segments for CA's like career mentoring for CA freshers and paid webinars and workshops on various topics of professional interest. */}
</p>
	             </div>
		
	        </div>

	    </div>

       </div>
       
  </div>
  )
}

export default About