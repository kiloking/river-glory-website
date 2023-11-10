import React from 'react'

function Section06() {
  return (
    <div
    className='w-full  bg-no-repeat  bg-center bg-cover  relative pt-12 md:py-20'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section_bg01.png'})`,
    }}
    >
        <div className='flex flex-col md:flex-row  gap-4 justify-between w-ful mx-auto h-full '>
          <div className='md:w-[50%] flex justify-center items-start pt-0 md:pt-16 h-auto '>
            <div className='flex flex-col  md:w-[70%] mx-5 md:m-0'>            
              <img src={process.env.PUBLIC_URL+'/images/release/section06_title.png'} alt="" className='max-w-full  w-[80%]'/>
            </div>

          </div>
          <div className='md:w-[50%] relative  flex flex-col justify-end '>
            <img src={process.env.PUBLIC_URL+'/images/release/section06_p01.jpg'} alt="" className='max-w-full relative ' />
          </div>
        </div>
        <div className=' absolute bottom-32 left-10 w-[20%]'>
          <img src={process.env.PUBLIC_URL+'/images/release/section_c01.png'} alt="" className='max-w-full' />
        </div>
    </div>
  )
}

export default Section06