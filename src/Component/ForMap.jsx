import React from 'react'
import TeamDeata from './TeamData'

const ForMap = () => {
   return (

      <section className='w-full '>

         <div className='my-0 mx-auto p-20'>
            {/* Team headings start */}
            <div className='text-center'>
               <small className='uppercase mb-[14px] opacity-50'>Team section</small>
               <h1 className='text-[64px] mb-6'>Meet the Team</h1>
               <p className='mb-16'>Amet minim mollit non deserunt ullamco est sit.</p>

               <div className='flex justify-center items-center gap-4 mb-6'>
                  <button className='font-bold text-white bg-[#4255BD] w-[123px] h-14 rounded-xl'>About us</button>
                  <button className='font-bold border border-blue-600 text-[#6877CA] w-[123px] h-14 rounded-xl'>Careers</button>
               </div>

               <div className=' mb-16'>
                  <small className='rounded-lg w-[182] h-6 font-bold uppercase text-[#40BF6A] bg-[#F4FBF6] py-1 px-[10px]'>We're Hiring!</small>
               </div>

            </div>
            {/* Team headings End */}


            {/* Team cards start */}
            <div className='lg:flex md:grid md:grid-cols-2 sm:grid gap-10 justify-center items-center'>
               {/* for maping */}
               {
                  TeamDeata.map(
                     (data) => {
                        return (

                           <div className=' border border-black rounded-[20px] p-6 w-[290px]'>
                              {/* Start cards */}
                              <img src={data.img} alt="Profile" />

                              <div className='text-center mt-6'>

                                 <small className='opacity-50'>{data.post}</small>
                                 <h1 className='text-2xl font-bold'>{data.name}</h1>
                                 <div className='flex gap-1 justify-center items-center mt-6'>
                                    <a className='h-9 w-9 hover:bg-[#F4F5FB] flex items-center justify-center opacity-50 hover:opacity-100' href="https://twitter.com/">{data.icons.Twitter}</a>
                                    <a className='h-9 w-9 hover:bg-[#F4F5FB] flex items-center justify-center opacity-50 hover:opacity-100' href="https://www.instagram.com/">{data.icons.Instagram}</a>
                                    <a className='h-9 w-9 hover:bg-[#F4F5FB] flex items-center justify-center opacity-50 hover:opacity-100' href="https://www.linkedin.com/">{
                                       data.icons.Linkedin}</a>
                                 </div>

                              </div>

                              {/* End cards */}
                           </div>


                        )
                     }
                  )
               }

               {/* Team cards end */}

            </div>
         </div>

      </section>

   )
}

export default ForMap