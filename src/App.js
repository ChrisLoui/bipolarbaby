import React from 'react'
import BG from './assets/bg.webp'
import MyBook from './Components/MyBook'

const BGtest = {
  backgroundImage: `url(${BG})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"center",
  minHeight: "100vh",
  width: "100%"
}

const App = () => {
  return (
    <div
    style={BGtest}
     className='
     w-full h-full flex justify-center items-center'>
      <MyBook />
    </div>
  )
}

export default App
