import Card from './components/Card.jsx'
import './App.css'
import User from './components/User.jsx'
const App = () => {
  
  const arr = [2,4,6,8,10];
  
  return (
    <div className="parent">
      {arr.map(function(elem){

        return <h1>{elem*2}</h1>
      })}
      
    </div>
  )
}

export default App