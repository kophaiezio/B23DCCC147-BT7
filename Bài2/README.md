# Máy tính đơn giản (React + Vite)

Dự án máy tính đơn giản được chuyển đổi từ HTML/CSS/JavaScript thuần sang **React** và xây dựng bằng **Vite**.

## Cấu trúc thư mục

```text
Bài2/
├── legacy/            # Bản sao lưu code HTML/CSS/JS thuần ban đầu
├── src/
│   ├── App.jsx        # Component chính chứa logic máy tính và JSX
│   ├── App.css        # CSS giao diện máy tính (dark mode)
│   ├── index.css      # CSS định dạng trang và căn giữa màn hình
│   └── main.jsx       # Entry point React
├── index.html         # HTML template cho Vite
├── package.json       # Cấu hình dự án và dependencies
└── vite.config.js     # Cấu hình Vite cho React
```

## Cách chạy dự án

1. Mở terminal tại thư mục `Bài2`:
   ```bash
   cd Bài2
   ```

2. Cài đặt các gói phụ thuộc (chỉ cần chạy lần đầu):
   ```bash
   npm install
   ```

3. Khởi chạy môi trường phát triển (Development server):
   ```bash
   npm run dev
   ```

4. Mở trình duyệt và truy cập đường dẫn hiển thị trên terminal (mặc định là `http://localhost:5173`).

5. Đóng gói cho môi trường production:
   ```bash
   npm run build
   ```

