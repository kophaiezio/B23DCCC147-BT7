import { useState } from 'react'
import Section from './components/Section'
import SkillList from './components/SkillList'
import ProjectList from './components/ProjectList'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // 1. Dữ liệu kỹ năng đặt trong mảng
  const skills = [
    { name: 'HTML, CSS', level: 'Khá' },
    { name: 'JavaScript', level: 'Cơ bản' },
    { name: 'React', level: 'Mới học' },
    { name: 'Git & GitHub', level: 'Cơ bản' },
  ]

  // 2. Dữ liệu dự án đặt trong mảng
  const projects = [
    {
      name: '1. Trang CV cá nhân (Bài 1)',
      description: 'Làm quen với React, chia component, truyền props và dùng children',
      tech: 'React, Vite, CSS',
    },
    {
      name: '2. Máy tính đơn giản (Bài 2)',
      description: 'Làm máy tính thực hiện các phép tính cộng, trừ, nhân, chia',
      tech: 'React, CSS Grid, JavaScript',
    },
  ]

  // Lời chào theo thời gian trong ngày (giữ đúng logic Bài 1)
  const currentHour = new Date().getHours()
  let greeting = ''
  if (currentHour < 12) {
    greeting = 'Chào buổi sáng! Chúc bạn một ngày tốt lành.'
  } else if (currentHour < 18) {
    greeting = 'Chào buổi chiều! Tràn đầy năng lượng nhé.'
  } else {
    greeting = 'Chào buổi tối! Nghỉ ngơi thôi.'
  }

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Phần đầu trang - giữ nguyên bài 1 */}
      <header>
        <h1>Xin chào thầy, em là Đoàn Ngọc Thắng!</h1>
        <p className="greeting-text">{greeting}</p>
        <button id="color-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
          Đổi màu nền
        </button>
      </header>

      <main>
        {/* Component Section dùng props.children */}
        <Section title="1. Thông tin cá nhân">
          <p>- Trường: Học viện Công nghệ Bưu chính Viễn thông (PTIT)</p>
          <p>- Khoa: Cử nhân Công nghệ Thông tin</p>
          <p>- Email: ThangDN.B23CC147@stu.ptit.edu.vn</p>
          <p>- Số điện thoại: 0911093289</p>
        </Section>

        {/* Section bọc SkillList, truyền mảng skills qua props */}
        <Section title="2. Kỹ năng của em">
          <SkillList skills={skills} />
        </Section>

        {/* Section bọc ProjectList, truyền mảng projects qua props */}
        <Section title="3. Dự án đã làm">
          <ProjectList projects={projects} />
        </Section>
      </main>

      {/* Phần cuối trang - giữ đúng footer bài 1 */}
      <footer>
        <p>PTIT</p>
      </footer>
    </div>
  )
}

export default App
