# Chuong II: Co So Ly Thuyet

## De cuong thuc hien cho Chuong 2

### 2.1 Xay dung mo hinh, so do, du lieu
- Mo ta mo hinh he thong phu hop voi website gioi thieu trung tam the thao cau long.
- The hien luu luong thong tin: trang chu, gioi thieu, tin tuc, lien he, lop hoc.
- Ve so do kien truc: sitemap/flow page, request-response flow, ERD tham khao.
- Danh sach du lieu mau: thong tin trung tam, lop hoc, tin tuc, thong tin lien he.
- Danh gia nguyen tac du lieu: structure semantic, data field co ban, khong dung du lieu nhieu truoc.

### 2.2 Xay dung chuong trinh
- Ke hoach phat trien: phan tich yeu cau, thiet ke giao dien, code HTML/CSS/JS, va chay server Express.
- Cac thanh phan chinh: index.html, about.html, news.html, contact form, style.css, script.js, server.js.
- Cac chuc nang su dung: responsive navigation, carousel, form validation, static content.
- Quy trinh phat trien: code, test responsive, fix bug, hoan thien UI.

### 2.3 Ket luan
- Uu diem: giao dien nhe, responsive, phu hop thuc te, code gọn, tu nhien, khong over-engineer.
- Nhuoc diem: chi la static site, chua co backend/database chinh thuc, khong co auth, content chua dong bo dong bo tu server.
- Ket qua ung dung ly thuyet: ap dung HTML5 semantic, CSS3 responsive, JavaScript DOM/event, HTTP, REST concept, basic security, Docker container.
- Binh luan: do an hien tai phu hop de hoc va trinh bay, se mo rong backend va database neu tiep tuc phat trien.

## 2.1 Kien Truc Web va Mo Hinh 3-Tier

### 2.1.1 Tong Quan Mo Hinh 3-Tier

Mo hinh 3-tier (three-tier architecture) la mo hinh kien truc pho bien nhat trong phat trien web:

```
┌─────────────────────────────────────┐
│     Presentation Layer (UI)         │
│   HTML, CSS, JavaScript, Browser    │
├─────────────────────────────────────┤
│   Business Logic Layer (Server)     │
│   Express.js, Node.js, API Logic    │
├─────────────────────────────────────┤
│     Data Layer (Database)           │
│   MySQL, PostgreSQL, MongoDB        │
└─────────────────────────────────────┘
```

Trong do an nay:
- **Presentation Layer:** HTML + CSS + JavaScript chay tren browser
- **Business Logic Layer:** Express.js server (chua co phan complex, chi phuc vu static files)
- **Data Layer:** Chua cai dat (se tham khao trong phu luc)

### 2.1.2 Request-Response Flow

1. Nguoi dung mo tro duyet web
2. Tro duyet gui HTTP request den server
3. Server nhan request, tim file tuong ung
4. Server tra ve file + CSS + JS
5. Tro duyet render HTML, ap dung CSS, chay JavaScript
6. Nguoi dung thay giao dien web

## 2.2 HTML5 - Markup Structure

### 2.2.1 Semantic HTML

Semantic HTML la su dung cac tag HTML de bieu dien y nghia cua noi dung:

```html
<header>...</header>        <!-- Phan dau trang -->
<nav>...</nav>              <!-- Menu navigation -->
<main>...</main>            <!-- Noi dung chinh -->
<section>...</section>      <!-- Phan cua trang -->
<article>...</article>      <!-- Mot bai viet -->
<aside>...</aside>          <!-- Sidebar, thong tin them -->
<footer>...</footer>        <!-- Phan cuoi trang -->
```

Loi ich:
- Tim kiem (SEO) tot hon vi search engine hieu y nghia
- Accessibility tot hon cho nguoi khuyet tat dung screen reader
- Code sach se, de bao tri

### 2.2.2 Form va Input Validation

Form trong HTML:

```html
<form>
  <input type="email" placeholder="Email" required />
  <input type="tel" pattern="[0-9]{10,11}" />
  <textarea></textarea>
  <button type="submit">Gui</button>
</form>
```

Validation:
- Client-side: HTML5 attributes (required, pattern, type="email")
- Server-side: (chu chưa cai dat trong giai doan nay)

