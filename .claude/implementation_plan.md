# Son Skool Implementation Plan (AI Runbook Edition)

## 1. Muc tieu

Tai lieu nay huong dan trien khai he thong Son Skool theo PRD `PRD_Son_Skool.md`, tap trung vao:

- Ban khoa hoc online AI/Automation.
- Quan ly don hang va cap quyen hoc.
- Dieu huong hoc vien vao cong dong Skool.
- Van hanh CMS de chinh gia, noi dung, SEO va tracking.

## 2. Nguyen tac trien khai

- Chia nho theo phase, moi phase co acceptance criteria ro rang.
- Uu tien duong di ngan nhat de chot doanh thu (Landing -> Checkout -> Paid -> Access).
- Moi thay doi lien quan gia, quyen hoc, thanh toan phai co log va test.
- Tranh hard-code: noi dung web, gia, SEO, tracking lay tu CMS/Firestore.

## 3. Scope theo PRD

### In-scope

- Landing page + lead form.
- Checkout + tao `orders`.
- Quan ly `courses` trong CMS.
- Cap quyen hoc + gui huong dan vao Skool.
- Dashboard co funnel co ban va tracking nguon traffic.
- Knowledge base + AI sales chatbot ban dau.
- Quan ly SEO config.

### Out-of-scope cho MVP

- Learning player phuc tap nhu LMS day du.
- He thong affiliate day du.
- Automation email da kenh phuc tap (co the them o phase sau).

## 4. Ke hoach theo phase

## Phase 1 - MVP Revenue Flow

### Muc tieu

Kich hoat duoc luong co doanh thu dau tien: user vao landing, dang ky/mua khoa hoc, he thong luu don va admin theo doi duoc.

### Cong viec chinh

1. Landing + Form dang ky
- Tao section Hero, Benefits, Curriculum, Testimonials, CTA.
- Form thu thap: ho ten, so dien thoai, email, muc tieu hoc.
- Luu lead vao `leads`.

2. Checkout + Don hang
- Tao checkout flow cho 1 hoac nhieu khoa hoc.
- Luu `orders` voi `payment_status = pending`.
- Ho tro coupon co ban (neu co san trong scope sprint).

3. Catalog khoa hoc public
- Render danh sach tu `courses` (chi lay `is_published = true`).
- Hien gia goc, gia sale, cap do, mo ta ngan.

4. Admin login + khung CMS co ban
- Admin route rieng, khong public tren menu client.
- Role `admin` moi duoc truy cap dashboard.

### Acceptance criteria

- Tao duoc lead moi va xem duoc tren Firestore.
- Tao duoc order moi voi day du thong tin thanh toan.
- Danh sach khoa hoc tren frontend lay du lieu dong tu Firestore.
- Admin vao duoc dashboard va xem duoc danh sach order.

## Phase 2 - Core CMS and Access Control

### Muc tieu

Hoan thien bo may van hanh: quan ly khoa hoc, cap quyen hoc, tracking doanh thu va funnel.

### Cong viec chinh

1. Courses module (CMS)
- CRUD `courses`: title, slug, level, pricing, publish status, skool_group_url.
- Validate du lieu gia va trang thai khoa hoc.

2. Orders module (CMS)
- Bang order co filter theo `payment_status`, `access_status`, `utm_source`.
- Update trang thai thanh toan.
- Nut cap lai quyen hoc/thu moi vao Skool.

3. Student profile
- Upsert `students` sau khi order paid.
- Luu `enrolled_courses`, `skool_profile_url`, `tags`.

4. Access flow sau thanh toan
- Khi `payment_status = paid`: set `access_status = granted`.
- Danh dau `skool_invite_sent` sau khi gui huong dan.

5. Tracking va SEO
- Quan ly `seo_configs` trong CMS.
- Luu UTM theo order, hien funnel co ban tren dashboard.

### Acceptance criteria

- Admin tao/sua/xoa khoa hoc khong loi.
- Order da thanh toan duoc cap quyen hoc trong luong xu ly.
- Co the loc va theo doi order theo trang thai.
- SEO config cap nhat len website dung.

## Phase 3 - Scale and AI Experience

### Muc tieu

Tang ti le chot don va nang hieu qua van hanh qua AI va noi dung dong.

### Cong viec chinh

1. Knowledge Base manager
- CRUD `knowledge_base`.
- Taxonomy tags: pricing, curriculum, support, skool.

2. AI Sales Chatbot
- Query context tu `knowledge_base` + `courses`.
- Tra loi trong pham vi du lieu duoc duyet.
- Fallback: moi de lai thong tin de tu van vien lien he.

3. Visual Builder (website module)
- Chinh text theo section va luu vao `pages`.
- Ho tro rollback noi dung co ban.

4. Content assistant
- Goi AI de goi y CTA, mo ta khoa hoc, FAQ, email follow-up.

### Acceptance criteria

- Admin quan ly duoc Q&A cho chatbot.
- Chatbot tra loi dung ngu canh va khong "bia".
- Noi dung trang chu co the cap nhat tu CMS ma khong can deploy lai.

## 5. Backlog ky thuat xuyen suot

1. Security rules
- Firestore rules dung theo PRD.
- Tach quyen public/admin/service account.

2. Audit log
- Ghi log thay doi gia khoa hoc, cap quyen, hoan tien.

3. Test strategy
- Unit test cho service quan trong: orders, access, courses.
- Integration test cho flow Checkout -> Paid -> Granted.
- UAT checklist cho admin dashboard.

4. Deployment
- Environment tách `dev/staging/prod`.
- Secret quan ly qua env manager.
- Co rollback plan cho release quan trong.

## 6. KPI va gate truoc go-live

- Landing -> Paid >= 2.5%.
- Payment success >= 85%.
- Grant access trong 5 phut >= 95%.
- Ty le vao Skool sau thanh toan >= 70%.
- Lead duoc cham soc trong 24h >= 90%.

Neu chua dat gate, uu tien sua flow thanh toan va onboarding truoc khi mo rong tinh nang.

## 7. Checklist ban giao moi phase

1. Code + migration + env docs day du.
2. Da test theo checklist phase.
3. Da cap nhat user guide cho admin.
4. Da cap nhat danh sach rui ro ton dong.
5. Co ke hoach rollback neu release gap su co.
