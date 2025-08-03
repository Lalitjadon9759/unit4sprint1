import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleButton from './components/ToggleButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1>Toggle Example</h1>
      <ToggleButton label="Power:" />
    </div>
    </>
  )
}

export default App
