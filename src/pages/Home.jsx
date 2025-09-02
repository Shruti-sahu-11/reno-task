import React from 'react'
import { FaFacebookSquare, FaLinkedin  } from "react-icons/fa";
import { FaSquareInstagram, FaSquareYoutube } from "react-icons/fa6";
import { Link,useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Card from "./Card"
import Footer from '../components/Footer';



const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='scroll-smooth'>
        <div className='min-h-[150px] sm:min-h-[300px] bg-cover bg-center w-screen sm:w-full  relative flex  flex-wrap'>
        <div>
            <img
            className='h-full w-full object-cover sm:object-cover inset-0 absolute opacity-80 bg-black'
            src="https://uniformapp.in/images/bgnav.svg" />
        
        <div className='absolute justify-between py-4 px-12 flex top-0 left-0 w-full h-full '>
            <h1 className='text-white font-extralight'>mail@uniformapp.in</h1>
            <div className='flex gap-3 text p-2 text-xl sm:text-2xl'>
                <a href='https://www.facebook.com/uniformapplication' target='_blank'>
                    <FaFacebookSquare className='text-white bg-blue-800'/>
                </a>
                <a href='https://www.linkedin.com/company/unavailable/' target='_blank'>
                    <FaLinkedin  className='bg-blue-600 text-white'/>
                </a>
                <a href='https://www.instagram.com/uniformapplication/' target='_blank'>
                <FaSquareInstagram className='text-white bg-pink-600'/>
                </a>
                <a href='https://www.youtube.com/channel/UCByRFtqYDRxaTx6r7r9TvTQ' target='_blank'>
                <FaSquareYoutube className='text-white bg-red-600'/>
                </a>
            </div>
        </div>
        <div className='absolute justify-between -bottom-1/3 left-4 flex w-full h-full px-12 py-4 text-white'>
          <div className='flex flex-col'>
            <h1 className=' font-semibold text-3xl sm:text-5xl'>Unì<span className='font-thin text-gray-100'>Form</span></h1>
            <h2 className='text-xs text-gray-100 tracking-[0.5em] sm:tracking-[1em]'>APPLIC<span>ATION</span></h2>
            <h3 className='text-xs font-extralight text-gray-200 ml-14 pl-3'>powered by EdUnify</h3>
          </div>
            
            <div className='flex md:gap-5 gap-2 md:text-xl mr-8 md:items-center md:justify-center md:font-medium font-normal mb-16 text-gray-100'>
                <a className='hidden md:inline-block font-normal text-xs md:text-sm lg:text-xl hover:underline ' href="https://commonadmissions.com/" target="_blank" rel="noopener noreferrer">
                Common Admissions
                </a>
                <a className='hidden md:inline-block font-normal text-xs md:text-sm lg:text-xl hover:underline' href="https://uniformapp.in/schools/" target="_blank" rel="noopener noreferrer">
                School Portal
                </a>
                <a className='hidden md:inline-block  font-normal text-xs md:text-sm lg:text-xl hover:underline' href="https://uniformapp.in/schoolsearch.php" target="_blank" rel="noopener noreferrer">
                Find Schools
                </a>
                <a className='hidden md:inline-block font-normal text-xs md:text-sm lg:text-xl hover:underline' href="https://uniformapp.in/blog/" target="_blank" rel="noopener noreferrer">
                Blog
                </a>
                <a className='hidden md:inline-block font-normal text-xs md:text-sm lg:text-xl hover:underline' href="https://uniformapp.in/apply.php" target="_blank" rel="noopener noreferrer">
                Log In
                </a>
                <div>
                <a className='bg-green-600 hover:bg-green-800 rounded-md shadow-lg h-[40px] w-[70px]  md:h-[50px] md:w-[80px] md:flex md:items-center justify-center cursor-pointer hidden' onClick={() => navigate('/signup')}>
                Sign Up
                </a>
                </div>
                <a className=' '>
                  <GiHamburgerMenu onClick={() => navigate('/menu')} className='md:hidden text-2xl font-bold'/>
                  <IoIosSearch className='md:text-2xl text-3xl sm:font-extrabold text-gray-200 absolute'/>
                </a>
            </div>
        </div>
        </div>
        </div>
        <h1 className='text-2xl font-bold text-gray-800 bg-gray-100 text-center py-4'>Explore Schools</h1>
        <Card />
        <button onClick={() => navigate('/school')} className='h-8 text-xl font-bold flex justify-start items-center text-center mx-8 hover:bg-gray-400 bg-gray-200 text-gray-900 rounded-md px-4'>Add more schools </button>
        <Footer />
    </div>
  )
}

export default Home