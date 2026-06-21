# Báo cáo tiến độ - Tuần 4

**Thời gian:** `08/06` - `14/06` (Thứ 2 - Thứ 7)
**Sinh viên:** `Nguyễn Hòang Minh Tâm - DX24TT6`

Tuần này hòan thành phần frontend: tạo trang tin tức, contact form, final polish và test đầy đủ.

## 1. Nội dung đã thực hiện

### 1.1. Tạo Trang Tin Tức (news.html)
- List các bài viết: tiêu đề, ảnh bài viết, tóm tắt, ngày đăng
- Click vào bài -> hiện dialog hoặc new page với nội dung đầy đủ
- Không database, chỉ dùng array trong JS và render HTML

### 1.2. Trang Contact
- Form với field: Tên, Email, Sdt, Tiêu đề, Nội dung
- Validation đầy đủ (email format, sdt 10-11 số)
- Submit -> show toast/alert "cảm ơn đã liên hệ"
- Reset form sau khi submit

### 1.3. SEO + Meta Tags
- Add meta description, keywords vào <head>
- Open Graph tags (og:title, og:image) để tuyệt đẹp khi share
- Canonical URL để tranh duplicate content

### 1.4. Hòan thành Polish + Testing
- Test trên đi ngang tất cả page
- Test responsive: iPhone 6/7/8, iPad, Desktop
- Test animation smooth và không lag
- Test form validation cross-browser
- Kiểm tra console: không có warning/error

### 1.5. Git commit và Push
- Commit từng tính năng logic (hamburger -> commit, carousel -> commit, etc)
- Push lên GitHub trước tuần 5 bắt đầu viết thesis

## 2. Khó khăn (& quyết định kỹ thuật)

1. **Tin tức là array static, không JSON file** - dùng JavaScript array inside script.js và render với DOM manipulation. Nhỏ gọn, dùng bảng điểm.

2. **Form validation tòan phất o client** - không có server backend, chỉ warning + block submit nếu lỗi. Sau có thể thêm email notification service.

3. **Cross-browser support** - đã test trên Chrome, Firefox, Safari. IE11 không support (dùng modern JS, const/let/arrow functions, dùng var).

## 3. Kế họach tuần sau

- Tuần 5: Bắt đầu viết báo cáo (thesis)
- Tuần 5: Chap II - Cơ sở lý thuyết, stack công nghệ

**Trạng thái code hoàn thành:**
```
✓ index.html: 100%
✓ about.html: 100%
✓ news.html: 100%
✓ contact: 100% (integrated in about or separate)
✓ style.css: 100%
✓ script.js: 100%
✓ Responsive: 100% (test trên 5+ devices)
- Backend/Database: (chưa cần, static site)
```

**Ghi chú:** Website sẵn sàng để demo cho GVHD vào cuối tuần 4.
