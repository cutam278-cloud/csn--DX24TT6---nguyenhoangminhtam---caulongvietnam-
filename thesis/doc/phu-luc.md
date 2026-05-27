# Phu Luc

---

## Phu Luc A: Cau Hinh Docker

### A.1 Dockerfile

```dockerfile
# Base image - Node.js LTS alpine (nho, nhanh)
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --only=production

# Copy all source code
COPY . .

# Expose port
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:8000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Run server
CMD ["npm", "start"]
```

### A.2 docker-compose.yml

```yaml
version: '3.8'

services:
  web:
    build:
      context: .
      dockerfile: docker/Dockerfile
    ports:
      - "8000:8000"
    environment:
      - NODE_ENV=production
      - PORT=8000
    restart: unless-stopped
    volumes:
      - ./src:/app/src:ro
    healthcheck:
      test: ["CMD", "node", "-e", "require('http').get('http://localhost:8000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"]
      interval: 30s
      timeout: 3s
      retries: 3
      start_period: 40s
```

### A.3 .dockerignore

```
node_modules
npm-debug.log
dist
build
.env
.git
.gitignore
README.md
.vscode
.idea
*.log
thesis
progress-report
refs
setup
.dockerignore
```

### A.4 Lenh Chay

```bash
# Build image
docker build -f docker/Dockerfile -t caulongvietnam:1.0.0 .

# Run container
docker run -p 8000:8000 caulongvietnam:1.0.0

# Su dung docker-compose (easy)
docker-compose up --build
docker-compose down
```

---

## Phu Luc B: Schema Database (Tham Khao)

### B.1 init.sql - Tao Cac Bang

```sql
-- Users table
CREATE TABLE IF NOT EXISTS users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  birth_date DATE,
  role ENUM('student', 'coach', 'admin') DEFAULT 'student',
  status ENUM('active', 'inactive', 'suspended') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_role (role)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Classes table
CREATE TABLE IF NOT EXISTS classes (
  class_id INT PRIMARY KEY AUTO_INCREMENT,
  class_name VARCHAR(255) NOT NULL,
  coach_id INT NOT NULL,
  max_students INT DEFAULT 20,
  level ENUM('beginner', 'intermediate', 'advanced') DEFAULT 'beginner',
  description TEXT,
  price DECIMAL(10, 2) DEFAULT 0.00,
  status ENUM('active', 'inactive') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (coach_id) REFERENCES users(user_id) ON DELETE SET NULL,
  INDEX idx_coach_id (coach_id),
  INDEX idx_level (level)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Schedules table
CREATE TABLE IF NOT EXISTS schedules (
  schedule_id INT PRIMARY KEY AUTO_INCREMENT,
  class_id INT NOT NULL,
  day_of_week ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'),
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  location VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (class_id) REFERENCES classes(class_id) ON DELETE CASCADE,
  INDEX idx_class_id (class_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Posts (News) table
CREATE TABLE IF NOT EXISTS posts (
  post_id INT PRIMARY KEY AUTO_INCREMENT,
  category_id INT,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  content LONGTEXT NOT NULL,
  author VARCHAR(255),
  image_url VARCHAR(500),
  published_at TIMESTAMP,
  status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
  views INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE SET NULL,
  INDEX idx_slug (slug),
  INDEX idx_status (status),
  INDEX idx_published_at (published_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
  category_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Enrollments table (user dang ky lop)
CREATE TABLE IF NOT EXISTS enrollments (
  enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  class_id INT NOT NULL,
  enrolled_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  completion_date DATE,
  status ENUM('active', 'completed', 'dropped') DEFAULT 'active',
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (class_id) REFERENCES classes(class_id) ON DELETE CASCADE,
  UNIQUE KEY unique_enrollment (user_id, class_id),
  INDEX idx_user_id (user_id),
  INDEX idx_class_id (class_id),
  INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Attendance table
CREATE TABLE IF NOT EXISTS attendance (
  attendance_id INT PRIMARY KEY AUTO_INCREMENT,
  enrollment_id INT NOT NULL,
  class_date DATE NOT NULL,
  status ENUM('present', 'absent', 'late') DEFAULT 'absent',
  notes TEXT,
  recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (enrollment_id) REFERENCES enrollments(enrollment_id) ON DELETE CASCADE,
  INDEX idx_enrollment_id (enrollment_id),
  INDEX idx_class_date (class_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  submission_id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  full_name VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  message TEXT NOT NULL,
  status ENUM('new', 'read', 'replied') DEFAULT 'new',
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_status (status),
  INDEX idx_submitted_at (submitted_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

### B.2 seed.sql - Du Lieu Mau

```sql
-- Insert categories
INSERT INTO categories (name, slug, description) VALUES
('Tin tuc', 'tin-tuc', 'Cac tin tuc va su kien cua trung tam'),
('Giai dau', 'giai-dau', 'Thong tin giai dau va competition'),
('Huong dan', 'huong-dan', 'Huong dan tap luyen va co ban');

