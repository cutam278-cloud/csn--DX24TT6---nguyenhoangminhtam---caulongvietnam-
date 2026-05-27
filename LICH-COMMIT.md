# LICH-COMMIT.md - Huong Dan Commit 8 Tuan

**NOTE:** File nay CHI DE ẢN DẠI, KHONG PUSH LEN GITHUB. Dung nhu guide de user tro commit tung phan, rải ra 8 tuan.

---

## BUOC 0: Khoi Tao Repository

Truoc tien, chay cac lenh nay 1 lan duy nhat:

```bash
# Clone hoac tao repo local tren may
cd /path/to/project

# Init git (neu chua)
git init

# Them remote (the hinh 1)
git remote add origin https://github.com/cutam278-clound/csn-dx24tt6-nguyenhoangminhtam-caulongvietnam.git

# Set git config (QUAN TRONG - de tranh dung global config)
git config user.name "Nguyen Hoang Minh Tam"
git config user.email "tamnhm260401@tvu-onschool.edu.vn"

# Verify
git config --list
```

**Ghi chu:** Neu dung nieu GitHub account, truoc push can chay:
```bash
gh auth switch --user cutam278-clound
```

---

## TUAN 1: Setup + Phan Tich (18/05 - 24/05)

### Commit 1 - 18/05 (T2)
```bash
git add .gitignore .dockerignore package.json .env.example
git commit -m "them cau hinh project: gitignore, env, package.json"
```

### Commit 2 - 19/05 (T3)
```bash
git add docker/Dockerfile docker/docker-compose.yml
git commit -m "them docker config: Dockerfile va docker-compose.yml"
```

### Commit 3 - 20/05 (T4)
```bash
git add setup/erd.md setup/README.md
git commit -m "them setup docs: ERD diagram va huong dan khoi tao"
```

### Commit 4 - 21/05 (T5)
```bash
git add server.js
git commit -m "them express server: serve static files tren port 8000"
```

### Commit 5 - 22/05 (T6)
```bash
git add README.md
git commit -m "them README chinh: guide setup + overview"
```

### Commit 6 - 23/05 (T7)
```bash
git add progress-report/tuan-01.md
git commit -m "them bao cao tuan 1: setup + phan tich yeu cau"
```

### Commit 7 - 24/05 (CN)
```bash
git add .
git commit -m "tuan 1 complete: repo structure ready, docker config done"
```

---

## TUAN 2: HTML + CSS - Trang Chu (25/05 - 31/05)

### Commit 8 - 25/05 (T2)
```bash
git add src/public/index.html
git commit -m "code trang chu: header, hero section, structure"
```

### Commit 9 - 26/05 (T3)
```bash
git add src/public/index.html
git commit -m "them index: feature section, classes preview, footer"
```

### Commit 10 - 27/05 (T4)
```bash
git add src/public/style.css
git commit -m "them style.css: header styling, responsive nav, hero"
```

### Commit 11 - 28/05 (T5)
```bash
git add src/public/style.css
git commit -m "add CSS: feature cards, classes grid, footer style"
```

### Commit 12 - 29/05 (T6)
```bash
git add src/public/about.html
git commit -m "code trang about: introduce, team, facilities sections"
```

### Commit 13 - 30/05 (T7)
```bash
git add src/public/style.css
git commit -m "style about page: responsive layout, team cards"
```

### Commit 14 - 31/05 (CN)
```bash
git add progress-report/tuan-02.md
git commit -m "them bao cao tuan 2: html + css, responsive design done"
```

---

## TUAN 3: JavaScript - Interactivity (01/06 - 07/06)

### Commit 15 - 01/06 (T2)
```bash
git add src/public/script.js
git commit -m "them js: hamburger menu toggle, smooth animation"
```

### Commit 16 - 02/06 (T3)
```bash
git add src/public/script.js
git commit -m "add carousel: auto-slide, prev/next buttons, dot indicators"
```

### Commit 17 - 03/06 (T4)
```bash
git add src/public/script.js
git commit -m "them form validation: email, phone, message checks"
```

### Commit 18 - 04/06 (T5)
```bash
git add src/public/script.js
git commit -m "add smooth scroll: navigation links scroll to sections"
```

### Commit 19 - 05/06 (T6)
```bash
git add src/public/style.css
git commit -m "add animations: hover effects, transitions, smooth scroll"
```

### Commit 20 - 06/06 (T7)
```bash
git add .
git commit -m "fix bugs: carousel timing, menu close event, form reset"
```

