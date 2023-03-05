import React from 'react'

import pic1 from '../Image/img.png'
import pic2 from '../Image/img (1).png'
import pic3 from '../Image/img (2).png'
import pic4 from '../Image/img (3).png'

import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const TeamSection = () => {
   return (
      <section className='w-full'>

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
            {/* Team headings start */}


            {/* Team cards start */}

            <div className='lg:flex md:grid md:grid-cols-2 sm:grid gap-10 justify-center items-center'>

               <div className=' border border-black rounded-[20px] p-6 w-[290px]'>
                  <img src={pic1} alt="Profile" />

                  <div className='text-center mt-6'>

                     <small className='opacity-50'>FOUNDER</small>
                     <h1 className='text-2xl font-bold'>Andrew Power</h1>
                     <div className='flex gap-1 justify-center items-center mt-6'>
                        <a className='h-9 w-9 hover:bg-[#F4F5FB] flex items-center justify-center' href="https://twitter.com/"><FaTwitter /></a>
                        <a className='h-9 w-9 hover:bg-[#F4F5FB] flex items-center justify-center' href="https://www.instagram.com/"><FaInstagram /></a>
                        <a className='h-9 w-9 hover:bg-[#F4F5FB] flex items-center justify-center' href="https://www.linkedin.com/"><FaLinkedinIn /></a>
                     </div>

                  </div>

               </div>

               {/* 2nd care */}
               <div className=' border border-black rounded-[20px] p-6 w-[290px]'>
                  <img src={pic2} alt="Profile" />

                  <div className='text-center mt-6'>

                     <small className='opacity-50'>MANAGER</small>
                     <h1 className='text-2xl font-bold'>Theresa Webb</h1>
                     <div className='flex gap-1 justify-center items-center mt-6'>
                        <a className='h-9 w-9 hover:bg-[#F4F5FB] flex items-center justify-center' href="https://twitter.com/"><FaTwitter /></a>
                        <a className='h-9 w-9 hover:bg-[#F4F5FB] flex items-center justify-center' href="https://www.instagram.com/"><FaInstagram /></a>
                        <a className='h-9 w-9 hover:bg-[#F4F5FB] flex items-center justify-center' href="https://www.linkedin.com/"><FaLinkedinIn /></a>
                     </div>

                  </div>

               </div>
               {/* 3rd care */}
               <div className=' border border-black rounded-[20px] p-6 w-[290px]'>
                  <img src={pic3} alt="Profile" />

                  <div className='text-center mt-6'>

                     <small className='opacity-50'>PROJECT LEAD</small>
                     <h1 className='text-2xl font-bold'>Esther Howard</h1>
                     <div className='flex gap-1 justify-center items-center mt-6'>
                        <a className='h-9 w-9 hover:bg-[#F4F5FB] flex items-center justify-center' href="https://twitter.com/"><FaTwitter /></a>
                        <a className='h-9 w-9 hover:bg-[#F4F5FB] flex items-center justify-center' href="https://www.instagram.com/"><FaInstagram /></a>
                        <a className='h-9 w-9 hover:bg-[#F4F5FB] flex items-center justify-center' href="https://www.linkedin.com/"><FaLinkedinIn /></a>
                     </div>

                  </div>

               </div>
               {/* 4th care */}
               <div className=' border border-black rounded-[20px] p-6 w-[290px]'>
                  <img src={pic4} alt="Profile" />

                  <div className='text-center mt-6'>

                     <small className='opacity-50'>HUMAN RESOURCES</small>
                     <h1 className='text-2xl font-bold'>Jenny Wilson</h1>
                     <div className='flex gap-1 justify-center items-center mt-6'>
                        <a className='h-9 w-9 hover:bg-[#F4F5FB] flex items-center justify-center' href="https://twitter.com/"><FaTwitter /></a>
                        <a className='h-9 w-9 hover:bg-[#F4F5FB] flex items-center justify-center' href="https://www.instagram.com/"><FaInstagram /></a>
                        <a className='h-9 w-9 hover:bg-[#F4F5FB] flex items-center justify-center' href="https://www.linkedin.com/"><FaLinkedinIn /></a>
                     </div>

                  </div>

               </div>
               {/* End cards */}

            </div>

            {/* Team cards end */}
         </div>

      </section>
   );
}

export default TeamSection;
