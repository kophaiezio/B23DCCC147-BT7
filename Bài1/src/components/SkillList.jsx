// Component SkillList nhận mảng skills qua props
function SkillList({ skills }) {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>
          <strong>{skill.name}</strong> - Mức độ: {skill.level}
        </li>
      ))}
    </ul>
  )
}

export default SkillList
