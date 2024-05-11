
import React, { useRef } from 'react'
import './App.css'
import CustomButton from './components/CustomButton'

function App() {

  const ref = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const onClick = () => {
    inputRef.current?.focus()
  }

  return (
    <>
      <input type='text' ref={inputRef}/>
       <CustomButton ref={ref} onClick={onClick} >
          test
       </CustomButton>
    </>
  )
}

export default App
