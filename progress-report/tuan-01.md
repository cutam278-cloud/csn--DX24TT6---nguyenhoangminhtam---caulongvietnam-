# Báo cáo tiến độ - Tuần 1

**Thời gian:** `18/05` - `24/05` (Thứ 2 - Thứ 7)
**Sinh vien:** `Nguyễn Hoàng MInh Tâm - DX24TT6`

Tuần này tập trung vào phần chuẩn bị cung cấp dự án: tạo repo, lấy yêu cầu chi tiết, về ERD, và xây dựng skeleton cấu trúc thư mục + file tro.

## 1. Nội dung đã thực hiện

### 1.1. Tạo Repository trên GitHub
- Tạo repo: `csn-dx24tt6-nguyenhoangminhtam-caulongvietnam`
- Push cấu trúc ban đầu lên remote
- Mời GVHD Duong Ngoc Van Khanh trở thành collaborator

### 1.2. Phan tich yeu cau
- Đọc kỹ chi tiết để tài: website giới thiệu trung tam thể dục cầu lông
- Xác định cấp độ dùng: HTML + CSS + JS static, không database
- List ra các trang cần làm: index (trang chủ), about (gioi thiệu), contact (lien hệ),

### 1.3. Về ERD và Cấu trúc Database
- Tạo file `setup/erd.md` với Mermaid diagram
- Nếu sau này cần mở rộng backend + database, có schema sẳn sàng
- Chi tiết: bảng USERS, CLASSES, SCHEDULES, POSTS, CATEGORIES

### 1.4. Xây dựng Skeleton và Cấu trúc Thư Mục
Tạo cấu trúc theo quy định trung:
```
├── progress-report/
├── refs/
├── setup/
├── src/public/ (cac file HTML, CSS, JS)
├── thesis/
├── package.json
├── .gitignore
├── .env.example
└── README.md
```

### 1.5. Tạo File Cấu Hình
- `package.json`: khai báo dependencies (express, dotenv)
- `.env.example`: template biến môi trường
- `.gitignore`: ignore node_modules, .env, etc
- Dockerfile + docker-compose.yml: để sau containers phát triển

## 2. Khó khăn (& quyết định kỹ thuật)

1. **Chọn Express.js thay vi static HTTP server** - chỉ dùng file, mà express cho phép thêm routing sau, có gọi để test responsive.

2. **Dùng Mermaid ERD di dùng database** - giai đọan này không cần backend/DB, mà dùng Mermaid để giữ mở khóa phát triển tiếp theo. Khi đọc ổn và GVHD phê duyẹt, có thể thêm MySQL/PostgreSQL nhận trong tuần sau.

3. **Không tạo admin panel** - chỉ focus vào frontend public, dùng gọn, đơn giản.

## 3. Kế họach tuần sau

- Tuần 2: Code HTML + CSS - trang chủ (index) và trang giới thiệu (about)
- Thêm responsive design (mobile-first)
- Tạo base styling trong style.css
- Thử và demo với di không bị lôi

## 4. Trang thai code

```
✓ Repo da setup
✓ Cấu trúc thư mục tạo xong
✓ Cấu hình ban đầu xong
- HTML content: chưa làm
- CSS styling: chưa làm
- JavaScript: chưa làm
```

**Link repo:** [https://github.com/cutam278-clound/csn-dx24tt6-nguyenhoangminhtam-caulongvietnam](https://github.com/cutam278-clound/csn-dx24tt6-nguyenhoangminhtam-caulongvietnam)

**Ghi chú:** Tuần tới sẽ đạt task HTML va CSS và ảnh đưa báo cáo qua email GVHD.
