import React from 'react'

const Contactsection = () => {
  return (
    <>
      <section id="daftar" className='w-full -skew-y-3 bg-[#F17DAD] px-10 flex flex-col justify-center items-center'>
        <div className='skew-y-3 w-full h-full px-5 py-[100px] rounded-xl flex flex-col justify-center items-center text-[#023047]'>
          <h1 className='font-normal text-[25px] md:text-[2.25rem] text-center w-full mb-5'>
            Daftarkan segera mom dan baby di pelatihan ini
          </h1>
          <button className='bg-[#474973] hover:bg-[#0a58ca] rounded-full text-white text-[1.25rem] font-semibold p-2 shadow-md mt-8 w-full md:w-[40%]'>
            Hubungi Kami
          </button>
          <div className='mt-10 flex flex-col md:flex-row px-6 items-start md:items-center justify-center text-[12px]'>
            <p className='mr-10'>✔ Akses Materi selamanya</p>
            <p className='mr-10'>✔ Instruktur terbaik</p>
            <p>✔ Sertifikat Penyelesaian </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contactsection