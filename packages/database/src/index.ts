import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, Product } from "./generated/prisma/client.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
export const prisma = new PrismaClient({ adapter });

export { PrismaClientKnownRequestError };
export type { Product, PrismaClient };
