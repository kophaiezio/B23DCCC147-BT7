# Trang CV Cá Nhân (React + Vite) - Phiên bản tối giản

Trang CV cá nhân cơ bản làm quen với React dành cho sinh viên mới học, chuyển đổi từ bài 1 HTML/CSS/JS thuần.

## Cấu trúc mã nguồn

```text
src/
├── components/
│   ├── Section.jsx      # Component dùng props.children để bọc nội dung từng phần
│   ├── SkillList.jsx    # Component nhận mảng skills qua props và render danh sách <ul>
│   └── ProjectList.jsx  # Component nhận mảng projects qua props và render danh sách dự án
├── App.jsx              # Khai báo mảng skills, projects, state đổi màu nền và ráp components
├── App.css              # CSS đơn giản, dễ hiểu
├── index.css            # CSS reset cơ bản
└── main.jsx             # File khởi chạy React
```

## Các điểm kiến thức cơ bản đã áp dụng

1. **Component `Section` sử dụng `children`:**
   ```jsx
   function Section({ title, children }) {
     return (
       <div className="section">
         <h2>{title}</h2>
         {children}
       </div>
     );
   }
   ```

2. **Truyền mảng qua Props:**
   - Mảng `skills` được truyền vào `<SkillList skills={skills} />`.
   - Mảng `projects` được truyền vào `<ProjectList projects={projects} />`.

3. **State cơ bản (`useState`):**
   - Quản lý trạng thái `isDarkMode` để bật/tắt class `dark-mode` cho nút "Đổi màu nền".

4. **Kế thừa đúng logic của Bài 1:**
   - Lời chào theo giờ sáng/chiều/tối.
   - Nút đổi màu nền sang chế độ tối `#333`.
   - Thông tin cá nhân sinh viên PTIT: Đoàn Ngọc Thắng.

## Cách chạy

```bash
cd Bài1
npm run dev
```
