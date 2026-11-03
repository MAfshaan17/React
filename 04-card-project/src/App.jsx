import React from 'react'
import {Bookmark} from 'lucide-react'
import './App.css'

const App = () => {
  return (
    <div className='parent'>
      <div className='card'>
       <div className='top'>
        <img src="https://tse1.mm.bing.net/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?r=0&pid=Api&h=220&P=0" alt="" />
        <button>Save <Bookmark size={12} /></button>
       </div>
       
      
        <div className='center'>
        <h3>Amazon <span>5 days ago</span></h3>
        <h2>Senior UI/UX Designer</h2>
        <div>
          <h4>Part time</h4>
          <h5> Senior Level</h5>
        </div>
        </div>

        <div className="bottom">
         <div>
             <h3>$120/hr</h3>
             <p>Mumbai, India</p>
          </div>
          <div>
            <button>Apply Now</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
