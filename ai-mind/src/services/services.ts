import {
  collection,
  addDoc,
  getDocs,
  getDoc,
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

// ─── Types ───

export type ServiceType =
  | "consulting"
  | "training"
  | "assessment"
  | "automation"
  | "retainer";

export interface Service {
  id?: string;
  title: string;
  slug: string;
  short_description: string;
  long_description: string;
  service_type: ServiceType;
  target_roles: string[];
  standards_supported: string[];
  deliverables: string[];
  outcomes: string[];
  featured_metrics: string[];
  thumbnail_url: string;
  cta_primary: string;
  cta_secondary: string;
  is_published: boolean;
  created_at?: Timestamp;
  updated_at?: Timestamp;
}

const COLLECTION = "services";

// ─── Public ───

export async function getPublishedServices(): Promise<Service[]> {
  const db = getDb();
  const q = query(
    collection(db, COLLECTION),
    where("is_published", "==", true),
    orderBy("created_at", "asc")
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Service);
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const db = getDb();
  const q = query(
    collection(db, COLLECTION),
    where("slug", "==", slug),
    where("is_published", "==", true)
  );
  const snap = await getDocs(q);
  if (snap.empty) return null;
  const d = snap.docs[0];
  return { id: d.id, ...d.data() } as Service;
}

// ─── Admin ───

export async function createService(
  data: Omit<Service, "id" | "created_at" | "updated_at">
): Promise<string> {
  const db = getDb();
  const docRef = await addDoc(collection(db, COLLECTION), {
    ...data,
    created_at: serverTimestamp(),
    updated_at: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateService(
  id: string,
  payload: Partial<Omit<Service, "id" | "created_at">>
): Promise<void> {
  const db = getDb();
  await updateDoc(doc(db, COLLECTION, id), {
    ...payload,
    updated_at: serverTimestamp(),
  });
}

export async function deleteService(id: string): Promise<void> {
  const db = getDb();
  await deleteDoc(doc(db, COLLECTION, id));
}

export async function getService(id: string): Promise<Service | null> {
  const db = getDb();
  const snap = await getDoc(doc(db, COLLECTION, id));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as Service;
}
