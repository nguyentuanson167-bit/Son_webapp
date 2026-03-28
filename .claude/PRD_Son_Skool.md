# Product Requirements Document (PRD) - Son Skool Platform

## 1. Tổng quan dự án (Project Overview)

- **Tên dự án:** Son Skool (Visual CMS + Sales System)
- **Mục tiêu:** Xây dựng hệ thống bán khóa học online về **AI / Automation** và điều hướng học viên vào cộng đồng **Skool**.
- **Đối tượng khách hàng:** Người đi làm, chủ doanh nghiệp nhỏ, freelancer muốn ứng dụng AI/Automation để tăng năng suất và doanh thu.
- **Business model:** Bán khóa học lẻ, combo khóa học, gói membership theo tháng/quý.
- **Tech Stack đề xuất:** React (Vite), Tailwind CSS, Firebase (Firestore, Auth, Storage, Functions), tích hợp cổng thanh toán phù hợp thị trường.

## 2. Phân tích website client (định hướng Son Skool)

- **Mô hình kinh doanh cốt lõi:**
  - Bán khóa học online qua landing page (không cần giao hàng vật lý).
  - Upsell vào cộng đồng Skool (group học tập + coaching + tài nguyên cập nhật).
  - Cross-sell các workshop AI, template automation, dịch vụ tư vấn triển khai.

- **Tính năng chính Frontend:**
  - **Landing Page:** Hero offer, roadmap học AI/Automation, case study, feedback học viên.
  - **Conversion:** Nút `Đăng ký học ngay` mở checkout modal hoặc cuộn xuống form đăng ký.
  - **Form đăng ký:** Thu thập Họ tên, SĐT, Email, nhu cầu học, trình độ hiện tại.
  - **Course Catalog:** Danh sách khóa học, giá bán, ưu đãi, mức độ phù hợp theo cấp độ.
  - **Blog Hub (SEO):** Trang danh sách bài viết theo chủ đề AI/Automation, có tag/category, tìm kiếm và lọc nội dung.
  - **Blog Detail:** Trang bài viết chuẩn SEO với mục lục (TOC), CTA nội dung liên quan, gợi ý khóa học phù hợp.
  - **Checkout:** Chọn khóa học/gói học, nhập mã giảm giá, thanh toán, xác nhận tự động.

- **Yêu cầu tích hợp:**
  - Website lấy dữ liệu động từ CMS: nội dung landing page, giá khóa học, trạng thái mở bán, SEO.
  - Blog tự động đồng bộ `sitemap.xml`, metadata Open Graph, và internal link sang trang khóa học.
  - Đồng bộ trạng thái thanh toán để cấp quyền học và gửi hướng dẫn vào Skool.

## 3. Yêu cầu hệ thống Backend (Backend PRD)

### 3.1. Kiến trúc dữ liệu (Firestore Schema)

#### `courses` (Quản lý khóa học)

| Field | Type | Description |
|---|---|---|
| title | string | Tên khóa học (VD: AI Automation Foundation) |
| slug | string | Đường dẫn thân thiện URL |
| short_description | string | Mô tả ngắn |
| long_description | string | Nội dung chi tiết |
| level | string | beginner / intermediate / advanced |
| original_price | number | Giá gốc |
| sale_price | number | Giá ưu đãi |
| currency | string | VND/USD |
| thumbnail_url | string | Ảnh đại diện khóa học |
| is_published | boolean | Bật/tắt hiển thị |
| skool_group_url | string | Link cộng đồng Skool |
| access_type | string | one_time / subscription |
| created_at | timestamp | Thời gian tạo |
| updated_at | timestamp | Thời gian cập nhật |

#### `blog_posts` (Nội dung blog phục vụ SEO)

| Field | Type | Description |
|---|---|---|
| title | string | Tiêu đề bài viết |
| slug | string | URL thân thiện (duy nhất) |
| excerpt | string | Mô tả ngắn hiển thị ở list |
| content_markdown | string | Nội dung bài viết (Markdown/HTML sanitize) |
| cover_image_url | string | Ảnh cover |
| author_name | string | Tên tác giả |
| category_ids | array | Danh sách category liên quan |
| tag_list | array | Danh sách tag SEO |
| related_course_ids | array | Khóa học gợi ý trong CTA |
| reading_time_min | number | Thời gian đọc ước tính |
| publish_status | string | draft / scheduled / published / archived |
| published_at | timestamp | Thời gian publish |
| is_featured | boolean | Đánh dấu bài nổi bật |
| seo_title | string | Meta title cho bài viết |
| seo_description | string | Meta description cho bài viết |
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

#### `orders` (Đơn hàng thanh toán)

| Field | Type | Description |
|---|---|---|
| customer_name | string | Tên học viên |
| phone | string | Số điện thoại |
| email | string | Email nhận thông tin học |
| course_ids | array | Danh sách khóa học đã mua |
| coupon_code | string | Mã giảm giá (nếu có) |
| subtotal_amount | number | Tổng tiền trước giảm giá |
| discount_amount | number | Số tiền giảm |
| total_amount | number | Tổng thanh toán cuối |
| payment_method | string | bank_transfer / gateway / momo... |
| payment_status | string | pending / paid / failed / refunded |
| access_status | string | locked / granted / revoked |
| skool_invite_sent | boolean | Đã gửi link vào Skool chưa |
| created_at | timestamp | Thời gian tạo đơn |
| paid_at | timestamp | Thời gian thanh toán thành công |
| utm_source | string | Nguồn traffic |
| utm_campaign | string | Campaign quảng cáo |

#### `students` (Hồ sơ học viên)

| Field | Type | Description |
|---|---|---|
| full_name | string | Họ tên |
| email | string | Email chính |
| phone | string | SĐT |
| enrolled_courses | array | Danh sách khóa học đã kích hoạt |
| skool_profile_url | string | Link profile Skool |
| progress_map | map | Tiến độ theo khóa học |
| tags | array | Phân nhóm CRM (hot lead, alumni, vip...) |
| created_at | timestamp | Thời gian tạo hồ sơ |

#### `pages` (Nội dung website cho visual editing)

- `home`: hero, benefits, curriculum, testimonials, CTA.
- `courses`: nội dung giới thiệu từng khóa học.
- `blog`: hero blog, featured posts, CTA theo funnel.
- `about`: thông tin thương hiệu/cá nhân giảng viên.

#### `seo_configs` (Cấu hình SEO)

| Field | Type | Description |
|---|---|---|
| title | string | Meta title |
| description | string | Meta description |
| og_image | string | Ảnh chia sẻ MXH |
| keywords | array | Bộ từ khóa SEO |
| canonical_url | string | URL chuẩn |
| target_type | string | page / course / blog_post / blog_category |
| target_id | string | ID tài nguyên tương ứng |
| schema_type | string | WebPage / Course / Article / FAQPage |

#### `knowledge_base` (Kiến thức cho AI Sales Bot)

| Field | Type | Description |
|---|---|---|
| question | string | Câu hỏi mẫu |
| answer | string | Câu trả lời chuẩn |
| tags | array | pricing / curriculum / support / skool |
| related_course_ids | array | Khóa học liên quan |
| is_active | boolean | Bật/tắt snippet |

#### `leads` (CRM Lite)

Lưu lead từ form, chat, webinar, ebook funnel để remarketing.

### 3.2. Yêu cầu tính năng CMS (Admin Dashboard)

1. **Dashboard Home**
- Tổng quan doanh thu, số đơn mới, tỉ lệ thanh toán thành công.
- Funnel theo nguồn traffic: Landing -> Checkout -> Paid.

2. **Quản lý khóa học (Courses Module)**
- CRUD khóa học, giá bán, trạng thái mở bán.
- Gắn link Skool tương ứng từng khóa/gói học.

3. **Quản lý Blog (Blog Module)**
- CRUD bài viết blog, category, tag.
- Hỗ trợ lưu `draft`, `schedule publish`, `publish`.
- Chèn CTA động từ blog sang trang khóa học/đăng ký tư vấn.
- Preview metadata SEO (title/description/OG) trước khi publish.

4. **Quản lý đơn hàng & quyền học (Orders Module)**
- Bảng đơn hàng có filter theo payment/access status.
- Nút cấp lại quyền học hoặc gửi lại email hướng dẫn vào Skool.
- Export CSV/Google Sheets.

5. **Visual Builder (Website Module)**
- Admin chỉnh text trực tiếp trên landing page.
- Lưu thay đổi vào `pages` theo section.

6. **Thư viện Media**
- Upload ảnh/video thumbnail lên Firebase Storage.
- Quản lý asset cho landing page, course page và blog.

7. **Trợ lý AI cho Content & Sales**
- Viết nội dung landing page, email follow-up, kịch bản webinar.
- Tạo biến thể tiêu đề CTA, mô tả khóa học, FAQ và dàn ý bài blog.

8. **Tracking & SEO**
- Quản lý `seo_configs`.
- Cấu hình Pixel/GA4/UTM tracking.
- Tự động cập nhật sitemap + RSS cho blog.
- Theo dõi hiệu suất SEO theo URL blog (impressions, clicks, ranking).

9. **Knowledge Base cho AI Bot**
- CRUD bộ Q&A để bot tư vấn đúng chính sách khóa học và quyền lợi Skool.

### 3.3. Bảo mật & phân quyền (Security)

