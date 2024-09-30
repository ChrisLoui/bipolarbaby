import React from 'react'
import kuromi1Gif from '../../assets/kuromi1.gif'

const TwelvePage = () => {
    return (
        <div className='h-full'>
            <main className='h-full page-shadow p-10'>
                <div className='text-center'>
                    <h1 className='font-sacramento text-5xl'>
                        First <span className='font-primary'>(Best)</span>
                        <br />
                        <span>sponty date</span>
                    </h1>
                </div>
                <div className='text-justify'>
                    <h3 className='pt-10'>
                    First of all, THE FACE CARDS??? I mean, hello? HAHAHAHA. Seriously though, it always feels amazing when I’m with you. Everything just feels so natural, and you really bring out the best version of me. I’m so glad we had this spontaneous date. I was honestly worried we wouldn’t get to hang out for a while, but the universe (aka you) had other plans, and I’m not complaining! Oh, and we definitely need to remember the spot where we ate because their sisig was on point. Here’s to many more spontaneous dates with you—I’m already looking forward to the next one!
                    </h3>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <img width="50%" src={kuromi1Gif} alt="thanks" />
                </div>
            </main>
        </div>
    );
}

export default TwelvePage