import Card from './components/Card.jsx'
import './App.css'
const App = () => {
  
 
const jobs = [
  {
    id: 1,
    brandLogo: "https://logo.clearbit.com/google.com",
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
    brandLogo: "https://logo.clearbit.com/amazon.com",
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
    brandLogo: "https://logo.clearbit.com/meta.com",
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
    brandLogo: "https://logo.clearbit.com/apple.com",
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
    brandLogo: "https://logo.clearbit.com/microsoft.com",
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
    brandLogo: "https://logo.clearbit.com/netflix.com",
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
    brandLogo: "https://logo.clearbit.com/nvidia.com",
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
    brandLogo: "https://logo.clearbit.com/adobe.com",
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
    brandLogo: "https://logo.clearbit.com/openai.com",
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
    brandLogo: "https://logo.clearbit.com/salesforce.com",
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
      {jobs.map(function(job){
       return <Card company={job.company} post={job.post} datePosted={job.datePosted} tag1={job.tag1} tag2={job.tag2} pay={job.pay} location={job.location}   />
      })}
  
      
    </div>
  )
}

export default App