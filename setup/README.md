# Setup - Website Cau Long Vietnam

## Huong dan khoi tao

### 1. Khoi tao thu muc
```bash
npm install
```

### 2. Tao file .env
```bash
cp .env.example .env
```

### 3. Chay server local
```bash
npm start
```

Server se chay tren http://localhost:8000

### 4. Chay voi Docker
```bash
docker compose up
```

## Cau truc thu muc

- `src/public/`: cac file HTML, CSS, JS
- `docker/`: Dockerfile va docker-compose.yml
- `thesis/`: quy nhan bao cao
- `progress-report/`: 8 file bao cao tien do
- `refs/`: tai lieu tham khao

## Chu y

- Dung khong co database trong giai doan nay
- Chi dung frontend static de gioi thieu trung tam
- Co the mo rong them backend sau
