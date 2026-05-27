/**
 * BƯỚC 1: KHỞI TẠO CƠ SỞ DỮ LIỆU (DATABASE GIẢ LẬP)
 * Sử dụng Mảng (Array) chứa các Đối tượng (Object). Mỗi Object là 1 sản phẩm/người.
 */

const COACHES = [
    {
        name: "HLV Trưởng Huỳnh Hữu Phước",
        desc: "Cựu tuyển thủ quốc gia. Với hơn nửa thế kỷ gắn bó cùng cầu lông, từng là Á quân đơn nam Giải Vô địch Quốc gia, kinh nghiệm huấn luyện đội tuyển quốc gia và đào tạo nhiều vận động viên thành tích cao, cùng việc được cấp 2 chứng chỉ huấn luyện quốc tế từ BWF và IOC (Olympic).",
        img: "img/img.hhp.png"
    },
    {
        name: "HLV Trần Bá Hoài",
        desc: "Anh Bá Hoài tốt nghiệp Đại học Thể dục Thể thao chuyên ngành cầu lông. Ngoài ra, anh còn tận tụy với nghề và là một giáo viên dạy cầu lông nổi tiếng tại TPHCM.",
        img: "img/img.bht.png"
    },
    {
        name: "HLV Phạm Hồng Nam",
        desc: " Là vận động viên cầu lông nổi bật của đội tuyển quốc gia Việt Nam. Theo học tại Trường Phổ thông Năng khiếu Thể dục Thể thao Hà Nội và trưởng thành từ Câu lạc bộ Cầu lông Ciputra Hà Nội. Giành nhiều huy chương tại các giải quốc gia, các giải quốc tế trẻ và là gương mặt quen thuộc thi đấu ở các kỳ SEA Games. ",
        img: "img/3203201676265270392274192665218071502079968n-16808581107661123411426.webp"
    },

];

const SERVICES_COURSES = [
    
    {
        title: "Khóa cơ bản mới bắt đầu dưới 1 năm",
        desc: "12 buổi hướng dẫn cầm vợt, di chuyển 6 góc và các kỹ thuật phông, gài lưới cơ bản. Tặng áo tập BLAB.",
        price: "1.500.000 VNĐ / Khóa",
        img: "img/img.lopcoban.png"
    },
    
    {
        title: "Khóa Chuyên Nghiệp trên 2 năm",
        desc: "12 buổi hướng dẫn về tư duy di chuyển, các kiểu đập cầu, chặt cầu, chém cầu chuyên nghiệp. Tặng áo tập BLAB và quấn cán BLAB.",
        price: "2.500.000 VNĐ / Khóa",
        img: "img/img.lopchuyennghiep.png"
    },

    {
        title: "Khóa Thi Đấu Nâng Cao",
        desc: "12 buổi + 4 buổi tập luyện trong môi trường thi đấu thực tế, được học các kỹ thuật đánh lừa đối thủ, học kỹ thuật tâm lý. Tặng áo tập BLAB và tham gia các giải đấu do BLAB tổ chức.",
        price: "3.500.000 VNĐ / Khóa",
        img: "img/img.thidauchuyennghiep.png"
    },

    
];

const SHOP_ITEMS = [
    {
        title: "Vợt YONEX ARCSABER 11 PRO",
        desc: " Vợt cầu lông Yonex Arcsaber 11 Pro được Yonex phát hành giữa năm 2024 phối màu Grayish Pearl (Ngọc Trai Xám) sơn nhám trên tổng thể vợt cho cái nhìn hiện đại và cứng cáp chắc chắn sẽ làm các lông thủ cực ưng ý ngay từ lần chạm mặt đầu tiên. Vợt chuyên thiên hướng giúp chơi kiểm xoát cầu đều cầu, cho ra những cú phông đến cuối sân dễ dàng hay nhưng pha đập cầu cháy sân với nhiểu công nghệ tiên tiến trên thân vợt.",
        price: "5.099.000 VNĐ",
        img: "img/img.11pro.png"
    },
    {
        title: "Vợt YONEX NANOFLARE 800 Pro",
        desc: "Vợt cầu lông Yonex Nanoflare 800 Pro thuộc series mới và HOT nhất của nhà Yonex trong cuối năm 2023, được chính thức được ra mắt vào ngày 17/11/2023 hứa hẹn sẽ mang lại cơn sốt trên thị trường cầu lông thế giới như những gì mà đàn anh Nanoflare 1000zz . Đối tượng chính muốn hướng đến là những người chơi bán chuyên, chuyên nghiệp và các VĐV thi đấu.",
        price: "5.039.000 VNĐ",
        img: "img/img.800.png"
    },
    {
        title: "Vợt YONEX ASTROX 100ZZ NAVY",
        desc: "Vợt cầu lông Yonex Astrox 100ZZ Dark Navy đối với những người chơi nâng cao đang tìm cách nâng cấp trò chơi của họ với chuyển động nhanh hơn và những cú đánh cầu tinh tế mang đẳng cấp vượt trội thì Astrox 100 ZZ là cây vợt cực kỳ phù hợp. Đương nhiên đòi hỏi người chơi cần có kỹ thuật cá nhân cao, lực tay khỏe để phát huy hết công năng của vợt.",
        price: "4.650.000 VNĐ",
        img: "img/img.100zznay.png"
    },
    {
        title: "Giày YONEX SUBAXIA GT MEN",
        desc: "Giày cầu lông Yonex Subaxia GT Men - Dark Gray là phiên bản kế nhiệm của mẫu giày Grpht Thrttl (hay Graphite Throttle), được ra mắt hồi đầu năm nay. Đây là một mẫu giày cao cấp dành cho những người chơi yêu cầu sự bùng nổ tối đa, độ ổn định và sự thoải mái. Sản phẩm mới này của Yonex được thiết kế để tối ưu hóa mọi cú nhảy, cú đánh và cú tiếp đất thành sức mạnh, mang lại hiệu suất và tốc độ cao hơn mà không ảnh hưởng đến khả năng kiểm soát hoặc sự thoải mái.",
        price: "3.479.000 VNĐ",
        img: "img/img.giayyonex.png"
    }
];

