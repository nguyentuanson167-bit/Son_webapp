import {
  collection,
  addDoc,
  getDocs,
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

export type MeetingType = "discovery" | "gap_assessment" | "training_consult";
export type BookingStatus = "scheduled" | "completed" | "cancelled" | "no_show";
export type Channel = "zoom" | "meet" | "onsite" | "phone";

export interface AssessmentBooking {
  id?: string;
  consultation_request_id: string;
  meeting_type: MeetingType;
  scheduled_at: Timestamp;
  channel: Channel;
  attendee_list: string[];
  booking_status: BookingStatus;
  follow_up_summary: string;
  next_action: string;
  created_at?: Timestamp;
  updated_at?: Timestamp;
}

const COLLECTION = "assessment_bookings";

// ─── Create booking ───

export async function createAssessmentBooking(
  data: Omit<AssessmentBooking, "id" | "created_at" | "updated_at">
): Promise<string> {
  const db = getDb();
  const docRef = await addDoc(collection(db, COLLECTION), {
    ...data,
    created_at: serverTimestamp(),
    updated_at: serverTimestamp(),
  });
  return docRef.id;
}

// ─── Get bookings for a lead ───

export async function getBookingsByRequest(
  requestId: string
): Promise<AssessmentBooking[]> {
  const db = getDb();
  const q = query(
    collection(db, COLLECTION),
    where("consultation_request_id", "==", requestId),
    orderBy("scheduled_at", "desc")
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as AssessmentBooking);
}

// ─── Get upcoming bookings ───

export async function getUpcomingBookings(): Promise<AssessmentBooking[]> {
  const db = getDb();
  const q = query(
    collection(db, COLLECTION),
    where("booking_status", "==", "scheduled"),
    orderBy("scheduled_at", "asc")
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as AssessmentBooking);
}

// ─── Complete booking ───

export async function completeAssessmentBooking(
  id: string,
  summary: string,
  nextAction: string
): Promise<void> {
  const db = getDb();
  await updateDoc(doc(db, COLLECTION, id), {
    booking_status: "completed" as BookingStatus,
    follow_up_summary: summary,
    next_action: nextAction,
    updated_at: serverTimestamp(),
  });
}

// ─── Update booking status ───

export async function updateBookingStatus(
  id: string,
  status: BookingStatus
): Promise<void> {
  const db = getDb();
  await updateDoc(doc(db, COLLECTION, id), {
    booking_status: status,
    updated_at: serverTimestamp(),
  });
}
