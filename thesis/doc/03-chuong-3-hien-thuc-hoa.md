# Chuong III: Hien Thuc Hoa

## 3.1 Phan Tich Yeu Cau

### 3.1.1 Yeu Cau Chuc Nang (Functional Requirements)

Website can cap nhung chuc nang sau:

| # | Chuc Nang | Mo Ta | Priority |
|---|-----------|-------|----------|
| F1 | Trang chu (Landing Page) | Gioi thieu tom tat, hero image, feature list | High |
| F2 | Trang gioi thieu (About) | Chi tiet ve trung tam, giao vien, co so vat chat | High |
| F3 | Trang tin tuc (News) | Danh sach bai viet, detail page, tim kiem | Medium |
| F4 | Form lien he (Contact) | Khach hang co the gui thac mac, email validation | High |
| F5 | Menu responsive | Hamburger menu tren mobile | High |
| F6 | Carousel images | Slide hinh anh cua trung tam | Medium |
| F7 | Form validation | Email, phone, message validation | High |

### 3.1.2 Yeu Cau Phi Chuc Nang (Non-Functional Requirements)

| # | Yeu Cau | Chi Tiet |
|---|---------|---------|
| NF1 | Responsive | Chay tot tren 320px (mobile) - 1920px (desktop) |
| NF2 | Performance | Page load < 3s, LCP < 2.5s (Google Core Web Vitals) |
| NF3 | Browser Support | Chrome, Firefox, Safari, Edge (latest 2 versions) |
| NF4 | Accessibility | WCAG 2.1 AA level (keyboard nav, screen reader, color contrast) |
| NF5 | SEO | Meta tags, semantic HTML, mobile responsive |
| NF6 | Security | XSS prevention, input validation, HTTPS |
| NF7 | Usability | Intuitive UI, clear CTA (Call to Action), <2 click to find info |
| NF8 | Compatibility | Mobile, Tablet, Desktop |

## 3.2 Thiet Ke Co So Du Lieu (Database Schema)

Tuy hien giai doan nay la static site, nhung de tham khao cho phat trien sau, day la schema du kien:

### 3.2.1 Bang USERS

```sql
CREATE TABLE users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  birth_date DATE,
  role ENUM('student', 'coach', 'admin') DEFAULT 'student',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 3.2.2 Bang CLASSES

```sql
CREATE TABLE classes (
  class_id INT PRIMARY KEY AUTO_INCREMENT,
  class_name VARCHAR(255) NOT NULL,
  coach_id INT NOT NULL,
  max_students INT DEFAULT 20,
  level ENUM('beginner', 'intermediate', 'advanced') DEFAULT 'beginner',
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (coach_id) REFERENCES users(user_id)
);
```

### 3.2.3 Bang SCHEDULES

```sql
CREATE TABLE schedules (
  schedule_id INT PRIMARY KEY AUTO_INCREMENT,
  class_id INT NOT NULL,
  day_of_week VARCHAR(20) NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  location VARCHAR(255),
  FOREIGN KEY (class_id) REFERENCES classes(class_id)
);
```

### 3.2.4 Bang POSTS (Tin Tuc)

```sql
CREATE TABLE posts (
  post_id INT PRIMARY KEY AUTO_INCREMENT,
  category_id INT,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  content LONGTEXT NOT NULL,
  author VARCHAR(255),
  published_at TIMESTAMP,
  views INT DEFAULT 0,
  FOREIGN KEY (category_id) REFERENCES categories(category_id)
);
```

### 3.2.5 Bang CATEGORIES

```sql
CREATE TABLE categories (
  category_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL
);
```

## 3.3 Kien Truc Thu Muc

```
.
├── docker/
│   ├── Dockerfile                # Container configuration
│   └── docker-compose.yml        # Multi-container setup
├── progress-report/
│   ├── tuan-01.md
│   ├── tuan-02.md
│   └── ... (tuan-08.md)
├── refs/
│   └── (References - optional)
├── setup/
│   ├── erd.md                    # Database ERD
│   ├── init.sql                  # (Optional) DB creation
│   └── seed.sql                  # (Optional) Sample data
├── src/
│   └── public/
│       ├── index.html            # Landing page
│       ├── about.html            # About page
│       ├── news.html             # News listing
│       ├── contact.html          # Contact page
│       ├── style.css             # Global styles
│       ├── script.js             # Main JavaScript
│       └── img/                  # Images folder
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
│   ├── pdf/                      # (Later) PDF versions
│   ├── html/                     # (Later) HTML conversion
│   └── abs/                      # Presentation slides
├── .env.example                  # Environment template
├── .gitignore                    # Git ignore rules
├── .dockerignore                 # Docker ignore rules
├── package.json                  # Node.js dependencies
├── server.js                     # Express server
└── README.md                     # Project documentation
```

## 3.4 API Endpoints (Tham Khao)

Neu phat trien backend trong tuong lai:

```
GET    /                    -> Index (home page)
GET    /about               -> About page
GET    /news                -> News listing
GET    /news/:id            -> News detail
GET    /contact             -> Contact form
POST   /api/contact         -> Submit contact form

