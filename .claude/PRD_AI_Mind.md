# Product Requirements Document (PRD) - AI MIND Platform

## 1. Tổng quan dự án (Project Overview)

- **Tên dự án:** AI MIND (Lead Generation Website + Visual CMS + Consultation Operations)
- **Mục tiêu:** Xây dựng website dịch vụ cho **đào tạo, tư vấn và triển khai AI GMP/ISO** dành cho **nhà máy dược**, giúp thu hút lead chất lượng, đặt lịch tư vấn/gap assessment, và chuyển đổi thành dự án triển khai thực tế.
- **Đối tượng khách hàng:** Chủ doanh nghiệp dược, giám đốc nhà máy, trưởng phòng QA/QC, QA Compliance, Production, IT/Automation, đội chuyển đổi số trong môi trường GMP/ISO.
- **Business model:** Bán gói `assessment`, gói tư vấn triển khai GMP/ISO kết hợp AI, chương trình đào tạo nội bộ, gói AI & automation pilot, và gói đồng hành tối ưu vận hành theo tháng/quý.
- **Giá trị cốt lõi cần truyền đạt:** Giảm hàng trăm giờ xử lý hồ sơ GMP thủ công, tăng khả năng sẵn sàng thanh tra, giảm sai sót do thao tác lặp, và tạo năng lực nội bộ để vận hành AI an toàn trong nhà máy dược.
- **Tech Stack đề xuất:** Next.js 15 (App Router), Tailwind CSS, Firebase (Firestore, Auth, Storage, Functions), tích hợp lịch hẹn và CRM phù hợp thị trường B2B.

## 2. Phân tích website client (định hướng AI MIND)

### 2.1. Mô hình kinh doanh cốt lõi

- **Mô hình funnel chính:**
  - Lead vào từ landing page, bài viết SEO, case study, referral hoặc quảng cáo.
  - Chuyển đổi qua CTA `Tư vấn ngay`, `Đặt lịch tư vấn GMP/ISO`, hoặc `Đặt lịch tư vấn AI & Automation`.
  - Sau buổi discovery call: đánh giá hiện trạng, đề xuất lộ trình, ký hợp đồng triển khai/đào tạo.

- **Nguồn doanh thu chính:**
  - **Tư vấn triển khai GMP/ISO kết hợp AI.**
  - **Đào tạo nội bộ AI GMP/ISO** cho đội QA/QC/Production/IT.
  - **Xây dựng hệ thống AI & Automation** cho hồ sơ, SOP, dashboard, tác vụ nội bộ.
  - **Dịch vụ đồng hành vận hành** sau triển khai.

- **Nguyên tắc định vị:**
  - Không bán “tool AI chung chung”, mà bán **năng lực chuyển đổi quy trình GMP/ISO** trong môi trường dược.
  - Website cần cân bằng giữa **uy tín compliance** và **năng lực công nghệ AI**.
  - Nội dung phải ưu tiên `outcome business`, không chỉ mô tả tính năng kỹ thuật.

### 2.2. Bản đồ nội dung landing page theo ảnh tham chiếu

1. **Header / Navigation**
   - Logo `AI MIND`.
   - Menu chính: `Giải pháp`, `Lĩnh vực GMP`, `ISO Standards`, `Dự án`.
   - CTA nổi bật: `Tư vấn ngay`.

2. **Hero Section**
   - Headline định vị pain point:
     - `Doanh nghiệp Dược của bạn đang mất hàng trăm giờ mỗi tháng cho quy trình GMP thủ công?`
   - Subheadline:
     - AI MIND giúp doanh nghiệp dược triển khai GMP/ISO đạt chuẩn, đồng thời tự động hóa khoảng `60%` các quy trình vận hành bằng AI.
   - Hai CTA song song:
     - `Đặt lịch với AI Automation`
     - `Tư vấn triển khai GMP/ISO`
   - Hình ảnh trực quan về dashboard / automation / nhà máy số hóa.

3. **Pain Points Section**
   - Headline:
     - `Những thách thức đang kìm hãm doanh nghiệp Dược của bạn`
   - 4 card nội dung chính:
     - `Hồ sơ GMP/ISO ngập đầu`
     - `Thanh tra tuân thủ là nỗi lo`
     - `Quy trình thủ công, dễ sai sót`
     - `Muốn số hóa nhưng không biết bắt đầu từ đâu`

4. **Value Proposition / 3 Pillars**
   - Headline:
     - `AI Mind kết hợp chuyên môn GMP/ISO và công nghệ AI để giải quyết cả 3 bài toán cùng lúc`
   - 3 trụ cột:
     - `Tuân thủ GMP/ISO`
     - `Vận hành tự động hóa 60%`
     - `Giữ tuân thủ lợi thế`

5. **Services / Solution Cards**
   - Card 1:
     - `Tư vấn triển khai GMP/ISO kết hợp AI`
     - Nhấn vào số hóa tài liệu, chuẩn hóa quy trình, đào tạo vận hành.
   - Card 2:
     - `Xây dựng hệ thống AI & Automation nhà máy Dược`
     - Nhấn vào AI agents, SOP chatbot nội bộ, dashboard chất lượng thời gian thực.
   - Ghi chú định hướng:
     - Dịch vụ **đào tạo nội bộ AI GMP/ISO** là một phần bắt buộc trong delivery, cần hiện rõ ở bullet, trang dịch vụ chi tiết và quy trình triển khai.

6. **4 Bước Chuyển Đổi**
   - Headline:
     - `4 bước để chuyển đổi`
   - 4 bước:
     - `Tư vấn miễn phí`
     - `Đánh giá & Đề xuất`
     - `Triển khai & Đào tạo`
     - `Vận hành & Hỗ trợ`

7. **Expert Credibility + Impact Metrics**
   - Khối giới thiệu chuyên gia sáng lập / cố vấn triển khai GMP/ISO.
   - Khối `Hiệu quả thực tế` để nêu chỉ số định lượng như:
     - giảm thời gian chuẩn bị hồ sơ,
     - tăng tỷ lệ tuân thủ hồ sơ/SOP,
     - giảm lỗi ghi chép lặp lại.

8. **FAQ Section**
   - Nhóm câu hỏi xoay quanh:
     - quy mô doanh nghiệp phù hợp,
     - có cần dừng sản xuất để triển khai không,
     - bảo mật dữ liệu,
     - chi phí tư vấn/đào tạo,
     - AI MIND hỗ trợ triển khai như thế nào.

9. **Closing CTA**
   - Headline tinh thần:
     - `Doanh nghiệp Dược của bạn xứng đáng vận hành thông minh hơn`
   - CTA:
     - `Tư vấn miễn phí ngay`
     - `Tìm hiểu thêm giải pháp`

### 2.3. Tính năng chính Frontend

- **Landing Page:** Hero, pain points, solution pillars, service cards, quy trình 4 bước, expert profile, metrics, FAQ, closing CTA.
- **Service Detail Pages:** Trang chi tiết cho từng nhóm dịch vụ `GMP/ISO Consulting`, `AI Automation`, `AI GMP/ISO Training`, `Assessment`.
- **Standards Hub:** Trang chuyên sâu theo chuẩn `GMP`, `WHO GMP`, `EU GMP`, `ISO 9001`, `ISO 13485` hoặc các tiêu chuẩn được chốt sau.
- **Projects / Case Studies:** Trang `Dự án` để trình bày case study, kết quả đạt được, phạm vi triển khai, mức độ ẩn danh nếu khách hàng yêu cầu.
- **Booking / Contact Flow:** Form đặt lịch, chọn nhu cầu, ưu tiên kênh liên hệ, chuyển về lịch hẹn hoặc gửi thông báo cho team tư vấn.
- **Training Program Pages:** Trang mô tả chương trình đào tạo nội bộ theo vai trò (QA/QC/Production/IT/Management).
- **Blog Hub (SEO):** Trung tâm nội dung chia sẻ kiến thức GMP/ISO, AI trong dược, checklist thanh tra, SOP số hóa, data integrity.
- **Blog Detail:** Bài viết chuẩn SEO với mục lục, CTA phù hợp, case liên quan, form để lại nhu cầu.

### 2.4. Yêu cầu tích hợp

- Website lấy dữ liệu động từ CMS: nội dung landing page, services, case study, FAQ, SEO, CTA, và tài nguyên tải về.
- Đồng bộ biểu mẫu lead vào CRM nội bộ hoặc collection `leads` / `consultation_requests`.
- Tích hợp lịch hẹn để điều phối discovery call / assessment call.
- Tích hợp `GA4`, `Meta Pixel`, `LinkedIn Insight Tag`, UTM tracking cho kênh B2B khi cần.
- Tự động đồng bộ `sitemap.xml`, metadata Open Graph, schema FAQ/Service/Article.
- Hệ thống email gửi xác nhận đăng ký tư vấn, nhắc lịch, và follow-up sau buổi gọi.

## 3. Yêu cầu hệ thống Backend (Backend PRD)

### 3.1. Kiến trúc dữ liệu (Firestore Schema)

#### `services` (Danh mục dịch vụ)

| Field | Type | Description |
|---|---|---|
| title | string | Tên dịch vụ |
| slug | string | Đường dẫn thân thiện URL |
| short_description | string | Mô tả ngắn cho card/list |
| long_description | string | Nội dung chi tiết |
| service_type | string | consulting / training / assessment / automation / retainer |
| target_roles | array | Đối tượng phù hợp: QA, QC, Plant Director, IT... |
| standards_supported | array | GMP / ISO 9001 / ISO 13485... |
| deliverables | array | Các đầu ra chính của dịch vụ |
| outcomes | array | Kết quả cam kết ở mức mô tả |
| featured_metrics | array | Các chỉ số thực tế dùng làm bằng chứng |
| thumbnail_url | string | Ảnh hiển thị |
| cta_primary | string | CTA chính |
| cta_secondary | string | CTA phụ |
| is_published | boolean | Bật/tắt hiển thị |
| created_at | timestamp | Thời gian tạo |
| updated_at | timestamp | Thời gian cập nhật |

#### `training_programs` (Chương trình đào tạo)

| Field | Type | Description |
|---|---|---|
| title | string | Tên chương trình đào tạo |
| slug | string | URL thân thiện |
| audience | array | QA/QC / Production / IT / Management |
| delivery_mode | string | onsite / online / hybrid |
| duration_hours | number | Tổng thời lượng |
| module_outline | array | Danh sách module |
| learning_outcomes | array | Kết quả đầu ra kỳ vọng |
| standards_covered | array | Chuẩn được đào tạo |
| is_featured | boolean | Đánh dấu nổi bật |
| is_published | boolean | Bật/tắt hiển thị |
| created_at | timestamp | Thời gian tạo |
| updated_at | timestamp | Thời gian cập nhật |

#### `standards_pages` (Trang chuẩn / lĩnh vực)

| Field | Type | Description |
|---|---|---|
| title | string | Tên trang chuẩn |
| slug | string | URL thân thiện |
| standard_code | string | GMP / ISO 9001 / ISO 13485... |
| overview | string | Tổng quan chuẩn |
| common_gaps | array | Các lỗ hổng phổ biến |
| target_segments | array | Nhóm doanh nghiệp phù hợp |
| related_service_ids | array | Dịch vụ liên quan |
| faq_item_ids | array | FAQ liên quan |
| publish_status | string | draft / published / archived |
| seo_title | string | Meta title |
| seo_description | string | Meta description |
| created_at | timestamp | Thời gian tạo |
| updated_at | timestamp | Thời gian cập nhật |

#### `projects` (Case study / dự án triển khai)

| Field | Type | Description |
|---|---|---|
| title | string | Tên case study |
| slug | string | URL thân thiện |
| client_alias | string | Tên ẩn danh hoặc tên doanh nghiệp được phép công bố |
| sector | string | Lĩnh vực: dược, thực phẩm chức năng, thiết bị y tế... |
| problem_statement | string | Bài toán ban đầu |
| intervention_summary | string | Giải pháp AI MIND triển khai |
| services_used | array | Dịch vụ đã áp dụng |
| result_metrics | array | Chỉ số kết quả đạt được |
| testimonial_quote | string | Trích dẫn khách hàng (nếu có) |
| cover_image_url | string | Ảnh đại diện |
| publish_status | string | draft / published / archived |
| created_at | timestamp | Thời gian tạo |
| updated_at | timestamp | Thời gian cập nhật |

#### `blog_posts` (Nội dung blog phục vụ SEO)

| Field | Type | Description |
|---|---|---|
| title | string | Tiêu đề bài viết |
| slug | string | URL thân thiện (duy nhất) |
| excerpt | string | Mô tả ngắn hiển thị ở list |
| content_markdown | string | Nội dung bài viết |
| cover_image_url | string | Ảnh cover |
| author_name | string | Tên tác giả |
| category_ids | array | Danh sách category liên quan |
| tag_list | array | Danh sách tag SEO |
| related_service_ids | array | Dịch vụ gợi ý trong CTA |
| related_standard_ids | array | Các tiêu chuẩn liên quan |
| reading_time_min | number | Thời gian đọc ước tính |
| publish_status | string | draft / scheduled / published / archived |
| published_at | timestamp | Thời gian publish |
| is_featured | boolean | Đánh dấu bài nổi bật |
| seo_title | string | Meta title |
| seo_description | string | Meta description |
| canonical_url | string | URL canonical |
| created_at | timestamp | Thời gian tạo |
| updated_at | timestamp | Thời gian cập nhật |

#### `blog_categories` (Phân loại nội dung blog)

| Field | Type | Description |
|---|---|---|
| name | string | Tên chuyên mục |
| slug | string | URL thân thiện |
| description | string | Mô tả chuyên mục |
| seo_title | string | Meta title |
| seo_description | string | Meta description |
| is_active | boolean | Bật/tắt chuyên mục |
| created_at | timestamp | Thời gian tạo |
| updated_at | timestamp | Thời gian cập nhật |

#### `consultation_requests` (Yêu cầu tư vấn)

| Field | Type | Description |
|---|---|---|
| contact_name | string | Họ tên người liên hệ |
| job_title | string | Chức danh |
| company_name | string | Tên doanh nghiệp |
| phone | string | Số điện thoại |
| email | string | Email |
| factory_scale | string | Quy mô nhà máy / số line / số nhân sự |
| standards_current | array | Chuẩn đang áp dụng |
| pain_points | array | Các vấn đề chính |
| service_interest | array | Dịch vụ quan tâm |
| preferred_contact_time | string | Thời gian muốn nhận liên hệ |
| note | string | Ghi chú thêm |
| status | string | new / qualified / contacted / proposal_sent / won / lost |
| owner_id | string | Tư vấn viên phụ trách |
| utm_source | string | Nguồn traffic |
| utm_campaign | string | Campaign |
| created_at | timestamp | Thời gian tạo |
| updated_at | timestamp | Thời gian cập nhật |

#### `assessment_bookings` (Lịch hẹn đánh giá / discovery call)

| Field | Type | Description |
|---|---|---|
| consultation_request_id | string | Liên kết tới request gốc |
| meeting_type | string | discovery / gap_assessment / training_consult |
| scheduled_at | timestamp | Thời gian hẹn |
| channel | string | zoom / meet / onsite / phone |
| attendee_list | array | Danh sách người tham dự |
| booking_status | string | scheduled / completed / cancelled / no_show |
| follow_up_summary | string | Tóm tắt sau cuộc gọi |
| next_action | string | Hành động tiếp theo |
| created_at | timestamp | Thời gian tạo |
| updated_at | timestamp | Thời gian cập nhật |

