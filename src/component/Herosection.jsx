import React, { useEffect, useRef, useState } from 'react'
import {BsFillPlayFill} from 'react-icons/bs'
import doctor from '../assets/doctor.png'
import picture1 from '../assets/photo1.jpg'
import picture2 from '../assets/photo2.jpg'
import picture3 from '../assets/photo3.jpg'
//jika ingin menambahkan foto lain taruh foto di folder assets di src
//panggil disini dengan cara import (picture...) from '../assets/nama gambar

const Herosection = () => {
  const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);

    const movePrev = () => {
        if (currentIndex > 0) {
          setCurrentIndex((prevState) => prevState - 1);
        }
      };
    
      const moveNext = () => {
        if (
          carousel.current !== null &&
          carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
          setCurrentIndex((prevState) => prevState + 1);
        }
      };

      useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
          carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
      }, [currentIndex]);
    
      useEffect(() => {
        maxScrollWidth.current = carousel.current
          ? carousel.current.scrollWidth - carousel.current.offsetWidth
          : 0;
      }, []);

      const isDisabled = (direction) => {
        if (direction === 'prev') {
          return currentIndex <= 0;
        }
    
        if (direction === 'next' && carousel.current !== null) {
          return (
            carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
          );
        }
    
        return false;
      };

    const service = [
        {
          name: '1',
          icon: picture1,
        },
        {
          name: '2',
          icon: picture2,
        },
        {
          name: '3',
          icon: picture3,
        },
        {
            name: '4',
            icon: picture2,
        },
        {
          name: '1',
          icon: picture1,
        },
        {
          name: '2',
          icon: picture2,
        },
        {
          name: '3',
          icon: picture3,
        },
        {
          name: '4',
          icon: picture2,
        },
        // tambahkan gambar disini
        /* dengan coding
          {
          name: 'angka setelah angka terakhir',
          icon: nama import diatas,
          },
        */

      ];
  return (
    <>
      <section id='hero' className='w-full bg-[#F17DAD] lg:min-h-0 min-h-screen text-[#023047] pt-[100px] pb-20 md:pb-0'>
        <div className='flex flex-col justify-center items-center'>
          {/* hero */}
          <div className='w-full flex flex-col items-center'>
            <h1 className='font-black text-[2.875rem] text-center'>
              Pelatihan Mom and Baby Spa
            </h1>
            <div className='max-w-[700px] text-[19px] font-extralight text-center'>
              <p>
                Pelatihan spa kami difokuskan pada kesehatan dan kebahagiaan ibu
                dan anak, dan kami memastikan
                bahwa program kami aman dan efektif untuk semua peserta
              </p>
              <a href='#daftar'>
                <button className='bg-[#474973] hover:bg-[#0a58ca] rounded-full text-white font-semibold p-2 shadow-md mt-5 w-[50%]'>
                  Daftar Sekarang
                </button>
              </a>
              <div className='mt-5 flex flex-row px-6 items-center justify-center text-[12px]'>
                <p className='mr-10'>✔ Akses Materi selamanya</p>
                <p>✔ Instruktur terbaik</p>
              </div>
            </div>
          </div>
          <div className='w-full ml-0 md:ml-11 mb-10 md:mb-0 flex flex-row justify-center items-center'>
            <div className='w-full h-[300px] overflow-hidden'>
              <img src={doctor} alt="doctor" className='-mt-10' />
            </div>
          </div>
        </div>
      </section>
      {/* photo */}
      <div className='bg-white text-center flex'>
        <button disabled={isDisabled('prev')} className={'p-3 font-bold text-slate-900 text-[30px]'}>
          <button
            onClick={movePrev}  
            className={isDisabled('prev') ? 'flex items-center justify-center cursor-not-allowed bg-[#E1EFF6] w-[50px] h-[50px] rounded-full' : 'flex items-center justify-center cursor-pointer bg-[#83BCFF] w-[50px] h-[50px] rounded-full'} 
          >
            <BsFillPlayFill className='rotate-180' style={{ height: '30px', width: '30px', color: '#FFF'}}/>
          </button>
        </button>
        <div 
            ref={carousel}
            className='w-full flex snap-x gap-6 scroll-p-5 py-10 snap-mandatory overflow-x-scroll no-scrollbar justify-start items-center'>
              <div className='snap-center snap-always shrink-0'>
              </div>
              {service.map((service, index) => (
                  <div key={index} className='snap-center snap-always shrink-0'>
                    <img src={service.icon} alt={service.name} className='shrink-0 w-[228px] rounded-[10px] border-[2px] border-[#dddddd] bg-white flex flex-col justify-center items-center mr-6 last:mr-0'/>
                  </div>
              ))}
              <div className='snap-center snap-always shrink-0'>
              </div>
        </div>
          <button disabled={isDisabled('next')} className={'p-3 font-bold text-slate-900 text-[30px]'}>
            <button 
              onClick={moveNext} 
              className={isDisabled('next') ? 'cursor-not-allowed bg-[#E1EFF6] w-[50px] h-[50px] rounded-full flex items-center justify-center' : 'flex items-center justify-center cursor-pointer bg-[#83BCFF] w-[50px] h-[50px] rounded-full'} 
            >
              <BsFillPlayFill style={{ height: '30px', width: '30px', color: '#FFF'}}/>
            </button>
          </button>
      </div>
    </>
  )
}

export default Herosection