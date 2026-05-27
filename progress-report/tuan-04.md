# Bao cao tien do - Tuan 4

**Thoi gian:** `08/06` - `14/06` (Thu 2 - Thu T)
**Sinh vien:** `Nguyen Hoang Minh Tam - DX24TT6`

Tuan nay hoan thanh phan frontend: tao trang tin tuc, contact form, final polish va test day du.

## 1. Noi dung da thuc hien

### 1.1. Tao Trang Tin Tuc (news.html)
- List cac bai viet: tieu de, anh thumb, tom tat, ngay dang
- Click vao bai -> hien dialog hoac new page voi noi dung day du
- Khong database, chi dung array trong JS va render HTML

### 1.2. Trang Contact
- Form voi field: Ten, Email, Sdt, Tieu de, Noi dung
- Validation day du (email format, sdt 10-11 so)
- Submit -> show toast/alert "cam on da lien he"
- Reset form sau khi submit

### 1.3. SEO + Meta Tags
- Add meta description, keywords vao <head>
- Open Graph tags (og:title, og:image) de tuyet dep khi share
- Canonical URL de tranh duplicate content

### 1.4. Hoan thanh Polish + Testing
- Test tren di ngang tat ca page
- Test responsive: iPhone 6/7/8, iPad, Desktop
- Test animation smooth va khong lag
- Test form validation cross-browser
- Kiem tra console: khong co warning/error

### 1.5. Git commit va Push
- Commit tung tinh nang logic (hamburger -> commit, carousel -> commit, etc)
- Push len GitHub truoc tuan 5 bat dau viet thesis

## 2. Kho khan (& quyet dinh ky thuat)

1. **Tin tuc la array static, khong JSON file** - dung JavaScript array inside script.js va render voi DOM manipulation. Nho gon, dung bang diem.

2. **Form validation toan phat o client** - khong co server backend, chi warning + block submit neu loi. Sau co the them email notification service.

3. **Cross-browser support** - da test tren Chrome, Firefox, Safari. IE11 khong support (dung modern JS, const/let/arrow functions, dung var).

## 3. Ke hoach tuan sau

- Tuan 5: Bat dau viet quy nhan bao cao (thesis)
- Tuan 5: Chap II - Co so ly thuyet, stack cong nghe

**Trang thai code hoai thanh:**
```
✓ index.html: 100%
✓ about.html: 100%
✓ news.html: 100%
✓ contact: 100% (integrated in about or separate)
✓ style.css: 100%
✓ script.js: 100%
✓ Responsive: 100% (test tren 5+ devices)
- Backend/Database: (chua can, static site)
```

**Ghi chu:** Website san sang de demo cho GVHD vao cuoi tuan 4.
