import React from 'react'

function Section01() {
  return (
    <div
    className='w-full  bg-no-repeat  bg-center bg-cover pb-12 relative'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section_bg01.png'})`,
    }}
    >
        <div className='flex gap-4 justify-between items-center w-10/12 mx-auto md:py-12'>
          <div className='w-1/3 '>
            <img src={process.env.PUBLIC_URL+'/images/release/section01_title.png'} alt="" className='max-w-full  w-[80%]'/>
          </div>
          <div className='w-2/3 relative ml-[18%] flex flex-col justify-end '>
            <img src={process.env.PUBLIC_URL+'/images/release/section01_p01.png'} alt="" className='max-w-full w-[70%] ml-auto top-14 relative ' />
            <img src={process.env.PUBLIC_URL+'/images/release/section01_p02.png'} alt="" className='max-w-full w-[70%]  relative ' />
          </div>
        </div>
        <div className=' absolute bottom-24 left-5 w-[22%]'>
          <img src={process.env.PUBLIC_URL+'/images/release/section_c01.png'} alt="" className='max-w-full' />
        </div>
    </div>
  )
}

export default Section01