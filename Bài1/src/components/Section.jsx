// Component Section dùng children để bọc nội dung bên trong
function Section({ title, children }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      {children}
    </div>
  )
}

export default Section