(Admin - Backend)
GET    /api/classes         -> Get all classes
POST   /api/classes         -> Create class
PUT    /api/classes/:id     -> Update class
DELETE /api/classes/:id     -> Delete class

GET    /api/schedule        -> Get class schedule
POST   /api/users/register  -> User registration
POST   /api/users/login     -> User login
```

## 3.5 Cac Luong Nghiep Vu Chinh

### 3.5.1 Luong Khach Hang Xem Website

```
1. Khach hang mo tro duyet
2. Server phat hanh index.html + style.css + script.js
3. Tro duyet render trang chu
4. Khach hang nhan vao link (gioi thieu, tin tuc, lien he)
5. JavaScript su ly click event, scroll to section hoac load new page
6. Khach hang xem noi dung
```

### 3.5.2 Luong Dang Ky / Lien He

```
1. Khach hang dien form voi email, sdt, message
2. Client-side JavaScript validate du lieu
3. Neu co loi, show alert va tranh submit
4. Neu ok, submit form
5. Server nhan du lieu (chua co backend, chi show thank you)
6. Show success message tren UI
```

### 3.5.3 Luong Xem Tin Tuc

```
1. Khach hang click vao menu "Tin tuc"
2. Load trang news.html
3. JavaScript fetch danh sach tin tuc (hard-coded array)
4. Render list hinh anh, tieu de, tom tat
5. Khach hang click vao 1 bai
6. Show detail content
```

## 3.6 Cai Dat va Trii Khai

### 3.6.1 Cai Dat Local

**Yeu cau:**
- Node.js v18 LTS tro len
- npm hoac yarn
- Git

**Cac buoc:**

```bash
# 1. Clone repository (sau khi push len GitHub)
git clone https://github.com/cutam278-clound/csn-dx24tt6-nguyenhoangminhtam-caulongvietnam.git
cd csn-dx24tt6-nguyenhoangminhtam-caulongvietnam

# 2. Cai dat dependencies
npm install

# 3. Tao file .env (neu can)
cp .env.example .env

# 4. Chay server
npm start

# 5. Mo tro duyet
# http://localhost:8000
```

### 3.6.2 Cai Dat Docker

**Yeu cau:**
- Docker Desktop

**Cac buoc:**

```bash
# 1. Clone repository
git clone https://github.com/cutam278-clound/csn-dx24tt6-nguyenhoangminhtam-caulongvietnam.git
cd csn-dx24tt6-nguyenhoangminhtam-caulongvietnam

# 2. Build va chay container
docker compose up --build

# 3. Mo tro duyet
# http://localhost:8000

# 4. Stop container (khi xong)
docker compose down
```

### 3.6.3 Deployment (Production)

Giai doan nay chua phat trien production. Trong tuong lai co the su dung:

- **Vercel:** deploy tro day cho Next.js, easy GitHub integration
- **Netlify:** deploy static site, CI/CD support
- **Heroku:** deploy Node.js app, free tier available
- **AWS/Google Cloud:** self-hosted, full control

## 3.7 Version Control va Git Workflow

Hoc sinh se su dung:

```bash
# Tao branch moi cho feature
git checkout -b feature/hamburger-menu

# Commit thay doi
git add src/public/script.js
git commit -m "them hamburger menu responsive"

# Push len GitHub
git push origin feature/hamburger-menu

# (Later) Merge vao main branch
git checkout main
git pull origin main
git merge feature/hamburger-menu
git push origin main

# Tag release (tuan 8)
git tag v1.0.0 -m "Submission final"
git push origin v1.0.0
```

---

**Ket Luan Chuong III:**

Phan hien thuc hoa da chi tiet yeu cau, design database, kien truc thu muc, cac luong nghiep vu, va chi dan cai dat ca local va Docker. Cac thong tin tren la foundation de trien khai project trong 8 tuan tiep theo.
