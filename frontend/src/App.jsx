import { useState } from 'react'
import GreetingList from './components/GreetingList'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api.php', { method: 'GET' })
      .then(response => response.json())
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
