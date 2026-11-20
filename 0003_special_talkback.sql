CREATE TABLE `withdrawalRequests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`walletId` int NOT NULL,
	`amountMinor` int NOT NULL,
	`currency` varchar(8) NOT NULL,
	`destination` varchar(64) NOT NULL,
	`method` varchar(32) NOT NULL,
	`status` enum('PENDING','APPROVED','REJECTED','COMPLETED') NOT NULL DEFAULT 'PENDING',
	`reviewedBy` int,
	`reviewedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `withdrawalRequests_id` PRIMARY KEY(`id`)
);
