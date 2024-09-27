import React from 'react'
import ToinCossApp from '../CoinToss/ToinCossApp'
import CoinTossGame from '../CoinToss/ToinCossApp'
import HappyKuro from '../../assets/happykuro.gif'

const FifthPage = () => {
  return (
    <div className='h-full'>
        <main className='h-full page-shadow p-10'>
            <div>
            Since we might have a few disagreements now and then, I thought it would be fun to include a coin toss here to help us decide the winner—just to keep things light! 😄
            </div>
            <div className='mt-20 flex flex-col items-center'>
                <CoinTossGame/>
                <img width='50%' src={HappyKuro} alt="" />
            </div>
        </main>
    </div>
  )
}

export default FifthPage