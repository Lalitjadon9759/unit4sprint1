import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardCompnent from './components/CardCompnent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
      <h1 style={{ textAlign: "center" }}>User Profiles</h1>
      <CardCompnent
        name="Lalit Jadon"
        age={28}
        bio="A full-stack developer with a passion for building scalable web apps. Enjoys working with React, Node.js, and exploring new tech."
      />
      <CardCompnent
        age={21}
      />
    </div>
    </>
  )
}

export default App
