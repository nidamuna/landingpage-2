import React from 'react'
import {AiOutlineMail, AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp} from 'react-icons/ai'

const Footer = () => {

  const links = [
    {
      name: 'email',
      icon: AiOutlineMail,
      link: '',
    },
    {
      name: 'fb',
      icon: AiOutlineFacebook,
      link: '',
    },
    {
      name: 'ig',
      icon: AiOutlineInstagram,
      link: '',
    },
    {
      name: 'wa',
      icon: AiOutlineWhatsApp,
      link: '',
    },
  ];

  return (
    <>
      <footer id='footer' className='w-full h-auto bg-gradient-to-b from-white via-[#272840] to-[#272840]'>
        <div className='w-full bg-[#272840] h-auto pt-[80px] px-8 flex flex-col justify-between items-center -skew-y-3'>
          <div className='skew-y-3 container mx-auto flex flex-col md:flex-row justify-start items-start gap-10 text-white mb-5 cursor-pointer'>
            <div className='w-full md:w-[40%]'>
              <span className='p-2 text-white'>
                Mom and Baby Spa Course
              </span>
              <p className='mt-6 text-[14px] font-normal'>
                Pelatihan Mom and Baby Spa adalah program pelatihan yang bertujuan untuk memberikan 
                keterampilan dan pengetahuan kepada peserta dalam merawat dan memijat bayi 
                secara benar dan aman. Pelatihan ini terutama ditujukan untuk ibu-ibu yang 
                ingin belajar cara merawat bayi mereka dengan tepat dan juga bagi para terapis 
                yang ingin memperdalam keterampilan mereka dalam merawat bayi. 
              </p>
            </div>
            <div className='w-full flex flex-col md:flex-row gap-5 text-white'>
              <div>
                <h1 className='font-bold text-[19px] text-[#2AC4A8]'>
                  Pelatihan
                </h1>
                <ul className='mt-5'>
                  <li className='mt-1 hover:underline'>Pelatihan Sunat Modern</li>
                  <li className='mt-1 hover:underline'>Pelatihan Mendirikan Klinik</li>
                  <li className='mt-1 hover:underline'>Pelatihan Mom and Baby Spa</li>
                  <li className='mt-1 hover:underline'>Pelatihan Skincare</li>
                </ul>
              </div>
              <div className='ml-0 mt-5 md:mt-0 md:ml-20'>
                <h1 className='font-bold text-[19px] text-[#2AC4A8]'>
                  Hubungi Kami
                </h1>
                <div className='mt-5'>
                  <p>Alamat lengkap</p>
                  <p>nomor telp</p>
                </div>
                <div className='mt-5'>
                  <div className="grid grid-cols-4 lg:grid-cols-8 gap-y-6 items-center mt-[43px] lg:mt-0">
                      {links.map((link) => (
                        <a
                          className="mr-[32px] last:mr-0"
                          key={link.name}
                          href={link.link}
                        >
                          <link.icon
                            style={{ height: '20px', width: '20px', color: '#2AC4A8'}}
                          />
                        </a>
                      ))}
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skew-y-3 container mx-auto pt-[16px] border-t border-[#2AC4A8] w-full mb-5">
            <p className="text-[14px] leading-[17px] text-white">
                &copy; Copyright 2022
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer