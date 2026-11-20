CREATE TABLE `meruRechargeRequests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`walletId` int NOT NULL,
	`transactionId` int NOT NULL,
	`recipientName` varchar(160) NOT NULL,
	`contactPhone` varchar(32) NOT NULL,
	`meruIdentifier` varchar(160) NOT NULL,
	`amountUsdMinor` int NOT NULL,
	`status` enum('PENDING','APPROVED','REJECTED') NOT NULL DEFAULT 'PENDING',
	`reviewedBy` int,
	`reviewedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `meruRechargeRequests_id` PRIMARY KEY(`id`)
);
