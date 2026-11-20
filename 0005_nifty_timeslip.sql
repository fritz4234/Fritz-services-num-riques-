CREATE TABLE `boostageRequests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int,
	`platform` enum('Facebook','TikTok') NOT NULL,
	`link` text NOT NULL,
	`serviceDescription` text NOT NULL,
	`contactPhone` varchar(32) NOT NULL,
	`days` int NOT NULL,
	`dailyPriceMinor` int NOT NULL,
	`totalPriceMinor` int NOT NULL,
	`currency` varchar(8) NOT NULL DEFAULT 'HTG',
	`status` enum('NEW','IN_PROGRESS','CONFIRMED','COMPLETED','CANCELLED') NOT NULL DEFAULT 'NEW',
	`reviewedBy` int,
	`reviewedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `boostageRequests_id` PRIMARY KEY(`id`)
);
