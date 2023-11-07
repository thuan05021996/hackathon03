import { useState } from 'react'
import Work from './conponent/Work'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Work></Work>
    </>
  )
}

export default App