#### `pages` (Nội dung website cho visual editing)

- `home`: hero, pain points, 3 pillars, service cards, process steps, expert block, metrics, FAQ, closing CTA.
- `solutions`: trang tổng hợp giải pháp.
- `gmp`: trang lĩnh vực GMP.
- `iso-standards`: trang nhóm chuẩn ISO.
- `projects`: hero và danh sách dự án/case study.
- `training`: trang chương trình đào tạo nội bộ.
- `about`: thông tin đội ngũ, phương pháp, năng lực.
- `contact`: thông tin liên hệ, form, bản đồ nếu có.
- `thank-you`: trang cảm ơn sau khi gửi form / đặt lịch.

#### `faq_items` (Bộ câu hỏi thường gặp)

| Field | Type | Description |
|---|---|---|
| question | string | Câu hỏi |
| answer | string | Câu trả lời chuẩn |
| category | string | pricing / scope / security / implementation / training |
| target_page | string | home / service / standard / contact |
| sort_order | number | Thứ tự hiển thị |
| is_active | boolean | Bật/tắt |
| created_at | timestamp | Thời gian tạo |
| updated_at | timestamp | Thời gian cập nhật |

#### `seo_configs` (Cấu hình SEO)

| Field | Type | Description |
|---|---|---|
| title | string | Meta title |
| description | string | Meta description |
| og_image | string | Ảnh chia sẻ MXH |
| keywords | array | Bộ từ khóa SEO |
| canonical_url | string | URL chuẩn |
| target_type | string | page / service / standard / project / blog_post / blog_category |
| target_id | string | ID tài nguyên tương ứng |
| schema_type | string | WebPage / Service / FAQPage / Article |

#### `knowledge_base` (Kiến thức cho AI pre-sales assistant)

| Field | Type | Description |
|---|---|---|
| question | string | Câu hỏi mẫu |
| answer | string | Câu trả lời chuẩn |
| tags | array | gmp / iso / pricing / training / automation / security |
| related_service_ids | array | Dịch vụ liên quan |
| escalation_rule | string | Khi nào cần chuyển cho tư vấn viên |
| is_active | boolean | Bật/tắt snippet |

#### `leads` (CRM Lite)

Lưu lead từ form, booking, chatbot, webinar, checklist download và các nguồn inbound khác để remarketing và phân loại mức độ quan tâm.

### 3.2. Yêu cầu tính năng CMS (Admin Dashboard)

1. **Dashboard Home**
   - Tổng quan số lead mới, lead đủ điều kiện, lịch hẹn sắp tới, proposal đã gửi.
   - Funnel cơ bản: `Landing -> CTA click -> Form submitted -> Booked call -> Qualified -> Proposal`.

2. **Quản lý dịch vụ (Services Module)**
   - CRUD `services`.
   - Quản lý CTA, outcome, proof points, order hiển thị trên trang chủ.

3. **Quản lý chương trình đào tạo (Training Module)**
   - CRUD `training_programs`.
   - Gắn chương trình theo vai trò, theo chuẩn, theo thời lượng và hình thức đào tạo.

4. **Quản lý chuẩn / lĩnh vực (Standards Module)**
   - CRUD `standards_pages`.
   - Liên kết mỗi chuẩn với pain points, FAQ, dịch vụ phù hợp, case liên quan.

5. **Quản lý dự án / case study (Projects Module)**
   - CRUD `projects`.
   - Hỗ trợ ẩn danh khách hàng và chọn metric được phép công bố.