### Commit 21 - 07/06 (CN)
```bash
git add progress-report/tuan-03.md
git commit -m "them bao cao tuan 3: js interactivity, hamburger menu, carousel"
```

---

## TUAN 4: News Page + Polish (08/06 - 14/06)

### Commit 22 - 08/06 (T2)
```bash
git add src/public/news.html
git commit -m "them trang news: list bai viet, card layout"
```

### Commit 23 - 09/06 (T3)
```bash
git add src/public/script.js
git commit -m "them news detail: click card show modal voi full content"
```

### Commit 24 - 10/06 (T4)
```bash
git add src/public/style.css
git commit -m "them news page styling: responsive grid, modal design"
```

### Commit 25 - 11/06 (T5)
```bash
git add src/public/index.html src/public/about.html
git commit -m "add meta tags: description, keywords, og:title, og:image"
```

### Commit 26 - 12/06 (T6)
```bash
git add .
git commit -m "final polish: fix responsive tren mobile, hover effects"
```

### Commit 27 - 13/06 (T7)
```bash
git add .
git commit -m "testing: cross-browser check, mobile responsive test"
```

### Commit 28 - 14/06 (CN)
```bash
git add progress-report/tuan-04.md
git commit -m "them bao cao tuan 4: news page, final polish, responsive 100%"
```

---

## TUAN 5: Thesis - Mo Dau + Chap 1,2 (15/06 - 21/06)

### Commit 29 - 15/06 (T2)
```bash
git add thesis/doc/00-mo-dau.md
git commit -m "viet mo dau: ly do, muc dich, pham vi do an"
```

### Commit 30 - 16/06 (T3)
```bash
git add thesis/doc/01-chuong-1-tong-quan.md
git commit -m "viet chap 1: boi canh, van de, giai phap de xuat"
```

### Commit 31 - 17/06 (T4)
```bash
git add thesis/doc/02-chuong-2-co-so-ly-thuyet.md
git commit -m "viet chap 2: HTML5, CSS3, JavaScript, HTTP, Express"
```

### Commit 32 - 18/06 (T5)
```bash
git add thesis/doc/tom-tat.md thesis/doc/loi-cam-on.md
git commit -m "viet tom tat va loi cam on"
```

### Commit 33 - 19/06 (T6)
```bash
git add thesis/doc/tai-lieu-tham-khao.md
git commit -m "viet tai lieu tham khao: 25 sources"
```

### Commit 34 - 20/06 (T7)
```bash
git add .
git commit -m "cap nhat setup doc: chi tiet ERD, database schema"
```

### Commit 35 - 21/06 (CN)
```bash
git add progress-report/tuan-05.md
git commit -m "them bao cao tuan 5: viet mo dau + chap 1,2"
```

---

## TUAN 6: Thesis - Chap 3,4 (22/06 - 28/06)

### Commit 36 - 22/06 (T2)
```bash
git add thesis/doc/03-chuong-3-hien-thuc-hoa.md
git commit -m "viet chap 3 part 1: requirement, architecture, design"
```

### Commit 37 - 23/06 (T3)
```bash
git add thesis/doc/03-chuong-3-hien-thuc-hoa.md
git commit -m "viet chap 3 part 2: API design, business flow, deploy"
```

### Commit 38 - 24/06 (T4)
```bash
git add thesis/doc/04-chuong-4-ket-qua.md
git commit -m "viet chap 4 part 1: feature checklist, UI description"
```

### Commit 39 - 25/06 (T5)
```bash
git add thesis/doc/04-chuong-4-ket-qua.md
git commit -m "viet chap 4 part 2: test cases, performance, accessibility"
```

### Commit 40 - 26/06 (T6)
```bash
git add thesis/doc/phu-luc.md
git commit -m "draft phu luc: Docker config, database schema, code sample"
```

### Commit 41 - 27/06 (T7)
```bash
git add .
git commit -m "cap nhat setup: chi tiet init.sql, seed.sql queries"
```

### Commit 42 - 28/06 (CN)
```bash
git add progress-report/tuan-06.md
git commit -m "them bao cao tuan 6: viet chap 3,4, phu luc draft"
```

---

## TUAN 7: Thesis - Chap 5 + Convert Word (29/06 - 05/07)

### Commit 43 - 29/06 (T2)
```bash
git add thesis/doc/05-chuong-5-ket-luan.md
git commit -m "viet chap 5: ket luan, dong gop, han che, future work"
```

### Commit 44 - 30/06 (T3)
```bash
git add thesis/doc/phu-luc.md
git commit -m "hoan thanh phu luc: full docker config, database, contact info"
```

