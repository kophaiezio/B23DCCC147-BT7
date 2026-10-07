// Component ProjectList nhận mảng projects qua props
function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3>{project.name}</h3>
          <p>Mô tả: {project.description}</p>
          <p>Công nghệ: {project.tech}</p>
        </div>
      ))}
    </div>
  )
}

export default ProjectList
