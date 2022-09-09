import { documents } from "@prisma/client";

export type DocumentData = Omit<documents, 'id'>;