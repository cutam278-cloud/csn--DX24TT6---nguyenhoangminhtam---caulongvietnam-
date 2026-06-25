# Chương I: Tổng Quan

## 1.1 Bối Cảnh

### 1.1.1 Tình hình Cầu Lông hiện tại

Cầu lông là môn thể thao đánh vợt (racquet sport) và rất phổ biến trên thế giới. Theo các thống kê, cầu lông có khỏang 220 triệu người chơi trên thế giới, đặc biệt là ở những nước châu Á như Trung Quốc, Nhật Bản, Hàn Quốc, và Malaysia.

Tại Việt Nam, cầu lông đã phát triển trong khoảng 20 năm trở lại, tuy nhiên còn thua sụt nhiều so với các nước trong khu vực. Hình như:

- Còn ít trung tâm dành cho học tập và tập luyện chuẩn quốc tế
- Nhiều trụ trung tâm cầu lông của Việt Nam vẫn chưa được nhiều người tin tưởng phục vụ đang dùng
- Không có sự liên kết quốc tế để trao đổi kinh nghiệm

### 1.1.2 Tình Hình Website và Trong Chat Dịch Vụ

Hiện nay, các trung tâm cầu lông ở Việt Nam:

- Có website, nhưng thông thường là chỉ trang tỉnh, không cập nhật
- Không có trang nhận có kiến thức về cầu lông, lợi ích sức khỏe
- Form đăng ký và liên hệ còn khó sử dụng, không responsive
- Không có section tin tức, sự kiện

### 1.1.3 Tiện Ích Của Giải Pháp

Một website modern, responsive, và user-friendly có thể:

- Tăng nhận thức của cộng đồng về cầu lông
- Tạo cách cung cấp thông tin và đăng ký đang dùng
- Giúp trung tâm mở rộng ra khách hàng bên ngòai
- Tạo tiềm năng phát triển backend và database sau

## 1.2 Vấn Đề Cần Giải Quyết

1. **Website hiện tại không responsive:** Khách hàng truy cập bằng điện thọai gặp khó khăn
2. **Thiếu thông tin chi tiết:** Không có clear information về giao viên, lịch tập, học phí
3. **Khó đăng ký:** Form đăng ký lòng vòng, không có validation, vấn đề an tòan
4. **Không có tin tức:** Không có section update sự kiện, giải đấu, thành tích

## 1.3 Giải Pháp Đề Xuất

Đề giải quyết các vấn đề trên, em đề xuất xây dựng: **Website Giới Thiệu Trung Tâm Thể Dục Thể Thao Cầu Lông**

### Tiêu Chí Chỉnh
- Responsive design: chạy tốt trên mobile, tablet, desktop
- User-friendly interface: để sử dụng, không phức tạp
- Thông tin tòan diện: về trung tâm, giáo viên, lớp học, tin tức
- Form contact: để liện hệ và đăng ký tham gia
- SEO & Accessibility: tuot tìm kiếm, đang sử dụng cho tất cả

### Stack Công Nghệ
- Frontend: HTML5, CSS3, JavaScript vanilla (không framework)
- Backend: Node.js + Express (server nhớ để phục vụ static files)
- Deployment: Docker + docker-compose
- Repository: GitHub

## 1.4 Phương Pháp Nghiên Cứu

1. **Literature review:** Đọc các bài báo về web design, responsive design, user experience
2. **Case study:** Tham khảo website cầu lông của các nuoc khác (UK, Japan, Korea, Malaysia)
3. **Requirement analysis:** Tham khảo yêu cầu cụ thể của trung tâm và khách hàng
4. **Agile development:** Phát triển theo sprint 8 tuần, có testing và feedback constant

## 1.5 Cấu Trúc Đồ Án

### 1.5.1 Cấu Trúc Tổng Quát

Đồ án này gồm:

| Phần | Nội Dung | Tuần |
|------|----------|------|
| Setup & Phân tích | Repository, ERD, requirement | 1 |
| Frontend Development | HTML, CSS, JavaScript | 2-4 |
| Documentation | Thesis chapters, progress report | 5-7 |
| Finalization | Docker, README, submission | 8 |

### 1.5.2 Timeline Chi Tiết

**Tuần 1:** Setup
- Tạo repository trên GitHub
- Phân tích yêu cầu chi tiết
- Về ERD (reference for future)
- Xây dựng skeleton cấu trúc

**Tuần 2-4:** Frontend Development
- Tuần 2: HTML + CSS (index, about)
- Tuần 3: JavaScript interactivity (menu, carousel, form)
- Tuần 4: News page, final testing, responsive polish

**Tuần 5-7:** Thesis & Documentation
- Tuần 5: Mở đầu, Chap I-II (overview, technology)
- Tuần 6: Chap III-IV (implementation, results)
- Tuần 7: Chap V, phụ lục, convert Word

**Tuần 8:** Final & Submission
- Docker finalize
- README update
- GitHub push
- Submission to school

## 1.6 Contribution & Trạng Thái

Đồ án này đã hòan thành:

- Phân tích chi tiết yêu cầu của đề tài
- Tạo cấu trúc repo theo chuẩn của chung
- Chuẩn bị setup và mở chương

Những phần còn lại sẽ hòan thành trong 7 tuần tiếp theo.

---

**Kết Luận Chuong I:**

Đề tài website cầu lông Việt Nam là có ý nghĩa, có thể cài dùng vào thực tế, và trợ giúp nâng cao nhận thức về cầu lông. Stack công nghệ đã chọn là phù hợp, để học tập, và có thể mở rộng sau. Timeline 8 tuần là hợp lý để hòan thành đầy đủ.
