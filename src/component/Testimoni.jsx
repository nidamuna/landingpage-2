import React from 'react'
import {ImQuotesLeft} from 'react-icons/im'

const Testimoni = () => {
  const data = [
    {
      name: 'Sarah',
      text: 'Saya sangat menikmati pelatihan ini. Kami belajar banyak tentang cara merawat diri sendiri dan anak dengan bahan-bahan alami yang aman dan efektif. Saya sekarang merasa lebih percaya diri dalam merawat bayi saya, dan kami juga memiliki pengalaman yang menyenangkan bersama-sama selama pelatihan. Saya sangat merekomendasikan pelatihan ini kepada semua ibu',
      kerja: 'Ibu Rumah Tangga',
    },
    {
      name: 'Dewa',
      text: 'Saya awalnya skeptis tentang pelatihan spa ibu dan anak karena saya pikir itu hanya untuk wanita. Namun, setelah saya mengikuti pelatihan bersama istri dan anak saya, saya sangat terkesan dengan hasilnya. Kami belajar banyak tentang cara merawat kulit dan rambut dengan bahan-bahan alami, dan juga merasakan manfaat relaksasi dari pijat dan perawatan spa.',
      kerja: 'Karyawan',
    },
    {
      name: 'Maya',
      text: 'Saya sangat senang dengan pelatihan spa ibu dan anak yang saya ikuti. Kami mendapatkan pengalaman yang menyenangkan bersama anak saya, dan belajar banyak tentang cara merawat kulit dan rambut dengan bahan-bahan alami. Saya juga sangat terkesan dengan instruktur yang profesional dan ramah.',
      kerja: 'Guru',
    },
  ]
  return (
    <>
      <section className='w-full bg-[#2AC4A8] lg:min-h-0 min-h-screen py-[100px] px-10'>
      <div className='flex flex-col container mx-auto items-center text-[#023047]'>
          <h1 className='font-black text-[2rem] text-center text-[#023047]'>
            Ini yang dikatakan beberapa pengguna
          </h1>
          <div className='w-full flex-col flex justify-between items-center p-5 mt-10'>
            {data.map((item) => (
              <div className='w-full mb-10 bg-[#E1EFF6] p-8 rounded-2xl flex flex-row'>
                 <div className='flex flex-col justify-between items-start'>
                  <span className='bg-[#023047] w-[100px] h-[100px] justify-center items-center flex text-gray-200/0 rounded-2xl p-2'>
                    A
                  </span>
                  <div className='w-[150px] mt-3'>
                    <h1 className='font-bold'>{item.name}</h1>
                    <span className=''>
                       {item.kerja}
                    </span>
                  </div>
                </div>
                <ImQuotesLeft style={{ height: '50px', width: '50px'}}/>
                <p className='mx-5 my-5'>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimoni