import { PrismaClient } from '@prisma/client';

// INFO: Add ORM config options here
const ormOptions = {};

export const prisma = new PrismaClient(ormOptions);
