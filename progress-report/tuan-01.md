# Bao cao tien do - Tuan 1

**Thoi gian:** `18/05` - `24/05` (Thu 2 - Thu T)
**Sinh vien:** `Nguyen Hoang Minh Tam - DX24TT6`

Tuan nay tap trung vao phan chuuan bi cung cap du an: tao repo, lay yeu cau chi tiet, ve ERD, va xay dung skeleton cau truc thu muc + file tro.

## 1. Noi dung da thuc hien

### 1.1. Tao Repository tren GitHub
- Tao repo: `csn-dx24tt6-nguyenhoangminhtam-caulongvietnam`
- Push cau truc ban dau len remote
- Moi GVHD Duong Ngoc Van Khanh tro thanh collaborator

### 1.2. Phan tich yeu cau
- Doc ky chi tiet de tai: website gioi thieu trung tam canh long
- Xac dinh cap do dung: HTML + CSS + JS static, khong database
- List ra cac trang can lam: index (trang chu), about (gioi thieu), contact (lien he), news (tin tuc)

### 1.3. Ve ERD va Cau truc Database
- Tao file `setup/erd.md` voi Mermaid diagram
- Neu sau nay can mo rong backend + database, co schema san san
- Chi tiet: bang USERS, CLASSES, SCHEDULES, POSTS, CATEGORIES

### 1.4. Xay dung Skeleton va Cau truc Thu Muc
Tao cau truc theo quy dinh trung:
```
├── docker/
├── progress-report/
├── refs/
├── setup/
├── src/public/ (cac file HTML, CSS, JS)
├── thesis/
├── package.json
├── .gitignore
├── .env.example
├── Dockerfile
└── README.md
```

### 1.5. Tao File Cau Hinh
- `package.json`: khai bao dependencies (express, dotenv)
- `.env.example`: template bien moi truong
- `.gitignore`: ignore node_modules, .env, etc
- Dockerfile + docker-compose.yml: de sau containers phat trien

## 2. Kho khan (& quyet dinh ky thuat)

1. **Chon Express.js thay vi static HTTP server** - chi dung file, ma express cho phep them routing sau, co goi de test responsive.

2. **Dung Mermaid ERD di dung database** - giai doan nay khong can backend/DB, ma dung Mermaid de giu mo khoa phat trien tiep theo. Khi doc on va GVHD phe duyet, co the them MySQL/PostgreSQL nhan trong tuan sau.

3. **Khong tao admin panel** - chi focus vao frontend public, dung gon, don gian.

## 3. Ke hoach tuan sau

- Tuan 2: Code HTML + CSS - trang chu (index) va trang gioi thieu (about)
- Them responsive design (mobile-first)
- Tao base styling trong style.css
- Thu va demo voi di khong bi loi

## 4. Trang thai code

```
✓ Repo da setup
✓ Cau truc thu muc tao xong
✓ Cau hinh ban dau xong
- HTML content: chua lam
- CSS styling: chua lam
- JavaScript: chua lam
```

**Link repo:** [https://github.com/cutam278-clound/csn-dx24tt6-nguyenhoangminhtam-caulongvietnam](https://github.com/cutam278-clound/csn-dx24tt6-nguyenhoangminhtam-caulongvietnam)

**Ghi chu:** Tuan toi se dat task HTML va CSS kho khon tre cac, tunga va anh dua bao cao qua email GVHD.
