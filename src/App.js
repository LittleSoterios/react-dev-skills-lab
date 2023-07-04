// Import our own custom components
import NewSkillForm from './components/NewSkillForm'
import SkillList from './components/SkillList'
import './styles.css'

import { useState } from 'react';


const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];



function App (){
  //Inside the functional component we can write logical javascript at the top level (inside the function, outside of return keyword)

  // Imperitive to building a react app is the return keyword that will return our HTML

  // Some attributes we cant use like class or for as these are reserveed words in JS, there are alternatives like className and htmlFor
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ])


  return (
    <>
    <div className='App'>
      <h1 className="title teal-text">React Dev Skills</h1>
      <SkillList skills={skills}/>
      <hr></hr>
      <NewSkillForm skills={skills} setSkills={setSkills}/>
    </div>

    </>
    
  )

}



export default App

