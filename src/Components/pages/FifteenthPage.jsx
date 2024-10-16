import React from 'react'
import letterPNG from "../../assets/letter.jpg";
import kuromi1Gif from '../../assets/testsa.png'

const FifteenthPage = () => {
    return (
        <div className='h-full'>
            <main className='h-full page-shadow overflow-hidden p-10'>
                <div className='border-8 border-black'>
                    <img src={letterPNG} alt="cutie" />
                </div>
                <div className='w-full h-full flex justify-center mt-10'>
                    <div className='w-40 h-40 rounded-full flex items-center justify-center overflow-hidden'>
                        <img className='w-full h-full object-cover' src={kuromi1Gif} alt="thanks" />
                    </div>
                </div>

            </main>
        </div>
    )
}

export default FifteenthPage