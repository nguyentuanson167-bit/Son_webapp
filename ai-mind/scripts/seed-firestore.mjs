/**
 * Seed script: populate Firestore with initial data.
 *
 * Usage:
 *   1. Create a Firebase project at https://console.firebase.google.com
 *   2. Enable Firestore, Authentication (Email/Password), and Storage
 *   3. Copy your Firebase config to .env.local
 *   4. Create an admin user in Firebase Auth console
 *   5. Run: node scripts/seed-firestore.mjs
 *
 * Prerequisites: npm install firebase (already installed)
 */

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { readFileSync } from "fs";
import { resolve } from "path";

// Load .env.local
const envPath = resolve(process.cwd(), ".env.local");
let envVars = {};
try {
  const envContent = readFileSync(envPath, "utf-8");
  envContent.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split("=");
    if (key && valueParts.length) {
      envVars[key.trim()] = valueParts.join("=").trim();
    }
  });
} catch {
  console.error("Error: .env.local not found. Copy .env.local.example and fill in your Firebase config.");
  process.exit(1);
}

const firebaseConfig = {
  apiKey: envVars.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: envVars.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: envVars.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: envVars.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envVars.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: envVars.NEXT_PUBLIC_FIREBASE_APP_ID,
};

if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.error("Error: Firebase config missing in .env.local");
  process.exit(1);
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

