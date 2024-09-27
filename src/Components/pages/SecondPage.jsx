import React from 'react'
import iceCream from "../../assets/first_icecream.png";
import kuro from "../../assets/kuro.png";

const SecondPage = () => {
    return (
        <div className='h-full'>
            <main className='h-full w-full page-shadow p-10'>
                <div className='flex items-center justify-center'> {/* Fixed the typo here */}
                    <h1 className='text-5xl font-sacramento'>First</h1>
                </div>
                <div className='pt-10 pb-5 pl-5 pr-5'>
                    <div className='font-primary'>
                        <div className='text-center font-bold'>First pic together!!!</div>
                        <div className='text-justify mt-2'>
                            This day was chaotic for both of us. I spent the whole day saving my battery so I could stay in touch with you for our meetup.
                            You were busy with your academics and thought I was upset because you were going to be late(nya ako gihapoy uwahi naabot :{'>'}).
                            Despite everything, we still managed to see each other.
                        </div>
                    </div>
                </div>
                <div className='w-full h-full p-5 flex justify-end'>
                    <div className='text-justify h-full'>
                        <div>
                            And then came the highlight of the week—the ice cream we had been waiting for. But in the end, you only ate half of the cup!!! HAHAHHA Ako ra gihapoy naghurot sa everything :P
                        </div>
                        <img src={kuro} alt="" />
                    </div>
                    <img className='ml-5 w-1/2 h-1/2' src={iceCream} alt="" />
                </div>
            </main>
        </div>
    )
}

export default SecondPage