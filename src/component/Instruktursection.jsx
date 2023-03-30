import React from 'react'
import doctor from '../assets/doctor2.png'

const Instruktursection = () => {
  return (
    <>
        <section id="instruktur" className='w-full min-h-screen pb-[80px] px-10 text-[#023047]'>
          <div className='container mx-auto items-center w-full flex-col md:flex-row flex justify-center px-5'>
          <div className='w-full md:w-[60%]'>
            <div className='w-full p-4 rounded-md font-medium'>
                <h1 className='font-black text-[2rem] text-left w-full'>
                  Instruktur kami
                  <span className='stabs ml-1'>
                    Rina Nurhayati
                  </span>
                </h1>
               <p className='text-justify mt-5'>
                    Program pelatihan kami disampaikan oleh instruktur yang berpengalaman dan terlatih dalam 
                    bidang mereka. Kami juga menyediakan bahan pelatihan lengkap, termasuk buku teks, video 
                    tutorial, dan bahan pelatihan online, yang akan membantu Anda mempelajari materi dengan 
                    mudah dan efektif.
                    <br/>
                    Setelah menyelesaikan program pelatihan kami, Anda akan merasa lebih percaya diri dalam 
                    melakukan perwatan spa dan memiliki keterampilan yang diperlukan untuk meningkatkan kompetensi.
               </p>
            </div>
            </div>
            <div className='w-full ml-0 md:ml-11 md:w-[40%] p-3 h-[300px] overflow-hidden'>
              <img src={doctor} alt='instruktur' className='h-[600px]'/>
            </div>
          </div>
          <h1 className='font-black text-[1.5rem] text-center w-full mt-8'>
            Jangan ragu untuk bergabung dengan program pelatihan kami sekarang dan jangan lewatkan 
            kesempatan untuk mengembangkan keterampilan Anda dan meningkatkan karir Anda!
          </h1>
      </section>
    </>
  )
}

export default Instruktursection