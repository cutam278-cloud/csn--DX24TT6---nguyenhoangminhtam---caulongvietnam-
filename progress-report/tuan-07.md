# Bao cao tien do - Tuan 7

**Thoi gian:** `29/06` - `05/07` (Thu 2 - Thu T)
**Sinh vien:** `Nguyen Hoang Minh Tam - DX24TT6`

Tuan nay hoan thanh 2 chuong cuoi cung (V + Phu luc), convert toan bo bao cao sang Word, chu cap nhat hinh anh va slide bao ve.

## 1. Noi dung da thuc hien

### 1.1. Chap V - Ket Luan (05-chuong-5-ket-luan.md)
- Ket luan: Tong hop lai cac gia tri dat duoc, muc tieu dat khong?
- Cac dong gop chinh: (3-5 diem noi bat cua do an)
  * Website responsive chay tot tren tat ca device
  * Giao dien user-friendly va dung chu de
  * Code clean, dung tuy chinh
- Han che (limitations): (2-3 diem chi tich cuc)
  * Chi dung static site, khong database
  * Khong co user authentication
  * Khong optimize production (minify, cache)
- Huong phat trien tuong lai:
  * Them backend + database
  * Them admin panel de quan ly tin tuc, don dang ky
  * Them payment integration
  * SEO optimization + Google Analytics
- Tong 3-4 trang

### 1.2. Phu Luc Day Du (phu-luc.md)
- **A. Cau hinh Docker** - Dockerfile + docker-compose.yml + instruction
- **B. Schema Database** - (reference schema, dung vao ERD.md)
- **C. Ma nguon Tieu Bieu** - snippet code quan trong (hamburger.js, form.js, etc)
- **D. Cau truc Thu Muc** - Tree da phat trien
- **E. Thong tin Lien Lac** - GVHD, email, phone, github link

### 1.3. Tom Tat + Loi Cam On
- **tom-tat.md** - 1 trang (tieng Viet + Anh, 200-300 tu)
- **loi-cam-on.md** - 1 trang cam on GVHD, nha truong, gia dinh

### 1.4. Tai Lieu Tham Khao (tai-lieu-tham-khao.md)
- 15-20 nguon theo chuan IEEE:
  * Sach (author, nam, page)
  * Online resources (URL, access date)
  * Research papers
  * Vi du: [1] Tuan Anh, "Web Design Best Practices", 2023. [online] Available at: https://...

### 1.5. Convert sang Word
- Tao file Word moi: thesis.docx hoac csn-nguyenhoangminhtam.docx
- Format:
  * Font: Times New Roman, size 13pt
  * Line spacing: 1.5
  * Margin: left 3cm, right/top/bottom 2cm
  * Header/Footer: ma sinh vien + so trang
  * Trang bia: ten do an, sinh vien, GVHD, trung tam, nam
  * Muc luc: auto-generated
  * So trang: goc phai duoi
- Xep thu tu: Trang bia -> Cam on -> Tom tat -> Muc luc -> Chapter -> Phu luc -> Tai lieu

### 1.6. Chuan Bi Slide Bao Ve (abs/)
- Tao file slide.pptx hoac slides.md (tuong lai convert PDF)
- Slide 1: Tieu de, sinh vien, GVHD, nam
- Slide 2-3: Gia thieu de tai + mat van de
- Slide 4-5: Giai phap + stack cong nghe
- Slide 6-7: Kien truc + cau truc code
- Slide 8-10: Giao dien website (live demo hoac screenshot)
- Slide 11: Ket qua + Ket luan
- Slide 12: Huong phat trien + Cam on

## 2. Kho khan (& quyet dinh ky thuat)

1. **Markdown to Word conversion** - dung tool: Pandoc hoac Google Docs import. De sau se add real images into Word manually.

2. **Hinh anh trong slides** - add screenshots tren thuc te: chup man hinh website chay, desktop + mobile view.

3. **Bao ve la tham khao** - neu GVHD yeu cau slide, co the tao dung PowerPoint hoac PDF.

## 3. Ke hoach tuan sau

- Tuan 8: Docker final + README update + Push len GitHub + Nop tran

**Trang thai:**
```
✓ Chap I: 100%
✓ Chap II: 100%
✓ Chap III: 100%
✓ Chap IV: 100%
✓ Chap V: 100%
✓ Phu luc: 100%
✓ Tom tat + Loi cam on: 100%
✓ Tai lieu tham khao: 100%
✓ Word format: 100%
✓ Slide bao ve: 80% (can add screenshot)
```

**Ghi chu:** Bao cao da thanh 40-50 trang, san sang in va nop. Slide bao ve con chua day du image, se them tuoi tuan 8 sau khi chup man hinh website.
