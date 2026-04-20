# Hướng Dẫn Xác Thực Tính Năng AI MIND

Tài liệu này dùng để "chốt feature" trước khi triển khai, đảm bảo toàn bộ phạm vi bám sát `PRD_AI_Mind.md`.

## 1. Mục tiêu xác thực

- Xác nhận phạm vi MVP để tạo lead chất lượng và đặt lịch tư vấn sớm.
- Kiểm tra các module CMS đã đủ để vận hành website dịch vụ B2B hằng ngày.
- Đảm bảo AI assistant, nội dung compliance và automation đúng phạm vi đã định.
- Tránh phát sinh tính năng ngoài PRD trong sprint đầu.

## 2. Danh sách tính năng bắt buộc (Must Have)

### Frontend và chuyển đổi

- [ ] Landing page đầy đủ theo ảnh tham chiếu: Hero, Pain Points, 3 Pillars, Service Cards, 4 Bước Chuyển Đổi, Expert Proof, FAQ, CTA.
- [ ] CTA chính luôn nhìn thấy rõ: `Tư vấn ngay`, `Tư vấn triển khai GMP/ISO`, `Đặt lịch với AI Automation`.
- [ ] Form lead thu thập tối thiểu: họ tên, chức danh, công ty, SĐT, email, nhu cầu, tiêu chuẩn quan tâm.
- [ ] Có flow đặt lịch hoặc gửi yêu cầu tư vấn thành công.

### Lead pipeline và booking

- [ ] Tạo `consultation_requests` đúng schema theo PRD.
- [ ] Có trạng thái lead: `new / qualified / contacted / proposal_sent / won / lost`.
- [ ] Lưu UTM source/campaign cho tracking.
- [ ] Admin xem, lọc và cập nhật được danh sách lead.
- [ ] Tạo được `assessment_bookings` hoặc cơ chế lịch hẹn tương đương.

### Dịch vụ, chuẩn và đào tạo

- [ ] CMS CRUD `services`.
- [ ] CMS CRUD `training_programs`.
- [ ] Có trang chuẩn hoặc lĩnh vực từ collection `standards_pages`.
- [ ] Có trang `Dự án` / case study từ collection `projects`.

### Quản trị và bảo mật

- [ ] Route admin không hiển thị ở menu client.
- [ ] Chỉ role phù hợp (`admin/editor/consultant`) mới được ghi vào các collection nhạy cảm.
- [ ] Firestore rules đúng theo phân quyền PRD.
- [ ] Có audit log cho thay đổi claim, FAQ, case metrics và trạng thái lead.

### Nội dung, SEO, tracking

- [ ] Quản lý `pages`, `faq_items` và `seo_configs` từ CMS.
- [ ] Có tracking funnel tối thiểu: Landing -> CTA -> Form/Booking -> Qualified lead.
- [ ] Có dashboard KPI cơ bản cho admin/sales.

## 3. Danh sách tính năng nên có (Should Have)

### Nội dung, SEO và vận hành mở rộng

- [ ] Blog module: CRUD `blog_posts`, `blog_categories`.
- [ ] Luồng biên tập blog có `draft/scheduled/published`.
- [ ] Blog và standards pages tự cập nhật `sitemap.xml` và metadata SEO.
- [ ] Có internal link từ bài blog sang trang dịch vụ/đăng ký tư vấn.
- [ ] Projects / case studies có thể bật/tắt hiển thị theo trạng thái publish.

### AI và vận hành

- [ ] Knowledge base manager (CRUD `knowledge_base`).
- [ ] AI pre-sales assistant dùng context từ `knowledge_base` + `services` + `standards_pages`.
- [ ] Fallback assistant: nếu thiếu dữ liệu thì xin thông tin để tư vấn viên liên hệ.
- [ ] Export lead/booking sang CSV hoặc Google Sheets.

## 4. Danh sách tính năng có thể làm sau (Could Have)

- [ ] Visual Builder để sửa trực tiếp nội dung landing page.
- [ ] AI content assistant (CTA, FAQ, email follow-up, dàn ý blog).
- [ ] Tài nguyên tải về như checklist / readiness scorecard / lead magnet.
- [ ] Marketing automation nâng cao theo hành vi lead sau khi gửi form.

## 5. Kịch bản nghiệm thu theo user journey

1. Khách vào landing page, đọc pain points, giải pháp và bấm CTA tư vấn.
2. Khách gửi form hoặc đặt lịch discovery call thành công.
3. Hệ thống tạo `consultation_requests`, gán nguồn traffic và hiển thị cho admin.
4. Tư vấn viên cập nhật trạng thái lead, tạo `assessment_bookings` nếu phù hợp.
5. Admin vào CMS cập nhật dịch vụ, case study, FAQ, SEO và nội dung landing page.
6. Khách truy cập blog hoặc standards pages, đọc bài và bấm CTA sang trang dịch vụ / tư vấn.
7. Khách hỏi AI assistant, bot trả lời trong phạm vi dữ liệu đã duyệt và chuyển người dùng sang form nếu cần.

## 6. Các câu hỏi cần chốt với Product Owner

- [ ] Chuẩn nào cần ưu tiên ở sprint đầu: GMP, WHO GMP, ISO 9001, ISO 13485 hay bộ khác?
- [ ] CTA chính cần ưu tiên: tư vấn GMP/ISO, AI Automation hay đặt lịch assessment?
- [ ] MVP có cần lịch hẹn tự động ngay hay chỉ cần form + xử lý thủ công?
- [ ] Case study có cần ẩn danh 100% hay được phép dùng một phần tên khách hàng?
- [ ] Blog ở Phase 2 có cần đa tác giả ngay từ đầu không?
- [ ] Chương trình đào tạo có cần hiển thị lịch khai giảng / cohort hay chỉ mô tả dịch vụ in-house?
- [ ] KPI gate trước go-live có giữ đúng theo PRD không?

## 7. Quy ước chốt phạm vi

Khi có yêu cầu mới, phân loại vào 1 trong 3 nhóm:

1. `MVP`: bắt buộc làm ngay.
2. `Post-MVP`: đẩy sang Phase 2 hoặc Phase 3.
3. `Backlog`: ghi nhận để ưu tiên sau.

Chỉ triển khai khi feature đã được gắn nhóm scope rõ ràng.

## 8. Xác nhận phiên bản

- Tài liệu này hợp lệ khi khớp với `PRD_AI_Mind.md`.
- Mỗi lần thay đổi PRD cần cập nhật lại checklist này trước sprint tiếp theo.
