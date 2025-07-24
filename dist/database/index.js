"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
exports.connectDatabase = connectDatabase;
exports.disconnectDatabase = disconnectDatabase;
exports.checkDatabaseHealth = checkDatabaseHealth;
const prisma_1 = require("../generated/prisma");
exports.prisma = new prisma_1.PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});
// Database connection utility
async function connectDatabase() {
    try {
        await exports.prisma.$connect();
        console.log('Database connected successfully');
    }
    catch (error) {
        console.error('Database connection failed:', error);
        throw error;
    }
}
// Graceful shutdown
async function disconnectDatabase() {
    try {
        await exports.prisma.$disconnect();
        console.log('Database disconnected successfully');
    }
    catch (error) {
        console.error('Database disconnection failed:', error);
        throw error;
    }
}
// Health check
async function checkDatabaseHealth() {
    try {
        await exports.prisma.$queryRaw `SELECT 1`;
        return true;
    }
    catch (error) {
        console.error('Database health check failed:', error);
        return false;
    }
}
//# sourceMappingURL=index.js.map