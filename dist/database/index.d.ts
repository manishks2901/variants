import { PrismaClient } from '../generated/prisma';
export declare const prisma: PrismaClient<{
    log: ("info" | "query" | "warn" | "error")[];
}, never, import("../generated/prisma/runtime/library").DefaultArgs>;
export declare function connectDatabase(): Promise<void>;
export declare function disconnectDatabase(): Promise<void>;
export declare function checkDatabaseHealth(): Promise<boolean>;
//# sourceMappingURL=index.d.ts.map