# Báo cáo tiến độ - Tuần 3

**Thời gian:** `01/06` - `07/06` (Thứ 2 - Thứ 7)
**Sinh viên:** `Nguyễn Hòang Minh Tâm - DX24TT6`

Tuần này thêm JavaScript interactivity: menu hamburger, carousel, form validation, smooth scroll.

## 1. Nội dung đã thực hiện

### 1.1. JavaScript - Hamburger Menu
- Toggle mobile menu khi nhấn icon
- Dòng menu khi nhấn vào link hoặc ngòai menu
- Anim smooth

### 1.2. JavaScript - Carousel/Slider
- Hình slide tự đóng (3-5s, cân nhắc)
- Các nút prev/next để điều khiển thủ công
- indicator bên dưới (active slide hiển thị)
- Không dùng library, pure JS

### 1.3. JavaScript - Form Validation
- Kiểm tra email format dùng
- Kiểm tra số điện thọai (10-11 kỹ số)
- Kiểm tra message
- Show lời validation bên dưới input

### 1.4. JavaScript - Smooth Scroll
- Click menu link -> cuộn tới section trên page
- Anim scroll smooth (window.scrollIntoView)

### 1.5. Polish CSS + Tweak
- Chỉnh lại UI trên mobile (1 số spacing)
- Thêm hover effects tren button, link
- Thêm transition và animation (fade, slide)

## 2. Khó khăn (& quyết định kỹ thuật)

1. **Không dùng jQuery hay library JS** - pure vanilla JS, để học sinh có thể thực tập sau. Tuy nhiên sẽ add comment chi tiết nếu logic khó.

2. **Event listeners đã được test** - kiểm tra browser event khi mobile vs desktop khác nhau (click vs touch). Đã test trên Chrome mobile emulator và iPhone 15.

3. **Form submit - không gửi server** - chỉ show thank you message, không có backend. Nếu cần gửi email notification sau, có thể thêm form handling service (formspree, etc).

## 3. Kế họach tuần sau

- Tuần 4: Code trang tin tức (news.html) với list bài viết, detail page
- Style xong + final polish
- Test cross-browser va responsive complete

## 4. Vãng điểm

- Script.js hiện tại không optimize trên production (no minify)
- Sẽ minify + optimize cuối tuần 8 trước khi submit
- Có 1-2 chọn logic trong carousel (không loop seamless like slick.js), nhưng đủ cho phát triển

**Live demo:** Đã có thể chạy `npm start` và test full tren http://localhost:8000
