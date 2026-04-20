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

## 12) Firebase Setup & Deploy Checklist

Các vấn đề đã gặp và cách xử lý khi setup Firebase + deploy Vercel cho project trong monorepo.

### 12.1. Firebase Lazy Initialization (BẮT BUỘC)

**Vấn đề:** `initializeApp()` + `getAuth()` / `getFirestore()` ở module level gây crash `auth/invalid-api-key` khi Next.js static generation (build time không có env vars).

**Giải pháp:** Dùng lazy initialization pattern — KHÔNG export instance trực tiếp, export function getter:

```typescript
// ❌ SAI - crash khi build
export const db = getFirestore(app);

// ✅ ĐÚNG - lazy init
let _db: Firestore | null = null;
export function getDb(): Firestore {
  if (!_db) _db = getFirestore(getFirebaseApp());
  return _db;
}
```

Tất cả service files (`services/*.ts`) phải gọi `const db = getDb()` bên trong mỗi function, KHÔNG dùng module-level `db`.

### 12.2. Firebase CLI Login

**Vấn đề:** `firebase login` không chạy được trong non-interactive terminal (Claude Code, CI/CD).

**Giải pháp:**
- Chạy `firebase login` trong terminal riêng (CMD/PowerShell/Git Bash) — lệnh này cần mở trình duyệt.
- Cho CI/CD: dùng `firebase login:ci` để tạo token, rồi set `FIREBASE_TOKEN` env var.

### 12.3. Firestore Rules & Seed Script

**Vấn đề:** Seed script tạo user rồi ghi Firestore, nhưng rules yêu cầu role `admin` để write → chicken-and-egg problem. Thêm nữa, nếu user đã tồn tại (`auth/email-already-in-use`), script cũ không sign in lại → không authenticated → permission denied cho các writes tiếp theo.

**Giải pháp:**
1. Seed script phải import cả `signInWithEmailAndPassword` và xử lý case user đã tồn tại:
   ```javascript
   } catch (err) {
     if (err.code === "auth/email-already-in-use") {
       const cred = await signInWithEmailAndPassword(auth, email, password);
       await setDoc(doc(db, "users", cred.user.uid), { ... }, { merge: true });
     }
   }
   ```
2. Tạm mở Firestore rules cho authenticated users write → chạy seed → restore rules bảo mật ngay sau đó.
3. Luôn deploy rules lại sau khi seed xong.

### 12.4. Vercel Monorepo Root Directory

**Vấn đề:** Khi Git repo root (`Son_Webapp/`) khác với Next.js project folder (`ai-mind/`), Vercel build fail ngay lập tức (0s duration, "Unexpected error") vì không tìm thấy `package.json` ở root.

**Giải pháp:**
- Set **Root Directory** trong Vercel project settings = `ai-mind` (tên subfolder chứa Next.js project).
- Có thể set qua Vercel Dashboard (Settings → General → Root Directory) hoặc API:
  ```bash
  curl -X PATCH "https://api.vercel.com/v9/projects/{projectId}?teamId={teamId}" \
    -H "Authorization: Bearer {token}" \
    -H "Content-Type: application/json" \
    -d '{"rootDirectory":"ai-mind"}'
  ```
- **Lưu ý:** Khi root directory đã set, CLI deploy (`vercel --prod`) phải chạy từ **repo root**, KHÔNG phải từ subfolder (sẽ bị lỗi path `ai-mind/ai-mind`). Nhưng git push auto-deploy hoạt động bình thường.

### 12.5. Vercel Environment Variables

**Vấn đề:** Firebase config là `NEXT_PUBLIC_*` nên Vercel cảnh báo visible to visitors — đây là bình thường cho Firebase client SDK (security nằm ở Firestore rules, không phải API key).

**Quy trình thêm env vars:**
```bash
echo "value" | npx vercel env add NEXT_PUBLIC_FIREBASE_API_KEY production
```
Cần thêm 7 biến: `API_KEY`, `AUTH_DOMAIN`, `PROJECT_ID`, `STORAGE_BUCKET`, `MESSAGING_SENDER_ID`, `APP_ID`, `MEASUREMENT_ID`.

### 12.6. Deploy Sequence Chuẩn

Thứ tự deploy đúng khi setup project mới:

1. Tạo Firebase project → Enable Firestore (asia-southeast1), Authentication (Email/Password), Storage.
2. Lấy Firebase config → tạo `.env.local`.
3. Cập nhật `.firebaserc` đúng project ID.
4. `firebase login` (terminal riêng) → `firebase deploy --only firestore:rules,firestore:indexes,storage`.
5. Tạm mở rules → `node scripts/seed-firestore.mjs` → restore rules → deploy rules lại.
6. Thêm env vars vào Vercel → set Root Directory nếu monorepo → push code.

### 12.7. `.gitignore` cho Firebase project

Đảm bảo `.gitignore` có:
```
.env*
!.env.local.example
.vercel
```
- `.env.local` KHÔNG được commit (chứa API keys).
- `.env.local.example` phải commit (template cho team members).
