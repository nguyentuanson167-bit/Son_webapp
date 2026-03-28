## description: Quy trình Vibe Code chuẩn

# Quy trình Vibe Code (Interactive Workflow)

Đây là quy trình chuẩn (Standard Operating Procedure) để xây dựng CMS
Thầy Quý từ con số 0. **Lưu ý**: Đây là tài liệu sống, AI Agent phải đọc
và làm theo từng bước.

## Giai đoạn -1: Tự Cài Đặt (Self-Installation)

*Mục tiêu: Đảm bảo quy trình này luôn sẵn sàng trong mọi Workspace.*

Nếu bạn (AI Agent) thấy file này đang nằm trong thư mục dự án (ví dụ:
01_Product_Factory/vibecodeCMSthayQuy) nhưng **CHƯA** có trong thư mục
Workflows hệ thống (.agent/workflows), hãy thực hiện lệnh sau để \"cài
đặt\" nó:

1.  **Copy file**: copy \"{current_file_path}\"
    \".agent/workflows/vibecode_cms_process.md\"

2.  **Thông báo**: \"Đã cài đặt workflow /vibecode_cms_process. Từ giờ
    User có thể gọi lệnh này ở bất kỳ đâu.\"

## Giai đoạn 0: Kích hoạt \"Siêu Kỹ Năng\" (Skill Activation)

*Mục tiêu: Nạp kiến thức chuyên gia vào não bộ AI trước khi code.*

**🔴 BẮT BUỘC**: AI Agent phải đọc nội dung file SKILL.md của các kỹ
năng dưới đây (nằm trong thư mục skills/):

1.  **UI/UX Pro Max** (skills/ui-ux-pro-max/SKILL.md) -\> Để thiết kế
    giao diện Premium.

2.  **React Best Practices** (skills/react-best-practices/SKILL.md) -\>
    Code chuẩn cấu trúc.

3.  **Tailwind Patterns** (skills/tailwind-patterns/SKILL.md) -\>
    Styling hiện đại, nhanh.

4.  **Firebase** (skills/firebase/SKILL.md) -\> Bảo mật, Auth, Database.

5.  **RAG Implementation** (skills/rag-implementation/SKILL.md) -\> Xây
    dựng Chatbot AI.

6.  **Product Manager Toolkit**
    (skills/product-manager-toolkit/SKILL.md) -\> Quản lý yêu cầu.

7.  **Vercel Deployment** (skills/vercel-deployment/SKILL.md) -\> Đưa
    web lên mạng.

> **Trạng thái**: \[ \] Chưa kích hoạt \| \[x\] Đã kích hoạt (Đã đọc hết
> SKILL.md)

## Giai đoạn 1: \"Vibe\" Giao Diện (Design Phase)

*Mục tiêu: Xác định CMS sẽ trông như thế nào.*

1.  **Đọc Hướng dẫn**: Hãy mở file hướng dẫn thiết kế:
    frontend_design_guide.md

2.  **Chọn Cách Input**: Bạn hãy chọn 1 trong 5 cách trong file hướng
    dẫn:

    -   *Cách 1 (Clone)*: \"Tôi muốn giống trang web abc.com\".

    -   *Cách 5 (Google Stitch)*: Dùng Prompt mẫu để tạo code UI xịn xò.

3.  **Hành động của User**:

    -   Gửi ảnh/video/link hoặc code từ Stitch cho tôi.

    -   Ra lệnh: *\"Agent, hãy phân tích input này và chốt Layout.\"*

## Giai đoạn 2: \"Khế Ước\" Chức Năng (Validation Phase)

*Mục tiêu: Thống nhất các tính năng sẽ có để tránh phát sinh (Scope
Creep).*

1.  **Mở Bảng Check**: Gõ lệnh: open file: feature_validation_guide.md

2.  **Tương tác Xác nhận**:

    -   Trí tuệ nhân tạo (AI) đã liệt kê sẵn các tính năng (Chatbot,
        Secret Login, Visual Editor).

    -   Bạn chỉ cần trả lời: **\"Chốt\"** hoặc **\"Bổ sung \[Tính năng
        X\]\"**.

3.  **Kết thúc Phase**: Sau khi bạn \"Chốt\", tôi sẽ khóa danh sách chức
    năng.

## Giai đoạn 3: Thực Thi & Xây Dựng (Execution Phase)

*Mục tiêu: Biến ý tưởng thành phần mềm chạy được.*

Chúng ta sẽ chạy theo **Master Plan** (Bản dịch Tiếng Việt). Mở kế
hoạch: open file: implementation_plan.md

### Bước 3.1: Khởi tạo (Foundation)

-   **Lệnh**: *\"Agent, chạy Phase 1 của Implementation Plan.\"*

-   **Nhiệm vụ AI**: Tạo khung dự án React, cài Tailwind, Firebase (Áp
    dụng skill react-best-practices).

-   **Lưu ý**: Dùng chế độ \"Simulate\" nếu môi trường thiếu npm.

### Bước 3.2: Hạ tầng & Bảo mật

-   **Lệnh**: *\"Agent, chạy Phase 2.\"*

-   **User Cần làm**: Dán Firebase Key khi được hỏi.

-   **Kết quả**: Đăng nhập Ẩn + Bảo mật (Áp dụng skill firebase).

### Bước 3.3: Dựng Dashboard & Logic

-   **Lệnh**: *\"Agent, chạy Phase 3 và 4.\"*

-   **Kết quả**: Admin Dashboard, Order Management (Áp dụng skill
    ui-ux-pro-max).

### Bước 3.4: Trí tuệ nhân tạo (AI Brain)

-   **Lệnh**: *\"Agent, chạy Phase 5.\"*

-   **Kết quả**: Chatbot RAG (Áp dụng skill rag-implementation).

## Giai đoạn 4: Đưa lên Mạng (Go Live)

*Mục tiêu: Cho cả thế giới truy cập.*

1.  **Deploy**:

    -   Đọc Phase 6 trong implementation_plan.md.

    -   Áp dụng skill vercel-deployment.

2.  **Bàn giao**:

    -   Web đã online.

## Giai đoạn 5: Bảo Trì & Nâng Cấp

*Khi muốn sửa đổi sau này.*

-   Đọc Phase 7 trong implementation_plan.md.

-   Muốn sửa màu/chữ: *\"Agent, sửa tiêu đề trang chủ thành màu Đỏ.\"*
    -\> Tôi sẽ sửa code và bạn chỉ cần git push.

### Bắt đầu ngay?

Hãy gõ lệnh sau để Agent tự động đọc workflow và bắt đầu Phase 0:

> **\"Agent, bắt đầu quy trình Vibe Code CMS\"**
