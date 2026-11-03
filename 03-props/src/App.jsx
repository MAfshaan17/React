import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  return (
    <div className="parent">
      <Card user="Afshaan" age={20} img="https://tse1.mm.bing.net/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?r=0&pid=Api&h=220&P=0" />
      <Card user="Jaan" age ={21} img="https://tse3.mm.bing.net/th/id/OIP.IGAgoFLRQ54R3gtLiW5x2AHaE7?r=0&pid=Api&h=220&P=0" /> 
    </div>
  )
}

export default App