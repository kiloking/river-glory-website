import React from 'react'

function Section04() {
  return (
    <div
    className='w-full  bg-no-repeat  bg-center bg-cover  relative '
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section_bg01.png'})`,
    }}
    >
        <div className='flex flex-col md:flex-row gap-4 justify-between w-ful mx-auto h-full '>
          <div className='md:w-[65%]  flex justify-center items-center  h-auto '>
            <div className='flex flex-col md:w-[50%] m-10 md:m-0'>            
              <img src={process.env.PUBLIC_URL+'/images/release/section04_title.png'} alt="" className='max-w-full  w-[80%]'/>
              <img src={process.env.PUBLIC_URL+'/images/release/section04_p02.png'} alt="" className='max-w-full  w-full mt-10'/>
            </div>

          </div>
          <div className='md:w-[40%] relative  flex flex-col justify-end '>
            <img src={process.env.PUBLIC_URL+'/images/release/section04_p01.png'} alt="" className='max-w-full relative ' />
          </div>
        </div>

    </div>
  )
}

export default Section04