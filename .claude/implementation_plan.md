# AI MIND Implementation Plan (AI Runbook Edition)

## 1. Muc tieu

Tai lieu nay huong dan trien khai he thong AI MIND theo PRD `PRD_AI_Mind.md`, tap trung vao:

- Website dich vu dao tao va tu van AI GMP/ISO cho nha may duoc.
- Thu lead chat luong va dieu phoi discovery call / gap assessment.
- Van hanh CMS de chinh noi dung, dich vu, du an, FAQ, SEO va tracking.
- Xay dung nen tang cho AI pre-sales assistant va content operations.

## 2. Nguyen tac trien khai

- Chia nho theo phase, moi phase co acceptance criteria ro rang.
- Uu tien duong di ngan nhat de tao lead chat luong (Landing -> CTA -> Form/Booking -> Qualified lead).
- Moi thay doi lien quan claim, chi so case study, FAQ compliance phai co log va co nguoi duyet.
- Tranh hard-code: noi dung web, dich vu, FAQ, SEO, tracking lay tu CMS/Firestore.

## 3. Scope theo PRD

### In-scope

- Landing page + lead form + booking flow.
- Quan ly `services`, `training_programs`, `standards_pages`, `projects` trong CMS.
- Dashboard co funnel lead co ban va tracking nguon traffic.
- Knowledge base + AI pre-sales assistant ban dau.
- Quan ly SEO config, FAQ va content pages.

### Out-of-scope cho MVP

- Cong cu danh gia compliance chuyen sau thay the audit chinh thuc.
- Tich hop ERP/MES/LIMS phuc tap trong MVP website.
- Automation email da kenh phuc tap (co the them o phase sau).

## 4. Ke hoach theo phase

## Phase 1 - MVP Lead Engine

### Muc tieu

Kich hoat duoc luong lead dau tien: user vao landing, gui yeu cau tu van/dat lich, he thong luu lead va admin theo doi duoc.

### Cong viec chinh

1. Landing + Form tu van
- Tao section Hero, Pain Points, 3 Pillars, Service Cards, 4 Buoc Chuyen Doi, Expert Proof, FAQ, CTA.
- Form thu thap: ho ten, chuc danh, cong ty, so dien thoai, email, muc tieu, tieu chuan quan tam.
- Luu lead vao `leads`.

2. Consultation request + Booking
- Tao flow gui yeu cau tu van.
- Luu `consultation_requests` voi `status = new`.
- Neu co lich hen tu dong, tao `assessment_bookings` ban dau.

3. Dich vu va page public
- Render danh sach dich vu tu `services` (chi lay `is_published = true`).
- Render trang tong hop `Giải pháp`, `Lĩnh vực GMP`, `ISO Standards`, `Dự án`.

4. Admin login + khung CMS co ban
- Admin route rieng, khong public tren menu client.
- Role `admin` moi duoc truy cap dashboard.

### Acceptance criteria

- Tao duoc lead moi va xem duoc tren Firestore.
- Tao duoc consultation request voi day du thong tin B2B.
- Danh sach dich vu tren frontend lay du lieu dong tu Firestore.
- Admin vao duoc dashboard va xem duoc danh sach lead / booking.

## Phase 2 - Core CMS and Trust Building

### Muc tieu

Hoan thien bo may van hanh: quan ly noi dung dich vu, standards pages, case study, FAQ, tracking funnel va lead ownership.

### Cong viec chinh

1. Services + Training module (CMS)
- CRUD `services`, `training_programs`.
- Validate CTA, standards_supported, outcomes, publish status.

2. Standards + Projects module (CMS)
- CRUD `standards_pages`, `projects`.
- Giu duoc lien ket giua pain point, standards, service va case study.

3. Lead pipeline module
- Bang lead co filter theo `status`, `service_interest`, `utm_source`.
- Gan owner, ghi note, cap nhat next action.

4. FAQ + Content pages
- CRUD `faq_items`, `pages`.
- Chu dong update noi dung hero, process, CTA, section order.

5. Tracking va SEO
- Quan ly `seo_configs` trong CMS.
- Luu UTM theo lead, hien funnel co ban tren dashboard.

### Acceptance criteria

- Admin tao/sua/xoa dich vu, training, standards, project khong loi.
- Lead duoc cap nhat trang thai va ghi chu trong luong xu ly.
- Co the loc va theo doi lead theo trang thai.
- SEO config cap nhat len website dung.

## Phase 3 - Scale and AI Experience

### Muc tieu

Tang ti le dat lich, tang chat luong lead va nang hieu qua van hanh qua AI va noi dung dong.

### Cong viec chinh

1. Knowledge Base manager
- CRUD `knowledge_base`.
- Taxonomy tags: gmp, iso, training, pricing, automation, security.

2. AI Pre-sales Assistant
- Query context tu `knowledge_base` + `services` + `standards_pages`.
- Tra loi trong pham vi du lieu duoc duyet.
- Fallback: moi de lai thong tin de tu van vien lien he.

3. Visual Builder (website module)
- Chinh text theo section va luu vao `pages`.
- Ho tro rollback noi dung co ban.

4. Content assistant
- Goi AI de goi y CTA, mo ta dich vu, FAQ, email follow-up, dan y blog.

### Acceptance criteria

- Admin quan ly duoc Q&A cho chatbot.
- Chatbot tra loi dung ngu canh va khong "bia".
- Noi dung trang chu co the cap nhat tu CMS ma khong can deploy lai.

## 5. Backlog ky thuat xuyen suot

1. Security rules
- Firestore rules dung theo PRD.
- Tach quyen public/admin/service account.

2. Audit log
- Ghi log thay doi claim, FAQ, case metrics, CTA, trang thai lead.

3. Test strategy
- Unit test cho service quan trong: leads, bookings, services, content.
- Integration test cho flow Landing -> Form/Booking -> CRM update.
- UAT checklist cho admin dashboard.

4. Deployment
- Environment tách `dev/staging/prod`.
- Secret quan ly qua env manager.
- Co rollback plan cho release quan trong.

## 6. KPI va gate truoc go-live

- Landing -> Form/Booking >= 3.5%.
- CTA click rate >= 6%.
- Lead duoc cham soc trong 2 gio lam viec >= 90%.
- Consultation request -> Booked call >= 25%.
- Qualified lead -> Proposal >= 35%.

Neu chua dat gate, uu tien sua flow CTA, form, booking va follow-up truoc khi mo rong tinh nang.

## 7. Checklist ban giao moi phase

1. Code + migration + env docs day du.
2. Da test theo checklist phase.
3. Da cap nhat user guide cho admin.
4. Da cap nhat danh sach rui ro ton dong.
5. Co ke hoach rollback neu release gap su co.