- **Đăng nhập Admin**
  - Không public trang admin trên menu website.
  - Chỉ user có role `admin` mới truy cập dashboard.

- **Firestore Rules (định hướng)**
  - `orders`: create (public có validate), read/write (admin).
  - `courses`, `pages`, `seo_configs`: read (public), write (admin).
  - `blog_posts`, `blog_categories`: read (public nếu `published`), write (admin).
  - `students`, `knowledge_base`, `leads`: read/write (admin hoặc service account).

- **Audit log**
  - Ghi lại thao tác cập nhật giá khóa học, thay đổi quyền học, hoàn tiền.

### 3.4. Hệ thống AI tư vấn bán khóa học (AI Sales Chatbot)

- **Luồng hoạt động:**
  1. Người dùng hỏi về khóa học AI/Automation.
  2. Bot tìm context trong `knowledge_base` + dữ liệu `courses`.
  3. Trả lời đúng phạm vi thông tin đã duyệt.
  4. Nếu thiếu dữ liệu, bot chuyển hướng để lại thông tin cho tư vấn viên.

- **Ràng buộc trả lời:**
  - Không hứa hẹn kết quả phi thực tế.
  - Không bịa giá/ưu đãi ngoài dữ liệu CMS.
  - Luôn ưu tiên CTA hợp lệ: đăng ký tư vấn hoặc checkout khóa học.

## 4. Kế hoạch triển khai (Prioritization - RICE)

| Tính năng | Reach | Impact | Confidence | Effort | RICE | Priority |
|---|---:|---:|---:|---:|---:|---|
| Landing + Form đăng ký + lưu lead | 100% | 3 | 100% | 1 | 300 | Must Have |
| Checkout + ghi nhận đơn hàng | 100% | 3 | 90% | 2 | 135 | Must Have |
| CMS quản lý khóa học | 100% | 3 | 90% | 2 | 135 | Must Have |
| Cấp quyền học + gửi link Skool | 100% | 3 | 80% | 3 | 80 | Must Have |
| Dashboard tracking doanh thu/funnel | 100% | 2 | 80% | 2 | 80 | Should Have |
| Blog module (CRUD + publish flow) | 60% | 2 | 85% | 2 | 51 | Should Have |
| SEO automation cho blog (sitemap/schema/internal linking) | 60% | 2 | 80% | 1 | 96 | Should Have |
| AI Sales Bot dựa trên Knowledge Base | 100% | 2 | 70% | 3 | 47 | Should Have |
| Visual Builder chỉnh landing page | 20% | 2 | 80% | 4 | 8 | Could Have |

**Roadmap đề xuất:**

1. **Phase 1 (MVP):** Landing page + Lead form + Checkout + Orders.
2. **Phase 2 (Core CMS + SEO Foundation):** Courses management + Blog module + Access control + Tracking.
3. **Phase 3 (Scale):** AI bot tư vấn + Visual Builder + automation marketing + tối ưu SEO blog.

## 5. API Definition (Ví dụ cho AI Agent)

```javascript
// src/services/courses.js
export const getPublishedCourses = async () => { ... } // Public
export const createCourse = async (courseData) => { ... } // Admin only
export const updateCourse = async (courseId, payload) => { ... } // Admin only

// src/services/orders.js
export const createOrder = async (orderData) => { ... } // Public
export const verifyPayment = async (paymentPayload) => { ... } // Server only
export const grantCourseAccess = async (orderId) => { ... } // Admin/Server

// src/services/students.js
export const upsertStudentProfile = async (studentData) => { ... } // Server
export const getStudentCourses = async (studentId) => { ... } // Authenticated student

// src/services/blog.js
export const getPublishedPosts = async (filters) => { ... } // Public
export const getPostBySlug = async (slug) => { ... } // Public
export const createPost = async (postData) => { ... } // Admin only
export const publishPost = async (postId) => { ... } // Admin only

// src/services/content.js
export const updatePageContent = async (pageId, contentMap) => { ... } // Admin
export const saveSeoConfig = async (config) => { ... } // Admin
```

## 6. KPI thành công (Success Metrics)

- Tỉ lệ chuyển đổi Landing -> Paid >= 2.5%.
- Tỉ lệ thanh toán thành công >= 85%.
- Tỉ lệ học viên được cấp quyền học trong 5 phút >= 95%.
- Tỉ lệ vào cộng đồng Skool sau thanh toán >= 70%.
- Tỉ lệ lead được chăm sóc trong 24h >= 90%.
- Organic sessions từ blog đạt >= 25% tổng traffic sau 3 tháng.
- Tối thiểu 10 từ khóa chính lọt Top 20 Google sau 4-6 tháng.
- Tỉ lệ click từ blog sang trang khóa học/đăng ký tư vấn >= 3%.
