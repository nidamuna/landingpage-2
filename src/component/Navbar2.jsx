import React, { useEffect, useState } from 'react'

const Navbar2 = () => {
    const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 37) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);
  
  return (
    <>
        <section className={navbar ? 'text-[#023047] hidden md:flex w-full bg-white h-auto py-4 px-8 justify-between items-start shadow-lg top-0' : 'hidden'}>
           <div className='flex flex-col'>
                <h1 className='font-bold'>
                    Siap mengikuti Pelatihan Sunat Moderen ?
                </h1>
                <div className='flex flex-row pitems-center justify-center text-[12px]'>
                    <p className='mr-10'>
                      <span className='text-[#F17DAD] mr-1'>✔</span>
                      Akses Materi selamanya
                    </p>
                    <p className='mr-10'>
                      <span className='text-[#F17DAD] mr-1'>✔</span>
                      Instruktur terbaik
                    </p>
                    <p>
                      <span className='text-[#F17DAD] mr-1'>✔</span>
                      Sertifikat Penyelesaian 
                    </p>
                </div>
           </div>
           <a href='#daftar'>
              <button className='bg-[#474973] hover:bg-[#0a58ca] rounded-full text-white font-semibold p-2 shadow-md'>
                  Daftar Sekarang
              </button>
           </a>
        </section>
    </>
  )
}

export default Navbar2