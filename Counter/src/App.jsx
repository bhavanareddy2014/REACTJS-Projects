import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Counter Project</div>
      <h1>Counter value :{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add value</button>
      <button onClick={() => setCount(count - 1)}>Remove value</button>
    </>
  )
}

export default App


