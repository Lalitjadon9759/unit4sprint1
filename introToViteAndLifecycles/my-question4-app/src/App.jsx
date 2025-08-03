import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AutoCorrect from './components/AutoCorrect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AutoCorrect/>
    </>
  )
}

export default App