### Commit 45 - 01/07 (T4)
```bash
git add .
git commit -m "format markdown: ensure khong co emoji, tone la hoc sinh"
```

### Commit 46 - 02/07 (T5)
```bash
git add .
git commit -m "cap nhat all thesis: fix typo, consistency check toan bo"
```

### Commit 47 - 03/07 (T6)
```bash
git add thesis/abs/
git commit -m "them slide bao ve: draft presentation structure"
```

### Commit 48 - 04/07 (T7)
```bash
git add .
git commit -m "chuan bi Word conversion: all markdown files ready"
```

### Commit 49 - 05/07 (CN)
```bash
git add progress-report/tuan-07.md
git commit -m "them bao cao tuan 7: chap 5, phu luc full, slide draft"
```

---

## TUAN 8: Final + Submission (06/07 - 12/07)

### Commit 50 - 06/07 (T2)
```bash
git add docker/
git commit -m "finalize docker: test docker compose up, health check"
```

### Commit 51 - 07/07 (T3)
```bash
git add README.md
git commit -m "update README final: full setup guide, clean format"
```

### Commit 52 - 08/07 (T4)
```bash
git add src/public/
git commit -m "add real screenshots: desktop + mobile versions"
```

### Commit 53 - 09/07 (T5)
```bash
git add .
git commit -m "minify CSS + JS: production optimization"
```

### Commit 54 - 10/07 (T6)
```bash
git add .
git commit -m "final review: no emoji, no Claude sign, all code clean"
```

### Commit 55 - 11/07 (T7)
```bash
git tag v1.0.0 -m "Submission final - Thiet ke website canh long Viet Nam"
git push origin main
git push origin v1.0.0
```

### Commit 56 - 12/07 (CN)
```bash
git add progress-report/tuan-08.md
git commit -m "them bao cao tuan 8: final, docker complete, ready submission"
```

---

## PUSH LEN GITHUB (Tuan 8, sau commit 54)

```bash
# Kiem tra branch
git branch

# Push toan bo commits
git push origin main

# Push tags
git push origin --tags

# Verify tren GitHub
# https://github.com/cutam278-clound/csn-dx24tt6-nguyenhoangminhtam-caulongvietnam
```

---

## GHI CHU QUAN TRONG

1. **Commit often, commit small** - Moi commit la 1 tinh nang logic, dung gom het vao 1 commit lon
2. **Commit message dung tieng Viet khong dau** - "them hamburger menu" (DUNG), khong phai "Add hamburger menu" (SAI)
3. **KHONG co "Co-Authored-By: Claude"** - TUYET DOI KHONG them dong nay
4. **Git config local** - Dung `git config` (khong `--global`) de tru tranh conflict voi GitHub account khac
5. **Push truoc khi hop** - Cada tuoi push toan bo commits len GitHub
6. **1 tag v1.0.0** - Chi 1 lan duy nhat khi submit (tuan 8)
7. **Release notes** - Them description khi tag: "Submission final - do an csn"

---

## TROUBLESHOOTING

**Loi: "fatal: not a git repository"**
```bash
cd /path/to/project
git init
git remote add origin https://github.com/...
```

**Loi: "permission denied"**
```bash
gh auth login
# Hoac check SSH key da setup chua
ssh -T git@github.com
```

**Loi: "Changes not staged for commit"**
```bash
git add <file>
git commit -m "message"
```

**Muon sua commit truoc do:**
```bash
git commit --amend -m "new message"
# (Sau sau thay hung, chi dung trong local, chua push)
```

**Muon xoa commit cuoi cung (chua push):**
```bash
git reset --soft HEAD~1
# Hoac hard reset (loss data - careful!)
git reset --hard HEAD~1
```

---

## LICH TONG HOP

```
Tuan 1 (18-24/05):  7 commits  - Setup
Tuan 2 (25-31/05):  7 commits  - HTML + CSS index, about
Tuan 3 (01-07/06):  7 commits  - JavaScript interactivity
Tuan 4 (08-14/06):  7 commits  - News page, polish
Tuan 5 (15-21/06):  7 commits  - Thesis chap 1-2
Tuan 6 (22-28/06):  7 commits  - Thesis chap 3-4
Tuan 7 (29/06-05/07): 7 commits - Thesis chap 5, phu luc
Tuan 8 (06-12/07):  7 commits  - Final, docker, submission

TONG: 56 commits, 8 tuần
```

---

**Chuc ban thanh cong! Hay commit dung gio va tro thanh 1 developer that su!**

*File nay: KHONG push len GitHub, chi de ân dạ trên máy.*
