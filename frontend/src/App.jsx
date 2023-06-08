import { useState } from 'react'
import { useEffect } from 'react'

import GreetingList from './components/GreetingList'

import { fetchGreetings } from './services/greetings' 

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchGreetings()
      .then(setData)
  }, [])

  return (
    <>
      <div>
        <h1>Hello mama!</h1>
        <GreetingList greetings={data}/>
      </div>
    </>
  )
}

export default App
