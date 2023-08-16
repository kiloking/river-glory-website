import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
function Section03() {
  const imgs =[
    {image:"section03_p01.png"},
    {image:"section03_p02.png"},
    {image:"section03_p03.png"},
  ]
  return (
    <div
      className='w-full  bg-no-repeat  bg-center bg-cover pb-12 relative'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section_bg02.png'})`,
      }}
    >
      <div className='flex gap-4 justify-between items-center w-full mx-auto md:py-20'>
        <div className='w-2/3 pr-10'>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
            }} 
            modules={[Pagination,Autoplay]}
            autoplay={{delay:1800}}
            centeredSlides={true}
            className='w-full'
          >
            {
              imgs.map((item,index)=>{
                return(
                  <SwiperSlide><img src={process.env.PUBLIC_URL+'/images/release/'+ item.image} alt="" className='w-full' /></SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
        <div className='w-1/3 ml-16'>
          <img src={process.env.PUBLIC_URL+'/images/release/section03_title.png'} alt="" className='max-w-full  w-[80%]'/>
        </div>
      </div>
      <div className=' absolute bottom-32 right-10 w-[20%]'>
        <img src={process.env.PUBLIC_URL+'/images/release/section_c02.png'} alt="" className='max-w-full' />
      </div>
    </div>
  )
}

export default Section03