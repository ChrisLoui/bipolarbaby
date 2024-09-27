import React from 'react'
import kuromi1Gif from '../../assets/kuromi1.gif'

const FourthPage = () => {
    return (
        <div className='h-full'>
            <main className='h-full page-shadow p-10'>
                <div className='flex flex-col items-center justify-center font-primary text-4xl'>
                    <span>A playlist</span>
                    <div>for</div>
                    <span className='text-9xl font-sacramento'>you</span>
                </div>
                <div className='mt-10 text-justify'>
                I created this playlist before without anyone specific in mind, just searching for the songs that felt worth sharing and dedicating. Now, I realize this playlist was always meant for you.
                These songs may not be your taste but I truly mean what the title of the playlist says.
                </div>
                <div className='w-full flex items-center justify-center'>
                    <img width="50%" src={kuromi1Gif} alt="thanks" />
                </div>
            </main>
        </div>
    )
}

export default FourthPage