-- Insert admin user (password: admin123 - bcrypt hash)
INSERT INTO users (email, password_hash, full_name, phone, role, status) VALUES
('admin@caulongvietnam.com', '$2y$10$abcdefghijklmnopqrstuvwxyz', 'Admin Trung Tam', '0123456789', 'admin', 'active');

-- Insert coach users
INSERT INTO users (email, password_hash, full_name, phone, role, status) VALUES
('coach1@caulongvietnam.com', '$2y$10$bcdefghijklmnopqrstuvwxyza', 'Hoang Van A', '0987654321', 'coach', 'active'),
('coach2@caulongvietnam.com', '$2y$10$cdefghijklmnopqrstuvwxyzab', 'Tran Thi B', '0876543210', 'coach', 'active');

-- Insert classes
INSERT INTO classes (class_name, coach_id, max_students, level, description, price, status) VALUES
('Lop Beginner - Toi T3,T5', 1, 20, 'beginner', 'Lop danh cho nhung nguoi moi bat dau', 500000, 'active'),
('Lop Intermediate - Toi T2,T4', 1, 15, 'intermediate', 'Lop danh cho nhung nguoi da co kien thuc co ban', 700000, 'active'),
('Lop Advanced - Toi T6,T7', 2, 10, 'advanced', 'Lop danh cho nhung nguoi tap luyen chuan the thao', 1000000, 'active');

-- Insert schedules
INSERT INTO schedules (class_id, day_of_week, start_time, end_time, location) VALUES
(1, 'Tuesday', '18:00', '19:30', 'San A - Tang 1'),
(1, 'Thursday', '18:00', '19:30', 'San A - Tang 1'),
(2, 'Monday', '19:30', '21:00', 'San B - Tang 2'),
(2, 'Wednesday', '19:30', '21:00', 'San B - Tang 2'),
(3, 'Saturday', '09:00', '10:30', 'San A - Tang 1'),
(3, 'Sunday', '14:00', '15:30', 'San B - Tang 2');

