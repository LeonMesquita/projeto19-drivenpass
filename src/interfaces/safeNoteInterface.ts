import { safe_notes } from "@prisma/client";

export type SafeNoteData = Omit<safe_notes, 'id'>;