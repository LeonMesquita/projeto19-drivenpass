import { wifis } from "@prisma/client";


export type WifiData = Omit<wifis, 'id'>;