async function seed() {
  console.log("🔥 Seeding Firestore for project:", firebaseConfig.projectId);

  // 1. Create admin user
  const adminEmail = "admin@aimind.vn";
  const adminPassword = "AiMind@2024!";
  try {
    const cred = await createUserWithEmailAndPassword(auth, adminEmail, adminPassword);
    await setDoc(doc(db, "users", cred.user.uid), {
      email: adminEmail,
      role: "admin",
      created_at: serverTimestamp(),
    });
    console.log(`✅ Admin user created: ${adminEmail} / ${adminPassword}`);
  } catch (err) {
    if (err.code === "auth/email-already-in-use") {
      console.log(`ℹ️  Admin user already exists, signing in...`);
      const cred = await signInWithEmailAndPassword(auth, adminEmail, adminPassword);
      await setDoc(doc(db, "users", cred.user.uid), {
        email: adminEmail,
        role: "admin",
        created_at: serverTimestamp(),
      }, { merge: true });
      console.log(`✅ Signed in as admin: ${adminEmail}`);
    } else {
      console.error("⚠️  Could not create admin user:", err.message);
    }
  }

  // 2. Seed services
  const services = [
    {
      title: "Tư vấn triển khai GMP/ISO kết hợp AI",
      slug: "tu-van-gmp-iso",
      short_description: "Số hóa tài liệu, chuẩn hóa quy trình, đào tạo vận hành GMP/ISO với sự hỗ trợ của AI.",
      long_description: "AI MIND giúp doanh nghiệp dược xây dựng hệ thống tài liệu GMP/ISO đạt chuẩn quốc tế, đồng thời tích hợp AI để tự động hóa các quy trình soát xét, phân loại deviation và theo dõi CAPA.",
      service_type: "consulting",
      target_roles: ["Giám đốc nhà máy", "Trưởng phòng QA/QC", "QA Compliance"],
      standards_supported: ["GMP WHO", "EU GMP", "PIC/S GMP", "ISO 9001", "ISO 13485"],
      deliverables: ["Hệ thống tài liệu GMP/ISO chuẩn hóa", "AI soát lỗi tài liệu tự động", "Quy trình CAPA tracking bằng AI", "Đào tạo nội bộ AI GMP/ISO"],
      outcomes: ["Giảm 70% thời gian chuẩn bị hồ sơ", "100% hồ sơ đạt chuẩn lần nộp đầu tiên"],
      featured_metrics: ["70% giảm thời gian", "100% pass rate", "Zero lỗi thủ công"],
      thumbnail_url: "",
      cta_primary: "Đặt lịch tư vấn GMP/ISO",
      cta_secondary: "",
      is_published: true,
    },
    {
      title: "Xây dựng hệ thống AI & Automation nhà máy Dược",
      slug: "ai-automation",
      short_description: "Triển khai AI Agents, SOP Chatbot, Dashboard chất lượng thời gian thực cho nhà máy dược.",
      long_description: "Dịch vụ xây dựng hệ thống AI & Automation toàn diện cho nhà máy dược.",
      service_type: "automation",
      target_roles: ["IT/Automation Manager", "Giám đốc nhà máy", "Production Manager"],
      standards_supported: ["GMP WHO", "EU GMP", "ISO 9001"],
      deliverables: ["AI Agents xử lý hồ sơ tự động", "SOP Chatbot nội bộ", "Dashboard giám sát chất lượng", "Workflow automation"],
      outcomes: ["Tự động hóa 60% quy trình vận hành", "Giảm 80% thời gian tra cứu SOP"],
      featured_metrics: ["60% tự động hóa", "80% nhanh hơn", "3x phát hiện sớm"],
      thumbnail_url: "",
      cta_primary: "Đặt lịch tư vấn AI & Automation",
      cta_secondary: "",
      is_published: true,
    },
    {
      title: "Đào tạo nội bộ AI GMP/ISO",
      slug: "dao-tao-ai-gmp-iso",
      short_description: "Chương trình đào tạo chuyên sâu giúp đội ngũ nhà máy tự tin vận hành AI trong môi trường GMP/ISO.",
      long_description: "Chương trình đào tạo được thiết kế riêng cho từng vai trò trong nhà máy dược.",
      service_type: "training",
      target_roles: ["QA/QC", "Production", "IT/Automation", "Management"],
      standards_supported: ["GMP WHO", "EU GMP", "ISO 9001", "ISO 13485"],
      deliverables: ["Chương trình đào tạo theo vai trò", "Tài liệu hướng dẫn AI GMP/ISO", "Chứng nhận hoàn thành"],
      outcomes: ["100% nhân sự đạt chuẩn sau đào tạo", "Giảm dependency vào vendor"],
      featured_metrics: ["100% đạt chuẩn", "4-16h đào tạo", "30 ngày hỗ trợ"],
      thumbnail_url: "",
      cta_primary: "Đăng ký đào tạo",
      cta_secondary: "",
      is_published: true,
    },
    {
      title: "Đánh giá hiện trạng (Gap Assessment)",
      slug: "gap-assessment",
      short_description: "Đánh giá toàn diện khoảng cách giữa hiện trạng và yêu cầu GMP/ISO.",
      long_description: "Dịch vụ Gap Assessment giúp doanh nghiệp dược hiểu rõ vị trí hiện tại trong hành trình tuân thủ GMP/ISO.",
      service_type: "assessment",
      target_roles: ["Giám đốc nhà máy", "Trưởng phòng QA/QC", "IT Manager"],
      standards_supported: ["GMP WHO", "EU GMP", "PIC/S GMP", "ISO 9001", "ISO 13485"],
      deliverables: ["Báo cáo Gap Analysis chi tiết", "Đề xuất lộ trình 3-6-12 tháng", "Ước lượng ROI"],
      outcomes: ["Hiểu rõ 100% khoảng cách tuân thủ", "Có lộ trình số hóa rõ ràng"],
      featured_metrics: ["2-3 tuần", "100% coverage", "Lộ trình 12 tháng"],
      thumbnail_url: "",
      cta_primary: "Đặt lịch đánh giá",
      cta_secondary: "",
      is_published: true,
    },
  ];

  for (const svc of services) {
    await addDoc(collection(db, "services"), { ...svc, created_at: serverTimestamp(), updated_at: serverTimestamp() });
  }
  console.log(`✅ Seeded ${services.length} services`);

  // 3. Seed FAQ
  const faqs = [
    { question: "Quy mô doanh nghiệp nào phù hợp?", answer: "AI MIND phục vụ doanh nghiệp dược từ quy mô vừa (50+ nhân sự) đến lớn.", category: "scope", target_page: "home", sort_order: 0, is_active: true },
    { question: "Có ảnh hưởng đến sản xuất khi triển khai không?", answer: "Không. Quy trình triển khai được thiết kế để không làm gián đoạn sản xuất.", category: "implementation", target_page: "home", sort_order: 1, is_active: true },
    { question: "Bao lâu thì thấy kết quả?", answer: "Thông thường sau 4-8 tuần đã có cải thiện rõ rệt.", category: "implementation", target_page: "home", sort_order: 2, is_active: true },
    { question: "Chi phí đầu tư ban đầu thế nào?", answer: "Chi phí phụ thuộc vào quy mô và mức độ tự động hóa. Buổi tư vấn miễn phí sẽ giúp đánh giá chính xác.", category: "pricing", target_page: "home", sort_order: 3, is_active: true },
    { question: "Dữ liệu có an toàn không?", answer: "Toàn bộ dữ liệu được mã hóa end-to-end, lưu trữ trên hạ tầng đạt chuẩn ISO 27001.", category: "security", target_page: "home", sort_order: 4, is_active: true },
    { question: "AI Mind hỗ trợ sau triển khai thế nào?", answer: "Chúng tôi có gói đồng hành vận hành bao gồm giám sát, cập nhật AI, đào tạo bổ sung.", category: "implementation", target_page: "home", sort_order: 5, is_active: true },
  ];

  for (const faq of faqs) {
    await addDoc(collection(db, "faq_items"), { ...faq, created_at: serverTimestamp(), updated_at: serverTimestamp() });
  }
  console.log(`✅ Seeded ${faqs.length} FAQ items`);

  console.log("\n🎉 Seed completed! You can now:");
  console.log(`   - Login at /admin/login with ${adminEmail} / ${adminPassword}`);
  console.log("   - Change the admin password immediately after first login");
}

seed().then(() => process.exit(0)).catch((err) => { console.error(err); process.exit(1); });
