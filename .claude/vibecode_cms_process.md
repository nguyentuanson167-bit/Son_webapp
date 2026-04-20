## description: Quy trình Vibe Code cho AI MIND GMP/ISO

# Quy trình Vibe Code AI MIND (Interactive Workflow)

Đây là quy trình chuẩn (Standard Operating Procedure) để xây dựng website dịch vụ + CMS cho **AI MIND** với định hướng **đào tạo và tư vấn AI GMP/ISO cho nhà máy dược**. **Lưu ý**: Đây là tài liệu sống, AI Agent phải đọc và làm theo từng bước.

## Giai đoạn -1: Tự Cài Đặt (Self-Installation)

*Mục tiêu: Đảm bảo quy trình này luôn sẵn sàng trong mọi Workspace.*

Nếu bạn (AI Agent) thấy file này đang nằm trong thư mục dự án nhưng **CHƯA** có trong thư mục Workflows hệ thống (`.agent/workflows`), hãy thực hiện lệnh sau để "cài đặt" nó:

1.  **Copy file**: copy `"{current_file_path}"` `.agent/workflows/vibecode_cms_process.md`
2.  **Thông báo**: `"Đã cài đặt workflow /vibecode_cms_process. Từ giờ User có thể gọi lệnh này ở bất kỳ đâu."`

## Giai đoạn 0: Kích hoạt "Siêu Kỹ Năng" (Skill Activation)

*Mục tiêu: Nạp kiến thức chuyên gia vào não bộ AI trước khi thiết kế và code.*

**🔴 BẮT BUỘC**: AI Agent phải đọc nội dung file `SKILL.md` của các kỹ năng dưới đây:

1.  **UI/UX Pro Max** (`skills/ui-ux-pro-max/SKILL.md`) -> Thiết kế giao diện premium, có chiều sâu B2B.
2.  **React Best Practices** (`skills/react-best-practices/SKILL.md`) -> Code chuẩn cấu trúc.
3.  **Tailwind Patterns** (`skills/tailwind-patterns/SKILL.md`) -> Styling hiện đại, nhanh.
4.  **Firebase** (`skills/firebase/SKILL.md`) -> Bảo mật, Auth, Database.
5.  **RAG Implementation** (`skills/rag-implementation/SKILL.md`) -> Dùng khi cần AI pre-sales assistant hoặc knowledge base.
6.  **Product Manager Toolkit** (`skills/product-manager-toolkit/SKILL.md`) -> Quản lý yêu cầu và scope.
7.  **Vercel Deployment** (`skills/vercel-deployment/SKILL.md`) -> Đưa web lên mạng.

> **Trạng thái**: [ ] Chưa kích hoạt | [x] Đã kích hoạt (Đã đọc hết SKILL.md)

## Giai đoạn 1: "Vibe" Giao Diện (Design Phase)

*Mục tiêu: Chốt định vị, cấu trúc trang và visual direction cho AI MIND.*

1.  **Đọc PRD trước**: Hãy mở file `.claude/PRD_AI_Mind.md`
2.  **Đọc Hướng dẫn thiết kế**: Hãy mở file `frontend_design_guide_md.md`
3.  **Chọn Cách Input**: Bạn hãy chọn 1 trong 5 cách trong file hướng dẫn:
    -   *Cách 1 (Clone)*: `"Tôi muốn giống trang web abc.com"`.
    -   *Cách 5 (Google Stitch)*: Dùng Prompt mẫu để tạo code UI xịn xò.
4.  **Bắt buộc phân tích input theo lens AI MIND**:
    -   Xác định rõ 4 lớp nội dung: `Pain points`, `Giải pháp`, `Bằng chứng`, `CTA`.
    -   Giữ đúng tone `B2B dược phẩm + compliance + AI transformation`, tránh ngôn ngữ bán khóa học đại trà.
    -   Chốt rõ những section phải có theo ảnh tham chiếu: `Hero`, `Pain Points`, `3 Pillars`, `Services`, `4 Steps`, `Expert/Credibility`, `FAQ`, `Closing CTA`.
