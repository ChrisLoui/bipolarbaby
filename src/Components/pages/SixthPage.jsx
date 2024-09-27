import React from 'react'
import cupidKuro from '../../assets/cupidkuromi.gif'
import madKuro from "../../assets/madkuromi.gif";

const SixthPage = () => {
  return (
    <div className='h-full'>
        <main className='h-full page-shadow p-10'>
            <div className='text-5xl font-primary'>
                <h1 className=''>Me</h1>
                <img width='50%' src={cupidKuro} alt="cupid"/>
            </div>
            <div className='text-9xl font-primary flex flex-col items-end'>
                <h1 className=''>You</h1>
                <img width='50%' src={madKuro} alt="cupid"/>
            </div>
        </main>
    </div>
  )
}
export default SixthPage