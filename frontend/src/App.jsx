import GreetingList from './components/GreetingList'

function App() {
  const data = [
    {
      id: 1,
      text: 'Hello'
    },
    {
      id: 2,
      text: 'Howdy'
    },
    {
      id: 3,
      text: 'Hi'
    }
  ]

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