-- Insert sample posts
INSERT INTO posts (category_id, title, slug, content, author, published_at, status, views) VALUES
(1, 'Trang web canh long cua chung ta da launch', 'trang-web-launch', 'Chung toi vui thong bao rang trang web chinh thuc cua trung tam da duoc khai truong. Khach hang co the tim hieu them thong tin..., 'Admin', NOW(), 'published', 120),
(2, 'Giai dau nam canh long Tre em', 'giai-dau-tre-em', 'Giai dau nam se dien ra vao thang 8 tai...', 'Admin', NOW(), 'published', 85),
(3, 'Huong dan co ban: Grip va Stance', 'huong-dan-grip-stance', 'Trong bai nay, chung toi se huong dan cach cam vot dung va dung vai...', 'Coach1', NOW(), 'published', 250);
```

---

## Phu Luc C: Ma Nguon Tieu Bieu

### C.1 Hamburger Menu (JavaScript)

```javascript
// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav ul');

hamburger.addEventListener('click', function() {
  menu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close menu khi click link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function() {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});
```

### C.2 Image Carousel (JavaScript)

```javascript
class Carousel {
  constructor(selector, options = {}) {
    this.container = document.querySelector(selector);
    this.slides = this.container.querySelectorAll('.slide');
    this.currentIndex = 0;
    this.autoPlayInterval = options.autoPlay || 5000;
    this.init();
  }

  init() {
    this.showSlide(0);
    this.setupButtons();
    this.autoPlay();
  }

  showSlide(index) {
    this.slides.forEach(slide => slide.classList.remove('active'));
    this.slides[index].classList.add('active');
    this.currentIndex = index;
  }

  nextSlide() {
    let nextIndex = (this.currentIndex + 1) % this.slides.length;
    this.showSlide(nextIndex);
  }

  prevSlide() {
    let prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.showSlide(prevIndex);
  }

  setupButtons() {
    document.querySelector('.carousel-next').addEventListener('click', () => this.nextSlide());
    document.querySelector('.carousel-prev').addEventListener('click', () => this.prevSlide());
  }

  autoPlay() {
    setInterval(() => this.nextSlide(), this.autoPlayInterval);
  }
}

// Usage
new Carousel('.carousel', { autoPlay: 5000 });
```

### C.3 Form Validation (JavaScript)

```javascript
function validateForm(formId) {
  const form = document.getElementById(formId);
  const email = form.querySelector('input[type="email"]');
  const phone = form.querySelector('input[type="tel"]');
  const message = form.querySelector('textarea');

  let isValid = true;

  // Validate email
  if (!validateEmail(email.value)) {
    showError(email, 'Email khong hop le');
    isValid = false;
  } else {
    clearError(email);
  }

  // Validate phone
  if (!validatePhone(phone.value)) {
    showError(phone, 'Sdt phai co 10-11 chu so');
    isValid = false;
  } else {
    clearError(phone);
  }

  // Validate message
  if (message.value.trim() === '') {
    showError(message, 'Vui long nhap noi dung');
    isValid = false;
  } else {
    clearError(message);
  }

  return isValid;
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePhone(phone) {
  const regex = /^[0-9]{10,11}$/;
  return regex.test(phone);
}

function showError(input, message) {
  input.classList.add('error');
  const errorSpan = input.nextElementSibling;
  if (errorSpan && errorSpan.classList.contains('error-message')) {
    errorSpan.textContent = message;
  }
}

function clearError(input) {
  input.classList.remove('error');
  const errorSpan = input.nextElementSibling;
  if (errorSpan && errorSpan.classList.contains('error-message')) {
    errorSpan.textContent = '';
  }
}

// Form submit
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  if (validateForm('contactForm')) {
    alert('Cam on ban da lien he. Chung toi se phan hoi trong 24h.');
    this.reset();
  }
});
```

---

## Phu Luc D: Cau Truc Thu Muc Chi Tiet

```
cau-long-vietnam/
│
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
│
├── progress-report/
│   ├── tuan-01.md
│   ├── tuan-02.md
│   ├── tuan-03.md
│   ├── tuan-04.md
│   ├── tuan-05.md
│   ├── tuan-06.md
│   ├── tuan-07.md
│   └── tuan-08.md
│
├── refs/
│   └── (References - optional)
│
├── setup/
│   ├── erd.md
│   ├── init.sql
│   ├── seed.sql
│   └── README.md
│
├── src/
│   └── public/
│       ├── index.html
│       ├── about.html
│       ├── news.html
│       ├── contact.html
│       ├── style.css
│       ├── script.js
│       └── img/
│           ├── logo.png
│           ├── hero.jpg
│           ├── team/
│           └── facilities/
│
├── thesis/
│   ├── doc/
│   │   ├── 00-mo-dau.md
│   │   ├── 01-chuong-1-tong-quan.md
│   │   ├── 02-chuong-2-co-so-ly-thuyet.md
│   │   ├── 03-chuong-3-hien-thuc-hoa.md
│   │   ├── 04-chuong-4-ket-qua.md
│   │   ├── 05-chuong-5-ket-luan.md
│   │   ├── tom-tat.md
│   │   ├── loi-cam-on.md
│   │   ├── tai-lieu-tham-khao.md
│   │   └── phu-luc.md
│   ├── pdf/
│   │   └── (Converted from .docx later)
│   ├── html/
│   │   └── (HTML version for web view)
│   └── abs/
│       ├── slides.pptx
│       └── slides.pdf
│
├── .env.example
├── .gitignore
├── .dockerignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

**Ghi chu:**
- Cac file `.md` la markdown, se convert sang `.docx` khi hoai thanh
- Folder `thesis/pdf/` se chua file Word sau khi convert
- Folder `thesis/abs/` se chua slide bao ve (PowerPoint hoac PDF)
- Cac file anh trong `src/public/img/` hien tai la placeholder, se thay the bang real images

---

## Phu Luc E: Thong Tin Lien Lac va Huong Dan Sua Loi

### E.1 Thong Tin Sinh Vien

**Ho ten:** Nguyen Hoang Minh Tam
**MSSV:** 170124688
**Lop:** DX24TT6
**Email:** tamnhm260401@tvu-onschool.edu.vn
**Dien thoai:** (chua cap)
**GitHub:** https://github.com/cutam278-clound
**Facebook:** (chua cap)

### E.2 Thong Tin GVHD

**Ho ten:** Duong Ngoc Van Khanh
**Chuc danh:** Giao vien hướng dẫn
**Khoa/Phòng:** Trung tam Khai pho Cong Nghe va Ky Thuat
**Email:** (qua website Dai hoc Tra Vinh)
**Dien thoai:** (qua website Dai hoc Tra Vinh)

### E.3 Thong Tin Nha Truong

**Ten trung:** Trung tam Khai pho Cong Nghe va Ky Thuat
**Dia chi:** Dai hoc Tra Vinh, Phuong 4, Thanh pho Tra Vinh
**Website:** http://www.tvu.edu.vn
**Dien thoai:** Qua website chinh thuc

### E.4 Huong Dan Lien He

Neu co van de, thac mac hoac can ho tro:

1. **Lien he sinh vien:** Email tamnhm260401@tvu-onschool.edu.vn
2. **Lien he GVHD:** Qua hoc center hoac email cua truong
3. **Issue tren GitHub:** https://github.com/cutam278-clound/csn-dx24tt6-nguyenhoangminhtam-caulongvietnam/issues

### E.5 Trang Thai He Thong

Hien trang website hien tren:
- **URL Development:** http://localhost:8000
- **URL Production:** (se cap nhat sau khi deploy)
- **Repository:** https://github.com/cutam278-clound/csn-dx24tt6-nguyenhoangminhtam-caulongvietnam
- **Status:** Active development -> Production ready (tuan 8)

---

*Phu Luc cuoi cung - Ban nay la reference day du cho do an.*

*Cap nhat lan cuoi: Thang 7 Nam 2024*
