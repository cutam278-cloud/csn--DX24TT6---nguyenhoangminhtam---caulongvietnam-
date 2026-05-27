# Website Gioi Thieu Trung Tam The Duc The Thao Cau Long

Website gioi thieu ve trung tam danh cho nhung nguoi yeu thich canh long, cung cap thong tin ve cac lop hoc, doa tap, va tin tuc lien quan.

## Thong tin sinh vien

- Hotenamen: Nguyen Hoang Minh Tam
- MSSV: 170124688
- Lop: DX24TT6
- Email: tamnhm260401@tvu-onschool.edu.vn
- GVHD: Duong Ngoc Van Khanh

## Tinh nang

### Cong Khai
- Trang chu: gioi thieu tong quan ve trung tam
- Trang gioi thieu: chi tiet ve trung tam, le ich, doa tap
- Trang tin tuc: cac bai viet va su kien
- Lien he: form de khach hang lien he voi trung tam
- Responsive design: chay tren tat ca cac thiet bi

### Huy dong (neu co)
- Khong co admin panel - chi dung static site
- Co the mo rong them backend va panel quan ly sau

## Stack cong nghe

- HTML5 (markup)
- CSS3 (responsive design, flexbox)
- JavaScript vanilla (interactivity, khong dung framework)
- Express.js (server nho, serve static files)
- Docker (containerization)
- Node.js v18 LTS

## Cai dat

### Cach 1 — Docker (Nhanh nhat)

```bash
docker compose up
```

Truy cap http://localhost:8000

### Cach 2 — Local

```bash
npm install
npm start
```

Truy cap http://localhost:8000

## URL chinh

- Trang chu: http://localhost:8000/
- Gioi thieu: http://localhost:8000/about.html
- Cac trang khac: cong them theo yeu cau

## Cau truc thu muc

```
.
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
├── progress-report/
│   ├── tuan-01.md
│   ├── tuan-02.md
│   └── ... (tuan-08.md)
├── refs/
├── setup/
│   ├── erd.md
│   └── README.md
├── src/
│   └── public/
│       ├── index.html
│       ├── about.html
│       ├── style.css
│       ├── script.js
│       └── img/
├── thesis/
│   ├── doc/
│   ├── pdf/
│   ├── html/
│   └── abs/
├── .env.example
├── .gitignore
├── .dockerignore
├── package.json
├── README.md
└── server.js
```

## Test thu luong co ban

1. Chay `npm install` de cai dat dependencies
2. Chay `npm start` de khoi dong server
3. Mo tro duyet web, truy cap http://localhost:8000
4. Kiem tra trang chu (index.html) hien thi dung
5. Nhan vao link "Gioi thieu" de xem trang about.html
6. Kiem tra responsive: thu phong to/thu nho cua so tro duyet
7. Dung Chrome DevTools (F12) de kiem tra console, khong co loi
8. Tat server (Ctrl + C), dong Docker container

## Chu y

- Website hien tai khong co database, chi dung static files + CSS + JS
- Neu can mo rong them chuc nang (dang ky lop, thanh toan), co the them Express routes va database sau
- Hinh anh va noi dung can cap nhat vao folder img/ va cac trang HTML

## Lien he

Lien he GVHD: Duong Ngoc Van Khanh

Co van de hoac gop y, hay email toi: tamnhm260401@tvu-onschool.edu.vn