## 2.3 CSS3 - Responsive Design va Styling

### 2.3.1 Mobile-First Approach

Mobile-first design co nghia la:
1. Tien design, code cho mobile truoc (320px - 768px)
2. Sau do expand cho tablet (768px - 1024px)
3. Cuoi cung la desktop (1024px tro len)

Lo ich:
- Hau het user su dung mobile, tren 70% traffic la mobile
- Responsive base on mobile constraint, desktop automatic ok
- Co the toi uu hoa toc do tren mobile

### 2.3.2 Flexbox va Grid

**Flexbox:** Lay toan trong row hoac column
```css
.container {
  display: flex;
  justify-content: center;     /* Canh giua ngang */
  align-items: center;         /* Canh giua doc */
  flex-wrap: wrap;             /* Wrap items den dong sau */
}
```

**Grid:** Lay toan trong bang (row x column)
```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 columns, bang nhau */
  gap: 20px;                               /* Khoang cach giua items */
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;  /* Mobile: 1 column */
  }
}
```

### 2.3.3 Media Query

Media query cho phep ap dung CSS khac nhau tuy theo kich co man hinh:

```css
/* Mobile (320px - 767px) */
@media (max-width: 767px) {
  .container { width: 100%; }
  .menu { display: none; }
}

/* Tablet (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .container { width: 90%; }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .container { max-width: 1200px; margin: auto; }
}
```

### 2.3.4 CSS Units

- **px (pixel):** Absolute, fixed size
- **rem (root em):** Relative to root font-size (default 16px)
- **em:** Relative to parent font-size
- **%:** Percentage of parent
- **vw/vh:** Percentage of viewport (tro duyet window)

Vi du:
```css
body { font-size: 16px; }  /* 1rem = 16px */
h1 { font-size: 2rem; }    /* 32px */
p { font-size: 1rem; }     /* 16px */
```

## 2.4 JavaScript - DOM Manipulation va Event Handling

### 2.4.1 DOM (Document Object Model)

DOM la representation cua HTML page dua dang tree structure:

```javascript
// Tim element
const button = document.getElementById('myBtn');
const items = document.querySelectorAll('.item');

// Change content
button.textContent = 'Click me';
button.innerHTML = '<strong>Bold text</strong>';

// Change attribute
button.setAttribute('data-id', '123');
button.classList.add('active');  // Add class

// Change style
button.style.backgroundColor = 'blue';
button.style.padding = '10px';
```

### 2.4.2 Event Handling

Event dung de bat su kien tu user:

```javascript
const button = document.getElementById('myBtn');

// Su kien click
button.addEventListener('click', function(event) {
  console.log('Button clicked!');
  event.preventDefault();  // Prevent default behavior
});

// Su kien form submit
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  // Validate form
  // Send data
});

// Su kien input change
const input = document.getElementById('email');
input.addEventListener('change', function(event) {
  console.log('New value:', event.target.value);
});
```

### 2.4.3 Async/Await va Promises

Async code dung de thuc hien tac vu mat thoi gian (loading data, API call):

```javascript
async function loadData() {
  try {
    // Simulate API call
    const response = await fetch('/api/news');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error loading data:', error);
  }
}

loadData();
```

## 2.5 HTTP Protocol va REST API (Tham Khao)

### 2.5.1 HTTP Methods

- **GET:** Lay du lieu (khong co request body)
- **POST:** Tao du lieu moi (co request body)
- **PUT/PATCH:** Cap nhat du lieu
- **DELETE:** Xoa du lieu

### 2.5.2 HTTP Status Code

- **2xx:** Success (200 OK, 201 Created)
- **3xx:** Redirect (301 Moved, 304 Not Modified)
- **4xx:** Client error (400 Bad Request, 404 Not Found, 403 Forbidden)
- **5xx:** Server error (500 Internal Server Error)

### 2.5.3 REST API Design

REST (Representational State Transfer) la kien truc de thiet ke API:

```
GET    /api/classes           -> Lay danh sach tat ca lop
GET    /api/classes/{id}      -> Lay chi tiet mot lop
POST   /api/classes           -> Tao lop moi
PUT    /api/classes/{id}      -> Cap nhat lop
DELETE /api/classes/{id}      -> Xoa lop
```

