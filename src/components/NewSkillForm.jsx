import { useState } from 'react'
import './NewSkillForm.css'


function NewSkillForm({skills, setSkills}){

  const [newSkill, setNewSkill] = useState('')
  const [newLevel, setNewLevel] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    const newSkillLevel = {name: newSkill,
      level: newLevel
    }
    const newSkills = [...skills, newSkillLevel]
    console.log(skills)

    setSkills(newSkills)
    setNewSkill('')
    setNewLevel('1')
  }


  return(
    <form onSubmit={handleSubmit} className='new-skill-form'>
      <label className="ms-4" htmlFor="skillInput">Skill:</label>
      <input className="ms-2" type="text" id="skillInput" value={newSkill} onChange={(e) => setNewSkill(e.target.value)}/>
      <label className="ms-4" htmlFor="levelInput">Level:</label>
      <select className="ms-2" name="level" id="levelInput" value={newLevel} onChange={(e) => setNewLevel(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button className="btn btn-primary ms-4">Add Skill</button>
    </form>
  )
}

export default NewSkillForm