/**
 * BƯỚC 2: HÀM ĐƯA DỮ LIỆU LÊN GIAO DIỆN (RENDER DOM)
 */
function renderData() {
    // 1. Tạo giao diện cho Huấn luyện viên
    const coachContainer = document.getElementById('coaches-grid');
    COACHES.forEach(coach => {
        // Dấu `` (Template Literal) giúp nhúng thẳng HTML và biến JS vào nhau
        coachContainer.innerHTML += `
            <div class="card">
                <img src="${coach.img}" alt="${coach.name}">
                <div class="card-content">
                    <h3>${coach.name}</h3>
                    <p class="card-desc">${coach.desc}</p>
                </div>
            </div>
        `;
    });

    // 2. Tạo giao diện Khóa học & Dịch vụ
    const serviceContainer = document.getElementById('services-grid');
    SERVICES_COURSES.forEach(item => {
        serviceContainer.innerHTML += `
            <div class="card">
                <img src="${item.img}" alt="${item.title}">
                <div class="card-content">
                    <h3>${item.title}</h3>
                    <p class="card-desc">${item.desc}</p>
                    <p class="card-price">${item.price}</p>
                </div>
            </div>
        `;
    });

    // 3. Tạo giao diện Shop
    const shopContainer = document.getElementById('shop-grid');
    SHOP_ITEMS.forEach(product => {
        shopContainer.innerHTML += `
            <div class="card">
                <img src="${product.img}" alt="${product.title}">
                <div class="card-content">
                    <h3>${product.title}</h3>
                    <p class="card-desc">${product.desc}</p>
                    <p class="card-price">${product.price}</p>
                    <button class="btn-primary" style="padding: 8px 15px; margin-top: 10px; width:100%">Xem Chi Tiết</button>
                </div>
            </div>
        `;
    });
}

/**
 * BƯỚC 3: XỬ LÝ SỰ KIỆN GỬI FORM ĐĂNG KÝ
 */
document.getElementById('registerForm').addEventListener('submit', function(e) {
    // e.preventDefault() là lệnh cực kỳ quan trọng, chặn web tự động load lại khi nhấn nút Submit
    e.preventDefault();

    // Thu thập dữ liệu khách nhập
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let msgBox = document.getElementById('form-msg');

    // Hiện thông báo đang xử lý
    msgBox.style.color = "var(--text-muted)";
    msgBox.innerHTML = "Đang gửi hồ sơ...";

    // Dùng setTimeout giả lập thời gian server mạng xử lý (1 giây)
    setTimeout(() => {
        // Trả về kết quả thành công
        msgBox.style.color = "#2e7d32"; // Xanh lá cây
        msgBox.innerHTML = `✅ Xin chào <b>${name}</b> (${phone}). BLAB WORLDWIDE đã nhận được thông tin. Ban quản lý sẽ liên hệ bạn sớm nhất!`;
        
        // Reset form cho trống trơn
        document.getElementById('registerForm').reset();
    }, 1000);
});

// BƯỚC 4: KÍCH HOẠT CHẠY CODE
// Lắng nghe sự kiện 'DOMContentLoaded': Khi HTML load xong thì mới bắt đầu chạy hàm renderData
window.addEventListener('DOMContentLoaded', renderData);