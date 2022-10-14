import "./styles/global.css"
import { useState } from 'react'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <><h1 className="font-bold text-5xl text-violet-500">Ola mundo</h1>
      <button className="bg-violet-500 font-medium px-4 py-2 rounded text-white hover:bg-violet-600" >
        ENVIAR
      </button></>
  )
}

