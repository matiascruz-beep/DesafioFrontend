import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header.jsx';
import Simulador from './components/simulador.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="min-h-screen bg-black w-full">
      <Header />
      <Simulador />
    </div>
    </>
  )
}

export default App
