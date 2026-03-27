# AGENT GUIDE - Son Webapp

Tài liệu này định nghĩa cách làm việc chuẩn cho project web app với mục tiêu:
- Hiệu năng tốt ngay từ MVP.
- Chi phí hạ tầng tối ưu theo từng giai đoạn.
- Deploy ổn định, nhanh trên Vercel.
- Dễ mở rộng khi product tăng trưởng.

## 1) North Star

Mọi quyết định kỹ thuật ưu tiên theo thứ tự:
1. Tốc độ ra tính năng đúng và ổn định.
2. Trải nghiệm người dùng (Core Web Vitals, UX mượt).
3. Tổng chi phí vận hành (hosting + DB + observability).
4. Khả năng maintain dài hạn.

## 2) Stack Mặc Định (Khuyến nghị)

- Frontend/App: `Next.js (App Router) + TypeScript strict`.
- UI: `TailwindCSS` (có thể thêm component system như shadcn/ui khi cần).
- Validation: `zod`.
- ORM/query layer: `Drizzle` hoặc `Prisma`.
- Database chính: `PostgreSQL`.
- Cache/queue nhẹ: `Upstash Redis` (chỉ bật khi có nhu cầu thực).
- Auth: `Clerk` hoặc `Auth.js` tùy ngân sách và mức custom.
- Deploy: `Vercel`.

Nếu chưa có yêu cầu đặc biệt, giữ stack tối giản để giảm chi phí và độ phức tạp.

## 3) Kiến Trúc Ứng Dụng

- Ưu tiên Server Components cho phần render không cần tương tác.
- Chỉ dùng Client Components khi có state/UI interaction thật sự.
- Tách rõ:
  - `app/` cho route + UI.
  - `lib/` cho service, helper, db, auth.
  - `features/` cho business modules theo domain.
- Mọi input từ user/API bắt buộc qua schema validation (`zod`).
- API contract ổn định, version hóa khi có breaking changes.

## 4) Performance Baseline (Bắt buộc)

- Không fetch dư dữ liệu; chỉ select cột cần thiết.
- Áp dụng cache đúng chỗ:
  - Static/public data: cache dài.
  - Data theo user: cache ngắn hoặc no-store.
- Dùng dynamic import cho phần nặng, ít dùng.
- Tối ưu ảnh bằng `next/image`.
- Theo dõi bundle size định kỳ, tránh kéo dependency lớn không cần thiết.
- Mục tiêu Web Vitals:
  - LCP < 2.5s
  - INP < 200ms
  - CLS < 0.1

## 5) Database Với Chi Phí Hợp Lý

### Giai đoạn MVP (chi phí thấp nhất)
- Dùng PostgreSQL managed có free tier/entry tier tốt:
  - `Neon` hoặc `Supabase`.
- Chỉ 1 database chính; chưa tách read/write nếu chưa cần.
- Thiết kế index theo query thực tế, không over-optimize sớm.

### Khi traffic tăng
- Bật connection pooling (rất quan trọng với serverless).
- Thêm Redis cache cho hot keys / rate limit / session tạm.
- Tối ưu query trước khi scale gói DB.

### Nguyên tắc bắt buộc với serverless DB
- Dùng pooled connection string cho production.
- Không tạo db client mới mỗi request.
- Giới hạn N+1 query, ưu tiên batching.
- Migrations phải versioned và chạy qua CI/CD.

## 6) Vercel Deployment Standard

- Mỗi nhánh tạo Preview Deployment để QA sớm.
- `main` -> Production.
- Environment variables tách rõ:
  - `Development`
  - `Preview`
  - `Production`
- Bật:
  - Vercel Analytics
  - Error tracking (Sentry hoặc tương đương)
- Chọn region gần user chính (ưu tiên thấp latency).

## 7) CI/CD Checklist

Mỗi pull request cần pass:
1. Type check.
2. Lint.
3. Unit/integration test tối thiểu cho phần logic mới.
4. Build thành công.

Không merge nếu thiếu migration khi có thay đổi schema DB.

## 8) Security & Reliability Baseline

- Không commit secrets.
- Rate limit các endpoint nhạy cảm (auth, payment, webhook).
- Dùng prepared statements/ORM để tránh SQL injection.
- Verify webhook signature bắt buộc.
- Có cron/job backup dữ liệu quan trọng (tùy mức critical).

## 9) Coding Conventions

- Ưu tiên code rõ ràng, dễ đọc hơn “thông minh quá mức”.
- Function nhỏ, single responsibility.
- Đặt tên nhất quán theo domain.
- Comment chỉ thêm khi logic khó.
- Tránh phụ thuộc thư viện nếu native/platform đã đủ.

## 10) Definition of Done (Mỗi tính năng)

Một task chỉ xem là hoàn thành khi:
1. Chạy ổn trên local + preview.
2. Có xử lý loading/error/empty state.
3. Có logging đủ để debug production.
4. Đã cân nhắc chi phí runtime/db cho flow mới.
5. Có tài liệu ngắn trong README/changelog nếu ảnh hưởng cách vận hành.

## 11) Ưu Tiên Quyết Định Kỹ Thuật

Khi có nhiều phương án, chọn theo thứ tự:
1. Phương án đơn giản nhất đáp ứng yêu cầu.
2. Phương án có tổng chi phí thấp hơn trong 3-6 tháng.
3. Phương án dễ thay thế/migrate khi scale.

Nguyên tắc: Build nhỏ, đo lường sớm, tối ưu đúng điểm nghẽn thực tế.
