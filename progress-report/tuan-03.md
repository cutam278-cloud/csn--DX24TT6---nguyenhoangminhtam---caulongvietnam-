# Bao cao tien do - Tuan 3

**Thoi gian:** `01/06` - `07/06` (Thu 2 - Thu T)
**Sinh vien:** `Nguyen Hoang Minh Tam - DX24TT6`

Tuan nay them JavaScript interactivity: menu hamburger, carousel, form validation, smooth scroll.

## 1. Noi dung da thuc hien

### 1.1. JavaScript - Hamburger Menu
- Toggle mobile menu khi nhan icon
- Dong menu khi nhan vao link hoac ngoai menu
- Anim smooth

### 1.2. JavaScript - Carousel/Slider
- Hinh slide tu dong (3-5s, can chac)
- Cac nut prev/next de dieu khien thu cong
- Dot indicator ben duoi (active slide hien thi)
- Khong dung library, pure JS

### 1.3. JavaScript - Form Validation
- Kiem tra email format dung
- Kiem tra so dien thoai (10-11 ky so)
- Kiem tra message khong trong
- Show loi validation ben duoi input

### 1.4. JavaScript - Smooth Scroll
- Click menu link -> cuon toi section tren page
- Anim scroll smooth (window.scrollIntoView)

### 1.5. Polish CSS + Tweak
- Chinh lai UI tren mobile (1 so spacing)
- Them hover effects tren button, link
- Them transition va animation nho (fade, slide)

## 2. Kho khan (& quyet dinh ky thuat)

1. **Khong dung jQuery hay library JS** - pure vanilla JS, de hoc sinh co the tuc tap sau. Tuy nhien se add comment chi tiet neu logic kho.

2. **Event listeners da duoc test** - kiem tra browser event khi mobile vs desktop khac nhau (click vs touch). Da test tren Chrome mobile emulator va iPhone 12.

3. **Form submit - khong gui server** - chi show thank you message, khong co backend. Neu can gui email notification sau, co the them form handling service (formspree, etc).

## 3. Ke hoach tuan sau

- Tuan 4: Code trang tin tuc (news.html) voi list bai viet, detail page
- Style xong + final polish
- Test cross-browser va responsive complete

## 4. Vang diem

- Script.js hien tai khong optimize tren production (no minify)
- Se minify + optimize tuoi tuan 8 truoc khi submit
- Co 1-2 chon logic trong carousel (khong loop seamless like slick.js), nhung du cho phat trien

**Live demo:** Da co the chay `npm start` va test full tren http://localhost:8000
