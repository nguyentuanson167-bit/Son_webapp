# Hướng Dẫn Xác Thực Tính Năng Son Skool

Tài liệu này dùng để "chốt feature" trước khi triển khai, đảm bảo toàn bộ phạm vi bám sát `PRD_Son_Skool.md`.

## 1. Mục tiêu xác thực

- Xác nhận phạm vi MVP để tạo doanh thu sớm.
- Kiểm tra các module CMS đã đủ để vận hành hằng ngày.
- Đảm bảo chatbot AI và automation đúng phạm vi đã định.
- Tránh phát sinh tính năng ngoài PRD trong sprint đầu.

## 2. Danh sách tính năng bắt buộc (Must Have)

### Frontend và chuyển đổi

- [ ] Landing page đầy đủ: Hero, Benefits, Curriculum, Testimonials, CTA.
- [ ] Lead form thu thập: họ tên, số điện thoại, email, nhu cầu học.
- [ ] Course catalog render từ collection `courses`.
- [ ] Checkout flow tạo đơn hàng thành công.

### Đơn hàng và thanh toán

- [ ] Tạo `orders` đúng schema theo PRD.
- [ ] Lưu trạng thái thanh toán: `pending/paid/failed/refunded`.
- [ ] Lưu UTM source/campaign cho tracking.
- [ ] Admin xem và lọc được danh sách đơn hàng.

### Khóa học và cấp quyền

- [ ] CMS CRUD khóa học (`courses`).
- [ ] Publish/unpublish khóa học.
- [ ] Sau khi thanh toán thành công: cấp quyền học (`access_status = granted`).
- [ ] Gửi hướng dẫn vào Skool và lưu `skool_invite_sent`.

### Quản trị và bảo mật

- [ ] Route admin không hiển thị ở menu client.
- [ ] Chỉ role `admin` mới được ghi vào các collection nhạy cảm.
- [ ] Firestore rules đúng theo phân quyền PRD.
- [ ] Có audit log cho thay đổi quan trọng (giá, quyền học, hoàn tiền).

### Nội dung, SEO, tracking

- [ ] Quản lý `pages` và `seo_configs` từ CMS.
- [ ] Có tracking funnel tối thiểu: Landing -> Checkout -> Paid.
- [ ] Có dashboard KPI cơ bản cho admin.

## 3. Danh sách tính năng nên có (Should Have)

### Blog và SEO mở rộng

- [ ] Blog module: CRUD `blog_posts`, `blog_categories`.
- [ ] Luồng biên tập blog có `draft/scheduled/published`.
- [ ] Blog tự cập nhật `sitemap.xml` và metadata SEO.
- [ ] Có internal link từ bài blog sang khóa học/đăng ký tư vấn.

### AI và vận hành

- [ ] Knowledge base manager (CRUD `knowledge_base`).
- [ ] AI sales chatbot dùng context từ `knowledge_base` + `courses`.
- [ ] Fallback chatbot: nếu thiếu dữ liệu thì xin thông tin để tư vấn viên liên hệ.
- [ ] Export orders sang CSV/Google Sheets.

## 4. Danh sách tính năng có thể làm sau (Could Have)

- [ ] Visual Builder để sửa trực tiếp nội dung landing page.
- [ ] AI content assistant (CTA, FAQ, email follow-up, dàn ý blog).
- [ ] Marketing automation nâng cao sau khi học viên mua khóa.

## 5. Kịch bản nghiệm thu theo user journey

1. Khách vào landing page, xem khóa học và bấm đăng ký/mua.
2. Khách điền thông tin, tạo đơn hàng thành công.
3. Hệ thống cập nhật trạng thái thanh toán.
4. Nếu `paid`, hệ thống cấp quyền học và gửi hướng dẫn vào Skool.
5. Admin vào CMS theo dõi đơn hàng, cập nhật khóa học, SEO và nội dung.
6. Khách truy cập blog, đọc bài và bấm CTA sang trang khóa học.
7. Khách hỏi chatbot, bot trả lời đúng dữ liệu đã duyệt.

## 6. Các câu hỏi cần chốt với Product Owner

- [ ] MVP có cần subscription ngay sprint đầu không, hay chỉ one-time?
- [ ] MVP có cần coupon engine đầy đủ không?
- [ ] Cổng thanh toán ưu tiên gồm những kênh nào?
- [ ] Mức độ tự động hóa gửi invite Skool: thủ công ban đầu hay tự động hoàn toàn?
- [ ] Blog ở Phase 2 có cần đa tác giả ngay từ đầu không?
- [ ] KPI gate trước go-live có giữ đúng theo PRD không?

## 7. Quy ước chốt phạm vi

Khi có yêu cầu mới, phân loại vào 1 trong 3 nhóm:

1. `MVP`: bắt buộc làm ngay.
2. `Post-MVP`: đẩy sang Phase 2 hoặc Phase 3.
3. `Backlog`: ghi nhận để ưu tiên sau.

Chỉ triển khai khi feature đã được gắn nhóm scope rõ ràng.

## 8. Xác nhận phiên bản

- Tài liệu này hợp lệ khi khớp với `PRD_Son_Skool.md`.
- Mỗi lần thay đổi PRD cần cập nhật lại checklist này trước sprint tiếp theo.
