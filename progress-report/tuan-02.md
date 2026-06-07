# Báo cáo tiến độ - Tuần 2

**Thời gian:** `25/05` - `31/05` (Thứ 2 - Thứ 7)
**Sinh viên:** `Nguyền Hòang Minh Tâm - DX24TT6`

Tuần này code HTML + CSS cho trang chủ và trang giới thiệu, đảm bảo responsive và đúng cấu trúc semantic.

## 1. Nội dung đã thực hiện

### 1.1. HTML - Trang Chủ (index.html)
- Tạo header: logo, menu navigation chính
- Tạo hero section: hình ảnh nổi bật, slogan trung tâm
- Tạo section giới thiệu tóm tắt
- Tạo section các lớp học / HLV sân cầu
- Tạo footer: liên hệ, copyright, link social media

### 1.2. HTML - Trang Giới Thiệu (about.html)
- Tạo phần lịch sử: thành lập, phát triển của trung tâm
- Tạo phần doa tap: họ và tên, kỹ năng, hình ảnh
- Tạo phần cơ sở vật chất: ca chiều, thiết bị, địa chỉ
- Tạo form liên hệ đơn giản

### 1.3. CSS - Responsive Design
- Mobile-first approach: 320px, 768px, 1024px breakpoints
- Flexbox layout: header, hero, footer
- Responsive images: max-width: 100%
- Smooth font sizing va spacing
- Các màu sắc, gradient, shadow hàm hợp với thể thao

### 1.4. Dùng W3C CSS standards
- Không bug spacing, alignment
- Test trên Chrome, Firefox, Safari

## 2. Khó khăn (& quyết định kỹ thuật)

1. **Responsive grid thay vì fixed width** - dùng 3-column grid trên desktop, 1-column trên mobile. Dùng CSS Grid + Flexbox, không dùng framework.

2. **Hình ảnh trong img/ folder** - chỉ dùng placeholder.jpg/png tạm thời, học sinh sẽ thêm hình thức sau. Dùng `alt` text cho SEO + accessibility.

3. **Font size scales với viewport** - dùng rem units, base 16px, không dùng px riêng lẻ. Để sau có thể thay đổi base size 1  và có nhiều phương án.

## 3. Kế họach tuần sau

- Tuần 3: Thêm tin tức page (news.html) và JavaScript interactivity (hamburger menu, carousel hình)
- Thêm form validation cơ bản

## 4. Trạng thái code

```
✓ index.html: hoan thanh 80%
✓ about.html: hoan thanh 75%
✓ style.css: hòan thành 70% (cần chỉnh UI nhờ)
- JavaScript: chưa làm (sẽ làm tuần sau)
- Images: đang dùng placeholder
```

**Lưu ý:** Placeholder images đang ở https://via.placeholder.com/, sẽ thay thế real images sau khi GVHD phê duyệt thiết kế.
