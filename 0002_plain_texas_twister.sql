CREATE TABLE `kycRecords` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`fullName` varchar(160) NOT NULL,
	`dateOfBirth` varchar(16) NOT NULL,
	`country` varchar(80) NOT NULL,
	`documentType` varchar(32) NOT NULL,
	`documentNumber` varchar(96) NOT NULL,
	`documentFrontUrl` text,
	`documentBackUrl` text,
	`selfieUrl` text,
	`status` enum('PENDING','UNDER_REVIEW','APPROVED','REJECTED') NOT NULL DEFAULT 'PENDING',
	`rejectionReason` text,
	`reviewedBy` int,
	`reviewedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `kycRecords_id` PRIMARY KEY(`id`)
);
