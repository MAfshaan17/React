import React from 'react'
import Card from './components/card'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <div className='card'>
      <h1>Mahammad Afshaan</h1>
      <p> I am a 3rd year student who is passionate about developing and building new things.</p> 
      </div>
     {Card()}  {/* Calling the funtion component direcltly without using JSX syntax */}
      <Navbar />  {/* calling the function component using JSX syntax */}    
    </div>
  )
}

export default App
