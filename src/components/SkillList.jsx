import './SkillList.css'

function SkillList({skills}){
  console.log(skills)
  return (
    <ul className="skill-list">
      {skills.map((skill, idx) => <SkillListItem skill={skill} key={idx} />)}
    </ul>
  )
}

function SkillListItem({skill}){
  return(
    <li className="skill-list-item">{skill.name} <span className="level">LEVEL {skill.level}</span></li>
  )
}



export default SkillList