6. **Quản lý lead & lịch hẹn (Leads + Booking Module)**
   - Bảng `consultation_requests` có filter theo trạng thái, dịch vụ quan tâm, nguồn traffic.
   - Tạo và cập nhật `assessment_bookings`.
   - Ghi chú follow-up và gán owner phụ trách.

7. **Quản lý Blog (Blog Module)**
   - CRUD bài viết blog, category, tag.
   - Hỗ trợ `draft`, `schedule publish`, `publish`.
   - Chèn CTA động từ blog sang form tư vấn hoặc trang dịch vụ.

8. **Visual Builder (Website Module)**
   - Admin chỉnh text trực tiếp trên landing page và các page chính.
   - Lưu thay đổi vào `pages` theo section.

9. **Thư viện Media**
   - Upload ảnh, icon, video demo, case screenshots lên Firebase Storage.
   - Quản lý asset cho landing page, project page và blog.

10. **Trợ lý AI cho Content & Pre-sales**
    - Gợi ý tiêu đề, CTA, FAQ, dàn ý blog, email follow-up.
    - Tạo bản nháp câu trả lời tư vấn sơ bộ từ `knowledge_base`.

11. **Tracking & SEO**
    - Quản lý `seo_configs`.
    - Cấu hình Pixel/GA4/UTM tracking.
    - Tự động cập nhật sitemap, schema, metadata xã hội.
    - Theo dõi hiệu suất theo URL, dịch vụ, chuẩn và bài blog.

### 3.3. Bảo mật & phân quyền (Security)

- **Đăng nhập Admin**
  - Không public route admin trên menu website.
  - Role đề xuất: `admin`, `editor`, `consultant`, `sales`.

- **Firestore Rules (định hướng)**
  - `consultation_requests`, `assessment_bookings`, `leads`: create có validate, read/write bởi admin/consultant.
  - `services`, `training_programs`, `standards_pages`, `projects`, `pages`, `seo_configs`, `faq_items`: read public nếu published/active, write bởi admin/editor.
  - `knowledge_base`: read/write bởi admin hoặc service account.
  - `blog_posts`, `blog_categories`: read public nếu published, write bởi admin/editor.

- **Audit log**
  - Ghi lại thay đổi quan trọng liên quan claim, chỉ số case study, FAQ tư vấn, CTA, SEO và trạng thái lead.

- **Nguyên tắc compliance**
  - Không hiển thị promise kiểu “đảm bảo đạt chứng nhận” nếu chưa được duyệt.
  - Mọi nội dung chuyên môn GMP/ISO phải có chủ sở hữu duyệt trước khi publish.

### 3.4. Hệ thống AI tư vấn sơ bộ (AI Pre-sales Assistant)

- **Luồng hoạt động:**
  1. Người dùng hỏi về GMP/ISO, AI automation hoặc đào tạo.
  2. Bot tìm context trong `knowledge_base`, `services`, `standards_pages`, `faq_items`.
  3. Bot trả lời trong phạm vi nội dung đã duyệt.
  4. Nếu câu hỏi vượt ngưỡng tư vấn sơ bộ, bot chuyển sang CTA để lại thông tin hoặc đặt lịch với chuyên gia.

- **Ràng buộc trả lời:**
  - Không đưa ra kết luận thay cho đánh giá chính thức của chuyên gia GMP/ISO.
  - Không bịa claim, không cam kết “pass audit” hoặc “đạt chứng nhận” nếu không có dữ liệu được phê duyệt.
  - Không suy diễn giá hoặc timeline nếu chưa có gói dịch vụ tương ứng trong CMS.
  - Luôn ưu tiên CTA hợp lệ: để lại nhu cầu, đặt lịch discovery call, hoặc xem trang dịch vụ phù hợp.

## 4. Kế hoạch triển khai (Prioritization - RICE)

