import React from 'react'
import letterPNG from "../../assets/letter.jpg";
import kuromi1Gif from '../../assets/kuromi1.gif'

const FifteenthPage = () => {
  return (
    <div className='h-full'>
            <main className='h-full page-shadow overflow-hidden p-10'>
                <div className='border-8 border-black'>
                    <img src={letterPNG} alt="cutie" />
                </div>
                <div className='w-full flex items-center justify-center'>
                    <img width="50%" src={kuromi1Gif} alt="thanks" />
                </div>
            </main>
        </div>
  )
}

export default FifteenthPage