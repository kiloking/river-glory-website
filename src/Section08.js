import React from 'react'

function Section08() {
  return (
    <div
    className='w-full  bg-no-repeat  bg-center bg-cover  relative '
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section_bg01.png'})`,
    }}
    >
        <div className='flex flex-col md:flex-row  justify-between w-ful mx-auto h-full '>
          <div className='md:w-[50%] relative  flex flex-col justify-end p-10 md:px-32 md:py-20'>
            <img src={process.env.PUBLIC_URL+'/images/release/section08_p01.png'} alt="" className='max-w-full relative ' />
          </div>
          <div className='md:w-[50%] flex justify-center items-center  h-auto '>
            <div className='flex flex-col md:w-[70%] p-10 md:p-0'>            
              <img src={process.env.PUBLIC_URL+'/images/release/section08_title.png'} alt="" className='max-w-full  w-[80%]'/>
            </div>

          </div>

        </div>
        <div className=' absolute bottom-20 right-12 w-[15%]'>
          <img src={process.env.PUBLIC_URL+'/images/release/section_c02.png'} alt="" className='max-w-full' />
        </div>

    </div>
  )
}

export default Section08