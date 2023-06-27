import React from 'react'
import Footer from './Footer'
function Header() {
  return (
    <div className='grid grid-cols-1  md:grid-cols-8 h-screen  '>
      <div 
        className=' bg-cover bg-no-repeat bg-center md:col-span-6    bg-white  relative hidden md:block'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/header_bg.png'})`}}
      >
        <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/12' >
          <img src={process.env.PUBLIC_URL+'/images/header_title.png'} alt="" className='w-10/12 mx-auto' data-aos="fade" data-aos-duration="1500" />
          <img src={process.env.PUBLIC_URL+'/images/header_subtitle.png'} alt="" className='w-full mt-16' data-aos="fade-up" data-aos-duration="1500" />
        </div>

      </div>
      <div 
        className='block md:hidden bg-cover bg-no-repeat bg-center w-full  aspect-[9/13] relative bg-white'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/header_bg.png'})`}}
      >
        <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-2/3' >
          <img src={process.env.PUBLIC_URL+'/images/header_title.png'} alt="" className='w-10/12 mx-auto' data-aos="fade" data-aos-duration="1500" />
          <img src={process.env.PUBLIC_URL+'/images/header_subtitle.png'} alt="" className='w-full mt-16' data-aos="fade-up" data-aos-duration="1500" />
        </div>

      </div>
      <div className='md:col-span-2 bg-white'>
        <Footer />
      </div>


    </div>
  )
}

export default Header