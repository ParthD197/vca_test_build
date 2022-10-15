import React from 'react'
import Background from '../assets/background.jpg'
import emailjs from 'emailjs-com'

const Contact = () => {
 
 function sendEmail(e){
  e.preventDefault();
   //alert('target1:'+e.target[0].value+' target2:'+e.target[1].value+' target3:'+e.target[2].value)

   if (!e.target[0].value || !e.target[1].value || !e.target[2].value)
   {

       if (!e.target[0].value)
       {
	    alert ("Please enter proper name!");
	    return false;

       }

       if (!e.target[1].value)
       {
	    alert ("Please enter proper email id!");
	    return false;

       }

       if (!e.target[2].value)
       {
	    alert ("Please enter proper message!");
	    return false;

       }
    }
    else
    {
      emailjs.sendForm('service_p9lmrci', 'template_bleb3gd', e.target, '1AtOq0KU6kvgExmCr').then(res=>{console.log(res);}).catch(err=> console.log(err));
      alert ("Submitted successfully!");
      
    }
  }
  return (
  <div name='contact' className='bg-opacity-100 text-gray-300 flex justify-center items-center p-4' style={{ backgroundImage:  `linear-gradient(rgba(8, 14, 44, 0.5), rgba(8, 14, 44, 0.5)), url('${Background}')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width:'100%', height:'628px' }} >

       <form className='flex flex-col max-w-[600px] w-full' onSubmit={sendEmail}>
       <div className='pb-8'>
	   <p className='text-4xl text-yellow-100 font-bold inline border-b-4 border-[#D1B069]'>Contact</p>
	   {/*<p className='py-4'>//</p>*/}
       </div>
       <input className='bg-yellow-100 text-black p-2' type='text' placeholder='Name*' name='name' id='name' />
       <input className='my-4 p-2 bg-yellow-100 text-black' type='email' placeholder='Email*' name='user_email' id='user_email' />
       <textarea className='bg-yellow-100 p-2 text-black' name='message' id='message' rows='10' placeholder='Message*'></textarea>
       <button type='submit'  className='text-[#D1B069] border-2 border-yellow-100 hover:border-[#D1B069] px-4 py-3 my-8 mx-auto flex ' > Let's Connect</button>
       </form>
  
  </div>
  )
}

export default Contact