
import { Bookmark } from 'lucide-react'
import '../App.css'

const Card = (props) => {
     
    return (
    <div className="card">

      <div className="top">
        <img
          src={props.brandLogo}
          alt={props.company}
        />
        <button>Save <Bookmark size={12} /></button>
      </div>

      <div className="center">
        <h3>{props.company} <span>[{props.datePosted}]</span></h3>
        <h2>{props.post}</h2>
        <div>
          <h4>{props.tag1}</h4>
          <h5>{props.tag2}</h5>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>${props.pay}/hr</h3>
          <p>{props.location}   </p>
        </div>
        <div>
          <button>Apply Now</button>
        </div>
      </div>

    </div>
  )
}

export default Card
