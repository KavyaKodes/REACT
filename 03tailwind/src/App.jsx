import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 text-black rounded-xl px-6 py-10 text-center w-fit mx-70 my-50 ' >Tailwind test</h1>
      <Card/>
    </>
  )
}

export default App
