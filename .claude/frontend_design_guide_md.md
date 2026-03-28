# Hướng dẫn Input Layout Frontend (Dành cho User)

Tài liệu này hướng dẫn bạn cách **\"ra đề bài\"** cho AI Antigravity để
xây dựng giao diện (Layout) chuẩn xác nhất theo ý muốn. Bạn có thể chọn
1 trong 4 cách dưới đây để mô tả ý tưởng của mình.

## Cách 1: \"Clone\" hoặc Tham khảo Website có sẵn (Khuyên dùng)

*Dùng khi bạn đã thấy một trang web đẹp và muốn làm giống vậy.*

**Bước 1:** Gửi link website cho AI. **Bước 2:** Chỉ định rõ muốn lấy
phần nào.

> **Mẫu Prompt:** \"Hãy vào trang \[URL\] để phân tích layout. Tôi muốn
> làm giao diện trang chủ giống cấu trúc của họ:

-   Giữ lại Header và Footer tương tự.

-   Section \'Hero\' lấy cảm hứng về màu sắc và nút bấm.

-   Bỏ qua phần \'Blog\', thay bằng danh sách \'Sản phẩm mới\'.\"

## Cách 2: Upload Hình ảnh / Bản vẽ tay (Visual Input)

*Dùng khi bạn có file thiết kế (Figma, Photoshop) hoặc phác thảo trên
giấy.*

**Bước 1:** Chụp ảnh bản vẽ hoặc screenshot file thiết kế. **Bước 2:**
Kéo thả ảnh vào khung chat Antigravity. **Bước 3:** Ra lệnh cho AI
chuyển từ Ảnh sang Code.

> **Mẫu Prompt:** \"Tôi vừa upload ảnh phác thảo Dashboard Admin. Hãy
> dựng khung HTML/Tailwind CSS dựa trên ảnh này.

-   Sidebar bên trái màu tối (Slate-900).

-   Khu vực chính (Main Content) nền trắng.

-   Chú ý các Card thống kê ở hàng trên cùng.\"

## Cách 3: Quay Video mô tả (Interactive Input)

*Dùng khi bạn muốn diễn tả hiệu ứng động (Hover, Animation) hoặc luồng
người dùng.*

**Bước 1:** Quay màn hình (có thể vừa trỏ chuột vừa nói) để giải thích ý
tưởng. **Bước 2:** Upload video (.mp4) lên khung chat. **Bước 3:** Yêu
cầu AI xem và thực hiện.

> **Mẫu Prompt:** \"Xem video đính kèm. Tôi muốn làm cái hiệu ứng khi rê
> chuột vào nút \'Mua ngay\' nó phóng to lên và đổi màu như trong video.
> Hãy dùng Framer Motion để code hiệu ứng đó.\"

## Cách 4: Mô tả bằng lời (Descriptive Text)

*Dùng cho các thành phần đơn giản hoặc khi chưa có ý tưởng cụ thể.*

**Bước 1:** Mô tả chi tiết theo cấu trúc: \[Vị trí\] - \[Nội dung\] -
\[Màu sắc/Phong cách\].

> **Mẫu Prompt:** \"Thiết kế cho tôi một Section \'Giới thiệu\' gồm:

-   Bên trái: Ảnh chân dung tác giả (tròn).

-   Bên phải: Tên \'Thầy Quý\' in đậm size lớn, dưới là đoạn text giới
    > thiệu ngắn.

-   Nút \'Xem thêm\' màu cam (Brand Color), bo tròn góc.

-   Phong cách: Clean, hiện đại, nhiều khoảng trắng.\"

## Quy trình Chuẩn (Workflow) để AI thực hiện:

1.  **Input:** Bạn gửi yêu cầu (theo 1 trong 4 cách trên).

2.  **Confirm:** AI sẽ tóm tắt lại đê bài: *\"Em xác nhận lại: Anh muốn
    > Header giống trang A, nhưng màu cam giống trang B đúng không ạ?\"*

3.  **Plan:** AI liệt kê các Component sẽ tạo (Ví dụ: Header.jsx,
    > HeroSection.jsx).

4.  **Execute:** AI viết code.

5.  **Review:** Bạn kiểm tra Preview và yêu cầu chỉnh sửa nhỏ (Tweak).

**Mẹo (Vibe Tip):** Nếu chưa biết bắt đầu từ đâu, hãy dùng **Cách 1**.
Hãy nói: *\"Tìm cho anh 3 mẫu Landing Page bán sách giáo dục đẹp, rồi
mình chọn layout từ đó.\"*

## Cách 5: Sử dụng Google Stitch / V0 (Siêu tốc)

*Dùng tool AI chuyên tạo UI để sinh code React + Tailwind trong 1 nốt
nhạc.*

**Bước 1: Chuẩn bị Prompt (Quan trọng)** Copy đoạn Prompt mẫu dưới đây,
điền thông tin của bạn vào và dán vào Stitch:

> **PROMPT MẪU (Copy & Edit):** \"Act as an expert Lead Frontend
> Developer & UI/UX Designer. Create a **modern, premium React
> Dashboard** (using Tailwind CSS, Lucide React Icons) for a project
> called: **\[TÊN DỰ ÁN CỦA BẠN\]**.
>
> **Context:** \[MÔ TẢ NGẮN GỌN VỀ DỰ ÁN, VD: Admin Dashboard quản lý
> đơn hàng bán sách\].
>
> **Layout Structure:**

-   **Sidebar (Left):** Dark mode navy blue background. Menu items:
    > Dashboard, Orders, Products, Customers, Analytics.

-   **Header (Top):** White background, shadow-sm. Includes Search bar,
    > Notification badge, User Profile dropdown.

-   **Main Content:** Light gray background.

> **Key Sections to Generate:**

1.  **Stats Cards:** 4 cards at top (Total Revenue, New Orders, etc.)
    > with trend indicators.

2.  **Recent Orders Table:** Columns for ID, Customer, Status (Badge),
    > Total, Date.

3.  **Chart Placeholder:** A large area for Sales chart.

> **Design Vibe:**

-   \[CHỌN PHONG CÁCH: Minimalist / Colorful / Professional / Dark
    > Mode\].

-   Use \'Inter\' font.

-   Rounded corners (rounded-xl).

-   Soft shadows (shadow-lg).

-   Interactive states (hover:bg-opacity-90).\"

**Bước 2: Generate & Refine**

-   Nhấn Enter và đợi Stitch sinh giao diện.

-   Nếu chưa ưng, chat tiếp: *\"Make the sidebar darker\"*, *\"Add a
    > filter button to the table\"*.

**Bước 3: Lưu Code vào Dự án (Quan trọng)** Sau khi đã chốt giao diện
trên Stitch:

1.  Nhấn nút **Copy Code** (góc trên bên phải block code).

2.  Quay lại VS Code (Antigravity).

3.  Tạo file mới tại đường dẫn: src/components/stitch/DraftDashboard.jsx
    > (hoặc tên khác tùy ý).

4.  Dán code vào và báo cho AI Admin: *\"Anh vừa lưu layout từ Stitch
    > vào file src/components/stitch/DraftDashboard.jsx. Em hãy tách nhỏ
    > file này ra thành các component chuẩn (Sidebar, Header) và gắn vào
    > dự án nhé.\"*