| Tính năng | Reach | Impact | Confidence | Effort | RICE | Priority |
|---|---:|---:|---:|---:|---:|---|
| Landing page AI MIND + CTA + form lead | 100% | 3 | 100% | 1 | 300 | Must Have |
| Booking / consultation request flow | 100% | 3 | 95% | 1 | 285 | Must Have |
| CMS quản lý dịch vụ và nội dung chính | 100% | 3 | 90% | 2 | 135 | Must Have |
| Standards pages + service detail pages | 80% | 3 | 85% | 2 | 102 | Must Have |
| Dashboard lead pipeline cơ bản | 100% | 2 | 85% | 2 | 85 | Should Have |
| Projects / case study module | 70% | 2 | 85% | 2 | 59.5 | Should Have |
| Blog module + SEO foundation | 70% | 2 | 80% | 2 | 56 | Should Have |
| AI pre-sales assistant dựa trên knowledge base | 60% | 2 | 70% | 3 | 28 | Should Have |
| Visual Builder chỉnh nội dung landing page | 30% | 2 | 80% | 4 | 12 | Could Have |

**Roadmap đề xuất:**

1. **Phase 1 (MVP Lead Engine):** Landing page + Service pages + Lead form + Booking + CRM tối thiểu.
2. **Phase 2 (Trust & Content Ops):** Standards pages + Projects + CMS hoàn chỉnh + SEO + dashboard lead.
3. **Phase 3 (Scale):** AI pre-sales assistant + Visual Builder + automation follow-up + mở rộng knowledge hub.

## 5. API Definition (Ví dụ cho AI Agent)

```javascript
// src/services/services.js
export const getPublishedServices = async () => { ... } // Public
export const createService = async (serviceData) => { ... } // Admin only
export const updateService = async (serviceId, payload) => { ... } // Admin only

// src/services/training.js
export const getPublishedTrainingPrograms = async () => { ... } // Public
export const createTrainingProgram = async (payload) => { ... } // Admin only

// src/services/leads.js
export const createConsultationRequest = async (leadData) => { ... } // Public
export const updateConsultationStatus = async (leadId, payload) => { ... } // Admin/Consultant

// src/services/bookings.js
export const createAssessmentBooking = async (bookingData) => { ... } // Admin/Server
export const completeAssessmentBooking = async (bookingId, summary) => { ... } // Admin/Consultant

// src/services/standards.js
export const getPublishedStandardsPages = async () => { ... } // Public
export const updateStandardsPage = async (pageId, payload) => { ... } // Admin only

// src/services/projects.js
export const getPublishedProjects = async () => { ... } // Public
export const createProject = async (projectData) => { ... } // Admin only

// src/services/blog.js
export const getPublishedPosts = async (filters) => { ... } // Public
export const createPost = async (postData) => { ... } // Admin only
export const publishPost = async (postId) => { ... } // Admin only

// src/services/content.js
export const updatePageContent = async (pageId, contentMap) => { ... } // Admin only
export const saveSeoConfig = async (config) => { ... } // Admin only
export const saveFaqItems = async (payload) => { ... } // Admin only
```

## 6. KPI thành công (Success Metrics)

- Tỉ lệ click vào CTA chính từ landing page >= 6%.
- Tỉ lệ gửi form hoặc đặt lịch từ traffic chất lượng >= 3.5%.
- Tỉ lệ lead được phản hồi trong 2 giờ làm việc >= 90%.
- Tỉ lệ `consultation_requests` chuyển thành `booked call` >= 25%.
- Tỉ lệ `booked call` chuyển thành `qualified opportunity` >= 50%.
- Tỉ lệ `qualified opportunity` chuyển thành `proposal_sent` >= 35%.
- Tỉ lệ `proposal_sent` chuyển thành `won` >= 20%.
- Organic sessions từ blog và standards pages đạt >= 30% tổng traffic sau 6 tháng.
- Tối thiểu 10 từ khóa chính về `AI GMP`, `AI ISO`, `GMP automation`, `ISO digitization` vào Top 20 sau 4-6 tháng.
- Tỉ lệ case study / project page được click từ landing hoặc blog >= 8%.
