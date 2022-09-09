import { safe_notes } from "@prisma/client";

export type ISafeNoteData = Omit<safe_notes, 'id'>;