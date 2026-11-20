CREATE TABLE `meruServiceSettings` (
	`id` int NOT NULL,
	`priceMinor` int NOT NULL DEFAULT 0,
	`currency` varchar(8) NOT NULL DEFAULT 'HTG',
	`updatedBy` int,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `meruServiceSettings_id` PRIMARY KEY(`id`)
);
