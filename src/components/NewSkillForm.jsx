import './NewSkillForm.css'


function NewSkillForm({skills}){
  return(
    <form className='new-skill-form'>
      <label className="ms-4" htmlFor="skillInput">Skill:</label>
      <input className="ms-2" type="text" id="skillInput"/>
      <label className="ms-4" htmlFor="levelInput">Level:</label>
      <select className="ms-2" name="level" id="levelInput">
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