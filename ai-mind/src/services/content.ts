import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
  type Timestamp,
} from "firebase/firestore";
import { getDb } from "@/lib/firebase";

// ═══════════════════════════════════════════
//  FAQ Items
// ═══════════════════════════════════════════

export type FaqCategory = "pricing" | "scope" | "security" | "implementation" | "training";

export interface FaqItem {
  id?: string;
  question: string;
  answer: string;
  category: FaqCategory;
  target_page: string;
  sort_order: number;
  is_active: boolean;
  created_at?: Timestamp;
  updated_at?: Timestamp;
}

export async function getActiveFaqItems(targetPage?: string): Promise<FaqItem[]> {
  const db = getDb();
  const constraints = [
    where("is_active", "==", true),
    orderBy("sort_order", "asc"),
  ];
  if (targetPage) {
    constraints.unshift(where("target_page", "==", targetPage));
  }
  const q = query(collection(db, "faq_items"), ...constraints);
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as FaqItem);
}

export async function saveFaqItem(
  data: Omit<FaqItem, "id" | "created_at" | "updated_at">
): Promise<string> {
  const db = getDb();
  const docRef = await addDoc(collection(db, "faq_items"), {
    ...data,
    created_at: serverTimestamp(),
    updated_at: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateFaqItem(
  id: string,
  payload: Partial<Omit<FaqItem, "id" | "created_at">>
): Promise<void> {
  const db = getDb();
  await updateDoc(doc(db, "faq_items", id), {
    ...payload,
    updated_at: serverTimestamp(),
  });
}

export async function deleteFaqItem(id: string): Promise<void> {
  const db = getDb();
  await deleteDoc(doc(db, "faq_items", id));
}

// ═══════════════════════════════════════════
//  Pages (Visual editing content)
// ═══════════════════════════════════════════

export interface PageContent {
  id?: string;
  page_key: string;
  sections: Record<string, unknown>;
  updated_at?: Timestamp;
}

export async function getPageContent(pageKey: string): Promise<PageContent | null> {
  const db = getDb();
  const q = query(
    collection(db, "pages"),
    where("page_key", "==", pageKey)
  );
  const snap = await getDocs(q);
  if (snap.empty) return null;
  const d = snap.docs[0];
  return { id: d.id, ...d.data() } as PageContent;
}

export async function updatePageContent(
  pageId: string,
  sections: Record<string, unknown>
): Promise<void> {
  const db = getDb();
  await updateDoc(doc(db, "pages", pageId), {
    sections,
    updated_at: serverTimestamp(),
  });
}

// ═══════════════════════════════════════════
//  SEO Configs
// ═══════════════════════════════════════════

export type SeoTargetType = "page" | "service" | "standard" | "project" | "blog_post" | "blog_category";
export type SchemaType = "WebPage" | "Service" | "FAQPage" | "Article";

export interface SeoConfig {
  id?: string;
  title: string;
  description: string;
  og_image: string;
  keywords: string[];
  canonical_url: string;
  target_type: SeoTargetType;
  target_id: string;
  schema_type: SchemaType;
}

export async function getSeoConfig(
  targetType: SeoTargetType,
  targetId: string
): Promise<SeoConfig | null> {
  const db = getDb();
  const q = query(
    collection(db, "seo_configs"),
    where("target_type", "==", targetType),
    where("target_id", "==", targetId)
  );
  const snap = await getDocs(q);
  if (snap.empty) return null;
  const d = snap.docs[0];
  return { id: d.id, ...d.data() } as SeoConfig;
}

export async function saveSeoConfig(
  data: Omit<SeoConfig, "id">
): Promise<string> {
  const db = getDb();
  const existing = await getSeoConfig(data.target_type, data.target_id);
  if (existing?.id) {
    await updateDoc(doc(db, "seo_configs", existing.id), data);
    return existing.id;
  }
  const docRef = await addDoc(collection(db, "seo_configs"), data);
  return docRef.id;
}

// ═══════════════════════════════════════════
//  Standards Pages
// ═══════════════════════════════════════════

export interface StandardsPage {
  id?: string;
  title: string;
  slug: string;
  standard_code: string;
  overview: string;
  common_gaps: string[];
  target_segments: string[];
  related_service_ids: string[];
  faq_item_ids: string[];
  publish_status: "draft" | "published" | "archived";
  seo_title: string;
  seo_description: string;
  created_at?: Timestamp;
  updated_at?: Timestamp;
}

export async function getPublishedStandardsPages(): Promise<StandardsPage[]> {
  const db = getDb();
  const q = query(
    collection(db, "standards_pages"),
    where("publish_status", "==", "published"),
    orderBy("title", "asc")
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as StandardsPage);
}

export async function getStandardsBySlug(slug: string): Promise<StandardsPage | null> {
  const db = getDb();
  const q = query(
    collection(db, "standards_pages"),
    where("slug", "==", slug),
    where("publish_status", "==", "published")
  );
  const snap = await getDocs(q);
  if (snap.empty) return null;
  const d = snap.docs[0];
  return { id: d.id, ...d.data() } as StandardsPage;
}

export async function saveStandardsPage(
  data: Omit<StandardsPage, "id" | "created_at" | "updated_at">
): Promise<string> {
  const db = getDb();
  const docRef = await addDoc(collection(db, "standards_pages"), {
    ...data,
    created_at: serverTimestamp(),
    updated_at: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateStandardsPage(
  id: string,
  payload: Partial<Omit<StandardsPage, "id" | "created_at">>
): Promise<void> {
  const db = getDb();
  await updateDoc(doc(db, "standards_pages", id), {
    ...payload,
    updated_at: serverTimestamp(),
  });
}

// ═══════════════════════════════════════════
//  Projects / Case Studies
// ═══════════════════════════════════════════

export interface Project {
  id?: string;
  title: string;
  slug: string;
  client_alias: string;
  sector: string;
  problem_statement: string;
  intervention_summary: string;
  services_used: string[];
  result_metrics: string[];
  testimonial_quote: string;
  cover_image_url: string;
  publish_status: "draft" | "published" | "archived";
  created_at?: Timestamp;
  updated_at?: Timestamp;
}

export async function getPublishedProjects(): Promise<Project[]> {
  const db = getDb();
  const q = query(
    collection(db, "projects"),
    where("publish_status", "==", "published"),
    orderBy("created_at", "desc")
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Project);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const db = getDb();
  const q = query(
    collection(db, "projects"),
    where("slug", "==", slug),
    where("publish_status", "==", "published")
  );
  const snap = await getDocs(q);
  if (snap.empty) return null;
  const d = snap.docs[0];
  return { id: d.id, ...d.data() } as Project;
}

export async function createProject(
  data: Omit<Project, "id" | "created_at" | "updated_at">
): Promise<string> {
  const db = getDb();
  const docRef = await addDoc(collection(db, "projects"), {
    ...data,
    created_at: serverTimestamp(),
    updated_at: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateProject(
  id: string,
  payload: Partial<Omit<Project, "id" | "created_at">>
): Promise<void> {
  const db = getDb();
  await updateDoc(doc(db, "projects", id), {
    ...payload,
    updated_at: serverTimestamp(),
  });
}

// ═══════════════════════════════════════════
//  Training Programs
// ═══════════════════════════════════════════

export interface TrainingProgram {
  id?: string;
  title: string;
  slug: string;
  audience: string[];
  delivery_mode: "onsite" | "online" | "hybrid";
  duration_hours: number;
  module_outline: string[];
  learning_outcomes: string[];
  standards_covered: string[];
  is_featured: boolean;
  is_published: boolean;
  created_at?: Timestamp;
  updated_at?: Timestamp;
}

export async function getPublishedTrainingPrograms(): Promise<TrainingProgram[]> {
  const db = getDb();
  const q = query(
    collection(db, "training_programs"),
    where("is_published", "==", true),
    orderBy("created_at", "asc")
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as TrainingProgram);
}

export async function createTrainingProgram(
  data: Omit<TrainingProgram, "id" | "created_at" | "updated_at">
): Promise<string> {
  const db = getDb();
  const docRef = await addDoc(collection(db, "training_programs"), {
    ...data,
    created_at: serverTimestamp(),
    updated_at: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateTrainingProgram(
  id: string,
  payload: Partial<Omit<TrainingProgram, "id" | "created_at">>
): Promise<void> {
  const db = getDb();
  await updateDoc(doc(db, "training_programs", id), {
    ...payload,
    updated_at: serverTimestamp(),
  });
}

// ═══════════════════════════════════════════
//  Blog
// ═══════════════════════════════════════════

export interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content_markdown: string;
  cover_image_url: string;
  author_name: string;
  category_ids: string[];
  tag_list: string[];
  related_service_ids: string[];
  related_standard_ids: string[];
  reading_time_min: number;
  publish_status: "draft" | "scheduled" | "published" | "archived";
  published_at?: Timestamp;
  is_featured: boolean;
  seo_title: string;
  seo_description: string;
  canonical_url: string;
  created_at?: Timestamp;
  updated_at?: Timestamp;
}

export async function getPublishedPosts(limit?: number): Promise<BlogPost[]> {
  const db = getDb();
  const q = query(
    collection(db, "blog_posts"),
    where("publish_status", "==", "published"),
    orderBy("published_at", "desc")
  );
  const snap = await getDocs(q);
  const posts = snap.docs.map((d) => ({ id: d.id, ...d.data() }) as BlogPost);
  return limit ? posts.slice(0, limit) : posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const db = getDb();
  const q = query(
    collection(db, "blog_posts"),
    where("slug", "==", slug),
    where("publish_status", "==", "published")
  );
  const snap = await getDocs(q);
  if (snap.empty) return null;
  const d = snap.docs[0];
  return { id: d.id, ...d.data() } as BlogPost;
}

export async function createPost(
  data: Omit<BlogPost, "id" | "created_at" | "updated_at">
): Promise<string> {
  const db = getDb();
  const docRef = await addDoc(collection(db, "blog_posts"), {
    ...data,
    created_at: serverTimestamp(),
    updated_at: serverTimestamp(),
  });
  return docRef.id;
}

export async function publishPost(id: string): Promise<void> {
  const db = getDb();
  await updateDoc(doc(db, "blog_posts", id), {
    publish_status: "published",
    published_at: serverTimestamp(),
    updated_at: serverTimestamp(),
  });
}

export interface BlogCategory {
  id?: string;
  name: string;
  slug: string;
  description: string;
  seo_title: string;
  seo_description: string;
  is_active: boolean;
  created_at?: Timestamp;
  updated_at?: Timestamp;
}

export async function getActiveCategories(): Promise<BlogCategory[]> {
  const db = getDb();
  const q = query(
    collection(db, "blog_categories"),
    where("is_active", "==", true),
    orderBy("name", "asc")
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as BlogCategory);
}
