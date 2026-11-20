import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 128 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }).unique(),
  phone: varchar("phone", { length: 32 }),
  avatarUrl: text("avatarUrl"),
  passwordHash: text("passwordHash"),
  passwordSalt: varchar("passwordSalt", { length: 64 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  accountStatus: mysqlEnum("accountStatus", ["ACTIVE", "SUSPENDED", "BLOCKED"]).default("ACTIVE").notNull(),
  accountStatusUntil: timestamp("accountStatusUntil"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export const wallets = mysqlTable("wallets", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  currency: varchar("currency", { length: 8 }).notNull(),
  balanceMinor: int("balanceMinor").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export const transactions = mysqlTable("transactions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  walletId: int("walletId"),
  reference: varchar("reference", { length: 64 }).notNull().unique(),
  type: varchar("type", { length: 32 }).notNull(),
  method: varchar("method", { length: 32 }),
  amountMinor: int("amountMinor").notNull(),
  currency: varchar("currency", { length: 8 }).notNull(),
  status: mysqlEnum("status", ["PENDING", "VERIFYING", "APPROVED", "REJECTED", "COMPLETED"]).default("PENDING").notNull(),
  description: text("description"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export const rechargeRequests = mysqlTable("rechargeRequests", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  transactionId: int("transactionId").notNull(),
  method: varchar("method", { length: 32 }).notNull(),
  amountMinor: int("amountMinor").notNull(),
  currency: varchar("currency", { length: 8 }).notNull(),
  providerReference: varchar("providerReference", { length: 128 }),
  senderPhone: varchar("senderPhone", { length: 32 }),
  proofUrl: text("proofUrl"),
  status: mysqlEnum("status", ["PENDING", "VERIFYING", "APPROVED", "REJECTED", "COMPLETED"]).default("PENDING").notNull(),
  reviewedBy: int("reviewedBy"),
  reviewedAt: timestamp("reviewedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const kycRecords = mysqlTable("kycRecords", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  fullName: varchar("fullName", { length: 160 }).notNull(),
  dateOfBirth: varchar("dateOfBirth", { length: 16 }).notNull(),
  country: varchar("country", { length: 80 }).notNull(),
  documentType: varchar("documentType", { length: 32 }).notNull(),
  documentNumber: varchar("documentNumber", { length: 96 }).notNull(),
  documentFrontUrl: text("documentFrontUrl"),
  documentBackUrl: text("documentBackUrl"),
  selfieUrl: text("selfieUrl"),
  status: mysqlEnum("status", ["PENDING", "UNDER_REVIEW", "APPROVED", "REJECTED"]).default("PENDING").notNull(),
  rejectionReason: text("rejectionReason"),
  reviewedBy: int("reviewedBy"),
  reviewedAt: timestamp("reviewedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type Wallet = typeof wallets.$inferSelect;
export type Transaction = typeof transactions.$inferSelect;
export type RechargeRequest = typeof rechargeRequests.$inferSelect;
export type KycRecord = typeof kycRecords.$inferSelect;

export const withdrawalRequests = mysqlTable("withdrawalRequests", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  walletId: int("walletId").notNull(),
  amountMinor: int("amountMinor").notNull(),
  currency: varchar("currency", { length: 8 }).notNull(),
  destination: varchar("destination", { length: 64 }).notNull(),
  method: varchar("method", { length: 32 }).notNull(),
  status: mysqlEnum("status", ["PENDING", "APPROVED", "REJECTED", "COMPLETED"]).default("PENDING").notNull(),
  reviewedBy: int("reviewedBy"),
  reviewedAt: timestamp("reviewedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type WithdrawalRequest = typeof withdrawalRequests.$inferSelect;

export const meruServiceSettings = mysqlTable("meruServiceSettings", {
  id: int("id").primaryKey(),
  priceMinor: int("priceMinor").default(0).notNull(),
  currency: varchar("currency", { length: 8 }).default("HTG").notNull(),
  updatedBy: int("updatedBy"),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type MeruServiceSettings = typeof meruServiceSettings.$inferSelect;

export const exchangeRateSettings = mysqlTable("exchangeRateSettings", {
  id: int("id").primaryKey(),
  htgPerUsdMinor: int("htgPerUsdMinor").default(0).notNull(),
  minimumHtgMinor: int("minimumHtgMinor").default(0).notNull(),
  updatedBy: int("updatedBy"),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ExchangeRateSettings = typeof exchangeRateSettings.$inferSelect;

export const boostageRequests = mysqlTable("boostageRequests", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId"),
  platform: mysqlEnum("platform", ["Facebook", "TikTok"]).notNull(),
  link: text("link").notNull(),
  serviceDescription: text("serviceDescription").notNull(),
  contactPhone: varchar("contactPhone", { length: 32 }).notNull(),
  days: int("days").notNull(),
  dailyPriceMinor: int("dailyPriceMinor").notNull(),
  totalPriceMinor: int("totalPriceMinor").notNull(),
  currency: varchar("currency", { length: 8 }).default("HTG").notNull(),
  status: mysqlEnum("status", ["NEW", "IN_PROGRESS", "CONFIRMED", "COMPLETED", "CANCELLED"]).default("NEW").notNull(),
  reviewedBy: int("reviewedBy"),
  reviewedAt: timestamp("reviewedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type BoostageRequest = typeof boostageRequests.$inferSelect;

export const meruRechargeRequests = mysqlTable("meruRechargeRequests", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  walletId: int("walletId").notNull(),
  transactionId: int("transactionId").notNull(),
  recipientName: varchar("recipientName", { length: 160 }).notNull(),
  contactPhone: varchar("contactPhone", { length: 32 }).notNull(),
  meruIdentifier: varchar("meruIdentifier", { length: 160 }).notNull(),
  amountUsdMinor: int("amountUsdMinor").notNull(),
  feeUsdMinor: int("feeUsdMinor").notNull().default(100),
  totalDebitedUsdMinor: int("totalDebitedUsdMinor").notNull(),
  status: mysqlEnum("status", ["PENDING", "APPROVED", "REJECTED"]).default("PENDING").notNull(),
  reviewedBy: int("reviewedBy"),
  reviewedAt: timestamp("reviewedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type MeruRechargeRequest = typeof meruRechargeRequests.$inferSelect;