5.  **Hành động của User**:
    -   Gửi ảnh/video/link hoặc code từ Stitch cho tôi.
    -   Ra lệnh: *"Agent, hãy phân tích input này và chốt Layout cho AI MIND."*

## Giai đoạn 2: "Khế Ước" Chức Năng (Validation Phase)

*Mục tiêu: Thống nhất các tính năng sẽ có để tránh phát sinh (Scope Creep).*

1.  **Mở Bảng Check**: Gõ lệnh: open file: `feature_validation_guide.md`
2.  **Tương tác Xác nhận**:
    -   AI đã liệt kê sẵn các tính năng chính cho AI MIND: landing page, dịch vụ, standards pages, booking, lead pipeline, FAQ, SEO, AI assistant.
    -   Bạn chỉ cần trả lời: **"Chốt"** hoặc **"Bổ sung [Tính năng X]"**.
3.  **Kết thúc Phase**: Sau khi bạn "Chốt", tôi sẽ khóa danh sách chức năng.

## Giai đoạn 3: Thực Thi & Xây Dựng (Execution Phase)

*Mục tiêu: Biến định vị AI MIND thành website + CMS chạy được.*

Chúng ta sẽ chạy theo **Master Plan** (Bản dịch Tiếng Việt). Mở kế hoạch: open file: `implementation_plan.md`

### Bước 3.1: Khởi tạo (Foundation)

-   **Lệnh**: *"Agent, chạy Phase 1 của Implementation Plan."*
-   **Nhiệm vụ AI**: Tạo khung web app, cài Tailwind, Firebase, route public và khung admin (Áp dụng skill react-best-practices).
-   **Lưu ý**: Dùng chế độ "Simulate" nếu môi trường thiếu npm.

### Bước 3.2: Data model + CMS core

-   **Lệnh**: *"Agent, chạy Phase 2."*
-   **User Cần làm**: Dán Firebase Key khi được hỏi, và chốt danh sách chuẩn ưu tiên nếu chưa có.
-   **Kết quả**: Hoàn thiện collections `services`, `training_programs`, `standards_pages`, `projects`, `consultation_requests`, `pages`, `faq_items`, `seo_configs` (Áp dụng skill firebase).

### Bước 3.3: Public website + lead funnel

-   **Lệnh**: *"Agent, chạy Phase 3 và 4."*
-   **Kết quả**: Landing page AI MIND, service pages, standards pages, projects page, contact/booking flow, dashboard lead cơ bản (Áp dụng skill ui-ux-pro-max).

### Bước 3.4: Trí tuệ nhân tạo (AI Brain)

-   **Lệnh**: *"Agent, chạy Phase 5."*
-   **Kết quả**: AI pre-sales assistant, knowledge base, content assistant cho FAQ/CTA/blog (Áp dụng skill rag-implementation khi cần).

## Giai đoạn 4: Đưa lên Mạng (Go Live)

*Mục tiêu: Cho khách hàng B2B truy cập, để lại lead và được tư vấn thật.*

1.  **Deploy**:
    -   Đọc Phase 6 trong `implementation_plan.md`.
    -   Áp dụng skill `vercel-deployment`.
2.  **Bàn giao**:
    -   Web đã online.
    -   CTA, form, lịch hẹn, tracking, metadata SEO và route admin đã được kiểm tra.

## Giai đoạn 5: Bảo Trì & Nâng Cấp

*Khi muốn sửa đổi sau này hoặc mở rộng chiến lược nội dung.*

-   Đọc Phase 7 trong `implementation_plan.md`.
-   Muốn sửa màu/chữ: *"Agent, sửa headline Hero và CTA trang chủ cho tone chuyên gia GMP/ISO hơn."*
    -> Tôi sẽ sửa code và bạn chỉ cần git push.
-   Muốn thêm case study, chuẩn mới, FAQ mới hoặc cập nhật thông điệp dịch vụ: luôn cập nhật PRD + checklist trước nếu thay đổi scope.

### Bắt đầu ngay?

Hãy gõ lệnh sau để Agent tự động đọc workflow và bắt đầu Phase 0:

> **"Agent, bắt đầu quy trình Vibe Code AI MIND"**
