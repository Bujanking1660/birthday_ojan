import React from 'react'
import ScrollEffect from './ScrollEffect'


export const LandingPage = () => {
  return (
    <div className='relative'>
        <img src="/Awan2.png" alt="Bg" className='w-full h-dvh fixed inset-0 object-cover'/>

        {/* section 1 */}
        <section className='relative text-center flex flex-col justify-center items-center h-dvh'>
          <h1 className='relative z-5 font-bold text-4xl'>Today is</h1>
          <h1 className='relative z-5 font-bold text-6xl'>Aurel's Day!!!</h1>
        </section>

        <section className='relative text-center flex flex-col justify-center items-center h-dvh'>
          <ScrollEffect/> 
        </section>
    </div>  
  )
}
