import React from 'react'
import picture2 from '../assets/photo2.jpg'
import Mom from '../assets/mom.png'

const Pelatihansection = () => {
  return (
    <>
      <section id="materi" className='w-full bg-white min-h-screen py-[80px] px-10'>
        <div className='flex flex-col container mx-auto items-center text-[#023047]'>
          <h1 className='font-black text-[2rem] text-center w-full'>
            Dapatkan 
            <span className='stabs ml-1'>
              pelatihan terbaik
            </span> yang sesuai dengan kebutuhanmu
          </h1>
          <p className='text-center w-full'>
            Difokuskan pada kesehatan dan kebahagiaan ibu dan anak          
          </p>
          <div className='w-full flex-col md:flex-row flex justify-center items-center p-5'>
            <div className='w-full md:w-[40%] p-3'>
              <img src={picture2} alt="pelatihan"/>
              <img src={Mom} alt="3d-mom" className='h-[200px] -mt-[175px] -ml-[40px] animate-bounces' />
            </div>
            <div className='w-full md:w-[60%] ml-0 md:ml-11 p-4'>
              <div className='w-full ml-0 md:ml-11 p-4 rounded-md font-medium'>
                <ol className="list-decimal ml-6 font-semibold">
                  <li className='mb-3 last:mb-0'>
                    Teknik-teknik pijat relaksasi untuk ibu dan anak
                  </li>
                  <li className='mb-3 last:mb-0'>
                    Perawatan kulit yang tepat untuk ibu dan anak
                  </li>
                  <li className='mb-3 last:mb-0'>
                    Cara membuat ramuan spa alami yang aman untuk ibu dan anak
                  </li>
                  <li className='mb-3 last:mb-0'>
                    Cara memberikan perawatan spa yang aman dan nyaman untuk bayi dan anak kecil
                  </li>
                  <li className='mb-3 last:mb-0'>
                    Manfaat pijat dan perawatan spa untuk kesehatan dan kesejahteraan ibu dan anak
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pelatihansection