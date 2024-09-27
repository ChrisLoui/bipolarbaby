import React from 'react'
import Modal from '../TodoModal/TodoModal'


const SeventhPage = () => {
  return (
    <div className='h-full'>
        <main className='h-full page-shadow p-10 bg-yellow-50'>
            <div className='pb-10'>
                <div className='font-sacramento font-w900 text-7xl'>List of things
                    <span className='font-primary '>Todo</span>
                </div>
            </div>
            <div className='p-5 bg-white h-3/4 border-8 w-full overflow-y-scroll'>
  <Modal />
</div>
        </main>
    </div>
  )
}

export default SeventhPage