Trong do an nay, chua cai dat API, chi tham khao de phat trien sau.

## 2.6 Bao Mat Web Co Ban

### 2.6.1 XSS (Cross-Site Scripting)

XSS la tan cong dua malicious code vao trang web.

**Vi du lo ho:**
```javascript
// Nguy hiem: render HTML tu user input truc tiep
const userInput = '<img src=x onerror="alert(\'hacked\')">';
document.body.innerHTML = userInput;  // DANGER!
```

**Giai phap:**
```javascript
// An toan: su dung textContent thay vì innerHTML
const userInput = '<img src=x onerror="alert(\'hacked\')">';
document.body.textContent = userInput;  // Safe - render as text

// Hoac escape HTML
function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
```

### 2.6.2 CSRF (Cross-Site Request Forgery)

CSRF la tan cong loi dung trusted connection cua user.

**Giai phap:** Su dung CSRF token (chua can trong giai doan nay)

### 2.6.3 Input Validation

**Client-side validation:**
```javascript
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePhone(phone) {
  const regex = /^[0-9]{10,11}$/;
  return regex.test(phone);
}
```

**Server-side validation:** (se lam khi co backend)

### 2.6.4 HTTPS/SSL

HTTPS encrypt data trong transmission:
- HTTP: data trong clear text (not secure)
- HTTPS: data encrypted (secure)

Nen luon su dung HTTPS cho website production.

## 2.7 Accessibility va SEO

### 2.7.1 Accessibility (A11y)

Accessibility dam bao website su dung duoc cho tat ca, ke ca nguoi khuyet tat:

- Semantic HTML: use correct tags (<header>, <nav>, <main>, etc.)
- Alt text cho hinh anh: `<img alt="Logo" src="..." />`
- ARIA labels: `<button aria-label="Close menu">X</button>`
- Keyboard navigation: user co the dieu khien keyboard
- Color contrast: text vs background co du contrast

### 2.7.2 SEO (Search Engine Optimization)

SEO dam bao website dung duoc tim kiem tot:

- Meta tags: `<meta name="description" content="..." />`
- Heading hierarchy: h1 -> h2 -> h3 (khong nhay cap)
- Keyword density: repeat keyword 1-3% trong content
- URL structure: `/badminton-classes` thay vi `/page?id=123`
- Mobile responsive: Google rank mobile site tren tien
- Site speed: optimize images, minify CSS/JS
- Backlinks: link tu website khac tro toi website

## 2.8 Node.js va Express.js

### 2.8.1 Node.js

Node.js la JavaScript runtime chay tren server (khong trong browser).

Lo ich:
- Dung JavaScript cho ca frontend va backend
- Non-blocking I/O: xu ly nhieu request cung luc
- Npm: package manager voi 1 trieu+ thu vien

### 2.8.2 Express.js

Express la lightweight web framework cho Node.js:

```javascript
const express = require('express');
const app = express();

// Serve static files
app.use(express.static('public'));

// Route GET
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

// Route 404
app.use((req, res) => {
  res.status(404).send('Not found');
});

// Listen
app.listen(8000, () => console.log('Server running on port 8000'));
```

Lo ich trong do an nay:
- Phuc vu static files (HTML, CSS, JS, images)
- Single point of entry (moi request den server)
- De mo rong them routes / API sau

## 2.9 Docker - Containerization

Docker la cong cu de package ung dung cung voi dependencies:

```dockerfile
FROM node:18-alpine        # Base image
WORKDIR /app               # Working directory
COPY package.json .        # Copy file
RUN npm install            # Install dependencies
COPY . .                   # Copy all files
EXPOSE 8000                # Expose port
CMD ["npm", "start"]       # Run command
```

Lo ich:
- Consistency: code chay the nao tren dev, chay the nay tren production
- Isolation: container khong anh huong den machine khac
- Easy deployment: docker-compose up la co server chay

---

**Ket Luan Chuong II:**

Cac cong nghe HTML5, CSS3, JavaScript, Node.js, Express, va Docker la foundation vung chac cho xay dung website modern, responsive, va co kha nang phat trien trong tuong lai. Stack nay la chuan nhan trong industry va dung de hoc sinh me co the thuc tap co ban va nang cao.
