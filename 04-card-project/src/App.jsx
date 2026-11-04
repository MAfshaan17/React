import Card from './components/Card.jsx'
import './App.css'
const App = () => {
  
 
const jobs = [
  {
    id: 1,
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.aEyqp-nW5Sx4RryCJo5aTQHaHa?r=0&pid=Api&h=220&P=0",
    company: "Google",
    datePosted: "5 days ago",
    post: "Senior Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 150,
    location: "Mumbai, India"
  },
  {
    id: 2,
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?r=0&pid=Api&h=220&P=0",
    company: "Amazon",
    datePosted: "2 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: 120,
    location: "Bengaluru, India"
  },
  {
    id: 3,
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.beni-u1wCGUagUOuSURZWAHaHI?r=0&pid=Api&h=220&P=0",
    company: "Meta",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 110,
    location: "Hyderabad, India"
  },
  {
    id: 4,
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.iv53usbiGBc2yJH6FrxJVAHaEo?r=0&pid=Api&h=220&P=0",
    company: "Apple",
    datePosted: "3 days ago",
    post: "iOS App Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 140,
    location: "Pune, India"
  },
  {
    id: 5,
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.VhknVB80Wi7s22YHKKfsvwHaHa?r=0&pid=Api&h=220&P=0",
    company: "Microsoft",
    datePosted: "10 weeks ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 160,
    location: "Bengaluru, India"
  },
  {
    id: 6,
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.tE8bJ8k_RWadK1aIhwnOiwHaGn?r=0&pid=Api&h=220&P=0",
    company: "Netflix",
    datePosted: "4 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 135,
    location: "Delhi, India"
  },
  {
    id: 7,
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.uI2jp3YvHR18LHqMlHEAYAHaEK?r=0&pid=Api&h=220&P=0",
    company: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 180,
    location: "Chennai, India"
  },
  {
    id: 8,
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.s2qnKGj8R9kTsbv6IANlEgHaIe?r=0&pid=Api&h=220&P=0",
    company: "Adobe",
    datePosted: "2 weeks ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: 115,
    location: "Noida, India"
  },
  {
    id: 9,
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.Yn879D-SbFfIJB4W9wgAFwHaEK?r=0&pid=Api&h=220&P=0",
    company: "OpenAI",
    datePosted: "3 days ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 200,
    location: "Bengaluru, India"
  },
  {
    id: 10,
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.7wF76mX0WOm9KvCzd5JtGwHaEK?r=0&pid=Api&h=220&P=0",
    company: "Salesforce",
    datePosted: "10 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 100,
    location: "Hyderabad, India"
  }
];


  
  return (
    <div className="parent">
      {jobs.map(function(job,idx ){

       return <div key={idx}>
         <Card brandLogo={job.brandLogo} company={job.company} post={job.post} 
         datePosted={job.datePosted} tag1={job.tag1}
          tag2={job.tag2} pay={job.pay} location={job.location}   />
          </div>
      })}
  
      
    </div>
  )
}

export default App