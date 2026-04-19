import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
  type Timestamp,
} from "firebase/firestore";
import { getDb } from "@/lib/firebase";

// ─── Types ───

export type LeadStatus =
  | "new"
  | "qualified"
  | "contacted"
  | "proposal_sent"
  | "won"
  | "lost";

export interface ConsultationRequest {
  id?: string;
  contact_name: string;
  job_title: string;
  company_name: string;
  phone: string;
  email: string;
  factory_scale: string;
  standards_current: string[];
  pain_points: string[];
  service_interest: string[];
  preferred_contact_time: string;
  note: string;
  status: LeadStatus;
  owner_id: string;
  utm_source: string;
  utm_campaign: string;
  created_at?: Timestamp;
  updated_at?: Timestamp;
}

const COLLECTION = "consultation_requests";

// ─── Public: Create lead from form ───

export async function createConsultationRequest(
  data: Omit<ConsultationRequest, "id" | "status" | "owner_id" | "utm_source" | "utm_campaign" | "created_at" | "updated_at"> & {
    utm_source?: string;
    utm_campaign?: string;
  }
): Promise<string> {
  const db = getDb();
  const docRef = await addDoc(collection(db, COLLECTION), {
    ...data,
    status: "new" as LeadStatus,
    owner_id: "",
    utm_source: data.utm_source || getUtmParam("utm_source"),
    utm_campaign: data.utm_campaign || getUtmParam("utm_campaign"),
    created_at: serverTimestamp(),
    updated_at: serverTimestamp(),
  });
  return docRef.id;
}

// ─── Admin: Get all leads ───

export async function getConsultationRequests(
  statusFilter?: LeadStatus
): Promise<ConsultationRequest[]> {
  const db = getDb();
  const ref = collection(db, COLLECTION);
  const q = statusFilter
    ? query(ref, where("status", "==", statusFilter), orderBy("created_at", "desc"))
    : query(ref, orderBy("created_at", "desc"));

  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as ConsultationRequest);
}

// ─── Admin: Get single lead ───

export async function getConsultationRequest(
  id: string
): Promise<ConsultationRequest | null> {
  const db = getDb();
  const snap = await getDoc(doc(db, COLLECTION, id));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as ConsultationRequest;
}

// ─── Admin: Update lead status ───

export async function updateConsultationStatus(
  id: string,
  payload: Partial<Pick<ConsultationRequest, "status" | "owner_id">>
): Promise<void> {
  const db = getDb();
  await updateDoc(doc(db, COLLECTION, id), {
    ...payload,
    updated_at: serverTimestamp(),
  });
}

// ─── Helpers ───

function getUtmParam(key: string): string {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);
  return params.get(key) || "";
}
