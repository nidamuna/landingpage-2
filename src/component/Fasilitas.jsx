import React from 'react'
import picture1 from '../assets/photo1.jpg'
import picture3 from '../assets/photo3.jpg'

const Fasilitas = () => {
  return (
    <>
      <section id='fasilitas' className='w-full bg-white h-auto lg:min-h-0 md:min-h-screen py-[100px] px-10'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-start text-[#023047]'>
          <div className='w-full mb-10 md:w-[50%]'>
            <h1 className='font-black text-[2rem] w-full mb-5'>
              <span className='stabs'>
                Fasilitas
              </span> yang kami berikan
            </h1>
            <p className='font-normal italic'>
              Tidak hanya instruktur yang memadai tapi kami juga memberikan
              banyak fasilitas lainnya
            </p>
            <p className='mt-5 font-semibold'>
              ✔ Ruang praktik
            </p>
            <p className='mt-2 font-semibold'>
              ✔ Alat pelindung diri
            </p>
            <p className='mt-2 font-semibold'>
              ✔ Peralatan sterilisasi
            </p>
            <p className='mt-2 font-semibold'>
              ✔ Akses Materi selamanya
            </p>
            <p className='mt-2 font-semibold'>
              ✔ Sertifikat Penyelesaian
            </p>
          </div>
          <div className='w-full md:w-[50%] ml-0 md:ml-11 h-[400px] overflow-hidden flex flex-col justify-center'>
              <img src={picture1} alt="pelatihan" className='h-[50%] mb-4' />
              <img src={picture3} alt="pelatihan" className='h-[50%]' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Fasilitas