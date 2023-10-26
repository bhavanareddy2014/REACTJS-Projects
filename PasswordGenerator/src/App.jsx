import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed,setNumbersAllowed] = useState(false);
  const [charactersAllowed,setCharactersAllowed] = useState(false);
  const [password,setPassword] = useState('');
  const passRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
    if(numbersAllowed) str+= "012345689"
    if(charactersAllowed) str += "!@#$%^&*()_+"
    for (let i = 1; i < length; i++) {
      const char =  Math.floor(Math.random() * str?.length + 1)
       pass +=str.charAt(char)
      
    }
    setPassword(pass)
  },[length,numbersAllowed,charactersAllowed])

  useEffect(() => {
    generatePassword()
  },[length,numbersAllowed,charactersAllowed])

  const copyPasswordToClipBoard = () => {
    window.navigator.clipboard.writeText(password)
    passRef.current?.select()

  }

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500  '>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" name="" id="" value={password} className='outline-none w-full py-1 px-3' readOnly ref={passRef}/>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipBoard}>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'><input type="range" min={6} max={100} name="" id=""className='cursor-pointer' onChange={(e) =>setLength(e.target.value)}/>
        <label htmlFor="length">length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" name="" id="" defaultChecked={numbersAllowed} onChange={() => {
            setNumbersAllowed((prev) => !prev)
          }} />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" name="" id="" defaultChecked={charactersAllowed} onChange={() => {
            setCharactersAllowed((prev) => !prev)
          }} />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
