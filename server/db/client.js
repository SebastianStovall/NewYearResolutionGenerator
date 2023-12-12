// this is to ensure that we only connect to one instance of Prisma
import { PrismaClient } from "@prisma/client";

export const prisma =
    global.prisma || new PrismaClient()
