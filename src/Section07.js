import React from 'react'

function Section07() {
  return (
    <div
    className='w-full  bg-no-repeat  bg-center bg-cover  relative py-20'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section_bg02.png'})`,
    }}
    >
        <div className='flex flex-col gap- justify-center items-center w-ful mx-auto w-10/12  '>
            <div className='my-12'>            
              <img src={process.env.PUBLIC_URL+'/images/release/section07_title.png'} alt="" className='max-w-full '/>
            </div>

          <div className='relative  flex flex-col justify-end '>
            <img src={process.env.PUBLIC_URL+'/images/release/section07_p01.png'} alt="" className='max-w-full relative ' />
          </div>
        </div>

    </div>
  )
}

export default Section07